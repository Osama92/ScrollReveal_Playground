const two = document.querySelector(".two");
const element1 = document.querySelector(".element1");
ScrollReveal().reveal(".one", { interval: 300, scale: 3 });
ScrollReveal().reveal(".two", {
  delay: 1000,
  afterReveal: function (two) {
    element1.style.background = "#11052C";
    element1.style.transitionDuration = "2s";
  },
  distance: "60px"
});
