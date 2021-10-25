(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>p});var r=t(81),o=t.n(r),c=t(645),a=t.n(c),i=t(667),s=t.n(i),l=new URL(t(472),t.b),u=a()(o()),d=s()(l);u.push([e.id,"@font-face {\r\n\r\n  font-family: 'Motionpicture';\r\n\r\n  src: url("+d+") format('woff2'),\r\n\r\n    url("+d+") format('woff');\r\n\r\n  font-weight: 600;\r\n\r\n  font-style: normal;\r\n\r\n}\r\n\r\n.header{\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n  gap: 10em;\r\n  background-color: black;\r\n  color: white;\r\n  font-size: 2.5em;\r\n  width: 100%;\r\n  font-family: Motionpicture;\r\n}\r\n\r\n#homeMenu:hover{\r\n  color: #f2e599;\r\n}\r\n\r\n#menuMenu:hover{\r\n  color: #f2e599;\r\n}\r\n\r\n#aboutMenu:hover{\r\n  color: #f2e599;\r\n}\r\n\r\n.landing{\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: #f2e599;\r\n  color:#968b36;\r\n  font-size: 2em;\r\n  padding: 2em;\r\n}\r\n\r\n.landingImage{\r\n  width: 100%;\r\n}\r\n\r\n.footer{\r\n  background-color: black;\r\n  color:white;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width:100%;\r\n}\r\n\r\n.contact{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: #f2e599;\r\n    color:#968b36;\r\n    font-size: 2em;\r\n}\r\n\r\n.locationImage{\r\n  width: 100%;\r\n}\r\n",""]);const p=u},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,c){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(a[s]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&a[u[0]]||(void 0!==c&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=c),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var c={},a=[],i=0;i<e.length;i++){var s=e[i],l=r.base?s[0]+r.base:s[0],u=c[l]||0,d="".concat(l," ").concat(u);c[l]=u+1;var p=t(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,r);r.byIndex=i,n.splice(i,0,{identifier:d,updater:m,references:1})}a.push(d)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var c=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<c.length;a++){var i=t(c[a]);n[i].references--}for(var s=r(e,o),l=0;l<c.length;l++){var u=t(c[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}c=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var c=t.sourceMap;c&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},88:(e,n,t)=>{e.exports=t.p+"e367af18a2749f9beff9.jpg"},489:(e,n,t)=>{e.exports=t.p+"fee17e4110727c572b71.png"},472:(e,n,t)=>{e.exports=t.p+"68d708bf4264584649db.woff"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var c=n[r]={id:r,exports:{}};return e[r](c,c.exports,t),c.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href;var r={};(()=>{t.d(r,{Z:()=>C});var e=t(379),n=t.n(e),o=t(795),c=t.n(o),a=t(569),i=t.n(a),s=t(565),l=t.n(s),u=t(216),d=t.n(u),p=t(589),f=t.n(p),m=t(426),h={};h.styleTagTransform=f(),h.setAttributes=l(),h.insert=i().bind(null,"head"),h.domAPI=c(),h.insertStyleElement=d(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;var v=t(88);var g=t(489);function y(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function b(){const e=document.querySelector("#content"),n=document.createElement("div");n.className="header",e.appendChild(n);const t=document.createElement("p");t.innerText="Home",t.id="homeMenu",n.appendChild(t);const r=document.createElement("p");r.innerText="Menu",r.id="menuMenu",n.appendChild(r);const o=document.createElement("p");o.innerText="Contact",o.id="aboutMenu",n.appendChild(o)}function x(){const e=document.querySelector("#content"),n=document.createElement("div");n.className+="footer";const t=document.createElement("p");t.innerText="Created by Tibor Enyedi",n.appendChild(t);const r=document.createElement("p");r.innerText="As part of the Odin Project ©",n.appendChild(r),e.appendChild(n)}function w(){homeMenu.addEventListener("click",(function(e){content=document.querySelector("#content"),y(content),b(),function(){const e=document.querySelector("#content"),n=document.createElement("div");n.className="landing",e.appendChild(n);const t=new Image;t.className+="landingImage",t.src=v,e.appendChild(t);const r=document.createElement("article");r.innerText="Eat, sleep, repeat! This is our philosophy. Please select from the menu tab or contact us!",n.appendChild(r),C()}(),x()})),aboutMenu.addEventListener("click",(function(e){content=document.querySelector("#content"),y(content),b(),function(){const e=document.querySelector("#content"),n=document.createElement("div");n.className+="contact",e.appendChild(n);const t=document.createElement("article");t.innerText="+3682837261111222",n.appendChild(t);const r=document.createElement("article");r.innerText="pizzamissima@pizzamissima.net",n.appendChild(r);const o=document.createElement("article");o.innerText="Túrkeve Napoleon Boulevard 69. (Hungary)",n.appendChild(o);const c=new Image;c.className+="locationImage",c.src=g,e.appendChild(c),C()}(),x()}))}b(),function(){const e=document.querySelector("#content"),n=document.createElement("div");n.className="landing",e.appendChild(n);const t=new Image;t.className+="landingImage",t.src=v,e.appendChild(t);const r=document.createElement("article");r.innerText="Eat, sleep, repeat! This is our philosophy. Please select from the menu tab or contact us!",n.appendChild(r)}(),x(),w();const C=w})()})();