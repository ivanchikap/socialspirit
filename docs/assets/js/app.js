!function(){var e={296:function(e){function t(e,t,o){var n,r,c,s,a;function l(){var d=Date.now()-s;d<t&&d>=0?n=setTimeout(l,t-d):(n=null,o||(a=e.apply(c,r),c=r=null))}null==t&&(t=100);var d=function(){c=this,r=arguments,s=Date.now();var d=o&&!n;return n||(n=setTimeout(l,t)),d&&(a=e.apply(c,r),c=r=null),a};return d.clear=function(){n&&(clearTimeout(n),n=null)},d.flush=function(){n&&(a=e.apply(c,r),c=r=null,clearTimeout(n),n=null)},d}t.debounce=t,e.exports=t}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var c=t[n]={exports:{}};return e[n](c,c.exports,o),c.exports}o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e=o(296);document.addEventListener("DOMContentLoaded",(t=>{const o=document.getElementById("explore-s"),n=document.getElementById("get-in-touch");function r(e){e.preventDefault();const t=("btn"===e.target.className?e.target:e.target.closest("a")).getAttribute("href").substring(1);document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})}o.addEventListener("click",r),n.addEventListener("click",r);const c=document.querySelector(".nav--header"),s=document.querySelector(".nav--sidebar");function a(e){e.preventDefault(),function(e,t,o="nav__item"){t.querySelectorAll(`.${o}`).forEach((e=>{e.classList.remove("active")})),e.closest("a").classList.add("active")}(e.target,e.currentTarget);const t=("nav__item"===e.target.className?e.target:e.target.closest("a")).getAttribute("href").substring(1);document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"}),e.currentTarget.classList.contains("nav--sidebar")&&document.body.classList.remove("show-sidebar")}c.addEventListener("click",a),s.addEventListener("click",a);const l=document.querySelector("#to-top"),d=document.querySelector(".header");let i=d.clientHeight,u=document.documentElement.scrollTop;const m=document.getElementById("sidebar");function v(e){e>=i+200&&(l.classList.remove("hidden"),d.classList.add("header--fixed"),m.style.top="94px"),e<i+200&&(l.classList.add("hidden"),d.classList.remove("header--fixed"),m.style.top="135px")}v(u),window.addEventListener("scroll",(0,e.debounce)((function(){u=document.documentElement.scrollTop,v(u)}),300)),l.addEventListener("click",(()=>{document.body.scrollIntoView({behavior:"smooth",block:"start"})}))}))}(),$("#tabs2").tabs({show:{effect:"blind",duration:900}}),document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("burger"),t=(document.getElementById("sidebar"),document.body),o=document.getElementById("pageMask");e.addEventListener("click",(e=>{t.classList.toggle("show-sidebar")})),o.addEventListener("click",(e=>{t.classList.remove("show-sidebar")}))})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.body;document.querySelectorAll("[data-modal]").forEach((t=>{t.addEventListener("click",(o=>{o.preventDefault();const n=t.dataset.modal,r=document.querySelector(n);r.classList.add("show"),e.classList.add("no-scroll");const c=r.querySelector(".modal__dialog");setTimeout((function(){c.style.transform="rotateX(0)"}),200),$(".worksSlider").slick("setPosition"),(r.querySelector(".modal__content")||r.querySelector(".contact")||r.querySelector(".modal-work")).addEventListener("click",(e=>{e.stopPropagation()})),r.querySelector(".modal__close").addEventListener("click",(t=>{t.preventDefault();const o=t.currentTarget.closest(".modal");o.querySelector(".modal__dialog").style.transform="rotateX(90deg)",setTimeout((function(){o.classList.remove("show"),e.classList.remove("no-scroll")}),200)})),r.addEventListener("click",(t=>{t.currentTarget.querySelector(".modal__dialog").style.transform="rotateX(90deg)",setTimeout((function(){r.classList.remove("show"),e.classList.remove("no-scroll")}),200)}))}))}))})),document.addEventListener("DOMContentLoaded",(()=>{let e=document.querySelectorAll("[data-filter]");e.forEach((t=>{t.addEventListener("click",(o=>{o.preventDefault();const n=t.dataset.filter;e.forEach((e=>{e.classList.remove("active")})),o.target.classList.add("active"),document.querySelectorAll("[data-cat]").forEach((e=>{"all"!==n&&n!==e.dataset.cat?e.classList.add("hide"):e.classList.remove("hide")})),o.target.class}))}))}))}();