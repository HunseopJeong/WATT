!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.TComm=e():t.TComm=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=17)}([function(t,e,n){"use strict";var r=n(8)();t.exports=function(t){return t!==r&&null!==t}},function(t,e,n){"use strict";t.exports=function(t){if("function"!=typeof t)throw new TypeError(t+" is not a function");return t}},function(t,e,n){"use strict";var r=String.prototype.indexOf;t.exports=function(t){return r.call(this,t,arguments[1])>-1}},function(t,e,n){"use strict";var r="razdwatrzy";t.exports=function(){return"function"==typeof r.contains&&(!0===r.contains("dwa")&&!1===r.contains("foo"))}},function(t,e,n){"use strict";t.exports=n(3)()?String.prototype.contains:n(2)},function(t,e,n){"use strict";t.exports=function(t){return"function"==typeof t}},function(t,e,n){"use strict";var r=n(0),o=Array.prototype.forEach,i=Object.create;t.exports=function(t){var e=i(null);return o.call(arguments,function(t){r(t)&&function(t,e){var n;for(n in t)e[n]=t[n]}(Object(t),e)}),e}},function(t,e,n){"use strict";var r=n(0);t.exports=function(t){if(!r(t))throw new TypeError("Cannot use null or undefined");return t}},function(t,e,n){"use strict";t.exports=function(){}},function(t,e,n){"use strict";var r=n(0),o=Object.keys;t.exports=function(t){return o(r(t)?Object(t):t)}},function(t,e,n){"use strict";t.exports=function(){try{return Object.keys("primitive"),!0}catch(t){return!1}}},function(t,e,n){"use strict";t.exports=n(10)()?Object.keys:n(9)},function(t,e,n){"use strict";var r=n(11),o=n(7),i=Math.max;t.exports=function(t,e){var n,c,u,s=i(arguments.length,2);for(t=Object(o(t)),u=function(r){try{t[r]=e[r]}catch(t){n||(n=t)}},c=1;c<s;++c)e=arguments[c],r(e).forEach(u);if(void 0!==n)throw n;return t}},function(t,e,n){"use strict";t.exports=function(){var t,e=Object.assign;return"function"==typeof e&&(e(t={foo:"raz"},{bar:"dwa"},{trzy:"trzy"}),t.foo+t.bar+t.trzy==="razdwatrzy")}},function(t,e,n){"use strict";t.exports=n(13)()?Object.assign:n(12)},function(t,e,n){"use strict";var r=n(14),o=n(6),i=n(5),c=n(4);(t.exports=function(t,e){var n,i,u,s,f;return arguments.length<2||"string"!=typeof t?(s=e,e=t,t=null):s=arguments[2],null==t?(n=u=!0,i=!1):(n=c.call(t,"c"),i=c.call(t,"e"),u=c.call(t,"w")),f={value:e,configurable:n,enumerable:i,writable:u},s?r(o(s),f):f}).gs=function(t,e,n){var u,s,f,a;return"string"!=typeof t?(f=n,n=e,e=t,t=null):f=arguments[3],null==e?e=void 0:i(e)?null==n?n=void 0:i(n)||(f=n,n=void 0):(f=e,e=n=void 0),null==t?(u=!0,s=!1):(u=c.call(t,"c"),s=c.call(t,"e")),a={get:e,set:n,configurable:u,enumerable:s},f?r(o(f),a):a}},function(t,e,n){"use strict";var r,o,i,c,u,s,f,a=n(15),l=n(1),p=Function.prototype.apply,y=Function.prototype.call,h=Object.create,d=Object.defineProperty,b=Object.defineProperties,v=Object.prototype.hasOwnProperty,_={configurable:!0,enumerable:!1,writable:!0};u={on:r=function(t,e){var n;return l(e),v.call(this,"__ee__")?n=this.__ee__:(n=_.value=h(null),d(this,"__ee__",_),_.value=null),n[t]?"object"==typeof n[t]?n[t].push(e):n[t]=[n[t],e]:n[t]=e,this},once:o=function(t,e){var n,o;return l(e),o=this,r.call(this,t,n=function(){i.call(o,t,n),p.call(e,this,arguments)}),n.__eeOnceListener__=e,this},off:i=function(t,e){var n,r,o,i;if(l(e),!v.call(this,"__ee__"))return this;if(!(n=this.__ee__)[t])return this;if("object"==typeof(r=n[t]))for(i=0;o=r[i];++i)o!==e&&o.__eeOnceListener__!==e||(2===r.length?n[t]=r[i?0:1]:r.splice(i,1));else r!==e&&r.__eeOnceListener__!==e||delete n[t];return this},emit:c=function(t){var e,n,r,o,i;if(v.call(this,"__ee__")&&(o=this.__ee__[t]))if("object"==typeof o){for(n=arguments.length,i=new Array(n-1),e=1;e<n;++e)i[e-1]=arguments[e];for(o=o.slice(),e=0;r=o[e];++e)p.call(r,this,i)}else switch(arguments.length){case 1:y.call(o,this);break;case 2:y.call(o,this,arguments[1]);break;case 3:y.call(o,this,arguments[1],arguments[2]);break;default:for(n=arguments.length,i=new Array(n-1),e=1;e<n;++e)i[e-1]=arguments[e];p.call(o,this,i)}}},s={on:a(r),once:a(o),off:a(i),emit:a(c)},f=b({},s),t.exports=e=function(t){return null==t?h(f):b(Object(t),s)},e.methods=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();var o=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(16)).default,i=function(){function t(){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),o(this),this.confs=[],this.wsClients=[],"undefined"!=typeof window&&void 0!==window.TAUCOMM_HOSTS){var e=window.TAUCOMM_HOSTS;Array.isArray(e)?this.confs=this.confs.concat(e):this.confs.push(e)}}return r(t,[{key:"start",value:function(){var t=this,e=[];return this.confs.forEach(function(n){e.push(new Promise(function(e,r){var o=null;try{o=new WebSocket("ws://"+n)}catch(t){consol.error(t)}o.onopen=function(){e(o)},o.onmessage=function(e){var n=JSON.parse(e.data.toString("utf8"));t.emit(n.event,n.data)},o.onerror=function(t){console.error(t),t.target instanceof WebSocket&&t.target.readyState>=2&&e(o)}}))}),new Promise(function(n,r){Promise.all(e).then(function(e){t.wsClients=[],e.forEach(function(e){e instanceof WebSocket&&e.readyState<2&&t.wsClients.push(e)}),t.wsClients.length>0?n(t):r("no active cliens available")}).catch(function(t){r(t)})})}},{key:"send",value:function(t,e){var n=JSON.stringify({event:t,data:e});console.log("sending",n),this.wsClients.forEach(function(t){t.send(n)})}}]),t}();e.default=i}])});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UQ29tbS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vVENvbW0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVENvbW0vLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3QvaXMtdmFsdWUuanMiLCJ3ZWJwYWNrOi8vVENvbW0vLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3QvdmFsaWQtY2FsbGFibGUuanMiLCJ3ZWJwYWNrOi8vVENvbW0vLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9zdHJpbmcvIy9jb250YWlucy9zaGltLmpzIiwid2VicGFjazovL1RDb21tLy4vbm9kZV9tb2R1bGVzL2VzNS1leHQvc3RyaW5nLyMvY29udGFpbnMvaXMtaW1wbGVtZW50ZWQuanMiLCJ3ZWJwYWNrOi8vVENvbW0vLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9zdHJpbmcvIy9jb250YWlucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9UQ29tbS8uL25vZGVfbW9kdWxlcy9lczUtZXh0L29iamVjdC9pcy1jYWxsYWJsZS5qcyIsIndlYnBhY2s6Ly9UQ29tbS8uL25vZGVfbW9kdWxlcy9lczUtZXh0L29iamVjdC9ub3JtYWxpemUtb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9UQ29tbS8uL25vZGVfbW9kdWxlcy9lczUtZXh0L29iamVjdC92YWxpZC12YWx1ZS5qcyIsIndlYnBhY2s6Ly9UQ29tbS8uL25vZGVfbW9kdWxlcy9lczUtZXh0L2Z1bmN0aW9uL25vb3AuanMiLCJ3ZWJwYWNrOi8vVENvbW0vLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3Qva2V5cy9zaGltLmpzIiwid2VicGFjazovL1RDb21tLy4vbm9kZV9tb2R1bGVzL2VzNS1leHQvb2JqZWN0L2tleXMvaXMtaW1wbGVtZW50ZWQuanMiLCJ3ZWJwYWNrOi8vVENvbW0vLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3Qva2V5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9UQ29tbS8uL25vZGVfbW9kdWxlcy9lczUtZXh0L29iamVjdC9hc3NpZ24vc2hpbS5qcyIsIndlYnBhY2s6Ly9UQ29tbS8uL25vZGVfbW9kdWxlcy9lczUtZXh0L29iamVjdC9hc3NpZ24vaXMtaW1wbGVtZW50ZWQuanMiLCJ3ZWJwYWNrOi8vVENvbW0vLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3QvYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovL1RDb21tLy4vbm9kZV9tb2R1bGVzL2QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vVENvbW0vLi9ub2RlX21vZHVsZXMvZXZlbnQtZW1pdHRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9UQ29tbS8uL3NyYy90Y29tbS1jbGllbnQuanMiXSwibmFtZXMiOlsicm9vdCIsImZhY3RvcnkiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmaW5lIiwiYW1kIiwid2luZG93IiwiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsIl91bmRlZmluZWQiLCJ2YWwiLCJmbiIsIlR5cGVFcnJvciIsImluZGV4T2YiLCJTdHJpbmciLCJzZWFyY2hTdHJpbmciLCJ0aGlzIiwiYXJndW1lbnRzIiwic3RyIiwiY29udGFpbnMiLCJvYmoiLCJpc1ZhbHVlIiwiZm9yRWFjaCIsIkFycmF5Iiwib3B0czEiLCJyZXN1bHQiLCJvcHRpb25zIiwic3JjIiwicHJvY2VzcyIsImtleXMiLCJlIiwibWF4IiwiTWF0aCIsImRlc3QiLCJlcnJvciIsImFzc2lnbiIsImxlbmd0aCIsInVuZGVmaW5lZCIsImZvbyIsImJhciIsInRyenkiLCJub3JtYWxpemVPcHRzIiwiaXNDYWxsYWJsZSIsImRzY3IiLCJ3IiwiZGVzYyIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZ3MiLCJzZXQiLCJvbiIsIm9uY2UiLCJvZmYiLCJlbWl0IiwibWV0aG9kcyIsImRlc2NyaXB0b3JzIiwiYmFzZSIsImNhbGxhYmxlIiwiYXBwbHkiLCJGdW5jdGlvbiIsImRlZmluZVByb3BlcnRpZXMiLCJkZXNjcmlwdG9yIiwidHlwZSIsImxpc3RlbmVyIiwiZGF0YSIsIl9fZWVfXyIsInB1c2giLCJzZWxmIiwiX19lZU9uY2VMaXN0ZW5lcl9fIiwibGlzdGVuZXJzIiwiY2FuZGlkYXRlIiwic3BsaWNlIiwiYXJncyIsInNsaWNlIiwiRXZlbnRFbWl0dGVyIiwiZGVmYXVsdCIsIlRDb21tIiwiX2NsYXNzQ2FsbENoZWNrIiwiY29uZnMiLCJ3c0NsaWVudHMiLCJUQVVDT01NX0hPU1RTIiwiY29uZiIsImlzQXJyYXkiLCJjb25jYXQiLCJfdGhpcyIsInJ1bnMiLCJob3N0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJjbGllbnQiLCJXZWJTb2NrZXQiLCJlcnIiLCJjb25zb2wiLCJvbm9wZW4iLCJvbm1lc3NhZ2UiLCJtc2ciLCJKU09OIiwicGFyc2UiLCJ0b1N0cmluZyIsImV2ZW50Iiwib25lcnJvciIsImNvbnNvbGUiLCJ0YXJnZXQiLCJyZWFkeVN0YXRlIiwiYWxsIiwidGhlbiIsImNsaWVudHMiLCJjYXRjaCIsInN0cmluZ2lmeSIsImxvZyIsInNlbmQiXSwibWFwcGluZ3MiOiJDQUFBLFNBQUFBLEVBQUFDLEdBQ0EsaUJBQUFDLFNBQUEsaUJBQUFDLE9BQ0FBLE9BQUFELFFBQUFELElBQ0EsbUJBQUFHLGVBQUFDLElBQ0FELFVBQUFILEdBQ0EsaUJBQUFDLFFBQ0FBLFFBQUEsTUFBQUQsSUFFQUQsRUFBQSxN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SUksTUFBT0osRUFBSWhDLE9BRzdCMEIsRUFBT1csUUFBVSxTQUFDVCxHQUNkVSxRQUFRcEUsTUFBTTBELEdBQ1ZBLEVBQUlXLGtCQUFrQlosV0FDbkJDLEVBQUlXLE9BQU9DLFlBQWMsR0FDNUJoQixFQUFRRSxTQU1qQixJQUFJSCxRQUFRLFNBQUNDLEVBQVNDLEdBQ3pCRixRQUFRa0IsSUFBSXBCLEdBQ1BxQixLQUFLLFNBQUNDLEdBQ0h2QixFQUFLTCxhQUNMNEIsRUFBUXJGLFFBQVEsU0FBQ29FLEdBQ1RBLGFBQWtCQyxXQUNmRCxFQUFPYyxXQUFhLEdBQ3ZCcEIsRUFBS0wsVUFBVWIsS0FBS3dCLEtBR3hCTixFQUFLTCxVQUFVM0MsT0FBUyxFQUN4Qm9ELEVBQVFKLEdBRVJLLEVBQU8sZ0NBR2RtQixNQUFNLFNBQUNoQixHQUNKSCxFQUFPRyxvQ0FLckJRLEVBQU9wQyxHQUNMLElBQU1nQyxFQUFNQyxLQUFLWSxXQUFXVCxRQUFPcEMsU0FDbkNzQyxRQUFRUSxJQUFJLFVBQVdkLEdBQ3ZCaEYsS0FBSytELFVBQVV6RCxRQUFRLFNBQUNvRSxHQUNwQkEsRUFBT3FCLEtBQUtmLHdCQUtUcEIiLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiVENvbW1cIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiVENvbW1cIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNyk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF91bmRlZmluZWQgPSByZXF1aXJlKFwiLi4vZnVuY3Rpb24vbm9vcFwiKSgpOyAvLyBTdXBwb3J0IEVTMyBlbmdpbmVzXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbCkge1xuIHJldHVybiAodmFsICE9PSBfdW5kZWZpbmVkKSAmJiAodmFsICE9PSBudWxsKTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4pIHtcblx0aWYgKHR5cGVvZiBmbiAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKGZuICsgXCIgaXMgbm90IGEgZnVuY3Rpb25cIik7XG5cdHJldHVybiBmbjtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGluZGV4T2YgPSBTdHJpbmcucHJvdG90eXBlLmluZGV4T2Y7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNlYXJjaFN0cmluZy8qLCBwb3NpdGlvbiovKSB7XG5cdHJldHVybiBpbmRleE9mLmNhbGwodGhpcywgc2VhcmNoU3RyaW5nLCBhcmd1bWVudHNbMV0pID4gLTE7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHIgPSBcInJhemR3YXRyenlcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICh0eXBlb2Ygc3RyLmNvbnRhaW5zICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBmYWxzZTtcblx0cmV0dXJuIChzdHIuY29udGFpbnMoXCJkd2FcIikgPT09IHRydWUpICYmIChzdHIuY29udGFpbnMoXCJmb29cIikgPT09IGZhbHNlKTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9pcy1pbXBsZW1lbnRlZFwiKSgpXG5cdD8gU3RyaW5nLnByb3RvdHlwZS5jb250YWluc1xuXHQ6IHJlcXVpcmUoXCIuL3NoaW1cIik7XG4iLCIvLyBEZXByZWNhdGVkXG5cblwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJmdW5jdGlvblwiO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNWYWx1ZSA9IHJlcXVpcmUoXCIuL2lzLXZhbHVlXCIpO1xuXG52YXIgZm9yRWFjaCA9IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLCBjcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xuXG52YXIgcHJvY2VzcyA9IGZ1bmN0aW9uIChzcmMsIG9iaikge1xuXHR2YXIga2V5O1xuXHRmb3IgKGtleSBpbiBzcmMpIG9ialtrZXldID0gc3JjW2tleV07XG59O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdHMxIC8qLCDigKZvcHRpb25zKi8pIHtcblx0dmFyIHJlc3VsdCA9IGNyZWF0ZShudWxsKTtcblx0Zm9yRWFjaC5jYWxsKGFyZ3VtZW50cywgZnVuY3Rpb24gKG9wdGlvbnMpIHtcblx0XHRpZiAoIWlzVmFsdWUob3B0aW9ucykpIHJldHVybjtcblx0XHRwcm9jZXNzKE9iamVjdChvcHRpb25zKSwgcmVzdWx0KTtcblx0fSk7XG5cdHJldHVybiByZXN1bHQ7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc1ZhbHVlID0gcmVxdWlyZShcIi4vaXMtdmFsdWVcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdGlmICghaXNWYWx1ZSh2YWx1ZSkpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgdXNlIG51bGwgb3IgdW5kZWZpbmVkXCIpO1xuXHRyZXR1cm4gdmFsdWU7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lbXB0eS1mdW5jdGlvblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7fTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNWYWx1ZSA9IHJlcXVpcmUoXCIuLi9pcy12YWx1ZVwiKTtcblxudmFyIGtleXMgPSBPYmplY3Qua2V5cztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0KSB7IHJldHVybiBrZXlzKGlzVmFsdWUob2JqZWN0KSA/IE9iamVjdChvYmplY3QpIDogb2JqZWN0KTsgfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0dHJ5IHtcblx0XHRPYmplY3Qua2V5cyhcInByaW1pdGl2ZVwiKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2lzLWltcGxlbWVudGVkXCIpKCkgPyBPYmplY3Qua2V5cyA6IHJlcXVpcmUoXCIuL3NoaW1cIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGtleXMgID0gcmVxdWlyZShcIi4uL2tleXNcIilcbiAgLCB2YWx1ZSA9IHJlcXVpcmUoXCIuLi92YWxpZC12YWx1ZVwiKVxuICAsIG1heCAgID0gTWF0aC5tYXg7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRlc3QsIHNyYyAvKiwg4oCmc3JjbiovKSB7XG5cdHZhciBlcnJvciwgaSwgbGVuZ3RoID0gbWF4KGFyZ3VtZW50cy5sZW5ndGgsIDIpLCBhc3NpZ247XG5cdGRlc3QgPSBPYmplY3QodmFsdWUoZGVzdCkpO1xuXHRhc3NpZ24gPSBmdW5jdGlvbiAoa2V5KSB7XG5cdFx0dHJ5IHtcblx0XHRcdGRlc3Rba2V5XSA9IHNyY1trZXldO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZTtcblx0XHR9XG5cdH07XG5cdGZvciAoaSA9IDE7IGkgPCBsZW5ndGg7ICsraSkge1xuXHRcdHNyYyA9IGFyZ3VtZW50c1tpXTtcblx0XHRrZXlzKHNyYykuZm9yRWFjaChhc3NpZ24pO1xuXHR9XG5cdGlmIChlcnJvciAhPT0gdW5kZWZpbmVkKSB0aHJvdyBlcnJvcjtcblx0cmV0dXJuIGRlc3Q7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgYXNzaWduID0gT2JqZWN0LmFzc2lnbiwgb2JqO1xuXHRpZiAodHlwZW9mIGFzc2lnbiAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZmFsc2U7XG5cdG9iaiA9IHsgZm9vOiBcInJhelwiIH07XG5cdGFzc2lnbihvYmosIHsgYmFyOiBcImR3YVwiIH0sIHsgdHJ6eTogXCJ0cnp5XCIgfSk7XG5cdHJldHVybiAob2JqLmZvbyArIG9iai5iYXIgKyBvYmoudHJ6eSkgPT09IFwicmF6ZHdhdHJ6eVwiO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2lzLWltcGxlbWVudGVkXCIpKClcblx0PyBPYmplY3QuYXNzaWduXG5cdDogcmVxdWlyZShcIi4vc2hpbVwiKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFzc2lnbiAgICAgICAgPSByZXF1aXJlKCdlczUtZXh0L29iamVjdC9hc3NpZ24nKVxuICAsIG5vcm1hbGl6ZU9wdHMgPSByZXF1aXJlKCdlczUtZXh0L29iamVjdC9ub3JtYWxpemUtb3B0aW9ucycpXG4gICwgaXNDYWxsYWJsZSAgICA9IHJlcXVpcmUoJ2VzNS1leHQvb2JqZWN0L2lzLWNhbGxhYmxlJylcbiAgLCBjb250YWlucyAgICAgID0gcmVxdWlyZSgnZXM1LWV4dC9zdHJpbmcvIy9jb250YWlucycpXG5cbiAgLCBkO1xuXG5kID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZHNjciwgdmFsdWUvKiwgb3B0aW9ucyovKSB7XG5cdHZhciBjLCBlLCB3LCBvcHRpb25zLCBkZXNjO1xuXHRpZiAoKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB8fCAodHlwZW9mIGRzY3IgIT09ICdzdHJpbmcnKSkge1xuXHRcdG9wdGlvbnMgPSB2YWx1ZTtcblx0XHR2YWx1ZSA9IGRzY3I7XG5cdFx0ZHNjciA9IG51bGw7XG5cdH0gZWxzZSB7XG5cdFx0b3B0aW9ucyA9IGFyZ3VtZW50c1syXTtcblx0fVxuXHRpZiAoZHNjciA9PSBudWxsKSB7XG5cdFx0YyA9IHcgPSB0cnVlO1xuXHRcdGUgPSBmYWxzZTtcblx0fSBlbHNlIHtcblx0XHRjID0gY29udGFpbnMuY2FsbChkc2NyLCAnYycpO1xuXHRcdGUgPSBjb250YWlucy5jYWxsKGRzY3IsICdlJyk7XG5cdFx0dyA9IGNvbnRhaW5zLmNhbGwoZHNjciwgJ3cnKTtcblx0fVxuXG5cdGRlc2MgPSB7IHZhbHVlOiB2YWx1ZSwgY29uZmlndXJhYmxlOiBjLCBlbnVtZXJhYmxlOiBlLCB3cml0YWJsZTogdyB9O1xuXHRyZXR1cm4gIW9wdGlvbnMgPyBkZXNjIDogYXNzaWduKG5vcm1hbGl6ZU9wdHMob3B0aW9ucyksIGRlc2MpO1xufTtcblxuZC5ncyA9IGZ1bmN0aW9uIChkc2NyLCBnZXQsIHNldC8qLCBvcHRpb25zKi8pIHtcblx0dmFyIGMsIGUsIG9wdGlvbnMsIGRlc2M7XG5cdGlmICh0eXBlb2YgZHNjciAhPT0gJ3N0cmluZycpIHtcblx0XHRvcHRpb25zID0gc2V0O1xuXHRcdHNldCA9IGdldDtcblx0XHRnZXQgPSBkc2NyO1xuXHRcdGRzY3IgPSBudWxsO1xuXHR9IGVsc2Uge1xuXHRcdG9wdGlvbnMgPSBhcmd1bWVudHNbM107XG5cdH1cblx0aWYgKGdldCA9PSBudWxsKSB7XG5cdFx0Z2V0ID0gdW5kZWZpbmVkO1xuXHR9IGVsc2UgaWYgKCFpc0NhbGxhYmxlKGdldCkpIHtcblx0XHRvcHRpb25zID0gZ2V0O1xuXHRcdGdldCA9IHNldCA9IHVuZGVmaW5lZDtcblx0fSBlbHNlIGlmIChzZXQgPT0gbnVsbCkge1xuXHRcdHNldCA9IHVuZGVmaW5lZDtcblx0fSBlbHNlIGlmICghaXNDYWxsYWJsZShzZXQpKSB7XG5cdFx0b3B0aW9ucyA9IHNldDtcblx0XHRzZXQgPSB1bmRlZmluZWQ7XG5cdH1cblx0aWYgKGRzY3IgPT0gbnVsbCkge1xuXHRcdGMgPSB0cnVlO1xuXHRcdGUgPSBmYWxzZTtcblx0fSBlbHNlIHtcblx0XHRjID0gY29udGFpbnMuY2FsbChkc2NyLCAnYycpO1xuXHRcdGUgPSBjb250YWlucy5jYWxsKGRzY3IsICdlJyk7XG5cdH1cblxuXHRkZXNjID0geyBnZXQ6IGdldCwgc2V0OiBzZXQsIGNvbmZpZ3VyYWJsZTogYywgZW51bWVyYWJsZTogZSB9O1xuXHRyZXR1cm4gIW9wdGlvbnMgPyBkZXNjIDogYXNzaWduKG5vcm1hbGl6ZU9wdHMob3B0aW9ucyksIGRlc2MpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGQgICAgICAgID0gcmVxdWlyZSgnZCcpXG4gICwgY2FsbGFibGUgPSByZXF1aXJlKCdlczUtZXh0L29iamVjdC92YWxpZC1jYWxsYWJsZScpXG5cbiAgLCBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseSwgY2FsbCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsXG4gICwgY3JlYXRlID0gT2JqZWN0LmNyZWF0ZSwgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHlcbiAgLCBkZWZpbmVQcm9wZXJ0aWVzID0gT2JqZWN0LmRlZmluZVByb3BlcnRpZXNcbiAgLCBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHlcbiAgLCBkZXNjcmlwdG9yID0geyBjb25maWd1cmFibGU6IHRydWUsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSB9XG5cbiAgLCBvbiwgb25jZSwgb2ZmLCBlbWl0LCBtZXRob2RzLCBkZXNjcmlwdG9ycywgYmFzZTtcblxub24gPSBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIpIHtcblx0dmFyIGRhdGE7XG5cblx0Y2FsbGFibGUobGlzdGVuZXIpO1xuXG5cdGlmICghaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLCAnX19lZV9fJykpIHtcblx0XHRkYXRhID0gZGVzY3JpcHRvci52YWx1ZSA9IGNyZWF0ZShudWxsKTtcblx0XHRkZWZpbmVQcm9wZXJ0eSh0aGlzLCAnX19lZV9fJywgZGVzY3JpcHRvcik7XG5cdFx0ZGVzY3JpcHRvci52YWx1ZSA9IG51bGw7XG5cdH0gZWxzZSB7XG5cdFx0ZGF0YSA9IHRoaXMuX19lZV9fO1xuXHR9XG5cdGlmICghZGF0YVt0eXBlXSkgZGF0YVt0eXBlXSA9IGxpc3RlbmVyO1xuXHRlbHNlIGlmICh0eXBlb2YgZGF0YVt0eXBlXSA9PT0gJ29iamVjdCcpIGRhdGFbdHlwZV0ucHVzaChsaXN0ZW5lcik7XG5cdGVsc2UgZGF0YVt0eXBlXSA9IFtkYXRhW3R5cGVdLCBsaXN0ZW5lcl07XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5vbmNlID0gZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyKSB7XG5cdHZhciBvbmNlLCBzZWxmO1xuXG5cdGNhbGxhYmxlKGxpc3RlbmVyKTtcblx0c2VsZiA9IHRoaXM7XG5cdG9uLmNhbGwodGhpcywgdHlwZSwgb25jZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRvZmYuY2FsbChzZWxmLCB0eXBlLCBvbmNlKTtcblx0XHRhcHBseS5jYWxsKGxpc3RlbmVyLCB0aGlzLCBhcmd1bWVudHMpO1xuXHR9KTtcblxuXHRvbmNlLl9fZWVPbmNlTGlzdGVuZXJfXyA9IGxpc3RlbmVyO1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbm9mZiA9IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lcikge1xuXHR2YXIgZGF0YSwgbGlzdGVuZXJzLCBjYW5kaWRhdGUsIGk7XG5cblx0Y2FsbGFibGUobGlzdGVuZXIpO1xuXG5cdGlmICghaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLCAnX19lZV9fJykpIHJldHVybiB0aGlzO1xuXHRkYXRhID0gdGhpcy5fX2VlX187XG5cdGlmICghZGF0YVt0eXBlXSkgcmV0dXJuIHRoaXM7XG5cdGxpc3RlbmVycyA9IGRhdGFbdHlwZV07XG5cblx0aWYgKHR5cGVvZiBsaXN0ZW5lcnMgPT09ICdvYmplY3QnKSB7XG5cdFx0Zm9yIChpID0gMDsgKGNhbmRpZGF0ZSA9IGxpc3RlbmVyc1tpXSk7ICsraSkge1xuXHRcdFx0aWYgKChjYW5kaWRhdGUgPT09IGxpc3RlbmVyKSB8fFxuXHRcdFx0XHRcdChjYW5kaWRhdGUuX19lZU9uY2VMaXN0ZW5lcl9fID09PSBsaXN0ZW5lcikpIHtcblx0XHRcdFx0aWYgKGxpc3RlbmVycy5sZW5ndGggPT09IDIpIGRhdGFbdHlwZV0gPSBsaXN0ZW5lcnNbaSA/IDAgOiAxXTtcblx0XHRcdFx0ZWxzZSBsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRpZiAoKGxpc3RlbmVycyA9PT0gbGlzdGVuZXIpIHx8XG5cdFx0XHRcdChsaXN0ZW5lcnMuX19lZU9uY2VMaXN0ZW5lcl9fID09PSBsaXN0ZW5lcikpIHtcblx0XHRcdGRlbGV0ZSBkYXRhW3R5cGVdO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0aGlzO1xufTtcblxuZW1pdCA9IGZ1bmN0aW9uICh0eXBlKSB7XG5cdHZhciBpLCBsLCBsaXN0ZW5lciwgbGlzdGVuZXJzLCBhcmdzO1xuXG5cdGlmICghaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLCAnX19lZV9fJykpIHJldHVybjtcblx0bGlzdGVuZXJzID0gdGhpcy5fX2VlX19bdHlwZV07XG5cdGlmICghbGlzdGVuZXJzKSByZXR1cm47XG5cblx0aWYgKHR5cGVvZiBsaXN0ZW5lcnMgPT09ICdvYmplY3QnKSB7XG5cdFx0bCA9IGFyZ3VtZW50cy5sZW5ndGg7XG5cdFx0YXJncyA9IG5ldyBBcnJheShsIC0gMSk7XG5cdFx0Zm9yIChpID0gMTsgaSA8IGw7ICsraSkgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG5cblx0XHRsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuc2xpY2UoKTtcblx0XHRmb3IgKGkgPSAwOyAobGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV0pOyArK2kpIHtcblx0XHRcdGFwcGx5LmNhbGwobGlzdGVuZXIsIHRoaXMsIGFyZ3MpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRjYXNlIDE6XG5cdFx0XHRjYWxsLmNhbGwobGlzdGVuZXJzLCB0aGlzKTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMjpcblx0XHRcdGNhbGwuY2FsbChsaXN0ZW5lcnMsIHRoaXMsIGFyZ3VtZW50c1sxXSk7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDM6XG5cdFx0XHRjYWxsLmNhbGwobGlzdGVuZXJzLCB0aGlzLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0bCA9IGFyZ3VtZW50cy5sZW5ndGg7XG5cdFx0XHRhcmdzID0gbmV3IEFycmF5KGwgLSAxKTtcblx0XHRcdGZvciAoaSA9IDE7IGkgPCBsOyArK2kpIHtcblx0XHRcdFx0YXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG5cdFx0XHR9XG5cdFx0XHRhcHBseS5jYWxsKGxpc3RlbmVycywgdGhpcywgYXJncyk7XG5cdFx0fVxuXHR9XG59O1xuXG5tZXRob2RzID0ge1xuXHRvbjogb24sXG5cdG9uY2U6IG9uY2UsXG5cdG9mZjogb2ZmLFxuXHRlbWl0OiBlbWl0XG59O1xuXG5kZXNjcmlwdG9ycyA9IHtcblx0b246IGQob24pLFxuXHRvbmNlOiBkKG9uY2UpLFxuXHRvZmY6IGQob2ZmKSxcblx0ZW1pdDogZChlbWl0KVxufTtcblxuYmFzZSA9IGRlZmluZVByb3BlcnRpZXMoe30sIGRlc2NyaXB0b3JzKTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZnVuY3Rpb24gKG8pIHtcblx0cmV0dXJuIChvID09IG51bGwpID8gY3JlYXRlKGJhc2UpIDogZGVmaW5lUHJvcGVydGllcyhPYmplY3QobyksIGRlc2NyaXB0b3JzKTtcbn07XG5leHBvcnRzLm1ldGhvZHMgPSBtZXRob2RzO1xuIiwiaW1wb3J0ICogYXMgZWUgZnJvbSAnZXZlbnQtZW1pdHRlcic7XG5jb25zdCBFdmVudEVtaXR0ZXIgPSBlZS5kZWZhdWx0O1xuXG5jbGFzcyBUQ29tbSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdEV2ZW50RW1pdHRlcih0aGlzKTtcbiAgICAgICAgdGhpcy5jb25mcyA9IFtdO1xuICAgICAgICB0aGlzLndzQ2xpZW50cyA9IFtdO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LlRBVUNPTU1fSE9TVFMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGV0IGNvbmYgPSB3aW5kb3cuVEFVQ09NTV9IT1NUUztcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShjb25mKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZnMucHVzaChjb25mKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25mcyA9IHRoaXMuY29uZnMuY29uY2F0KGNvbmYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cdH1cblxuXHRzdGFydCgpIHtcbiAgICAgICAgdmFyIHJ1bnMgPSBbXTtcblxuICAgICAgICB0aGlzLmNvbmZzLmZvckVhY2goKGhvc3QpID0+IHtcbiAgICAgICAgICAgIHJ1bnMucHVzaChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGNsaWVudCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50ID0gbmV3IFdlYlNvY2tldCgnd3M6Ly8nICsgaG9zdCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbC5lcnJvcihlcnIpOyAvLyBkbyBub3QgZmFpbCBwcm9tc2llIGF0IHRoaXMgcG9pbnRcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjbGllbnQub25vcGVuID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGNsaWVudCk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGNsaWVudC5vbm1lc3NhZ2UgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtc2cgPSBKU09OLnBhcnNlKGUuZGF0YS50b1N0cmluZygndXRmOCcpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KG1zZy5ldmVudCwgbXNnLmRhdGEpO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBjbGllbnQub25lcnJvciA9IChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyLnRhcmdldCBpbnN0YW5jZW9mIFdlYlNvY2tldFxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgZXJyLnRhcmdldC5yZWFkeVN0YXRlID49IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoY2xpZW50KTsgLy8gZG8gbm90IGZhaWwgcHJvbWlzZSBhdCB0aGlzIHBvaW50XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgUHJvbWlzZS5hbGwocnVucylcbiAgICAgICAgICAgICAgICAudGhlbigoY2xpZW50cykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLndzQ2xpZW50cyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBjbGllbnRzLmZvckVhY2goKGNsaWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsaWVudCBpbnN0YW5jZW9mIFdlYlNvY2tldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIGNsaWVudC5yZWFkeVN0YXRlIDwgMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud3NDbGllbnRzLnB1c2goY2xpZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLndzQ2xpZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgeyAvLyBubyBhY3RpdmUgY2xpZW50cyBmb3VuZCBzbyByamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCdubyBhY3RpdmUgY2xpZW5zIGF2YWlsYWJsZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cdH1cblxuXHRzZW5kKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgIGNvbnN0IG1zZyA9IEpTT04uc3RyaW5naWZ5KHtldmVudCwgZGF0YX0pO1xuICAgICAgICBjb25zb2xlLmxvZygnc2VuZGluZycsIG1zZyk7XG4gICAgICAgIHRoaXMud3NDbGllbnRzLmZvckVhY2goKGNsaWVudCkgPT4ge1xuICAgICAgICAgICAgY2xpZW50LnNlbmQobXNnKTtcbiAgICAgICAgfSk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVENvbW07XG4iXSwic291cmNlUm9vdCI6IiJ9