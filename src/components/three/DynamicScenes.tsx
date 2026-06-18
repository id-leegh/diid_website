"use client";

import dynamic from "next/dynamic";
import { CanvasLoader } from "./SceneCanvas";

export const HeroFlowScene = dynamic(() => import("./HeroFlowWrapper").then((m) => m.HeroFlowWrapper), {
  ssr: false,
  loading: () => <CanvasLoader />,
});

export const HeroSceneWrapper = dynamic(() => import("./HeroSceneWrapper").then((m) => m.HeroSceneWrapper), {
  ssr: false,
  loading: () => <CanvasLoader />,
});

export const MiniRobotScene = dynamic(() => import("./MiniRobotWrapper").then((m) => m.MiniRobotWrapper), {
  ssr: false,
  loading: () => <CanvasLoader />,
});

export const FloatingCardsScene = dynamic(() => import("./FloatingCardsWrapper").then((m) => m.FloatingCardsWrapper), {
  ssr: false,
  loading: () => <CanvasLoader />,
});

export const WorksOrbsScene = dynamic(() => import("./WorksOrbsWrapper").then((m) => m.WorksOrbsWrapper), {
  ssr: false,
  loading: () => <CanvasLoader />,
});

export const CTABoxScene = dynamic(() => import("./CTABoxWrapper").then((m) => m.CTABoxWrapper), {
  ssr: false,
  loading: () => <CanvasLoader />,
});

export const BackgroundOrbsScene = dynamic(() => import("./BackgroundOrbsWrapper").then((m) => m.BackgroundOrbsWrapper), {
  ssr: false,
  loading: () => <CanvasLoader />,
});
