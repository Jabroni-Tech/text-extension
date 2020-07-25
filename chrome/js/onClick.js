window.addEventListener("click", function (event) {
  console.log("in the click WINDOW", event);
});

document.addEventListener("click", function (event) {
  console.log("were in the click DOCUMENT", event);
});

/**
 * Returns the highlighted text from a webpage.
 * @return {string} String of the highlighted text.
 */
const grabHighlightedText = () => {
  return window.getSelection().toString();
};
