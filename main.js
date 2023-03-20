let img = document.getElementById("slider_image");

const images = [
  "img/slider1.jfif",
  "img/slider2.jpg",
  "img/slider3.jpg",
  "img/slider4.jpg",
  "img/slider5.jpg",
  "img/slider6.jpg",
  "img/slider8.jpg",
  "img/slider9.jpg",
  "img/slider10.jpg",
];

let increment = -1;

setInterval(slide, 1000);

function slide() {
  increment++;
  if (increment === images.length) {
    increment = 0;
    img.src = images[increment];
  } else {
    img.src = images[increment];
  }
}
