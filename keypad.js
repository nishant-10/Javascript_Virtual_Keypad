let charArray = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  ",",
  ".",
  "/",
  ";",
  "'",
  "[",
  "]",
  "-",
  "=",
];
function shuffle() {
  let array = charArray;
  for (var i = array.length - 1; i > 0; i--) {
    // Generate random number
    var j = Math.floor(Math.random() * (i + 1));

    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  charArray = array;
}
function buildOtherButtons() {
  let shiftButton = document.createElement("button");
  shiftButton.innerText = "SHIFT";
  shiftButton.setAttribute("value", "SHIFT");
  shiftButton.setAttribute("id", "shiftButt");
  shiftButton.setAttribute("class", "sButton");
  let SpaceButton = document.createElement("button");
  SpaceButton.innerText = "SPACE";
  SpaceButton.setAttribute("value", " ");
  SpaceButton.setAttribute("id", "spaceButt");
  SpaceButton.setAttribute("class", "sButton");
  let oneTwoThreebutton = document.createElement("button");
  oneTwoThreebutton.innerText = "123..";
  oneTwoThreebutton.setAttribute("value", "oneTwoThreeButt");
  oneTwoThreebutton.setAttribute("id", "oneTwoThreeButt");
  oneTwoThreebutton.setAttribute("class", "sButton");
  let backButton = document.createElement("button");
  backButton.innerText = "X";
  backButton.setAttribute("value", "back");
  backButton.setAttribute("id", "backButt");
  backButton.setAttribute("class", "sButton");
  document.getElementById("staticButtons").appendChild(shiftButton);
  document.getElementById("staticButtons").appendChild(SpaceButton);
  document.getElementById("staticButtons").appendChild(oneTwoThreebutton);
  document.getElementById("staticButtons").appendChild(backButton);

  document.getElementById("shiftButt").addEventListener("click", () => {
    deleteDefaultKeypad();
    shuffle();
    buildShiftKeypad();
  });
}
let shiftPressed = true;
function buildShiftKeypad() {
  if (shiftPressed) {
    charArray.forEach((char) => {
      shiftPressed = false;
      let c = char;
      let button = document.createElement("button");
      button.innerText = char.toUpperCase();
      button.setAttribute("value", char.toUpperCase());
      button.setAttribute("id", char.toUpperCase());
      button.setAttribute("class", "vButton");
      button.addEventListener("click", () => {
        console.log("here");
        let textValue = document.getElementById("txtBox");
        textValue.value += button.value;
      });
      document.getElementById("container").appendChild(button);
    });
    buildOtherButtons();
  } else {
    shiftPressed = true;
    buildDefaultKeypad();
  }
}
function buildDefaultKeypad() {
  charArray.forEach((char) => {
    let c = char;
    let button = document.createElement("button");
    button.innerText = char;
    button.setAttribute("value", char);
    button.setAttribute("id", char);
    button.setAttribute("class", "vButton");
    button.addEventListener("click", () => {
      console.log("here");
      let textValue = document.getElementById("txtBox");
      textValue.value += button.value;
    });
    document.getElementById("container").appendChild(button);
  });
  buildOtherButtons();
}
function deleteDefaultKeypad() {
  document.querySelectorAll(".vButton").forEach((butt) => {
    var myobj = document.getElementById(butt.id);
    myobj.remove();
  });
  document.getElementById("oneTwoThreeButt").remove();
  document.getElementById("spaceButt").remove();
  document.getElementById("shiftButt").remove();
  document.getElementById("backButt").remove();
}
(function () {})();
document.addEventListener("visibilitychange", function () {
  document.title = document.visibilityState;
  let staus = true;
  if (status) {
    deleteDefaultKeypad();
    status = false;
  } else {
    deleteDefaultKeypad();
    shuffle();
    buildDefaultKeypad();
  }
});
function triggerKeypad() {
  shuffle();
  console.log("hereeeeeeeee");
  document.getElementById("keypadButton").disabled = true;
  buildDefaultKeypad();
  let container = document.getElementById("container");
  container.style.display = "block";
}
function cleanKeypad() {
  container.style.display = "none";
  document.getElementById("keypadButton").disabled = false;
  deleteDefaultKeypad();
}
