import confetti from "canvas-confetti";

export function fireConfetti() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const defaults = {
    particleCount: 120,
    spread: 120,
    startVelocity: 35,
    gravity: 0.9,
    ticks: 200
  };

  confetti({ ...defaults, angle: 60, origin: { x: 0, y: 0.7 } });
  setTimeout(() => {
    confetti({ ...defaults, angle: 120, origin: { x: 1, y: 0.7 } });
  }, 120);
}
