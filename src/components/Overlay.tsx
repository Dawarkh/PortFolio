"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Overlay() {
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Section 1: 0% - 20% scroll (Center)
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 1], [1, 1, 0, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2, 1], [0, -100, -100]);

  // Section 2: 30% - 50% scroll (Left)
  const opacity2 = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.4, 0.5, 1], [0, 0, 1, 1, 0, 0]);
  const y2 = useTransform(scrollYProgress, [0, 0.2, 0.5, 1], [50, 50, -100, -100]);

  // Section 3: 60% - 80% scroll (Right)
  const opacity3 = useTransform(scrollYProgress, [0, 0.5, 0.6, 0.7, 0.8, 1], [0, 0, 1, 1, 0, 0]);
  const y3 = useTransform(scrollYProgress, [0, 0.5, 0.8, 1], [50, 50, -100, -100]);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="fixed inset-0 flex flex-col items-center justify-center p-8"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-xl text-center">
          John Doe
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-300 font-light tracking-wide text-center">
          Creative Developer.
        </p>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="fixed inset-0 flex flex-col items-start justify-center p-12 md:p-24 max-w-4xl"
      >
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white drop-shadow-xl">
          I build digital experiences.
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-300 font-light max-w-lg">
          Transforming concepts into performant, interactive, and beautifully designed web applications.
        </p>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="fixed inset-0 flex flex-col items-end justify-center p-12 md:p-24 text-right"
      >
        <div className="max-w-4xl ml-auto">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white drop-shadow-xl">
            Bridging design and engineering.
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-300 font-light max-w-lg ml-auto">
            Meticulous attention to detail, motion, and interaction to deliver a premium user experience.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
