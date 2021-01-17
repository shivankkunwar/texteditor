//TODO: Convert all functions and any other possible elements to ES6

/**
 * Update the output text as you type in the textarea
 */
window.onload = () => {
  document.getElementById("text-input").value = "";
};
updateText = () => {
  console.log("working");
  let text = document.getElementById("text-input").value;
  document.getElementById("text-output").innerText = text;
};

/**
 * Toggle the bold class for the. output text
 */
makeBold = (elem) => {
  elem.classList.toggle("active");
  document.getElementById("text-output").classList.toggle("bold");
};

/**
 * Toggle the italic class for the output text
 */
makeItalic = (elem) => {
  elem.classList.toggle("active");
  document.getElementById("text-output").classList.toggle("italic");
};

/**
 * Toggle the underline class for the output text
 */
makeUnderline = (elem) => {
  elem.classList.toggle("active");
  let ForText = document.getElementById("text-output");
  if (ForText.classList.contains("underline"))
    document.getElementById("text-output").classList.remove("underline");
  else document.getElementById("text-output").classList.add("underline");
};

/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align butttons
 */
alignText = (elem, alignType) => {
  document.getElementById("text-output").style.textAlign = alignType;
  let buttonList = document.getElementsByClassName("align");
  for (let button of buttonList) {
    button.classList.remove("active");
  }

  elem.classList.add("active");
};
