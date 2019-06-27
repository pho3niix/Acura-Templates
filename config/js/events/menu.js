export default function menu(){
    sideMenu();
    footerMenu();
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
        f_menu.style.height = "45vh";
    }

    function ft_close(){
        f_menu.style.height = "0";
    }
}