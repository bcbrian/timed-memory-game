function initGame() {
  const buttonEl = document.querySelector("button");
  const startContainerEl = document.getElementById("start-container");
  const gameContainerEl = document.getElementById("game-container");

  let clicks = [];
  function renderCards(cards) {
    let rowEl;

    gameContainerEl.innerHTML = "";
    cards.forEach(function(card, i) {
      console.log("card => ", card, i);
      if (i % 4 === 0) {
        rowEl = document.createElement("div");
        rowEl.setAttribute("class", "row mt-5");
        gameContainerEl.append(rowEl);
      }

      const colEl = document.createElement("div");
      colEl.setAttribute(
        "class",
        "col d-flex align-items-center justify-content-center"
      );
      rowEl.append(colEl);

      const buttonEl = document.createElement("button");
      buttonEl.innerHTML = card.value;
      buttonEl.setAttribute("class", "btn btn-primary btn-lg text-primary");
      if (card.isFlippedUp) {
        buttonEl.classList.remove("text-primary");
      }
      colEl.append(buttonEl);

      buttonEl.addEventListener("click", function() {
        console.log(buttonEl);
        // define the behavior for the click
        // if the first click STOP :P
        if (clicks.length >= 2) {
          return;
        }

        clicks.push(card);
        card.isFlippedUp = true;

        if (clicks.length < 2) {
          renderCards(cards);
          return;
        }
        // else the second check for equality
        if (clicks[0] !== clicks[1] && clicks[0].value === clicks[1].value) {
          clicks[0].isMatched = true;
          clicks[1].isMatched = true;
          if (
            cards.some(function(card) {
              return !card.isMatched;
            })
          ) {
            renderCards(cards);
          } else {
            alert("game over you win");
            // startGame();
            // save winner in local storage;
          }
          clicks = [];
        } else {
          setTimeout(function() {
            clicks[0].isFlippedUp = false;
            clicks[1].isFlippedUp = false;
            renderCards(cards);
            clicks = [];
          }, 1000);
        }

        renderCards(cards);

        // when all done
      });
    });
  }

  function startGame() {
    // const cards = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
    buttonEl.setAttribute("class", "btn btn-success btn-lg");
    startContainerEl.setAttribute("class", "container d-none");
    renderCards(cards);
    gameContainerEl.setAttribute("class", "container");
  }
  // buttonEl.addEventListener("click", startGame);
  startGame();
}
initGame();
