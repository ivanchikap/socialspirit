!function(){var e={296:function(e){function t(e,t,n){var o,r,c,s,d;function a(){var i=Date.now()-s;i<t&&i>=0?o=setTimeout(a,t-i):(o=null,n||(d=e.apply(c,r),c=r=null))}null==t&&(t=100);var i=function(){c=this,r=arguments,s=Date.now();var i=n&&!o;return o||(o=setTimeout(a,t)),i&&(d=e.apply(c,r),c=r=null),d};return i.clear=function(){o&&(clearTimeout(o),o=null)},i.flush=function(){o&&(d=e.apply(c,r),c=r=null,clearTimeout(o),o=null)},i}t.debounce=t,e.exports=t}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={exports:{}};return e[o](c,c.exports,n),c.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e=n(296);document.addEventListener("DOMContentLoaded",(t=>{const n=document.querySelector(".nav--header"),o=document.querySelector(".nav--sidebar");function r(e){e.preventDefault(),function(e,t,n="nav__item"){t.querySelectorAll(`.${n}`).forEach((e=>{e.classList.remove("active")})),e.classList.add("active")}(e.target,e.currentTarget);const t=e.target.getAttribute("href").substring(1);document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"}),e.currentTarget.classList.contains("nav--sidebar")&&document.body.classList.remove("show-sidebar")}n.addEventListener("click",r),o.addEventListener("click",r);const c=document.querySelector("#to-top"),s=document.querySelector(".header");let d=s.clientHeight,a=document.documentElement.scrollTop;const i=document.getElementById("sidebar");function l(e){e>=d+200&&(c.classList.remove("hidden"),s.classList.add("header--fixed"),i.style.top="94px"),e<d+200&&(c.classList.add("hidden"),s.classList.remove("header--fixed"),i.style.top="135px")}l(a),window.addEventListener("scroll",(0,e.debounce)((function(){a=document.documentElement.scrollTop,l(a)}),300)),c.addEventListener("click",(()=>{document.body.scrollIntoView({behavior:"smooth",block:"start"})}))}))}(),document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("burger"),t=(document.getElementById("sidebar"),document.body),n=document.getElementById("pageMask");e.addEventListener("click",(e=>{t.classList.toggle("show-sidebar")})),n.addEventListener("click",(e=>{t.classList.remove("show-sidebar")}))}))}();