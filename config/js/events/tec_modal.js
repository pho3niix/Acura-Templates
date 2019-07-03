$(document).ready(function(){
    mdl_image();
});

function mdl_image(){
    var show = document.getElementById("shows");
    var mdlPre = document.getElementById("pre_modal");
    var close = document.getElementById("e_close");

    show.addEventListener("click", function(){
        mdlPre.style.display = "flex";
        mdlPre.style.animationName = "zoom";
        mdlPre.style.animationDuration = ".5s";

    });

    close.addEventListener("click", function(){
        mdlPre.style.display = "none";
    });
}