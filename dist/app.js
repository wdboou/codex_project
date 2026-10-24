"use strict";
const copyButton = document.getElementById("copy-citation");
const code = document.getElementById("bibtex");
const status = document.getElementById("status");
let statusTimer;
function announce(message) {
  window.clearTimeout(statusTimer);
  status.textContent = message;
  status.classList.add("visible");
  statusTimer = window.setTimeout(() => {
    status.classList.remove("visible");
    status.textContent = "";
  }, 5000);
}
if (copyButton && code && status) {
  copyButton.hidden = false;
  copyButton.addEventListener("click", async () => {
    try {
      if (!navigator.clipboard) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(code.textContent.trim() + "\n");
      announce("Citation copied.");
    } catch {
      const selection = window.getSelection();
      if (selection) {
        const range = document.createRange();
        range.selectNodeContents(code);
        selection.removeAllRanges();
        selection.addRange(range);
      }
      announce("Citation selected. Use your browser's Copy command, or download BibTeX.");
    }
  });
}
