let plusButton = document.querySelectorAll(".title img");
let latestaccordion;
plusButton.forEach((elem) => {
  elem.addEventListener('click', () => {
    let title = elem.parentElement;
    let accordion = title.parentElement;
    let content = accordion.querySelector('.content > .text');
    let t = elem.src.toString().split('/');
    t = t[t.length - 1];
    if (t=="icon-plus.svg") {
      content.style.height = "60px";
      elem.src = "./assets/images/icon-minus.svg";
    }
    else {
      content.style.height = "0px";
      elem.src = "./assets/images/icon-plus.svg";
    }
  });
});