import anime from "animejs/lib/anime.es.js";

anime({
  targets: "#heart .path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 2000,
  delay: (el, i) => 400,
  direction: "normal",
  loop: false,
});
