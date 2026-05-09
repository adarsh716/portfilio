"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Stars,
  PerspectiveCamera,
  Float,
  Sphere,
  MeshDistortMaterial,
} from "@react-three/drei";
import { OrbitingPlanet } from "./OrbitingPlanet";
import { Suspense } from "react";

const planets = [
  { label: "Experience", distance: 5, size: 0.6, speed: 0.5, color: "#4f46e5" },
  { label: "Education", distance: 8, size: 0.5, speed: 0.3, color: "#7c3aed" },
  { label: "Skills", distance: 11, size: 0.7, speed: 0.2, color: "#db2777" },
  { label: "Projects", distance: 14, size: 0.8, speed: 0.15, color: "#ea580c" },
];

export const SolarSystem = () => {
  return (
    <div id="canvas-container">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 15, 25]} fov={50} />
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 0, 0]} intensity={2.5} color="#ffcc33" />

        <Suspense fallback={null}>
          {/* The Sun */}
          <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <Sphere args={[2, 64, 64]}>
              <MeshDistortMaterial
                color="#f59e0b"
                emissive="#f59e0b"
                emissiveIntensity={2}
                distort={0.4}
                speed={1.5}
                roughness={0}
              />
            </Sphere>
          </Float>

          {planets.map((planet, i) => (
            <OrbitingPlanet key={i} {...planet} radius={planet.distance} />
          ))}

          <Stars
            radius={300}
            depth={60}
            count={20000}
            factor={7}
            saturation={0}
            fade
            speed={1}
          />
        </Suspense>

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          maxDistance={50}
          minDistance={10}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};
