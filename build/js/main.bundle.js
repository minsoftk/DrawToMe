<<<<<<< HEAD
=======
!function(){var t={782:function(){var t=document.querySelector(".best"),e=t.querySelector(".best-swiper-container"),n=e.childElementCount,o=t.querySelector(".swiper-prev"),r=t.querySelector(".swiper-next"),i=t.querySelector(".swiper-pagination"),c=i.children,l=function(t){c[2*t].checked=!0;var o=t/n*100;""===e.style.transform&&(e.style.transition="all 1s"),e.style.transform="translateX(".concat(-o,"%)")},a=function(){for(var t=0;t<c.length;t+=2)if(!0===c[t].checked)return t/2};o.addEventListener("click",(function(){var t=a();--t<0&&(t=n-1),l(t)})),r.addEventListener("click",(function(){var t=a();++t>n-1&&(t=0),l(t)})),i.addEventListener("click",(function(){var t=a()/n*100;e.style.transform="translateX(".concat(-t,"%)")}))},29:function(){var t=document.querySelector(".button-top");t.addEventListener("click",(function(){document.documentElement.clientHeight,window.scrollTo({top:0,left:0,behavior:"smooth"})})),window.addEventListener("scroll",(function(){scrollPos=document.documentElement.scrollTop,scrollPos>30?t.style.opacity=1:t.style.opacity=0}))},812:function(){var t=document.querySelector(".daily__ul"),e=t.children.length,n=t.children[0].clientWidth,o=Math.ceil(t.clientWidth/(n+20));setTimeout((function(){var e=t.children[0].clientWidth;n=e<n?e:n,o=Math.ceil(t.clientWidth/(n+20))}),1e3),window.onresize=function(){n=t.children[0].clientWidth,o=Math.ceil(t.clientWidth/(n+20))};var r=0,i=0;setInterval((function(){if(++r>=e-o&&i<o){var c=t.children[i].cloneNode(!0);t.appendChild(c),i++}t.style.transition="all 1s",t.style.transform="translateX(".concat(-r*(n+20),"px)"),r>=e&&(r=0,setTimeout((function(){t.style.transition="",t.style.transform="translateX(".concat(0,"px)")}),1900))}),2e3)},282:function(){history.scrollRestoration="manual",window.addEventListener("wheel",(function(t){var e=document.documentElement.scrollTop,n=window.innerHeight-80;t.deltaY>1&&e<n&&(t.preventDefault(),t.stopPropagation(),window.scrollTo({top:n,left:0,behavior:"smooth"}))}),{passive:!1})}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";n(782),n(29),n(812),n(282)}()}();
>>>>>>> develop
