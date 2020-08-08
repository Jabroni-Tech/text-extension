/**
 * Returns the highlighted text from a webpage.
 * @argument {string, number, number} 
 * String of the highlighted text, 2nd and 3rd arguments are the coordinates for the element
 * @return {null} String of the highlighted text.
 */
const insertDiv = (text, x, y) => {
    var div = document.createElement('div');
    div.innerHTML = text
    div.className = 'text'
    document.querySelector("body").appendChild(div);
}

/**
 * Returns the highlighted text from a webpage.
 * @return {string} String of the highlighted text.
 */
const grabHighlightedText = () => {
    return window.getSelection().toString();
  };

/* Popup logic TODO: Decide if needed */
  let page = document.getElementById("gettingStarted");
  function changeColor() {
    page.style.color = "red";
  }
  changeColor();