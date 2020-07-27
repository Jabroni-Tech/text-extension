window.addEventListener("click", function(event) {
  console.log('in the click WINDOW', event)
  insertDiv('Testing this out')
});

document.addEventListener("click", function(event) {
    console.log('were in the click DOCUMENT', event)
});
