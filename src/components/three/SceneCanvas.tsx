"use client";

import { Suspense, type ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";

type SceneCanvasProps = {
  children: ReactNode;
  className?: string;
  camera?: { position: [number, number, number]; fov?: number };
  style?: React.CSSProperties;
};

export function SceneCanvas({ children, className = "", camera = { position: [0, 0, 6], fov: 45 }, style }: SceneCanvasProps) {
  return (
    <div className={`relative ${className}`} style={style}>
      <Canvas
        camera={{ position: camera.position, fov: camera.fov }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          {children}
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}

export function CanvasLoader() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-soft-purple/30">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-point-purple border-t-transparent" />
    </div>
  );
}
