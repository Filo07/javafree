document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById("btn");
    const ruta = document.getElementById("ruta");
    const video = document.getElementById("myVideo");

    btn.addEventListener('click', function() {
        ruta.classList.add("synlig");
        ruta.classList.remove("osynlig");
        btn.classList.remove("synlig");
        btn.classList.add("osynlig");

        // spela upp från början
        video.currentTime = 0;
        video.play();
    });

    ruta.addEventListener('click', function() {
        ruta.classList.add("osynlig");
        ruta.classList.remove("synlig");
        btn.classList.remove("osynlig");
        btn.classList.add("synlig");

        // pausa videon när rutan stängs
        video.pause();
    });
});
