"use strict";

chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    id: "Reload",
    title: "Reload Extension",
    contexts: ["page_action"],
  });
  chrome.contextMenus.onClicked.addListener((info, tabs) => {
    if (info.menuItemId === "Reload") {
      chrome.runtime.reload();
    }
  });
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
    chrome.tabs.sendMessage(tab.id, {args: info.selectionText}, function(response) {
      console.log('response??', response);
    });
  }
});
