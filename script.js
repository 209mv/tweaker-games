const games = [
  { name: "Square Game", path: "games/game1/index.html" },
  { name: "Test Game", path: "games/game2/index.html" }
];

const container = document.getElementById("games");

games.forEach(game => {
  const div = document.createElement("div");
  div.className = "game";
  div.innerText = game.name;

  div.onclick = () => {
    window.location.href = game.path;
  };

  container.appendChild(div);
});

document.getElementById("search").addEventListener("input", (e) => {
  const term = e.target.value.toLowerCase();

  document.querySelectorAll(".game").forEach(g => {
    g.style.display = g.innerText.toLowerCase().includes(term)
      ? "block"
      : "none";
  });
});