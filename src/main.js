import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  const dateElement = document.getElementById("date");
  if (!dateElement) return null;
  dateElement.innerText = new Date().getFullYear();
});
