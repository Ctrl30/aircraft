import bgImgSrc from "../img/bg.png";
import { loadBackground } from "./bg";
/** @type {HTMLCanvasElement} */
const moveBackground = () => {
  console.log("okok");
};
window.onload = () => {
  const bgCanvas = document.getElementById("bgCanvas");
  loadBackground(bgImgSrc, bgCanvas, moveBackground);
};
