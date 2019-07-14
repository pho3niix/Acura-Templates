window.onload = function(){
    footerMenu();
    var move1 = document.getElementById("btns_right");
    var move2 = document.getElementById("btns_left");
    var r_square = document.getElementById("r_square");
    var b_square = document.getElementById("b_square");
    var clicks = 0;

    function play(){
        sp.next();
        sps.next();
        spx.next();

        clicks +=1;

        r_square.setAttribute("class", "move"+clicks);
        b_square.setAttribute("class", "moves"+clicks);

        if(clicks==4){
            r_square.removeAttribute("class", "move");
            clicks = 0;
        }
    }

    setInterval(function(){
        play();
    },5000);

    move1.addEventListener("click", function(){
        clicks +=1;

        r_square.setAttribute("class", "move"+clicks);
        b_square.setAttribute("class", "moves"+clicks);
        

        if(clicks==4){
            r_square.removeAttribute("class", "move");
            clicks = 0;
        }

    });

    move2.addEventListener("click", function(){
        clicks -=1;

        r_square.setAttribute("class", "move"+clicks);
        b_square.setAttribute("class", "moves"+clicks);
        

        if(clicks == -4){
            r_square.removeAttribute("class", "move");
            clicks = 0;
        }
    });
}

// Footer menu slide
function footerMenu(){
    var f_menu = document.getElementById("footerMenu");
    var choose = document.getElementById("choose");
    var r_close = document.getElementById("f_close");

    choose.addEventListener("click", footer);

    r_close.addEventListener("click", ft_close);

    function footer(){
        f_menu.style.height = "40vh";
    }

    function ft_close(){
        f_menu.style.height = "0vh";
    }
}