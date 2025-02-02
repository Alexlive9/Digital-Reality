"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particle = () => {
  const particlesInit = useCallback(async (engine: any) => {
    console.log("Particles Init called");
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    console.log("Particles Loaded:", container);
  }, []);

  return (
    <Particles
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: true }, 
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: { repulse: { distance: 100, duration: 0.4 } },
        },
        particles: {
          color: {value: ["#ff0000"] },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 2,
          },
          collisions: { enable: true },
          move: {
            enable: true,
            direction: "none",
            outModes: { default: "bounce" },
            random: true,
            speed: 1,
            straight: false,
          },
          number: {
            density: { enable: true, area: 800 },
            value: 150, 
          },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 5 } },
          detectRetina: true,
        },
      }}
    />
  );
};

export default Particle;
