import React, { useEffect, useRef } from "react";

const SPRITES = {
  idle: [[-3, -3]],
  alert: [[-7, -3]],

  scratchSelf: [
    [-5, 0],
    [-6, 0],
    [-7, 0],
  ],

  scratchWallN: [
    [0, 0],
    [0, -1],
  ],

  scratchWallS: [
    [-7, -1],
    [-6, -2],
  ],

  scratchWallE: [
    [-2, -2],
    [-2, -3],
  ],

  scratchWallW: [
    [-4, 0],
    [-4, -1],
  ],

  tired: [[-3, -2]],

  sleeping: [
    [-2, 0],
    [-2, -1],
  ],

  N: [
    [-1, -2],
    [-1, -3],
  ],

  NE: [
    [0, -2],
    [0, -3],
  ],

  E: [
    [-3, 0],
    [-3, -1],
  ],

  SE: [
    [-5, -1],
    [-5, -2],
  ],

  S: [
    [-6, -3],
    [-7, -2],
  ],

  SW: [
    [-5, -3],
    [-6, -1],
  ],

  W: [
    [-4, -2],
    [-4, -3],
  ],

  NW: [
    [-1, 0],
    [-1, -1],
  ],
};

const FRAME_MS = 100;
const SPEED = 10;

export function OnekoCat({ enabled }) {
  const catRef = useRef(null);

  useEffect(() => {
    if (!enabled || !catRef.current) return;

    const el = catRef.current;

    let catX = 32;
    let catY = 32;

    let mouseX = 32;
    let mouseY = 32;

    let frameCount = 0;
    let idleTime = 0;

    let idleAnimation = null;
    let idleAnimationFrame = 0;

    const setSprite = (name, frame) => {
      const sprites = SPRITES[name];

      if (!sprites) return;

      const sprite = sprites[frame % sprites.length];

      el.style.backgroundPosition =
        `${sprite[0] * 32}px ${sprite[1] * 32}px`;
    };

    const updatePosition = () => {
      el.style.left = `${catX - 16}px`;
      el.style.top = `${catY - 16}px`;
    };

    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    updatePosition();
    setSprite("idle", 0);

    const tick = () => {
      frameCount += 1;

      const diffX = catX - mouseX;
      const diffY = catY - mouseY;

      const distance = Math.sqrt(
        diffX * diffX + diffY * diffY
      );

      // Close enough -> idle
      if (distance < SPEED || distance < 48) {
        idleTime += 1;

        // Random idle animation
        if (
          idleTime > 10 &&
          idleAnimation === null &&
          Math.floor(Math.random() * 200) === 0
        ) {
          const animations = [
            "sleeping",
            "scratchSelf",
          ];

          if (catX < 32) {
            animations.push("scratchWallW");
          }

          if (catY < 32) {
            animations.push("scratchWallN");
          }

          if (catX > window.innerWidth - 32) {
            animations.push("scratchWallE");
          }

          if (catY > window.innerHeight - 32) {
            animations.push("scratchWallS");
          }

          idleAnimation =
            animations[
              Math.floor(
                Math.random() * animations.length
              )
            ];

          idleAnimationFrame = 0;
        }

        // Sleeping animation
        if (idleAnimation === "sleeping") {
          if (idleAnimationFrame < 8) {
            setSprite("tired", 0);
          } else {
            setSprite(
              "sleeping",
              Math.floor(idleAnimationFrame / 4)
            );
          }

          if (idleAnimationFrame > 192) {
            idleAnimation = null;
            idleAnimationFrame = 0;
          }

          idleAnimationFrame += 1;
        }

        // Other idle animations
        else if (idleAnimation) {
          setSprite(
            idleAnimation,
            Math.floor(idleAnimationFrame / 2)
          );

          if (idleAnimationFrame > 9) {
            idleAnimation = null;
            idleAnimationFrame = 0;
          }

          idleAnimationFrame += 1;
        }

        else {
          setSprite("idle", 0);
        }

        updatePosition();
        return;
      }

      // Reset idle state
      idleAnimation = null;
      idleAnimationFrame = 0;

      // Alert before chasing
      if (idleTime > 1) {
        setSprite("alert", 0);

        idleTime = Math.min(idleTime, 7);
        idleTime -= 1;

        updatePosition();
        return;
      }

      // Determine direction
      let direction = "";

      if (diffY / distance > 0.5) {
        direction += "N";
      } else if (diffY / distance < -0.5) {
        direction += "S";
      }

      if (diffX / distance > 0.5) {
        direction += "W";
      } else if (diffX / distance < -0.5) {
        direction += "E";
      }

      setSprite(direction || "idle", frameCount);

      // Move toward mouse
      catX -= (diffX / distance) * SPEED;
      catY -= (diffY / distance) * SPEED;

      // Keep inside viewport
      catX = Math.min(
        Math.max(16, catX),
        window.innerWidth - 16
      );

      catY = Math.min(
        Math.max(16, catY),
        window.innerHeight - 16
      );

      updatePosition();
    };

    const interval = setInterval(tick, FRAME_MS);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      clearInterval(interval);
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <div
      ref={catRef}
      aria-hidden="true"
      className="fixed pointer-events-none"
      style={{
        width: "32px",
        height: "32px",
        zIndex: 999999,

        backgroundImage:
          "url('https://raw.githubusercontent.com/adryd325/oneko.js/main/oneko.gif')",

        backgroundRepeat: "no-repeat",

        imageRendering: "pixelated",

        left: "16px",
        top: "16px",

        transition: "left 80ms linear, top 80ms linear",
      }}
    />
  );
}
