window.onload = function(){
    range();
    brochure();
    cotizar();
    sideMenu();
    footerMenu();
}

function range(){
    var btn_360 = document.getElementById("p_360");
    var range = document.getElementById("range");
    var close = document.getElementById("close_r");
    var image = document.getElementById("car_360");

    range.addEventListener("input", function(){
        if(range.value == 1){
            image.src = "../images/cars/02 mdx exterior 01.png";
        } else if(range.value == 2){
            image.src = "../images/cars/02 mdx exterior 02.png";
        }else if(range.value == 3){
            image.src = "../images/cars/02 mdx exterior 03.png";
        }else if(range.value == 4){
            image.src = "../images/cars/02 mdx exterior 04.png";}
        else if(range.value == 5){
            image.src = "../images/cars/02 mdx exterior 05.png";
        }
        else if(range.value == 6){
            image.src = "../images/cars/02 mdx exterior 06.png";
        }
        else if(range.value == 7){
            image.src = "../images/cars/02 mdx exterior 07.png";
        }
        else if(range.value == 8){
            image.src = "../images/cars/02 mdx exterior 08.png";
        }
        else if(range.value == 9){
            image.src = "../images/cars/02 mdx exterior 09.png";
        }
        else if(range.value == 10){
            image.src = "../images/cars/02 mdx exterior 10.png";
        }
        else if(range.value == 11){
            image.src = "../images/cars/02 mdx exterior 11.png";
        }
        else if(range.value == 12){
            image.src = "../images/cars/02 mdx exterior 12.png";
        }
        else if(range.value == 13){
            image.src = "../images/cars/02 mdx exterior 13.png";
        }
        else if(range.value == 14){
            image.src = "../images/cars/02 mdx exterior 14.png";
        }
        else if(range.value == 15){
            image.src = "../images/cars/02 mdx exterior 15.png";
        }
        else if(range.value == 16){
            image.src = "../images/cars/02 mdx exterior 16.png";
        }
        else if(range.value == 17){
            image.src = "../images/cars/02 mdx exterior 17.png";
        }
        else if(range.value == 18){
            image.src = "../images/cars/02 mdx exterior 18.png";
        }
        else if(range.value == 19){
            image.src = "../images/cars/02 mdx exterior 19.png";
        }
        else if(range.value == 20){
            image.src = "../images/cars/02 mdx exterior 20.png";
        }
        else if(range.value == 21){
            image.src = "../images/cars/02 mdx exterior 21.png";
        }
        else if(range.value == 22){
            image.src = "../images/cars/02 mdx exterior 22.png";
        }
        else if(range.value == 23){
            image.src = "../images/cars/02 mdx exterior 23.png";
        }else{
            image.src = "../images/cars/02 mdx exterior 24.png";
        }
    })

    btn_360.addEventListener("click", function(){
        btn_360.style.display = "none";
        range.style.display = "block";
        close.style.display = "block";
        image.src = "../images/cars/02 mdx exterior 01.png";
    });

    close.addEventListener("click", function(){
        btn_360.style.display = "block";
        range.style.display = "none";
        close.style.display = "none";
        range.value = 1;
        image.src = "../images/cars/camioneta.png";
    });
}

function brochure(){
    var modal = document.getElementById("modal");
    var close_m = document.getElementById("x_close");

    close_m.addEventListener("click", function(){
        modal.style.display = "none";
    });

    var send = document.getElementsByClassName("cta");

    send[0].addEventListener("click", function(){
        modal.style.display = "flex";
    });
}

function cotizar(){
    var form = document.getElementById("modal2");
    var close_f = document.getElementById("ft_close");

    close_f.addEventListener("click", function(){
        form.style.display = "none";
    });

    var send = document.getElementsByClassName("cta");

    send[1].addEventListener("click", function(){
        form.style.display = "flex";
    });
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
    var r_close = document.getElementById("f_close");

    choose.addEventListener("click", footer);

    r_close.addEventListener("click", ft_close);

    function footer(){
        f_menu.style.height = "45vh";
    }

    function ft_close(){
        f_menu.style.height = "0vh";
    }
}