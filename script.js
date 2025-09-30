document.addEventListener('DOMContentLoaded', function(){
    const btn=document.getElementById("btn");
    const ruta=document.getElementById("ruta");

    btn.addEventListener('click',function(){
    ruta.classList.add("synlig");
    ruta.classList.remove("osynlig");
    btn.classList.remove("synlig");
    btn.classList.add("osynlig");
    
                                    
    });
    ruta.addEventListener('click',function(){
    ruta.classList.add("osynlig");
    ruta.classList.remove("synlig");
    btn.classList.remove("osynlig");
    btn.classList.add("synlig");
    
    });
});
