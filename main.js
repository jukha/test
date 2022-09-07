"use strict";

let viewportHeight = window.innerHeight;
let viewportWidth = window.innerWidth;

const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");
const h5 = document.querySelector("h5");
const span = document.querySelector("span");
const currentViewPortSize = window.matchMedia("(max-width: 800px)");
const canHover = window.matchMedia("(hover:hover)");

let portrait = window.matchMedia("(orientation: portrait)");
let landscape = window.matchMedia("(orientation: landscape)");

if (portrait.matches) {
  span.textContent = "portrait";
}
if (landscape.matches) {
  span.textContent = "landscape";
}

if (currentViewPortSize.matches) {
  h1.textContent = "Small Screen";
}
if (!currentViewPortSize.matches) {
  h1.textContent = "Large Screen";
}

portrait.addEventListener("change", function (e) {
  if (e.matches) {
    span.textContent = "Portrait";
  } else {
    span.textContent = "Landscape";
  }
});

currentViewPortSize.addEventListener("change", changeText);

function changeText(mediaSize) {
  if (mediaSize.matches) {
    h1.textContent = "Small Screen";
  } else {
    h1.textContent = "Large Screen";
  }
}

function isHoverable(canHover) {
  if (canHover.matches) {
    h2.textContent = "Hover Supported";
  } else {
    h2.textContent = "Touch Screen";
  }
}

changeText(currentViewPortSize);
isHoverable(canHover);

document.getElementById("submitBtn").addEventListener("click", () => {
  h3.textContent = "Color Scheme as per User Selection";
});

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const currTextClr = form.elements["text_color"].value;
  const currBgClr = form.elements["bgClr"].value;

  const cssLink = document.getElementById("cssLink");

  if (currTextClr == "dark_red" && currBgClr == "white") {
    cssLink.setAttribute("href", "style1.css");
  }
  if (currTextClr == "dark_red" && currBgClr == "yellow") {
    cssLink.setAttribute("href", "style2.css");
  }
  if (currTextClr == "dark_blue" && currBgClr == "white") {
    cssLink.setAttribute("href", "style3.css");
  }
  if (currTextClr == "dark_blue" && currBgClr == "yellow") {
    cssLink.setAttribute("href", "style4.css");
  }
});
