export default function photos(){
    gallery();
    btn_change();
}

function gallery(){
    var image = document.getElementsByClassName("zoom");
    var m_image = document.getElementById("m_image");
    var modal = document.getElementById("modal");
    var c_close = document.getElementById("close");

    for(var i=0; i<image.length; i++){
        image[i].addEventListener("click", zoom);
    }

    c_close.addEventListener("click", close);

    function zoom(){
        modal.style.display = "block";
        m_image.src = this.src;
    }

    function close(){
        modal.style.display = "none";
    }
}

function btn_change(){
    var btn_out = document.getElementById("out");
    var btn_in = document.getElementById("in");
    var inside = document.getElementById("inside");
    var outside = document.getElementById("outside");

    btn_out.addEventListener("click", showOut);

    function showOut(){
        btn_out.style.borderBottom = "1vh solid red";
        btn_in.style.borderBottom = "1vh solid white";

        inside.style.display = "none";
        outside.style.display = "flex";
    }

    btn_in.addEventListener("click", showIn);

    function showIn(){
        btn_in.style.borderBottom = "1vh solid red";
        btn_out.style.borderBottom = "1vh solid white";

        outside.style.display = "none";
        inside.style.display = "flex";
    }

}