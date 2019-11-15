function initGame() {
  const buttonEl = document.querySelector("button");
  const startContainerEl = document.getElementById("start-container");
  const gameContainerEl = document.getElementById("game-container");

  buttonEl.setAttribute("class", "btn btn-secondary btn-lg");

  function startGame() {
    buttonEl.setAttribute("class", "btn btn-success btn-lg");
    startContainerEl.setAttribute("class", "container d-none");
    gameContainerEl.setAttribute("class", "container");

    // select all the memory buttons
    // add an event listener for all the memory buttons
    // define the behavior for the click
    // if the first click STOP :P
    // else the second check for equality
  }
  buttonEl.addEventListener("click", startGame);
}
initGame();
