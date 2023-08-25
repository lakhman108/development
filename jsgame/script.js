let emojis = ["😀", "👍", "❤️", "😂", "🤔", "🎉", "👏", "🔥", "🥰", "🌟"];

const blur = document.getElementById("panel");

// blur.style.color = "white";
// blur.style.boxShadow = "0px 5px 5px white";

blur.style.transform = "translateY(-30px)";
blur.style.transition = "1s ease-in-out";
blur.style.animation = "filter 2s ease-in-out";
blur.style.backdropFilter = "blur(5px)";

const keyframes = `
  @keyframes filter {
    0% {
      filter: blur(3px);
    }
    
    100% {
      filter: blur(0px);
    }
  }
`;
// Create a style element and set the keyframes in it

const styleElement = document.createElement("style");
styleElement.innerHTML = keyframes;
document.head.appendChild(styleElement);
// blur.style.animation ="blur 1s forwards"; // Apply the blur animation
// setTimeout(() => {
//   instructions.style.display = "none";
//   game.style.display = "block";
//   startGame();
// }, 1000);

let score = document.querySelector("#score");
let score1 = 0;

function addscore(thisscore, innernumber) {
  innernumber = parseInt(innernumber);
  if (thisscore === innernumber) {
    score1 += 5;
    score.innerText = score1;
    random_number_generator();
    makebubules();
  }
}

function random_color_generator() {
  let str = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += str[Math.floor(Math.random() * 16)];
  }
  return color;
}

let tim = document.querySelector("#timer");
let pbtom = document.querySelector("#pbtom");

function timer() {
  let id = setInterval(timing, 1000);
  let x = 60;
  function timing() {
    if (x <= 0) {
      x = 0;
      clearInterval(id);
      alert("Game Over Your Score is " + score1);

      // window.location.href = "score.html";
    }
    tim.innerText = x;
    x--;
  }
}
timer();

let hit = document.querySelector("#hit");

function random_number_generator() {
  hit.innerText = Math.floor(Math.random() * 10);
}

function makebubules() {
  let str = "";
  for (let i = 0; i < 120; i++) {
    str += `<div id="buble">${Math.floor(Math.random() * 10)}</div>`;
  }
  pbtom.innerHTML = str;
}

pbtom.addEventListener("click", function (e) {
  if (e.target.id === "buble") {
    addscore(parseInt(e.target.innerText), hit.innerText, e.target);
  }
});

random_number_generator();
makebubules();
