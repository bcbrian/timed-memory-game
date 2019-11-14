const buttonEl = document.querySelector("button");
buttonEl.setAttribute("class", "btn btn-secondary btn-lg");

function takesReallllllyLongTime(callBackFunction) {
  /*
  TAKES REALLY LONG TIME TO DO THING
  */
  setTimeout(function() {
    buttonEl.setAttribute("class", "btn btn-success btn-lg");
    console.log("done!");
    callBackFunction("the info that you wanted");
  }, 10000);
}

takesReallllllyLongTime(function(info) {
  console.log(info);
  buttonEl.setAttribute("class", "btn btn-danger btn-lg");
});

console.log("start");
setTimeout(function() {
  buttonEl.setAttribute("class", "btn btn-success btn-lg");
  console.log("done!");
}, 5000);
console.log("done?");

setInterval(function() {
  buttonEl.setAttribute("class", "btn btn-dark btn-lg");
  console.log("done!");
}, 1444);

setInterval(function() {
  buttonEl.setAttribute("class", "btn btn-light btn-lg");
  console.log("done!");
}, 2444);
