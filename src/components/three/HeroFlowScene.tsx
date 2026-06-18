"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Text } from "@react-three/drei";
import * as THREE from "three";

/** Hero — floating browser layers + booking hub (white-bg friendly) */
export function HeroFlowScene3D({ mouse = { x: 0, y: 0 } }: { mouse?: { x: number; y: number } }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouse.x * 0.25, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, mouse.y * 0.12, 0.05);
    }
  });

  return (
    <>
      <ambientLight intensity={1.1} />
      <directionalLight position={[4, 6, 5]} intensity={0.9} color="#ffffff" />
      <directionalLight position={[-4, 2, 3]} intensity={0.35} color="#6D5BFF" />

      <group ref={groupRef}>
        {/* Main browser screen */}
        <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.5}>
          <group position={[0, 0.2, 0]} rotation={[0, -0.2, 0]}>
            <RoundedBox args={[2.4, 1.5, 0.06]} radius={0.06} smoothness={4}>
              <meshStandardMaterial color="#ffffff" metalness={0.05} roughness={0.3} />
            </RoundedBox>
            <mesh position={[0, 0.55, 0.04]}>
              <boxGeometry args={[2.4, 0.12, 0.02]} />
              <meshStandardMaterial color="#F1EEFF" />
            </mesh>
            <mesh position={[-0.9, 0.55, 0.05]}>
              <sphereGeometry args={[0.04, 12, 12]} />
              <meshStandardMaterial color="#6D5BFF" />
            </mesh>
            <mesh position={[0, 0, 0.04]}>
              <planeGeometry args={[2.1, 1.1]} />
              <meshStandardMaterial color="#F7F7F5" />
            </mesh>
            <Text position={[0, 0.25, 0.05]} fontSize={0.11} color="#6D5BFF" anchorX="center">
              병원 홈페이지
            </Text>
            <RoundedBox args={[0.7, 0.18, 0.02]} radius={0.04} position={[0, -0.15, 0.05]}>
              <meshStandardMaterial color="#6D5BFF" />
            </RoundedBox>
            <Text position={[0, -0.15, 0.06]} fontSize={0.06} color="#ffffff" anchorX="center">
              예약하기
            </Text>
          </group>
        </Float>

        {/* Side card — 진료과목 */}
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.7}>
          <group position={[-1.6, -0.3, 0.4]} rotation={[0, 0.35, 0.05]}>
            <RoundedBox args={[1.1, 0.75, 0.05]} radius={0.05}>
              <meshStandardMaterial color="#F1EEFF" metalness={0.1} roughness={0.4} />
            </RoundedBox>
            <Text position={[0, 0.1, 0.04]} fontSize={0.07} color="#2563EB" anchorX="center">
              진료과목
            </Text>
          </group>
        </Float>

        {/* Side card — 의료진 */}
        <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.6}>
          <group position={[1.5, 0.5, 0.2]} rotation={[0, -0.3, -0.05]}>
            <RoundedBox args={[1.0, 0.7, 0.05]} radius={0.05}>
              <meshStandardMaterial color="#ffffff" metalness={0.05} roughness={0.35} />
            </RoundedBox>
            <Text position={[0, 0.08, 0.04]} fontSize={0.07} color="#6D5BFF" anchorX="center">
              의료진
            </Text>
          </group>
        </Float>

        {/* Booking hub sphere */}
        <Float speed={2.5} rotationIntensity={0.3} floatIntensity={0.8}>
          <mesh position={[1.3, -0.8, 0.6]}>
            <sphereGeometry args={[0.28, 32, 32]} />
            <meshStandardMaterial color="#2563EB" metalness={0.5} roughness={0.2} emissive="#2563EB" emissiveIntensity={0.15} />
          </mesh>
        </Float>

        {/* Soft accent orbs */}
        <Float speed={3} floatIntensity={1}>
          <mesh position={[-1.2, 0.9, -0.3]}>
            <sphereGeometry args={[0.15, 24, 24]} />
            <meshStandardMaterial color="#6D5BFF" transparent opacity={0.6} />
          </mesh>
        </Float>
      </group>
    </>
  );
}
