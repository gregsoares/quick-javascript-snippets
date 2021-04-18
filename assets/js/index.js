const labels = document.getElementsByClassName("changeMe");

labels[0].textContent = "First Label";
labels[1].textContent = "Second Label";
labels[2].textContent = "Third Label";

const labelClick = (label) => {
  const currentState = document.getElementById(
    label.target.getAttribute("name").toString()
  ).style.display;
  document.getElementById(
    label.target.getAttribute("name").toString()
  ).style.display = currentState === "none" ? "block" : "none";
};

for (let i = 0; i < labels.length; i++) {
  labels[i].addEventListener("click", labelClick);
}
console.log(`# of labels: ${labels.length}`);

const toggleByStyle = (id) => {
  const currentState = document.getElementById(
    id.target.getAttribute("name").toString()
  ).style.display;
  document.getElementById(
    id.target.getAttribute("name").toString()
  ).style.display = currentState === "none" ? "block" : "none";
};

const toggleByClass = (id) => {
  document
    .getElementById(id.target.getAttribute("name").toString())
    .classList.toggle("hidden");
};
