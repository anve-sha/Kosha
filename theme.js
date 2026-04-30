document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("themeToggle");
  if (!btn) return;

  // helper to set button appearance & ARIA label
  function updateToggleUI() {
    const isDark = document.body.classList.contains("dark");
    btn.textContent = isDark ? "Light mode" : "Dark mode";
    // optional: add emoji or icons
    btn.textContent = (isDark ? "☀️ " : "🌙 ") + btn.textContent;
    btn.setAttribute("aria-pressed", isDark ? "true" : "false");
  }

  // load saved theme
  const savedTheme = localStorage.getItem("smartExpenseTheme");
  if (savedTheme === "dark") document.body.classList.add("dark");
  updateToggleUI();

  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("smartExpenseTheme", isDark ? "dark" : "light");
    updateToggleUI();
  });
});
