"use client";

import { SceneCanvas } from "./SceneCanvas";
import { HeroScene3D } from "./scenes";

type Props = {
  selectedCount?: number;
  mouse?: { x: number; y: number };
};

export function HeroSceneWrapper({ selectedCount = 0, mouse = { x: 0, y: 0 } }: Props) {
  return (
    <SceneCanvas className="h-full w-full" camera={{ position: [0, 1.5, 5.5], fov: 42 }}>
      <HeroScene3D selectedCount={selectedCount} mouse={mouse} />
    </SceneCanvas>
  );
}
