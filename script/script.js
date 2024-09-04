let plusButton = document.querySelectorAll(".title img");
let latestaccordion;
plusButton.forEach((elem) => {
  elem.addEventListener('click', () => {
    let title = elem.parentElement;
    let accordion = title.parentElement;
    let content = accordion.querySelector('.content > .text');
    console.log(elem.src.toString());
    if (elem.src.toString()=="http://127.0.0.1:5500/assets/images/icon-plus.svg") {
      content.style.height = "60px";
      elem.src = "./assets/images/icon-minus.svg";
    }
    else {
      content.style.height = "0px";
      elem.src = "http://127.0.0.1:5500/assets/images/icon-plus.svg";
    }
  });
});