"use strict";
chrome.runtime.onInstalled.addListener(function () {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: "developer.chrome.com" }
          })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }
    ]);
  });
  chrome.contextMenus.removeAll();
  chrome.contextMenus.create({
    id: "enhance",
    title: "CSI Enhance",
    contexts: ["selection"],
  });
  chrome.contextMenus.onClicked.addListener((info, tabs) => {
    console.log(info.selectionText)
  });
});
