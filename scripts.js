function initGame() {
  const buttonEl = document.querySelector("button");
  buttonEl.setAttribute("class", "btn btn-secondary btn-lg");

  function startGame() {
    buttonEl.setAttribute("class", "btn btn-success btn-lg");
  }
  buttonEl.addEventListener("click", startGame);
}
initGame();
