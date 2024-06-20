import anime from "animejs/lib/anime.es.js";

anime({
  targets: "#l1 .path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "linear",
  duration: 700,
  delay: (el, i) => {
    return i * 60;
  },
  direction: "alternate",
  loop: false,
});

anime({
  targets: "#l2 .path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "linear",
  duration: 700,
  delay: (el, i) => {
    return i * 60;
  },
  direction: "alternate",
  loop: false,
});

anime({
  targets: "#l3 .path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "linear",
  duration: 700,
  delay: (el, i) => {
    return i * 60;
  },
  direction: "alternate",
  loop: false,
});

anime({
  targets: "#l4 .path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "linear",
  duration: 700,
  delay: (el, i) => {
    return i * 60;
  },
  direction: "alternate",
  loop: false,
});
