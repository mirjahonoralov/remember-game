import { imgsData } from "./data.js";
const CONTAINER = document.querySelector(".container");
const RESULT = document.getElementById("result");
let counter = 0;
alert(
  "O'yin shartlari: Siz 2ta ketma-ket bir xil suratni topishingiz kerak, to'g'ri topsangiz suratlar g'oyib bo'ladi. Suratlar qolmasa G'OLIBSIZ!"
);
imgsData.sort(() => 0.5 - Math.random());
let beforeImg,
  allImages = [],
  box = [];

const getAllImages = async () => {
  imgsData.forEach((item) => {
    const image = new Image();
    image.src = item.img;
    allImages.push(image);
  });
};

const getImgs = () =>
  imgsData.forEach((item) => {
    const img = new Image();
    img.src = "./images/click.png";
    img.alt = item.name;
    CONTAINER.appendChild(img);
    img.addEventListener("click", () => checkImgs(img));
  });

const foundImgs = (img) => {
  box = [];
  counter++;
  RESULT.innerText = counter;
  if (counter === 6)
    setTimeout(() => alert("Tabriklaymiz! G'olib bo'ldingiz"), 1000);
  img.className = "hidden";
  beforeImg.className = "hidden";
  beforeImg = null;
};

const notFoundImgs = (img) =>
  setTimeout(() => {
    box = [];
    beforeImg.src = "./images/click.png";
    img.src = "./images/click.png";
    img.className = "rerotate";
    beforeImg.className = "rerotate";
    beforeImg = null;
  }, 1000);

function checkImgs(img) {
  box.push(img);
  if (box.length > 2) return;
  img.className = "rotate";
  imgsData.forEach((item) => {
    if (item.name === img.alt) setTimeout(() => (img.src = item.img), 125);
  });

  if (beforeImg) {
    if (beforeImg.alt === img.alt && beforeImg !== img) foundImgs(img);
    else notFoundImgs(img);
  } else beforeImg = img;
}

await getAllImages();
getImgs();
