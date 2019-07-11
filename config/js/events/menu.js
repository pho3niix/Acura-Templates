export default function menu(){
    sideMenu();
    footerMenu();
    ficha_modal();
    tecni_modal();
}

function sideMenu(){
    var menu = document.getElementsByClassName("menu");
    var slide = document.getElementById("slide_m");
    var close = document.getElementById("m_close");

    menu[1].addEventListener("click", s_menu);

    close.addEventListener("click", s_close);

    function s_menu(){
        slide.style.width = "40vw";
    }

    function s_close(){
        slide.style.width = "0";
    }
}

function footerMenu(){
    var f_menu = document.getElementById("footerMenu");
    var choose = document.getElementById("choose");
    var r_footer = document.getElementById("r_footer");
    var r_close = document.getElementById("f_close");

    choose.addEventListener("click", footer);

    r_close.addEventListener("click", ft_close);

    function footer(){
        f_menu.style.height = "40vh";
    }

    function ft_close(){
        f_menu.style.height = "0";
    }
}

function ficha_modal(){
    var fmodal = document.getElementById("m_ficha");
    var close_ficha = document.getElementById("fs_close");

    close_ficha.addEventListener("click", function(){
        fmodal.style.display = "none";
    });

    var btn = document.getElementsByClassName("enlace");

    btn[0].addEventListener("click", function(){
        fmodal.style.display = "flex";
    });
}

function tecni_modal(){
    var tmodal = document.getElementById("m_tecni");
    var close_tecni = document.getElementById("ti_close");

    close_tecni.addEventListener("click", function(){
        tmodal.style.display = "none";
    });

    var btn = document.getElementsByClassName("enlace");

    btn[1].addEventListener("click", function(){
        tmodal.style.display = "flex";
    });
}