!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(5)},function(e,t){},function(e,t){function n(e,t,n,o,r,a,i){try{var c=e[a](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(o,r)}function o(e){return function(){var t=this,o=arguments;return new Promise((function(r,a){var i=e.apply(t,o);function c(e){n(i,r,a,c,l,"next",e)}function l(e){n(i,r,a,c,l,"throw",e)}c(void 0)}))}}function r(){return(r=o((function*(){return yield Promise.resolve("async is working")}))).apply(this,arguments)}(function(){return r.apply(this,arguments)})().then(console.log)},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(1);console.log("app is done!"),document.addEventListener("DOMContentLoaded",(function(e){"undefined"==typeof Storage&&(document.querySelector("body").textContent="браузер не поддерживает localStorage");document.getElementById("IwillOpenKeyboardOnMobile");var t=new Date,n=new Intl.DateTimeFormat("ru",{year:"2-digit",month:"2-digit"}),o=document.querySelector("#out");document.querySelector("#out2");new Promise((e,r)=>{e(function(){for(var e in localStorage){var r=localStorage.getItem(e);if(null!==r&&r.length>5){var a=Object.values(JSON.parse(r)),i=a[0],c=a[1],l=a[2],s=(a[3],n.format(new Date(a[5]))),d=new Date(a[5]),u=12*d.getFullYear()+d.getMonth()-(12*t.getFullYear()+t.getMonth()),f="";f=u>0?"text-grey":0==u?"text-green":"text-red";var v=a[6];o.insertAdjacentHTML("afterbegin",'<div class="uk-card uk-card-default item-card">\n                <span class="edit" uk-icon="icon: more-vertical; ratio: 1.2">\n                </span>\n                <div class="cancel-edit"></div>\n                <div class="item-name">'.concat(c,'</div>\n                <div class="item-adress">').concat(l,'</div>\n                <div class="vendor hidden">').concat(i,'</div>\n                <div class="to-time-left ').concat(f,'">').concat(s," (").concat(u,')</div>\n                <div class="item-ksa">').concat(e,'</div>  \n                <input type="date" class="mdc-text-field to-date hidden" value="').concat(v,'" min="2020-01-01" >\n            </div>'))}}}())}).then(()=>{(new Date).toJSON();!function e(){var o=document.querySelectorAll(".edit"),r=document.querySelector(".fon");for(var a of o)a.onclick=function(){this.parentNode.children;var o=this.parentNode,a=o.querySelector(".item-name"),i=o.querySelector(".to-date"),c=o.querySelector(".to-time-left"),l=o.querySelector(".item-ksa"),s=o.querySelector(".vendor"),d=o.querySelector(".item-adress"),u=o.querySelector(".cancel-edit"),f=()=>{a.removeAttribute("contentEditable"),a.classList.remove("item-name-edit"),d.classList.remove("item-name-edit"),d.removeAttribute("contentEditable"),console.log(this),this.setAttribute("uk-icon","icon: more-vertical; ratio: 1.2"),r.classList.remove("fon-up"),o.classList.remove("item-card-up"),i.classList.add("hidden"),u.textContent=""};(()=>{o.classList.add("item-card-up"),r.classList.add("fon-up"),a.contentEditable="true",a.classList.add("item-name-edit"),d.classList.add("item-name-edit"),d.contentEditable="true",console.log(this),this.setAttribute("uk-icon","icon: check; ratio: 1.3"),i.classList.remove("hidden"),u.textContent="cancel"})(),u.onclick=()=>{f(),e()},this.onclick=function(){var o=new Date(i.value),r=l.innerHTML.replace(/\s/g,"");if(""==r)l.textContent="Нет номера КСА",i.classList.add("hidden");else if(""==i.value)i.classList.add("to-date-wrong");else{i.classList.remove("to-date-wrong");var u=new Date(o).toLocaleDateString("en-CA"),v=new Date(o.setMonth(o.getMonth()+6));console.log("inp ".concat(o," nextodate ").concat(v));var m=12*v.getFullYear()+v.getMonth()-(12*t.getFullYear()+t.getMonth());isNaN(o)||(c.textContent=m>0?"".concat(m,"мес. - ").concat(n.format(v)):0==m?"ТО6 - ".concat(n.format(v)):"ТО6 ".concat(m," мес.")),f();var p={vendor_0:s.textContent,name_1:a.textContent,address_2:d.textContent,nextTO_3:m,nextToDateText_4:c.textContent,nextToDate_5:o,lastToDate_6:u};localStorage[r]=JSON.stringify(p),e()}}}}()})}));n(2),n(3),n(4)}]);