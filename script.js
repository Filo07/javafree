let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: 'dQw4w9WgXcQ', // <-- byt till ditt video-ID
    playerVars: {
      autoplay: 0,  // vi styr själva när den startar
      controls: 1,
      rel: 0
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById("btn");
  const ruta = document.getElementById("ruta");

  btn.addEventListener('click', function() {
    ruta.classList.add("synlig");
    ruta.classList.remove("osynlig");
    btn.classList.remove("synlig");
    btn.classList.add("osynlig");

    // Spela video MED ljud
    if (player) {
      player.unMute();
      player.playVideo();
    }
  });

  ruta.addEventListener('click', function() {
    ruta.classList.add("osynlig");
    ruta.classList.remove("synlig");
    btn.classList.remove("osynlig");
    btn.classList.add("synlig");

    if (player) {
      player.pauseVideo();
    }
  });
});
