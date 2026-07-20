"use client";

import { useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, useAnimations, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function create3DGlasses() {
  const glassesGroup = new THREE.Group();
  glassesGroup.name = "Custom3DGlasses";

  const frameMaterial = new THREE.MeshStandardMaterial({
    color: "#0A0A0E",
    roughness: 0.2,
    metalness: 0.8,
  });

  const lensMaterial = new THREE.MeshPhysicalMaterial({
    color: "#E0F4FF",
    transparent: true,
    opacity: 0.3,
    roughness: 0.05,
    transmission: 0.9,
  });

  // Sleek, well-proportioned eye frames (torus)
  const eyeRadius = 0.26;
  const tubeRadius = 0.038;
  const frameGeo = new THREE.TorusGeometry(eyeRadius, tubeRadius, 16, 32);

  const leftFrame = new THREE.Mesh(frameGeo, frameMaterial);
  leftFrame.position.set(-0.32, 0, 0);

  const rightFrame = new THREE.Mesh(frameGeo, frameMaterial);
  rightFrame.position.set(0.32, 0, 0);

  // Clear glass lenses
  const lensGeo = new THREE.CircleGeometry(eyeRadius - 0.01, 32);
  const leftLens = new THREE.Mesh(lensGeo, lensMaterial);
  leftLens.position.set(-0.32, 0, 0.01);

  const rightLens = new THREE.Mesh(lensGeo, lensMaterial);
  rightLens.position.set(0.32, 0, 0.01);

  // Center nose bridge
  const bridgeGeo = new THREE.CylinderGeometry(0.03, 0.03, 0.22, 16);
  const bridge = new THREE.Mesh(bridgeGeo, frameMaterial);
  bridge.rotation.z = Math.PI / 2;
  bridge.position.set(0, 0.04, 0);

  // Side temples going back to ears
  const templeGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.7, 16);
  const leftTemple = new THREE.Mesh(templeGeo, frameMaterial);
  leftTemple.rotation.x = Math.PI / 2;
  leftTemple.position.set(-0.6, 0, -0.35);

  const rightTemple = new THREE.Mesh(templeGeo, frameMaterial);
  rightTemple.rotation.x = Math.PI / 2;
  rightTemple.position.set(0.6, 0, -0.35);

  glassesGroup.add(leftFrame, rightFrame, leftLens, rightLens, bridge, leftTemple, rightTemple);
  glassesGroup.scale.set(0.95, 0.95, 0.95);
  glassesGroup.position.set(0, 0.28, 0.52);
  return glassesGroup;
}

function CharacterModel() {
  const group = useRef<THREE.Group>(null);
  const { scene: gltfScene, animations } = useGLTF("/models/character.glb");
  const { actions } = useAnimations(animations, group);
  
  const deskGroupRef = useRef<THREE.Object3D | null>(null);
  const screenLightObjRef = useRef<THREE.Object3D | null>(null);
  const pointLightRef = useRef<THREE.PointLight>(null);
  
  // Track global mouse position across the entire window
  const mousePos = useRef({ x: 0, y: 0 });

  const { scene: rootScene, gl } = useThree();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mousePos.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    gl.toneMapping = THREE.ACESFilmicToneMapping;
    gl.toneMappingExposure = 1.0;

    if (rootScene.environmentRotation) {
      rootScene.environmentRotation.set(5.76, 85.85, 1);
    }
    rootScene.environmentIntensity = 0.55;

    // Attach custom 3D specs to the head bone (spine006 / spine.006)
    const headBone =
      gltfScene.getObjectByName("spine006") ||
      gltfScene.getObjectByName("spine.006");

    if (headBone && !headBone.getObjectByName("Custom3DGlasses")) {
      const glasses = create3DGlasses();
      headBone.add(glasses);
    }

    gltfScene.traverse((child: any) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        child.frustumCulled = true;
        child.material = child.material.clone();

        // 1. Smooth Porcelain White Skin
        if (
          child.name === "Face.002" ||
          child.name === "Ear.001" ||
          child.name === "Neck" ||
          child.name === "Hand"
        ) {
          child.material.color.set("#F2F2F6");
          child.material.roughness = 0.6;
          child.material.metalness = 0.0;
          if (child.material.clearcoat !== undefined) {
            child.material.clearcoat = 0.0;
          }
        }

        // 2. Matte Black Shirt
        if (
          child.name === "BODY.SHIRT" ||
          child.name === "Cube.002" ||
          child.name.toLowerCase().includes("shirt") ||
          child.name.toLowerCase().includes("body")
        ) {
          child.material.color.set("#121216");
          child.material.roughness = 0.8;
          child.material.metalness = 0.0;
        }

        // 3. Hair (Flat pitch black)
        if (
          child.name === "hair" ||
          child.name.toLowerCase().includes("hair") ||
          child.name === "Eyebrow"
        ) {
          child.material.color.set("#050508");
          if (child.material.emissive) {
            child.material.emissive.set("#000000");
          }
          child.material.roughness = 1.0;
          child.material.metalness = 0.0;
          if (child.material.clearcoat !== undefined) {
            child.material.clearcoat = 0.0;
          }
        }
      }
      
      // Hide desk/chair/monitor completely until contact section
      if (child.name === "Plane004") {
        child.visible = false;
        deskGroupRef.current = child;
        
        child.traverse((c: any) => {
          if (c.isMesh && c.material && c.material.name === "Material.027") {
            c.material.color.set("#FFFFFF");
          }
        });
      }

      if (child.name === "screenlight") {
        child.visible = false;
        screenLightObjRef.current = child;
        child.material = child.material.clone();
        child.material.emissive.set("#C8BFFF");
        child.material.emissiveIntensity = 4;
      }

      if (child.name === "footR") child.position.y = 3.36;
      if (child.name === "footL") child.position.y = 3.36;
    });

    if (actions) {
      const intro = actions["introAnimation"];
      if (intro) {
        intro.setLoop(THREE.LoopOnce, 1);
        intro.clampWhenFinished = true;
        intro.play();
      }
      
      const blink = actions["Blink"];
      if (blink) {
        setTimeout(() => { blink.play().fadeIn(0.5); }, 2500);
      }

      ["key1", "key2", "key5", "key6"].forEach(name => {
        if (actions[name]) {
          actions[name].play();
          actions[name].timeScale = 1.2;
        }
      });
    }
  }, [actions, gltfScene, rootScene, gl]);

  useFrame((state) => {
    const scrollY = window.scrollY;
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, scrollY / maxScroll));
    
    // Desk & sitting pose ONLY triggers after Core Stack (when Experience & Achievements start)
    const inContactSection = progress > 0.75;

    // --- Desk visibility ---
    if (deskGroupRef.current) {
      deskGroupRef.current.visible = inContactSection;
    }
    if (screenLightObjRef.current) {
      screenLightObjRef.current.visible = inContactSection;
    }
    if (pointLightRef.current) {
      pointLightRef.current.intensity = inContactSection ? 30 : 0;
    }

    // --- Character body position X & rotation ---
    // Shift character position slightly to the left (x: -3.0) during Experience & Achievements sections
    if (group.current) {
      const targetPosX = inContactSection ? -3.0 : 0;
      const targetRotY = inContactSection ? 0.92 : 0;
      const targetRotX = inContactSection ? 0.12 : 0;
      
      group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, targetPosX, 0.05);
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetRotY, 0.05);
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetRotX, 0.05);
    }

    // --- Head mouse tracking (spine006 / spine.006) ---
    const headBone =
      gltfScene.getObjectByName("spine006") ||
      gltfScene.getObjectByName("spine.006");

    if (headBone) {
      if (!inContactSection) {
        // Shift baseline rotation.x by -0.35 to pull chin UP and make face look straight ahead at eye level
        const targetY = (mousePos.current.x * Math.PI) / 4;
        const targetX = (-mousePos.current.y * Math.PI) / 5 - 0.35;
        
        headBone.rotation.y = THREE.MathUtils.lerp(headBone.rotation.y, targetY, 0.15);
        headBone.rotation.x = THREE.MathUtils.lerp(headBone.rotation.x, targetX, 0.15);
      } else {
        // In desk / contact section: chin up, looking at screen
        headBone.rotation.x = THREE.MathUtils.lerp(headBone.rotation.x, -0.1, 0.08);
        headBone.rotation.y = THREE.MathUtils.lerp(headBone.rotation.y, -0.2, 0.08);
      }
    }

    // --- Camera ---
    const camTargetZ = inContactSection ? 75 : 35;
    const camTargetY = inContactSection ? 8.4 : 11.0;
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, camTargetZ, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, camTargetY, 0.05);
    
    // Look at y=9.5 (mid-chest height) to frame both head AND torso together!
    const lookAtY = inContactSection ? 5 : 9.5;
    state.camera.lookAt(0, lookAtY, 0);
  });

  return (
    <group ref={group} dispose={null} position={[0, -2, 0]}>
      <primitive object={gltfScene} />
      <pointLight
        ref={pointLightRef}
        color={0xc2a4ff}
        intensity={0}
        distance={100}
        decay={3}
        position={[3, 12, 4]}
        castShadow
      />
    </group>
  );
}

useGLTF.preload("/models/character.glb");

export default function GlobalCharacter() {
  return (
    <div className="fixed top-0 left-0 w-full md:w-[45vw] h-screen z-10 pointer-events-none hidden md:block overflow-hidden">
      {/* Soft ambient purple backlight aura */}
      <div 
        className="absolute top-1/2 left-1/2 rounded-full pointer-events-none z-0 opacity-30"
        style={{
          width: "320px",
          height: "320px",
          backgroundColor: "#8a42ff",
          transform: "translate(-50%, -55%)",
          filter: "blur(70px)",
        }}
      />

      <Canvas
        camera={{ position: [0, 13.1, 35], fov: 14.5, zoom: 1.1 }}
        className="w-full h-full relative z-10"
        shadows
        gl={{
          alpha: true,
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.0,
        }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight
          color="#ffffff"
          intensity={0.7}
          position={[5, 12, 10]}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <Environment files="/models/char_enviorment.hdr" />
        
        <CharacterModel />
        
        <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={15} blur={2.5} far={4} />
      </Canvas>
    </div>
  );
}
