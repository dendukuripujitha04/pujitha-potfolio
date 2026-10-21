"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float, Stars, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function NeuralCore() {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();
  const targetY = useRef(0);
  const targetX = useRef(0);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.elapsedTime;

    targetY.current += (mouse.x * 0.5 - targetY.current) * 0.03;
    targetX.current += (-mouse.y * 0.2 - targetX.current) * 0.03;

    groupRef.current.rotation.y = targetY.current + time * 0.12;
    groupRef.current.rotation.x = targetX.current + Math.sin(time * 0.3) * 0.06;
  });

  return (
    <group ref={groupRef}>
      {/* Outer glow shell */}
      <mesh>
        <sphereGeometry args={[1.85, 32, 32]} />
        <meshStandardMaterial
          color="#a3e635"
          transparent
          opacity={0.03}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Outer wireframe icosahedron */}
      <mesh rotation={[0.5, 0, 0.2]}>
        <icosahedronGeometry args={[1.65, 1]} />
        <meshStandardMaterial
          color="#a3e635"
          wireframe
          transparent
          opacity={0.12}
          emissive="#a3e635"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Second rotating wireframe */}
      <mesh rotation={[1.2, 0.8, 0]}>
        <icosahedronGeometry args={[1.45, 1]} />
        <meshStandardMaterial
          color="#67e8f9"
          wireframe
          transparent
          opacity={0.08}
          emissive="#67e8f9"
          emissiveIntensity={0.15}
        />
      </mesh>

      {/* Main distorted sphere */}
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
        <Sphere args={[0.95, 128, 128]}>
          <MeshDistortMaterial
            color="#15803d"
            emissive="#4ade80"
            emissiveIntensity={0.5}
            roughness={0.05}
            metalness={0.95}
            distort={0.45}
            speed={2}
          />
        </Sphere>
      </Float>

      {/* Glowing inner core */}
      <Float speed={2} floatIntensity={0.2}>
        <mesh>
          <octahedronGeometry args={[0.38, 0]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#67e8f9"
            emissiveIntensity={2.5}
            metalness={1}
            roughness={0}
          />
        </mesh>
      </Float>

      {/* Orbiting rings */}
      <OrbitingRing radius={1.3} speed={0.5} tilt={0.3} color="#a3e635" thickness={0.014} />
      <OrbitingRing radius={1.55} speed={-0.3} tilt={1.1} color="#67e8f9" thickness={0.01} />
      <OrbitingRing radius={1.1} speed={0.7} tilt={-0.85} color="#c084fc" thickness={0.012} />

      {/* Data particles */}
      <DataParticles count={180} />

      {/* Sparkle effect */}
      <Sparkles
        count={40}
        size={2}
        scale={4}
        speed={0.3}
        color="#a3e635"
        opacity={0.5}
      />
    </group>
  );
}

function OrbitingRing({
  radius, speed, tilt, color, thickness,
}: {
  radius: number; speed: number; tilt: number; color: string; thickness: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = state.clock.elapsedTime * speed;
  });
  return (
    <mesh ref={ref} rotation={[Math.PI / 2 + tilt, 0, 0]}>
      <torusGeometry args={[radius, thickness, 16, 100]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1.2}
        transparent
        opacity={0.85}
        metalness={0.8}
        roughness={0.1}
      />
    </mesh>
  );
}

function DataParticles({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null);

  const geom = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const palette = [
      [0.64, 0.9, 0.2],   // lime
      [0.4, 0.91, 0.97],  // cyan
      [0.75, 0.54, 0.99], // purple
    ];
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.9 + Math.random() * 1.1;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      const c = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = c[0];
      colors[i * 3 + 1] = c[1];
      colors[i * 3 + 2] = c[2];
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    g.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return g;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.06;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.1;
  });

  return (
    <points ref={ref} geometry={geom}>
      <pointsMaterial
        size={0.02}
        transparent
        opacity={0.8}
        sizeAttenuation
        vertexColors
      />
    </points>
  );
}

function Lighting() {
  return (
    <>
      <ambientLight intensity={0.15} />
      {/* Key lime light from top-right */}
      <pointLight position={[4, 4, 3]} intensity={8} color="#a3e635" distance={12} />
      {/* Cyan fill from left */}
      <pointLight position={[-4, -1, 2]} intensity={5} color="#67e8f9" distance={12} />
      {/* Purple rim from back */}
      <pointLight position={[0, -4, -3]} intensity={3} color="#c084fc" distance={10} />
      {/* White front fill */}
      <pointLight position={[0, 2, 5]} intensity={2} color="#ffffff" distance={10} />
    </>
  );
}

function PostProcessing() {
  // Subtle environment map for metallic reflections
  const { scene } = useThree();
  useEffect(() => {
    scene.fog = new THREE.FogExp2("#09090b", 0.04);
    return () => { scene.fog = null; };
  }, [scene]);
  return null;
}

export default function IntelligenceCore() {
  return (
    <div className="w-full h-full" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 4.8], fov: 48 }}
        gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.2 }}
        dpr={[1, 2]}
      >
        <PostProcessing />
        <Lighting />
        <Stars radius={80} depth={40} count={1200} factor={2.5} fade speed={0.4} />
        <NeuralCore />
      </Canvas>
    </div>
  );
}
