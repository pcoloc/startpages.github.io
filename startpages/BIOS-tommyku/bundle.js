!function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n,e){var r,o,i;r=e(1),o=e(8),i=e(9),e(16),r(function(){return(new o).bootstrap(),(new i).bootstrap()})},function(t,n,e){var r,o;!function(i,s){r=s,o="function"==typeof r?r.call(n,e,n,t):r,!(void 0!==o&&(t.exports=o))}(this,function(){function t(t,n){n=n||A;var e=B.test(t)?n.getElementsByClassName(t.slice(1)):D.test(t)?n.getElementsByTagName(t):n.querySelectorAll(t);return e}function n(t){if(!_){_=A.implementation.createHTMLDocument();var n=_.createElement("base");n.href=A.location.href,_.head.appendChild(n)}return _.body.innerHTML=t,_.body.childNodes}function e(t){"loading"!==A.readyState?t():A.addEventListener("DOMContentLoaded",t)}function r(r,o){if(!r)return this;if(r.cash&&r!==P)return r;var i,s=r,u=0;if(R(r))s=j.test(r)?A.getElementById(r.slice(1)):H.test(r)?n(r):t(r,o);else if(M(r))return e(r),this;if(!s)return this;if(s.nodeType||s===P)this[0]=s,this.length=1;else for(i=this.length=s.length;u<i;u++)this[u]=s[u];return this}function o(t,n){return new r(t,n)}function i(t,n){for(var e=t.length,r=0;r<e&&n.call(t[r],t[r],r,t)!==!1;r++);}function s(t,n){var e=t&&(t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector);return!!e&&e.call(t,n)}function u(t){return R(t)?s:t.cash?function(n){return t.is(n)}:function(t,n){return t===n}}function a(t){return o(T.call(t).filter(function(t,n,e){return e.indexOf(t)===n}))}function c(t){return t[G]=t[G]||{}}function f(t,n,e){return c(t)[n]=e}function l(t,n){var e=c(t);return void 0===e[n]&&(e[n]=t.dataset?t.dataset[n]:o(t).attr("data-"+n)),e[n]}function p(t,n){var e=c(t);e?delete e[n]:t.dataset?delete t.dataset[n]:o(t).removeAttr("data-"+name)}function h(t){return R(t)&&t.match(q)}function d(t,n){return t.classList?t.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(t.className)}function v(t,n,e){t.classList?t.classList.add(n):e.indexOf(" "+n+" ")&&(t.className+=" "+n)}function m(t,n){t.classList?t.classList.remove(n):t.className=t.className.replace(n,"")}function g(t,n){return parseInt(P.getComputedStyle(t[0],null)[n],10)||0}function y(t,n,e){var r=l(t,"_cashEvents")||f(t,"_cashEvents",{});r[n]=r[n]||[],r[n].push(e),t.addEventListener(n,e)}function w(t,n,e){var r,o=l(t,"_cashEvents"),s=o&&o[n];s&&(e?(t.removeEventListener(n,e),r=s.indexOf(e),r>=0&&s.splice(r,1)):(i(s,function(e){t.removeEventListener(n,e)}),s=[]))}function b(t,n){return"&"+encodeURIComponent(t)+"="+encodeURIComponent(n).replace(/%20/g,"+")}function x(t){var n=[];return i(t.options,function(t){t.selected&&n.push(t.value)}),n.length?n:null}function C(t){var n=t.selectedIndex;return n>=0?t.options[n].value:null}function L(t){var n=t.type;if(!n)return null;switch(n.toLowerCase()){case"select-one":return C(t);case"select-multiple":return x(t);case"radio":return t.checked?t.value:null;case"checkbox":return t.checked?t.value:null;default:return t.value?t.value:null}}function N(t,n,e){if(e){var r=t.childNodes[0];t.insertBefore(n,r)}else t.appendChild(n)}function E(t,n,e){var r=R(n);return!r&&n.length?void i(n,function(n){return E(t,n,e)}):void i(t,r?function(t){return t.insertAdjacentHTML(e?"afterbegin":"beforeend",n)}:function(t,r){return N(t,0===r?n:n.cloneNode(!0),e)})}var _,A=document,P=window,k=Array.prototype,T=k.slice,S=k.filter,U=k.push,O=function(){},M=function(t){return typeof t==typeof O&&t.call},R=function(t){return"string"==typeof t},j=/^#[\w-]*$/,B=/^\.[\w-]*$/,H=/<.+>/,D=/^\w+$/,I=o.fn=o.prototype=r.prototype={cash:!0,length:0,push:U,splice:k.splice,map:k.map,init:r};Object.defineProperty(I,"constructor",{value:o}),o.parseHTML=n,o.noop=O,o.isFunction=M,o.isString=R,o.extend=I.extend=function(t){t=t||{};var n=T.call(arguments),e=n.length,r=1;for(1===n.length&&(t=this,r=0);r<e;r++)if(n[r])for(var o in n[r])n[r].hasOwnProperty(o)&&(t[o]=n[r][o]);return t},o.extend({merge:function(t,n){for(var e=+n.length,r=t.length,o=0;o<e;r++,o++)t[r]=n[o];return t.length=r,t},each:i,matches:s,unique:a,isArray:Array.isArray,isNumeric:function(t){return!isNaN(parseFloat(t))&&isFinite(t)}});var G=o.uid="_cash"+Date.now();I.extend({data:function(t,n){if(R(t))return void 0===n?l(this[0],t):this.each(function(e){return f(e,t,n)});for(var e in t)this.data(e,t[e]);return this},removeData:function(t){return this.each(function(n){return p(n,t)})}});var q=/\S+/g;I.extend({addClass:function(t){var n=h(t);return n?this.each(function(t){var e=" "+t.className+" ";i(n,function(n){v(t,n,e)})}):this},attr:function(t,n){if(t){if(R(t))return void 0===n?this[0]?this[0].getAttribute?this[0].getAttribute(t):this[0][t]:void 0:this.each(function(e){e.setAttribute?e.setAttribute(t,n):e[t]=n});for(var e in t)this.attr(e,t[e]);return this}},hasClass:function(t){var n=!1,e=h(t);return e&&e.length&&this.each(function(t){return n=d(t,e[0]),!n}),n},prop:function(t,n){if(R(t))return void 0===n?this[0][t]:this.each(function(e){e[t]=n});for(var e in t)this.prop(e,t[e]);return this},removeAttr:function(t){return this.each(function(n){n.removeAttribute?n.removeAttribute(t):delete n[t]})},removeClass:function(t){if(!arguments.length)return this.attr("class","");var n=h(t);return n?this.each(function(t){i(n,function(n){m(t,n)})}):this},removeProp:function(t){return this.each(function(n){delete n[t]})},toggleClass:function(t,n){if(void 0!==n)return this[n?"addClass":"removeClass"](t);var e=h(t);return e?this.each(function(t){var n=" "+t.className+" ";i(e,function(e){d(t,e)?m(t,e):v(t,e,n)})}):this}}),I.extend({add:function(t,n){return a(o.merge(this,o(t,n)))},each:function(t){return i(this,t),this},eq:function(t){return o(this.get(t))},filter:function(t){if(!t)return this;var n=M(t)?t:u(t);return o(S.call(this,function(e){return n(e,t)}))},first:function(){return this.eq(0)},get:function(t){return void 0===t?T.call(this):t<0?this[t+this.length]:this[t]},index:function(t){var n=t?o(t)[0]:this[0],e=t?this:o(n).parent().children();return T.call(e).indexOf(n)},last:function(){return this.eq(-1)}});var z=function(){var t=/(?:^\w|[A-Z]|\b\w)/g,n=/[\s-_]+/g;return function(e){return e.replace(t,function(t,n){return t[0===n?"toLowerCase":"toUpperCase"]()}).replace(n,"")}}(),F=function(){var t={},n=document,e=n.createElement("div"),r=e.style;return function(n){if(n=z(n),t[n])return t[n];var e=n.charAt(0).toUpperCase()+n.slice(1),o=["webkit","moz","ms","o"],s=(n+" "+o.join(e+" ")+e).split(" ");return i(s,function(e){if(e in r)return t[e]=n=t[n]=e,!1}),t[n]}}();o.prefixedProp=F,o.camelCase=z,I.extend({css:function(t,n){if(R(t))return t=F(t),arguments.length>1?this.each(function(e){return e.style[t]=n}):P.getComputedStyle(this[0])[t];for(var e in t)this.css(e,t[e]);return this}}),i(["Width","Height"],function(t){var n=t.toLowerCase();I[n]=function(){return this[0].getBoundingClientRect()[n]},I["inner"+t]=function(){return this[0]["client"+t]},I["outer"+t]=function(n){return this[0]["offset"+t]+(n?g(this,"margin"+("Width"===t?"Left":"Top"))+g(this,"margin"+("Width"===t?"Right":"Bottom")):0)}}),I.extend({off:function(t,n){return this.each(function(e){return w(e,t,n)})},on:function(t,n,r,o){var i;if(!R(t)){for(var u in t)this.on(u,n,t[u]);return this}return M(n)&&(r=n,n=null),"ready"===t?(e(r),this):(n&&(i=r,r=function(t){for(var e=t.target;!s(e,n);){if(e===this)return e=!1;e=e.parentNode}e&&i.call(e,t)}),this.each(function(n){var e=r;o&&(e=function(){r.apply(this,arguments),w(n,t,e)}),y(n,t,e)}))},one:function(t,n,e){return this.on(t,n,e,!0)},ready:e,trigger:function(t,n){var e=A.createEvent("HTMLEvents");return e.data=n,e.initEvent(t,!0,!1),this.each(function(t){return t.dispatchEvent(e)})}}),I.extend({serialize:function(){var t="";return i(this[0].elements||this,function(n){if(!n.disabled&&"FIELDSET"!==n.tagName){var e=n.name;switch(n.type.toLowerCase()){case"file":case"reset":case"submit":case"button":break;case"select-multiple":var r=L(n);null!==r&&i(r,function(n){t+=b(e,n)});break;default:var o=L(n);null!==o&&(t+=b(e,o))}}}),t.substr(1)},val:function(t){return void 0===t?L(this[0]):this.each(function(n){return n.value=t})}}),I.extend({after:function(t){return o(t).insertAfter(this),this},append:function(t){return E(this,t),this},appendTo:function(t){return E(o(t),this),this},before:function(t){return o(t).insertBefore(this),this},clone:function(){return o(this.map(function(t){return t.cloneNode(!0)}))},empty:function(){return this.html(""),this},html:function(t){if(void 0===t)return this[0].innerHTML;var n=t.nodeType?t[0].outerHTML:t;return this.each(function(t){return t.innerHTML=n})},insertAfter:function(t){var n=this;return o(t).each(function(t,e){var r=t.parentNode,o=t.nextSibling;n.each(function(t){r.insertBefore(0===e?t:t.cloneNode(!0),o)})}),this},insertBefore:function(t){var n=this;return o(t).each(function(t,e){var r=t.parentNode;n.each(function(n){r.insertBefore(0===e?n:n.cloneNode(!0),t)})}),this},prepend:function(t){return E(this,t,!0),this},prependTo:function(t){return E(o(t),this,!0),this},remove:function(){return this.each(function(t){return t.parentNode.removeChild(t)})},text:function(t){return void 0===t?this[0].textContent:this.each(function(n){return n.textContent=t})}});var Y=A.documentElement;return I.extend({position:function(){var t=this[0];return{left:t.offsetLeft,top:t.offsetTop}},offset:function(){var t=this[0].getBoundingClientRect();return{top:t.top+P.pageYOffset-Y.clientTop,left:t.left+P.pageXOffset-Y.clientLeft}},offsetParent:function(){return o(this[0].offsetParent)}}),I.extend({children:function(t){var n=[];return this.each(function(t){U.apply(n,t.children)}),n=a(n),t?n.filter(function(n){return s(n,t)}):n},closest:function(t){return!t||this.length<1?o():this.is(t)?this.filter(t):this.parent().closest(t)},is:function(t){if(!t)return!1;var n=!1,e=u(t);return this.each(function(r){return n=e(r,t),!n}),n},find:function(n){if(!n||n.nodeType)return o(n&&this.has(n).length?n:null);var e=[];return this.each(function(r){U.apply(e,t(n,r))}),a(e)},has:function(n){var e=R(n)?function(e){return 0!==t(n,e).length}:function(t){return t.contains(n)};return this.filter(e)},next:function(){return o(this[0].nextElementSibling)},not:function(t){if(!t)return this;var n=u(t);return this.filter(function(e){return!n(e,t)})},parent:function(){var t=[];return this.each(function(n){n&&n.parentNode&&t.push(n.parentNode)}),a(t)},parents:function(t){var n,e=[];return this.each(function(r){for(n=r;n&&n.parentNode&&n!==A.body.parentNode;)n=n.parentNode,(!t||t&&s(n,t))&&e.push(n)}),a(e)},prev:function(){return o(this[0].previousElementSibling)},siblings:function(){var t=this.parent().children(),n=this[0];return t.filter(function(t){return t!==n})}}),o})},function(t,n){var e;e=function(){function t(){}return t.prototype.URL="http://localhost",t.prototype.TEXT="localhost",t.prototype.html=function(){return"<a href='"+this.URL+"'>"+this.TEXT+"</a>"},t}(),t.exports=e},function(t,n,e){var r,o;r=e(1),o=function(){function t(){this.collection=this.COLLECTION.map(function(t){return function(n){return new(e(17)("./"+t.NAME+"/"+n+".js.coffee"))}}(this))}return t.prototype.render=function(){return r("section#"+this.NAME).empty(),this.collection.forEach(function(t){return function(n){return r("section#"+t.NAME).append(n.html())}}(this))},t}(),t.exports=o},function(t,n){var e;e=function(){function t(){}return t.PAGES=["main","work","fun"],t.detectCurrentPage=function(){var t;return window.location.hash&&(t=window.location.hash.substring(1),this.PAGES.indexOf(t)!==-1)?t:t=window.location.hash=this.PAGES[0]},t}(),t.exports=e},function(t,n,e){var r,o,i=function(t,n){function e(){this.constructor=t}for(var r in n)s.call(n,r)&&(t[r]=n[r]);return e.prototype=n.prototype,t.prototype=new e,t.__super__=n.prototype,t},s={}.hasOwnProperty;o=e(3),r=function(t){function n(){this.collection=this.URLS.map(function(t){return function(t){return{html:function(){return"<a class='nav' href='"+t[0]+"'>"+t[1]+" <span style='color: #555555;'>"+t[0]+"</span></a>"}}}}(this))}return i(n,t),n.prototype.NAME="fun",n.prototype.URLS=[["http://reddit.com/","Reddit"],["http://www.nicovideo.jp","NicoNico"],["https://youtube.com","YouTube"],["http://share.dmhy.org/","DMHY"],["http://www.bilibili.com/","bilibili"]],n}(o),t.exports=r},function(t,n,e){var r,o,i=function(t,n){function e(){this.constructor=t}for(var r in n)s.call(n,r)&&(t[r]=n[r]);return e.prototype=n.prototype,t.prototype=new e,t.__super__=n.prototype,t},s={}.hasOwnProperty;o=e(3),r=function(t){function n(){return n.__super__.constructor.apply(this,arguments)}return i(n,t),n.prototype.COLLECTION=["date_item","time_item","stock_item"],n.prototype.NAME="main",n}(o),t.exports=r},function(t,n,e){var r,o,i=function(t,n){function e(){this.constructor=t}for(var r in n)s.call(n,r)&&(t[r]=n[r]);return e.prototype=n.prototype,t.prototype=new e,t.__super__=n.prototype,t},s={}.hasOwnProperty;r=e(3),o=function(t){function n(){this.collection=this.URLS.map(function(t){return function(t){return{html:function(){return"<a class='nav' href='"+t[0]+"'>"+t[1]+" <span style='color: #555555;'>"+t[0]+"</span></a>"}}}}(this))}return i(n,t),n.prototype.NAME="work",n.prototype.URLS=[["http://canvas.ust.hk/","Canvas"],["http://outlook.com/","Outlook"],["http://o365.ust.hk/","HKUST Email"],["http://mail.ck2ustudio.com/","Ck2uStudio Email"],["https://github.com/tommyku","GitHub"]],n}(r),t.exports=o},function(t,n,e){var r,o,i,s,u,a;r=e(1),u=e(4),s=e(6),i=e(5),a=e(7),o=function(){function t(){this.hash=u.detectCurrentPage()}return t.prototype.updateVisibility=function(){return r("."+u.PAGES.join(", .")).removeClass("focus"),r("."+this.hash).addClass("focus")},t.prototype.updatePage=function(){return this.updateVisibility()},t.prototype.setUpHashListener=function(){return r(window).on("hashchange",function(t){return function(){return t.hash=u.detectCurrentPage(),t.updatePage()}}(this))},t.prototype.bootstrap=function(){return this.setUpHashListener(),this.updatePage(),(new s).render(),(new i).render(),(new a).render()},t}(),t.exports=o},function(t,n,e){var r,o,i;r=e(1),i=e(4),o=function(){function t(){this.pageCount=i.PAGES.length}return t.prototype.getCurrentPagePosition=function(){var t;return t=i.detectCurrentPage(),i.PAGES.indexOf(t)},t.prototype.goToNextPage=function(){var t;return t=(this.getCurrentPagePosition()+1)%this.pageCount,window.location.hash=i.PAGES[t]},t.prototype.goToPreviousPage=function(){var t;return t=(this.getCurrentPagePosition()-1+this.pageCount)%this.pageCount,window.location.hash=i.PAGES[t]},t.prototype.setUpNavNavigation=function(){return r(document).on("keydown",function(t){return function(n){switch(n.key){case"ArrowRight":return t.goToNextPage();case"ArrowLeft":return t.goToPreviousPage()}}}(this))},t.prototype.setUpLinkNavigation=function(){return r(document).on("keydown",function(t){return function(n){switch(n.key){case"ArrowUp":return t.goToPreviousElement();case"ArrowDown":return t.goToNextElement()}}}(this))},t.prototype.goToPreviousElement=function(){var t,n,e,o;if(o=i.detectCurrentPage(),t=r("section#"+o),n=t.children(".focus"),e=null!=n[0]?r(n[0]).prev():r(t.children(".nav")[0]),0!==e.length&&e.hasClass("nav"))return t.children(".focus").removeClass("focus"),e.addClass("focus"),e.get(0).focus()},t.prototype.goToNextElement=function(){var t,n,e,o;if(o=i.detectCurrentPage(),t=r("section#"+o),n=t.children(".focus"),e=null!=n[0]?r(n[0]).next():r(t.children(".nav")[0]),0!==e.length&&e.hasClass("nav"))return t.children(".focus").removeClass("focus"),e.addClass("focus"),e.get(0).focus()},t.prototype.bootstrap=function(){return this.setUpNavNavigation(),this.setUpLinkNavigation()},t}(),t.exports=o},function(t,n,e){var r,o,i=function(t,n){function e(){this.constructor=t}for(var r in n)s.call(n,r)&&(t[r]=n[r]);return e.prototype=n.prototype,t.prototype=new e,t.__super__=n.prototype,t},s={}.hasOwnProperty;o=e(2),r=function(t){function n(){return n.__super__.constructor.apply(this,arguments)}return i(n,t),n.prototype.formatedDate=function(){var t;return t=new Date,this.lo(t.getDate())+"/"+this.lo(t.getMonth())+"/"+t.getFullYear()},n.prototype.lo=function(t){return t>10?t.toString():"0"+t},n.prototype.html=function(){return"<a class='nav'>\n  System Date\n  <time style='margin-left: 4rem;'>["+this.formatedDate()+"]</time>\n</a>"},n}(o),t.exports=r},function(t,n,e){var r,o,i=function(t,n){function e(){this.constructor=t}for(var r in n)s.call(n,r)&&(t[r]=n[r]);return e.prototype=n.prototype,t.prototype=new e,t.__super__=n.prototype,t},s={}.hasOwnProperty;r=e(2),o=function(t){function n(){return n.__super__.constructor.apply(this,arguments)}return i(n,t),n.prototype.html=function(){return"<br />\n<a>\n  Stock\n  <dl style='color: #555555;'>\n    <dt>0005</dt>\n    <dd>63.0&nbsp;&nbsp;&nbsp;&nbsp;0.0 (0.00%)</dd>\n    <dt>2800</dt>\n    <dd>24.7&nbsp;&nbsp;&nbsp;&nbsp;&uarr;0.1 (0.41%)</dd>\n  </dl>\n</a>"},n}(r),t.exports=o},function(t,n,e){var r,o,i=function(t,n){function e(){this.constructor=t}for(var r in n)s.call(n,r)&&(t[r]=n[r]);return e.prototype=n.prototype,t.prototype=new e,t.__super__=n.prototype,t},s={}.hasOwnProperty;r=e(2),o=function(t){function n(){return n.__super__.constructor.apply(this,arguments)}return i(n,t),n.prototype.formatedTime=function(){var t;return t=new Date,this.lo(t.getHours())+":"+this.lo(t.getMinutes())},n.prototype.lo=function(t){return t>10?t.toString():"0"+t},n.prototype.html=function(){return"<a class='nav'>\n  System Time\n  <time style='margin-left: 4rem;'>["+this.formatedTime()+"]</time>\n</a>"},n}(r),t.exports=o},function(t,n,e){n=t.exports=e(14)(),n.push([t.id,"body,html{margin:0;padding:0;font-family:monospace;font-size:25px;line-height:1.7rem;font-weight:300;background-size:cover;background-position:50%}.grid-container{height:100vh;display:-ms-grid;display:grid;-ms-grid-rows:1fr 1fr 100fr 1fr;grid-template-rows:1fr 1fr 100fr 1fr}:focus{outline:0}header{text-align:center;-ms-grid-row-span:1;-ms-grid-row:1;grid-row:1/span 1}header,nav{background-color:#00a;color:#fff;height:1.7rem}nav{-ms-grid-row-span:1;-ms-grid-row:2;grid-row:2/span 1;padding:0 4rem}nav ul{margin:0;padding:0}nav ul li{display:inline-block;list-style:none;margin-right:1.5rem}nav ul li.focus{background-color:#aaa;color:#00a;border-bottom:1px solid #aaa}nav ul li a{text-decoration:none;color:currentColor;text-transform:uppercase}main{-ms-grid-row-span:1;-ms-grid-row:3;grid-row:3/span 1;background-color:#aaa;-ms-grid-columns:70% 30%;grid-template-columns:70% 30%;-ms-grid-rows:100%;grid-template-rows:100%;padding:1rem;display:-ms-grid;display:grid}section.content{grid-col:1/span 1;-ms-grid-row-span:1;-ms-grid-row:1;grid-row:1/span 1;height:calc(100% - 2rem);border:.2rem solid #00a;padding:1rem}section.content section{display:none;padding-left:2rem}section.content section:target{display:block}section.content a{display:block;text-decoration:none;color:#00a}section.content a.focus{color:#fff}section.description{grid-col:2/span 1;-ms-grid-row-span:1;-ms-grid-row:1;grid-row:1/span 1;height:calc(100% - 2rem);border:.2rem solid #00a;border-left:none;padding:1rem}footer{-ms-grid-row-span:1;-ms-grid-row:4;grid-row:4/span 1;background-color:#00a;color:#fff;height:1.7rem;padding-left:4rem;text-align:left}footer span{display:inline-block;margin-right:3rem}",""])},function(t,n){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],n=0;n<this.length;n++){var e=this[n];e[2]?t.push("@media "+e[2]+"{"+e[1]+"}"):t.push(e[1])}return t.join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<n.length;o++){var s=n[o];"number"==typeof s[0]&&r[s[0]]||(e&&!s[2]?s[2]=e:e&&(s[2]="("+s[2]+") and ("+e+")"),t.push(s))}},t}},function(t,n,e){function r(t,n){for(var e=0;e<t.length;e++){var r=t[e],o=h[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(c(r.parts[i],n))}else{for(var s=[],i=0;i<r.parts.length;i++)s.push(c(r.parts[i],n));h[r.id]={id:r.id,refs:1,parts:s}}}}function o(t){for(var n=[],e={},r=0;r<t.length;r++){var o=t[r],i=o[0],s=o[1],u=o[2],a=o[3],c={css:s,media:u,sourceMap:a};e[i]?e[i].parts.push(c):n.push(e[i]={id:i,parts:[c]})}return n}function i(t,n){var e=m(),r=w[w.length-1];if("top"===t.insertAt)r?r.nextSibling?e.insertBefore(n,r.nextSibling):e.appendChild(n):e.insertBefore(n,e.firstChild),w.push(n);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");e.appendChild(n)}}function s(t){t.parentNode.removeChild(t);var n=w.indexOf(t);n>=0&&w.splice(n,1)}function u(t){var n=document.createElement("style");return n.type="text/css",i(t,n),n}function a(t){var n=document.createElement("link");return n.rel="stylesheet",i(t,n),n}function c(t,n){var e,r,o;if(n.singleton){var i=y++;e=g||(g=u(n)),r=f.bind(null,e,i,!1),o=f.bind(null,e,i,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=a(n),r=p.bind(null,e),o=function(){s(e),e.href&&URL.revokeObjectURL(e.href)}):(e=u(n),r=l.bind(null,e),o=function(){s(e)});return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else o()}}function f(t,n,e,r){var o=e?"":r.css;if(t.styleSheet)t.styleSheet.cssText=b(n,o);else{var i=document.createTextNode(o),s=t.childNodes;s[n]&&t.removeChild(s[n]),s.length?t.insertBefore(i,s[n]):t.appendChild(i)}}function l(t,n){var e=n.css,r=n.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}function p(t,n){var e=n.css,r=n.sourceMap;r&&(e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([e],{type:"text/css"}),i=t.href;t.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var h={},d=function(t){var n;return function(){return"undefined"==typeof n&&(n=t.apply(this,arguments)),n}},v=d(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=d(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,y=0,w=[];t.exports=function(t,n){n=n||{},"undefined"==typeof n.singleton&&(n.singleton=v()),"undefined"==typeof n.insertAt&&(n.insertAt="bottom");var e=o(t);return r(e,n),function(t){for(var i=[],s=0;s<e.length;s++){var u=e[s],a=h[u.id];a.refs--,i.push(a)}if(t){var c=o(t);r(c,n)}for(var s=0;s<i.length;s++){var a=i[s];if(0===a.refs){for(var f=0;f<a.parts.length;f++)a.parts[f]();delete h[a.id]}}}};var b=function(){var t=[];return function(n,e){return t[n]=e,t.filter(Boolean).join("\n")}}()},function(t,n,e){var r=e(13);"string"==typeof r&&(r=[[t.id,r,""]]);e(15)(r,{});r.locals&&(t.exports=r.locals)},function(t,n,e){function r(t){return e(o(t))}function o(t){return i[t]||function(){throw new Error("Cannot find module '"+t+"'.")}()}var i={"./fun/index.js.coffee":5,"./main/date_item.js.coffee":10,"./main/index.js.coffee":6,"./main/stock_item.js.coffee":11,"./main/time_item.js.coffee":12,"./work/index.js.coffee":7};r.keys=function(){return Object.keys(i)},r.resolve=o,t.exports=r,r.id=17}]);