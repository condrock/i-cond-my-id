/*
╔══════════════════════════════════════════════════════════╗
║  PROJECT   : Cond Rock — Link Hub                         ║
║  WEBSITE   : https://condrock.eu.org                      ║
║  STACK     : HTML5 · CSS3 · Vanilla JavaScript              ║
║  STATUS    : Production                                    ║
║  BUILT BY  : COND ROCK                                     ║
╚══════════════════════════════════════════════════════════╝
*/

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
