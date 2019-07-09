$(document).ready(function(){
    mdl_image();
    changeBack();
});

function mdl_image(){
    var show = document.getElementById("shows");
    var mdlPre = document.getElementById("pre_modal");
    var close = document.getElementById("e_close");
    var show2 = document.getElementById("shows2");
    var mdlPre2 = document.getElementById("pre_modal2");
    var close2 = document.getElementById("e_close2");

    show.addEventListener("click", function(){
        mdlPre.style.display = "flex";
        mdlPre.style.animationName = "zoom";
        mdlPre.style.animationDuration = ".5s";

    });

    show2.addEventListener("click", function(){
        mdlPre2.style.display = "flex";
        mdlPre2.style.animationName = "zoom";
        mdlPre2.style.animationDuration = ".5s";

    });

    close.addEventListener("click", function(){
        mdlPre.style.display = "none";
    });

    close2.addEventListener("click", function(){
        mdlPre2.style.display = "none";
    });
}


function changeBack(){
    var interior = document.getElementById("interior");
    var exterior = document.getElementById("exterior");
    var btnInt = document.getElementById("link_int");
    var btnOut = document.getElementById("link_out");
    var mdlPre = document.getElementById("pre_modal");
    var mdlPre2 = document.getElementById("pre_modal2");

    btnInt.addEventListener("click", function(){
        interior.style.display = "block";
        exterior.style.display = "none";
        interior.style.animationName = "zoom";
        interior.style.animationDuration = ".5s";
        mdlPre2.style.display = "none";
    });

    btnOut.addEventListener("click", function(){
        interior.style.display = "none";
        exterior.style.display = "block";
        mdlPre.style.display = "none";
    });

}