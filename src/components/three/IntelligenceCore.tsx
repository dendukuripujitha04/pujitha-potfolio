"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float, Stars } from "@react-three/drei";
import * as THREE from "three";

function NeuralCore() {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse, viewport } = useThree();

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.elapsedTime;

    // Slow idle rotation
    groupRef.current.rotation.y += 0.003;
    groupRef.current.rotation.x = Math.sin(time * 0.2) * 0.05;

    // Pointer-responsive tilt (damped)
    groupRef.current.rotation.y +=
      (mouse.x * 0.3 - groupRef.current.rotation.y) * 0.02;
    groupRef.current.rotation.x +=
      (-mouse.y * 0.15 - groupRef.current.rotation.x) * 0.02;
  });

  return (
    <group ref={groupRef}>
      {/* Outer translucent shell */}
      <mesh>
        <icosahedronGeometry args={[1.6, 1]} />
        <meshStandardMaterial
          color="#1a1a2e"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* Core distorted sphere */}
      <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.4}>
        <Sphere args={[0.9, 64, 64]}>
          <MeshDistortMaterial
            color="#a3e635"
            emissive="#1a3d00"
            emissiveIntensity={0.3}
            roughness={0.1}
            metalness={0.8}
            distort={0.35}
            speed={1.5}
          />
        </Sphere>
      </Float>

      {/* Inner core */}
      <mesh>
        <octahedronGeometry args={[0.4, 0]} />
        <meshStandardMaterial
          color="#67e8f9"
          emissive="#004455"
          emissiveIntensity={0.6}
          metalness={1}
          roughness={0.0}
        />
      </mesh>

      {/* Orbiting rings */}
      <OrbitingRing radius={1.3} speed={0.4} tilt={0.3} color="#a3e635" />
      <OrbitingRing radius={1.5} speed={-0.25} tilt={1.1} color="#67e8f9" />
      <OrbitingRing radius={1.1} speed={0.6} tilt={-0.8} color="#c084fc" />

      {/* Data particles */}
      <DataParticles count={120} />
    </group>
  );
}

function OrbitingRing({
  radius,
  speed,
  tilt,
  color,
}: {
  radius: number;
  speed: number;
  tilt: number;
  color: string;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = state.clock.elapsedTime * speed;
  });
  return (
    <mesh ref={ref} rotation={[Math.PI / 2 + tilt, 0, 0]}>
      <torusGeometry args={[radius, 0.01, 8, 80]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
}

function DataParticles({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null);

  const [positions] = (() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.8 + Math.random() * 0.8;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return [pos];
  })();

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.05;
    ref.current.rotation.x = state.clock.elapsedTime * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#a3e635"
        size={0.015}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function Lighting() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[3, 3, 3]} intensity={1.5} color="#a3e635" />
      <pointLight position={[-3, -2, -2]} intensity={0.8} color="#67e8f9" />
      <pointLight position={[0, -3, 2]} intensity={0.4} color="#c084fc" />
    </>
  );
}

export default function IntelligenceCore() {
  return (
    <div className="w-full h-full" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Lighting />
        <Stars
          radius={60}
          depth={30}
          count={800}
          factor={2}
          fade
          speed={0.3}
        />
        <NeuralCore />
      </Canvas>
    </div>
  );
}
