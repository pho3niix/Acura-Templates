// import pic_360 from './events/360_pic';
import photos from './events/photos';
import menu from './events/menu';
// import animations from './events/slider';

function ready(fn){
    if (document.readyState != 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

function init(){
    ready(menu);
    ready(photos);
    // ready(animations);
}

window.onload = function(){
    init();
}