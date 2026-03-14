"use client";

import React, { useEffect, useRef } from "react";

export default function FluidBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas size to match window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Dynamically import webgl-fluid to avoid SSR issues
    import("webgl-fluid").then((module) => {
      const WebGLFluid = module.default;
      WebGLFluid(canvas, {
        SIM_RESOLUTION: 128,
        DYE_RESOLUTION: 1024,
        DENSITY_DISSIPATION: 1,
        VELOCITY_DISSIPATION: 0.2,
        PRESSURE: 0.8,
        CURL: 30,
        SPLAT_RADIUS: 0.25,
        COLORFUL: true,
        BACK_COLOR: { r: 255, g: 255, b: 255 },
      });
    });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 h-full w-full pointer-events-none md:pointer-events-auto"
      style={{ zIndex: 0 }}
    />
  );
}
