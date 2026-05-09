"use client";

import { Canvas } from "@react-three/fiber";
import { Stars, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";

export const Scene = () => {
  return (
    <div id="canvas-container">
      <Canvas gl={{ alpha: true, antialias: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 30]} fov={60} />
        <ambientLight intensity={0.15} />
        <pointLight position={[20, 20, 10]} intensity={1.5} color="#fbbf24" decay={2} />
        <pointLight position={[-20, -10, -10]} intensity={0.8} color="#60a5fa" decay={2} />

        <Suspense fallback={null}>
          <Stars
            radius={300}
            depth={60}
            count={9000}
            factor={7}
            saturation={0}
            fade
            speed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};
