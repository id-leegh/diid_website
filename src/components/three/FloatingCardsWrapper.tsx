"use client";

import { SceneCanvas } from "./SceneCanvas";
import { FloatingCardsScene } from "./scenes";

export function FloatingCardsWrapper() {
  return (
    <SceneCanvas className="h-full w-full" camera={{ position: [0, 0, 5], fov: 45 }}>
      <FloatingCardsScene />
    </SceneCanvas>
  );
}
