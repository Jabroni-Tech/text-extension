chrome.contextMenus.create({
  id: "enhance",
  title: "CSI Enhancess",
  contexts: ["selection"],
});
chrome.contextMenus.onClicked.addListener((info, tabs) => {
  console.log(info.selectionText)
});
