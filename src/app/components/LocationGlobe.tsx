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
    const longitude = 11.598908999999992; // Cairo longitude
    const latitude = -0.8280970000000001; // Cairo latitude

    const { phi, theta } = locationToAngles(latitude, longitude);

    let width = 0;

    const onResize = () => {
      if (canvasRef.current && (width = canvasRef.current.offsetWidth)) {
        window.addEventListener("resize", onResize);
      }
    };
    onResize();

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2.5, // Augmente la qualité visuelle
        width: width * 2,
        height: width * 2,
        phi: phi, // Focus initial sur le Caire
        theta: theta,
        dark: 1,
        mapSamples: 8_000, // Détails supplémentaires pour une carte plus nette
        mapBrightness: 1.2, // Légèrement réduit pour un rendu plus doux
        diffuse: 1.8, // Accentue les ombres douces pour un effet réaliste
        baseColor: [0.7, 0.7, 1], // Couleur plus froide et agréable
        markerColor: [1, 0.6, 0.2], // Marqueurs d'un ton chaud pour un bon contraste
        glowColor: [0.2, 0.5, 0.8], // Effet de lueur bleu doux autour du globe
        markers: [{ location: [latitude, longitude], size: 0.15 }], // Marqueurs légèrement plus grands
        scale: 1.1, // Zoom légèrement plus grand pour un effet immersif
        onRender: (state) => {
          state.phi = phi + r.get() - 100; // Ajustement plus précis du focus
          state.theta = theta;
          state.width = width * 2;
          state.height = width * 2;
        },
      });
      
    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [r]);

  return (
    <div className="relative flex h-full flex-col overflow-hidden">
      <div className="absolute inset-x-0 mx-auto aspect-square h-full ">
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
              onPointerDown={(e) => {
                pointerInteracting.current =
                  e.clientX - pointerInteractionMovement.current;
                canvasRef.current &&
                  (canvasRef.current.style.cursor = "grabbing");
              }}
              onPointerUp={() => {
                pointerInteracting.current = null;
                canvasRef.current && (canvasRef.current.style.cursor = "grab");
              }}
              onPointerOut={() => {
                pointerInteracting.current = null;
                canvasRef.current && (canvasRef.current.style.cursor = "grab");
              }}
              onMouseMove={(e) => {
                if (pointerInteracting.current !== null) {
                  const delta = e.clientX - pointerInteracting.current;
                  pointerInteractionMovement.current = delta;
                  void api.start({
                    r: delta / 200,
                  });
                }
              }}
              onTouchMove={(e) => {
                if (pointerInteracting.current !== null && e.touches[0]) {
                  const delta =
                    e.touches[0].clientX - pointerInteracting.current;
                  pointerInteractionMovement.current = delta;
                  void api.start({
                    r: delta / 100,
                  });
                }
              }}
              style={{
                width: "100%",
                height: "100%",
                contain: "layout paint size",
                cursor: "auto",
                userSelect: "none",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
