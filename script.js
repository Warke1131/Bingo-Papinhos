document.querySelectorAll(".cell").forEach(cell => {
  if (!cell.classList.contains("center")) {
    cell.addEventListener("click", () => {
      cell.classList.toggle("marked");
    });
  }
});
