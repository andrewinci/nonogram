(()=>{"use strict";var n={150:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,'body {\n    font-family: monospace;\n    font-size: large;\n    color: white;\n    background-color: #3e3e3e;\n}\n\nh1 {\n    text-transform: uppercase;\n}\n\nbutton {\n    font-family: monospace;\n}\n\np {\n    margin-top: 2em;\n    font-size: small;\n    text-align: center;\n    font-style: italic;\n}\n\n.menu {\n    height: 2em;\n}\n\n.container {\n    width: 80%;\n    text-align: center;\n    margin: auto;\n}\n\n#size-input {\n    width: 3em;\n    text-align: center;\n}\n\ntable {\n    border-spacing: 0;\n    margin: auto;\n    margin-top: 1em;\n}\n\ntr, td {\n    aspect-ratio: 1/ 1;\n    border: 1px solid;\n    border-color: gray;\n    border-spacing: 0;\n    height: 2em;\n    width: 2em;\n}\n\n.num-cell {\n    width: 6em;\n    border: 0;\n    text-align: right;\n    padding-right: 0.5em;\n    white-space: nowrap;\n}\n\ntr:first-child td {\n    width: 2em;\n    min-height: 4em;\n    text-align: center;\n    padding-right: 0em;\n    padding-bottom: 0.5em;\n}\n\n.full-cell {\n    background-color: black;\n}\n\n.empty-cell {\n    background-color: white;\n}\n\n.cross-cell {\n    background-color: white;\n}\n\n.cross-cell::before {\n    content: "❌";\n}\n\n\n@media only screen and (max-width: 768px) {\n    .container {\n        width: 100%;\n    }\n}\n\n/* Portrait mobile phone */\n@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {\n    .container {\n        width: 100%;\n        margin: 10px;\n    }\n\n    h1 {\n        font-size: 7em;\n    }\n    tr, td {\n        height: 3rem;\n        width: 3rem;\n    }\n    button {\n        font-size: 2rem;\n    }\n    .menu {\n        font-size: 2rem;\n    }\n    input {\n        font-size: 2rem;\n    }\n    p {\n        font-size: 1.7rem;\n    }\n    \n    .num-cell {\n        font-size: 1.2em;\n    }\n}',""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var u=0;u<n.length;u++){var d=[].concat(n[u]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var l=n[c],u=r.base?l[0]+r.base:l[0],d=a[u]||0,s="".concat(u," ").concat(d);a[u]=d+1;var p=t(s),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=o(m,r);r.byIndex=c,e.splice(c,0,{identifier:s,updater:f,references:1})}i.push(s)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var l=r(n,o),u=0;u<a.length;u++){var d=t(a[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=l}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n,e=t(379),r=t.n(e),o=t(795),a=t.n(o),i=t(569),c=t.n(i),l=t(565),u=t.n(l),d=t(216),s=t.n(d),p=t(589),m=t.n(p),f=t(150),h={};h.styleTagTransform=m(),h.setAttributes=u(),h.insert=c().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=s(),r()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals,function(n){n[n.Empty=0]="Empty",n[n.Full=1]="Full",n[n.Cross=2]="Cross"}(n||(n={}));var v=function(){function e(){}return e.prototype.generate=function(e){for(var t=this,r=Array(e).fill(0).map((function(){return Array(e).fill(0).map((function(){return t.randBoolean()}))})),o=r.map((function(n){return t.generateHeader(n)})),a=[],i=function(n){a.push(c.generateHeader(r.map((function(e){return e[n]}))))},c=this,l=0;l<r.length;l++)i(l);return{expected:r.map((function(e){return e.map((function(e){return e?n.Full:n.Empty}))})),body:r.map((function(e){return e.map((function(){return n.Empty}))})),rowHeader:o,columnHeader:a}},e.prototype.randBoolean=function(){return Math.random()>=.4},e.prototype.generateHeader=function(n){for(var e=[0],t=0,r=n;t<r.length;t++)r[t]?e[e.length-1]+=1:0!=e[e.length-1]&&e.push(0);return 0==e[e.length-1]&&e.pop(),e},e}();const g=function(){function e(n,e){if(this.onClick=e,this.htmlTable=document.getElementById(n),!this.htmlTable)throw new Error("Table element not found")}return e.prototype.clean=function(){this.htmlTable.children[0].remove()},e.prototype.draw=function(n,e,t){if(n.length!=e.length)throw new Error("Inconsistent nonogram table");this.clean();var r=document.createElement("tbody");this.htmlTable.appendChild(r);var o=Math.max.apply(Math,n.map((function(n){return n.length})));r.appendChild(this.buildRow([""].concat(n.map((function(n){var e=n.map((function(n){return n.toString()}));return Array(o-e.length).fill("").concat(e).join("<br>")})))));for(var a=0;a<e.length;a++){var i=[e[a].map((function(n){return n.toString()})).join(" ")];r.appendChild(this.buildRow(i.concat(t[a]),a+1))}},e.prototype.buildRow=function(e,t){var r=this;void 0===t&&(t=0);var o=document.createElement("tr");return e.forEach((function(e,a){var i=document.createElement("td");if(0!=t&&0!=a&&(i.addEventListener("click",(function(){return r.onClick(t,a,!0)})),i.addEventListener("contextmenu",(function(n){r.onClick(t,a,!1),n.preventDefault()}))),"string"==typeof e)i.classList.add("num-cell"),i.innerHTML=e;else switch(e){case n.Cross:i.classList.add("cross-cell");break;case n.Empty:i.classList.add("empty-cell");break;case n.Full:i.classList.add("full-cell")}o.appendChild(i)})),o},e}();var y=new v;function b(){var n=document.getElementById("size-input").value;return Number.parseInt(n,10)}var w=y.generate(b());document.getElementById("generate-button").addEventListener("click",(function(){w=y.generate(b()),E.draw(w.columnHeader,w.rowHeader,w.body)}));var x=document.getElementById("hint-button");null==x||x.addEventListener("mousedown",(function(){E.draw(w.columnHeader,w.rowHeader,w.expected)})),null==x||x.addEventListener("mouseup",(function(){E.draw(w.columnHeader,w.rowHeader,w.body)}));var E=new g("nonogram",(function(e,t,r){w.body[e-1][t-1]!=n.Empty?w.body[e-1][t-1]=n.Empty:w.body[e-1][t-1]=r?n.Full:n.Cross,E.draw(w.columnHeader,w.rowHeader,w.body)}));E.draw(w.columnHeader,w.rowHeader,w.body)})()})();