!function(e){var t={};function n(o){if(t[o])return t[o].exports;var d=t[o]={i:o,l:!1,exports:{}};return e[o].call(d.exports,d,d.exports,n),d.l=!0,d.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var d in e)n.d(o,d,function(t){return e[t]}.bind(null,d));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(){!function(){for(var e=document.getElementsByClassName("zoom"),t=document.getElementById("m_image"),n=document.getElementById("modal"),o=document.getElementById("close"),d=0;d<e.length;d++)e[d].addEventListener("click",l);function l(){n.style.display="block",t.src=this.src}o.addEventListener("click",function(){n.style.display="none"})}(),function(){var e=document.getElementById("out"),t=document.getElementById("in"),n=document.getElementById("inside"),o=document.getElementById("outside");e.addEventListener("click",function(){e.style.borderBottom="1vh solid red",t.style.borderBottom="1vh solid white",n.style.display="none",o.style.display="flex"}),t.addEventListener("click",function(){t.style.borderBottom="1vh solid red",e.style.borderBottom="1vh solid white",o.style.display="none",n.style.display="flex"})}()}function d(){var e,t;!function(){var e=document.getElementsByClassName("menu"),t=document.getElementById("slide_m"),n=document.getElementById("m_close");e[1].addEventListener("click",function(){t.style.width="40vw"}),n.addEventListener("click",function(){t.style.width="0"})}(),function(){var e=document.getElementById("footerMenu"),t=document.getElementById("choose"),n=(document.getElementById("r_footer"),document.getElementById("f_close"));t.addEventListener("click",function(){e.style.height="40vh"}),n.addEventListener("click",function(){e.style.height="0"})}(),e=document.getElementById("m_ficha"),document.getElementById("fs_close").addEventListener("click",function(){e.style.display="none"}),document.getElementsByClassName("enlace")[0].addEventListener("click",function(){e.style.display="flex"}),t=document.getElementById("m_tecni"),document.getElementById("ti_close").addEventListener("click",function(){t.style.display="none"}),document.getElementsByClassName("enlace")[1].addEventListener("click",function(){window.location.href="especificaciones.html"})}function l(e){"loading"!=document.readyState?e():document.addEventListener("DOMContentLoaded",e)}n.r(t),window.onload=function(){l(d),l(o)}}]);