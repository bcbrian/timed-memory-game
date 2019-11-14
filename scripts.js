const buttonEl = document.querySelector("button");
buttonEl.setAttribute("class", "btn btn-secondary btn-lg");
console.log("foo");
function takesReallllllyLongTime(cb) {
  console.log("bar");
  /*
  TAKES REALLY LONG TIME TO DO THING
  */
  cb("the info that you wanted");
}

console.log("baz");
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
