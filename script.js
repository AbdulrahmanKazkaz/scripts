!function(e){var t={};function i(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(r,o,function(t){return e[t]}.bind(null,o));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=1)}([function(e,t,i){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i=function(e,t){var i=e[1]||"",r=e[3];if(!r)return i;if(t&&"function"==typeof btoa){var o=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),n=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[i].concat(n).concat([o]).join("\n")}var a,s,l;return[i].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(i,"}"):i})).join("")},t.i=function(e,i,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var n=0;n<this.length;n++){var a=this[n][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&o[l[0]]||(i&&(l[2]?l[2]="".concat(i," and ").concat(l[2]):l[2]=i),t.push(l))}},t}},function(e,t,i){"use strict";i.r(t);i(2),i(5)},function(e,t,i){var r=i(3),o=i(4);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var n={insert:"head",singleton:!1};r(o,n);e.exports=o.locals||{}},function(e,t,i){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},n=function(){var e={};return function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}e[t]=i}return e[t]}}(),a=[];function s(e){for(var t=-1,i=0;i<a.length;i++)if(a[i].identifier===e){t=i;break}return t}function l(e,t){for(var i={},r=[],o=0;o<e.length;o++){var n=e[o],l=t.base?n[0]+t.base:n[0],c=i[l]||0,p="".concat(l," ").concat(c);i[l]=c+1;var m=s(p),d={css:n[1],media:n[2],sourceMap:n[3]};-1!==m?(a[m].references++,a[m].updater(d)):a.push({identifier:p,updater:g(d,t),references:1}),r.push(p)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=i.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=n(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var p,m=(p=[],function(e,t){return p[e]=t,p.filter(Boolean).join("\n")});function d(e,t,i,r){var o=i?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,o);else{var n=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(n,a[t]):e.appendChild(n)}}function f(e,t,i){var r=i.css,o=i.media,n=i.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),n&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var u=null,h=0;function g(e,t){var i,r,o;if(t.singleton){var n=h++;i=u||(u=c(t)),r=d.bind(null,i,n,!1),o=d.bind(null,i,n,!0)}else i=c(t),r=f.bind(null,i,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(i)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var i=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<i.length;r++){var o=s(i[r]);a[o].references--}for(var n=l(e,t),c=0;c<i.length;c++){var p=s(i[c]);0===a[p].references&&(a[p].updater(),a.splice(p,1))}i=n}}}},function(e,t,i){"use strict";i.r(t);var r=i(0),o=i.n(r)()(!1);o.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap);"]),o.push([e.i,"*{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box}html{font-size:9px}@media (min-width: 1700px){html{font-size:14px}}@media (max-width: 767px){html{font-size:6px}}body{font-family:Poppins, sans-serif;overflow-x:hidden}a{text-decoration:none !important;color:rgba(0,0,0,0.7);font-size:1.6rem;text-transform:capitalize;-webkit-transition:0.3s;transition:0.3s;cursor:pointer}a:hover{color:#000}ul li{list-style-type:none}h2{font-size:2.2rem;font-weight:900}p{font-size:1.6rem}textarea{resize:none}button{cursor:pointer;display:block;border-radius:0.3rem}input::-webkit-input-placeholder,textarea::-webkit-input-placeholder{font-family:Poppins, sans-serif;font-weight:500}input:-ms-input-placeholder,textarea:-ms-input-placeholder{font-family:Poppins, sans-serif;font-weight:500}input::-ms-input-placeholder,textarea::-ms-input-placeholder{font-family:Poppins, sans-serif;font-weight:500}input::placeholder,textarea::placeholder{font-family:Poppins, sans-serif;font-weight:500}input,textarea{font-family:Poppins, sans-serif;font-weight:500}.container{width:80%;margin:0 auto;position:relative}.section_title{text-align:center}.section_title h2{position:relative;display:inline-block;margin-top:5rem;font-size:3rem;font-weight:500;color:#e71b24}.section_title h2::after{content:'';position:absolute;left:0;width:10rem;height:0.2rem;background-color:#05582e;bottom:-1rem}iframe{border:0;width:100%;height:33rem;margin-top:5rem}.btn_cart{position:relative}.btn_cart span{position:absolute;top:-1rem;background:#e71b24;border-radius:28%;padding:1px 3px;color:#fff;font-size:1.2rem}.btn_remove{background-color:#e71b24;padding:3px 8px;color:#fff;border-radius:4px;font-weight:700;font-size:12px}.btn_remove:hover{background-color:#05582e;color:#fff}.center{text-align:center}@media (max-width: 1400px){#cover_page{background-size:cover;background-position:center center}}.flags{position:absolute;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%);top:25rem;width:100%}@media (min-width: 1400px){.flags{top:25rem}}@media (max-width: 500px){.flags{top:41rem}}@media (max-width: 800px){.flags{top:43rem}}.search__from{font-weight:700;position:fixed;width:100%;height:100%;top:0;left:0;background-color:#000;z-index:9999999;display:none}.search__from .form{display:block;position:absolute;width:100%;height:100%;top:30rem}.search__from .form input{font-weight:700;width:100%;height:6rem;outline:0;border:0;background:0 0;color:#fff;font-size:3rem;font-family:Poppins, sans-serif}.search__from .icon{position:absolute;width:5rem;height:5rem;top:3rem;right:0;-webkit-transition:1s;transition:1s}.search__from .icon i{color:#fff;font-size:6rem;cursor:pointer}@media (max-width: 767px){.search__from input{font-size:1.8rem !important}.icon i{font-size:4rem !important}}.loader{width:100%;height:100%;position:fixed;background-color:#000;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;z-index:999}.loader .circle{width:5rem;height:5rem;border:0.5rem solid;color:#3498db;border-radius:50%;border-top-color:transparent;-webkit-animation:loader 1.2s linear infinite;animation:loader 1.2s linear infinite;position:absolute;bottom:23rem}.loader img{position:absolute;width:30rem;height:19rem;top:22%;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%)}@-webkit-keyframes loader{25%{color:#2ecc71}50%{color:#f1c40f}75%{color:#e74c3c}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes loader{25%{color:#2ecc71}50%{color:#f1c40f}75%{color:#e74c3c}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.pagination{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;width:100%}.pagination a{-ms-flex-preferred-size:2rem;flex-basis:2rem;border:1px solid;padding:0.5rem 1rem;margin-left:1rem;background-color:#333;color:#fff;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out}.pagination a:hover{background-color:#05582e;color:#000 !important}.active_page{background-color:#e71b24 !important;color:#fff !important}.cTable{position:relative;font-family:Poppins, sans-serif;border-collapse:collapse;border-spacing:0;-webkit-box-shadow:0 2px 15px rgba(64,64,64,0.7);box-shadow:0 2px 15px rgba(64,64,64,0.7);border-radius:12px 12px 0 0;overflow:hidden}.cTable td,.cTable th{padding:15px 20px;text-align:center}.cTable th{background-color:#e71b24;color:#fff;text-transform:uppercase}.cTable tr{width:100%;color:#000}.cTable tr:nth-child(even){background-color:#eee}.header{min-height:100vh;height:100vh;position:relative;overflow:hidden;background:radial-gradient(ellipse at center, rgba(0,0,0,0) 1%, rgba(0,0,0,0.8) 100%)}.header .overlay{width:100%;height:100%;position:absolute;top:0;left:0;background-image:url(https://i.ibb.co/Q9KwfHy/1.jpg);background-size:cover;background-repeat:no-repeat;background-position:center;background-attachment:fixed;-webkit-transition:all 1s ease-in-out;transition:all 1s ease-in-out;z-index:-1}.header .top{position:fixed;width:100%;height:8.5rem;-webkit-transition:background-color 0.4s ease-in-out;transition:background-color 0.4s ease-in-out;z-index:5}.header .top .logo{position:fixed;font-size:2.5rem;color:rgba(255,255,255,0.74);top:3rem;cursor:pointer;z-index:3}.header .top .cart{left:calc(100% + -10rem)}.header .top .language_bar{position:absolute;top:3rem;left:5rem;z-index:999}.header .top .language_bar img{width:4rem}.header .top .language_bar p{color:#fff;margin-left:1rem}.header .top .language_bar a{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.header .top .language_bar .menu{position:relative}.header .top .language_bar .menu:focus .drop-menu,.header .top .language_bar .menu:focus-within .drop-menu,.header .top .language_bar .menu:hover .drop-menu{visibility:visible;opacity:1;z-index:1;-webkit-transform:translateY(0);transform:translateY(0);-webkit-transition-delay:0s;transition-delay:0s}.header .top .language_bar .menu .drop-menu{visibility:hidden;opacity:0;position:absolute;top:100%;left:0;width:100%;-webkit-transform:translateY(-3em);transform:translateY(-3em);z-index:-1;-webkit-transition:all 0.3s linear;transition:all 0.3s linear;margin-top:1rem}.header .content{text-align:center;position:absolute;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%);top:15rem;width:100%}.header .content .logo{width:29rem;height:20rem}.header .content h2{font-size:3.5rem;color:#fff;letter-spacing:1.5rem;width:100%;margin:3rem 0;opacity:0.8;text-transform:capitalize}@media (max-width: 760px){.header .content h2{letter-spacing:0.5rem;font-size:1.8rem}}.header .content p{color:#fff;font-weight:700;font-size:2rem;margin-top:20rem;text-shadow:2px 2px 2px #000;opacity:0.5}@media (max-width: 760px){.header .content p{margin-top:37rem}}.header .your_apps{margin:0 auto;position:absolute;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%)}.header .your_apps a img{width:42%;opacity:0.8}@media (max-width: 760px){.header .your_apps a img{width:88%}}.navbar{width:25rem;height:100%;background-color:#c0392b;position:fixed;top:0;right:-25rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:20% 0 0 60%;-webkit-transition:right 0.8s cubic-bezier(1, 0, 0, 1);transition:right 0.8s cubic-bezier(1, 0, 0, 1);z-index:3}.navbar.hide{right:0}@media (max-width: 767px){.navbar.hide{width:100% !important;border-radius:0 !important}}.navbar .hamburger__menu{width:3rem;height:2.5rem;position:fixed;top:3.5rem;left:calc(100% + -19rem);cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;z-index:2}.navbar .hamburger__menu .line{width:100%;height:0.3rem;background-color:#fff;-webkit-transition:all 0.8s;transition:all 0.8s}.navbar .hamburger__menu .line_1.change{-webkit-transform:rotateZ(-405deg) translate(-8px, 6px);transform:rotateZ(-405deg) translate(-8px, 6px)}.navbar .hamburger__menu .line_2.change{opacity:0}.navbar .hamburger__menu .line_3.change{-webkit-transform:rotateZ(405deg) translate(-8px, -6px);transform:rotateZ(405deg) translate(-8px, -6px)}.navbar .nav__list{text-align:right}.navbar .nav__list .nav__item{margin:5rem;text-align:center}.navbar .nav__list .nav__item .nav__link{color:#eee;position:relative;font-weight:300;font-size:2.2rem;letter-spacing:0.1rem;padding:0.3rem 0}.navbar .nav__list .nav__item .nav__link::after,.navbar .nav__list .nav__item .nav__link::before{content:'';width:100%;height:0.2rem;background-color:#05582e;position:absolute;left:0;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:1s;transition:1s}.navbar .nav__list .nav__item .nav__link::before{top:0;-webkit-transform-origin:left;transform-origin:left}.navbar .nav__list .nav__item .nav__link::after{bottom:0;-webkit-transform-origin:right;transform-origin:right}.navbar .nav__list .nav__item .nav__link:hover::after,.navbar .nav__list .nav__item .nav__link:hover::before{-webkit-transform:scaleX(1);transform:scaleX(1)}.about_us{position:relative;width:100%;height:46vh;background:-webkit-gradient(radial, 174 76, 36, 220 -388, 729, from(#6c972c), to(#13672c));background-attachment:fixed;z-index:-1}@media (min-width: 1600px){.about_us{height:48vh !important}}@media (max-width: 700px){.about_us{height:52vh}}.about_us .title h2{color:#e71b24;font-size:3.5rem;font-weight:700;position:absolute;top:2rem;letter-spacing:1px}.about_us .title p{position:absolute;width:82%;top:8rem;color:#fff;font-weight:300;margin-top:2rem;line-height:3rem;font-size:1.7rem}@media (max-width: 940px){.about_us .title p{width:100%}}.about_us .image{position:relative;width:100%;height:100%}.about_us .image img{position:absolute;right:0;top:7rem;width:18rem;height:18rem}.shuffle_product .product_show{display:-ms-grid;display:grid;-ms-grid-columns:minmax(20.6rem, 1fr) [auto-fit];grid-template-columns:repeat(auto-fit, minmax(20.6rem, 1fr));width:100%;min-height:65vh;margin:4rem 0}.shuffle_product .product_show .product{position:relative;height:25rem;margin:1rem;border-radius:0.5rem;-webkit-box-shadow:0 0 1rem rgba(0,0,0,0.5);box-shadow:0 0 1rem rgba(0,0,0,0.5)}.shuffle_product .product_show .product:hover img{-webkit-transform:scale(0.8) translateZ(0);transform:scale(0.8) translateZ(0)}.shuffle_product .product_show .product:hover .overlay{visibility:visible}.shuffle_product .product_show .product .overlay{position:absolute;width:100%;height:100%;background-color:rgba(0,0,0,0.5);opacity:0.7;-webkit-transition:all 0.3s;transition:all 0.3s;visibility:hidden;z-index:3}@media (max-width: 800px){.shuffle_product .product_show .product .overlay{display:none}.shuffle_product .product_show .product:hover img{transform:none}}.shuffle_product .product_show .product .overlay h4{font-size:1.5rem;color:#fff;font-weight:500;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);width:100%;text-align:center}.shuffle_product .product_show .product img{width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:-webkit-transform 0.5s ease-in-out;transition:-webkit-transform 0.5s ease-in-out;transition:transform 0.5s ease-in-out;transition:transform 0.5s ease-in-out, -webkit-transform 0.5s ease-in-out}.btn-show{border:none;padding:1rem;font-size:2rem;font-weight:500;background-color:#e71b24;color:#fff;margin:0 auto;display:block;border-radius:0.2rem;text-align:center;width:30%;outline:0;-webkit-transition:background-color 0.5s;transition:background-color 0.5s}.btn-show:hover{background-color:#05582e;color:#fff}@media (max-width: 760px){.btn-show{width:100%}}.counter_section{width:100%;height:22vh;min-height:22vh;max-height:22vh;margin-top:4rem;background:-webkit-gradient(radial, 174 76, 36, 220 -388, 729, from(#6c972c), to(#13672c));background-attachment:fixed;position:relative}@media (max-width: 760px){.counter_section{height:26vh;min-height:26vh;max-height:26vh}}.counter_section .wrapping{display:-ms-grid;display:grid;-ms-grid-columns:1fr;grid-template-columns:repeat(4, 1fr);-ms-flex-line-pack:center;align-content:center;padding-top:4rem}@media (max-width: 760px){.counter_section .wrapping{-ms-grid-columns:1fr;grid-template-columns:repeat(2, 1fr);grid-gap:3rem}}.counter_section .wrapping .count{text-align:center;color:#fff}.counter_section .wrapping .count h3{font-size:3rem}.counter_section .wrapping .count p{font-size:1.8rem;text-transform:capitalize}.contact_us{width:100%;height:100%;position:relative}.contact_us .wrapping{display:-webkit-box;display:-ms-flexbox;display:flex;margin-top:6rem;position:relative;width:100%;height:100%;overflow:hidden}@media (max-width: 940px){.contact_us .wrapping{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;text-align:center}}.contact_us .wrapping .info{-ms-flex-preferred-size:45%;flex-basis:45%;margin-top:3rem}@media (max-width: 940px){.contact_us .wrapping .info{margin:0 auto}}@media (max-width: 940px){.contact_us .wrapping .info .wrapping_info{margin-bottom:5rem}}.contact_us .wrapping .info .wrapping_info .email,.contact_us .wrapping .info .wrapping_info .number{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:3rem}.contact_us .wrapping .info .wrapping_info .email i,.contact_us .wrapping .info .wrapping_info .number i{font-size:3rem}.contact_us .wrapping .info .wrapping_info .email p,.contact_us .wrapping .info .wrapping_info .number p{text-align:left;width:100%;margin-left:2rem;font-weight:300}.contact_us .wrapping .info .wrapping_info .social{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;margin-top:5rem}.contact_us .wrapping .info .wrapping_info .social a{margin-left:3rem;-webkit-transition:none;transition:none}.contact_us .wrapping .info .wrapping_info .social a:first-of-type{margin-left:0}.contact_us .wrapping .info .wrapping_info .social a .icon{font-size:4rem;cursor:pointer;-webkit-transition:all 0.5s;transition:all 0.5s;color:#000}.contact_us .wrapping .info .wrapping_info .social a .icon:hover{-webkit-transform:translateY(-20px);transform:translateY(-20px)}.contact_us .wrapping .form_wrapping{margin:0 auto}.contact_us .wrapping .form_wrapping .form input,.contact_us .wrapping .form_wrapping .form textarea{border:none;outline:0;-webkit-box-shadow:0 0 1rem rgba(0,0,0,0.5);box-shadow:0 0 1rem rgba(0,0,0,0.5);padding:1.2rem;font-size:1.7rem;font-weight:500;display:block;margin-top:3rem;width:57rem}@media (max-width: 940px){.contact_us .wrapping .form_wrapping .form input,.contact_us .wrapping .form_wrapping .form textarea{width:47rem}}.contact_us .wrapping .form_wrapping .form textarea{height:14rem}.contact_us .wrapping .form_wrapping .form #btn_submit{border:none;padding:1.2rem 2rem;border-radius:0.5rem;color:#fff;cursor:pointer;-webkit-transition:all 0.3s;transition:all 0.3s;background-color:#e71b24;display:block}@media (min-width: 1500px){.contact_us .wrapping .form_wrapping .form #btn_submit{font-size:1.5rem;padding:1rem 2rem}}.contact_us .wrapping .form_wrapping .form #btn_submit:hover{background-color:#05582e}.second_header{position:relative;width:100%;height:10vh;background-color:#05582e;overflow:hidden}.second_header .navabr{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;line-height:1.6}@media (max-width: 940px){.second_header .navabr{line-height:2}}.second_header .navabr .logo{-ms-flex-preferred-size:68rem;flex-basis:68rem}.second_header .navabr .logo img{width:12rem;height:5rem}.second_header .navabr .nav_links{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:1rem}.second_header .navabr .nav_links li{margin-left:2rem}.second_header .navabr .nav_links li a{color:#fff;position:relative;padding:1rem;font-weight:500}.second_header .navabr .nav_links li a:hover{color:#e71b24}.second_header .active a{color:#e71b24 !important}.all_products_page{margin-bottom:3rem}.all_products_page .cover{height:40rem;background-attachment:fixed}@media (max-width: 940px){.all_products_page .cover{display:none}}.all_products_page .cover img{width:100%;height:100%}.all_products_page .show_products{position:relative;min-height:75vh}.all_products_page .show_products .wrapping .products{display:-ms-grid;display:grid;-ms-grid-columns:minmax(25rem, 1fr) [auto-fit];grid-template-columns:repeat(auto-fit, minmax(25rem, 1fr));margin:8rem 0;margin-bottom:1rem}.all_products_page .show_products .wrapping .products .product{position:relative;margin:2rem auto;-webkit-box-shadow:0 0 0.1rem rgba(0,0,0,0.5);box-shadow:0 0 0.1rem rgba(0,0,0,0.5);border-radius:0.5rem;cursor:pointer;overflow:hidden;-webkit-transition:all 1s ease-in-out;transition:all 1s ease-in-out}.all_products_page .show_products .wrapping .products .product:hover .image{-webkit-transform:scale(0.7) rotate(360deg);transform:scale(0.7) rotate(360deg)}.all_products_page .show_products .wrapping .products .product .image{position:relative;width:17rem;min-width:17rem;max-width:17rem;height:22rem;min-height:22rem;max-height:22rem;padding:1rem;-webkit-transition:all 1s ease-in-out;transition:all 1s ease-in-out}.all_products_page .show_products .wrapping .products .product .image img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.all_products_page .show_products .wrapping .products .product .description{width:17rem;min-width:17rem;max-width:17rem;position:relative;-webkit-transition:all 1s ease-in-out;transition:all 1s ease-in-out;overflow:hidden}.all_products_page .show_products .wrapping .products .product .description hr{opacity:0.3}.all_products_page .show_products .wrapping .products .product .description p{padding:1.5rem;font-size:1.2rem;line-height:1.3;text-align:center;-webkit-transition:all 1s ease-in-out;transition:all 1s ease-in-out}.all_products_page .show_products .pagination{margin-left:5rem}.all_products_page .show_products .pagination a{background-color:#fff;color:#e71b24}.all_products_page .show_products .pagination a:hover{background-color:#e71b24;color:#fff !important}.search_result{position:absolute;top:-4rem;margin-left:5rem}.search_result h2{color:#e71b24;font-size:1.7rem}.search_result h2 span{color:#000}.search_result hr{margin-top:1rem}.single{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.single .image{-ms-flex-preferred-size:32%;flex-basis:32%}.single .image img{height:50rem;padding:7rem}.single .info{-ms-flex-preferred-size:39%;flex-basis:39%;margin-top:9rem}@media (max-width: 900px){.single{flex-direction:column;align-items:center}.single .info{margin-bottom:5rem;margin-top:0}}.single .info .name{margin-bottom:3rem}.single .info .name h3{font-size:2.8rem}.single .info .name h4{font-size:1.7rem;margin-top:2rem;font-weight:600}.single .info .description{margin-bottom:4rem}.single .info .description p{font-size:1.5rem;line-height:1.7}.single .info .buttons{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.single .info .buttons a,.single .info .buttons button{border:0;padding:1.2rem;font-size:1.7rem;border-radius:2px;color:#fff;background-color:#e71b24;-webkit-transition:background-color 0.5s;transition:background-color 0.5s}.single .info .buttons a:hover,.single .info .buttons button:hover{background-color:#05582e}.single .info .buttons a:last-of-type,.single .info .buttons button:last-of-type{margin-left:5rem}.single .info .buttons button{margin-left:0 !important}.chechout{position:relative;min-height:76vh}.chechout .chechout_wrapping{display:-webkit-box;display:-ms-flexbox;display:flex;margin-top:6rem}@media (max-width: 940px){.chechout .chechout_wrapping{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}}.chechout .chechout_wrapping .form .title,.chechout .chechout_wrapping .items .title{position:relative}.chechout .chechout_wrapping .form .title:after,.chechout .chechout_wrapping .items .title:after{content:'';position:absolute;width:34%;height:0.2rem;background-color:#05582e;bottom:-1rem;left:0}.chechout .chechout_wrapping .form .title p,.chechout .chechout_wrapping .items .title p{font-size:1.8rem}.chechout .chechout_wrapping .form{-ms-flex-preferred-size:50%;flex-basis:50%}.chechout .chechout_wrapping .form form{width:90%}.chechout .chechout_wrapping .form form .form_wrapping{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:3rem 0}.chechout .chechout_wrapping .form form .form_wrapping input{width:50%;height:4rem;padding:1.5rem;margin-right:2rem;font-size:1.8rem;outline:0}.chechout .chechout_wrapping .form form .form_wrapping textarea{width:97%;outline:0;padding:1.5rem;font-size:1.8rem}.chechout .chechout_wrapping .form form .form_wrapping .btn_chechout{border:none;padding:1rem;cursor:pointer;font-size:2rem;border-radius:3px;background-color:#e71b24;color:#fff;line-height:1;-webkit-transition:background-color 0.5s;transition:background-color 0.5s}.chechout .chechout_wrapping .form form .form_wrapping .btn_chechout:hover{background-color:#05582e}.chechout .chechout_wrapping .items{-ms-flex-preferred-size:50%;flex-basis:50%}.chechout .chechout_wrapping .items table{margin-top:3rem;font-size:1.5rem;text-align:center}.chechout .chechout_wrapping .items table td{width:20rem}.chechout .chechout_wrapping .items table .quantity{font-size:1.8rem;width:80%;margin:0 auto;outline:0}footer{position:relative;width:100%;height:8rem;background:-webkit-gradient(radial, 174 76, 36, 220 -388, 729, from(#6c972c), to(#13672c));background-attachment:fixed;color:#fff;padding-top:1.2rem;margin-top:-0.4rem;overflow:hidden}@media (max-width: 940px){footer{overflow:visible;height:10rem}}footer .nav_item{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}footer .nav_item::before{content:'';position:absolute;width:45%;height:0.3rem;background-color:#fff;bottom:44%;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%)}footer .nav_item .nav_list{margin:0 4rem}footer .nav_item .nav_list a{color:#fff;font-size:1.5rem;-webkit-transition:color 0.4s;transition:color 0.4s}footer .nav_item .nav_list a:hover{color:#c0392b}footer .copyright{width:37%;position:absolute;bottom:0.5rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%)}@media (max-width: 940px){footer .copyright{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}footer .copyright li a{color:#fff;font-size:1.6rem !important}footer .image{position:absolute;bottom:11%;left:6%}footer .image img{width:10rem;height:5rem;opacity:0.7}\n",""]),t.default=o},function(e,t){var i=["find","location","kiwi4art","3677JoglKC","1SovFuf","204570msSNPk","href","fadeOut","60852rjCved","87389BzfzXj",".copyright","2xESjoH","log","66137jBrKUr","84859DGfBHN","24leLhcZ","made_by",".loader","1FicuWE","2ThkYbQ",'<a href="https://kiwi4art.com"><p id="made_by">Made By : Kiwi4Art </p></a>',"load","includes","getElementById","font-size:30px","toLowerCase","100922PRzMjy","innerText"],r=function(e,t){return i[e-=279]},o=r;(function(e,t){for(var i=r;;)try{if(172815===parseInt(i(296))+-parseInt(i(303))*-parseInt(i(291))+-parseInt(i(279))*-parseInt(i(297))+-parseInt(i(293))+parseInt(i(302))*parseInt(i(306))+-parseInt(i(299))*parseInt(i(301))+parseInt(i(286))*parseInt(i(292)))break;e.push(e.shift())}catch(t){e.push(e.shift())}})(i),$(window).on(o(281),(function(){var e,t=o,i=$(t(298))[t(288)]("li:first");i.empty(),null!=i&&i.append(t(280)),console[t(300)]("%c Made By: Abdulrahman Kazkaz","background:red;font-size:50px"),console[t(300)]("%c https://www.linkedin.com/in/abdulrahmankazkaz/",t(284));var r=null===(e=document[t(283)](t(304)))||void 0===e?void 0:e[t(287)][t(285)]();r&&r[t(282)](t(290))?$(t(305))[t(295)](300):window[t(289)][t(294)]="https://www.linkedin.com/in/abdulrahmankazkaz/"}))}]);
