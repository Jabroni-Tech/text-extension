window.addEventListener("mouseup", function(event) {
  console.log('in the mouseup WINDOW', event);
});

document.addEventListener("mouseup", function (event) {
  console.log("were in the mouseup DOCUMENT", event);
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  insertDiv(request.args);
  sendResponse('good');
});
