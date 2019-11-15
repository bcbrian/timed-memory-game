function initGame() {
  const buttonEl = document.querySelector("button");
  const startContainerEl = document.getElementById("start-container");
  const gameContainerEl = document.getElementById("game-container");

  buttonEl.setAttribute("class", "btn btn-secondary btn-lg");

  function startGame() {
    buttonEl.setAttribute("class", "btn btn-success btn-lg");
    startContainerEl.setAttribute("class", "container d-none");
    gameContainerEl.setAttribute("class", "container");

    let clicks = [];

    // select all the memory buttons
    const tileEls = document.querySelectorAll(".tiles-js");
    // add an event listener to all the memory buttons
    tileEls.forEach(function(tileEl) {
      tileEl.addEventListener("click", function() {
        console.log(tileEl);
        // define the behavior for the click
        clicks.push(tileEl);
        // if the first click STOP :P
        if (clicks.length < 2) {
          return;
        }
        // else the second check for equality
        if (
          clicks[0] !== clicks[1] &&
          clicks[0].innerText === clicks[1].innerText
        ) {
          alert("winner");
        }

        // when all done
        clicks = [];
      });
    });
  }
  buttonEl.addEventListener("click", startGame);
}
initGame();
