"use client";

import { useEffect, useRef, useState } from "react";

export function useMouseParallax(strength = 20) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function onMove(e: MouseEvent) {
      const rect = el!.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const x = ((e.clientX - cx) / rect.width) * strength;
      const y = ((e.clientY - cy) / rect.height) * strength;
      setOffset({ x, y });
    }

    function onLeave() {
      setOffset({ x: 0, y: 0 });
    }

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);

  return { ref, offset };
}

export function useDragScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function onDown(e: MouseEvent) {
      isDragging.current = true;
      startX.current = e.pageX - el!.offsetLeft;
      scrollLeft.current = el!.scrollLeft;
      el!.style.cursor = "grabbing";
    }

    function onUp() {
      isDragging.current = false;
      if (el) el.style.cursor = "grab";
    }

    function onMove(e: MouseEvent) {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - el!.offsetLeft;
      el!.scrollLeft = scrollLeft.current - (x - startX.current) * 1.5;
    }

    el.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    el.addEventListener("mousemove", onMove);
    el.style.cursor = "grab";

    return () => {
      el.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      el.removeEventListener("mousemove", onMove);
    };
  }, []);

  return ref;
}
