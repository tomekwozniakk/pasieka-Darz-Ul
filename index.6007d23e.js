!function(e){var t={};function i(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";i.r(t);var r;i(1);(r=i(2)).keys().forEach(r);var n=[];!function(){for(var e=0;e<document.querySelectorAll(".about__article").length;e++){var t=document.querySelectorAll(".about__article")[e];n.push(t)}}();var a=[];!function(){for(var e=0;e<document.querySelectorAll(".about__circle").length;e++){var t=document.querySelectorAll(".about__circle")[e];a.push(t)}}();var o=document.querySelector(".about__slider-button--left"),c=document.querySelector(".about__slider-button--right"),s=document.querySelector(".about-carousel"),u=0,l=n[0].getBoundingClientRect().width;function g(e,t,i){var r,n;r=t,n=i;var a=0;setInterval((function(){a>=r.length&&(a=0),e.alt=n[a],e.src=r[a++]}),6e3)}function _(){var e=n[u],t=e.querySelector(".about__image--first"),i=e.querySelector(".about__image--second"),r=e.querySelector(".about__image--third");g(t,["img/garden.jpg","img/apples.jpg","img/table.jpg","img/party_time.jpg"],["our garden","red apples on a tree","table with food","party in our backyard"]),g(i,["img/backyard.jpg","img/bread_sliced.jpg","img/fence.jpg","img/smoke.jpg"],["our backyard","fresh sliced bread","fence","Marian starting up a bee smoker"]),g(r,["img/house_sunset.jpg","img/backyard_2.jpg","img/parcel.jpg","img/working_in_sunset.jpg"],["sunset behind apihouse","our backyard","view on the backyard from the back","Marian working with beehives with sunset at the back"])}console.log(l),o.addEventListener("click",p((function(){0!==u&&(s.scrollBy(-(l+16),0),a[u].classList.remove("about__circle--active"),u--,a[u].classList.add("about__circle--active"),n[u].querySelector(".about__images").innerHTML='<div class="about__image-container">\n              <img src="img/party_time.jpg" alt="j" class="about__image about__image--first">\n            </div>\n            <div class="about__image-container">\n              <img src="img/smoke.jpg" alt="j" class="about__image about__image--second">\n            </div>\n            <div class="about__image-container">\n              <img src="img/working_in_sunset.jpg" alt="j" class="about__image about__image--third">\n            </div>',_(),console.log(u))}),500)),c.addEventListener("click",p((function(){u!==n.length-1&&(s.scrollBy(l+16,0),a[u].classList.remove("about__circle--active"),u++,a[u].classList.add("about__circle--active"),n[u].querySelector(".about__images").innerHTML='<div class="about__image-container">\n              <img src="img/party_time.jpg" alt="j" class="about__image about__image--first">\n            </div>\n            <div class="about__image-container">\n              <img src="img/smoke.jpg" alt="j" class="about__image about__image--second">\n            </div>\n            <div class="about__image-container">\n              <img src="img/working_in_sunset.jpg" alt="j" class="about__image about__image--third">\n            </div>',_(),console.log(u))}),500)),_();var d=[];function p(e,t){var i=!1;return function(){i||(e.apply(this,arguments),i=!0,setTimeout((function(){i=!1}),t))}}!function(){for(var e=0;e<document.querySelectorAll(".history__article").length;e++){var t=document.querySelectorAll(".history__article")[e];d.push(t)}}(),window.addEventListener("scroll",p((function(){for(var e=window.pageYOffset,t=0;t<d.length;t++){var i=e+d[t].getBoundingClientRect().top;console.log("scrollTop"),i<=e+window.innerHeight+d[t].offsetHeight/4?d[t].classList.contains("history__article--active")||(d[t].classList.remove("history__article--inactive"),d[t].classList.remove("history__article--active"),d[t].offsetWidth,d[t].classList.add("history__article--active")):d[t].classList.contains("history__article--inactive")||(d[t].classList.remove("history__article--active"),d[t].classList.remove("history__article--inactive"),d[t].offsetWidth,d[t].classList.add("history__article--inactive"))}}),200));var f=document.querySelector(".gallery__carousel"),m=document.querySelector(".gallery__slider-previous");document.querySelector(".gallery__slider-next").addEventListener("click",(function(e){f.scrollBy(196,0)})),m.addEventListener("click",(function(e){f.scrollBy(-196,0)}));var b=[];!function(){for(var e=0;e<document.querySelectorAll(".gallery__image-small").length;e++){var t=document.querySelectorAll(".gallery__image-small")[e];b.push(t)}}();for(var v=document.querySelector(".gallery__image-big"),y=0;y<b.length;y++)b[y].addEventListener("click",(function(){v.src=this.src,v.alt=this.alt}))},function(e,t,i){},function(e,t,i){var r={"./apples.jpg":3,"./backyard.jpg":4,"./backyard_2.jpg":5,"./bee__pollen.jpg":6,"./bee_black.jpg":7,"./bee_closeup.jpg":8,"./bee_frozen.jpg":9,"./bread_sliced.jpg":10,"./cosmos.jpg":11,"./fence.jpg":12,"./garden.jpg":13,"./house_sunset.jpg":14,"./parcel.jpg":15,"./party_time.jpg":16,"./poppies.jpg":17,"./smoke.jpg":18,"./table.jpg":19,"./working_in_sunset.jpg":20};function n(e){var t=a(e);return i(t)}function a(e){if(!i.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=a,e.exports=n,n.id=2},function(e,t,i){"use strict";i.r(t),t.default=i.p+"img/apples.jpg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"img/backyard.jpg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"img/backyard_2.jpg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"img/bee__pollen.jpg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"img/bee_black.jpg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"img/bee_closeup.jpg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"img/bee_frozen.jpg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"img/bread_sliced.jpg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"img/cosmos.jpg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"img/fence.jpg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"img/garden.jpg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"img/house_sunset.jpg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"img/parcel.jpg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"img/party_time.jpg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"img/poppies.jpg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"img/smoke.jpg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"img/table.jpg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"img/working_in_sunset.jpg"}]);