"use client";

import { SceneCanvas } from "./SceneCanvas";
import { HeroFlowScene3D } from "./HeroFlowScene";

type Props = { mouse?: { x: number; y: number } };

export function HeroFlowWrapper({ mouse }: Props) {
  return (
    <SceneCanvas className="h-full w-full" camera={{ position: [0, 0.3, 4.2], fov: 42 }}>
      <HeroFlowScene3D mouse={mouse} />
    </SceneCanvas>
  );
}
