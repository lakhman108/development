let emojis = ["😀", "👍", "❤️", "😂", "🤔", "🎉", "👏", "🔥", "🥰", "🌟"];

const blur = document.getElementById("panel");

// blur.style.color = "white";
// blur.style.boxShadow = "0px 5px 5px white";

blur.style.transform = "translateY(-2rem)";
blur.style.transition = "1s ease-in-out";
blur.style.animation = "filter 2s ease-in-out";
blur.style.backdropFilter = "blur(0.3rem)";

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
  if (thisscore == innernumber) {
    score1 += 5;
    score.innerText = score1;
    random_number_generator();
    makebubules();
  }
}

let tim = document.querySelector("#timer");
let pbtom = document.querySelector("#pbtom");

function timer() {
  let id = setInterval(timing, 1000);
  let x = 60;
  function timing() {
    if (x <= 0) {
      x = 0;
       localStorage.setItem("score", score1);
      clearInterval(id);
    
      // alert("Game Over Your Score is " + score1);

      window.location.href = "yourscore.html";
    }
    tim.innerText = x;
    x--;
  }
}
timer();

let hit = document.querySelector("#hit");

function random_number_generator() {
  hit.innerText = emojis[Math.floor(Math.random() * 10)];
  
}

function random_color_generator() {
  let color = Math.floor(Math.random() * 16777215).toString(16);
  color = "#" + color;
  return color;
}


function makebubules() {


  let str = "";
  for (let i = 0; i < 500; i++) {


    let random_index_generator = Math.floor(Math.random() * 10);
    str += `<div id="buble">${emojis[random_index_generator]}</div>`;
  }

  pbtom.innerHTML = str;
 

}

pbtom.addEventListener("click", function (e) {

  if (e.target.id === "buble") {
    addscore(e.target.innerText, hit.innerText, e.target);
  }

  
});

let isColorOn = false;

setInterval(function color_changer() {
  let allbubules = document.querySelectorAll("#buble");
  let hitText = hit.innerText;

  for (let i = 0; i < 30; i++) {
    if (allbubules[i].innerText === hitText) {
      setTimeout(function () {
        if (isColorOn) {
          allbubules[i].style.backgroundColor = random_color_generator();
        } else {
          allbubules[i].style.backgroundColor = ""; // Turn off the background color
        }
        // allbubules[i].style.transition = "1s ease-in-out";
      }, i * 100); // Adjust the time delay as needed
    }
  }

  // Toggle the state for the next iteration
  isColorOn = !isColorOn;
}, 500);


random_number_generator();
makebubules();
