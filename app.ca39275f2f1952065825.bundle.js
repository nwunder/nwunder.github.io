webpackJsonp([0],{29:function(e,t,__webpack_require__){t=e.exports=__webpack_require__(30)(),t.push([e.i,"body {\n  background-color: gray; }\n",""])},30:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}},31:function(e,t,__webpack_require__){(function(t){var r="object"==typeof t?t:"object"==typeof window?window:"object"==typeof self?self:this,n=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,o=n&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,e.exports=__webpack_require__(32),n)r.regeneratorRuntime=o;else try{delete r.regeneratorRuntime}catch(e){r.regeneratorRuntime=void 0}}).call(t,__webpack_require__(11))},32:function(e,t,__webpack_require__){(function(t,r,n){!function(t){"use strict";function wrap(e,t,r,n){var o=t&&t.prototype instanceof Generator?t:Generator,i=Object.create(o.prototype),a=new Context(n||[]);return i._invoke=makeInvokeMethod(e,r,a),i}function tryCatch(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}function defineIteratorMethods(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function AwaitArgument(e){this.arg=e}function AsyncIterator(e){function invoke(t,n,o,i){var a=tryCatch(e[t],e,n);if("throw"!==a.type){var s=a.arg,u=s.value;return u instanceof AwaitArgument?r.resolve(u.arg).then(function(e){invoke("next",e,o,i)},function(e){invoke("throw",e,o,i)}):r.resolve(u).then(function(e){s.value=e,o(s)},i)}i(a.arg)}function enqueue(e,n){function callInvokeWithMethodAndArg(){return new r(function(t,r){invoke(e,n,t,r)})}return t=t?t.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}"object"==typeof n&&n.domain&&(invoke=n.domain.bind(invoke));var t;this._invoke=enqueue}function makeInvokeMethod(e,t,r){var n=p;return function(i,a){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===i)throw a;return doneResult()}for(;;){var s=r.delegate;if(s){if("return"===i||"throw"===i&&s.iterator[i]===o){r.delegate=null;var u=s.iterator.return;if(u){var l=tryCatch(u,s.iterator,a);if("throw"===l.type){i="throw",a=l.arg;continue}}if("return"===i)continue}var l=tryCatch(s.iterator[i],s.iterator,a);if("throw"===l.type){r.delegate=null,i="throw",a=l.arg;continue}i="next",a=o;var c=l.arg;if(!c.done)return n=f,c;r[s.resultName]=c.value,r.next=s.nextLoc,r.delegate=null}if("next"===i)r.sent=r._sent=a;else if("throw"===i){if(n===p)throw n=d,a;r.dispatchException(a)&&(i="next",a=o)}else"return"===i&&r.abrupt("return",a);n=h;var l=tryCatch(e,t,r);if("normal"===l.type){n=r.done?d:f;var c={value:l.arg,done:r.done};if(l.arg!==y)return c;r.delegate&&"next"===i&&(a=o)}else"throw"===l.type&&(n=d,i="throw",a=l.arg)}}}function pushTryEntry(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function resetTryEntry(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function Context(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e){var t=e[s];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function next(){for(;++r<e.length;)if(i.call(e,r))return next.value=e[r],next.done=!1,next;return next.value=o,next.done=!0,next};return n.next=n}}return{next:doneResult}}function doneResult(){return{value:o,done:!0}}var o,i=Object.prototype.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},s=a.iterator||"@@iterator",u=a.toStringTag||"@@toStringTag",l="object"==typeof e,c=t.regeneratorRuntime;if(c)return void(l&&(e.exports=c));c=t.regeneratorRuntime=l?e.exports:{},c.wrap=wrap;var p="suspendedStart",f="suspendedYield",h="executing",d="completed",y={},g=GeneratorFunctionPrototype.prototype=Generator.prototype;GeneratorFunction.prototype=g.constructor=GeneratorFunctionPrototype,GeneratorFunctionPrototype.constructor=GeneratorFunction,GeneratorFunctionPrototype[u]=GeneratorFunction.displayName="GeneratorFunction",c.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===GeneratorFunction||"GeneratorFunction"===(t.displayName||t.name))},c.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,GeneratorFunctionPrototype):(e.__proto__=GeneratorFunctionPrototype,u in e||(e[u]="GeneratorFunction")),e.prototype=Object.create(g),e},c.awrap=function(e){return new AwaitArgument(e)},defineIteratorMethods(AsyncIterator.prototype),c.async=function(e,t,r,n){var o=new AsyncIterator(wrap(e,t,r,n));return c.isGeneratorFunction(t)?o:o.next().then(function(e){return e.done?e.value:o.next()})},defineIteratorMethods(g),g[s]=function(){return this},g[u]="Generator",g.toString=function(){return"[object Generator]"},c.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function next(){for(;t.length;){var r=t.pop();if(r in e)return next.value=r,next.done=!1,next}return next.done=!0,next}},c.values=values,Context.prototype={constructor:Context,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=o,this.done=!1,this.delegate=null,this.tryEntries.forEach(resetTryEntry),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=o)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){function handle(r,n){return o.type="throw",o.arg=e,t.next=r,!!n}if(this.done)throw e;for(var t=this,r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r],o=n.completion;if("root"===n.tryLoc)return handle("end");if(n.tryLoc<=this.prev){var a=i.call(n,"catchLoc"),s=i.call(n,"finallyLoc");if(a&&s){if(this.prev<n.catchLoc)return handle(n.catchLoc,!0);if(this.prev<n.finallyLoc)return handle(n.finallyLoc)}else if(a){if(this.prev<n.catchLoc)return handle(n.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<n.finallyLoc)return handle(n.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?this.next=o.finallyLoc:this.complete(a),y},complete:function(e,t){if("throw"===e.type)throw e.arg;"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=e.arg,this.next="end"):"normal"===e.type&&t&&(this.next=t)},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;resetTryEntry(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:values(e),resultName:t,nextLoc:r},y}}}("object"==typeof t?t:"object"==typeof window?window:"object"==typeof self?self:this)}).call(t,__webpack_require__(11),__webpack_require__("bluebird"),__webpack_require__(14))},33:function(e,t){function addStylesToDom(e,t){for(var n=0;n<e.length;n++){var o=e[n],i=r[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(addStyle(o.parts[a],t))}else{for(var s=[],a=0;a<o.parts.length;a++)s.push(addStyle(o.parts[a],t));r[o.id]={id:o.id,refs:1,parts:s}}}}function listToStyles(e){for(var t=[],r={},n=0;n<e.length;n++){var o=e[n],i=o[0],a=o[1],s=o[2],u=o[3],l={css:a,media:s,sourceMap:u};r[i]?r[i].parts.push(l):t.push(r[i]={id:i,parts:[l]})}return t}function insertStyleElement(e,t){var r=i(),n=u[u.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),u.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(t)}}function removeStyleElement(e){e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function createStyleElement(e){var t=document.createElement("style");return t.type="text/css",insertStyleElement(e,t),t}function createLinkElement(e){var t=document.createElement("link");return t.rel="stylesheet",insertStyleElement(e,t),t}function addStyle(e,t){var r,n,o;if(t.singleton){var i=s++;r=a||(a=createStyleElement(t)),n=applyToSingletonTag.bind(null,r,i,!1),o=applyToSingletonTag.bind(null,r,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=createLinkElement(t),n=updateLink.bind(null,r),o=function(){removeStyleElement(r),r.href&&URL.revokeObjectURL(r.href)}):(r=createStyleElement(t),n=applyToTag.bind(null,r),o=function(){removeStyleElement(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}function applyToSingletonTag(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=l(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function applyToTag(e,t){var r=t.css,n=t.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function updateLink(e,t){var r=t.css,n=t.sourceMap;n&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var o=new Blob([r],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var r={},n=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},o=n(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),i=n(function(){return document.head||document.getElementsByTagName("head")[0]}),a=null,s=0,u=[];e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},"undefined"==typeof t.singleton&&(t.singleton=o()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=listToStyles(e);return addStylesToDom(n,t),function(e){for(var o=[],i=0;i<n.length;i++){var a=n[i],s=r[a.id];s.refs--,o.push(s)}if(e){var u=listToStyles(e);addStylesToDom(u,t)}for(var i=0;i<o.length;i++){var s=o[i];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete r[s.id]}}}};var l=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},34:function(e,t,__webpack_require__){var r=__webpack_require__(29);"string"==typeof r&&(r=[[e.i,r,""]]);__webpack_require__(33)(r,{singleton:!0});r.locals&&(e.exports=r.locals)},35:function(e,t,__webpack_require__){(function(e){!function(t){"use strict";function normalizeName(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function normalizeValue(e){return"string"!=typeof e&&(e=String(e)),e}function iteratorFor(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return r.iterable&&(t[Symbol.iterator]=function(){return t}),t}function Headers(e){this.map={},e instanceof Headers?e.forEach(function(e,t){this.append(t,e)},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function consumed(t){return t.bodyUsed?e.reject(new TypeError("Already read")):void(t.bodyUsed=!0)}function fileReaderReady(t){return new e(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function readBlobAsArrayBuffer(e){var t=new FileReader,r=fileReaderReady(t);return t.readAsArrayBuffer(e),r}function readBlobAsText(e){var t=new FileReader,r=fileReaderReady(t);return t.readAsText(e),r}function readArrayBufferAsText(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}function bufferClone(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function Body(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(r.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(r.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(r.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(r.arrayBuffer&&r.blob&&o(e))this._bodyArrayBuffer=bufferClone(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!r.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!i(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=bufferClone(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},r.blob&&(this.blob=function(){var t=consumed(this);if(t)return t;if(this._bodyBlob)return e.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return e.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return e.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?consumed(this)||e.resolve(this._bodyArrayBuffer):this.blob().then(readBlobAsArrayBuffer)}),this.text=function(){var t=consumed(this);if(t)return t;if(this._bodyBlob)return readBlobAsText(this._bodyBlob);if(this._bodyArrayBuffer)return e.resolve(readArrayBufferAsText(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return e.resolve(this._bodyText)},r.formData&&(this.formData=function(){return this.text().then(decode)}),this.json=function(){return this.text().then(JSON.parse)},this}function normalizeMethod(e){var t=e.toUpperCase();return a.indexOf(t)>-1?t:e}function Request(e,t){t=t||{};var r=t.body;if("string"==typeof e)this.url=e;else{if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new Headers(e.headers)),this.method=e.method,this.mode=e.mode,r||null==e._bodyInit||(r=e._bodyInit,e.bodyUsed=!0)}if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new Headers(t.headers)),this.method=normalizeMethod(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function decode(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(o))}}),t}function parseHeaders(e){var t=new Headers;return e.split("\r\n").forEach(function(e){var r=e.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();t.append(n,o)}}),t}function Response(e,t){t||(t={}),this.type="default",this.status="status"in t?t.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new Headers(t.headers),this.url=t.url||"",this._initBody(e)}if(!t.fetch){var r={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(r.arrayBuffer)var n=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],o=function(e){return e&&DataView.prototype.isPrototypeOf(e)},i=ArrayBuffer.isView||function(e){return e&&n.indexOf(Object.prototype.toString.call(e))>-1};Headers.prototype.append=function(e,t){e=normalizeName(e),t=normalizeValue(t);var r=this.map[e];this.map[e]=r?r+","+t:t},Headers.prototype.delete=function(e){delete this.map[normalizeName(e)]},Headers.prototype.get=function(e){return e=normalizeName(e),this.has(e)?this.map[e]:null},Headers.prototype.has=function(e){return this.map.hasOwnProperty(normalizeName(e))},Headers.prototype.set=function(e,t){this.map[normalizeName(e)]=normalizeValue(t)},Headers.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},Headers.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),iteratorFor(e)},Headers.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),iteratorFor(e)},Headers.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),iteratorFor(e)},r.iterable&&(Headers.prototype[Symbol.iterator]=Headers.prototype.entries);var a=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];Request.prototype.clone=function(){return new Request(this,{body:this._bodyInit})},Body.call(Request.prototype),Body.call(Response.prototype),Response.prototype.clone=function(){return new Response(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new Headers(this.headers),url:this.url})},Response.error=function(){var e=new Response(null,{status:0,statusText:""});return e.type="error",e};var s=[301,302,303,307,308];Response.redirect=function(e,t){if(s.indexOf(t)===-1)throw new RangeError("Invalid status code");return new Response(null,{status:t,headers:{location:e}})},t.Headers=Headers,t.Request=Request,t.Response=Response,t.fetch=function(t,n){return new e(function(e,o){var i=new Request(t,n),a=new XMLHttpRequest;a.onload=function(){var t={status:a.status,statusText:a.statusText,headers:parseHeaders(a.getAllResponseHeaders()||"")};t.url="responseURL"in a?a.responseURL:t.headers.get("X-Request-URL");var r="response"in a?a.response:a.responseText;e(new Response(r,t))},a.onerror=function(){o(new TypeError("Network request failed"))},a.ontimeout=function(){o(new TypeError("Network request failed"))},a.open(i.method,i.url,!0),"include"===i.credentials&&(a.withCredentials=!0),"responseType"in a&&r.blob&&(a.responseType="blob"),i.headers.forEach(function(e,t){a.setRequestHeader(t,e)}),a.send("undefined"==typeof i._bodyInit?null:i._bodyInit)})},t.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)}).call(t,__webpack_require__("bluebird"))},36:function(e,t,__webpack_require__){function webpackContext(e){return __webpack_require__(webpackContextResolve(e))}function webpackContextResolve(e){var t=r[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var r={"./app":"app.js","./app.html":"app.html","./aurelia-bootstrapper-webpack":"aurelia-bootstrapper-webpack","./aurelia-event-aggregator":"aurelia-event-aggregator","./aurelia-fetch-client":"aurelia-fetch-client","./aurelia-framework":"aurelia-framework","./aurelia-history-browser":"aurelia-history-browser","./aurelia-loader-webpack":"aurelia-loader-webpack","./aurelia-logging-console":"aurelia-logging-console","./aurelia-pal-browser":"aurelia-pal-browser","./aurelia-polyfills":"aurelia-polyfills","./aurelia-route-recognizer":"aurelia-route-recognizer","./aurelia-router":"aurelia-router","./aurelia-templating-binding":"aurelia-templating-binding","./aurelia-templating-resources":"aurelia-templating-resources","./aurelia-templating-resources/attr-binding-behavior":"aurelia-templating-resources/attr-binding-behavior.js","./aurelia-templating-resources/attr-binding-behavior.js":"aurelia-templating-resources/attr-binding-behavior.js","./aurelia-templating-resources/binding-mode-behaviors":"aurelia-templating-resources/binding-mode-behaviors.js","./aurelia-templating-resources/binding-mode-behaviors.js":"aurelia-templating-resources/binding-mode-behaviors.js","./aurelia-templating-resources/compose":"aurelia-templating-resources/compose.js","./aurelia-templating-resources/compose.js":"aurelia-templating-resources/compose.js","./aurelia-templating-resources/debounce-binding-behavior":"aurelia-templating-resources/debounce-binding-behavior.js","./aurelia-templating-resources/debounce-binding-behavior.js":"aurelia-templating-resources/debounce-binding-behavior.js","./aurelia-templating-resources/focus":"aurelia-templating-resources/focus.js","./aurelia-templating-resources/focus.js":"aurelia-templating-resources/focus.js","./aurelia-templating-resources/hide":"aurelia-templating-resources/hide.js","./aurelia-templating-resources/hide.js":"aurelia-templating-resources/hide.js","./aurelia-templating-resources/if":"aurelia-templating-resources/if.js","./aurelia-templating-resources/if.js":"aurelia-templating-resources/if.js","./aurelia-templating-resources/repeat":"aurelia-templating-resources/repeat.js","./aurelia-templating-resources/repeat.js":"aurelia-templating-resources/repeat.js","./aurelia-templating-resources/replaceable":"aurelia-templating-resources/replaceable.js","./aurelia-templating-resources/replaceable.js":"aurelia-templating-resources/replaceable.js","./aurelia-templating-resources/sanitize-html":"aurelia-templating-resources/sanitize-html.js","./aurelia-templating-resources/sanitize-html.js":"aurelia-templating-resources/sanitize-html.js","./aurelia-templating-resources/show":"aurelia-templating-resources/show.js","./aurelia-templating-resources/show.js":"aurelia-templating-resources/show.js","./aurelia-templating-resources/signal-binding-behavior":"aurelia-templating-resources/signal-binding-behavior.js","./aurelia-templating-resources/signal-binding-behavior.js":"aurelia-templating-resources/signal-binding-behavior.js","./aurelia-templating-resources/throttle-binding-behavior":"aurelia-templating-resources/throttle-binding-behavior.js","./aurelia-templating-resources/throttle-binding-behavior.js":"aurelia-templating-resources/throttle-binding-behavior.js","./aurelia-templating-resources/update-trigger-binding-behavior":"aurelia-templating-resources/update-trigger-binding-behavior.js","./aurelia-templating-resources/update-trigger-binding-behavior.js":"aurelia-templating-resources/update-trigger-binding-behavior.js","./aurelia-templating-resources/with":"aurelia-templating-resources/with.js","./aurelia-templating-resources/with.js":"aurelia-templating-resources/with.js","./aurelia-templating-router":"aurelia-templating-router","./aurelia-templating-router/route-href":"aurelia-templating-router/route-href.js","./aurelia-templating-router/route-href.js":"aurelia-templating-router/route-href.js","./aurelia-templating-router/router-view":"aurelia-templating-router/router-view.js","./aurelia-templating-router/router-view.js":"aurelia-templating-router/router-view.js","./bluebird":"bluebird","./isomorphic-fetch":"isomorphic-fetch","./main":"main.js"};webpackContext.keys=function(){return Object.keys(r)},webpackContext.resolve=webpackContextResolve,e.exports=webpackContext,webpackContext.id=36},37:function(e,t,__webpack_require__){e.exports=__webpack_require__("main.js")},"app.html":function(e,t){e.exports="<template>app</template>"},"app.js":function(e,t){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.__esModule=!0;t.App=function App(){_classCallCheck(this,App)}},"aurelia-fetch-client":function(e,t,__webpack_require__){"use strict";(function(e){function json(e){return new Blob([JSON.stringify(e)],{type:"application/json"})}function rejectOnError(e){if(!e.ok)throw e;return e}function trackRequestStart(){this.isRequesting=!!++this.activeRequestCount}function trackRequestEnd(){this.isRequesting=!!--this.activeRequestCount}function trackRequestEndWith(e){var t=trackRequestEnd.bind(this);return e.then(t,t),e}function parseHeaderValues(e){var t={};for(var r in e||{})e.hasOwnProperty(r)&&(t[r]="function"==typeof e[r]?e[r]():e[r]);return t}function buildRequest(e,t){var r=this.defaults||{},n=void 0,o=void 0,i=void 0,a=parseHeaderValues(r.headers);if(Request.prototype.isPrototypeOf(e))n=e,i=new Headers(n.headers).get("Content-Type");else{t||(t={}),o=t.body;var s=o?{body:o}:null,u=Object.assign({},r,{headers:{}},t,s);i=new Headers(u.headers).get("Content-Type"),n=new Request(getRequestUrl(this.baseUrl,e),u)}return!i&&new Headers(a).has("content-type")&&n.headers.set("Content-Type",new Headers(a).get("content-type")),setDefaultHeaders(n.headers,a),o&&Blob.prototype.isPrototypeOf(o)&&o.type&&n.headers.set("Content-Type",o.type),n}function getRequestUrl(e,t){return o.test(t)?t:(e||"")+t}function setDefaultHeaders(e,t){for(var r in t||{})t.hasOwnProperty(r)&&!e.has(r)&&e.set(r,t[r])}function processRequest(e,t){return applyInterceptors(e,t,"request","requestError")}function processResponse(e,t,r){return applyInterceptors(e,t,"response","responseError",r)}function applyInterceptors(t,r,n,o){for(var i=arguments.length,a=Array(i>4?i-4:0),s=4;s<i;s++)a[s-4]=arguments[s];return(r||[]).reduce(function(e,t){var r=t[n],i=t[o];return e.then(r&&function(e){return r.call.apply(r,[t,e].concat(a))}||identity,i&&function(e){return i.call.apply(i,[t,e].concat(a))}||thrower)},e.resolve(t))}function identity(e){return e}function thrower(e){throw e}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};t.json=json;var n=t.HttpClientConfiguration=function(){function HttpClientConfiguration(){this.baseUrl="",this.defaults={},this.interceptors=[]}return HttpClientConfiguration.prototype.withBaseUrl=function(e){return this.baseUrl=e,this},HttpClientConfiguration.prototype.withDefaults=function(e){return this.defaults=e,this},HttpClientConfiguration.prototype.withInterceptor=function(e){return this.interceptors.push(e),this},HttpClientConfiguration.prototype.useStandardConfiguration=function(){var e={credentials:"same-origin"};return Object.assign(this.defaults,e,this.defaults),this.rejectErrorResponses()},HttpClientConfiguration.prototype.rejectErrorResponses=function(){return this.withInterceptor({response:rejectOnError})},HttpClientConfiguration}(),o=(t.HttpClient=function(){function HttpClient(){if(this.activeRequestCount=0,this.isRequesting=!1,this.isConfigured=!1,this.baseUrl="",this.defaults=null,this.interceptors=[],"undefined"==typeof fetch)throw new Error("HttpClient requires a Fetch API implementation, but the current environment doesn't support it. You may need to load a polyfill such as https://github.com/github/fetch.")}return HttpClient.prototype.configure=function(e){var t=void 0;if("object"===("undefined"==typeof e?"undefined":r(e)))t={defaults:e};else{if("function"!=typeof e)throw new Error("invalid config");t=new n,t.baseUrl=this.baseUrl,t.defaults=Object.assign({},this.defaults),t.interceptors=this.interceptors;var o=e(t);n.prototype.isPrototypeOf(o)&&(t=o)}var i=t.defaults;if(i&&Headers.prototype.isPrototypeOf(i.headers))throw new Error("Default headers must be a plain object.");return this.baseUrl=t.baseUrl,this.defaults=i,this.interceptors=t.interceptors||[],this.isConfigured=!0,this},HttpClient.prototype.fetch=function(e){function fetch(t,r){return e.apply(this,arguments)}return fetch.toString=function(){return e.toString()},fetch}(function(t,r){var n=this;trackRequestStart.call(this);var o=e.resolve().then(function(){return buildRequest.call(n,t,r,n.defaults)}),i=processRequest(o,this.interceptors).then(function(t){var r=null;if(Response.prototype.isPrototypeOf(t))r=t;else{if(!Request.prototype.isPrototypeOf(t))throw new Error("An invalid result was returned by the interceptor chain. Expected a Request or Response instance, but got ["+t+"]");o=e.resolve(t),r=fetch(t)}return o.then(function(e){return processResponse(r,n.interceptors,e)})});return trackRequestEndWith.call(this,i)}),HttpClient}(),/^([a-z][a-z0-9+\-.]*:)?\/\//i)}).call(t,__webpack_require__("bluebird"))},"isomorphic-fetch":function(e,t,__webpack_require__){__webpack_require__(35),e.exports=self.fetch.bind(self)},"main.js":function(e,t,__webpack_require__){"use strict";(function(e,r){function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new r(function(e,n){function step(o,i){try{var a=t[o](i),s=a.value}catch(e){return void n(e)}return a.done?void e(s):r.resolve(s).then(function(e){step("next",e)},function(e){step("throw",e)})}return step("next")})}}t.__esModule=!0,t.configure=void 0;t.configure=function(){var t=_asyncToGenerator(e.mark(function _callee(t){return e.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.use.standardConfiguration().developmentLogging(),e.next=3,t.start();case 3:t.setRoot("app");case 4:case"end":return e.stop()}},_callee,this)}));return function(e){return t.apply(this,arguments)}}();__webpack_require__(34);var n=__webpack_require__("bluebird"),o=_interopRequireWildcard(n);o.config({warnings:!1})}).call(t,__webpack_require__(31),__webpack_require__("bluebird"))}},[37]);