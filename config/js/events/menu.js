export default function menu(){
    var menu = document.getElementById("nav");
    var slide = document.getElementById("slide_m");
    var close = document.getElementById("m_close");

    menu.addEventListener("click", s_menu);

    close.addEventListener("click", s_close);

    function s_menu(){
        slide.style.width = "35vw";
    }

    function s_close(){
        slide.style.width = "0";
    }
}