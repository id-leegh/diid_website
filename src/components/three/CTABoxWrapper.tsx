"use client";

import { SceneCanvas } from "./SceneCanvas";
import { CTABoxScene } from "./scenes";

export function CTABoxWrapper() {
  return (
    <SceneCanvas className="h-full w-full" camera={{ position: [0, 0, 4], fov: 45 }}>
      <CTABoxScene />
    </SceneCanvas>
  );
}
