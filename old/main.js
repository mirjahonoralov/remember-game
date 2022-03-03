import { imgsData } from "./data.js";
const CONTAINER = document.querySelector(".container");
const RESULT = document.getElementById("result");
let counter = 0;
// alert(
//   "O'yin shartlari: Siz 2ta ketma-ket bir xil suratni topishingiz kerak, to'g'ri topsangiz suratlar g'oyib bo'ladi. Suratlar qolmasa G'OLIBSIZ!"
// );
imgsData.sort(() => 0.5 - Math.random());
let beforeBox = [];

const getImgs = () =>
  imgsData.forEach((item) => {
    const imgBox = document.createElement("div");
    const defaultImg = new Image();
    const img = new Image();
    defaultImg.src = "./images/click.png";
    img.src = item.img;
    img.alt = item.name;
    img.className = "hidden";
    imgBox.appendChild(defaultImg);
    imgBox.appendChild(img);
    CONTAINER.appendChild(imgBox);
    imgBox.addEventListener("click", () => checkImgs(img, defaultImg));
  });

const foundImgs = (img) => {
  counter++;
  RESULT.innerText = counter;
  if (counter === 6)
    setTimeout(() => alert("Tabriklaymiz! G'olib bo'ldingiz"), 1000);
  img.className = "hidden";
  beforeImg.className = "hidden";
  beforeImg = null;
};

const notFoundImgs = (img, defaultImg) => {
  // img.className = "rerotate";
  // setTimeout(() => {
  //   beforeBox[0].className = "rerotate";
  //   img.className = "rerotate";
  // }, 750);
  setTimeout(() => {
    // beforeImg.src = "./images/click.png";
    // img.src = "./images/click.png";
    // img.className = "rerotate";

    beforeBox[0].className = "hidden";
    beforeBox[1].className = "";
    beforeBox = [];
    img.className = "hidden";
    defaultImg.className = "";
  }, 1000);
};

function checkImgs(img, defaultImg) {
  // console.log(img, defaultImg);
  // defaultImg.className = "rotate"; del
  // imgsData.forEach((item) => {
  //   if (item.name === img.alt) setTimeout(() => (img.src = item.img), 125);
  // }); del
  // setTimeout(() => {

  // if (beforeBox[0] !== img) {
  defaultImg.className = "hidden";
  img.className = "";
  // }
  // }, 2000);

  if (beforeBox[0]) {
    if (beforeBox[0] === img) foundImgs(img);
    else notFoundImgs(img, defaultImg);
  } else beforeBox = [img, defaultImg];
}

getImgs();
