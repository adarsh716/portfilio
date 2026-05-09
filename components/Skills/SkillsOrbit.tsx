"use client";

import { useRef, Suspense, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Float, Billboard, useTexture, Sphere } from "@react-three/drei";
import * as THREE from "three";

const skillList = [
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    orbit: 8,
    speed: 0.5,
    y: 0,
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    orbit: 8,
    speed: 0.35,
    y: 0,
  },
  {
    name: "JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    orbit: 12,
    speed: 0.42,
    y: 1,
  },
  {
    name: "TS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    orbit: 12,
    speed: 0.28,
    y: -1,
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    orbit: 16,
    speed: 0.35,
    y: 1.5,
  },
  {
    name: "NextJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    orbit: 16,
    speed: 0.18,
    y: -1.5,
  },
  {
    name: "NodeJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    orbit: 20,
    speed: 0.26,
    y: 2,
  },
  {
    name: "ThreeJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
    orbit: 20,
    speed: 0.13,
    y: -2,
  },
  {
    name: "Mongo",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    orbit: 24,
    speed: 0.22,
    y: 1,
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    orbit: 24,
    speed: 0.09,
    y: -1,
  },
  {
    name: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    orbit: 28,
    speed: 0.15,
    y: 2.5,
  },
  {
    name: "Spring",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    orbit: 28,
    speed: 0.12,
    y: -2.5,
  },
  {
    name: "Angular",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg",
    orbit: 32,
    speed: 0.07,
    y: 1,
  },
];

const SkillPlanet = ({
  skill,
  index,
  total,
}: {
  skill: (typeof skillList)[0];
  index: number;
  total: number;
}) => {
  const meshRef = useRef<THREE.Group>(null);
  const texture = useTexture(skill.icon);
  const angleOffset = (index / total) * Math.PI * 2;

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * skill.speed + angleOffset;
    if (meshRef.current) {
      meshRef.current.position.x = Math.cos(t) * skill.orbit;
      meshRef.current.position.z = Math.sin(t) * skill.orbit;
      meshRef.current.position.y = skill.y + Math.sin(clock.getElapsedTime() * 0.5 + index) * 0.5;
    }
  });

  return (
    <group ref={meshRef}>
      <Float speed={2.5} rotationIntensity={0.4} floatIntensity={0.3}>
        <Billboard follow>
          {/* Glow plane behind icon */}
          <mesh position={[0, 0, -0.1]}>
            <planeGeometry args={[3.5, 3.5]} />
            <meshBasicMaterial
              color="#fbbf24"
              transparent
              opacity={0.04}
            />
          </mesh>
          {/* Icon */}
          <mesh>
            <planeGeometry args={[2.2, 2.2]} />
            <meshBasicMaterial
              map={texture}
              transparent
              depthWrite={false}
            />
          </mesh>
        </Billboard>

        <Text
          position={[0, -2, 0]}
          fontSize={0.55}
          color="#fbbf24"
          anchorX="center"
          anchorY="middle"
          fontWeight="900"
          letterSpacing={0.12}
          fillOpacity={0.7}
        >
          {skill.name}
        </Text>
      </Float>
    </group>
  );
};

const CoronaRing = ({ radius, opacity }: { radius: number; opacity: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.z = clock.elapsedTime * 0.3;
    }
  });
  return (
    <mesh ref={ref} rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[radius - 0.15, radius + 0.15, 128]} />
      <meshBasicMaterial color="#fbbf24" transparent opacity={opacity} side={THREE.DoubleSide} />
    </mesh>
  );
};

export const SkillsOrbit = () => {
  return (
    <group>
      {/* Sun - the core */}
      <Float speed={1.5} rotationIntensity={0} floatIntensity={0.3}>
        {/* Outer corona glow */}
        <Sphere args={[4.5, 32, 32]}>
          <meshStandardMaterial
            color="#fbbf24"
            emissive="#fbbf24"
            emissiveIntensity={3}
            transparent
            opacity={0.08}
          />
        </Sphere>

        {/* Mid corona */}
        <Sphere args={[3.8, 32, 32]}>
          <meshStandardMaterial
            color="#fbbf24"
            emissive="#fbbf24"
            emissiveIntensity={6}
            transparent
            opacity={0.15}
          />
        </Sphere>

        {/* Core sphere */}
        <Sphere args={[3, 64, 64]}>
          <meshStandardMaterial
            color="#fbbf24"
            emissive="#fbbf24"
            emissiveIntensity={14}
            roughness={0}
            metalness={0.8}
          />
        </Sphere>

        <Text
          position={[0, 0, 3.1]}
          fontSize={0.75}
          color="#000000"
          anchorX="center"
          anchorY="middle"
          fontWeight="900"
          letterSpacing={0.1}
        >
          CORE
        </Text>
      </Float>

      {/* Corona rings around sun */}
      <CoronaRing radius={4} opacity={0.25} />
      <CoronaRing radius={5.5} opacity={0.12} />

      {/* Orbital rings */}
      {[8, 12, 16, 20, 24, 28, 32].map((dist) => (
        <mesh key={dist} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[dist - 0.06, dist + 0.06, 128]} />
          <meshBasicMaterial color="#fbbf24" transparent opacity={0.1} />
        </mesh>
      ))}

      {/* Point lights to illuminate planets */}
      <pointLight position={[0, 0, 0]} intensity={5} color="#fbbf24" distance={40} />
      <pointLight position={[0, 10, 0]} intensity={2} color="#fbbf24" distance={60} />

      {/* Skill planets */}
      <Suspense fallback={null}>
        {skillList.map((skill, i) => (
          <SkillPlanet key={i} skill={skill} index={i} total={skillList.length} />
        ))}
      </Suspense>
    </group>
  );
};
