// Account modal
const modal = document.getElementById("accountModal");
const btn = document.getElementById("accountBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = () => modal.style.display = "flex";
span.onclick = () => modal.style.display = "none";
window.onclick = e => { if(e.target === modal) modal.style.display="none"; }

// Open game overlay
function openGame(url){
  document.getElementById("gameOverlay").style.display="flex";
  document.getElementById("gameFrame").src = url;
}

// Close game overlay
function closeGame(){
  document.getElementById("gameOverlay").style.display="none";
  document.getElementById("gameFrame").src = "";
}

// Fullscreen toggle
function toggleFullscreen(){
  const iframe = document.getElementById("gameFrame");
  if(iframe.requestFullscreen){
    iframe.requestFullscreen();
  } else if(iframe.webkitRequestFullscreen){
    iframe.webkitRequestFullscreen();
  }
}
