let currentIndex = localStorage.getItem("projectIndex")
  ? parseInt(localStorage.getItem("projectIndex"))
  : 0;
let projects = [];

fetch("100_JS_Real_World_Projects.json")
  .then((res) => res.json())
  .then((data) => {
    projects = data;
    showProject(currentIndex);
  });

function resetProject() {
  localStorage.setItem("projectIndex", 0);
  location.reload();
}
function showProject(index) {
  if (index >= projects.length) {
    document.querySelector(
      ".glass-card"
    ).innerHTML = `<h2>🎉 All Projects Completed!</h2>
    <button onclick = "resetProject()" id="complete-btn">Reset Project</button>`;
    return;
  }
  const project = projects[index];
  document.getElementById("project-title").textContent = `${index + 1}. ${
    project.title
  }`;
  document.getElementById(
    "project-category"
  ).textContent = `📁 Category: ${project.category}`;
  document.getElementById(
    "project-difficulty"
  ).textContent = `⚙️ Difficulty: ${project.difficulty}`;
  document.querySelector(".tracker-bar").style.width = `${currentIndex + 1}%`;
}

document.getElementById("complete-btn").addEventListener("click", () => {
  currentIndex++;
  localStorage.setItem("projectIndex", currentIndex);
  showProject(currentIndex);
});
