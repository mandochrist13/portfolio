"use client";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { useSpring } from "@react-spring/web";

export const LocationGlobe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  const fadeMask =
    "radial-gradient(circle at 50% 50%, rgb(0, 0, 0) 50%, rgb(0, 0, 0, 0) 100%)";

  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));

  const locationToAngles = (lat: number, long: number) => {
    const phi = ((long + 210) / 360) * 2 * Math.PI; // Adjusted for cobe's coordinate system
    const theta = (lat / 180) * Math.PI;
    return { phi, theta };
  };

  useEffect(() => {
    const longitude = 11.598908999999992; // Gabon longitude
    const latitude = -0.8280970000000001; // Gabon latitude
    const { phi, theta } = locationToAngles(latitude, longitude);

    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const resizeObserver = new ResizeObserver(() => {
      const width = canvas.offsetWidth;
      canvas.width = width * 2; // High resolution
      canvas.height = width * 2; // Maintain aspect ratio
    });
    resizeObserver.observe(canvas);

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2.5,
      width: canvas.width,
      height: canvas.height,
      phi: phi, // Focus initial sur le Gabon
      theta: theta,
      dark: 1,
      mapSamples: 8000,
      mapBrightness: 1.2,
      diffuse: 1.8,
      baseColor: [0.7, 0.7, 1],
      markerColor: [1, 0.6, 0.2],
      glowColor: [0.2, 0.5, 0.8],
      markers: [{ location: [latitude, longitude], size: 0.15 }],
      scale: 1.1,
      onRender: (state) => {
        state.phi = phi + r.get();
        state.theta = theta;
      },
    });

    return () => {
      globe.destroy();
      resizeObserver.disconnect();
    };
  }, [r]);

  return (
    <div
      className="relative flex h-full flex-col overflow-hidden"
      style={{ maxWidth: "100%", maxHeight: "100%" }}
    >
      <div className="absolute inset-x-0 mx-auto aspect-square h-full">
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            placeItems: "center",
            placeContent: "center",
            overflow: "visible",
          }}
        >
          <div
            style={{
              width: "100%",
              aspectRatio: "1/1",
              maxWidth: 800,
              WebkitMaskImage: fadeMask,
              maskImage: fadeMask,
            }}
          >
            <canvas
              ref={canvasRef}
              onPointerDown={(e: React.PointerEvent<HTMLCanvasElement>) => {
                pointerInteracting.current =
                  e.clientX - pointerInteractionMovement.current;
                if (canvasRef.current)
                  canvasRef.current.style.cursor = "grabbing";
              }}
              onPointerUp={() => {
                pointerInteracting.current = null;
                if (canvasRef.current) canvasRef.current.style.cursor = "grab";
              }}
              onMouseMove={(e: React.MouseEvent<HTMLCanvasElement>) => {
                if (pointerInteracting.current !== null) {
                  const delta = e.clientX - pointerInteracting.current;
                  pointerInteractionMovement.current = delta;
                  void api.start({ r: delta / 200 });
                }
              }}
              onTouchMove={(e: React.TouchEvent<HTMLCanvasElement>) => {
                if (pointerInteracting.current !== null && e.touches[0]) {
                  const delta =
                    e.touches[0].clientX - pointerInteracting.current;
                  pointerInteractionMovement.current = delta;
                  void api.start({ r: delta / 100 });
                }
              }}
              className="canvas"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
