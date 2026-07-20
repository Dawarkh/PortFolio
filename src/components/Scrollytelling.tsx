"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent, motion } from "framer-motion";

const FRAME_COUNT = 79;

const currentFrame = (index: number) => 
  `/sequence/frame_${String(index).padStart(2, "0")}_delay-0.066s.webp`;

export default function Scrollytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  // Track scroll progress specifically for THIS 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // Text Animations mapped precisely to the container's scroll progress
  // clamp: true is default, but we provide full range [0..1] just in case
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 1], [1, 1, 0, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2, 1], [0, -100, -100]);

  const opacity2 = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.4, 0.5, 1], [0, 0, 1, 1, 0, 0]);
  const y2 = useTransform(scrollYProgress, [0, 0.2, 0.5, 1], [50, 50, -100, -100]);

  const opacity3 = useTransform(scrollYProgress, [0, 0.5, 0.6, 0.7, 0.8, 1], [0, 0, 1, 1, 0, 0]);
  const y3 = useTransform(scrollYProgress, [0, 0.5, 0.8, 1], [50, 50, -100, -100]);

  useEffect(() => {
    // Preload all images
    const preloadedImages = [];
    
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        // If it's the first frame, draw it immediately
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

    const cw = canvas.width;
    const ch = canvas.height;
    const imgRatio = img.width / img.height;
    const canvasRatio = cw / ch;

    context.clearRect(0, 0, cw, ch);

    // Step 1: Draw a blurred, zoomed-in version as background to fill the entire canvas
    // This eliminates the black bars on the sides
    context.save();
    context.filter = "blur(30px) brightness(0.6)";
    // Scale to cover the entire canvas
    let bgW = cw;
    let bgH = ch;
    let bgX = 0;
    let bgY = 0;
    if (canvasRatio > imgRatio) {
      bgH = cw / imgRatio;
      bgY = (ch - bgH) / 2;
    } else {
      bgW = ch * imgRatio;
      bgX = (cw - bgW) / 2;
    }
    // Draw slightly larger to avoid blur edge artifacts
    context.drawImage(img, bgX - 20, bgY - 20, bgW + 40, bgH + 40);
    context.restore();

    // Step 2: Draw the image with a subtle 1.08x zoom crop to remove edge watermarks (Star & Veo text)
    let drawW, drawH, drawX, drawY;
    if (canvasRatio > imgRatio) {
      drawH = ch;
      drawW = ch * imgRatio;
      drawX = (cw - drawW) / 2;
      drawY = 0;
    } else {
      drawW = cw;
      drawH = cw / imgRatio;
      drawX = 0;
      drawY = (ch - drawH) / 2;
    }

    // 1.0x normal image fit (no zoom/scaling distortion)
    context.drawImage(img, drawX, drawY, drawW, drawH);
  };

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (!canvasRef.current || images.length === 0) return;
    
    const frame = Math.round(latest);
    const img = images[frame];
    
    if (img && img.complete) {
      drawFrame(img, canvasRef.current);
    }
  });

  // Set canvas dimensions to match the window
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Redraw current frame at new size
        const currentIdx = Math.round(frameIndex.get());
        const img = images[currentIdx];
        if (img && img.complete) {
          drawFrame(img, canvasRef.current);
        }
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [images, frameIndex]);

  return (
    <div ref={containerRef} className="relative h-[500vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[#121212]">
        
        {/* Canvas sized to the window, manually drawn with blurred background fill */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-0"
        />

        {/* Precise dark blur patch placed directly over the top-right star logo position */}
        <div className="absolute top-[3%] right-[3%] w-28 h-28 bg-[#121212] rounded-full filter blur-xl z-20 pointer-events-none" />

        {/* Overlay Text Container */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {/* Section 1 */}
          <motion.div
            style={{ opacity: opacity1, y: y1 }}
            className="absolute inset-0 flex flex-col items-center justify-center p-8 pointer-events-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-xl text-center">
              Dawar Khursheed
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-gray-300 font-light tracking-wide text-center">
              Finance • Analytics • Research
            </p>
            <a
              href="/Dawar_Khursheed_CV.pdf"
              download
              className="mt-8 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full font-medium tracking-wide transition-all duration-300 backdrop-blur-md"
            >
              Download my CV
            </a>
          </motion.div>

          {/* Section 2 */}
          <motion.div
            style={{ opacity: opacity2, y: y2 }}
            className="absolute inset-0 flex flex-col items-start justify-center p-12 md:p-24 max-w-4xl"
          >
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white drop-shadow-xl">
              Data-driven decisions.
            </h2>
            <p className="mt-4 text-lg md:text-xl text-gray-300 font-light max-w-lg">
              Turning complex financial data into actionable strategy through valuation, modelling, and market research.
            </p>
          </motion.div>

          {/* Section 3 */}
          <motion.div
            style={{ opacity: opacity3, y: y3 }}
            className="absolute inset-0 flex flex-col items-end justify-center p-12 md:p-24 text-right"
          >
            <div className="max-w-4xl ml-auto">
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white drop-shadow-xl">
                Bridging finance and technology.
              </h2>
              <p className="mt-4 text-lg md:text-xl text-gray-300 font-light max-w-lg ml-auto">
                Power BI, SQL, Python, and Excel — building dashboards and models that drive real business impact.
              </p>
            </div>
          </motion.div>
        </div>
        
      </div>
    </div>
  );
}
