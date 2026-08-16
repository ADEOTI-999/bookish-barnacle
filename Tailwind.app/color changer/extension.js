function changeColor(color) {chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.scripting.executeScript ({
        target: {tabId: tabs[0].id},
        func: (col) => {document.body.style.backgroundColor = col; },
        args: [color]
    });
});
}
document
  .getElementById("grey")
  .addEventListener("click", () => changeColor("#6b7280"));
document
  .getElementById("teal")
  .addEventListener("click", () => changeColor(" #008080"));
document
  .getElementById("olive")
  .addEventListener("click", () => changeColor(" #808000"));
document
  .getElementById("reset")
  .addEventListener("click", () => changeColor(""));
