"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Sphere, MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

interface PlanetProps {
  radius: number;
  speed: number;
  size: number;
  color: string;
  label: string;
  distance: number;
}

export const OrbitingPlanet = ({
  radius,
  speed,
  size,
  color,
  label,
  distance,
}: PlanetProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const orbitRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    if (orbitRef.current) {
      orbitRef.current.position.x = Math.cos(t) * distance;
      orbitRef.current.position.z = Math.sin(t) * distance;
    }
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group>
      {/* Orbit Line */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[distance - 0.02, distance + 0.02, 64]} />
        <meshBasicMaterial color="gray" transparent opacity={0.1} />
      </mesh>

      <group ref={orbitRef}>
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
          <Sphere
            ref={meshRef}
            args={[size, 32, 32]}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
          >
            <MeshDistortMaterial
              color={color}
              distort={hovered ? 0.4 : 0.2}
              speed={2}
              roughness={0.1}
              metalness={0.8}
            />
          </Sphere>

          <Text
            position={[0, size + 0.5, 0]}
            fontSize={0.4}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            {label}
          </Text>
        </Float>
      </group>
    </group>
  );
};
