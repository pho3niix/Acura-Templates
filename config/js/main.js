import pictures from './events/photos';
import menu from './events/menu';

function ready(fn){
    if (document.readyState != 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

function init(){
    ready(menu);
    ready(pictures);
}

window.onload = function(){
    init();
}