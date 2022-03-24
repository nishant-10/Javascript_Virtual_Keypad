let normalcharArray = [
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
let specialCharArray = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "{",
  "}",
  "|",
  ":",
  "<",
  ">",
  "?",
  "\\",
];
let charArray = [];
function shuffle(option) {
  let array = normalcharArray;
  if (option == "1") {
    array = specialCharArray;
  }

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
  backButton.innerText = "back <--";
  backButton.setAttribute("value", "back");
  backButton.setAttribute("id", "backButt");
  backButton.setAttribute("class", "sButton");
  document.getElementById("staticButtons").appendChild(shiftButton);
  document.getElementById("staticButtons").appendChild(SpaceButton);
  document.getElementById("staticButtons").appendChild(backButton);
  document.getElementById("staticButtons").appendChild(oneTwoThreebutton);

  document.getElementById("shiftButt").addEventListener("click", () => {
    deleteDefaultKeypad();
    shuffle("0");
    buildShiftKeypad();
    console.log("shift pressed");
  });
  document.getElementById("spaceButt").addEventListener("click", () => {
    let textValue = document.getElementById("txtBox");
    textValue.value += " ";
  });
  document.getElementById("backButt").addEventListener("click", () => {
    let textValue = document.getElementById("txtBox");
    let str = textValue.value.slice(0, -1);
    textValue.value = str;
  });

  document.getElementById("oneTwoThreeButt").addEventListener("click", () => {
    deleteDefaultKeypad();
    shuffle("1");
    buildSpecKeypad();
  });
}
let oneTwoThreePressed = true;

function buildSpecKeypad() {
  if (!shiftPressed) {
    shiftPressed = !shiftPressed;
  }
  if (oneTwoThreePressed) {
    charArray.forEach((char) => {
      oneTwoThreePressed = false;
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
    oneTwoThreePressed = true;
    shuffle("0");
    console.log("calling from false");
    buildDefaultKeypad();
  }
}
let shiftPressed = true;
function buildShiftKeypad() {
  console.log("shift called with status" + shiftPressed);
  console.log("shift keypad values" + charArray);
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
  console.log("default keypad values" + charArray);
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
    shuffle("0");
    buildDefaultKeypad();
  }
});
function triggerKeypad() {
  shuffle("0");
  document.getElementById("keypadButton").disabled = true;
  if (document.getElementById("keypadButton").disabled) {
    document.getElementById("keypadButton").textContent = "keypad active";
  } else {
    document.getElementById("keypadButton").textContent = "use virtual keypad";
  }

  buildDefaultKeypad();
  let container = document.getElementById("container");
  container.style.display = "block";
}
function cleanKeypad() {
  container.style.display = "none";
  document.getElementById("keypadButton").disabled = false;
  document.getElementById("keypadButton").textContent = "use virtual keypad";
  deleteDefaultKeypad();
}
