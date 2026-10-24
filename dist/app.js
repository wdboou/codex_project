"use strict";
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
if (status) {
  document.querySelectorAll("[data-copy-citation]").forEach((button) => {
    const code = document.getElementById(button.dataset.copyCitation);
    if (!code) return;
    button.hidden = false;
    button.addEventListener("click", async () => {
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
  });
}
