"use client";

import { SceneCanvas } from "./SceneCanvas";
import { BackgroundOrbsScene } from "./scenes";

export function BackgroundOrbsWrapper() {
  return (
    <SceneCanvas className="h-full w-full" camera={{ position: [0, 0, 6], fov: 50 }}>
      <BackgroundOrbsScene />
    </SceneCanvas>
  );
}
