(()=>{"use strict";var t={208:(t,e,n)=>{n.d(e,{A:()=>i});var r=n(354),a=n.n(r),s=n(314),o=n.n(s)()(a());o.push([t.id,":root {\n    --red: #b23535;\n    --green: #38ad5f;\n    --blue: #464ca5;\n    --white: #eeeade;\n    --black: #282828;\n\n\n    --text-color: var(--black);\n    --background-color: var(--white);\n}\n\n@media (prefers-color-scheme: dark) {\n    :root {\n        --text-color: var(--white);\n        --background-color: var(--black);\n    }\n}\n\n* {\n    color: inherit;\n    background-color: inherit;\n    font-family: inherit;\n}\n\nbody {\n    min-height: 100vh;\n    font-family: Arial, sans-serif;\n    color: var(--text-color);\n    background-color: var(--background-color);\n    border-color: var(--text-color);\n}","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;IACI,cAAc;IACd,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,gBAAgB;;;IAGhB,0BAA0B;IAC1B,gCAAgC;AACpC;;AAEA;IACI;QACI,0BAA0B;QAC1B,gCAAgC;IACpC;AACJ;;AAEA;IACI,cAAc;IACd,yBAAyB;IACzB,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;IACjB,8BAA8B;IAC9B,wBAAwB;IACxB,yCAAyC;IACzC,+BAA+B;AACnC",sourcesContent:[":root {\n    --red: #b23535;\n    --green: #38ad5f;\n    --blue: #464ca5;\n    --white: #eeeade;\n    --black: #282828;\n\n\n    --text-color: var(--black);\n    --background-color: var(--white);\n}\n\n@media (prefers-color-scheme: dark) {\n    :root {\n        --text-color: var(--white);\n        --background-color: var(--black);\n    }\n}\n\n* {\n    color: inherit;\n    background-color: inherit;\n    font-family: inherit;\n}\n\nbody {\n    min-height: 100vh;\n    font-family: Arial, sans-serif;\n    color: var(--text-color);\n    background-color: var(--background-color);\n    border-color: var(--text-color);\n}"],sourceRoot:""}]);const i=o},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,s){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var d=0;d<t.length;d++){var p=[].concat(t[d]);r&&o[p[0]]||(void 0!==s&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=s),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),e.push(p))}},e}},354:t=>{t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),s="/*# ".concat(a," */");return[e].concat([s]).join("\n")}return[e].join("\n")}},72:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var s={},o=[],i=0;i<t.length;i++){var c=t[i],d=r.base?c[0]+r.base:c[0],p=s[d]||0,l="".concat(d," ").concat(p);s[d]=p+1;var u=n(l),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(h);else{var A=a(h,r);r.byIndex=i,e.splice(i,0,{identifier:l,updater:A,references:1})}o.push(l)}return o}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var s=r(t=t||[],a=a||{});return function(t){t=t||[];for(var o=0;o<s.length;o++){var i=n(s[o]);e[i].references--}for(var c=r(t,a),d=0;d<s.length;d++){var p=n(s[d]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}s=c}}},659:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var s=e[r]={id:r,exports:{}};return t[r](s,s.exports,n),s.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0;var r=n(72),a=n.n(r),s=n(825),o=n.n(s),i=n(659),c=n.n(i),d=n(56),p=n.n(d),l=n(540),u=n.n(l),h=n(113),A=n.n(h),f=n(208),b={};b.styleTagTransform=A(),b.setAttributes=p(),b.insert=c().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=u(),a()(f.A,b),f.A&&f.A.locals&&f.A.locals;const v=function(t,e={},...n){const r=document.createElement(t);for(const[t,n]of Object.entries(e))r.setAttribute(t,n);for(const t of n)"string"==typeof t?r.appendChild(document.createTextNode(t)):r.appendChild(t);return r},y=[["⏮","previous"],["▶","play"],["⏸","pause"],["⏹","stop"],["⏭","next"]],C={playing:{play:!0,pause:!1,stop:!1},paused:{play:!1,pause:!0,stop:!1},stopped:{play:!1,pause:!0,stop:!0}},g=class{#t;#e;constructor(){this.#t=null,this.#e={}}setUp(){const t=document.querySelector("#transporter"),e=this.#t=v("h2"),n=y.map((([t,e])=>{const n=v("button",{},t);return this.#e[e]=n,n})),r=v("div",{},...n);t.append(e,r)}addEventListener(t,e){const n=this.#e[t];if(!n)throw new Error(`Invalid button name: ${t}`);n.addEventListener("click",e)}send(t,e){switch(t){case"CHANGE_CHART":this.#n(e);break;case"CHANGE_PLAYBACK":this.#r(e);break;default:throw new Error(`Invalid type: ${t}`)}}#n({chartTitle:t,canPrevious:e,canNext:n}){this.#t.innerText=t,this.#e.previous.disabled=!e,this.#e.next.disabled=!n}#r(t){const e=C[t];if(!e)throw new Error(`Invalid playback state: ${t}`);for(const[t,n]of Object.entries(e))this.#e[t].disabled=n}},m=JSON.parse('["song-1","song-2","song-3"]'),w=m.length,E=class{#a;#s;constructor(){this.#a=0,this.#s=[]}addEventListener(t,e){if("newChart"!==t)throw new Error(`Invalid action: ${t}`);this.#s.push(e)}send(t){switch(t){case"PREVIOUS":this.#o();break;case"NEXT":this.#i();break;case"INIT":this.#c();break;default:throw new Error(`Invalid type: ${t}`)}}#o(){this.#a>0&&(this.#a-=1,this.#c())}#i(){this.#a<w-1&&(this.#a+=1,this.#c())}#c(){const t={title:`Title ${m[this.#a]}`},e=t.title,n=this.#a>0,r=this.#a<w-1;for(const a of this.#s)a({chart:t,chartTitle:e,canPrevious:n,canNext:r})}},I=class{constructor(){}setUp(t){}send(t,e){}changeChart(){}play(){}pause(){}resume(){}stop(){}},k=class{#d;#p;#s;constructor(){this.#d="paused",this.#p=new I,this.#s={}}addEventListener(t,e){this.#s[t]||(this.#s[t]=[]),this.#s[t].push(e)}send(t,e){if("CHANGE_CHART"!==t)switch(this.#d){case"playing":switch(t){case"PAUSE":this.#l();break;case"STOP":this.#u();break;default:throw new Error(`Cannot ${t} while playing`)}break;case"paused":switch(t){case"PLAY":this.#h();break;case"STOP":this.#u();break;default:throw new Error(`Cannot ${t} while paused`)}break;case"stopped":if("PLAY"!==t)throw new Error(`Cannot ${t} while stopped`);this.#A();break;default:throw new Error(`Invalid playback state: ${this.#d}`)}else this.#n(e)}#n(t){this.#p.send("CHANGE_CHART",t),"stopped"!==this.#d&&this.send("STOP")}#A(){this.#d="playing",this.#f("play")}#l(){this.#d="paused",this.#f("pause")}#h(){this.#d="playing",this.#f("resume")}#u(){this.#d="stopped",this.#f("stop")}#f(t){if(!this.#s[t])throw new Error(`Invalid action: ${t}`);this.#s[t].forEach((t=>t()))}},x=new class{#b;#v;#y;constructor(){this.#b=new g,this.#v=new E,this.#y=new k}setUp(){const t=this.#b,e=this.#v,n=this.#y;t.setUp(),t.addEventListener("previous",(()=>{e.send("PREVIOUS")})),t.addEventListener("next",(()=>{e.send("NEXT")})),t.addEventListener("play",(()=>{n.send("PLAY")})),t.addEventListener("pause",(()=>{n.send("PAUSE")})),t.addEventListener("stop",(()=>{n.send("STOP")})),e.addEventListener("newChart",(e=>{const{chart:r,chartTitle:a,canPrevious:s,canNext:o}=e;t.send("CHANGE_CHART",{chartTitle:a,canPrevious:s,canNext:o}),n.send("CHANGE_CHART",r)})),n.addEventListener("play",(()=>{t.send("CHANGE_PLAYBACK","playing")})),n.addEventListener("pause",(()=>{t.send("CHANGE_PLAYBACK","paused")})),n.addEventListener("resume",(()=>{t.send("CHANGE_PLAYBACK","playing")})),n.addEventListener("stop",(()=>{t.send("CHANGE_PLAYBACK","stopped")})),e.send("INIT")}};x.setUp(),console.log("sequencer",x)})();
//# sourceMappingURL=bundle.js.map