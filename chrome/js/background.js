"use strict";

chrome.runtime.onInstalled.addListener(function () {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: "developer.chrome.com" },
          }),
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()],
      },
    ]);
  });
});

/* Context Menu logic */
chrome.contextMenus.removeAll();
chrome.contextMenus.create({
  id: "enhance",
  title: "CSI Enhances",
  contexts: ["all"],
});
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (tab) {
      /* Create the code to be injected */
      var code = [
          'var d = document.createElement("div");',
          'var word = ' + JSON.stringify(info.selectionText),
          'd.innerHTML = word;',
          'd.setAttribute("style", "'
              + 'background-color: red; '
              + 'position: fixed; '
              + 'top: 70px; '
              + 'left: 30px; '
              + 'z-index: 9999; '
              + '");',
          'document.body.appendChild(d);'
      ].join("\n");

      /* Inject the code into the current tab */
      chrome.tabs.executeScript(tab.id, { code: code });
  }
});
