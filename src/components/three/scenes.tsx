"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, RoundedBox, Text } from "@react-three/drei";
import * as THREE from "three";

function Robot({ position = [0, 0, 0] as [number, number, number], scale = 1, message = "" }: {
  position?: [number, number, number];
  scale?: number;
  message?: string;
}) {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
    }
  });

  return (
    <group ref={group} position={position} scale={scale}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.6}>
        {/* Body */}
        <RoundedBox args={[0.9, 1.1, 0.7]} radius={0.15} smoothness={4} position={[0, 0, 0]}>
          <meshStandardMaterial color="#6D5BFF" metalness={0.3} roughness={0.4} />
        </RoundedBox>
        {/* Head */}
        <RoundedBox args={[0.85, 0.75, 0.65]} radius={0.2} smoothness={4} position={[0, 0.85, 0]}>
          <meshStandardMaterial color="#6D5BFF" metalness={0.3} roughness={0.4} />
        </RoundedBox>
        {/* Face screen */}
        <mesh position={[0, 0.85, 0.34]}>
          <planeGeometry args={[0.55, 0.4]} />
          <meshStandardMaterial color="#15121D" />
        </mesh>
        {/* Eyes */}
        <mesh position={[-0.12, 0.9, 0.35]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color="#F7F7F5" emissive="#F7F7F5" emissiveIntensity={0.5} />
        </mesh>
        <mesh position={[0.12, 0.9, 0.35]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color="#F7F7F5" emissive="#F7F7F5" emissiveIntensity={0.5} />
        </mesh>
        {/* Cap */}
        <mesh position={[0, 1.25, 0]} rotation={[0.1, 0, 0]}>
          <cylinderGeometry args={[0.5, 0.52, 0.15, 32]} />
          <meshStandardMaterial color="#2563EB" metalness={0.2} roughness={0.5} />
        </mesh>
        {message && (
          <Text position={[0, 1.6, 0]} fontSize={0.12} color="#6D5BFF" anchorX="center" anchorY="middle">
            {message}
          </Text>
        )}
      </Float>
    </group>
  );
}

function Kiosk({ selectedCount = 0 }: { selectedCount?: number }) {
  const kioskRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (kioskRef.current) {
      kioskRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.08;
    }
  });

  return (
    <group ref={kioskRef} position={[0, -0.5, 0]}>
      {/* Main cylinder body */}
      <mesh position={[0, 0.8, 0]}>
        <cylinderGeometry args={[1.4, 1.5, 2.2, 32]} />
        <meshStandardMaterial color="#6D5BFF" metalness={0.4} roughness={0.35} />
      </mesh>
      {/* Top rim */}
      <mesh position={[0, 1.95, 0]}>
        <cylinderGeometry args={[1.55, 1.4, 0.15, 32]} />
        <meshStandardMaterial color="#2B1B45" metalness={0.5} roughness={0.3} />
      </mesh>
      {/* Sign */}
      <RoundedBox args={[2.2, 0.35, 0.1]} radius={0.05} position={[0, 2.2, 0]}>
        <meshStandardMaterial color="#15121D" />
      </RoundedBox>
      <Text position={[0, 2.2, 0.06]} fontSize={0.14} color="#F7F7F5" anchorX="center" anchorY="middle">
        DI WEB TAKE OUT
      </Text>
      {/* Order window cutout */}
      <mesh position={[-0.5, 0.9, 0.76]}>
        <boxGeometry args={[0.9, 1.0, 0.1]} />
        <meshStandardMaterial color="#15121D" />
      </mesh>
      <Text position={[-0.5, 1.35, 0.82]} fontSize={0.08} color="#6D5BFF" anchorX="center">
        ORDER
      </Text>
      {/* Solution panel */}
      <mesh position={[0.6, 1.0, 0.76]}>
        <boxGeometry args={[0.7, 1.2, 0.08]} />
        <meshStandardMaterial color="#F1EEFF" transparent opacity={0.9} />
      </mesh>
      {/* Package boxes on shelf */}
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[-0.8 + i * 0.35, 0.35, 0.8]}>
          <boxGeometry args={[0.25, 0.25, 0.2]} />
          <meshStandardMaterial
            color={i < selectedCount ? "#2563EB" : "#F1EEFF"}
            metalness={0.2}
            roughness={0.6}
          />
        </mesh>
      ))}
      <Robot position={[-0.5, 0.55, 0.9]} scale={0.55} />
    </group>
  );
}

function FloatingPhone() {
  return (
    <Float speed={3} rotationIntensity={0.4} floatIntensity={1.2}>
      <group position={[-2.2, 0.5, 0.5]} rotation={[0, 0.3, -0.2]}>
        <RoundedBox args={[0.5, 0.9, 0.06]} radius={0.06}>
          <meshStandardMaterial color="#F7F7F5" metalness={0.1} roughness={0.3} />
        </RoundedBox>
        <mesh position={[0, 0, 0.04]}>
          <planeGeometry args={[0.42, 0.75]} />
          <meshStandardMaterial color="#F1EEFF" />
        </mesh>
        <Text position={[0, 0.2, 0.05]} fontSize={0.06} color="#6D5BFF" anchorX="center">
          Hospital
        </Text>
        <Text position={[0, 0.1, 0.05]} fontSize={0.06} color="#6D5BFF" anchorX="center">
          Website?
        </Text>
      </group>
    </Float>
  );
}

function FloatingOrb({ position, color, size = 0.3 }: { position: [number, number, number]; color: string; size?: number }) {
  return (
    <Float speed={2 + Math.random()} rotationIntensity={0.5} floatIntensity={1}>
      <mesh position={position}>
        <sphereGeometry args={[size, 32, 32]} />
        <MeshDistortMaterial color={color} distort={0.3} speed={2} roughness={0.2} metalness={0.6} />
      </mesh>
    </Float>
  );
}

function Particles() {
  const count = 40;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 8;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
  }

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#6D5BFF" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

type HeroScene3DProps = {
  selectedCount?: number;
  mouse?: { x: number; y: number };
};

export function HeroScene3D({ selectedCount = 0, mouse = { x: 0, y: 0 } }: HeroScene3DProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouse.x * 0.3, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, mouse.y * 0.15, 0.05);
    }
  });

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#F7F7F5" />
      <directionalLight position={[-3, 2, -2]} intensity={0.4} color="#6D5BFF" />
      <pointLight position={[0, 3, 2]} intensity={0.8} color="#2563EB" />

      <group ref={groupRef}>
        <Kiosk selectedCount={selectedCount} />
        <FloatingPhone />
        <FloatingOrb position={[2, 1.5, -0.5]} color="#6D5BFF" size={0.25} />
        <FloatingOrb position={[1.8, -0.5, 1]} color="#2563EB" size={0.18} />
        <FloatingOrb position={[-1.5, 2, 0]} color="#2B1B45" size={0.2} />
      </group>

      <Particles />
    </>
  );
}

export function MiniRobotScene({ label = "DI Web" }: { label?: string }) {
  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 3, 3]} intensity={1} />
      <pointLight position={[-2, 1, 2]} intensity={0.5} color="#6D5BFF" />
      <Robot position={[0, -0.3, 0]} scale={1.2} message={label} />
    </>
  );
}

export function FloatingCardsScene() {
  const cards = [
    { pos: [-1.5, 0, 0] as [number, number, number], color: "#F1EEFF", rot: 0.2 },
    { pos: [0, 0.2, -0.3] as [number, number, number], color: "#ffffff", rot: 0 },
    { pos: [1.5, -0.1, 0.1] as [number, number, number], color: "#F1EEFF", rot: -0.2 },
  ];

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[4, 4, 4]} intensity={0.8} />
      {cards.map((card, i) => (
        <Float key={i} speed={1.5 + i * 0.3} rotationIntensity={0.3} floatIntensity={0.8}>
          <RoundedBox args={[1.2, 1.6, 0.08]} radius={0.08} position={card.pos} rotation={[0, card.rot, 0]}>
            <meshStandardMaterial color={card.color} metalness={0.05} roughness={0.4} />
          </RoundedBox>
        </Float>
      ))}
    </>
  );
}

export function WorksOrbsScene() {
  const orbs = [
    { pos: [-2, 0.5, 0] as [number, number, number], color: "#2563EB" },
    { pos: [-0.7, -0.3, 0.5] as [number, number, number], color: "#6D5BFF" },
    { pos: [0.7, 0.4, -0.3] as [number, number, number], color: "#2B1B45" },
    { pos: [2, -0.2, 0.2] as [number, number, number], color: "#2563EB" },
  ];

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 3, 2]} intensity={0.8} color="#6D5BFF" />
      {orbs.map((orb, i) => (
        <FloatingOrb key={i} position={orb.pos} color={orb.color} size={0.35 + i * 0.05} />
      ))}
    </>
  );
}

export function CTABoxScene() {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.4;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 4, 3]} intensity={1} />
      <group ref={ref}>
        <RoundedBox args={[1.4, 1.4, 1.4]} radius={0.12}>
          <meshStandardMaterial color="#6D5BFF" metalness={0.4} roughness={0.3} />
        </RoundedBox>
        <Text position={[0, 0.1, 0.71]} fontSize={0.1} color="#6D5BFF" anchorX="center" anchorY="middle">
          DI WEB
        </Text>
        <Text position={[0, -0.12, 0.71]} fontSize={0.06} color="#2563EB" anchorX="center">
          Booking
        </Text>
      </group>
    </>
  );
}

export function BackgroundOrbsScene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <FloatingOrb position={[-2, 1, -1]} color="#6D5BFF" size={0.5} />
      <FloatingOrb position={[2, -1, -0.5]} color="#2563EB" size={0.4} />
      <FloatingOrb position={[0, 0, -2]} color="#2B1B45" size={0.6} />
    </>
  );
}
