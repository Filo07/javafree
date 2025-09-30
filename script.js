let player;

function onYouTubeIframeAPIReady() {

  player = new YT.Player('player', {
    videoId: 'RDmXTYvRf3qew', 
    playerVars: {
      autoplay: 0,
      controls: 1,
      rel: 0
    },
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  
}

document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById("btn");
  const ruta = document.getElementById("ruta");

  btn.addEventListener('click', function() {
    ruta.classList.add("synlig");
    btn.style.display = "none";

    if (player) {
      player.unMute();
      player.playVideo();
    }
  });

  ruta.addEventListener('click', function() {
    ruta.classList.remove("synlig");
    btn.style.display = "block";
    if (player) {
      player.pauseVideo();
    }
  });
});
