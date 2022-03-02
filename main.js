document.addEventListener("DOMContentLoaded", () => {

  alert('O\'yin shartlari: Siz 2ta ketma-ket bir xil suratni topishingiz kerak, to\'g\'ri topsangiz suratlar g\'oyib bo\'ladi. Suratlar qolmasa G\'OLIBSIZ!')
  const boxArray = [
    {
      name: "cat",
      img: "images/cat.png",
    },
    {
      name: "cat",
      img: "images/cat.png",
    },
    {
      name: "leopard",
      img: "images/leopard.png",
    },
    {
      name: "leopard",
      img: "images/leopard.png",
    },
    {
      name: "dog",
      img: "images/dog.png",
    },
    {
      name: "dog",
      img: "images/dog.png",
    },
    {
      name: "graff",
      img: "images/graff.png",
    },
    {
      name: "graff",
      img: "images/graff.png",
    },
    {
      name: "monkey",
      img: "images/monkey.png",
    },
    {
      name: "monkey",
      img: "images/monkey.png",
    },
    {
      name: "whiteBear",
      img: "images/whiteBear.png",
    },
    {
      name: "whiteBear",
      img: "images/whiteBear.png",
    },
  ];

  boxArray.sort(() => 0.5 - Math.random())

  const container = document.querySelector(".container");
  const resultDisplay = document.querySelector("#result");
  let boxesChosen = [];
  let boxesChosenId = [];
  let boxesWon = [];

  function creatBox() {
    for (let i = 0; i < boxArray.length; i++) {
      var box = document.createElement("img");
      box.setAttribute('src', 'images/click.png');
      box.setAttribute('data-id', i);
      box.addEventListener('click', flipBox)
      container.appendChild(box);
    }
  }

  function flipBox() {
    var boxId = this.getAttribute("data-id");
    boxesChosen.push(boxArray[boxId].name);
    boxesChosenId.push(boxId);
    this.setAttribute("src", boxArray[boxId].img);
    if (boxesChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }


  //check for matches

  function checkForMatch() {
 
    var boxes = document.querySelectorAll("img");
     const [optionOneId, optionTwoId] = boxesChosenId;
    // const optionOneId = boxesChosenId[0];
    // const optionTwoId = boxesChosenId[1];

    if ((boxesChosen[0] === boxesChosen[1]) &&  (optionOneId != optionTwoId)) {
      boxes[optionOneId].setAttribute("src", "images/white.JPG");
      boxes[optionTwoId].setAttribute("src", "images/white.JPG");
      boxes[optionOneId].removeEventListener('click', flipBox)
      boxes[optionTwoId].removeEventListener('click', flipBox)
      boxesWon.push(boxesChosen);
    } else {
      boxes[optionOneId].setAttribute("src", "images/click.png");
      boxes[optionTwoId].setAttribute("src", "images/click.png");
    }

    boxesChosen = [];
    boxesChosenId = [];
    resultDisplay.textContent = boxesWon.length
    if (boxesWon.length === boxArray.length/2){
        resultDisplay.textContent = 'Tabriklaymiz g\'olib bo\'dingiz'
    }
  }

  creatBox();
});
