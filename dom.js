//PERFORMING SIMPLE CRUD ON THE DOM API

//UPDATE Elements In The DOM
function update() {
  var root = document.getElementById("root");
  root.innerHTML = "You Updated me";
}

//CREATE Elements In The DOM
function create() {
  var btn = document.createElement("BUTTON"); // Create a <button> element
  btn.innerHTML = "CREATED me"; // Insert text
  document.body.appendChild(btn); // Append <button> to <body>
}

//READ Elements In The DOM
var read = document.getElementById("read");
var show = document.getElementById("show");

function readShow() {
  show.innerHTML = read.textContent;
}

//DELETE Elements In The DOM

function go() {
  var elem = document.querySelector("#delete");
  elem.parentNode.removeChild(elem);

  //elem.style.display = "none";
}
