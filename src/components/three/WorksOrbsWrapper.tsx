"use client";

import { SceneCanvas } from "./SceneCanvas";
import { WorksOrbsScene } from "./scenes";

export function WorksOrbsWrapper() {
  return (
    <SceneCanvas className="h-full w-full" camera={{ position: [0, 0, 5], fov: 50 }}>
      <WorksOrbsScene />
    </SceneCanvas>
  );
}
