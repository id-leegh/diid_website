"use client";

import { SceneCanvas } from "./SceneCanvas";
import { MiniRobotScene } from "./scenes";

export function MiniRobotWrapper({ label = "DI Web" }: { label?: string }) {
  return (
    <SceneCanvas className="h-full w-full" camera={{ position: [0, 0.5, 3.5], fov: 40 }}>
      <MiniRobotScene label={label} />
    </SceneCanvas>
  );
}
