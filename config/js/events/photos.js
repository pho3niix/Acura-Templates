window.onload = function(){
    var image = document.getElementsByClassName("zoom");
    var m_image = document.getElementById("m_image");
    var modal = document.getElementById("modal");

    for(var i=0; i<image.length; i++){
        image[i].addEventListener("click", zoom);
    }

    modal.addEventListener("click", close);
}

function zoom(){
    modal.style.display = "block";
    m_image.src = this.src;
}

function close(){
    modal.style.display = "none";
}