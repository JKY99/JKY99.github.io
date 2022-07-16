const images = ["0.jpg","1.jpg","2.jpg","3.jpg"];
const html = document.querySelector("html");

const chosenImage = images[Math.floor(Math.random()*images.length)];

// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImage}`;
// document.body.appendChild(bgImage);
const bgImage = `url(img/${chosenImage}) no-repeat center center fixed`;
html.style.background = bgImage;