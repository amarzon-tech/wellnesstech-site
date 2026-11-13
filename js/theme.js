(function () {
  var KEY = "wt-theme";
  var btn = document.getElementById("theme-toggle");
  if (!btn) return;

  function current() {
    var explicit = document.documentElement.getAttribute("data-theme");
    if (explicit === "light" || explicit === "dark") return explicit;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function apply(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem(KEY, theme); } catch (e) {}
    btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    btn.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
  }

  apply(current());
  btn.addEventListener("click", function () {
    apply(current() === "dark" ? "light" : "dark");
  });
})();
