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
    div.style.height = '500'
    div.style.width = '500'
    div.style.backgroundColor = 'green'
    div.style.position = 'absolute'
    div.id = 'popup'
    const position = grabWindowCenterCoordinates()
    div.style.top = `${position[1]}px`
    div.style.left = `${position[0]}px`
    document.body.appendChild(div);
    document.querySelector("body").appendChild(div);
}

/**
 * Returns the coordinates of the cursor from onmouseup
 * @argument {event}
 * Click event from onmouseup
 * @return {Array[number, number]} Tuple of coordinates
 */
const grabCursorCoordinates = (event) => {
    return [event.clientX, event.clientY]
}

/**
 * Returns the coordinates of the center of the window
 * @return {Array[number, number]} Tuple of coordinates
 */
const grabWindowCenterCoordinates = () => {
    return [Math.round(window.innerWidth/2), Math.round(window.innerHeight/2)]
}

/**
 * Returns the highlighted text from a webpage.
 * @return {string} String of the highlighted text.
 */
const grabHighlightedText = () => {
    return window.getSelection().toString();
  };

// /* Popup logic TODO: Decide if needed */
//   let page = document.getElementById("gettingStarted");
//   function changeColor() {
//     page.style.color = "red";
//   }
//   changeColor();
