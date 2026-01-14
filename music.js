const music = document.getElementById("music");
music.volume = 0.5;

function startMusic() {
    music.play();
    document.removeEventListener("click",startMusic);
}
document.addEventListener("click",startMusic);