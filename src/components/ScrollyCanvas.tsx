"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 75;

const currentFrame = (index: number) => 
  `/sequence/frame_${String(index).padStart(2, "0")}_delay-0.066s.webp`;

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const { scrollYProgress } = useScroll();

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    // Preload all images
    const preloadedImages = [];
    let loadedCount = 0;
    
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedCount++;
        // If it's the first frame, draw it immediately to avoid empty canvas
        if (i === 0 && canvasRef.current) {
          drawFrame(img, canvasRef.current);
        }
      };
      preloadedImages.push(img);
    }
    setImages(preloadedImages);
  }, []);

  const drawFrame = (img: HTMLImageElement, canvas: HTMLCanvasElement) => {
    const context = canvas.getContext("2d");
    if (!context) return;

    const { width: canvasWidth, height: canvasHeight } = canvas;
    const imgRatio = img.width / img.height;
    const canvasRatio = canvasWidth / canvasHeight;

    let drawWidth = canvasWidth;
    let drawHeight = canvasHeight;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      // Canvas is wider than image. Scale to fit width, crop the bottom (align slightly top).
      drawHeight = canvasWidth / imgRatio;
      offsetY = (canvasHeight - drawHeight) * 0.2; // 20% from the top, keeps hair visible but moves face up!
    } else {
      // Canvas is taller than image. Scale to fit height, crop the sides (center horizontally).
      drawWidth = canvasHeight * imgRatio;
      offsetX = (canvasWidth - drawWidth) / 2;
      offsetY = 0; // Align to top
    }

    context.clearRect(0, 0, canvasWidth, canvasHeight);
    context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (!canvasRef.current || images.length === 0) return;
    
    const frame = Math.round(latest);
    const img = images[frame];
    
    if (img && img.complete) {
      drawFrame(img, canvasRef.current);
    }
  });

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        
        // Redraw current frame
        const currentFrameIndex = Math.round(frameIndex.get());
        const img = images[currentFrameIndex];
        if (img && img.complete) {
          drawFrame(img, canvasRef.current);
        }
      }
    };
    
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial resize to match window
    
    return () => window.removeEventListener("resize", handleResize);
  }, [images, frameIndex]);

  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[#121212] z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
