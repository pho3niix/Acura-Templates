// Inicializar las funciones del sitio

window.onload = function(){
    image_360();
    brochure();
    cotizar();
    sideMenu();
    footerMenu();
    ficha_modal();
    tecni_modal();
    changeColor();
}

function changeColor(){
    var blue = document.getElementById("blue-btn");
    var gray = document.getElementById("gray-btn");
    var white = document.getElementById("white-btn");
    var cars = document.getElementById("car_360");

    blue.addEventListener("click", function(){
        cars.src = "../images/cars/MDX BLACK.png";
    });

    gray.addEventListener("click", function(){
        cars.src = "../images/cars/mdx-gris.png";
    });

    white.addEventListener("click", function(){
        cars.src = "../images/cars/camioneta.png";
    });
}

// Funcion 360 para imagen detalle auto

function image_360(){
    var btn_360 = document.getElementById("p_360");
    var range = document.getElementById("range");
    var close = document.getElementById("close_r");
    var image = document.getElementById("car_360");

    // Variables de ruta e imagen estatica
    const ruta = "../images/cars/";//Esta constante representa la ruta donde estan alojadas las imagenes, si se desea cambiar solamente modificar el texto entre comillas
    var i_static = ruta + "camioneta.png";//variable para la imagen estatica

    // Variables de imagenes 360
    // Para modificar las imagenes solamente cambiar el nombre de a continuacion

    /* EJEMPLO:
    Para cambiar la primera imagen
    la variable es "_1", de ahi solamente cambiar el texto en color verde

    var _1 = ruta + "02 mdx exterior 01.png";//<-este es el original

    var _1 = ruta + "02 mdx exterior 22.png";//<-este es despues de la modificacion

    NOTA: la constante "ruta" no se modifica ya que esta definida en la parte superior
    */

    var _1 = ruta + "02 mdx exterior 01.png";
    var _2 = ruta + "02 mdx exterior 02.png";
    var _3 = ruta + "02 mdx exterior 03.png";
    var _4 = ruta + "02 mdx exterior 04.png";
    var _5 = ruta + "02 mdx exterior 05.png";
    var _6 = ruta + "02 mdx exterior 06.png";
    var _7 = ruta + "02 mdx exterior 07.png";
    var _8 = ruta + "02 mdx exterior 08.png";
    var _9 = ruta + "02 mdx exterior 09.png";
    var _10 = ruta + "02 mdx exterior 10.png";
    var _11 = ruta + "02 mdx exterior 11.png";
    var _12 = ruta + "02 mdx exterior 12.png";
    var _13 = ruta + "02 mdx exterior 13.png";
    var _14 = ruta + "02 mdx exterior 14.png";
    var _15 = ruta + "02 mdx exterior 15.png";
    var _16 = ruta + "02 mdx exterior 16.png";
    var _17 = ruta + "02 mdx exterior 17.png";
    var _18 = ruta + "02 mdx exterior 18.png";
    var _19 = ruta + "02 mdx exterior 19.png";
    var _20 = ruta + "02 mdx exterior 20.png";
    var _21 = ruta + "02 mdx exterior 21.png";
    var _22 = ruta + "02 mdx exterior 22.png";
    var _23 = ruta + "02 mdx exterior 23.png";
    var _24 = ruta + "02 mdx exterior 24.png";

    // Condicion para cambiar imagenes del 360
    range.addEventListener("input", function(){
       if(range.value>=1 && range.value<=12){
           if(range.value<=6){
               if(range.value<=3){
                   if(range.value == 1){
                       image.src = _1;
                   }else if(range.value == 2){
                       image.src = _2;
                   }else{
                       image.src = _3;
                   }
               }else{
                   if(range.value == 4){
                       image.src = _4;
                   }else if(range.value == 5){
                       image.src = _5;
                   }else{
                       image.src = _6;
                   }
               }
           }else{
                if(range.value<=9){
                    if(range.value == 7){
                        image.src = _7;
                    }else if(range.value == 8){
                        image.src = _8;
                    }else{
                        image.src = _9;
                    }
                }else{
                    if(range.value == 10){
                        image.src = _10;
                    }else if(range.value == 11){
                        image.src = _11;
                    }else{
                        image.src = _12;
                    }
                }
           }
       }else{
            if(range.value<=18){
                if(range.value<=15){
                    if(range.value == 13){
                        image.src = _13;
                    }else if(range.value == 14){
                        image.src = _14;
                    }else{
                        image.src = _15;
                    }
                }else{
                    if(range.value == 16){
                        image.src = _16;
                    }else if(range.value == 17){
                        image.src = _17;
                    }else{
                        image.src = _18;
                    }
                }
            }else{
                if(range.value<=21){
                    if(range.value == 19){
                        image.src = _19;
                    }else if(range.value == 20){
                        image.src = _20;
                    }else{
                        image.src = _21;
                    }
                }else{
                    if(range.value == 22){
                        image.src = _22;
                    }else if(range.value == 23){
                        image.src = _23;
                    }else{
                        image.src = _24;
                    }
                }
            }
       }
    })

    // Habilitar funcion 360
    btn_360.addEventListener("click", function(){
        btn_360.style.display = "none";
        range.style.display = "block";
        close.style.display = "block";
        image.src = _1;
    });

    // Deshabilitar funcion 360
    close.addEventListener("click", function(){
        btn_360.style.display = "block";
        range.style.display = "none";
        close.style.display = "none";
        range.value = 1;
        image.src = i_static;
    });
}

// Modal brochure
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

// Modal cotizar
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

// Menu lateral
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

// Footer menu slide
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
