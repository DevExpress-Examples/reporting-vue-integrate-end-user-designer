/*!
 * Knockout JavaScript library v3.5.1
 * (c) The Knockout.js team - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

(function() {(function(n){var A=this||(0,eval)("this"),w=A.document,R=A.navigator,v=A.jQuery,H=A.JSON;v||"undefined"===typeof jQuery||(v=jQuery);(function(n){"function"===typeof define&&define.amd?define(["exports","require"],n):"object"===typeof exports&&"object"===typeof module?n(module.exports||exports):n(A.ko={})})(function(S,T){function K(a,c){return null===a||typeof a in W?a===c:!1}function X(b,c){var d;return function(){d||(d=a.a.setTimeout(function(){d=n;b()},c))}}function Y(b,c){var d;return function(){clearTimeout(d);
d=a.a.setTimeout(b,c)}}function Z(a,c){c&&"change"!==c?"beforeChange"===c?this.pc(a):this.gb(a,c):this.qc(a)}function aa(a,c){null!==c&&c.s&&c.s()}function ba(a,c){var d=this.qd,e=d[r];e.ra||(this.Qb&&this.mb[c]?(d.uc(c,a,this.mb[c]),this.mb[c]=null,--this.Qb):e.I[c]||d.uc(c,a,e.J?{da:a}:d.$c(a)),a.Ja&&a.gd())}var a="undefined"!==typeof S?S:{};a.b=function(b,c){for(var d=b.split("."),e=a,f=0;f<d.length-1;f++)e=e[d[f]];e[d[d.length-1]]=c};a.L=function(a,c,d){a[c]=d};a.version="3.5.1";a.b("version",
a.version);a.options={deferUpdates:!1,useOnlyNativeEvents:!1,foreachHidesDestroyed:!1};a.a=function(){function b(a,b){for(var c in a)f.call(a,c)&&b(c,a[c])}function c(a,b){if(b)for(var c in b)f.call(b,c)&&(a[c]=b[c]);return a}function d(a,b){a.__proto__=b;return a}function e(b,c,d,e){var l=b[c].match(q)||[];a.a.D(d.match(q),function(b){a.a.Na(l,b,e)});b[c]=l.join(" ")}var f=Object.prototype.hasOwnProperty,g={__proto__:[]}instanceof Array,h="function"===typeof Symbol,m={},k={};m[R&&/Firefox\/2/i.test(R.userAgent)?
"KeyboardEvent":"UIEvents"]=["keyup","keydown","keypress"];m.MouseEvents="click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");b(m,function(a,b){if(b.length)for(var c=0,d=b.length;c<d;c++)k[b[c]]=a});var l={propertychange:!0},p=w&&function(){for(var a=3,b=w.createElement("div"),c=b.getElementsByTagName("i");b.innerHTML="\x3c!--[if gt IE "+ ++a+"]><i></i><![endif]--\x3e",c[0];);return 4<a?a:n}(),q=/\S+/g,t;return{Jc:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],
D:function(a,b,c){for(var d=0,e=a.length;d<e;d++)b.call(c,a[d],d,a)},A:"function"==typeof Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b)}:function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},Lb:function(a,b,c){for(var d=0,e=a.length;d<e;d++)if(b.call(c,a[d],d,a))return a[d];return n},Pa:function(b,c){var d=a.a.A(b,c);0<d?b.splice(d,1):0===d&&b.shift()},wc:function(b){var c=[];b&&a.a.D(b,function(b){0>a.a.A(c,b)&&c.push(b)});return c},Mb:function(a,
b,c){var d=[];if(a)for(var e=0,l=a.length;e<l;e++)d.push(b.call(c,a[e],e));return d},jb:function(a,b,c){var d=[];if(a)for(var e=0,l=a.length;e<l;e++)b.call(c,a[e],e)&&d.push(a[e]);return d},Nb:function(a,b){if(b instanceof Array)a.push.apply(a,b);else for(var c=0,d=b.length;c<d;c++)a.push(b[c]);return a},Na:function(b,c,d){var e=a.a.A(a.a.bc(b),c);0>e?d&&b.push(c):d||b.splice(e,1)},Ba:g,extend:c,setPrototypeOf:d,Ab:g?d:c,P:b,Ga:function(a,b,c){if(!a)return a;var d={},e;for(e in a)f.call(a,e)&&(d[e]=
b.call(c,a[e],e,a));return d},Tb:function(b){for(;b.firstChild;)a.removeNode(b.firstChild)},Yb:function(b){b=a.a.la(b);for(var c=(b[0]&&b[0].ownerDocument||w).createElement("div"),d=0,e=b.length;d<e;d++)c.appendChild(a.oa(b[d]));return c},Ca:function(b,c){for(var d=0,e=b.length,l=[];d<e;d++){var k=b[d].cloneNode(!0);l.push(c?a.oa(k):k)}return l},va:function(b,c){a.a.Tb(b);if(c)for(var d=0,e=c.length;d<e;d++)b.appendChild(c[d])},Xc:function(b,c){var d=b.nodeType?[b]:b;if(0<d.length){for(var e=d[0],
l=e.parentNode,k=0,f=c.length;k<f;k++)l.insertBefore(c[k],e);k=0;for(f=d.length;k<f;k++)a.removeNode(d[k])}},Ua:function(a,b){if(a.length){for(b=8===b.nodeType&&b.parentNode||b;a.length&&a[0].parentNode!==b;)a.splice(0,1);for(;1<a.length&&a[a.length-1].parentNode!==b;)a.length--;if(1<a.length){var c=a[0],d=a[a.length-1];for(a.length=0;c!==d;)a.push(c),c=c.nextSibling;a.push(d)}}return a},Zc:function(a,b){7>p?a.setAttribute("selected",b):a.selected=b},Db:function(a){return null===a||a===n?"":a.trim?
a.trim():a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Ud:function(a,b){a=a||"";return b.length>a.length?!1:a.substring(0,b.length)===b},vd:function(a,b){if(a===b)return!0;if(11===a.nodeType)return!1;if(b.contains)return b.contains(1!==a.nodeType?a.parentNode:a);if(b.compareDocumentPosition)return 16==(b.compareDocumentPosition(a)&16);for(;a&&a!=b;)a=a.parentNode;return!!a},Sb:function(b){return a.a.vd(b,b.ownerDocument.documentElement)},kd:function(b){return!!a.a.Lb(b,a.a.Sb)},R:function(a){return a&&
a.tagName&&a.tagName.toLowerCase()},Ac:function(b){return a.onError?function(){try{return b.apply(this,arguments)}catch(c){throw a.onError&&a.onError(c),c;}}:b},setTimeout:function(b,c){return setTimeout(a.a.Ac(b),c)},Gc:function(b){setTimeout(function(){a.onError&&a.onError(b);throw b;},0)},B:function(b,c,d){var e=a.a.Ac(d);d=l[c];if(a.options.useOnlyNativeEvents||d||!v)if(d||"function"!=typeof b.addEventListener)if("undefined"!=typeof b.attachEvent){var k=function(a){e.call(b,a)},f="on"+c;b.attachEvent(f,
k);a.a.K.za(b,function(){b.detachEvent(f,k)})}else throw Error("Browser doesn't support addEventListener or attachEvent");else b.addEventListener(c,e,!1);else t||(t="function"==typeof v(b).on?"on":"bind"),v(b)[t](c,e)},Fb:function(b,c){if(!b||!b.nodeType)throw Error("element must be a DOM node when calling triggerEvent");var d;"input"===a.a.R(b)&&b.type&&"click"==c.toLowerCase()?(d=b.type,d="checkbox"==d||"radio"==d):d=!1;if(a.options.useOnlyNativeEvents||!v||d)if("function"==typeof w.createEvent)if("function"==
typeof b.dispatchEvent)d=w.createEvent(k[c]||"HTMLEvents"),d.initEvent(c,!0,!0,A,0,0,0,0,0,!1,!1,!1,!1,0,b),b.dispatchEvent(d);else throw Error("The supplied element doesn't support dispatchEvent");else if(d&&b.click)b.click();else if("undefined"!=typeof b.fireEvent)b.fireEvent("on"+c);else throw Error("Browser doesn't support triggering events");else v(b).trigger(c)},f:function(b){return a.O(b)?b():b},bc:function(b){return a.O(b)?b.v():b},Eb:function(b,c,d){var l;c&&("object"===typeof b.classList?
(l=b.classList[d?"add":"remove"],a.a.D(c.match(q),function(a){l.call(b.classList,a)})):"string"===typeof b.className.baseVal?e(b.className,"baseVal",c,d):e(b,"className",c,d))},Bb:function(b,c){var d=a.a.f(c);if(null===d||d===n)d="";var e=a.h.firstChild(b);!e||3!=e.nodeType||a.h.nextSibling(e)?a.h.va(b,[b.ownerDocument.createTextNode(d)]):e.data=d;a.a.Ad(b)},Yc:function(a,b){a.name=b;if(7>=p)try{var c=a.name.replace(/[&<>'"]/g,function(a){return"&#"+a.charCodeAt(0)+";"});a.mergeAttributes(w.createElement("<input name='"+
c+"'/>"),!1)}catch(d){}},Ad:function(a){9<=p&&(a=1==a.nodeType?a:a.parentNode,a.style&&(a.style.zoom=a.style.zoom))},wd:function(a){if(p){var b=a.style.width;a.style.width=0;a.style.width=b}},Pd:function(b,c){b=a.a.f(b);c=a.a.f(c);for(var d=[],e=b;e<=c;e++)d.push(e);return d},la:function(a){for(var b=[],c=0,d=a.length;c<d;c++)b.push(a[c]);return b},Da:function(a){return h?Symbol(a):a},Zd:6===p,$d:7===p,W:p,Lc:function(b,c){for(var d=a.a.la(b.getElementsByTagName("input")).concat(a.a.la(b.getElementsByTagName("textarea"))),
e="string"==typeof c?function(a){return a.name===c}:function(a){return c.test(a.name)},l=[],k=d.length-1;0<=k;k--)e(d[k])&&l.push(d[k]);return l},Nd:function(b){return"string"==typeof b&&(b=a.a.Db(b))?H&&H.parse?H.parse(b):(new Function("return "+b))():null},hc:function(b,c,d){if(!H||!H.stringify)throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
return H.stringify(a.a.f(b),c,d)},Od:function(c,d,e){e=e||{};var l=e.params||{},k=e.includeFields||this.Jc,f=c;if("object"==typeof c&&"form"===a.a.R(c))for(var f=c.action,h=k.length-1;0<=h;h--)for(var g=a.a.Lc(c,k[h]),m=g.length-1;0<=m;m--)l[g[m].name]=g[m].value;d=a.a.f(d);var p=w.createElement("form");p.style.display="none";p.action=f;p.method="post";for(var q in d)c=w.createElement("input"),c.type="hidden",c.name=q,c.value=a.a.hc(a.a.f(d[q])),p.appendChild(c);b(l,function(a,b){var c=w.createElement("input");
c.type="hidden";c.name=a;c.value=b;p.appendChild(c)});w.body.appendChild(p);e.submitter?e.submitter(p):p.submit();setTimeout(function(){p.parentNode.removeChild(p)},0)}}}();a.b("utils",a.a);a.b("utils.arrayForEach",a.a.D);a.b("utils.arrayFirst",a.a.Lb);a.b("utils.arrayFilter",a.a.jb);a.b("utils.arrayGetDistinctValues",a.a.wc);a.b("utils.arrayIndexOf",a.a.A);a.b("utils.arrayMap",a.a.Mb);a.b("utils.arrayPushAll",a.a.Nb);a.b("utils.arrayRemoveItem",a.a.Pa);a.b("utils.cloneNodes",a.a.Ca);a.b("utils.createSymbolOrString",
a.a.Da);a.b("utils.extend",a.a.extend);a.b("utils.fieldsIncludedWithJsonPost",a.a.Jc);a.b("utils.getFormFields",a.a.Lc);a.b("utils.objectMap",a.a.Ga);a.b("utils.peekObservable",a.a.bc);a.b("utils.postJson",a.a.Od);a.b("utils.parseJson",a.a.Nd);a.b("utils.registerEventHandler",a.a.B);a.b("utils.stringifyJson",a.a.hc);a.b("utils.range",a.a.Pd);a.b("utils.toggleDomNodeCssClass",a.a.Eb);a.b("utils.triggerEvent",a.a.Fb);a.b("utils.unwrapObservable",a.a.f);a.b("utils.objectForEach",a.a.P);a.b("utils.addOrRemoveItem",
a.a.Na);a.b("utils.setTextContent",a.a.Bb);a.b("unwrap",a.a.f);Function.prototype.bind||(Function.prototype.bind=function(a){var c=this;if(1===arguments.length)return function(){return c.apply(a,arguments)};var d=Array.prototype.slice.call(arguments,1);return function(){var e=d.slice(0);e.push.apply(e,arguments);return c.apply(a,e)}});a.a.g=new function(){var b=0,c="__ko__"+(new Date).getTime(),d={},e,f;a.a.W?(e=function(a,e){var f=a[c];if(!f||"null"===f||!d[f]){if(!e)return n;f=a[c]="ko"+b++;d[f]=
{}}return d[f]},f=function(a){var b=a[c];return b?(delete d[b],a[c]=null,!0):!1}):(e=function(a,b){var d=a[c];!d&&b&&(d=a[c]={});return d},f=function(a){return a[c]?(delete a[c],!0):!1});return{get:function(a,b){var c=e(a,!1);return c&&c[b]},set:function(a,b,c){(a=e(a,c!==n))&&(a[b]=c)},Ub:function(a,b,c){a=e(a,!0);return a[b]||(a[b]=c)},clear:f,Z:function(){return b++ +c}}};a.b("utils.domData",a.a.g);a.b("utils.domData.clear",a.a.g.clear);a.a.K=new function(){function b(b,c){var d=a.a.g.get(b,e);
d===n&&c&&(d=[],a.a.g.set(b,e,d));return d}function c(c){var e=b(c,!1);if(e)for(var e=e.slice(0),k=0;k<e.length;k++)e[k](c);a.a.g.clear(c);a.a.K.cleanExternalData(c);g[c.nodeType]&&d(c.childNodes,!0)}function d(b,d){for(var e=[],l,f=0;f<b.length;f++)if(!d||8===b[f].nodeType)if(c(e[e.length]=l=b[f]),b[f]!==l)for(;f--&&-1==a.a.A(e,b[f]););}var e=a.a.g.Z(),f={1:!0,8:!0,9:!0},g={1:!0,9:!0};return{za:function(a,c){if("function"!=typeof c)throw Error("Callback must be a function");b(a,!0).push(c)},yb:function(c,
d){var f=b(c,!1);f&&(a.a.Pa(f,d),0==f.length&&a.a.g.set(c,e,n))},oa:function(b){a.u.G(function(){f[b.nodeType]&&(c(b),g[b.nodeType]&&d(b.getElementsByTagName("*")))});return b},removeNode:function(b){a.oa(b);b.parentNode&&b.parentNode.removeChild(b)},cleanExternalData:function(a){v&&"function"==typeof v.cleanData&&v.cleanData([a])}}};a.oa=a.a.K.oa;a.removeNode=a.a.K.removeNode;a.b("cleanNode",a.oa);a.b("removeNode",a.removeNode);a.b("utils.domNodeDisposal",a.a.K);a.b("utils.domNodeDisposal.addDisposeCallback",
a.a.K.za);a.b("utils.domNodeDisposal.removeDisposeCallback",a.a.K.yb);(function(){var b=[0,"",""],c=[1,"<table>","</table>"],d=[3,"<table><tbody><tr>","</tr></tbody></table>"],e=[1,"<select multiple='multiple'>","</select>"],f={thead:c,tbody:c,tfoot:c,tr:[2,"<table><tbody>","</tbody></table>"],td:d,th:d,option:e,optgroup:e},g=8>=a.a.W;a.a.ua=function(c,d){var e;if(v)if(v.parseHTML)e=v.parseHTML(c,d)||[];else{if((e=v.clean([c],d))&&e[0]){for(var l=e[0];l.parentNode&&11!==l.parentNode.nodeType;)l=l.parentNode;
l.parentNode&&l.parentNode.removeChild(l)}}else{(e=d)||(e=w);var l=e.parentWindow||e.defaultView||A,p=a.a.Db(c).toLowerCase(),q=e.createElement("div"),t;t=(p=p.match(/^(?:\x3c!--.*?--\x3e\s*?)*?<([a-z]+)[\s>]/))&&f[p[1]]||b;p=t[0];t="ignored<div>"+t[1]+c+t[2]+"</div>";"function"==typeof l.innerShiv?q.appendChild(l.innerShiv(t)):(g&&e.body.appendChild(q),q.innerHTML=t,g&&q.parentNode.removeChild(q));for(;p--;)q=q.lastChild;e=a.a.la(q.lastChild.childNodes)}return e};a.a.Md=function(b,c){var d=a.a.ua(b,
c);return d.length&&d[0].parentElement||a.a.Yb(d)};a.a.fc=function(b,c){a.a.Tb(b);c=a.a.f(c);if(null!==c&&c!==n)if("string"!=typeof c&&(c=c.toString()),v)v(b).html(c);else for(var d=a.a.ua(c,b.ownerDocument),e=0;e<d.length;e++)b.appendChild(d[e])}})();a.b("utils.parseHtmlFragment",a.a.ua);a.b("utils.setHtml",a.a.fc);a.aa=function(){function b(c,e){if(c)if(8==c.nodeType){var f=a.aa.Uc(c.nodeValue);null!=f&&e.push({ud:c,Kd:f})}else if(1==c.nodeType)for(var f=0,g=c.childNodes,h=g.length;f<h;f++)b(g[f],
e)}var c={};return{Xb:function(a){if("function"!=typeof a)throw Error("You can only pass a function to ko.memoization.memoize()");var b=(4294967296*(1+Math.random())|0).toString(16).substring(1)+(4294967296*(1+Math.random())|0).toString(16).substring(1);c[b]=a;return"\x3c!--[ko_memo:"+b+"]--\x3e"},bd:function(a,b){var f=c[a];if(f===n)throw Error("Couldn't find any memo with ID "+a+". Perhaps it's already been unmemoized.");try{return f.apply(null,b||[]),!0}finally{delete c[a]}},cd:function(c,e){var f=
[];b(c,f);for(var g=0,h=f.length;g<h;g++){var m=f[g].ud,k=[m];e&&a.a.Nb(k,e);a.aa.bd(f[g].Kd,k);m.nodeValue="";m.parentNode&&m.parentNode.removeChild(m)}},Uc:function(a){return(a=a.match(/^\[ko_memo\:(.*?)\]$/))?a[1]:null}}}();a.b("memoization",a.aa);a.b("memoization.memoize",a.aa.Xb);a.b("memoization.unmemoize",a.aa.bd);a.b("memoization.parseMemoText",a.aa.Uc);a.b("memoization.unmemoizeDomNodeAndDescendants",a.aa.cd);a.na=function(){function b(){if(f)for(var b=f,c=0,d;h<f;)if(d=e[h++]){if(h>b){if(5E3<=
++c){h=f;a.a.Gc(Error("'Too much recursion' after processing "+c+" task groups."));break}b=f}try{d()}catch(p){a.a.Gc(p)}}}function c(){b();h=f=e.length=0}var d,e=[],f=0,g=1,h=0;A.MutationObserver?d=function(a){var b=w.createElement("div");(new MutationObserver(a)).observe(b,{attributes:!0});return function(){b.classList.toggle("foo")}}(c):d=w&&"onreadystatechange"in w.createElement("script")?function(a){var b=w.createElement("script");b.onreadystatechange=function(){b.onreadystatechange=null;w.documentElement.removeChild(b);
b=null;a()};w.documentElement.appendChild(b)}:function(a){setTimeout(a,0)};return{scheduler:d,zb:function(b){f||a.na.scheduler(c);e[f++]=b;return g++},cancel:function(a){a=a-(g-f);a>=h&&a<f&&(e[a]=null)},resetForTesting:function(){var a=f-h;h=f=e.length=0;return a},Sd:b}}();a.b("tasks",a.na);a.b("tasks.schedule",a.na.zb);a.b("tasks.runEarly",a.na.Sd);a.Ta={throttle:function(b,c){b.throttleEvaluation=c;var d=null;return a.$({read:b,write:function(e){clearTimeout(d);d=a.a.setTimeout(function(){b(e)},
c)}})},rateLimit:function(a,c){var d,e,f;"number"==typeof c?d=c:(d=c.timeout,e=c.method);a.Hb=!1;f="function"==typeof e?e:"notifyWhenChangesStop"==e?Y:X;a.ub(function(a){return f(a,d,c)})},deferred:function(b,c){if(!0!==c)throw Error("The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled.");b.Hb||(b.Hb=!0,b.ub(function(c){var e,f=!1;return function(){if(!f){a.na.cancel(e);e=a.na.zb(c);try{f=!0,b.notifySubscribers(n,"dirty")}finally{f=
!1}}}}))},notify:function(a,c){a.equalityComparer="always"==c?null:K}};var W={undefined:1,"boolean":1,number:1,string:1};a.b("extenders",a.Ta);a.ic=function(b,c,d){this.da=b;this.lc=c;this.mc=d;this.Ib=!1;this.fb=this.Jb=null;a.L(this,"dispose",this.s);a.L(this,"disposeWhenNodeIsRemoved",this.l)};a.ic.prototype.s=function(){this.Ib||(this.fb&&a.a.K.yb(this.Jb,this.fb),this.Ib=!0,this.mc(),this.da=this.lc=this.mc=this.Jb=this.fb=null)};a.ic.prototype.l=function(b){this.Jb=b;a.a.K.za(b,this.fb=this.s.bind(this))};
a.T=function(){a.a.Ab(this,D);D.qb(this)};var D={qb:function(a){a.U={change:[]};a.sc=1},subscribe:function(b,c,d){var e=this;d=d||"change";var f=new a.ic(e,c?b.bind(c):b,function(){a.a.Pa(e.U[d],f);e.hb&&e.hb(d)});e.Qa&&e.Qa(d);e.U[d]||(e.U[d]=[]);e.U[d].push(f);return f},notifySubscribers:function(b,c){c=c||"change";"change"===c&&this.Gb();if(this.Wa(c)){var d="change"===c&&this.ed||this.U[c].slice(0);try{a.u.xc();for(var e=0,f;f=d[e];++e)f.Ib||f.lc(b)}finally{a.u.end()}}},ob:function(){return this.sc},
Dd:function(a){return this.ob()!==a},Gb:function(){++this.sc},ub:function(b){var c=this,d=a.O(c),e,f,g,h,m;c.gb||(c.gb=c.notifySubscribers,c.notifySubscribers=Z);var k=b(function(){c.Ja=!1;d&&h===c&&(h=c.nc?c.nc():c());var a=f||m&&c.sb(g,h);m=f=e=!1;a&&c.gb(g=h)});c.qc=function(a,b){b&&c.Ja||(m=!b);c.ed=c.U.change.slice(0);c.Ja=e=!0;h=a;k()};c.pc=function(a){e||(g=a,c.gb(a,"beforeChange"))};c.rc=function(){m=!0};c.gd=function(){c.sb(g,c.v(!0))&&(f=!0)}},Wa:function(a){return this.U[a]&&this.U[a].length},
Bd:function(b){if(b)return this.U[b]&&this.U[b].length||0;var c=0;a.a.P(this.U,function(a,b){"dirty"!==a&&(c+=b.length)});return c},sb:function(a,c){return!this.equalityComparer||!this.equalityComparer(a,c)},toString:function(){return"[object Object]"},extend:function(b){var c=this;b&&a.a.P(b,function(b,e){var f=a.Ta[b];"function"==typeof f&&(c=f(c,e)||c)});return c}};a.L(D,"init",D.qb);a.L(D,"subscribe",D.subscribe);a.L(D,"extend",D.extend);a.L(D,"getSubscriptionsCount",D.Bd);a.a.Ba&&a.a.setPrototypeOf(D,
Function.prototype);a.T.fn=D;a.Qc=function(a){return null!=a&&"function"==typeof a.subscribe&&"function"==typeof a.notifySubscribers};a.b("subscribable",a.T);a.b("isSubscribable",a.Qc);a.S=a.u=function(){function b(a){d.push(e);e=a}function c(){e=d.pop()}var d=[],e,f=0;return{xc:b,end:c,cc:function(b){if(e){if(!a.Qc(b))throw Error("Only subscribable things can act as dependencies");e.od.call(e.pd,b,b.fd||(b.fd=++f))}},G:function(a,d,e){try{return b(),a.apply(d,e||[])}finally{c()}},qa:function(){if(e)return e.o.qa()},
Va:function(){if(e)return e.o.Va()},Ya:function(){if(e)return e.Ya},o:function(){if(e)return e.o}}}();a.b("computedContext",a.S);a.b("computedContext.getDependenciesCount",a.S.qa);a.b("computedContext.getDependencies",a.S.Va);a.b("computedContext.isInitial",a.S.Ya);a.b("computedContext.registerDependency",a.S.cc);a.b("ignoreDependencies",a.Yd=a.u.G);var I=a.a.Da("_latestValue");a.ta=function(b){function c(){if(0<arguments.length)return c.sb(c[I],arguments[0])&&(c.ya(),c[I]=arguments[0],c.xa()),this;
a.u.cc(c);return c[I]}c[I]=b;a.a.Ba||a.a.extend(c,a.T.fn);a.T.fn.qb(c);a.a.Ab(c,F);a.options.deferUpdates&&a.Ta.deferred(c,!0);return c};var F={equalityComparer:K,v:function(){return this[I]},xa:function(){this.notifySubscribers(this[I],"spectate");this.notifySubscribers(this[I])},ya:function(){this.notifySubscribers(this[I],"beforeChange")}};a.a.Ba&&a.a.setPrototypeOf(F,a.T.fn);var G=a.ta.Ma="__ko_proto__";F[G]=a.ta;a.O=function(b){if((b="function"==typeof b&&b[G])&&b!==F[G]&&b!==a.o.fn[G])throw Error("Invalid object that looks like an observable; possibly from another Knockout instance");
return!!b};a.Za=function(b){return"function"==typeof b&&(b[G]===F[G]||b[G]===a.o.fn[G]&&b.Nc)};a.b("observable",a.ta);a.b("isObservable",a.O);a.b("isWriteableObservable",a.Za);a.b("isWritableObservable",a.Za);a.b("observable.fn",F);a.L(F,"peek",F.v);a.L(F,"valueHasMutated",F.xa);a.L(F,"valueWillMutate",F.ya);a.Ha=function(b){b=b||[];if("object"!=typeof b||!("length"in b))throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");b=a.ta(b);a.a.Ab(b,
a.Ha.fn);return b.extend({trackArrayChanges:!0})};a.Ha.fn={remove:function(b){for(var c=this.v(),d=[],e="function"!=typeof b||a.O(b)?function(a){return a===b}:b,f=0;f<c.length;f++){var g=c[f];if(e(g)){0===d.length&&this.ya();if(c[f]!==g)throw Error("Array modified during remove; cannot remove item");d.push(g);c.splice(f,1);f--}}d.length&&this.xa();return d},removeAll:function(b){if(b===n){var c=this.v(),d=c.slice(0);this.ya();c.splice(0,c.length);this.xa();return d}return b?this.remove(function(c){return 0<=
a.a.A(b,c)}):[]},destroy:function(b){var c=this.v(),d="function"!=typeof b||a.O(b)?function(a){return a===b}:b;this.ya();for(var e=c.length-1;0<=e;e--){var f=c[e];d(f)&&(f._destroy=!0)}this.xa()},destroyAll:function(b){return b===n?this.destroy(function(){return!0}):b?this.destroy(function(c){return 0<=a.a.A(b,c)}):[]},indexOf:function(b){var c=this();return a.a.A(c,b)},replace:function(a,c){var d=this.indexOf(a);0<=d&&(this.ya(),this.v()[d]=c,this.xa())},sorted:function(a){var c=this().slice(0);
return a?c.sort(a):c.sort()},reversed:function(){return this().slice(0).reverse()}};a.a.Ba&&a.a.setPrototypeOf(a.Ha.fn,a.ta.fn);a.a.D("pop push reverse shift sort splice unshift".split(" "),function(b){a.Ha.fn[b]=function(){var a=this.v();this.ya();this.zc(a,b,arguments);var d=a[b].apply(a,arguments);this.xa();return d===a?this:d}});a.a.D(["slice"],function(b){a.Ha.fn[b]=function(){var a=this();return a[b].apply(a,arguments)}});a.Pc=function(b){return a.O(b)&&"function"==typeof b.remove&&"function"==
typeof b.push};a.b("observableArray",a.Ha);a.b("isObservableArray",a.Pc);a.Ta.trackArrayChanges=function(b,c){function d(){function c(){if(m){var d=[].concat(b.v()||[]),e;if(b.Wa("arrayChange")){if(!f||1<m)f=a.a.Pb(k,d,b.Ob);e=f}k=d;f=null;m=0;e&&e.length&&b.notifySubscribers(e,"arrayChange")}}e?c():(e=!0,h=b.subscribe(function(){++m},null,"spectate"),k=[].concat(b.v()||[]),f=null,g=b.subscribe(c))}b.Ob={};c&&"object"==typeof c&&a.a.extend(b.Ob,c);b.Ob.sparse=!0;if(!b.zc){var e=!1,f=null,g,h,m=0,
k,l=b.Qa,p=b.hb;b.Qa=function(a){l&&l.call(b,a);"arrayChange"===a&&d()};b.hb=function(a){p&&p.call(b,a);"arrayChange"!==a||b.Wa("arrayChange")||(g&&g.s(),h&&h.s(),h=g=null,e=!1,k=n)};b.zc=function(b,c,d){function l(a,b,c){return k[k.length]={status:a,value:b,index:c}}if(e&&!m){var k=[],p=b.length,g=d.length,h=0;switch(c){case "push":h=p;case "unshift":for(c=0;c<g;c++)l("added",d[c],h+c);break;case "pop":h=p-1;case "shift":p&&l("deleted",b[h],h);break;case "splice":c=Math.min(Math.max(0,0>d[0]?p+d[0]:
d[0]),p);for(var p=1===g?p:Math.min(c+(d[1]||0),p),g=c+g-2,h=Math.max(p,g),U=[],L=[],n=2;c<h;++c,++n)c<p&&L.push(l("deleted",b[c],c)),c<g&&U.push(l("added",d[n],c));a.a.Kc(L,U);break;default:return}f=k}}}};var r=a.a.Da("_state");a.o=a.$=function(b,c,d){function e(){if(0<arguments.length){if("function"===typeof f)f.apply(g.nb,arguments);else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");return this}g.ra||
a.u.cc(e);(g.ka||g.J&&e.Xa())&&e.ha();return g.X}"object"===typeof b?d=b:(d=d||{},b&&(d.read=b));if("function"!=typeof d.read)throw Error("Pass a function that returns the value of the ko.computed");var f=d.write,g={X:n,sa:!0,ka:!0,rb:!1,jc:!1,ra:!1,wb:!1,J:!1,Wc:d.read,nb:c||d.owner,l:d.disposeWhenNodeIsRemoved||d.l||null,Sa:d.disposeWhen||d.Sa,Rb:null,I:{},V:0,Ic:null};e[r]=g;e.Nc="function"===typeof f;a.a.Ba||a.a.extend(e,a.T.fn);a.T.fn.qb(e);a.a.Ab(e,C);d.pure?(g.wb=!0,g.J=!0,a.a.extend(e,da)):
d.deferEvaluation&&a.a.extend(e,ea);a.options.deferUpdates&&a.Ta.deferred(e,!0);g.l&&(g.jc=!0,g.l.nodeType||(g.l=null));g.J||d.deferEvaluation||e.ha();g.l&&e.ja()&&a.a.K.za(g.l,g.Rb=function(){e.s()});return e};var C={equalityComparer:K,qa:function(){return this[r].V},Va:function(){var b=[];a.a.P(this[r].I,function(a,d){b[d.Ka]=d.da});return b},Vb:function(b){if(!this[r].V)return!1;var c=this.Va();return-1!==a.a.A(c,b)?!0:!!a.a.Lb(c,function(a){return a.Vb&&a.Vb(b)})},uc:function(a,c,d){if(this[r].wb&&
c===this)throw Error("A 'pure' computed must not be called recursively");this[r].I[a]=d;d.Ka=this[r].V++;d.La=c.ob()},Xa:function(){var a,c,d=this[r].I;for(a in d)if(Object.prototype.hasOwnProperty.call(d,a)&&(c=d[a],this.Ia&&c.da.Ja||c.da.Dd(c.La)))return!0},Jd:function(){this.Ia&&!this[r].rb&&this.Ia(!1)},ja:function(){var a=this[r];return a.ka||0<a.V},Rd:function(){this.Ja?this[r].ka&&(this[r].sa=!0):this.Hc()},$c:function(a){if(a.Hb){var c=a.subscribe(this.Jd,this,"dirty"),d=a.subscribe(this.Rd,
this);return{da:a,s:function(){c.s();d.s()}}}return a.subscribe(this.Hc,this)},Hc:function(){var b=this,c=b.throttleEvaluation;c&&0<=c?(clearTimeout(this[r].Ic),this[r].Ic=a.a.setTimeout(function(){b.ha(!0)},c)):b.Ia?b.Ia(!0):b.ha(!0)},ha:function(b){var c=this[r],d=c.Sa,e=!1;if(!c.rb&&!c.ra){if(c.l&&!a.a.Sb(c.l)||d&&d()){if(!c.jc){this.s();return}}else c.jc=!1;c.rb=!0;try{e=this.zd(b)}finally{c.rb=!1}return e}},zd:function(b){var c=this[r],d=!1,e=c.wb?n:!c.V,d={qd:this,mb:c.I,Qb:c.V};a.u.xc({pd:d,
od:ba,o:this,Ya:e});c.I={};c.V=0;var f=this.yd(c,d);c.V?d=this.sb(c.X,f):(this.s(),d=!0);d&&(c.J?this.Gb():this.notifySubscribers(c.X,"beforeChange"),c.X=f,this.notifySubscribers(c.X,"spectate"),!c.J&&b&&this.notifySubscribers(c.X),this.rc&&this.rc());e&&this.notifySubscribers(c.X,"awake");return d},yd:function(b,c){try{var d=b.Wc;return b.nb?d.call(b.nb):d()}finally{a.u.end(),c.Qb&&!b.J&&a.a.P(c.mb,aa),b.sa=b.ka=!1}},v:function(a){var c=this[r];(c.ka&&(a||!c.V)||c.J&&this.Xa())&&this.ha();return c.X},
ub:function(b){a.T.fn.ub.call(this,b);this.nc=function(){this[r].J||(this[r].sa?this.ha():this[r].ka=!1);return this[r].X};this.Ia=function(a){this.pc(this[r].X);this[r].ka=!0;a&&(this[r].sa=!0);this.qc(this,!a)}},s:function(){var b=this[r];!b.J&&b.I&&a.a.P(b.I,function(a,b){b.s&&b.s()});b.l&&b.Rb&&a.a.K.yb(b.l,b.Rb);b.I=n;b.V=0;b.ra=!0;b.sa=!1;b.ka=!1;b.J=!1;b.l=n;b.Sa=n;b.Wc=n;this.Nc||(b.nb=n)}},da={Qa:function(b){var c=this,d=c[r];if(!d.ra&&d.J&&"change"==b){d.J=!1;if(d.sa||c.Xa())d.I=null,d.V=
0,c.ha()&&c.Gb();else{var e=[];a.a.P(d.I,function(a,b){e[b.Ka]=a});a.a.D(e,function(a,b){var e=d.I[a],m=c.$c(e.da);m.Ka=b;m.La=e.La;d.I[a]=m});c.Xa()&&c.ha()&&c.Gb()}d.ra||c.notifySubscribers(d.X,"awake")}},hb:function(b){var c=this[r];c.ra||"change"!=b||this.Wa("change")||(a.a.P(c.I,function(a,b){b.s&&(c.I[a]={da:b.da,Ka:b.Ka,La:b.La},b.s())}),c.J=!0,this.notifySubscribers(n,"asleep"))},ob:function(){var b=this[r];b.J&&(b.sa||this.Xa())&&this.ha();return a.T.fn.ob.call(this)}},ea={Qa:function(a){"change"!=
a&&"beforeChange"!=a||this.v()}};a.a.Ba&&a.a.setPrototypeOf(C,a.T.fn);var N=a.ta.Ma;C[N]=a.o;a.Oc=function(a){return"function"==typeof a&&a[N]===C[N]};a.Fd=function(b){return a.Oc(b)&&b[r]&&b[r].wb};a.b("computed",a.o);a.b("dependentObservable",a.o);a.b("isComputed",a.Oc);a.b("isPureComputed",a.Fd);a.b("computed.fn",C);a.L(C,"peek",C.v);a.L(C,"dispose",C.s);a.L(C,"isActive",C.ja);a.L(C,"getDependenciesCount",C.qa);a.L(C,"getDependencies",C.Va);a.xb=function(b,c){if("function"===typeof b)return a.o(b,
c,{pure:!0});b=a.a.extend({},b);b.pure=!0;return a.o(b,c)};a.b("pureComputed",a.xb);(function(){function b(a,f,g){g=g||new d;a=f(a);if("object"!=typeof a||null===a||a===n||a instanceof RegExp||a instanceof Date||a instanceof String||a instanceof Number||a instanceof Boolean)return a;var h=a instanceof Array?[]:{};g.save(a,h);c(a,function(c){var d=f(a[c]);switch(typeof d){case "boolean":case "number":case "string":case "function":h[c]=d;break;case "object":case "undefined":var l=g.get(d);h[c]=l!==
n?l:b(d,f,g)}});return h}function c(a,b){if(a instanceof Array){for(var c=0;c<a.length;c++)b(c);"function"==typeof a.toJSON&&b("toJSON")}else for(c in a)b(c)}function d(){this.keys=[];this.values=[]}a.ad=function(c){if(0==arguments.length)throw Error("When calling ko.toJS, pass the object you want to convert.");return b(c,function(b){for(var c=0;a.O(b)&&10>c;c++)b=b();return b})};a.toJSON=function(b,c,d){b=a.ad(b);return a.a.hc(b,c,d)};d.prototype={constructor:d,save:function(b,c){var d=a.a.A(this.keys,
b);0<=d?this.values[d]=c:(this.keys.push(b),this.values.push(c))},get:function(b){b=a.a.A(this.keys,b);return 0<=b?this.values[b]:n}}})();a.b("toJS",a.ad);a.b("toJSON",a.toJSON);a.Wd=function(b,c,d){function e(c){var e=a.xb(b,d).extend({ma:"always"}),h=e.subscribe(function(a){a&&(h.s(),c(a))});e.notifySubscribers(e.v());return h}return"function"!==typeof Promise||c?e(c.bind(d)):new Promise(e)};a.b("when",a.Wd);(function(){a.w={M:function(b){switch(a.a.R(b)){case "option":return!0===b.__ko__hasDomDataOptionValue__?
a.a.g.get(b,a.c.options.$b):7>=a.a.W?b.getAttributeNode("value")&&b.getAttributeNode("value").specified?b.value:b.text:b.value;case "select":return 0<=b.selectedIndex?a.w.M(b.options[b.selectedIndex]):n;default:return b.value}},cb:function(b,c,d){switch(a.a.R(b)){case "option":"string"===typeof c?(a.a.g.set(b,a.c.options.$b,n),"__ko__hasDomDataOptionValue__"in b&&delete b.__ko__hasDomDataOptionValue__,b.value=c):(a.a.g.set(b,a.c.options.$b,c),b.__ko__hasDomDataOptionValue__=!0,b.value="number"===
typeof c?c:"");break;case "select":if(""===c||null===c)c=n;for(var e=-1,f=0,g=b.options.length,h;f<g;++f)if(h=a.w.M(b.options[f]),h==c||""===h&&c===n){e=f;break}if(d||0<=e||c===n&&1<b.size)b.selectedIndex=e,6===a.a.W&&a.a.setTimeout(function(){b.selectedIndex=e},0);break;default:if(null===c||c===n)c="";b.value=c}}}})();a.b("selectExtensions",a.w);a.b("selectExtensions.readValue",a.w.M);a.b("selectExtensions.writeValue",a.w.cb);a.m=function(){function b(b){b=a.a.Db(b);123===b.charCodeAt(0)&&(b=b.slice(1,
-1));b+="\n,";var c=[],d=b.match(e),p,q=[],h=0;if(1<d.length){for(var x=0,B;B=d[x];++x){var u=B.charCodeAt(0);if(44===u){if(0>=h){c.push(p&&q.length?{key:p,value:q.join("")}:{unknown:p||q.join("")});p=h=0;q=[];continue}}else if(58===u){if(!h&&!p&&1===q.length){p=q.pop();continue}}else if(47===u&&1<B.length&&(47===B.charCodeAt(1)||42===B.charCodeAt(1)))continue;else 47===u&&x&&1<B.length?(u=d[x-1].match(f))&&!g[u[0]]&&(b=b.substr(b.indexOf(B)+1),d=b.match(e),x=-1,B="/"):40===u||123===u||91===u?++h:
41===u||125===u||93===u?--h:p||q.length||34!==u&&39!==u||(B=B.slice(1,-1));q.push(B)}if(0<h)throw Error("Unbalanced parentheses, braces, or brackets");}return c}var c=["true","false","null","undefined"],d=/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,e=RegExp("\"(?:\\\\.|[^\"])*\"|'(?:\\\\.|[^'])*'|`(?:\\\\.|[^`])*`|/\\*(?:[^*]|\\*+[^*/])*\\*+/|//.*\n|/(?:\\\\.|[^/])+/w*|[^\\s:,/][^,\"'`{}()/:[\\]]*[^\\s,\"'`{}()/:[\\]]|[^\\s]","g"),f=/[\])"'A-Za-z0-9_$]+$/,g={"in":1,"return":1,"typeof":1},
h={};return{Ra:[],wa:h,ac:b,vb:function(e,f){function l(b,e){var f;if(!x){var k=a.getBindingHandler(b);if(k&&k.preprocess&&!(e=k.preprocess(e,b,l)))return;if(k=h[b])f=e,0<=a.a.A(c,f)?f=!1:(k=f.match(d),f=null===k?!1:k[1]?"Object("+k[1]+")"+k[2]:f),k=f;k&&q.push("'"+("string"==typeof h[b]?h[b]:b)+"':function(_z){"+f+"=_z}")}g&&(e="function(){return "+e+" }");p.push("'"+b+"':"+e)}f=f||{};var p=[],q=[],g=f.valueAccessors,x=f.bindingParams,B="string"===typeof e?b(e):e;a.a.D(B,function(a){l(a.key||a.unknown,
a.value)});q.length&&l("_ko_property_writers","{"+q.join(",")+" }");return p.join(",")},Id:function(a,b){for(var c=0;c<a.length;c++)if(a[c].key==b)return!0;return!1},eb:function(b,c,d,e,f){if(b&&a.O(b))!a.Za(b)||f&&b.v()===e||b(e);else if((b=c.get("_ko_property_writers"))&&b[d])b[d](e)}}}();a.b("expressionRewriting",a.m);a.b("expressionRewriting.bindingRewriteValidators",a.m.Ra);a.b("expressionRewriting.parseObjectLiteral",a.m.ac);a.b("expressionRewriting.preProcessBindings",a.m.vb);a.b("expressionRewriting._twoWayBindings",
a.m.wa);a.b("jsonExpressionRewriting",a.m);a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson",a.m.vb);(function(){function b(a){return 8==a.nodeType&&g.test(f?a.text:a.nodeValue)}function c(a){return 8==a.nodeType&&h.test(f?a.text:a.nodeValue)}function d(d,e){for(var f=d,h=1,g=[];f=f.nextSibling;){if(c(f)&&(a.a.g.set(f,k,!0),h--,0===h))return g;g.push(f);b(f)&&h++}if(!e)throw Error("Cannot find closing comment tag to match: "+d.nodeValue);return null}function e(a,b){var c=d(a,b);return c?
0<c.length?c[c.length-1].nextSibling:a.nextSibling:null}var f=w&&"\x3c!--test--\x3e"===w.createComment("test").text,g=f?/^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/:/^\s*ko(?:\s+([\s\S]+))?\s*$/,h=f?/^\x3c!--\s*\/ko\s*--\x3e$/:/^\s*\/ko\s*$/,m={ul:!0,ol:!0},k="__ko_matchedEndComment__";a.h={ea:{},childNodes:function(a){return b(a)?d(a):a.childNodes},Ea:function(c){if(b(c)){c=a.h.childNodes(c);for(var d=0,e=c.length;d<e;d++)a.removeNode(c[d])}else a.a.Tb(c)},va:function(c,d){if(b(c)){a.h.Ea(c);for(var e=
c.nextSibling,f=0,k=d.length;f<k;f++)e.parentNode.insertBefore(d[f],e)}else a.a.va(c,d)},Vc:function(a,c){var d;b(a)?(d=a.nextSibling,a=a.parentNode):d=a.firstChild;d?c!==d&&a.insertBefore(c,d):a.appendChild(c)},Wb:function(c,d,e){e?(e=e.nextSibling,b(c)&&(c=c.parentNode),e?d!==e&&c.insertBefore(d,e):c.appendChild(d)):a.h.Vc(c,d)},firstChild:function(a){if(b(a))return!a.nextSibling||c(a.nextSibling)?null:a.nextSibling;if(a.firstChild&&c(a.firstChild))throw Error("Found invalid end comment, as the first child of "+
a);return a.firstChild},nextSibling:function(d){b(d)&&(d=e(d));if(d.nextSibling&&c(d.nextSibling)){var f=d.nextSibling;if(c(f)&&!a.a.g.get(f,k))throw Error("Found end comment without a matching opening comment, as child of "+d);return null}return d.nextSibling},Cd:b,Vd:function(a){return(a=(f?a.text:a.nodeValue).match(g))?a[1]:null},Sc:function(d){if(m[a.a.R(d)]){var f=d.firstChild;if(f){do if(1===f.nodeType){var k;k=f.firstChild;var h=null;if(k){do if(h)h.push(k);else if(b(k)){var g=e(k,!0);g?k=
g:h=[k]}else c(k)&&(h=[k]);while(k=k.nextSibling)}if(k=h)for(h=f.nextSibling,g=0;g<k.length;g++)h?d.insertBefore(k[g],h):d.appendChild(k[g])}while(f=f.nextSibling)}}}}})();a.b("virtualElements",a.h);a.b("virtualElements.allowedBindings",a.h.ea);a.b("virtualElements.emptyNode",a.h.Ea);a.b("virtualElements.insertAfter",a.h.Wb);a.b("virtualElements.prepend",a.h.Vc);a.b("virtualElements.setDomNodeChildren",a.h.va);(function(){a.ga=function(){this.nd={}};a.a.extend(a.ga.prototype,{nodeHasBindings:function(b){switch(b.nodeType){case 1:return null!=
b.getAttribute("data-bind")||a.j.getComponentNameForNode(b);case 8:return a.h.Cd(b);default:return!1}},getBindings:function(b,c){var d=this.getBindingsString(b,c),d=d?this.parseBindingsString(d,c,b):null;return a.j.tc(d,b,c,!1)},getBindingAccessors:function(b,c){var d=this.getBindingsString(b,c),d=d?this.parseBindingsString(d,c,b,{valueAccessors:!0}):null;return a.j.tc(d,b,c,!0)},getBindingsString:function(b){switch(b.nodeType){case 1:return b.getAttribute("data-bind");case 8:return a.h.Vd(b);default:return null}},
parseBindingsString:function(b,c,d,e){try{var f=this.nd,g=b+(e&&e.valueAccessors||""),h;if(!(h=f[g])){var m,k="with($context){with($data||{}){return{"+a.m.vb(b,e)+"}}}";m=new Function("$context","$element",k);h=f[g]=m}return h(c,d)}catch(l){throw l.message="Unable to parse bindings.\nBindings value: "+b+"\nMessage: "+l.message,l;}}});a.ga.instance=new a.ga})();a.b("bindingProvider",a.ga);(function(){function b(b){var c=(b=a.a.g.get(b,z))&&b.N;c&&(b.N=null,c.Tc())}function c(c,d,e){this.node=c;this.yc=
d;this.kb=[];this.H=!1;d.N||a.a.K.za(c,b);e&&e.N&&(e.N.kb.push(c),this.Kb=e)}function d(a){return function(){return a}}function e(a){return a()}function f(b){return a.a.Ga(a.u.G(b),function(a,c){return function(){return b()[c]}})}function g(b,c,e){return"function"===typeof b?f(b.bind(null,c,e)):a.a.Ga(b,d)}function h(a,b){return f(this.getBindings.bind(this,a,b))}function m(b,c){var d=a.h.firstChild(c);if(d){var e,f=a.ga.instance,l=f.preprocessNode;if(l){for(;e=d;)d=a.h.nextSibling(e),l.call(f,e);
d=a.h.firstChild(c)}for(;e=d;)d=a.h.nextSibling(e),k(b,e)}a.i.ma(c,a.i.H)}function k(b,c){var d=b,e=1===c.nodeType;e&&a.h.Sc(c);if(e||a.ga.instance.nodeHasBindings(c))d=p(c,null,b).bindingContextForDescendants;d&&!u[a.a.R(c)]&&m(d,c)}function l(b){var c=[],d={},e=[];a.a.P(b,function ca(f){if(!d[f]){var k=a.getBindingHandler(f);k&&(k.after&&(e.push(f),a.a.D(k.after,function(c){if(b[c]){if(-1!==a.a.A(e,c))throw Error("Cannot combine the following bindings, because they have a cyclic dependency: "+e.join(", "));
ca(c)}}),e.length--),c.push({key:f,Mc:k}));d[f]=!0}});return c}function p(b,c,d){var f=a.a.g.Ub(b,z,{}),k=f.hd;if(!c){if(k)throw Error("You cannot apply bindings multiple times to the same element.");f.hd=!0}k||(f.context=d);f.Zb||(f.Zb={});var g;if(c&&"function"!==typeof c)g=c;else{var p=a.ga.instance,q=p.getBindingAccessors||h,m=a.$(function(){if(g=c?c(d,b):q.call(p,b,d)){if(d[t])d[t]();if(d[B])d[B]()}return g},null,{l:b});g&&m.ja()||(m=null)}var x=d,u;if(g){var J=function(){return a.a.Ga(m?m():
g,e)},r=m?function(a){return function(){return e(m()[a])}}:function(a){return g[a]};J.get=function(a){return g[a]&&e(r(a))};J.has=function(a){return a in g};a.i.H in g&&a.i.subscribe(b,a.i.H,function(){var c=(0,g[a.i.H])();if(c){var d=a.h.childNodes(b);d.length&&c(d,a.Ec(d[0]))}});a.i.pa in g&&(x=a.i.Cb(b,d),a.i.subscribe(b,a.i.pa,function(){var c=(0,g[a.i.pa])();c&&a.h.firstChild(b)&&c(b)}));f=l(g);a.a.D(f,function(c){var d=c.Mc.init,e=c.Mc.update,f=c.key;if(8===b.nodeType&&!a.h.ea[f])throw Error("The binding '"+
f+"' cannot be used with virtual elements");try{"function"==typeof d&&a.u.G(function(){var a=d(b,r(f),J,x.$data,x);if(a&&a.controlsDescendantBindings){if(u!==n)throw Error("Multiple bindings ("+u+" and "+f+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");u=f}}),"function"==typeof e&&a.$(function(){e(b,r(f),J,x.$data,x)},null,{l:b})}catch(k){throw k.message='Unable to process binding "'+f+": "+g[f]+'"\nMessage: '+k.message,
k;}})}f=u===n;return{shouldBindDescendants:f,bindingContextForDescendants:f&&x}}function q(b,c){return b&&b instanceof a.fa?b:new a.fa(b,n,n,c)}var t=a.a.Da("_subscribable"),x=a.a.Da("_ancestorBindingInfo"),B=a.a.Da("_dataDependency");a.c={};var u={script:!0,textarea:!0,template:!0};a.getBindingHandler=function(b){return a.c[b]};var J={};a.fa=function(b,c,d,e,f){function k(){var b=p?h():h,f=a.a.f(b);c?(a.a.extend(l,c),x in c&&(l[x]=c[x])):(l.$parents=[],l.$root=f,l.ko=a);l[t]=q;g?f=l.$data:(l.$rawData=
b,l.$data=f);d&&(l[d]=f);e&&e(l,c,f);if(c&&c[t]&&!a.S.o().Vb(c[t]))c[t]();m&&(l[B]=m);return l.$data}var l=this,g=b===J,h=g?n:b,p="function"==typeof h&&!a.O(h),q,m=f&&f.dataDependency;f&&f.exportDependencies?k():(q=a.xb(k),q.v(),q.ja()?q.equalityComparer=null:l[t]=n)};a.fa.prototype.createChildContext=function(b,c,d,e){!e&&c&&"object"==typeof c&&(e=c,c=e.as,d=e.extend);if(c&&e&&e.noChildContext){var f="function"==typeof b&&!a.O(b);return new a.fa(J,this,null,function(a){d&&d(a);a[c]=f?b():b},e)}return new a.fa(b,
this,c,function(a,b){a.$parentContext=b;a.$parent=b.$data;a.$parents=(b.$parents||[]).slice(0);a.$parents.unshift(a.$parent);d&&d(a)},e)};a.fa.prototype.extend=function(b,c){return new a.fa(J,this,null,function(c){a.a.extend(c,"function"==typeof b?b(c):b)},c)};var z=a.a.g.Z();c.prototype.Tc=function(){this.Kb&&this.Kb.N&&this.Kb.N.sd(this.node)};c.prototype.sd=function(b){a.a.Pa(this.kb,b);!this.kb.length&&this.H&&this.Cc()};c.prototype.Cc=function(){this.H=!0;this.yc.N&&!this.kb.length&&(this.yc.N=
null,a.a.K.yb(this.node,b),a.i.ma(this.node,a.i.pa),this.Tc())};a.i={H:"childrenComplete",pa:"descendantsComplete",subscribe:function(b,c,d,e,f){var k=a.a.g.Ub(b,z,{});k.Fa||(k.Fa=new a.T);f&&f.notifyImmediately&&k.Zb[c]&&a.u.G(d,e,[b]);return k.Fa.subscribe(d,e,c)},ma:function(b,c){var d=a.a.g.get(b,z);if(d&&(d.Zb[c]=!0,d.Fa&&d.Fa.notifySubscribers(b,c),c==a.i.H))if(d.N)d.N.Cc();else if(d.N===n&&d.Fa&&d.Fa.Wa(a.i.pa))throw Error("descendantsComplete event not supported for bindings on this node");
},Cb:function(b,d){var e=a.a.g.Ub(b,z,{});e.N||(e.N=new c(b,e,d[x]));return d[x]==e?d:d.extend(function(a){a[x]=e})}};a.Td=function(b){return(b=a.a.g.get(b,z))&&b.context};a.ib=function(b,c,d){1===b.nodeType&&a.h.Sc(b);return p(b,c,q(d))};a.ld=function(b,c,d){d=q(d);return a.ib(b,g(c,d,b),d)};a.Oa=function(a,b){1!==b.nodeType&&8!==b.nodeType||m(q(a),b)};a.vc=function(a,b,c){!v&&A.jQuery&&(v=A.jQuery);if(2>arguments.length){if(b=w.body,!b)throw Error("ko.applyBindings: could not find document.body; has the document been loaded?");
}else if(!b||1!==b.nodeType&&8!==b.nodeType)throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");k(q(a,c),b)};a.Dc=function(b){return!b||1!==b.nodeType&&8!==b.nodeType?n:a.Td(b)};a.Ec=function(b){return(b=a.Dc(b))?b.$data:n};a.b("bindingHandlers",a.c);a.b("bindingEvent",a.i);a.b("bindingEvent.subscribe",a.i.subscribe);a.b("bindingEvent.startPossiblyAsyncContentBinding",a.i.Cb);a.b("applyBindings",a.vc);a.b("applyBindingsToDescendants",a.Oa);
a.b("applyBindingAccessorsToNode",a.ib);a.b("applyBindingsToNode",a.ld);a.b("contextFor",a.Dc);a.b("dataFor",a.Ec)})();(function(b){function c(c,e){var k=Object.prototype.hasOwnProperty.call(f,c)?f[c]:b,l;k?k.subscribe(e):(k=f[c]=new a.T,k.subscribe(e),d(c,function(b,d){var e=!(!d||!d.synchronous);g[c]={definition:b,Gd:e};delete f[c];l||e?k.notifySubscribers(b):a.na.zb(function(){k.notifySubscribers(b)})}),l=!0)}function d(a,b){e("getConfig",[a],function(c){c?e("loadComponent",[a,c],function(a){b(a,
c)}):b(null,null)})}function e(c,d,f,l){l||(l=a.j.loaders.slice(0));var g=l.shift();if(g){var q=g[c];if(q){var t=!1;if(q.apply(g,d.concat(function(a){t?f(null):null!==a?f(a):e(c,d,f,l)}))!==b&&(t=!0,!g.suppressLoaderExceptions))throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");}else e(c,d,f,l)}else f(null)}var f={},g={};a.j={get:function(d,e){var f=Object.prototype.hasOwnProperty.call(g,d)?g[d]:b;f?f.Gd?a.u.G(function(){e(f.definition)}):
a.na.zb(function(){e(f.definition)}):c(d,e)},Bc:function(a){delete g[a]},oc:e};a.j.loaders=[];a.b("components",a.j);a.b("components.get",a.j.get);a.b("components.clearCachedDefinition",a.j.Bc)})();(function(){function b(b,c,d,e){function g(){0===--B&&e(h)}var h={},B=2,u=d.template;d=d.viewModel;u?f(c,u,function(c){a.j.oc("loadTemplate",[b,c],function(a){h.template=a;g()})}):g();d?f(c,d,function(c){a.j.oc("loadViewModel",[b,c],function(a){h[m]=a;g()})}):g()}function c(a,b,d){if("function"===typeof b)d(function(a){return new b(a)});
else if("function"===typeof b[m])d(b[m]);else if("instance"in b){var e=b.instance;d(function(){return e})}else"viewModel"in b?c(a,b.viewModel,d):a("Unknown viewModel value: "+b)}function d(b){switch(a.a.R(b)){case "script":return a.a.ua(b.text);case "textarea":return a.a.ua(b.value);case "template":if(e(b.content))return a.a.Ca(b.content.childNodes)}return a.a.Ca(b.childNodes)}function e(a){return A.DocumentFragment?a instanceof DocumentFragment:a&&11===a.nodeType}function f(a,b,c){"string"===typeof b.require?
T||A.require?(T||A.require)([b.require],function(a){a&&"object"===typeof a&&a.Xd&&a["default"]&&(a=a["default"]);c(a)}):a("Uses require, but no AMD loader is present"):c(b)}function g(a){return function(b){throw Error("Component '"+a+"': "+b);}}var h={};a.j.register=function(b,c){if(!c)throw Error("Invalid configuration for "+b);if(a.j.tb(b))throw Error("Component "+b+" is already registered");h[b]=c};a.j.tb=function(a){return Object.prototype.hasOwnProperty.call(h,a)};a.j.unregister=function(b){delete h[b];
a.j.Bc(b)};a.j.Fc={getConfig:function(b,c){c(a.j.tb(b)?h[b]:null)},loadComponent:function(a,c,d){var e=g(a);f(e,c,function(c){b(a,e,c,d)})},loadTemplate:function(b,c,f){b=g(b);if("string"===typeof c)f(a.a.ua(c));else if(c instanceof Array)f(c);else if(e(c))f(a.a.la(c.childNodes));else if(c.element)if(c=c.element,A.HTMLElement?c instanceof HTMLElement:c&&c.tagName&&1===c.nodeType)f(d(c));else if("string"===typeof c){var h=w.getElementById(c);h?f(d(h)):b("Cannot find element with ID "+c)}else b("Unknown element type: "+
c);else b("Unknown template value: "+c)},loadViewModel:function(a,b,d){c(g(a),b,d)}};var m="createViewModel";a.b("components.register",a.j.register);a.b("components.isRegistered",a.j.tb);a.b("components.unregister",a.j.unregister);a.b("components.defaultLoader",a.j.Fc);a.j.loaders.push(a.j.Fc);a.j.dd=h})();(function(){function b(b,e){var f=b.getAttribute("params");if(f){var f=c.parseBindingsString(f,e,b,{valueAccessors:!0,bindingParams:!0}),f=a.a.Ga(f,function(c){return a.o(c,null,{l:b})}),g=a.a.Ga(f,
function(c){var e=c.v();return c.ja()?a.o({read:function(){return a.a.f(c())},write:a.Za(e)&&function(a){c()(a)},l:b}):e});Object.prototype.hasOwnProperty.call(g,"$raw")||(g.$raw=f);return g}return{$raw:{}}}a.j.getComponentNameForNode=function(b){var c=a.a.R(b);if(a.j.tb(c)&&(-1!=c.indexOf("-")||"[object HTMLUnknownElement]"==""+b||8>=a.a.W&&b.tagName===c))return c};a.j.tc=function(c,e,f,g){if(1===e.nodeType){var h=a.j.getComponentNameForNode(e);if(h){c=c||{};if(c.component)throw Error('Cannot use the "component" binding on a custom element matching a component');
var m={name:h,params:b(e,f)};c.component=g?function(){return m}:m}}return c};var c=new a.ga;9>a.a.W&&(a.j.register=function(a){return function(b){return a.apply(this,arguments)}}(a.j.register),w.createDocumentFragment=function(b){return function(){var c=b(),f=a.j.dd,g;for(g in f);return c}}(w.createDocumentFragment))})();(function(){function b(b,c,d){c=c.template;if(!c)throw Error("Component '"+b+"' has no template");b=a.a.Ca(c);a.h.va(d,b)}function c(a,b,c){var d=a.createViewModel;return d?d.call(a,
b,c):b}var d=0;a.c.component={init:function(e,f,g,h,m){function k(){var a=l&&l.dispose;"function"===typeof a&&a.call(l);q&&q.s();p=l=q=null}var l,p,q,t=a.a.la(a.h.childNodes(e));a.h.Ea(e);a.a.K.za(e,k);a.o(function(){var g=a.a.f(f()),h,u;"string"===typeof g?h=g:(h=a.a.f(g.name),u=a.a.f(g.params));if(!h)throw Error("No component name specified");var n=a.i.Cb(e,m),z=p=++d;a.j.get(h,function(d){if(p===z){k();if(!d)throw Error("Unknown component '"+h+"'");b(h,d,e);var f=c(d,u,{element:e,templateNodes:t});
d=n.createChildContext(f,{extend:function(a){a.$component=f;a.$componentTemplateNodes=t}});f&&f.koDescendantsComplete&&(q=a.i.subscribe(e,a.i.pa,f.koDescendantsComplete,f));l=f;a.Oa(d,e)}})},null,{l:e});return{controlsDescendantBindings:!0}}};a.h.ea.component=!0})();var V={"class":"className","for":"htmlFor"};a.c.attr={update:function(b,c){var d=a.a.f(c())||{};a.a.P(d,function(c,d){d=a.a.f(d);var g=c.indexOf(":"),g="lookupNamespaceURI"in b&&0<g&&b.lookupNamespaceURI(c.substr(0,g)),h=!1===d||null===
d||d===n;h?g?b.removeAttributeNS(g,c):b.removeAttribute(c):d=d.toString();8>=a.a.W&&c in V?(c=V[c],h?b.removeAttribute(c):b[c]=d):h||(g?b.setAttributeNS(g,c,d):b.setAttribute(c,d));"name"===c&&a.a.Yc(b,h?"":d)})}};(function(){a.c.checked={after:["value","attr"],init:function(b,c,d){function e(){var e=b.checked,f=g();if(!a.S.Ya()&&(e||!m&&!a.S.qa())){var k=a.u.G(c);if(l){var q=p?k.v():k,z=t;t=f;z!==f?e&&(a.a.Na(q,f,!0),a.a.Na(q,z,!1)):a.a.Na(q,f,e);p&&a.Za(k)&&k(q)}else h&&(f===n?f=e:e||(f=n)),a.m.eb(k,
d,"checked",f,!0)}}function f(){var d=a.a.f(c()),e=g();l?(b.checked=0<=a.a.A(d,e),t=e):b.checked=h&&e===n?!!d:g()===d}var g=a.xb(function(){if(d.has("checkedValue"))return a.a.f(d.get("checkedValue"));if(q)return d.has("value")?a.a.f(d.get("value")):b.value}),h="checkbox"==b.type,m="radio"==b.type;if(h||m){var k=c(),l=h&&a.a.f(k)instanceof Array,p=!(l&&k.push&&k.splice),q=m||l,t=l?g():n;m&&!b.name&&a.c.uniqueName.init(b,function(){return!0});a.o(e,null,{l:b});a.a.B(b,"click",e);a.o(f,null,{l:b});
k=n}}};a.m.wa.checked=!0;a.c.checkedValue={update:function(b,c){b.value=a.a.f(c())}}})();a.c["class"]={update:function(b,c){var d=a.a.Db(a.a.f(c()));a.a.Eb(b,b.__ko__cssValue,!1);b.__ko__cssValue=d;a.a.Eb(b,d,!0)}};a.c.css={update:function(b,c){var d=a.a.f(c());null!==d&&"object"==typeof d?a.a.P(d,function(c,d){d=a.a.f(d);a.a.Eb(b,c,d)}):a.c["class"].update(b,c)}};a.c.enable={update:function(b,c){var d=a.a.f(c());d&&b.disabled?b.removeAttribute("disabled"):d||b.disabled||(b.disabled=!0)}};a.c.disable=
{update:function(b,c){a.c.enable.update(b,function(){return!a.a.f(c())})}};a.c.event={init:function(b,c,d,e,f){var g=c()||{};a.a.P(g,function(g){"string"==typeof g&&a.a.B(b,g,function(b){var k,l=c()[g];if(l){try{var p=a.a.la(arguments);e=f.$data;p.unshift(e);k=l.apply(e,p)}finally{!0!==k&&(b.preventDefault?b.preventDefault():b.returnValue=!1)}!1===d.get(g+"Bubble")&&(b.cancelBubble=!0,b.stopPropagation&&b.stopPropagation())}})})}};a.c.foreach={Rc:function(b){return function(){var c=b(),d=a.a.bc(c);
if(!d||"number"==typeof d.length)return{foreach:c,templateEngine:a.ba.Ma};a.a.f(c);return{foreach:d.data,as:d.as,noChildContext:d.noChildContext,includeDestroyed:d.includeDestroyed,afterAdd:d.afterAdd,beforeRemove:d.beforeRemove,afterRender:d.afterRender,beforeMove:d.beforeMove,afterMove:d.afterMove,templateEngine:a.ba.Ma}}},init:function(b,c){return a.c.template.init(b,a.c.foreach.Rc(c))},update:function(b,c,d,e,f){return a.c.template.update(b,a.c.foreach.Rc(c),d,e,f)}};a.m.Ra.foreach=!1;a.h.ea.foreach=
!0;a.c.hasfocus={init:function(b,c,d){function e(e){b.__ko_hasfocusUpdating=!0;var f=b.ownerDocument;if("activeElement"in f){var g;try{g=f.activeElement}catch(l){g=f.body}e=g===b}f=c();a.m.eb(f,d,"hasfocus",e,!0);b.__ko_hasfocusLastValue=e;b.__ko_hasfocusUpdating=!1}var f=e.bind(null,!0),g=e.bind(null,!1);a.a.B(b,"focus",f);a.a.B(b,"focusin",f);a.a.B(b,"blur",g);a.a.B(b,"focusout",g);b.__ko_hasfocusLastValue=!1},update:function(b,c){var d=!!a.a.f(c());b.__ko_hasfocusUpdating||b.__ko_hasfocusLastValue===
d||(d?b.focus():b.blur(),!d&&b.__ko_hasfocusLastValue&&b.ownerDocument.body.focus(),a.u.G(a.a.Fb,null,[b,d?"focusin":"focusout"]))}};a.m.wa.hasfocus=!0;a.c.hasFocus=a.c.hasfocus;a.m.wa.hasFocus="hasfocus";a.c.html={init:function(){return{controlsDescendantBindings:!0}},update:function(b,c){a.a.fc(b,c())}};(function(){function b(b,d,e){a.c[b]={init:function(b,c,h,m,k){var l,p,q={},t,x,n;if(d){m=h.get("as");var u=h.get("noChildContext");n=!(m&&u);q={as:m,noChildContext:u,exportDependencies:n}}x=(t=
"render"==h.get("completeOn"))||h.has(a.i.pa);a.o(function(){var h=a.a.f(c()),m=!e!==!h,u=!p,r;if(n||m!==l){x&&(k=a.i.Cb(b,k));if(m){if(!d||n)q.dataDependency=a.S.o();r=d?k.createChildContext("function"==typeof h?h:c,q):a.S.qa()?k.extend(null,q):k}u&&a.S.qa()&&(p=a.a.Ca(a.h.childNodes(b),!0));m?(u||a.h.va(b,a.a.Ca(p)),a.Oa(r,b)):(a.h.Ea(b),t||a.i.ma(b,a.i.H));l=m}},null,{l:b});return{controlsDescendantBindings:!0}}};a.m.Ra[b]=!1;a.h.ea[b]=!0}b("if");b("ifnot",!1,!0);b("with",!0)})();a.c.let={init:function(b,
c,d,e,f){c=f.extend(c);a.Oa(c,b);return{controlsDescendantBindings:!0}}};a.h.ea.let=!0;var Q={};a.c.options={init:function(b){if("select"!==a.a.R(b))throw Error("options binding applies only to SELECT elements");for(;0<b.length;)b.remove(0);return{controlsDescendantBindings:!0}},update:function(b,c,d){function e(){return a.a.jb(b.options,function(a){return a.selected})}function f(a,b,c){var d=typeof b;return"function"==d?b(a):"string"==d?a[b]:c}function g(c,d){if(x&&l)a.i.ma(b,a.i.H);else if(t.length){var e=
0<=a.a.A(t,a.w.M(d[0]));a.a.Zc(d[0],e);x&&!e&&a.u.G(a.a.Fb,null,[b,"change"])}}var h=b.multiple,m=0!=b.length&&h?b.scrollTop:null,k=a.a.f(c()),l=d.get("valueAllowUnset")&&d.has("value"),p=d.get("optionsIncludeDestroyed");c={};var q,t=[];l||(h?t=a.a.Mb(e(),a.w.M):0<=b.selectedIndex&&t.push(a.w.M(b.options[b.selectedIndex])));k&&("undefined"==typeof k.length&&(k=[k]),q=a.a.jb(k,function(b){return p||b===n||null===b||!a.a.f(b._destroy)}),d.has("optionsCaption")&&(k=a.a.f(d.get("optionsCaption")),null!==
k&&k!==n&&q.unshift(Q)));var x=!1;c.beforeRemove=function(a){b.removeChild(a)};k=g;d.has("optionsAfterRender")&&"function"==typeof d.get("optionsAfterRender")&&(k=function(b,c){g(0,c);a.u.G(d.get("optionsAfterRender"),null,[c[0],b!==Q?b:n])});a.a.ec(b,q,function(c,e,g){g.length&&(t=!l&&g[0].selected?[a.w.M(g[0])]:[],x=!0);e=b.ownerDocument.createElement("option");c===Q?(a.a.Bb(e,d.get("optionsCaption")),a.w.cb(e,n)):(g=f(c,d.get("optionsValue"),c),a.w.cb(e,a.a.f(g)),c=f(c,d.get("optionsText"),g),
a.a.Bb(e,c));return[e]},c,k);if(!l){var B;h?B=t.length&&e().length<t.length:B=t.length&&0<=b.selectedIndex?a.w.M(b.options[b.selectedIndex])!==t[0]:t.length||0<=b.selectedIndex;B&&a.u.G(a.a.Fb,null,[b,"change"])}(l||a.S.Ya())&&a.i.ma(b,a.i.H);a.a.wd(b);m&&20<Math.abs(m-b.scrollTop)&&(b.scrollTop=m)}};a.c.options.$b=a.a.g.Z();a.c.selectedOptions={init:function(b,c,d){function e(){var e=c(),f=[];a.a.D(b.getElementsByTagName("option"),function(b){b.selected&&f.push(a.w.M(b))});a.m.eb(e,d,"selectedOptions",
f)}function f(){var d=a.a.f(c()),e=b.scrollTop;d&&"number"==typeof d.length&&a.a.D(b.getElementsByTagName("option"),function(b){var c=0<=a.a.A(d,a.w.M(b));b.selected!=c&&a.a.Zc(b,c)});b.scrollTop=e}if("select"!=a.a.R(b))throw Error("selectedOptions binding applies only to SELECT elements");var g;a.i.subscribe(b,a.i.H,function(){g?e():(a.a.B(b,"change",e),g=a.o(f,null,{l:b}))},null,{notifyImmediately:!0})},update:function(){}};a.m.wa.selectedOptions=!0;a.c.style={update:function(b,c){var d=a.a.f(c()||
{});a.a.P(d,function(c,d){d=a.a.f(d);if(null===d||d===n||!1===d)d="";if(v)v(b).css(c,d);else if(/^--/.test(c))b.style.setProperty(c,d);else{c=c.replace(/-(\w)/g,function(a,b){return b.toUpperCase()});var g=b.style[c];b.style[c]=d;d===g||b.style[c]!=g||isNaN(d)||(b.style[c]=d+"px")}})}};a.c.submit={init:function(b,c,d,e,f){if("function"!=typeof c())throw Error("The value for a submit binding must be a function");a.a.B(b,"submit",function(a){var d,e=c();try{d=e.call(f.$data,b)}finally{!0!==d&&(a.preventDefault?
a.preventDefault():a.returnValue=!1)}})}};a.c.text={init:function(){return{controlsDescendantBindings:!0}},update:function(b,c){a.a.Bb(b,c())}};a.h.ea.text=!0;(function(){if(A&&A.navigator){var b=function(a){if(a)return parseFloat(a[1])},c=A.navigator.userAgent,d,e,f,g,h;(d=A.opera&&A.opera.version&&parseInt(A.opera.version()))||(h=b(c.match(/Edge\/([^ ]+)$/)))||b(c.match(/Chrome\/([^ ]+)/))||(e=b(c.match(/Version\/([^ ]+) Safari/)))||(f=b(c.match(/Firefox\/([^ ]+)/)))||(g=a.a.W||b(c.match(/MSIE ([^ ]+)/)))||
(g=b(c.match(/rv:([^ )]+)/)))}if(8<=g&&10>g)var m=a.a.g.Z(),k=a.a.g.Z(),l=function(b){var c=this.activeElement;(c=c&&a.a.g.get(c,k))&&c(b)},p=function(b,c){var d=b.ownerDocument;a.a.g.get(d,m)||(a.a.g.set(d,m,!0),a.a.B(d,"selectionchange",l));a.a.g.set(b,k,c)};a.c.textInput={init:function(b,c,k){function l(c,d){a.a.B(b,c,d)}function m(){var d=a.a.f(c());if(null===d||d===n)d="";L!==n&&d===L?a.a.setTimeout(m,4):b.value!==d&&(y=!0,b.value=d,y=!1,v=b.value)}function r(){w||(L=b.value,w=a.a.setTimeout(z,
4))}function z(){clearTimeout(w);L=w=n;var d=b.value;v!==d&&(v=d,a.m.eb(c(),k,"textInput",d))}var v=b.value,w,L,A=9==a.a.W?r:z,y=!1;g&&l("keypress",z);11>g&&l("propertychange",function(a){y||"value"!==a.propertyName||A(a)});8==g&&(l("keyup",z),l("keydown",z));p&&(p(b,A),l("dragend",r));(!g||9<=g)&&l("input",A);5>e&&"textarea"===a.a.R(b)?(l("keydown",r),l("paste",r),l("cut",r)):11>d?l("keydown",r):4>f?(l("DOMAutoComplete",z),l("dragdrop",z),l("drop",z)):h&&"number"===b.type&&l("keydown",r);l("change",
z);l("blur",z);a.o(m,null,{l:b})}};a.m.wa.textInput=!0;a.c.textinput={preprocess:function(a,b,c){c("textInput",a)}}})();a.c.uniqueName={init:function(b,c){if(c()){var d="ko_unique_"+ ++a.c.uniqueName.rd;a.a.Yc(b,d)}}};a.c.uniqueName.rd=0;a.c.using={init:function(b,c,d,e,f){var g;d.has("as")&&(g={as:d.get("as"),noChildContext:d.get("noChildContext")});c=f.createChildContext(c,g);a.Oa(c,b);return{controlsDescendantBindings:!0}}};a.h.ea.using=!0;a.c.value={init:function(b,c,d){var e=a.a.R(b),f="input"==
e;if(!f||"checkbox"!=b.type&&"radio"!=b.type){var g=[],h=d.get("valueUpdate"),m=!1,k=null;h&&("string"==typeof h?g=[h]:g=a.a.wc(h),a.a.Pa(g,"change"));var l=function(){k=null;m=!1;var e=c(),f=a.w.M(b);a.m.eb(e,d,"value",f)};!a.a.W||!f||"text"!=b.type||"off"==b.autocomplete||b.form&&"off"==b.form.autocomplete||-1!=a.a.A(g,"propertychange")||(a.a.B(b,"propertychange",function(){m=!0}),a.a.B(b,"focus",function(){m=!1}),a.a.B(b,"blur",function(){m&&l()}));a.a.D(g,function(c){var d=l;a.a.Ud(c,"after")&&
(d=function(){k=a.w.M(b);a.a.setTimeout(l,0)},c=c.substring(5));a.a.B(b,c,d)});var p;p=f&&"file"==b.type?function(){var d=a.a.f(c());null===d||d===n||""===d?b.value="":a.u.G(l)}:function(){var f=a.a.f(c()),g=a.w.M(b);if(null!==k&&f===k)a.a.setTimeout(p,0);else if(f!==g||g===n)"select"===e?(g=d.get("valueAllowUnset"),a.w.cb(b,f,g),g||f===a.w.M(b)||a.u.G(l)):a.w.cb(b,f)};if("select"===e){var q;a.i.subscribe(b,a.i.H,function(){q?d.get("valueAllowUnset")?p():l():(a.a.B(b,"change",l),q=a.o(p,null,{l:b}))},
null,{notifyImmediately:!0})}else a.a.B(b,"change",l),a.o(p,null,{l:b})}else a.ib(b,{checkedValue:c})},update:function(){}};a.m.wa.value=!0;a.c.visible={update:function(b,c){var d=a.a.f(c()),e="none"!=b.style.display;d&&!e?b.style.display="":!d&&e&&(b.style.display="none")}};a.c.hidden={update:function(b,c){a.c.visible.update(b,function(){return!a.a.f(c())})}};(function(b){a.c[b]={init:function(c,d,e,f,g){return a.c.event.init.call(this,c,function(){var a={};a[b]=d();return a},e,f,g)}}})("click");
a.ca=function(){};a.ca.prototype.renderTemplateSource=function(){throw Error("Override renderTemplateSource");};a.ca.prototype.createJavaScriptEvaluatorBlock=function(){throw Error("Override createJavaScriptEvaluatorBlock");};a.ca.prototype.makeTemplateSource=function(b,c){if("string"==typeof b){c=c||w;var d=c.getElementById(b);if(!d)throw Error("Cannot find template with ID "+b);return new a.C.F(d)}if(1==b.nodeType||8==b.nodeType)return new a.C.ia(b);throw Error("Unknown template type: "+b);};a.ca.prototype.renderTemplate=
function(a,c,d,e){a=this.makeTemplateSource(a,e);return this.renderTemplateSource(a,c,d,e)};a.ca.prototype.isTemplateRewritten=function(a,c){return!1===this.allowTemplateRewriting?!0:this.makeTemplateSource(a,c).data("isRewritten")};a.ca.prototype.rewriteTemplate=function(a,c,d){a=this.makeTemplateSource(a,d);c=c(a.text());a.text(c);a.data("isRewritten",!0)};a.b("templateEngine",a.ca);a.kc=function(){function b(b,c,d,h){b=a.m.ac(b);for(var m=a.m.Ra,k=0;k<b.length;k++){var l=b[k].key;if(Object.prototype.hasOwnProperty.call(m,
l)){var p=m[l];if("function"===typeof p){if(l=p(b[k].value))throw Error(l);}else if(!p)throw Error("This template engine does not support the '"+l+"' binding within its templates");}}d="ko.__tr_ambtns(function($context,$element){return(function(){return{ "+a.m.vb(b,{valueAccessors:!0})+" } })()},'"+d.toLowerCase()+"')";return h.createJavaScriptEvaluatorBlock(d)+c}var c=/(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,
d=/\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;return{xd:function(b,c,d){c.isTemplateRewritten(b,d)||c.rewriteTemplate(b,function(b){return a.kc.Ld(b,c)},d)},Ld:function(a,f){return a.replace(c,function(a,c,d,e,l){return b(l,c,d,f)}).replace(d,function(a,c){return b(c,"\x3c!-- ko --\x3e","#comment",f)})},md:function(b,c){return a.aa.Xb(function(d,h){var m=d.nextSibling;m&&m.nodeName.toLowerCase()===c&&a.ib(m,b,h)})}}}();a.b("__tr_ambtns",a.kc.md);(function(){a.C={};a.C.F=function(b){if(this.F=b){var c=
a.a.R(b);this.ab="script"===c?1:"textarea"===c?2:"template"==c&&b.content&&11===b.content.nodeType?3:4}};a.C.F.prototype.text=function(){var b=1===this.ab?"text":2===this.ab?"value":"innerHTML";if(0==arguments.length)return this.F[b];var c=arguments[0];"innerHTML"===b?a.a.fc(this.F,c):this.F[b]=c};var b=a.a.g.Z()+"_";a.C.F.prototype.data=function(c){if(1===arguments.length)return a.a.g.get(this.F,b+c);a.a.g.set(this.F,b+c,arguments[1])};var c=a.a.g.Z();a.C.F.prototype.nodes=function(){var b=this.F;
if(0==arguments.length){var e=a.a.g.get(b,c)||{},f=e.lb||(3===this.ab?b.content:4===this.ab?b:n);if(!f||e.jd){var g=this.text();g&&g!==e.bb&&(f=a.a.Md(g,b.ownerDocument),a.a.g.set(b,c,{lb:f,bb:g,jd:!0}))}return f}e=arguments[0];this.ab!==n&&this.text("");a.a.g.set(b,c,{lb:e})};a.C.ia=function(a){this.F=a};a.C.ia.prototype=new a.C.F;a.C.ia.prototype.constructor=a.C.ia;a.C.ia.prototype.text=function(){if(0==arguments.length){var b=a.a.g.get(this.F,c)||{};b.bb===n&&b.lb&&(b.bb=b.lb.innerHTML);return b.bb}a.a.g.set(this.F,
c,{bb:arguments[0]})};a.b("templateSources",a.C);a.b("templateSources.domElement",a.C.F);a.b("templateSources.anonymousTemplate",a.C.ia)})();(function(){function b(b,c,d){var e;for(c=a.h.nextSibling(c);b&&(e=b)!==c;)b=a.h.nextSibling(e),d(e,b)}function c(c,d){if(c.length){var e=c[0],f=c[c.length-1],g=e.parentNode,h=a.ga.instance,m=h.preprocessNode;if(m){b(e,f,function(a,b){var c=a.previousSibling,d=m.call(h,a);d&&(a===e&&(e=d[0]||b),a===f&&(f=d[d.length-1]||c))});c.length=0;if(!e)return;e===f?c.push(e):
(c.push(e,f),a.a.Ua(c,g))}b(e,f,function(b){1!==b.nodeType&&8!==b.nodeType||a.vc(d,b)});b(e,f,function(b){1!==b.nodeType&&8!==b.nodeType||a.aa.cd(b,[d])});a.a.Ua(c,g)}}function d(a){return a.nodeType?a:0<a.length?a[0]:null}function e(b,e,f,h,m){m=m||{};var n=(b&&d(b)||f||{}).ownerDocument,B=m.templateEngine||g;a.kc.xd(f,B,n);f=B.renderTemplate(f,h,m,n);if("number"!=typeof f.length||0<f.length&&"number"!=typeof f[0].nodeType)throw Error("Template engine must return an array of DOM nodes");n=!1;switch(e){case "replaceChildren":a.h.va(b,
f);n=!0;break;case "replaceNode":a.a.Xc(b,f);n=!0;break;case "ignoreTargetNode":break;default:throw Error("Unknown renderMode: "+e);}n&&(c(f,h),m.afterRender&&a.u.G(m.afterRender,null,[f,h[m.as||"$data"]]),"replaceChildren"==e&&a.i.ma(b,a.i.H));return f}function f(b,c,d){return a.O(b)?b():"function"===typeof b?b(c,d):b}var g;a.gc=function(b){if(b!=n&&!(b instanceof a.ca))throw Error("templateEngine must inherit from ko.templateEngine");g=b};a.dc=function(b,c,h,m,t){h=h||{};if((h.templateEngine||g)==
n)throw Error("Set a template engine before calling renderTemplate");t=t||"replaceChildren";if(m){var x=d(m);return a.$(function(){var g=c&&c instanceof a.fa?c:new a.fa(c,null,null,null,{exportDependencies:!0}),n=f(b,g.$data,g),g=e(m,t,n,g,h);"replaceNode"==t&&(m=g,x=d(m))},null,{Sa:function(){return!x||!a.a.Sb(x)},l:x&&"replaceNode"==t?x.parentNode:x})}return a.aa.Xb(function(d){a.dc(b,c,h,d,"replaceNode")})};a.Qd=function(b,d,g,h,m){function x(b,c){a.u.G(a.a.ec,null,[h,b,u,g,r,c]);a.i.ma(h,a.i.H)}
function r(a,b){c(b,v);g.afterRender&&g.afterRender(b,a);v=null}function u(a,c){v=m.createChildContext(a,{as:z,noChildContext:g.noChildContext,extend:function(a){a.$index=c;z&&(a[z+"Index"]=c)}});var d=f(b,a,v);return e(h,"ignoreTargetNode",d,v,g)}var v,z=g.as,w=!1===g.includeDestroyed||a.options.foreachHidesDestroyed&&!g.includeDestroyed;if(w||g.beforeRemove||!a.Pc(d))return a.$(function(){var b=a.a.f(d)||[];"undefined"==typeof b.length&&(b=[b]);w&&(b=a.a.jb(b,function(b){return b===n||null===b||
!a.a.f(b._destroy)}));x(b)},null,{l:h});x(d.v());var A=d.subscribe(function(a){x(d(),a)},null,"arrayChange");A.l(h);return A};var h=a.a.g.Z(),m=a.a.g.Z();a.c.template={init:function(b,c){var d=a.a.f(c());if("string"==typeof d||"name"in d)a.h.Ea(b);else if("nodes"in d){d=d.nodes||[];if(a.O(d))throw Error('The "nodes" option must be a plain, non-observable array.');var e=d[0]&&d[0].parentNode;e&&a.a.g.get(e,m)||(e=a.a.Yb(d),a.a.g.set(e,m,!0));(new a.C.ia(b)).nodes(e)}else if(d=a.h.childNodes(b),0<d.length)e=
a.a.Yb(d),(new a.C.ia(b)).nodes(e);else throw Error("Anonymous template defined, but no template content was provided");return{controlsDescendantBindings:!0}},update:function(b,c,d,e,f){var g=c();c=a.a.f(g);d=!0;e=null;"string"==typeof c?c={}:(g="name"in c?c.name:b,"if"in c&&(d=a.a.f(c["if"])),d&&"ifnot"in c&&(d=!a.a.f(c.ifnot)),d&&!g&&(d=!1));"foreach"in c?e=a.Qd(g,d&&c.foreach||[],c,b,f):d?(d=f,"data"in c&&(d=f.createChildContext(c.data,{as:c.as,noChildContext:c.noChildContext,exportDependencies:!0})),
e=a.dc(g,d,c,b)):a.h.Ea(b);f=e;(c=a.a.g.get(b,h))&&"function"==typeof c.s&&c.s();a.a.g.set(b,h,!f||f.ja&&!f.ja()?n:f)}};a.m.Ra.template=function(b){b=a.m.ac(b);return 1==b.length&&b[0].unknown||a.m.Id(b,"name")?null:"This template engine does not support anonymous templates nested within its templates"};a.h.ea.template=!0})();a.b("setTemplateEngine",a.gc);a.b("renderTemplate",a.dc);a.a.Kc=function(a,c,d){if(a.length&&c.length){var e,f,g,h,m;for(e=f=0;(!d||e<d)&&(h=a[f]);++f){for(g=0;m=c[g];++g)if(h.value===
m.value){h.moved=m.index;m.moved=h.index;c.splice(g,1);e=g=0;break}e+=g}}};a.a.Pb=function(){function b(b,d,e,f,g){var h=Math.min,m=Math.max,k=[],l,p=b.length,q,n=d.length,r=n-p||1,v=p+n+1,u,w,z;for(l=0;l<=p;l++)for(w=u,k.push(u=[]),z=h(n,l+r),q=m(0,l-1);q<=z;q++)u[q]=q?l?b[l-1]===d[q-1]?w[q-1]:h(w[q]||v,u[q-1]||v)+1:q+1:l+1;h=[];m=[];r=[];l=p;for(q=n;l||q;)n=k[l][q]-1,q&&n===k[l][q-1]?m.push(h[h.length]={status:e,value:d[--q],index:q}):l&&n===k[l-1][q]?r.push(h[h.length]={status:f,value:b[--l],index:l}):
(--q,--l,g.sparse||h.push({status:"retained",value:d[q]}));a.a.Kc(r,m,!g.dontLimitMoves&&10*p);return h.reverse()}return function(a,d,e){e="boolean"===typeof e?{dontLimitMoves:e}:e||{};a=a||[];d=d||[];return a.length<d.length?b(a,d,"added","deleted",e):b(d,a,"deleted","added",e)}}();a.b("utils.compareArrays",a.a.Pb);(function(){function b(b,c,d,h,m){var k=[],l=a.$(function(){var l=c(d,m,a.a.Ua(k,b))||[];0<k.length&&(a.a.Xc(k,l),h&&a.u.G(h,null,[d,l,m]));k.length=0;a.a.Nb(k,l)},null,{l:b,Sa:function(){return!a.a.kd(k)}});
return{Y:k,$:l.ja()?l:n}}var c=a.a.g.Z(),d=a.a.g.Z();a.a.ec=function(e,f,g,h,m,k){function l(b){y={Aa:b,pb:a.ta(w++)};v.push(y);r||F.push(y)}function p(b){y=t[b];w!==y.pb.v()&&D.push(y);y.pb(w++);a.a.Ua(y.Y,e);v.push(y)}function q(b,c){if(b)for(var d=0,e=c.length;d<e;d++)a.a.D(c[d].Y,function(a){b(a,d,c[d].Aa)})}f=f||[];"undefined"==typeof f.length&&(f=[f]);h=h||{};var t=a.a.g.get(e,c),r=!t,v=[],u=0,w=0,z=[],A=[],C=[],D=[],F=[],y,I=0;if(r)a.a.D(f,l);else{if(!k||t&&t._countWaitingForRemove){var E=
a.a.Mb(t,function(a){return a.Aa});k=a.a.Pb(E,f,{dontLimitMoves:h.dontLimitMoves,sparse:!0})}for(var E=0,G,H,K;G=k[E];E++)switch(H=G.moved,K=G.index,G.status){case "deleted":for(;u<K;)p(u++);H===n&&(y=t[u],y.$&&(y.$.s(),y.$=n),a.a.Ua(y.Y,e).length&&(h.beforeRemove&&(v.push(y),I++,y.Aa===d?y=null:C.push(y)),y&&z.push.apply(z,y.Y)));u++;break;case "added":for(;w<K;)p(u++);H!==n?(A.push(v.length),p(H)):l(G.value)}for(;w<f.length;)p(u++);v._countWaitingForRemove=I}a.a.g.set(e,c,v);q(h.beforeMove,D);a.a.D(z,
h.beforeRemove?a.oa:a.removeNode);var M,O,P;try{P=e.ownerDocument.activeElement}catch(N){}if(A.length)for(;(E=A.shift())!=n;){y=v[E];for(M=n;E;)if((O=v[--E].Y)&&O.length){M=O[O.length-1];break}for(f=0;u=y.Y[f];M=u,f++)a.h.Wb(e,u,M)}for(E=0;y=v[E];E++){y.Y||a.a.extend(y,b(e,g,y.Aa,m,y.pb));for(f=0;u=y.Y[f];M=u,f++)a.h.Wb(e,u,M);!y.Ed&&m&&(m(y.Aa,y.Y,y.pb),y.Ed=!0,M=y.Y[y.Y.length-1])}P&&e.ownerDocument.activeElement!=P&&P.focus();q(h.beforeRemove,C);for(E=0;E<C.length;++E)C[E].Aa=d;q(h.afterMove,D);
q(h.afterAdd,F)}})();a.b("utils.setDomNodeChildrenFromArrayMapping",a.a.ec);a.ba=function(){this.allowTemplateRewriting=!1};a.ba.prototype=new a.ca;a.ba.prototype.constructor=a.ba;a.ba.prototype.renderTemplateSource=function(b,c,d,e){if(c=(9>a.a.W?0:b.nodes)?b.nodes():null)return a.a.la(c.cloneNode(!0).childNodes);b=b.text();return a.a.ua(b,e)};a.ba.Ma=new a.ba;a.gc(a.ba.Ma);a.b("nativeTemplateEngine",a.ba);(function(){a.$a=function(){var a=this.Hd=function(){if(!v||!v.tmpl)return 0;try{if(0<=v.tmpl.tag.tmpl.open.toString().indexOf("__"))return 2}catch(a){}return 1}();
this.renderTemplateSource=function(b,e,f,g){g=g||w;f=f||{};if(2>a)throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");var h=b.data("precompiled");h||(h=b.text()||"",h=v.template(null,"{{ko_with $item.koBindingContext}}"+h+"{{/ko_with}}"),b.data("precompiled",h));b=[e.$data];e=v.extend({koBindingContext:e},f.templateOptions);e=v.tmpl(h,b,e);e.appendTo(g.createElement("div"));v.fragments={};return e};this.createJavaScriptEvaluatorBlock=function(a){return"{{ko_code ((function() { return "+
a+" })()) }}"};this.addTemplate=function(a,b){w.write("<script type='text/html' id='"+a+"'>"+b+"\x3c/script>")};0<a&&(v.tmpl.tag.ko_code={open:"__.push($1 || '');"},v.tmpl.tag.ko_with={open:"with($1) {",close:"} "})};a.$a.prototype=new a.ca;a.$a.prototype.constructor=a.$a;var b=new a.$a;0<b.Hd&&a.gc(b);a.b("jqueryTmplTemplateEngine",a.$a)})()})})();})();

/**
 * CLDR JavaScript Library v0.5.4
 * http://jquery.com/
 *
 * Copyright 2013 Rafael Xavier de Souza
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2020-10-22T15:56Z
 */
/*!
 * CLDR JavaScript Library v0.5.4 2020-10-22T15:56Z MIT license © Rafael Xavier
 * http://git.io/h4lmVg
 */
(function( root, factory ) {

	if ( typeof define === "function" && define.amd ) {
		// AMD.
		define( factory );
	} else if ( typeof module === "object" && typeof module.exports === "object" ) {
		// Node. CommonJS.
		module.exports = factory();
	} else {
		// Global
		root.Cldr = factory();
	}

}( this, function() {


	var arrayIsArray = Array.isArray || function( obj ) {
		return Object.prototype.toString.call( obj ) === "[object Array]";
	};




	var pathNormalize = function( path, attributes ) {
		if ( arrayIsArray( path ) ) {
			path = path.join( "/" );
		}
		if ( typeof path !== "string" ) {
			throw new Error( "invalid path \"" + path + "\"" );
		}
		// 1: Ignore leading slash `/`
		// 2: Ignore leading `cldr/`
		path = path
			.replace( /^\// , "" ) /* 1 */
			.replace( /^cldr\// , "" ); /* 2 */

		// Replace {attribute}'s
		path = path.replace( /{[a-zA-Z]+}/g, function( name ) {
			name = name.replace( /^{([^}]*)}$/, "$1" );
			return attributes[ name ];
		});

		return path.split( "/" );
	};




	var arraySome = function( array, callback ) {
		var i, length;
		if ( array.some ) {
			return array.some( callback );
		}
		for ( i = 0, length = array.length; i < length; i++ ) {
			if ( callback( array[ i ], i, array ) ) {
				return true;
			}
		}
		return false;
	};




	/**
	 * Return the maximized language id as defined in
	 * http://www.unicode.org/reports/tr35/#Likely_Subtags
	 * 1. Canonicalize.
	 * 1.1 Make sure the input locale is in canonical form: uses the right
	 * separator, and has the right casing.
	 * TODO Right casing? What df? It seems languages are lowercase, scripts are
	 * Capitalized, territory is uppercase. I am leaving this as an exercise to
	 * the user.
	 *
	 * 1.2 Replace any deprecated subtags with their canonical values using the
	 * <alias> data in supplemental metadata. Use the first value in the
	 * replacement list, if it exists. Language tag replacements may have multiple
	 * parts, such as "sh" ➞ "sr_Latn" or mo" ➞ "ro_MD". In such a case, the
	 * original script and/or region are retained if there is one. Thus
	 * "sh_Arab_AQ" ➞ "sr_Arab_AQ", not "sr_Latn_AQ".
	 * TODO What <alias> data?
	 *
	 * 1.3 If the tag is grandfathered (see <variable id="$grandfathered"
	 * type="choice"> in the supplemental data), then return it.
	 * TODO grandfathered?
	 *
	 * 1.4 Remove the script code 'Zzzz' and the region code 'ZZ' if they occur.
	 * 1.5 Get the components of the cleaned-up source tag (languages, scripts,
	 * and regions), plus any variants and extensions.
	 * 2. Lookup. Lookup each of the following in order, and stop on the first
	 * match:
	 * 2.1 languages_scripts_regions
	 * 2.2 languages_regions
	 * 2.3 languages_scripts
	 * 2.4 languages
	 * 2.5 und_scripts
	 * 3. Return
	 * 3.1 If there is no match, either return an error value, or the match for
	 * "und" (in APIs where a valid language tag is required).
	 * 3.2 Otherwise there is a match = languagem_scriptm_regionm
	 * 3.3 Let xr = xs if xs is not empty, and xm otherwise.
	 * 3.4 Return the language tag composed of languager _ scriptr _ regionr +
	 * variants + extensions.
	 *
	 * @subtags [Array] normalized language id subtags tuple (see init.js).
	 */
	var coreLikelySubtags = function( Cldr, cldr, subtags, options ) {
		var match, matchFound,
			language = subtags[ 0 ],
			script = subtags[ 1 ],
			sep = Cldr.localeSep,
			territory = subtags[ 2 ],
			variants = subtags.slice( 3, 4 );
		options = options || {};

		// Skip if (language, script, territory) is not empty [3.3]
		if ( language !== "und" && script !== "Zzzz" && territory !== "ZZ" ) {
			return [ language, script, territory ].concat( variants );
		}

		// Skip if no supplemental likelySubtags data is present
		if ( typeof cldr.get( "supplemental/likelySubtags" ) === "undefined" ) {
			return;
		}

		// [2]
		matchFound = arraySome([
			[ language, script, territory ],
			[ language, territory ],
			[ language, script ],
			[ language ],
			[ "und", script ]
		], function( test ) {
			return match = !(/\b(Zzzz|ZZ)\b/).test( test.join( sep ) ) /* [1.4] */ && cldr.get( [ "supplemental/likelySubtags", test.join( sep ) ] );
		});

		// [3]
		if ( matchFound ) {
			// [3.2 .. 3.4]
			match = match.split( sep );
			return [
				language !== "und" ? language : match[ 0 ],
				script !== "Zzzz" ? script : match[ 1 ],
				territory !== "ZZ" ? territory : match[ 2 ]
			].concat( variants );
		} else if ( options.force ) {
			// [3.1.2]
			return cldr.get( "supplemental/likelySubtags/und" ).split( sep );
		} else {
			// [3.1.1]
			return;
		}
	};



	/**
	 * Given a locale, remove any fields that Add Likely Subtags would add.
	 * http://www.unicode.org/reports/tr35/#Likely_Subtags
	 * 1. First get max = AddLikelySubtags(inputLocale). If an error is signaled,
	 * return it.
	 * 2. Remove the variants from max.
	 * 3. Then for trial in {language, language _ region, language _ script}. If
	 * AddLikelySubtags(trial) = max, then return trial + variants.
	 * 4. If you do not get a match, return max + variants.
	 * 
	 * @maxLanguageId [Array] maxLanguageId tuple (see init.js).
	 */
	var coreRemoveLikelySubtags = function( Cldr, cldr, maxLanguageId ) {
		var match, matchFound,
			language = maxLanguageId[ 0 ],
			script = maxLanguageId[ 1 ],
			territory = maxLanguageId[ 2 ],
			variants = maxLanguageId[ 3 ];

		// [3]
		matchFound = arraySome([
			[ [ language, "Zzzz", "ZZ" ], [ language ] ],
			[ [ language, "Zzzz", territory ], [ language, territory ] ],
			[ [ language, script, "ZZ" ], [ language, script ] ]
		], function( test ) {
			var result = coreLikelySubtags( Cldr, cldr, test[ 0 ] );
			match = test[ 1 ];
			return result && result[ 0 ] === maxLanguageId[ 0 ] &&
				result[ 1 ] === maxLanguageId[ 1 ] &&
				result[ 2 ] === maxLanguageId[ 2 ];
		});

		if ( matchFound ) {
			if ( variants ) {
				match.push( variants );
			}
			return match;
		}

		// [4]
		return maxLanguageId;
	};




	/**
	 * subtags( locale )
	 *
	 * @locale [String]
	 */
	var coreSubtags = function( locale ) {
		var aux, unicodeLanguageId,
			subtags = [];

		locale = locale.replace( /_/, "-" );

		// Unicode locale extensions.
		aux = locale.split( "-u-" );
		if ( aux[ 1 ] ) {
			aux[ 1 ] = aux[ 1 ].split( "-t-" );
			locale = aux[ 0 ] + ( aux[ 1 ][ 1 ] ? "-t-" + aux[ 1 ][ 1 ] : "");
			subtags[ 4 /* unicodeLocaleExtensions */ ] = aux[ 1 ][ 0 ];
		}

		// TODO normalize transformed extensions. Currently, skipped.
		// subtags[ x ] = locale.split( "-t-" )[ 1 ];
		unicodeLanguageId = locale.split( "-t-" )[ 0 ];

		// unicode_language_id = "root"
		//   | unicode_language_subtag         
		//     (sep unicode_script_subtag)? 
		//     (sep unicode_region_subtag)?
		//     (sep unicode_variant_subtag)* ;
		//
		// Although unicode_language_subtag = alpha{2,8}, I'm using alpha{2,3}. Because, there's no language on CLDR lengthier than 3.
		aux = unicodeLanguageId.match( /^(([a-z]{2,3})(-([A-Z][a-z]{3}))?(-([A-Z]{2}|[0-9]{3}))?)((-([a-zA-Z0-9]{5,8}|[0-9][a-zA-Z0-9]{3}))*)$|^(root)$/ );
		if ( aux === null ) {
			return [ "und", "Zzzz", "ZZ" ];
		}
		subtags[ 0 /* language */ ] = aux[ 10 ] /* root */ || aux[ 2 ] || "und";
		subtags[ 1 /* script */ ] = aux[ 4 ] || "Zzzz";
		subtags[ 2 /* territory */ ] = aux[ 6 ] || "ZZ";
		if ( aux[ 7 ] && aux[ 7 ].length ) {
			subtags[ 3 /* variant */ ] = aux[ 7 ].slice( 1 ) /* remove leading "-" */;
		}

		// 0: language
		// 1: script
		// 2: territory (aka region)
		// 3: variant
		// 4: unicodeLocaleExtensions
		return subtags;
	};




	var arrayForEach = function( array, callback ) {
		var i, length;
		if ( array.forEach ) {
			return array.forEach( callback );
		}
		for ( i = 0, length = array.length; i < length; i++ ) {
			callback( array[ i ], i, array );
		}
	};




	/**
	 * bundleLookup( minLanguageId )
	 *
	 * @Cldr [Cldr class]
	 *
	 * @cldr [Cldr instance]
	 *
	 * @minLanguageId [String] requested languageId after applied remove likely subtags.
	 */
	var bundleLookup = function( Cldr, cldr, minLanguageId ) {
		var availableBundleMap = Cldr._availableBundleMap,
			availableBundleMapQueue = Cldr._availableBundleMapQueue;

		if ( availableBundleMapQueue.length ) {
			arrayForEach( availableBundleMapQueue, function( bundle, i ) {
				var existing, maxBundle, minBundle, subtags;
				subtags = coreSubtags( bundle );
				maxBundle = coreLikelySubtags( Cldr, cldr, subtags );
				if ( maxBundle === undefined ) {
					availableBundleMapQueue.splice( i, 1 );
					throw new Error( "Could not find likelySubtags for " + bundle );
				}
				minBundle = coreRemoveLikelySubtags( Cldr, cldr, maxBundle );
				minBundle = minBundle.join( Cldr.localeSep );
				existing = availableBundleMap[ minBundle ];
				if ( existing && existing.length < bundle.length ) {
					return;
				}
				availableBundleMap[ minBundle ] = bundle;
			});
			Cldr._availableBundleMapQueue = [];
		}

		return availableBundleMap[ minLanguageId ] || null;
	};




	var objectKeys = function( object ) {
		var i,
			result = [];

		if ( Object.keys ) {
			return Object.keys( object );
		}

		for ( i in object ) {
			result.push( i );
		}

		return result;
	};




	var createError = function( code, attributes ) {
		var error, message;

		message = code + ( attributes && JSON ? ": " + JSON.stringify( attributes ) : "" );
		error = new Error( message );
		error.code = code;

		// extend( error, attributes );
		arrayForEach( objectKeys( attributes ), function( attribute ) {
			error[ attribute ] = attributes[ attribute ];
		});

		return error;
	};




	var validate = function( code, check, attributes ) {
		if ( !check ) {
			throw createError( code, attributes );
		}
	};




	var validatePresence = function( value, name ) {
		validate( "E_MISSING_PARAMETER", typeof value !== "undefined", {
			name: name
		});
	};




	var validateType = function( value, name, check, expected ) {
		validate( "E_INVALID_PAR_TYPE", check, {
			expected: expected,
			name: name,
			value: value
		});
	};




	var validateTypePath = function( value, name ) {
		validateType( value, name, typeof value === "string" || arrayIsArray( value ), "String or Array" );
	};




	/**
	 * Function inspired by jQuery Core, but reduced to our use case.
	 */
	var isPlainObject = function( obj ) {
		return obj !== null && "" + obj === "[object Object]";
	};




	var validateTypePlainObject = function( value, name ) {
		validateType( value, name, typeof value === "undefined" || isPlainObject( value ), "Plain Object" );
	};




	var validateTypeString = function( value, name ) {
		validateType( value, name, typeof value === "string", "a string" );
	};




	// @path: normalized path
	var resourceGet = function( data, path ) {
		var i,
			node = data,
			length = path.length;

		for ( i = 0; i < length - 1; i++ ) {
			node = node[ path[ i ] ];
			if ( !node ) {
				return undefined;
			}
		}
		return node[ path[ i ] ];
	};




	/**
	 * setAvailableBundles( Cldr, json )
	 *
	 * @Cldr [Cldr class]
	 *
	 * @json resolved/unresolved cldr data.
	 *
	 * Set available bundles queue based on passed json CLDR data. Considers a bundle as any String at /main/{bundle}.
	 */
	var coreSetAvailableBundles = function( Cldr, json ) {
		var bundle,
			availableBundleMapQueue = Cldr._availableBundleMapQueue,
			main = resourceGet( json, [ "main" ] );

		if ( main ) {
			for ( bundle in main ) {
				if ( main.hasOwnProperty( bundle ) && bundle !== "root" &&
							availableBundleMapQueue.indexOf( bundle ) === -1 ) {
					availableBundleMapQueue.push( bundle );
				}
			}
		}
	};



	var alwaysArray = function( somethingOrArray ) {
		return arrayIsArray( somethingOrArray ) ?  somethingOrArray : [ somethingOrArray ];
	};


	var jsonMerge = (function() {

	// Returns new deeply merged JSON.
	//
	// Eg.
	// merge( { a: { b: 1, c: 2 } }, { a: { b: 3, d: 4 } } )
	// -> { a: { b: 3, c: 2, d: 4 } }
	//
	// @arguments JSON's
	// 
	var merge = function() {
		var destination = {},
			sources = [].slice.call( arguments, 0 );
		arrayForEach( sources, function( source ) {
			var prop;
			for ( prop in source ) {
				if ( prop in destination && typeof destination[ prop ] === "object" && !arrayIsArray( destination[ prop ] ) ) {

					// Merge Objects
					destination[ prop ] = merge( destination[ prop ], source[ prop ] );

				} else {

					// Set new values
					destination[ prop ] = source[ prop ];

				}
			}
		});
		return destination;
	};

	return merge;

}());


	/**
	 * load( Cldr, source, jsons )
	 *
	 * @Cldr [Cldr class]
	 *
	 * @source [Object]
	 *
	 * @jsons [arguments]
	 */
	var coreLoad = function( Cldr, source, jsons ) {
		var i, j, json;

		validatePresence( jsons[ 0 ], "json" );

		// Support arbitrary parameters, e.g., `Cldr.load({...}, {...})`.
		for ( i = 0; i < jsons.length; i++ ) {

			// Support array parameters, e.g., `Cldr.load([{...}, {...}])`.
			json = alwaysArray( jsons[ i ] );

			for ( j = 0; j < json.length; j++ ) {
				validateTypePlainObject( json[ j ], "json" );
				source = jsonMerge( source, json[ j ] );
				coreSetAvailableBundles( Cldr, json[ j ] );
			}
		}

		return source;
	};



	var itemGetResolved = function( Cldr, path, attributes ) {
		// Resolve path
		var normalizedPath = pathNormalize( path, attributes );

		return resourceGet( Cldr._resolved, normalizedPath );
	};




	/**
	 * new Cldr()
	 */
	var Cldr = function( locale ) {
		this.init( locale );
	};

	// Build optimization hack to avoid duplicating functions across modules.
	Cldr._alwaysArray = alwaysArray;
	Cldr._coreLoad = coreLoad;
	Cldr._createError = createError;
	Cldr._itemGetResolved = itemGetResolved;
	Cldr._jsonMerge = jsonMerge;
	Cldr._pathNormalize = pathNormalize;
	Cldr._resourceGet = resourceGet;
	Cldr._validatePresence = validatePresence;
	Cldr._validateType = validateType;
	Cldr._validateTypePath = validateTypePath;
	Cldr._validateTypePlainObject = validateTypePlainObject;

	Cldr._availableBundleMap = {};
	Cldr._availableBundleMapQueue = [];
	Cldr._resolved = {};

	// Allow user to override locale separator "-" (default) | "_". According to http://www.unicode.org/reports/tr35/#Unicode_language_identifier, both "-" and "_" are valid locale separators (eg. "en_GB", "en-GB"). According to http://unicode.org/cldr/trac/ticket/6786 its usage must be consistent throughout the data set.
	Cldr.localeSep = "-";

	/**
	 * Cldr.load( json [, json, ...] )
	 *
	 * @json [JSON] CLDR data or [Array] Array of @json's.
	 *
	 * Load resolved cldr data.
	 */
	Cldr.load = function() {
		Cldr._resolved = coreLoad( Cldr, Cldr._resolved, arguments );
	};

	/**
	 * .init() automatically run on instantiation/construction.
	 */
	Cldr.prototype.init = function( locale ) {
		var attributes, language, maxLanguageId, minLanguageId, script, subtags, territory, unicodeLocaleExtensions, variant,
			sep = Cldr.localeSep,
			unicodeLocaleExtensionsRaw = "";

		validatePresence( locale, "locale" );
		validateTypeString( locale, "locale" );

		subtags = coreSubtags( locale );

		if ( subtags.length === 5 ) {
			unicodeLocaleExtensions = subtags.pop();
			unicodeLocaleExtensionsRaw = sep + "u" + sep + unicodeLocaleExtensions;
			// Remove trailing null when there is unicodeLocaleExtensions but no variants.
			if ( !subtags[ 3 ] ) {
				subtags.pop();
			}
		}
		variant = subtags[ 3 ];

		// Normalize locale code.
		// Get (or deduce) the "triple subtags": language, territory (also aliased as region), and script subtags.
		// Get the variant subtags (calendar, collation, currency, etc).
		// refs:
		// - http://www.unicode.org/reports/tr35/#Field_Definitions
		// - http://www.unicode.org/reports/tr35/#Language_and_Locale_IDs
		// - http://www.unicode.org/reports/tr35/#Unicode_locale_identifier

		// When a locale id does not specify a language, or territory (region), or script, they are obtained by Likely Subtags.
		maxLanguageId = coreLikelySubtags( Cldr, this, subtags, { force: true } ) || subtags;
		language = maxLanguageId[ 0 ];
		script = maxLanguageId[ 1 ];
		territory = maxLanguageId[ 2 ];

		minLanguageId = coreRemoveLikelySubtags( Cldr, this, maxLanguageId ).join( sep );

		// Set attributes
		this.attributes = attributes = {
			bundle: bundleLookup( Cldr, this, minLanguageId ),

			// Unicode Language Id
			minLanguageId: minLanguageId + unicodeLocaleExtensionsRaw,
			maxLanguageId: maxLanguageId.join( sep ) + unicodeLocaleExtensionsRaw,

			// Unicode Language Id Subtabs
			language: language,
			script: script,
			territory: territory,
			region: territory, /* alias */
			variant: variant
		};

		// Unicode locale extensions.
		unicodeLocaleExtensions && ( "-" + unicodeLocaleExtensions ).replace( /-[a-z]{3,8}|(-[a-z]{2})-([a-z]{3,8})/g, function( attribute, key, type ) {

			if ( key ) {

				// Extension is in the `keyword` form.
				attributes[ "u" + key ] = type;
			} else {

				// Extension is in the `attribute` form.
				attributes[ "u" + attribute ] = true;
			}
		});

		this.locale = locale;
	};

	/**
	 * .get()
	 */
	Cldr.prototype.get = function( path ) {

		validatePresence( path, "path" );
		validateTypePath( path, "path" );

		return itemGetResolved( Cldr, path, this.attributes );
	};

	/**
	 * .main()
	 */
	Cldr.prototype.main = function( path ) {
		validatePresence( path, "path" );
		validateTypePath( path, "path" );

		validate( "E_MISSING_BUNDLE", this.attributes.bundle !== null, {
			locale: this.locale
		});

		path = alwaysArray( path );
		return this.get( [ "main/{bundle}" ].concat( path ) );
	};

	return Cldr;




}));

/**
 * CLDR JavaScript Library v0.5.4
 * http://jquery.com/
 *
 * Copyright 2013 Rafael Xavier de Souza
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2020-10-22T15:56Z
 */
/*!
 * CLDR JavaScript Library v0.5.4 2020-10-22T15:56Z MIT license © Rafael Xavier
 * http://git.io/h4lmVg
 */
(function( factory ) {

	if ( typeof define === "function" && define.amd ) {
		// AMD.
		define( [ "../cldr" ], factory );
	} else if ( typeof module === "object" && typeof module.exports === "object" ) {
		// Node. CommonJS.
		module.exports = factory( require( "../cldr" ) );
	} else {
		// Global
		factory( Cldr );
	}

}(function( Cldr ) {

	// Build optimization hack to avoid duplicating functions across modules.
	var pathNormalize = Cldr._pathNormalize,
		validatePresence = Cldr._validatePresence,
		validateType = Cldr._validateType;

/*!
 * EventEmitter v4.2.7 - git.io/ee
 * Oliver Caldwell
 * MIT license
 * @preserve
 */

var EventEmitter;
/* jshint ignore:start */
EventEmitter = (function () {


	/**
	 * Class for managing events.
	 * Can be extended to provide event functionality in other classes.
	 *
	 * @class EventEmitter Manages event registering and emitting.
	 */
	function EventEmitter() {}

	// Shortcuts to improve speed and size
	var proto = EventEmitter.prototype;
	var exports = {};
	

	/**
	 * Finds the index of the listener for the event in it's storage array.
	 *
	 * @param {Function[]} listeners Array of listeners to search through.
	 * @param {Function} listener Method to look for.
	 * @return {Number} Index of the specified listener, -1 if not found
	 * @api private
	 */
	function indexOfListener(listeners, listener) {
		var i = listeners.length;
		while (i--) {
			if (listeners[i].listener === listener) {
				return i;
			}
		}

		return -1;
	}

	/**
	 * Alias a method while keeping the context correct, to allow for overwriting of target method.
	 *
	 * @param {String} name The name of the target method.
	 * @return {Function} The aliased method
	 * @api private
	 */
	function alias(name) {
		return function aliasClosure() {
			return this[name].apply(this, arguments);
		};
	}

	/**
	 * Returns the listener array for the specified event.
	 * Will initialise the event object and listener arrays if required.
	 * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
	 * Each property in the object response is an array of listener functions.
	 *
	 * @param {String|RegExp} evt Name of the event to return the listeners from.
	 * @return {Function[]|Object} All listener functions for the event.
	 */
	proto.getListeners = function getListeners(evt) {
		var events = this._getEvents();
		var response;
		var key;

		// Return a concatenated array of all matching events if
		// the selector is a regular expression.
		if (evt instanceof RegExp) {
			response = {};
			for (key in events) {
				if (events.hasOwnProperty(key) && evt.test(key)) {
					response[key] = events[key];
				}
			}
		}
		else {
			response = events[evt] || (events[evt] = []);
		}

		return response;
	};

	/**
	 * Takes a list of listener objects and flattens it into a list of listener functions.
	 *
	 * @param {Object[]} listeners Raw listener objects.
	 * @return {Function[]} Just the listener functions.
	 */
	proto.flattenListeners = function flattenListeners(listeners) {
		var flatListeners = [];
		var i;

		for (i = 0; i < listeners.length; i += 1) {
			flatListeners.push(listeners[i].listener);
		}

		return flatListeners;
	};

	/**
	 * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
	 *
	 * @param {String|RegExp} evt Name of the event to return the listeners from.
	 * @return {Object} All listener functions for an event in an object.
	 */
	proto.getListenersAsObject = function getListenersAsObject(evt) {
		var listeners = this.getListeners(evt);
		var response;

		if (listeners instanceof Array) {
			response = {};
			response[evt] = listeners;
		}

		return response || listeners;
	};

	/**
	 * Adds a listener function to the specified event.
	 * The listener will not be added if it is a duplicate.
	 * If the listener returns true then it will be removed after it is called.
	 * If you pass a regular expression as the event name then the listener will be added to all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to attach the listener to.
	 * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.addListener = function addListener(evt, listener) {
		var listeners = this.getListenersAsObject(evt);
		var listenerIsWrapped = typeof listener === 'object';
		var key;

		for (key in listeners) {
			if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
				listeners[key].push(listenerIsWrapped ? listener : {
					listener: listener,
					once: false
				});
			}
		}

		return this;
	};

	/**
	 * Alias of addListener
	 */
	proto.on = alias('addListener');

	/**
	 * Semi-alias of addListener. It will add a listener that will be
	 * automatically removed after it's first execution.
	 *
	 * @param {String|RegExp} evt Name of the event to attach the listener to.
	 * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.addOnceListener = function addOnceListener(evt, listener) {
		return this.addListener(evt, {
			listener: listener,
			once: true
		});
	};

	/**
	 * Alias of addOnceListener.
	 */
	proto.once = alias('addOnceListener');

	/**
	 * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
	 * You need to tell it what event names should be matched by a regex.
	 *
	 * @param {String} evt Name of the event to create.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.defineEvent = function defineEvent(evt) {
		this.getListeners(evt);
		return this;
	};

	/**
	 * Uses defineEvent to define multiple events.
	 *
	 * @param {String[]} evts An array of event names to define.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.defineEvents = function defineEvents(evts) {
		for (var i = 0; i < evts.length; i += 1) {
			this.defineEvent(evts[i]);
		}
		return this;
	};

	/**
	 * Removes a listener function from the specified event.
	 * When passed a regular expression as the event name, it will remove the listener from all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to remove the listener from.
	 * @param {Function} listener Method to remove from the event.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.removeListener = function removeListener(evt, listener) {
		var listeners = this.getListenersAsObject(evt);
		var index;
		var key;

		for (key in listeners) {
			if (listeners.hasOwnProperty(key)) {
				index = indexOfListener(listeners[key], listener);

				if (index !== -1) {
					listeners[key].splice(index, 1);
				}
			}
		}

		return this;
	};

	/**
	 * Alias of removeListener
	 */
	proto.off = alias('removeListener');

	/**
	 * Adds listeners in bulk using the manipulateListeners method.
	 * If you pass an object as the second argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
	 * You can also pass it a regular expression to add the array of listeners to all events that match it.
	 * Yeah, this function does quite a bit. That's probably a bad thing.
	 *
	 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
	 * @param {Function[]} [listeners] An optional array of listener functions to add.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.addListeners = function addListeners(evt, listeners) {
		// Pass through to manipulateListeners
		return this.manipulateListeners(false, evt, listeners);
	};

	/**
	 * Removes listeners in bulk using the manipulateListeners method.
	 * If you pass an object as the second argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
	 * You can also pass it an event name and an array of listeners to be removed.
	 * You can also pass it a regular expression to remove the listeners from all events that match it.
	 *
	 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
	 * @param {Function[]} [listeners] An optional array of listener functions to remove.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.removeListeners = function removeListeners(evt, listeners) {
		// Pass through to manipulateListeners
		return this.manipulateListeners(true, evt, listeners);
	};

	/**
	 * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
	 * The first argument will determine if the listeners are removed (true) or added (false).
	 * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
	 * You can also pass it an event name and an array of listeners to be added/removed.
	 * You can also pass it a regular expression to manipulate the listeners of all events that match it.
	 *
	 * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
	 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
	 * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
		var i;
		var value;
		var single = remove ? this.removeListener : this.addListener;
		var multiple = remove ? this.removeListeners : this.addListeners;

		// If evt is an object then pass each of it's properties to this method
		if (typeof evt === 'object' && !(evt instanceof RegExp)) {
			for (i in evt) {
				if (evt.hasOwnProperty(i) && (value = evt[i])) {
					// Pass the single listener straight through to the singular method
					if (typeof value === 'function') {
						single.call(this, i, value);
					}
					else {
						// Otherwise pass back to the multiple function
						multiple.call(this, i, value);
					}
				}
			}
		}
		else {
			// So evt must be a string
			// And listeners must be an array of listeners
			// Loop over it and pass each one to the multiple method
			i = listeners.length;
			while (i--) {
				single.call(this, evt, listeners[i]);
			}
		}

		return this;
	};

	/**
	 * Removes all listeners from a specified event.
	 * If you do not specify an event then all listeners will be removed.
	 * That means every event will be emptied.
	 * You can also pass a regex to remove all events that match it.
	 *
	 * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.removeEvent = function removeEvent(evt) {
		var type = typeof evt;
		var events = this._getEvents();
		var key;

		// Remove different things depending on the state of evt
		if (type === 'string') {
			// Remove all listeners for the specified event
			delete events[evt];
		}
		else if (evt instanceof RegExp) {
			// Remove all events matching the regex.
			for (key in events) {
				if (events.hasOwnProperty(key) && evt.test(key)) {
					delete events[key];
				}
			}
		}
		else {
			// Remove all listeners in all events
			delete this._events;
		}

		return this;
	};

	/**
	 * Alias of removeEvent.
	 *
	 * Added to mirror the node API.
	 */
	proto.removeAllListeners = alias('removeEvent');

	/**
	 * Emits an event of your choice.
	 * When emitted, every listener attached to that event will be executed.
	 * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
	 * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
	 * So they will not arrive within the array on the other side, they will be separate.
	 * You can also pass a regular expression to emit to all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
	 * @param {Array} [args] Optional array of arguments to be passed to each listener.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.emitEvent = function emitEvent(evt, args) {
		var listeners = this.getListenersAsObject(evt);
		var listener;
		var i;
		var key;
		var response;

		for (key in listeners) {
			if (listeners.hasOwnProperty(key)) {
				i = listeners[key].length;

				while (i--) {
					// If the listener returns true then it shall be removed from the event
					// The function is executed either with a basic call or an apply if there is an args array
					listener = listeners[key][i];

					if (listener.once === true) {
						this.removeListener(evt, listener.listener);
					}

					response = listener.listener.apply(this, args || []);

					if (response === this._getOnceReturnValue()) {
						this.removeListener(evt, listener.listener);
					}
				}
			}
		}

		return this;
	};

	/**
	 * Alias of emitEvent
	 */
	proto.trigger = alias('emitEvent');

	/**
	 * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
	 * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
	 * @param {...*} Optional additional arguments to be passed to each listener.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.emit = function emit(evt) {
		var args = Array.prototype.slice.call(arguments, 1);
		return this.emitEvent(evt, args);
	};

	/**
	 * Sets the current value to check against when executing listeners. If a
	 * listeners return value matches the one set here then it will be removed
	 * after execution. This value defaults to true.
	 *
	 * @param {*} value The new value to check for when executing listeners.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.setOnceReturnValue = function setOnceReturnValue(value) {
		this._onceReturnValue = value;
		return this;
	};

	/**
	 * Fetches the current value to check against when executing listeners. If
	 * the listeners return value matches this one then it should be removed
	 * automatically. It will return true by default.
	 *
	 * @return {*|Boolean} The current value to check for or the default, true.
	 * @api private
	 */
	proto._getOnceReturnValue = function _getOnceReturnValue() {
		if (this.hasOwnProperty('_onceReturnValue')) {
			return this._onceReturnValue;
		}
		else {
			return true;
		}
	};

	/**
	 * Fetches the events object and creates one if required.
	 *
	 * @return {Object} The events storage object.
	 * @api private
	 */
	proto._getEvents = function _getEvents() {
		return this._events || (this._events = {});
	};

	/**
	 * Reverts the global {@link EventEmitter} to its previous value and returns a reference to this version.
	 *
	 * @return {Function} Non conflicting EventEmitter class.
	 */
	EventEmitter.noConflict = function noConflict() {
		exports.EventEmitter = originalGlobalValue;
		return EventEmitter;
	};

	return EventEmitter;
}());
/* jshint ignore:end */



	var validateTypeFunction = function( value, name ) {
		validateType( value, name, typeof value === "undefined" || typeof value === "function", "Function" );
	};




	var superGet, superInit,
		globalEe = new EventEmitter();

	function validateTypeEvent( value, name ) {
		validateType( value, name, typeof value === "string" || value instanceof RegExp, "String or RegExp" );
	}

	function validateThenCall( method, self ) {
		return function( event, listener ) {
			validatePresence( event, "event" );
			validateTypeEvent( event, "event" );

			validatePresence( listener, "listener" );
			validateTypeFunction( listener, "listener" );

			return self[ method ].apply( self, arguments );
		};
	}

	function off( self ) {
		return validateThenCall( "off", self );
	}

	function on( self ) {
		return validateThenCall( "on", self );
	}

	function once( self ) {
		return validateThenCall( "once", self );
	}

	Cldr.off = off( globalEe );
	Cldr.on = on( globalEe );
	Cldr.once = once( globalEe );

	/**
	 * Overload Cldr.prototype.init().
	 */
	superInit = Cldr.prototype.init;
	Cldr.prototype.init = function() {
		var ee;
		this.ee = ee = new EventEmitter();
		this.off = off( ee );
		this.on = on( ee );
		this.once = once( ee );
		superInit.apply( this, arguments );
	};

	/**
	 * getOverload is encapsulated, because of cldr/unresolved. If it's loaded
	 * after cldr/event (and note it overwrites .get), it can trigger this
	 * overload again.
	 */
	function getOverload() {

		/**
		 * Overload Cldr.prototype.get().
		 */
		superGet = Cldr.prototype.get;
		Cldr.prototype.get = function( path ) {
			var value = superGet.apply( this, arguments );
			path = pathNormalize( path, this.attributes ).join( "/" );
			globalEe.trigger( "get", [ path, value ] );
			this.ee.trigger( "get", [ path, value ] );
			return value;
		};
	}

	Cldr._eventInit = getOverload;
	getOverload();

	return Cldr;




}));

/**
 * CLDR JavaScript Library v0.5.4
 * http://jquery.com/
 *
 * Copyright 2013 Rafael Xavier de Souza
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2020-10-22T15:56Z
 */
/*!
 * CLDR JavaScript Library v0.5.4 2020-10-22T15:56Z MIT license © Rafael Xavier
 * http://git.io/h4lmVg
 */
(function( factory ) {

	if ( typeof define === "function" && define.amd ) {
		// AMD.
		define( [ "../cldr" ], factory );
	} else if ( typeof module === "object" && typeof module.exports === "object" ) {
		// Node. CommonJS.
		module.exports = factory( require( "../cldr" ) );
	} else {
		// Global
		factory( Cldr );
	}

}(function( Cldr ) {

	// Build optimization hack to avoid duplicating functions across modules.
	var alwaysArray = Cldr._alwaysArray;



	var supplementalMain = function( cldr ) {

		var prepend, supplemental;
		
		prepend = function( prepend ) {
			return function( path ) {
				path = alwaysArray( path );
				return cldr.get( [ prepend ].concat( path ) );
			};
		};

		supplemental = prepend( "supplemental" );

		// Week Data
		// http://www.unicode.org/reports/tr35/tr35-dates.html#Week_Data
		supplemental.weekData = prepend( "supplemental/weekData" );

		supplemental.weekData.firstDay = function() {
			return cldr.get( "supplemental/weekData/firstDay/{territory}" ) ||
				cldr.get( "supplemental/weekData/firstDay/001" );
		};

		supplemental.weekData.minDays = function() {
			var minDays = cldr.get( "supplemental/weekData/minDays/{territory}" ) ||
				cldr.get( "supplemental/weekData/minDays/001" );
			return parseInt( minDays, 10 );
		};

		// Time Data
		// http://www.unicode.org/reports/tr35/tr35-dates.html#Time_Data
		supplemental.timeData = prepend( "supplemental/timeData" );

		supplemental.timeData.allowed = function() {
			return cldr.get( "supplemental/timeData/{territory}/_allowed" ) ||
				cldr.get( "supplemental/timeData/001/_allowed" );
		};

		supplemental.timeData.preferred = function() {
			return cldr.get( "supplemental/timeData/{territory}/_preferred" ) ||
				cldr.get( "supplemental/timeData/001/_preferred" );
		};

		return supplemental;

	};




	var initSuper = Cldr.prototype.init;

	/**
	 * .init() automatically ran on construction.
	 *
	 * Overload .init().
	 */
	Cldr.prototype.init = function() {
		initSuper.apply( this, arguments );
		this.supplemental = supplementalMain( this );
	};

	return Cldr;




}));

/**
 * CLDR JavaScript Library v0.5.4
 * http://jquery.com/
 *
 * Copyright 2013 Rafael Xavier de Souza
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2020-10-22T15:56Z
 */
/*!
 * CLDR JavaScript Library v0.5.4 2020-10-22T15:56Z MIT license © Rafael Xavier
 * http://git.io/h4lmVg
 */
(function( factory ) {

	if ( typeof define === "function" && define.amd ) {
		// AMD.
		define( [ "../cldr" ], factory );
	} else if ( typeof module === "object" && typeof module.exports === "object" ) {
		// Node. CommonJS.
		module.exports = factory( require( "../cldr" ) );
	} else {
		// Global
		factory( Cldr );
	}

}(function( Cldr ) {

	// Build optimization hack to avoid duplicating functions across modules.
	var coreLoad = Cldr._coreLoad;
	var jsonMerge = Cldr._jsonMerge;
	var pathNormalize = Cldr._pathNormalize;
	var resourceGet = Cldr._resourceGet;
	var validatePresence = Cldr._validatePresence;
	var validateTypePath = Cldr._validateTypePath;



	var bundleParentLookup = function( Cldr, locale ) {
		var normalizedPath, parent;

		if ( locale === "root" ) {
			return;
		}

		// First, try to find parent on supplemental data.
		normalizedPath = pathNormalize( [ "supplemental/parentLocales/parentLocale", locale ] );
		parent = resourceGet( Cldr._resolved, normalizedPath ) || resourceGet( Cldr._raw, normalizedPath );
		if ( parent ) {
			return parent;
		}

		// Or truncate locale.
		parent = locale.substr( 0, locale.lastIndexOf( Cldr.localeSep ) );
		if ( !parent ) {
			return "root";
		}

		return parent;
	};




	// @path: normalized path
	var resourceSet = function( data, path, value ) {
		var i,
			node = data,
			length = path.length;

		for ( i = 0; i < length - 1; i++ ) {
			if ( !node[ path[ i ] ] ) {
				node[ path[ i ] ] = {};
			}
			node = node[ path[ i ] ];
		}
		node[ path[ i ] ] = value;
	};


	var itemLookup = (function() {

	var lookup;

	lookup = function( Cldr, locale, path, attributes, childLocale ) {
		var normalizedPath, parent, value;

		// 1: Finish recursion
		// 2: Avoid infinite loop
		if ( typeof locale === "undefined" /* 1 */ || locale === childLocale /* 2 */ ) {
			return;
		}

		// Resolve path
		normalizedPath = pathNormalize( path, attributes );

		// Check resolved (cached) data first
		// 1: Due to #16, never use the cached resolved non-leaf nodes. It may not
		//    represent its leafs in its entirety.
		value = resourceGet( Cldr._resolved, normalizedPath );
		if ( value !== undefined && typeof value !== "object" /* 1 */ ) {
			return value;
		}

		// Check raw data
		value = resourceGet( Cldr._raw, normalizedPath );

		if ( value === undefined ) {
			// Or, lookup at parent locale
			parent = bundleParentLookup( Cldr, locale );
			value = lookup( Cldr, parent, path, jsonMerge( attributes, { bundle: parent }), locale );
		}

		if ( value !== undefined ) {
			// Set resolved (cached)
			resourceSet( Cldr._resolved, normalizedPath, value );
		}

		return value;
	};

	return lookup;

}());


	Cldr._raw = {};

	/**
	 * Cldr.load( json [, json, ...] )
	 *
	 * @json [JSON] CLDR data or [Array] Array of @json's.
	 *
	 * Load resolved or unresolved cldr data.
	 * Overwrite Cldr.load().
	 */
	Cldr.load = function() {
		Cldr._raw = coreLoad( Cldr, Cldr._raw, arguments );
	};

	/**
	 * Overwrite Cldr.prototype.get().
	 */
	Cldr.prototype.get = function( path ) {
		validatePresence( path, "path" );
		validateTypePath( path, "path" );

		// 1: use bundle as locale on item lookup for simplification purposes, because no other extended subtag is used anyway on bundle parent lookup.
		// 2: during init(), this method is called, but bundle is yet not defined. Use "" as a workaround in this very specific scenario.
		return itemLookup( Cldr, this.attributes && this.attributes.bundle /* 1 */ || "" /* 2 */, path, this.attributes );
	};

	// In case cldr/unresolved is loaded after cldr/event, we trigger its overloads again. Because, .get is overwritten in here.
	if ( Cldr._eventInit ) {
		Cldr._eventInit();
	}

	return Cldr;




}));

/**
 * Globalize v1.7.0
 *
 * https://github.com/globalizejs/globalize
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-08-02T11:53Z
 */
/*!
 * Globalize v1.7.0 2021-08-02T11:53Z Released under the MIT license
 * http://git.io/TrdQbw
 */
(function( root, factory ) {

	// UMD returnExports
	if ( typeof define === "function" && define.amd ) {

		// AMD
		define([
			"cldr",
			"cldr/event"
		], factory );
	} else if ( typeof exports === "object" ) {

		// Node, CommonJS
		module.exports = factory( require( "cldrjs" ) );
	} else {

		// Global
		root.Globalize = factory( root.Cldr );
	}
}( this, function( Cldr ) {


/**
 * A toString method that outputs meaningful values for objects or arrays and
 * still performs as fast as a plain string in case variable is string, or as
 * fast as `"" + number` in case variable is a number.
 * Ref: http://jsperf.com/my-stringify
 */
var toString = function( variable ) {
	return typeof variable === "string" ? variable : ( typeof variable === "number" ? "" +
		variable : JSON.stringify( variable ) );
};




/**
 * formatMessage( message, data )
 *
 * @message [String] A message with optional {vars} to be replaced.
 *
 * @data [Array or JSON] Object with replacing-variables content.
 *
 * Return the formatted message. For example:
 *
 * - formatMessage( "{0} second", [ 1 ] ); // 1 second
 *
 * - formatMessage( "{0}/{1}", ["m", "s"] ); // m/s
 *
 * - formatMessage( "{name} <{email}>", {
 *     name: "Foo",
 *     email: "bar@baz.qux"
 *   }); // Foo <bar@baz.qux>
 */
var formatMessage = function( message, data ) {

	// Replace {attribute}'s
	message = message.replace( /{[0-9a-zA-Z-_. ]+}/g, function( name ) {
		name = name.replace( /^{([^}]*)}$/, "$1" );
		return toString( data[ name ] );
	});

	return message;
};




var objectExtend = function() {
	var destination = arguments[ 0 ],
		sources = [].slice.call( arguments, 1 );

	sources.forEach(function( source ) {
		var prop;
		for ( prop in source ) {
			destination[ prop ] = source[ prop ];
		}
	});

	return destination;
};




var createError = function( code, message, attributes ) {
	var error;

	message = code + ( message ? ": " + formatMessage( message, attributes ) : "" );
	error = new Error( message );
	error.code = code;

	objectExtend( error, attributes );

	return error;
};




/**
 * Pushes part to parts array, concat two consecutive parts of the same type.
 */
var partsPush = function( parts, type, value ) {

		// Concat two consecutive parts of same type
		if ( parts.length && parts[ parts.length - 1 ].type === type ) {
			parts[ parts.length - 1 ].value += value;
			return;
		}

		parts.push( { type: type, value: value } );
};




/**
 * formatMessage( message, data )
 *
 * @message [String] A message with optional {vars} to be replaced.
 *
 * @data [Array or JSON] Object with replacing-variables content.
 *
 * Return the formatted message. For example:
 *
 * - formatMessage( "{0} second", [ 1 ] );
 * > [{type: "variable", value: "1", name: "0"}, {type: "literal", value: " second"}]
 *
 * - formatMessage( "{0}/{1}", ["m", "s"] );
 * > [
 *     { type: "variable", value: "m", name: "0" },
 *     { type: "literal", value: " /" },
 *     { type: "variable", value: "s", name: "1" }
 *   ]
 */
var formatMessageToParts = function( message, data ) {

	var lastOffset = 0,
		parts = [];

	// Create parts.
	message.replace( /{[0-9a-zA-Z-_. ]+}/g, function( nameIncludingBrackets, offset ) {
		var name = nameIncludingBrackets.slice( 1, -1 );
		partsPush( parts, "literal", message.slice( lastOffset, offset ));
		partsPush( parts, "variable", data[ name ] );
		parts[ parts.length - 1 ].name = name;
		lastOffset += offset + nameIncludingBrackets.length;
	});

	// Skip empty ones such as `{ type: 'literal', value: '' }`.
	return parts.filter(function( part ) {
		return part.value !== "";
	});
};




/**
 * Returns joined parts values.
 */
var partsJoin = function( parts ) {
	return parts.map( function( part ) {
		return part.value;
	}).join( "" );
};




var runtimeStringify = function( args ) {
	return JSON.stringify( args, function( _key, value ) {
		if ( value && value.runtimeKey ) {
			return value.runtimeKey;
		}
		return value;
	} );
};




// Based on http://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery
var stringHash = function( str ) {
	return [].reduce.call( str, function( hash, i ) {
		var chr = i.charCodeAt( 0 );
		hash = ( ( hash << 5 ) - hash ) + chr;
		return hash | 0;
	}, 0 );
};




var runtimeKey = function( fnName, locale, args, argsStr ) {
	var hash;
	argsStr = argsStr || runtimeStringify( args );
	hash = stringHash( fnName + locale + argsStr );
	return hash > 0 ? "a" + hash : "b" + Math.abs( hash );
};




var functionName = function( fn ) {
	if ( fn.name !== undefined ) {
		return fn.name;
	}

	// fn.name is not supported by IE.
	var matches = /^function\s+([\w\$]+)\s*\(/.exec( fn.toString() );

	if ( matches && matches.length > 0 ) {
		return matches[ 1 ];
	}
};




var runtimeBind = function( args, cldr, fn, runtimeArgs ) {

	var argsStr = runtimeStringify( args ),
		fnName = functionName( fn ),
		locale = cldr.locale;

	// If name of the function is not available, this is most likely due to uglification,
	// which most likely means we are in production, and runtimeBind here is not necessary.
	if ( !fnName ) {
		return fn;
	}

	fn.runtimeKey = runtimeKey( fnName, locale, null, argsStr );

	fn.generatorString = function() {
		return "Globalize(\"" + locale + "\")." + fnName + "(" + argsStr.slice( 1, -1 ) + ")";
	};

	fn.runtimeArgs = runtimeArgs;

	return fn;
};




var validate = function( code, message, check, attributes ) {
	if ( !check ) {
		throw createError( code, message, attributes );
	}
};




var alwaysArray = function( stringOrArray ) {
	return Array.isArray( stringOrArray ) ? stringOrArray : stringOrArray ? [ stringOrArray ] : [];
};




var validateCldr = function( path, value, options ) {
	var skipBoolean;
	options = options || {};

	skipBoolean = alwaysArray( options.skip ).some(function( pathRe ) {
		return pathRe.test( path );
	});

	validate( "E_MISSING_CLDR", "Missing required CLDR content `{path}`.", value || skipBoolean, {
		path: path
	});
};




var validateDefaultLocale = function( value ) {
	validate( "E_DEFAULT_LOCALE_NOT_DEFINED", "Default locale has not been defined.",
		value !== undefined, {} );
};




var validateParameterPresence = function( value, name ) {
	validate( "E_MISSING_PARAMETER", "Missing required parameter `{name}`.",
		value !== undefined, { name: name });
};




/**
 * range( value, name, minimum, maximum )
 *
 * @value [Number].
 *
 * @name [String] name of variable.
 *
 * @minimum [Number]. The lowest valid value, inclusive.
 *
 * @maximum [Number]. The greatest valid value, inclusive.
 */
var validateParameterRange = function( value, name, minimum, maximum ) {
	validate(
		"E_PAR_OUT_OF_RANGE",
		"Parameter `{name}` has value `{value}` out of range [{minimum}, {maximum}].",
		value === undefined || value >= minimum && value <= maximum,
		{
			maximum: maximum,
			minimum: minimum,
			name: name,
			value: value
		}
	);
};




var validateParameterType = function( value, name, check, expected ) {
	validate(
		"E_INVALID_PAR_TYPE",
		"Invalid `{name}` parameter ({value}). {expected} expected.",
		check,
		{
			expected: expected,
			name: name,
			value: value
		}
	);
};




var validateParameterTypeLocale = function( value, name ) {
	validateParameterType(
		value,
		name,
		value === undefined || typeof value === "string" || value instanceof Cldr,
		"String or Cldr instance"
	);
};




/**
 * Function inspired by jQuery Core, but reduced to our use case.
 */
var isPlainObject = function( obj ) {
	return obj !== null && "" + obj === "[object Object]";
};




var validateParameterTypePlainObject = function( value, name ) {
	validateParameterType(
		value,
		name,
		value === undefined || isPlainObject( value ),
		"Plain Object"
	);
};




var alwaysCldr = function( localeOrCldr ) {
	return localeOrCldr instanceof Cldr ? localeOrCldr : new Cldr( localeOrCldr );
};




// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions?redirectlocale=en-US&redirectslug=JavaScript%2FGuide%2FRegular_Expressions
var regexpEscape = function( string ) {
	return string.replace( /([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1" );
};




var stringPad = function( str, count, right ) {
	var length;
	if ( typeof str !== "string" ) {
		str = String( str );
	}
	for ( length = str.length; length < count; length += 1 ) {
		str = ( right ? ( str + "0" ) : ( "0" + str ) );
	}
	return str;
};




function validateLikelySubtags( cldr ) {
	cldr.once( "get", validateCldr );
	cldr.get( "supplemental/likelySubtags" );
}

/**
 * [new] Globalize( locale|cldr )
 *
 * @locale [String]
 *
 * @cldr [Cldr instance]
 *
 * Create a Globalize instance.
 */
function Globalize( locale ) {
	if ( !( this instanceof Globalize ) ) {
		return new Globalize( locale );
	}

	validateParameterPresence( locale, "locale" );
	validateParameterTypeLocale( locale, "locale" );

	this.cldr = alwaysCldr( locale );

	validateLikelySubtags( this.cldr );
}

/**
 * Globalize.load( json, ... )
 *
 * @json [JSON]
 *
 * Load resolved or unresolved cldr data.
 * Somewhat equivalent to previous Globalize.addCultureInfo(...).
 */
Globalize.load = function() {

	// validations are delegated to Cldr.load().
	Cldr.load.apply( Cldr, arguments );
};

/**
 * Globalize.locale( [locale|cldr] )
 *
 * @locale [String]
 *
 * @cldr [Cldr instance]
 *
 * Set default Cldr instance if locale or cldr argument is passed.
 *
 * Return the default Cldr instance.
 */
Globalize.locale = function( locale ) {
	validateParameterTypeLocale( locale, "locale" );

	if ( arguments.length ) {
		this.cldr = alwaysCldr( locale );
		validateLikelySubtags( this.cldr );
	}
	return this.cldr;
};

/**
 * Optimization to avoid duplicating some internal functions across modules.
 */
Globalize._alwaysArray = alwaysArray;
Globalize._createError = createError;
Globalize._formatMessage = formatMessage;
Globalize._formatMessageToParts = formatMessageToParts;
Globalize._isPlainObject = isPlainObject;
Globalize._objectExtend = objectExtend;
Globalize._partsJoin = partsJoin;
Globalize._partsPush = partsPush;
Globalize._regexpEscape = regexpEscape;
Globalize._runtimeBind = runtimeBind;
Globalize._stringPad = stringPad;
Globalize._validate = validate;
Globalize._validateCldr = validateCldr;
Globalize._validateDefaultLocale = validateDefaultLocale;
Globalize._validateParameterPresence = validateParameterPresence;
Globalize._validateParameterRange = validateParameterRange;
Globalize._validateParameterTypePlainObject = validateParameterTypePlainObject;
Globalize._validateParameterType = validateParameterType;

return Globalize;




}));

/**
 * Globalize v1.7.0
 *
 * https://github.com/globalizejs/globalize
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-08-02T11:53Z
 */
/*!
 * Globalize v1.7.0 2021-08-02T11:53Z Released under the MIT license
 * http://git.io/TrdQbw
 */
(function( root, factory ) {

	// UMD returnExports
	if ( typeof define === "function" && define.amd ) {

		// AMD
		define([
			"cldr",
			"../globalize",
			"cldr/event"
		], factory );
	} else if ( typeof exports === "object" ) {

		// Node, CommonJS
		module.exports = factory( require( "cldrjs" ), require( "../globalize" ) );
	} else {

		// Extend global
		factory( root.Cldr, root.Globalize );
	}
}(this, function( Cldr, Globalize ) {

var alwaysArray = Globalize._alwaysArray,
	createError = Globalize._createError,
	isPlainObject = Globalize._isPlainObject,
	runtimeBind = Globalize._runtimeBind,
	validateDefaultLocale = Globalize._validateDefaultLocale,
	validate = Globalize._validate,
	validateParameterPresence = Globalize._validateParameterPresence,
	validateParameterType = Globalize._validateParameterType,
	validateParameterTypePlainObject = Globalize._validateParameterTypePlainObject;
var MessageFormat;
/* eslint-disable */
MessageFormat = (function() {
MessageFormat._parse = (function() {

  /*
   * Generated by PEG.js 0.8.0.
   *
   * http://pegjs.majda.cz/
   */

  function peg$subclass(child, parent) {
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function SyntaxError(message, expected, found, offset, line, column) {
    this.message  = message;
    this.expected = expected;
    this.found    = found;
    this.offset   = offset;
    this.line     = line;
    this.column   = column;

    this.name     = "SyntaxError";
  }

  peg$subclass(SyntaxError, Error);

  function parse(input) {
    var options = arguments.length > 1 ? arguments[1] : {},

        peg$FAILED = {},

        peg$startRuleFunctions = { start: peg$parsestart },
        peg$startRuleFunction  = peg$parsestart,

        peg$c0 = [],
        peg$c1 = function(st) {
              return { type: 'messageFormatPattern', statements: st };
            },
        peg$c2 = peg$FAILED,
        peg$c3 = "{",
        peg$c4 = { type: "literal", value: "{", description: "\"{\"" },
        peg$c5 = null,
        peg$c6 = ",",
        peg$c7 = { type: "literal", value: ",", description: "\",\"" },
        peg$c8 = "}",
        peg$c9 = { type: "literal", value: "}", description: "\"}\"" },
        peg$c10 = function(argIdx, efmt) {
              var res = {
                type: "messageFormatElement",
                argumentIndex: argIdx
              };
              if (efmt && efmt.length) {
                res.elementFormat = efmt[1];
              } else {
                res.output = true;
              }
              return res;
            },
        peg$c11 = "plural",
        peg$c12 = { type: "literal", value: "plural", description: "\"plural\"" },
        peg$c13 = function(t, s) {
              return { type: "elementFormat", key: t, val: s };
            },
        peg$c14 = "selectordinal",
        peg$c15 = { type: "literal", value: "selectordinal", description: "\"selectordinal\"" },
        peg$c16 = "select",
        peg$c17 = { type: "literal", value: "select", description: "\"select\"" },
        peg$c18 = function(t, p) {
              return { type: "elementFormat", key: t, val: p };
            },
        peg$c19 = function(op, pf) {
              return { type: "pluralFormatPattern", pluralForms: pf, offset: op || 0 };
            },
        peg$c20 = "offset",
        peg$c21 = { type: "literal", value: "offset", description: "\"offset\"" },
        peg$c22 = ":",
        peg$c23 = { type: "literal", value: ":", description: "\":\"" },
        peg$c24 = function(d) { return d; },
        peg$c25 = function(k, mfp) {
              return { key: k, val: mfp };
            },
        peg$c26 = function(i) { return i; },
        peg$c27 = "=",
        peg$c28 = { type: "literal", value: "=", description: "\"=\"" },
        peg$c29 = function(pf) { return { type: "selectFormatPattern", pluralForms: pf }; },
        peg$c30 = function(p) { return p; },
        peg$c31 = "#",
        peg$c32 = { type: "literal", value: "#", description: "\"#\"" },
        peg$c33 = function() { return {type: 'octothorpe'}; },
        peg$c34 = function(s) { return { type: "string", val: s.join('') }; },
        peg$c35 = { type: "other", description: "identifier" },
        peg$c36 = /^[0-9a-zA-Z$_]/,
        peg$c37 = { type: "class", value: "[0-9a-zA-Z$_]", description: "[0-9a-zA-Z$_]" },
        peg$c38 = /^[^ \t\n\r,.+={}]/,
        peg$c39 = { type: "class", value: "[^ \\t\\n\\r,.+={}]", description: "[^ \\t\\n\\r,.+={}]" },
        peg$c40 = function(s) { return s; },
        peg$c41 = function(chars) { return chars.join(''); },
        peg$c42 = /^[^{}#\\\0-\x1F \t\n\r]/,
        peg$c43 = { type: "class", value: "[^{}#\\\\\\0-\\x1F \\t\\n\\r]", description: "[^{}#\\\\\\0-\\x1F \\t\\n\\r]" },
        peg$c44 = function(x) { return x; },
        peg$c45 = "\\\\",
        peg$c46 = { type: "literal", value: "\\\\", description: "\"\\\\\\\\\"" },
        peg$c47 = function() { return "\\"; },
        peg$c48 = "\\#",
        peg$c49 = { type: "literal", value: "\\#", description: "\"\\\\#\"" },
        peg$c50 = function() { return "#"; },
        peg$c51 = "\\{",
        peg$c52 = { type: "literal", value: "\\{", description: "\"\\\\{\"" },
        peg$c53 = function() { return "\u007B"; },
        peg$c54 = "\\}",
        peg$c55 = { type: "literal", value: "\\}", description: "\"\\\\}\"" },
        peg$c56 = function() { return "\u007D"; },
        peg$c57 = "\\u",
        peg$c58 = { type: "literal", value: "\\u", description: "\"\\\\u\"" },
        peg$c59 = function(h1, h2, h3, h4) {
              return String.fromCharCode(parseInt("0x" + h1 + h2 + h3 + h4));
            },
        peg$c60 = /^[0-9]/,
        peg$c61 = { type: "class", value: "[0-9]", description: "[0-9]" },
        peg$c62 = function(ds) {
            //the number might start with 0 but must not be interpreted as an octal number
            //Hence, the base is passed to parseInt explicitely
            return parseInt((ds.join('')), 10);
          },
        peg$c63 = /^[0-9a-fA-F]/,
        peg$c64 = { type: "class", value: "[0-9a-fA-F]", description: "[0-9a-fA-F]" },
        peg$c65 = { type: "other", description: "whitespace" },
        peg$c66 = function(w) { return w.join(''); },
        peg$c67 = /^[ \t\n\r]/,
        peg$c68 = { type: "class", value: "[ \\t\\n\\r]", description: "[ \\t\\n\\r]" },

        peg$currPos          = 0,
        peg$reportedPos      = 0,
        peg$cachedPos        = 0,
        peg$cachedPosDetails = { line: 1, column: 1, seenCR: false },
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleFunctions)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }

    function text() {
      return input.substring(peg$reportedPos, peg$currPos);
    }

    function offset() {
      return peg$reportedPos;
    }

    function line() {
      return peg$computePosDetails(peg$reportedPos).line;
    }

    function column() {
      return peg$computePosDetails(peg$reportedPos).column;
    }

    function expected(description) {
      throw peg$buildException(
        null,
        [{ type: "other", description: description }],
        peg$reportedPos
      );
    }

    function error(message) {
      throw peg$buildException(message, null, peg$reportedPos);
    }

    function peg$computePosDetails(pos) {
      function advance(details, startPos, endPos) {
        var p, ch;

        for (p = startPos; p < endPos; p++) {
          ch = input.charAt(p);
          if (ch === "\n") {
            if (!details.seenCR) { details.line++; }
            details.column = 1;
            details.seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            details.line++;
            details.column = 1;
            details.seenCR = true;
          } else {
            details.column++;
            details.seenCR = false;
          }
        }
      }

      if (peg$cachedPos !== pos) {
        if (peg$cachedPos > pos) {
          peg$cachedPos = 0;
          peg$cachedPosDetails = { line: 1, column: 1, seenCR: false };
        }
        advance(peg$cachedPosDetails, peg$cachedPos, pos);
        peg$cachedPos = pos;
      }

      return peg$cachedPosDetails;
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildException(message, expected, pos) {
      function cleanupExpected(expected) {
        var i = 1;

        expected.sort(function(a, b) {
          if (a.description < b.description) {
            return -1;
          } else if (a.description > b.description) {
            return 1;
          } else {
            return 0;
          }
        });

        while (i < expected.length) {
          if (expected[i - 1] === expected[i]) {
            expected.splice(i, 1);
          } else {
            i++;
          }
        }
      }

      function buildMessage(expected, found) {
        function stringEscape(s) {
          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

          return s
            .replace(/\\/g,   '\\\\')
            .replace(/"/g,    '\\"')
            .replace(/\x08/g, '\\b')
            .replace(/\t/g,   '\\t')
            .replace(/\n/g,   '\\n')
            .replace(/\f/g,   '\\f')
            .replace(/\r/g,   '\\r')
            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
            .replace(/[\u0180-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
            .replace(/[\u1080-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
        }

        var expectedDescs = new Array(expected.length),
            expectedDesc, foundDesc, i;

        for (i = 0; i < expected.length; i++) {
          expectedDescs[i] = expected[i].description;
        }

        expectedDesc = expected.length > 1
          ? expectedDescs.slice(0, -1).join(", ")
              + " or "
              + expectedDescs[expected.length - 1]
          : expectedDescs[0];

        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
      }

      var posDetails = peg$computePosDetails(pos),
          found      = pos < input.length ? input.charAt(pos) : null;

      if (expected !== null) {
        cleanupExpected(expected);
      }

      return new SyntaxError(
        message !== null ? message : buildMessage(expected, found),
        expected,
        found,
        pos,
        posDetails.line,
        posDetails.column
      );
    }

    function peg$parsestart() {
      var s0;

      s0 = peg$parsemessageFormatPattern();

      return s0;
    }

    function peg$parsemessageFormatPattern() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsemessageFormatElement();
      if (s2 === peg$FAILED) {
        s2 = peg$parsestring();
        if (s2 === peg$FAILED) {
          s2 = peg$parseoctothorpe();
        }
      }
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsemessageFormatElement();
        if (s2 === peg$FAILED) {
          s2 = peg$parsestring();
          if (s2 === peg$FAILED) {
            s2 = peg$parseoctothorpe();
          }
        }
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c1(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parsemessageFormatElement() {
      var s0, s1, s2, s3, s4, s5, s6;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 123) {
        s1 = peg$c3;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c4); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseid();
          if (s3 !== peg$FAILED) {
            s4 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 44) {
              s5 = peg$c6;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c7); }
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parseelementFormat();
              if (s6 !== peg$FAILED) {
                s5 = [s5, s6];
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$c2;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$c2;
            }
            if (s4 === peg$FAILED) {
              s4 = peg$c5;
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parse_();
              if (s5 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 125) {
                  s6 = peg$c8;
                  peg$currPos++;
                } else {
                  s6 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c9); }
                }
                if (s6 !== peg$FAILED) {
                  peg$reportedPos = s0;
                  s1 = peg$c10(s3, s4);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$c2;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c2;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c2;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c2;
      }

      return s0;
    }

    function peg$parseelementFormat() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        if (input.substr(peg$currPos, 6) === peg$c11) {
          s2 = peg$c11;
          peg$currPos += 6;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c12); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parse_();
          if (s3 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 44) {
              s4 = peg$c6;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c7); }
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parse_();
              if (s5 !== peg$FAILED) {
                s6 = peg$parsepluralFormatPattern();
                if (s6 !== peg$FAILED) {
                  s7 = peg$parse_();
                  if (s7 !== peg$FAILED) {
                    peg$reportedPos = s0;
                    s1 = peg$c13(s2, s6);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c2;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c2;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c2;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c2;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c2;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parse_();
        if (s1 !== peg$FAILED) {
          if (input.substr(peg$currPos, 13) === peg$c14) {
            s2 = peg$c14;
            peg$currPos += 13;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c15); }
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$parse_();
            if (s3 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 44) {
                s4 = peg$c6;
                peg$currPos++;
              } else {
                s4 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c7); }
              }
              if (s4 !== peg$FAILED) {
                s5 = peg$parse_();
                if (s5 !== peg$FAILED) {
                  s6 = peg$parsepluralFormatPattern();
                  if (s6 !== peg$FAILED) {
                    s7 = peg$parse_();
                    if (s7 !== peg$FAILED) {
                      peg$reportedPos = s0;
                      s1 = peg$c13(s2, s6);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$c2;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c2;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c2;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c2;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c2;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$parse_();
          if (s1 !== peg$FAILED) {
            if (input.substr(peg$currPos, 6) === peg$c16) {
              s2 = peg$c16;
              peg$currPos += 6;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c17); }
            }
            if (s2 !== peg$FAILED) {
              s3 = peg$parse_();
              if (s3 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 44) {
                  s4 = peg$c6;
                  peg$currPos++;
                } else {
                  s4 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c7); }
                }
                if (s4 !== peg$FAILED) {
                  s5 = peg$parse_();
                  if (s5 !== peg$FAILED) {
                    s6 = peg$parseselectFormatPattern();
                    if (s6 !== peg$FAILED) {
                      s7 = peg$parse_();
                      if (s7 !== peg$FAILED) {
                        peg$reportedPos = s0;
                        s1 = peg$c13(s2, s6);
                        s0 = s1;
                      } else {
                        peg$currPos = s0;
                        s0 = peg$c2;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$c2;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c2;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c2;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c2;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c2;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            s1 = peg$parse_();
            if (s1 !== peg$FAILED) {
              s2 = peg$parseid();
              if (s2 !== peg$FAILED) {
                s3 = [];
                s4 = peg$parseargStylePattern();
                while (s4 !== peg$FAILED) {
                  s3.push(s4);
                  s4 = peg$parseargStylePattern();
                }
                if (s3 !== peg$FAILED) {
                  peg$reportedPos = s0;
                  s1 = peg$c18(s2, s3);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$c2;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c2;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c2;
            }
          }
        }
      }

      return s0;
    }

    function peg$parsepluralFormatPattern() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseoffsetPattern();
      if (s1 === peg$FAILED) {
        s1 = peg$c5;
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parsepluralForm();
        if (s3 !== peg$FAILED) {
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$parsepluralForm();
          }
        } else {
          s2 = peg$c2;
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c19(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c2;
      }

      return s0;
    }

    function peg$parseoffsetPattern() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        if (input.substr(peg$currPos, 6) === peg$c20) {
          s2 = peg$c20;
          peg$currPos += 6;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c21); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parse_();
          if (s3 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 58) {
              s4 = peg$c22;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c23); }
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parse_();
              if (s5 !== peg$FAILED) {
                s6 = peg$parsedigits();
                if (s6 !== peg$FAILED) {
                  s7 = peg$parse_();
                  if (s7 !== peg$FAILED) {
                    peg$reportedPos = s0;
                    s1 = peg$c24(s6);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c2;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c2;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c2;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c2;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c2;
      }

      return s0;
    }

    function peg$parsepluralForm() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsepluralKey();
        if (s2 !== peg$FAILED) {
          s3 = peg$parse_();
          if (s3 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 123) {
              s4 = peg$c3;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c4); }
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parse_();
              if (s5 !== peg$FAILED) {
                s6 = peg$parsemessageFormatPattern();
                if (s6 !== peg$FAILED) {
                  s7 = peg$parse_();
                  if (s7 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 125) {
                      s8 = peg$c8;
                      peg$currPos++;
                    } else {
                      s8 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c9); }
                    }
                    if (s8 !== peg$FAILED) {
                      peg$reportedPos = s0;
                      s1 = peg$c25(s2, s6);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$c2;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c2;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c2;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c2;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c2;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c2;
      }

      return s0;
    }

    function peg$parsepluralKey() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = peg$parseid();
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c26(s1);
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 61) {
          s1 = peg$c27;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c28); }
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parsedigits();
          if (s2 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c24(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      }

      return s0;
    }

    function peg$parseselectFormatPattern() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseselectForm();
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parseselectForm();
        }
      } else {
        s1 = peg$c2;
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c29(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseselectForm() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseid();
        if (s2 !== peg$FAILED) {
          s3 = peg$parse_();
          if (s3 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 123) {
              s4 = peg$c3;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c4); }
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parse_();
              if (s5 !== peg$FAILED) {
                s6 = peg$parsemessageFormatPattern();
                if (s6 !== peg$FAILED) {
                  s7 = peg$parse_();
                  if (s7 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 125) {
                      s8 = peg$c8;
                      peg$currPos++;
                    } else {
                      s8 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c9); }
                    }
                    if (s8 !== peg$FAILED) {
                      peg$reportedPos = s0;
                      s1 = peg$c25(s2, s6);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$c2;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c2;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c2;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c2;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c2;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c2;
      }

      return s0;
    }

    function peg$parseargStylePattern() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 44) {
          s2 = peg$c6;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c7); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parse_();
          if (s3 !== peg$FAILED) {
            s4 = peg$parseid();
            if (s4 !== peg$FAILED) {
              s5 = peg$parse_();
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c30(s4);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c2;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c2;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c2;
      }

      return s0;
    }

    function peg$parseoctothorpe() {
      var s0, s1;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 35) {
        s1 = peg$c31;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c32); }
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c33();
      }
      s0 = s1;

      return s0;
    }

    function peg$parsestring() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsechars();
      if (s2 === peg$FAILED) {
        s2 = peg$parsewhitespace();
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parsechars();
          if (s2 === peg$FAILED) {
            s2 = peg$parsewhitespace();
          }
        }
      } else {
        s1 = peg$c2;
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c34(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseid() {
      var s0, s1, s2, s3, s4, s5, s6;

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = peg$currPos;
        if (peg$c36.test(input.charAt(peg$currPos))) {
          s4 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c37); }
        }
        if (s4 !== peg$FAILED) {
          s5 = [];
          if (peg$c38.test(input.charAt(peg$currPos))) {
            s6 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s6 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c39); }
          }
          while (s6 !== peg$FAILED) {
            s5.push(s6);
            if (peg$c38.test(input.charAt(peg$currPos))) {
              s6 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c39); }
            }
          }
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$c2;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$c2;
        }
        if (s3 !== peg$FAILED) {
          s3 = input.substring(s2, peg$currPos);
        }
        s2 = s3;
        if (s2 !== peg$FAILED) {
          s3 = peg$parse_();
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c40(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c2;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c35); }
      }

      return s0;
    }

    function peg$parsechars() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsechar();
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parsechar();
        }
      } else {
        s1 = peg$c2;
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c41(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parsechar() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      if (peg$c42.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c43); }
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c44(s1);
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 2) === peg$c45) {
          s1 = peg$c45;
          peg$currPos += 2;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c46); }
        }
        if (s1 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c47();
        }
        s0 = s1;
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.substr(peg$currPos, 2) === peg$c48) {
            s1 = peg$c48;
            peg$currPos += 2;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c49); }
          }
          if (s1 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c50();
          }
          s0 = s1;
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 2) === peg$c51) {
              s1 = peg$c51;
              peg$currPos += 2;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c52); }
            }
            if (s1 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c53();
            }
            s0 = s1;
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              if (input.substr(peg$currPos, 2) === peg$c54) {
                s1 = peg$c54;
                peg$currPos += 2;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c55); }
              }
              if (s1 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c56();
              }
              s0 = s1;
              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                if (input.substr(peg$currPos, 2) === peg$c57) {
                  s1 = peg$c57;
                  peg$currPos += 2;
                } else {
                  s1 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c58); }
                }
                if (s1 !== peg$FAILED) {
                  s2 = peg$parsehexDigit();
                  if (s2 !== peg$FAILED) {
                    s3 = peg$parsehexDigit();
                    if (s3 !== peg$FAILED) {
                      s4 = peg$parsehexDigit();
                      if (s4 !== peg$FAILED) {
                        s5 = peg$parsehexDigit();
                        if (s5 !== peg$FAILED) {
                          peg$reportedPos = s0;
                          s1 = peg$c59(s2, s3, s4, s5);
                          s0 = s1;
                        } else {
                          peg$currPos = s0;
                          s0 = peg$c2;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$c2;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$c2;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c2;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c2;
                }
              }
            }
          }
        }
      }

      return s0;
    }

    function peg$parsedigits() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      if (peg$c60.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c61); }
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          if (peg$c60.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c61); }
          }
        }
      } else {
        s1 = peg$c2;
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c62(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parsehexDigit() {
      var s0;

      if (peg$c63.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c64); }
      }

      return s0;
    }

    function peg$parse_() {
      var s0, s1, s2;

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsewhitespace();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsewhitespace();
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c66(s1);
      }
      s0 = s1;
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c65); }
      }

      return s0;
    }

    function peg$parsewhitespace() {
      var s0;

      if (peg$c67.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c68); }
      }

      return s0;
    }

    peg$result = peg$startRuleFunction();

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail({ type: "end", description: "end of input" });
      }

      throw peg$buildException(null, peg$maxFailExpected, peg$maxFailPos);
    }
  }

  return {
    SyntaxError: SyntaxError,
    parse:       parse
  };
}()).parse;


/** @file messageformat.js - ICU PluralFormat + SelectFormat for JavaScript
 *  @author Alex Sexton - @SlexAxton
 *  @version 0.3.0-1
 *  @copyright 2012-2015 Alex Sexton, Eemeli Aro, and Contributors
 *  @license To use or fork, MIT. To contribute back, Dojo CLA  */


/** Utility function for quoting an Object's key value iff required
 *  @private  */
function propname(key, obj) {
  if (/^[A-Z_$][0-9A-Z_$]*$/i.test(key)) {
    return obj ? obj + '.' + key : key;
  } else {
    var jkey = JSON.stringify(key);
    return obj ? obj + '[' + jkey + ']' : jkey;
  }
};


/** Create a new message formatter
 *
 *  @class
 *  @global
 *  @param {string|string[]} [locale="en"] - The locale to use, with fallbacks
 *  @param {function} [pluralFunc] - Optional custom pluralization function
 *  @param {function[]} [formatters] - Optional custom formatting functions  */
function MessageFormat(locale, pluralFunc, formatters) {
  this.lc = [locale];  
  this.runtime.pluralFuncs = {};
  this.runtime.pluralFuncs[this.lc[0]] = pluralFunc;
  this.runtime.fmt = {};
  if (formatters) for (var f in formatters) {
    this.runtime.fmt[f] = formatters[f];
  }
}




/** Parse an input string to its AST
 *
 *  Precompiled from `lib/messageformat-parser.pegjs` by
 *  {@link http://pegjs.org/ PEG.js}. Included in MessageFormat object
 *  to enable testing.
 *
 *  @private  */



/** Pluralization functions from
 *  {@link http://github.com/eemeli/make-plural.js make-plural}
 *
 *  @memberof MessageFormat
 *  @type Object.<string,function>  */
MessageFormat.plurals = {};


/** Default number formatting functions in the style of ICU's
 *  {@link http://icu-project.org/apiref/icu4j/com/ibm/icu/text/MessageFormat.html simpleArg syntax}
 *  implemented using the
 *  {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl Intl}
 *  object defined by ECMA-402.
 *
 *  **Note**: Intl is not defined in default Node until 0.11.15 / 0.12.0, so
 *  earlier versions require a {@link https://www.npmjs.com/package/intl polyfill}.
 *  Therefore {@link MessageFormat.withIntlSupport} needs to be true for these
 *  functions to be available for inclusion in the output.
 *
 *  @see MessageFormat#setIntlSupport
 *
 *  @namespace
 *  @memberof MessageFormat
 *  @property {function} number - Represent a number as an integer, percent or currency value
 *  @property {function} date - Represent a date as a full/long/default/short string
 *  @property {function} time - Represent a time as a full/long/default/short string
 *
 *  @example
 *  > var MessageFormat = require('messageformat');
 *  > var mf = (new MessageFormat('en')).setIntlSupport(true);
 *  > mf.currency = 'EUR';
 *  > var mfunc = mf.compile("The total is {V,number,currency}.");
 *  > mfunc({V:5.5})
 *  "The total is €5.50."
 *
 *  @example
 *  > var MessageFormat = require('messageformat');
 *  > var mf = new MessageFormat('en', null, {number: MessageFormat.number});
 *  > mf.currency = 'EUR';
 *  > var mfunc = mf.compile("The total is {V,number,currency}.");
 *  > mfunc({V:5.5})
 *  "The total is €5.50."  */
MessageFormat.formatters = {};

/** Enable or disable support for the default formatters, which require the
 *  `Intl` object. Note that this can't be autodetected, as the environment
 *  in which the formatted text is compiled into Javascript functions is not
 *  necessarily the same environment in which they will get executed.
 *
 *  @see MessageFormat.formatters
 *
 *  @memberof MessageFormat
 *  @param {boolean} [enable=true]
 *  @returns {Object} The MessageFormat instance, to allow for chaining
 *  @example
 *  > var Intl = require('intl');
 *  > var MessageFormat = require('messageformat');
 *  > var mf = (new MessageFormat('en')).setIntlSupport(true);
 *  > mf.currency = 'EUR';
 *  > mf.compile("The total is {V,number,currency}.")({V:5.5});
 *  "The total is €5.50."  */



/** A set of utility functions that are called by the compiled Javascript
 *  functions, these are included locally in the output of {@link
 *  MessageFormat#compile compile()}.
 *
 *  @namespace
 *  @memberof MessageFormat  */
MessageFormat.prototype.runtime = {

  /** Utility function for `#` in plural rules
   *
   *  @param {number} value - The value to operate on
   *  @param {number} [offset=0] - An optional offset, set by the surrounding context  */
  number: function(value, offset) {
    if (isNaN(value)) throw new Error("'" + value + "' isn't a number.");
    return value - (offset || 0);
  },

  /** Utility function for `{N, plural|selectordinal, ...}`
   *
   *  @param {number} value - The key to use to find a pluralization rule
   *  @param {number} offset - An offset to apply to `value`
   *  @param {function} lcfunc - A locale function from `pluralFuncs`
   *  @param {Object.<string,string>} data - The object from which results are looked up
   *  @param {?boolean} isOrdinal - If true, use ordinal rather than cardinal rules
   *  @returns {string} The result of the pluralization  */
  plural: function(value, offset, lcfunc, data, isOrdinal) {
    if ({}.hasOwnProperty.call(data, value)) return data[value]();
    if (offset) value -= offset;
    var key = lcfunc(value, isOrdinal);
    if (key in data) return data[key]();
    return data.other();
  },

  /** Utility function for `{N, select, ...}`
   *
   *  @param {number} value - The key to use to find a selection
   *  @param {Object.<string,string>} data - The object from which results are looked up
   *  @returns {string} The result of the select statement  */
  select: function(value, data) {
    if ({}.hasOwnProperty.call(data, value)) return data[value]();
    return data.other()
  },

  /** Pluralization functions included in compiled output
   *  @instance
   *  @type Object.<string,function>  */
  pluralFuncs: {},

  /** Custom formatting functions called by `{var, fn[, args]*}` syntax
   *
   *  For examples, see {@link MessageFormat.formatters}
   *
   *  @instance
   *  @see MessageFormat.formatters
   *  @type Object.<string,function>  */
  fmt: {},

  /** Custom stringifier to clean up browser inconsistencies
   *  @instance  */
  toString: function () {
    var _stringify = function(o, level) {
      if (typeof o != 'object') {
        var funcStr = o.toString().replace(/^(function )\w*/, '$1');
        var indent = /([ \t]*)\S.*$/.exec(funcStr);
        return indent ? funcStr.replace(new RegExp('^' + indent[1], 'mg'), '') : funcStr;
      }
      var s = [];
      for (var i in o) if (i != 'toString') {
        if (level == 0) s.push('var ' + i + ' = ' + _stringify(o[i], level + 1) + ';\n');
        else s.push(propname(i) + ': ' + _stringify(o[i], level + 1));
      }
      if (level == 0) return s.join('');
      if (s.length == 0) return '{}';
      var indent = '  '; while (--level) indent += '  ';
      return '{\n' + s.join(',\n').replace(/^/gm, indent) + '\n}';
    };
    return _stringify(this, 0);
  }
};


/** Recursively map an AST to its resulting string
 *
 *  @memberof MessageFormat
 *
 *  @param ast - the Ast node for which the JS code should be generated
 *
 *  @private  */
MessageFormat.prototype._precompile = function(ast, data) {
  data = data || { keys: {}, offset: {} };
  var r = [], i, tmp, args = [];

  switch ( ast.type ) {
    case 'messageFormatPattern':
      for ( i = 0; i < ast.statements.length; ++i ) {
        r.push(this._precompile( ast.statements[i], data ));
      }
      tmp = r.join(' + ') || '""';
      return data.pf_count ? tmp : 'function(d) { return ' + tmp + '; }';

    case 'messageFormatElement':
      data.pf_count = data.pf_count || 0;
      if ( ast.output ) {
        return propname(ast.argumentIndex, 'd');
      }
      else {
        data.keys[data.pf_count] = ast.argumentIndex;
        return this._precompile( ast.elementFormat, data );
      }
      return '';

    case 'elementFormat':
      args = [ propname(data.keys[data.pf_count], 'd') ];
      switch (ast.key) {
        case 'select':
          args.push(this._precompile(ast.val, data));
          return 'select(' + args.join(', ') + ')';
        case 'selectordinal':
          args = args.concat([ 0, propname(this.lc[0], 'pluralFuncs'), this._precompile(ast.val, data), 1 ]);
          return 'plural(' + args.join(', ') + ')';
        case 'plural':
          data.offset[data.pf_count || 0] = ast.val.offset || 0;
          args = args.concat([ data.offset[data.pf_count] || 0, propname(this.lc[0], 'pluralFuncs'), this._precompile(ast.val, data) ]);
          return 'plural(' + args.join(', ') + ')';
        default:
          if (this.withIntlSupport && !(ast.key in this.runtime.fmt) && (ast.key in MessageFormat.formatters)) {
            tmp = MessageFormat.formatters[ast.key];
            this.runtime.fmt[ast.key] = (typeof tmp(this) == 'function') ? tmp(this) : tmp;
          }
          args.push(JSON.stringify(this.lc));
          if (ast.val && ast.val.length) args.push(JSON.stringify(ast.val.length == 1 ? ast.val[0] : ast.val));
          return 'fmt.' + ast.key + '(' + args.join(', ') + ')';
      }

    case 'pluralFormatPattern':
    case 'selectFormatPattern':
      data.pf_count = data.pf_count || 0;
      if (ast.type == 'selectFormatPattern') data.offset[data.pf_count] = 0;
      var needOther = true;
      for (i = 0; i < ast.pluralForms.length; ++i) {
        var key = ast.pluralForms[i].key;
        if (key === 'other') needOther = false;
        var data_copy = JSON.parse(JSON.stringify(data));
        data_copy.pf_count++;
        r.push(propname(key) + ': function() { return ' + this._precompile(ast.pluralForms[i].val, data_copy) + ';}');
      }
      if (needOther) throw new Error("No 'other' form found in " + ast.type + " " + data.pf_count);
      return '{ ' + r.join(', ') + ' }';

    case 'string':
      return JSON.stringify(ast.val || "");

    case 'octothorpe':
      if (!data.pf_count) return '"#"';
      args = [ propname(data.keys[data.pf_count-1], 'd') ];
      if (data.offset[data.pf_count-1]) args.push(data.offset[data.pf_count-1]);
      return 'number(' + args.join(', ') + ')';

    default:
      throw new Error( 'Bad AST type: ' + ast.type );
  }
};

/** Compile messages into an executable function with clean string
 *  representation.
 *
 *  If `messages` is a single string including ICU MessageFormat declarations,
 *  `opt` is ignored and the returned function takes a single Object parameter
 *  `d` representing each of the input's defined variables. The returned
 *  function will be defined in a local scope that includes all the required
 *  runtime variables.
 *
 *  If `messages` is a map of keys to strings, or a map of namespace keys to
 *  such key/string maps, the returned function will fill the specified global
 *  with javascript functions matching the structure of the input. In such use,
 *  the output of `compile()` is expected to be serialized using `.toString()`,
 *  and will include definitions of the runtime functions. If `opt.global` is
 *  null, calling the output function will return the object itself.
 *
 *  Together, the input parameters should match the following patterns:
 *  ```js
 *  messages = "string" || { key0: "string0", key1: "string1", ... } || {
 *    ns0: { key0: "string0", key1: "string1", ...  },
 *    ns1: { key0: "string0", key1: "string1", ...  },
 *    ...
 *  }
 *
 *  opt = null || {
 *    locale: null || {
 *      ns0: "lc0" || [ "lc0", ... ],
 *      ns1: "lc1" || [ "lc1", ... ],
 *      ...
 *    },
 *    global: null || "module.exports" || "exports" || "i18n" || ...
 *  }
 *  ```
 *
 *  @memberof MessageFormat
 *  @param {string|Object}
 *      messages - The input message(s) to be compiled, in ICU MessageFormat
 *  @param {Object} [opt={}] - Options controlling output for non-simple intput
 *  @param {Object} [opt.locale] - The locales to use for the messages, with a
 *      structure matching that of `messages`
 *  @param {string} [opt.global=""] - The global variable that the output
 *      function should use, or a null string for none. "exports" and
 *      "module.exports" are recognised as special cases.
 *  @returns {function} The first match found for the given locale(s)
 *
 *  @example
 * > var MessageFormat = require('messageformat'),
 * ...   mf = new MessageFormat('en'),
 * ...   mfunc0 = mf.compile('A {TYPE} example.');
 * > mfunc0({TYPE:'simple'})
 * 'A simple example.'
 * > mfunc0.toString()
 * 'function (d) { return "A " + d.TYPE + " example."; }'
 *
 *  @example
 * > var msgSet = { a: 'A {TYPE} example.',
 * ...              b: 'This has {COUNT, plural, one{one member} other{# members}}.' },
 * ...   mfuncSet = mf.compile(msgSet);
 * > mfuncSet().a({TYPE:'more complex'})
 * 'A more complex example.'
 * > mfuncSet().b({COUNT:2})
 * 'This has 2 members.'
 *
 * > console.log(mfuncSet.toString())
 * function anonymous() {
 * var number = function (value, offset) {
 *   if (isNaN(value)) throw new Error("'" + value + "' isn't a number.");
 *   return value - (offset || 0);
 * };
 * var plural = function (value, offset, lcfunc, data, isOrdinal) {
 *   if ({}.hasOwnProperty.call(data, value)) return data[value]();
 *   if (offset) value -= offset;
 *   var key = lcfunc(value, isOrdinal);
 *   if (key in data) return data[key]();
 *   return data.other();
 * };
 * var select = function (value, data) {
 *   if ({}.hasOwnProperty.call(data, value)) return data[value]();
 *   return data.other()
 * };
 * var pluralFuncs = {
 *   en: function (n, ord) {
 *     var s = String(n).split('.'), v0 = !s[1], t0 = Number(s[0]) == n,
 *         n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2);
 *     if (ord) return (n10 == 1 && n100 != 11) ? 'one'
 *         : (n10 == 2 && n100 != 12) ? 'two'
 *         : (n10 == 3 && n100 != 13) ? 'few'
 *         : 'other';
 *     return (n == 1 && v0) ? 'one' : 'other';
 *   }
 * };
 * var fmt = {};
 *
 * return {
 *   a: function(d) { return "A " + d.TYPE + " example."; },
 *   b: function(d) { return "This has " + plural(d.COUNT, 0, pluralFuncs.en, { one: function() { return "one member";}, other: function() { return number(d.COUNT)+" members";} }) + "."; }
 * }
 * }
 *
 *  @example
 * > mf.runtime.pluralFuncs.fi = MessageFormat.plurals.fi;
 * > var multiSet = { en: { a: 'A {TYPE} example.',
 * ...                      b: 'This is the {COUNT, selectordinal, one{#st} two{#nd} few{#rd} other{#th}} example.' },
 * ...                fi: { a: '{TYPE} esimerkki.',
 * ...                      b: 'Tämä on {COUNT, selectordinal, other{#.}} esimerkki.' } },
 * ...   multiSetLocales = { en: 'en', fi: 'fi' },
 * ...   mfuncSet = mf.compile(multiSet, { locale: multiSetLocales, global: 'i18n' });
 * > mfuncSet(this);
 * > i18n.en.b({COUNT:3})
 * 'This is the 3rd example.'
 * > i18n.fi.b({COUNT:3})
 * 'Tämä on 3. esimerkki.'  */
MessageFormat.prototype.compile = function ( messages, opt ) {
  var r = {}, lc0 = this.lc,
      compileMsg = function(self, msg) {
        try {
          var ast = MessageFormat._parse(msg);
          return self._precompile(ast);
        } catch (e) {
          throw new Error((ast ? 'Precompiler' : 'Parser') + ' error: ' + e.toString());
        }
      },
      stringify = function(r, level) {
        if (!level) level = 0;
        if (typeof r != 'object') return r;
        var o = [], indent = '';
        for (var i = 0; i < level; ++i) indent += '  ';
        for (var k in r) o.push('\n' + indent + '  ' + propname(k) + ': ' + stringify(r[k], level + 1));
        return '{' + o.join(',') + '\n' + indent + '}';
      };

  if (typeof messages == 'string') {
    var f = new Function(
        'number, plural, select, pluralFuncs, fmt',
        'return ' + compileMsg(this, messages));
    return f(this.runtime.number, this.runtime.plural, this.runtime.select,
        this.runtime.pluralFuncs, this.runtime.fmt);
  }

  opt = opt || {};

  for (var ns in messages) {
    if (opt.locale) this.lc = opt.locale[ns] && [].concat(opt.locale[ns]) || lc0;
    if (typeof messages[ns] == 'string') {
      try { r[ns] = compileMsg(this, messages[ns]); }
      catch (e) { e.message = e.message.replace(':', ' with `' + ns + '`:'); throw e; }
    } else {
      r[ns] = {};
      for (var key in messages[ns]) {
        try { r[ns][key] = compileMsg(this, messages[ns][key]); }
        catch (e) { e.message = e.message.replace(':', ' with `' + key + '` in `' + ns + '`:'); throw e; }
      }
    }
  }

  this.lc = lc0;
  var s = this.runtime.toString() + '\n';
  switch (opt.global || '') {
    case 'exports':
      var o = [];
      for (var k in r) o.push(propname(k, 'exports') + ' = ' + stringify(r[k]));
      return new Function(s + o.join(';\n'));
    case 'module.exports':
      return new Function(s + 'module.exports = ' + stringify(r));
    case '':
      return new Function(s + 'return ' + stringify(r));
    default:
      return new Function('G', s + propname(opt.global, 'G') + ' = ' + stringify(r));
  }
};


return MessageFormat;
}());
/* eslint-enable */


var createErrorPluralModulePresence = function() {
	return createError( "E_MISSING_PLURAL_MODULE", "Plural module not loaded." );
};




var validateMessageBundle = function( cldr ) {
	validate(
		"E_MISSING_MESSAGE_BUNDLE",
		"Missing message bundle for locale `{locale}`.",
		cldr.attributes.bundle && cldr.get( "globalize-messages/{bundle}" ) !== undefined,
		{
			locale: cldr.locale
		}
	);
};




var validateMessagePresence = function( path, value ) {
	path = path.join( "/" );
	validate( "E_MISSING_MESSAGE", "Missing required message content `{path}`.",
		value !== undefined, { path: path } );
};




var validateMessageType = function( path, value ) {
	path = path.join( "/" );
	validate(
		"E_INVALID_MESSAGE",
		"Invalid message content `{path}`. {expected} expected.",
		typeof value === "string",
		{
			expected: "a string",
			path: path
		}
	);
};




var validateParameterTypeMessageVariables = function( value, name ) {
	validateParameterType(
		value,
		name,
		value === undefined || isPlainObject( value ) || Array.isArray( value ),
		"Array or Plain Object"
	);
};




var messageFormatterFn = function( formatter ) {
	return function messageFormatter( variables ) {
		if ( typeof variables === "number" || typeof variables === "string" ) {
			variables = [].slice.call( arguments, 0 );
		}
		validateParameterTypeMessageVariables( variables, "variables" );
		return formatter( variables );
	};
};




var messageFormatterRuntimeBind = function( cldr, messageformatter ) {
	var locale = cldr.locale,
		origToString = messageformatter.toString;

	messageformatter.toString = function() {
		var argNames, argValues, output,
			args = {};

		// Properly adjust SlexAxton/messageformat.js compiled variables with Globalize variables:
		output = origToString.call( messageformatter );

		if ( /number\(/.test( output ) ) {
			args.number = "messageFormat.number";
		}

		if ( /plural\(/.test( output ) ) {
			args.plural = "messageFormat.plural";
		}

		if ( /select\(/.test( output ) ) {
			args.select = "messageFormat.select";
		}

		output.replace( /pluralFuncs(\[([^\]]+)\]|\.([a-zA-Z]+))/, function( match ) {
			args.pluralFuncs = "{" +
				"\"" + locale + "\": Globalize(\"" + locale + "\").pluralGenerator()" +
				"}";
			return match;
		});

		argNames = Object.keys( args ).join( ", " );
		argValues = Object.keys( args ).map(function( key ) {
			return args[ key ];
		}).join( ", " );

		return "(function( " + argNames + " ) {\n" +
			"  return " + output + "\n" +
			"})(" + argValues + ")";
	};

	return messageformatter;
};




var slice = [].slice;

/**
 * .loadMessages( json )
 *
 * @json [JSON]
 *
 * Load translation data.
 */
Globalize.loadMessages = function( json ) {
	var locale,
		customData = {
			"globalize-messages": json,
			"main": {}
		};

	validateParameterPresence( json, "json" );
	validateParameterTypePlainObject( json, "json" );

	// Set available bundles by populating customData main dataset.
	for ( locale in json ) {
		if ( json.hasOwnProperty( locale ) ) {
			customData.main[ locale ] = {};
		}
	}

	Cldr.load( customData );
};

/**
 * .messageFormatter( path )
 *
 * @path [String or Array]
 *
 * Format a message given its path.
 */
Globalize.messageFormatter =
Globalize.prototype.messageFormatter = function( path ) {
	var cldr, formatter, message, pluralGenerator, returnFn,
		args = slice.call( arguments, 0 );

	validateParameterPresence( path, "path" );
	validateParameterType( path, "path", typeof path === "string" || Array.isArray( path ),
		"a String nor an Array" );

	path = alwaysArray( path );
	cldr = this.cldr;

	validateDefaultLocale( cldr );
	validateMessageBundle( cldr );

	message = cldr.get( [ "globalize-messages/{bundle}" ].concat( path ) );
	validateMessagePresence( path, message );

	// If message is an Array, concatenate it.
	if ( Array.isArray( message ) ) {
		message = message.join( " " );
	}
	validateMessageType( path, message );

	// Is plural module present? Yes, use its generator. Nope, use an error generator.
	pluralGenerator = this.plural !== undefined ?
		this.pluralGenerator() :
		createErrorPluralModulePresence;

	formatter = new MessageFormat( cldr.locale, pluralGenerator ).compile( message );

	returnFn = messageFormatterFn( formatter );

	runtimeBind( args, cldr, returnFn,
		[ messageFormatterRuntimeBind( cldr, formatter ), pluralGenerator ] );

	return returnFn;
};

/**
 * .formatMessage( path [, variables] )
 *
 * @path [String or Array]
 *
 * @variables [Number, String, Array or Object]
 *
 * Format a message given its path.
 */
Globalize.formatMessage =
Globalize.prototype.formatMessage = function( path /* , variables */ ) {
	return this.messageFormatter( path ).apply( {}, slice.call( arguments, 1 ) );
};

return Globalize;




}));

/**
 * Globalize v1.7.0
 *
 * https://github.com/globalizejs/globalize
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-08-02T11:53Z
 */
/*!
 * Globalize v1.7.0 2021-08-02T11:53Z Released under the MIT license
 * http://git.io/TrdQbw
 */
(function( root, factory ) {

	// UMD returnExports
	if ( typeof define === "function" && define.amd ) {

		// AMD
		define([
			"cldr",
			"../globalize",
			"cldr/event",
			"cldr/supplemental"
		], factory );
	} else if ( typeof exports === "object" ) {

		// Node, CommonJS
		module.exports = factory( require( "cldrjs" ), require( "../globalize" ) );
	} else {

		// Global
		factory( root.Cldr, root.Globalize );
	}
}(this, function( Cldr, Globalize ) {

var createError = Globalize._createError,
	partsJoin = Globalize._partsJoin,
	partsPush = Globalize._partsPush,
	regexpEscape = Globalize._regexpEscape,
	runtimeBind = Globalize._runtimeBind,
	stringPad = Globalize._stringPad,
	validateCldr = Globalize._validateCldr,
	validateDefaultLocale = Globalize._validateDefaultLocale,
	validateParameterPresence = Globalize._validateParameterPresence,
	validateParameterRange = Globalize._validateParameterRange,
	validateParameterType = Globalize._validateParameterType,
	validateParameterTypePlainObject = Globalize._validateParameterTypePlainObject;


var createErrorUnsupportedFeature = function( feature ) {
	return createError( "E_UNSUPPORTED", "Unsupported {feature}.", {
		feature: feature
	});
};




var validateParameterTypeNumber = function( value, name ) {
	validateParameterType(
		value,
		name,
		value === undefined || typeof value === "number",
		"Number"
	);
};




var validateParameterTypeString = function( value, name ) {
	validateParameterType(
		value,
		name,
		value === undefined || typeof value === "string",
		"a string"
	);
};




var numberFormatterFn = function( numberToPartsFormatter ) {
	return function numberFormatter( value ) {
		return partsJoin( numberToPartsFormatter( value ));
	};
};




/**
 * NumberingSystem( cldr )
 *
 * - http://www.unicode.org/reports/tr35/tr35-numbers.html#otherNumberingSystems
 * - http://cldr.unicode.org/index/bcp47-extension
 * - http://www.unicode.org/reports/tr35/#u_Extension
 */
var numberNumberingSystem = function( cldr ) {
	var nu = cldr.attributes[ "u-nu" ];

	if ( nu ) {
		if ( nu === "traditio" ) {
			nu = "traditional";
		}
		if ( [ "native", "traditional", "finance" ].indexOf( nu ) !== -1 ) {

			// Unicode locale extension `u-nu` is set using either (native, traditional or
			// finance). So, lookup the respective locale's numberingSystem and return it.
			return cldr.main([ "numbers/otherNumberingSystems", nu ]);
		}

		// Unicode locale extension `u-nu` is set with an explicit numberingSystem. Return it.
		return nu;
	}

	// Return the default numberingSystem.
	return cldr.main( "numbers/defaultNumberingSystem" );
};




/**
 * Compact( name, cldr )
 *
 * @compactType [String] Compact mode, `short` or `long`.
 *
 * @cldr [Cldr instance].
 *
 * Return the localized compact map for the given compact mode.
 */
var numberCompact = function( compactType, cldr ) {
	var maxExponent = 0;

	var object = cldr.main([
		"numbers/decimalFormats-numberSystem-" + numberNumberingSystem( cldr ),
		compactType,
		"decimalFormat"
	]);

	object = Object.keys( object ).reduce(function( newObject, compactKey ) {
		var numberExponent = compactKey.split( "0" ).length - 1;
		var pluralForm = compactKey.split( "-" )[ 2 ];
		newObject[ numberExponent ] = newObject[ numberExponent ] || {};
		newObject[ numberExponent ][ pluralForm ] = object[ compactKey ];
		maxExponent = Math.max( numberExponent, maxExponent );
		return newObject;
	}, {});

	object.maxExponent = maxExponent;

	return object;
};




/**
 * nuMap( cldr )
 *
 * @cldr [Cldr instance].
 *
 * Return digits map if numbering system is different than `latn`.
 */
var numberNumberingSystemDigitsMap = function( cldr ) {
	var aux,
		nu = numberNumberingSystem( cldr );

	if ( nu === "latn" ) {
		return;
	}

	aux = cldr.supplemental([ "numberingSystems", nu ]);

	if ( aux._type !== "numeric" ) {
		throw createErrorUnsupportedFeature( "`" + aux._type + "` numbering system" );
	}

	return aux._digits;
};




/**
 * EBNF representation:
 *
 * number_pattern_re =        prefix?
 *                            padding?
 *                            (integer_fraction_pattern | significant_pattern)
 *                            scientific_notation?
 *                            suffix?
 *
 * prefix =                   non_number_stuff
 *
 * padding =                  "*" regexp(.)
 *
 * integer_fraction_pattern = integer_pattern
 *                            fraction_pattern?
 *
 * integer_pattern =          regexp([#,]*[0,]*0+)
 *
 * fraction_pattern =         "." regexp(0*[0-9]*#*)
 *
 * significant_pattern =      regexp([#,]*@+#*)
 *
 * scientific_notation =      regexp(E\+?0+)
 *
 * suffix =                   non_number_stuff
 *
 * non_number_stuff =         regexp(('[^']+'|''|[^*#@0,.E])*)
 *
 *
 * Regexp groups:
 *
 *  0: number_pattern_re
 *  1: prefix
 *  2: -
 *  3: -
 *  4: padding
 *  5: (integer_fraction_pattern | significant_pattern)
 *  6: integer_fraction_pattern
 *  7: integer_pattern
 *  8: fraction_pattern
 *  9: significant_pattern
 * 10: scientific_notation
 * 11: suffix
 * 12: -
 */
var numberPatternRe = ( /^(('([^']|'')*'|[^*#@0,.E])*)(\*.)?((([#,]*[0,]*0+)(\.0*[0-9]*#*)?)|([#,]*@+#*))(E\+?0+)?(('[^']+'|''|[^*#@0,.E])*)$/ );




/**
 * format( number, pattern )
 *
 * @number [Number].
 *
 * @pattern [String] raw pattern for numbers.
 *
 * Return the formatted number.
 * ref: http://www.unicode.org/reports/tr35/tr35-numbers.html
 */
var numberPatternProperties = function( pattern ) {
	var aux1, aux2, fractionPattern, integerFractionOrSignificantPattern, integerPattern,
		maximumFractionDigits, maximumSignificantDigits, minimumFractionDigits,
		minimumIntegerDigits, minimumSignificantDigits, padding, prefix, primaryGroupingSize,
		roundIncrement, scientificNotation, secondaryGroupingSize, significantPattern, suffix;

	pattern = pattern.match( numberPatternRe );
	if ( !pattern ) {
		throw new Error( "Invalid pattern: " + pattern );
	}

	prefix = pattern[ 1 ];
	padding = pattern[ 4 ];
	integerFractionOrSignificantPattern = pattern[ 5 ];
	significantPattern = pattern[ 9 ];
	scientificNotation = pattern[ 10 ];
	suffix = pattern[ 11 ];

	// Significant digit format
	if ( significantPattern ) {
		significantPattern.replace( /(@+)(#*)/, function( _match, minimumSignificantDigitsMatch, maximumSignificantDigitsMatch ) {
			minimumSignificantDigits = minimumSignificantDigitsMatch.length;
			maximumSignificantDigits = minimumSignificantDigits +
				maximumSignificantDigitsMatch.length;
		});

	// Integer and fractional format
	} else {
		fractionPattern = pattern[ 8 ];
		integerPattern = pattern[ 7 ];

		if ( fractionPattern ) {

			// Minimum fraction digits, and rounding.
			fractionPattern.replace( /[0-9]+/, function( match ) {
				minimumFractionDigits = match;
			});
			if ( minimumFractionDigits ) {
				roundIncrement = +( "0." + minimumFractionDigits );
				minimumFractionDigits = minimumFractionDigits.length;
			} else {
				minimumFractionDigits = 0;
			}

			// Maximum fraction digits
			// 1: ignore decimal character
			maximumFractionDigits = fractionPattern.length - 1; /* 1 */
		} else {
			minimumFractionDigits = 0;
			maximumFractionDigits = 0;
		}

		// Minimum integer digits
		integerPattern.replace( /0+$/, function( match ) {
			minimumIntegerDigits = match.length;
		});
	}

	// Scientific notation
	if ( scientificNotation ) {
		throw createErrorUnsupportedFeature({
			feature: "scientific notation (not implemented)"
		});
	}

	// Padding
	if ( padding ) {
		throw createErrorUnsupportedFeature({
			feature: "padding (not implemented)"
		});
	}

	// Grouping
	if ( ( aux1 = integerFractionOrSignificantPattern.lastIndexOf( "," ) ) !== -1 ) {

		// Primary grouping size is the interval between the last group separator and the end of
		// the integer (or the end of the significant pattern).
		aux2 = integerFractionOrSignificantPattern.split( "." )[ 0 ];
		primaryGroupingSize = aux2.length - aux1 - 1;

		// Secondary grouping size is the interval between the last two group separators.
		if ( ( aux2 = integerFractionOrSignificantPattern.lastIndexOf( ",", aux1 - 1 ) ) !== -1 ) {
			secondaryGroupingSize = aux1 - 1 - aux2;
		}
	}

	// Return:
	//  0: @prefix String
	//  1: @padding Array [ <character>, <count> ] TODO
	//  2: @minimumIntegerDigits non-negative integer Number value indicating the minimum integer
	//        digits to be used. Numbers will be padded with leading zeroes if necessary.
	//  3: @minimumFractionDigits and
	//  4: @maximumFractionDigits are non-negative integer Number values indicating the minimum and
	//        maximum fraction digits to be used. Numbers will be rounded or padded with trailing
	//        zeroes if necessary.
	//  5: @minimumSignificantDigits and
	//  6: @maximumSignificantDigits are positive integer Number values indicating the minimum and
	//        maximum fraction digits to be shown. Either none or both of these properties are
	//        present; if they are, they override minimum and maximum integer and fraction digits
	//        – the formatter uses however many integer and fraction digits are required to display
	//        the specified number of significant digits.
	//  7: @roundIncrement Decimal round increment or null
	//  8: @primaryGroupingSize
	//  9: @secondaryGroupingSize
	// 10: @suffix String
	return [
		prefix,
		padding,
		minimumIntegerDigits,
		minimumFractionDigits,
		maximumFractionDigits,
		minimumSignificantDigits,
		maximumSignificantDigits,
		roundIncrement,
		primaryGroupingSize,
		secondaryGroupingSize,
		suffix
	];
};




/**
 * Symbol( name, cldr )
 *
 * @name [String] Symbol name.
 *
 * @cldr [Cldr instance].
 *
 * Return the localized symbol given its name.
 */
var numberSymbol = function( name, cldr ) {
	return cldr.main([
		"numbers/symbols-numberSystem-" + numberNumberingSystem( cldr ),
		name
	]);
};




var numberSymbolName = {
	".": "decimal",
	",": "group",
	"%": "percentSign",
	"+": "plusSign",
	"-": "minusSign",
	"E": "exponential",
	"\u2030": "perMille"
};




/**
 * symbolMap( cldr )
 *
 * @cldr [Cldr instance].
 *
 * Return the (localized symbol, pattern symbol) key value pair, eg. {
 *   ".": "٫",
 *   ",": "٬",
 *   "%": "٪",
 *   ...
 * };
 */
var numberSymbolMap = function( cldr ) {
	var symbol,
		symbolMap = {};

	for ( symbol in numberSymbolName ) {
		symbolMap[ symbol ] = numberSymbol( numberSymbolName[ symbol ], cldr );
	}

	return symbolMap;
};




var numberTruncate = function( value ) {
	if ( isNaN( value ) ) {
		return NaN;
	}
	return Math[ value < 0 ? "ceil" : "floor" ]( value );
};




/**
 * round( method )
 *
 * @method [String] with either "round", "ceil", "floor", or "truncate".
 *
 * Return function( value, incrementOrExp ):
 *
 *   @value [Number] eg. 123.45.
 *
 *   @incrementOrExp [Number] optional, eg. 0.1; or
 *     [Object] Either { increment: <value> } or { exponent: <value> }
 *
 *   Return the rounded number, eg:
 *   - round( "round" )( 123.45 ): 123;
 *   - round( "ceil" )( 123.45 ): 124;
 *   - round( "floor" )( 123.45 ): 123;
 *   - round( "truncate" )( 123.45 ): 123;
 *   - round( "round" )( 123.45, 0.1 ): 123.5;
 *   - round( "round" )( 123.45, 10 ): 120;
 *
 *   Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
 *   Ref: #376
 */
var numberRound = function( method ) {
	method = method || "round";
	method = method === "truncate" ? numberTruncate : Math[ method ];

	return function( value, incrementOrExp ) {
		var exp, increment;

		value = +value;

		// If the value is not a number, return NaN.
		if ( isNaN( value ) ) {
			return NaN;
		}

		// Exponent given.
		if ( typeof incrementOrExp === "object" && incrementOrExp.exponent ) {
			exp = +incrementOrExp.exponent;
			increment = 1;

			if ( exp === 0 ) {
				return method( value );
			}

			// If the exp is not an integer, return NaN.
			if ( !( typeof exp === "number" && exp % 1 === 0 ) ) {
				return NaN;
			}

		// Increment given.
		} else {
			increment = +incrementOrExp || 1;

			if ( increment === 1 ) {
				return method( value );
			}

			// If the increment is not a number, return NaN.
			if ( isNaN( increment ) ) {
				return NaN;
			}

			increment = increment.toExponential().split( "e" );
			exp = +increment[ 1 ];
			increment = +increment[ 0 ];
		}

		// Shift & Round
		value = value.toString().split( "e" );
		value[ 0 ] = +value[ 0 ] / increment;
		value[ 1 ] = value[ 1 ] ? ( +value[ 1 ] - exp ) : -exp;
		value = method( +( value[ 0 ] + "e" + value[ 1 ] ) );

		// Shift back
		value = value.toString().split( "e" );
		value[ 0 ] = +value[ 0 ] * increment;
		value[ 1 ] = value[ 1 ] ? ( +value[ 1 ] + exp ) : exp;
		return +( value[ 0 ] + "e" + value[ 1 ] );
	};
};




/**
 * formatProperties( pattern, cldr [, options] )
 *
 * @pattern [String] raw pattern for numbers.
 *
 * @cldr [Cldr instance].
 *
 * @options [Object]:
 * - minimumIntegerDigits [Number]
 * - minimumFractionDigits, maximumFractionDigits [Number]
 * - minimumSignificantDigits, maximumSignificantDigits [Number]
 * - round [String] "ceil", "floor", "round" (default), or "truncate".
 * - useGrouping [Boolean] default true.
 *
 * Return the processed properties that will be used in number/format.
 * ref: http://www.unicode.org/reports/tr35/tr35-numbers.html
 */
var numberFormatProperties = function( pattern, cldr, options ) {
	var negativePattern, negativePrefix, negativeProperties, negativeSuffix, positivePattern,
		roundFn, properties;

	function getOptions( attribute, propertyIndex ) {
		if ( attribute in options ) {
			properties[ propertyIndex ] = options[ attribute ];
		}
	}

	options = options || {};
	pattern = pattern.split( ";" );

	positivePattern = pattern[ 0 ];

	negativePattern = pattern[ 1 ] || "-" + positivePattern;
	negativeProperties = numberPatternProperties( negativePattern );
	negativePrefix = negativeProperties[ 0 ];
	negativeSuffix = negativeProperties[ 10 ];

	// Have runtime code to refer to numberRound() instead of including it explicitly.
	roundFn = numberRound( options.round );
	roundFn.generatorString = function() {
		return "numberRound(" + ( options.round ? "\"" + options.round + "\"" : "" ) + ")";
	};

	properties = numberPatternProperties( positivePattern ).concat([
		positivePattern,
		negativePrefix + positivePattern + negativeSuffix,
		negativePrefix,
		negativeSuffix,
		roundFn,
		numberSymbol( "infinity", cldr ),
		numberSymbol( "nan", cldr ),
		numberSymbolMap( cldr ),
		numberNumberingSystemDigitsMap( cldr )
	]);

	if ( options.compact ) {

		// The compact digits number pattern is always `0+`, so override the following properties.
		// Note: minimumIntegerDigits would actually range from `0` to `000` based on the scale of
		// the value to be formatted, though we're always using 1 as a simplification, because the
		// number won't be zero-padded since we chose the right format based on the scale, i.e.,
		// we'd never see something like `003M` anyway.
		properties[ 2 ] = 1; // minimumIntegerDigits
		properties[ 3 ] = 0; // minimumFractionDigits
		properties[ 4 ] = 0; // maximumFractionDigits
		properties[ 5 ] = // minimumSignificantDigits &
			properties[ 6 ] = undefined; // maximumSignificantDigits

		properties[ 20 ] = numberCompact( options.compact, cldr );
	}

	getOptions( "minimumIntegerDigits", 2 );
	getOptions( "minimumFractionDigits", 3 );
	getOptions( "maximumFractionDigits", 4 );
	getOptions( "minimumSignificantDigits", 5 );
	getOptions( "maximumSignificantDigits", 6 );

	// Grouping separators
	if ( options.useGrouping === false ) {
		properties[ 8 ] = null;
	}

	// Normalize number of digits if only one of either minimumFractionDigits or
	// maximumFractionDigits is passed in as an option
	if ( "minimumFractionDigits" in options && !( "maximumFractionDigits" in options ) ) {

		// maximumFractionDigits = Math.max( minimumFractionDigits, maximumFractionDigits );
		properties[ 4 ] = Math.max( properties[ 3 ], properties[ 4 ] );
	} else if ( !( "minimumFractionDigits" in options ) &&
			"maximumFractionDigits" in options ) {

		// minimumFractionDigits = Math.min( minimumFractionDigits, maximumFractionDigits );
		properties[ 3 ] = Math.min( properties[ 3 ], properties[ 4 ] );
	}

	// Return:
	// 0-10: see number/pattern-properties.
	// 11: @positivePattern [String] Positive pattern.
	// 12: @negativePattern [String] Negative pattern.
	// 13: @negativePrefix [String] Negative prefix.
	// 14: @negativeSuffix [String] Negative suffix.
	// 15: @round [Function] Round function.
	// 16: @infinitySymbol [String] Infinity symbol.
	// 17: @nanSymbol [String] NaN symbol.
	// 18: @symbolMap [Object] A bunch of other symbols.
	// 19: @nuDigitsMap [Array] Digits map if numbering system is different than `latn`.
	// 20: @compactMap [Object] Map of per-digit-count format patterns for specified compact mode.
	return properties;
};




/**
 * Generated by:
 *
 * var regenerate = require( "regenerate" );
 * var formatSymbols = require( "@unicode/unicode-13.0.0/General_Category/Format/symbols" );
 * regenerate().add( formatSymbols ).toString();
 *
 * https://github.com/mathiasbynens/regenerate
 * https://github.com/node-unicode/unicode-13.0.0
 */
var regexpCfG = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC38]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/g;




/**
 * Generated by:
 *
 * var regenerate = require( "regenerate" );
 * var dashSymbols = require( "https://github.com/node-unicode/unicode-13.0.0/General_Category/Dash_Punctuation/symbols" );
 * regenerate().add( dashSymbols ).toString();
 *
 * https://github.com/mathiasbynens/regenerate
 * https://github.com/node-unicode/unicode-13.0.0
 *
 * NOTE: In addition to [:dash:],  the below includes MINUS SIGN U+2212.
 */
var regexpDashG = /[\x2D\u058A\u05BE\u1400\u1806\u2010-\u2015\u2E17\u2E1A\u2E3A\u2E3B\u2E40\u301C\u3030\u30A0\uFE31\uFE32\uFE58\uFE63\uFF0D\u2212]|\uD803\uDEAD/g;




/**
 * Generated by:
 *
 * var regenerate = require( "regenerate" );
 * var spaceSeparatorSymbols = require( "@unicode/unicode-13.0.0/General_Category/Space_Separator/symbols" );
 * regenerate().add( spaceSeparatorSymbols ).toString();
 *
 * https://github.com/mathiasbynens/regenerate
 * https://github.com/node-unicode/unicode-13.0.0
 */
var regexpZsG = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/g;




/**
 * Loose Matching:
 * - Ignore all format characters, which includes RLM, LRM or ALM used to control BIDI
 *   formatting.
 * - Map all characters in [:Zs:] to U+0020 SPACE;
 * - Map all characters in [:Dash:] to U+002D HYPHEN-MINUS;
 */
var looseMatching = function( value ) {
	return value
		.replace( regexpCfG, "" )
		.replace( regexpDashG, "-" )
		.replace( regexpZsG, " " );
};




/**
 * parse( value, properties )
 *
 * @value [String].
 *
 * @properties [Object] Parser properties is a reduced pre-processed cldr
 * data set returned by numberParserProperties().
 *
 * Return the parsed Number (including Infinity) or NaN when value is invalid.
 * ref: http://www.unicode.org/reports/tr35/tr35-numbers.html
 */
var numberParse = function( value, properties ) {
	var grammar, invertedNuDigitsMap, invertedSymbolMap, negative, number, prefix, prefixNSuffix,
		suffix, tokenizer, valid;

	// Grammar:
	// - Value <=           NaN | PositiveNumber | NegativeNumber
	// - PositiveNumber <=  PositivePrefix NumberOrInf PositiveSufix
	// - NegativeNumber <=  NegativePrefix NumberOrInf
	// - NumberOrInf <=     Number | Inf
	grammar = [
		[ "nan" ],
		[ "prefix", "infinity", "suffix" ],
		[ "prefix", "number", "suffix" ],
		[ "negativePrefix", "infinity", "negativeSuffix" ],
		[ "negativePrefix", "number", "negativeSuffix" ]
	];

	invertedSymbolMap = properties[ 0 ];
	invertedNuDigitsMap = properties[ 1 ] || {};
	tokenizer = properties[ 2 ];

	value = looseMatching( value );

	function parse( type ) {
		return function( lexeme ) {

			// Reverse localized symbols and numbering system.
			lexeme = lexeme.split( "" ).map(function( character ) {
				return invertedSymbolMap[ character ] ||
					invertedNuDigitsMap[ character ] ||
					character;
			}).join( "" );

			switch ( type ) {
				case "infinity":
					number = Infinity;
					break;

				case "nan":
					number = NaN;
					break;

				case "number":

					// Remove grouping separators.
					lexeme = lexeme.replace( /,/g, "" );

					number = +lexeme;
					break;

				case "prefix":
				case "negativePrefix":
					prefix = lexeme;
					break;

				case "suffix":
					suffix = lexeme;
					break;

				case "negativeSuffix":
					suffix = lexeme;
					negative = true;
					break;

				// This should never be reached.
				default:
					throw new Error( "Internal error" );
			}
			return "";
		};
	}

	function tokenizeNParse( _value, grammar ) {
		return grammar.some(function( statement ) {
			var value = _value;

			// The whole grammar statement should be used (i.e., .every() return true) and value be
			// entirely consumed (i.e., !value.length).
			return statement.every(function( type ) {
				if ( value.match( tokenizer[ type ] ) === null ) {
					return false;
				}

				// Consume and parse it.
				value = value.replace( tokenizer[ type ], parse( type ) );
				return true;
			}) && !value.length;
		});
	}

	valid = tokenizeNParse( value, grammar );

	// NaN
	if ( !valid || isNaN( number ) ) {
		return NaN;
	}

	prefixNSuffix = "" + prefix + suffix;

	// Percent
	if ( prefixNSuffix.indexOf( "%" ) !== -1 ) {
		number /= 100;

	// Per mille
	} else if ( prefixNSuffix.indexOf( "\u2030" ) !== -1 ) {
		number /= 1000;
	}

	// Negative number
	if ( negative ) {
		number *= -1;
	}

	return number;
};




var numberParserFn = function( properties ) {
	return function numberParser( value ) {
		validateParameterPresence( value, "value" );
		validateParameterTypeString( value, "value" );

		return numberParse( value, properties );
	};

};




/**
 * symbolMap( cldr )
 *
 * @cldr [Cldr instance].
 *
 * Return the (localized symbol, pattern symbol) key value pair, eg. {
 *   "٫": ".",
 *   "٬": ",",
 *   "٪": "%",
 *   ...
 * };
 */
var numberSymbolInvertedMap = function( cldr ) {
	var symbol,
		symbolMap = {};

	for ( symbol in numberSymbolName ) {
		symbolMap[ numberSymbol( numberSymbolName[ symbol ], cldr ) ] = symbol;
	}

	return symbolMap;
};




/**
 * objectMap( object, fn)
 *
 * - object
 *
 * - fn( pair ) => pair
 */
var objectMap = function( object, fn ) {
	return Object.keys( object ).map(function( key ) {
		return fn([ key, object[ key ] ]);
	}).reduce(function( object, pair ) {
		object[ pair[ 0 ] ] = pair[ 1 ];
		return object;
	}, {});
};




/**
 * removeLiteralQuotes( string )
 *
 * Return:
 * - `'` if input string is `''`.
 * - `o'clock` if input string is `'o''clock'`.
 * - `foo` if input string is `foo`, i.e., return the same value in case it isn't a single-quoted
 *   string.
 */
var removeLiteralQuotes = function( string ) {
	if ( string[ 0 ] + string[ string.length - 1 ] !== "''" ) {
		return string;
	}
	if ( string === "''" ) {
		return "'";
	}
	return string.replace( /''/g, "'" ).slice( 1, -1 );
};




/**
 * parseProperties( pattern, cldr )
 *
 * @pattern [String] raw pattern for numbers.
 *
 * @cldr [Cldr instance].
 *
 * Return parser properties, used to feed parser function.
 *
 * TODO:
 * - Scientific_notation;
 * - Padding;
 */
var numberParseProperties = function( pattern, cldr, options ) {
	var aux, decimalSymbolRe, digitsRe, groupingSeparatorRe, infinitySymbol, invertedNuDigitsMap,
		invertedSymbolMap, maximumFractionDigits, maximumSignificantDigits,
		minimumSignificantDigits, nanSymbol, negativePrefix, negativeSuffix, nuDigitsMap,
		numberTokenizer, prefix, primaryGroupingSize, secondaryGroupingSize, suffix, symbolMap,
		formatProperties = numberFormatProperties( pattern, cldr, options );

	prefix = looseMatching( formatProperties[ 0 ] );
	maximumFractionDigits = formatProperties[ 4 ];
	minimumSignificantDigits = formatProperties[ 5 ];
	maximumSignificantDigits = formatProperties[ 6 ];
	primaryGroupingSize = formatProperties[ 8 ];
	secondaryGroupingSize = formatProperties[ 9 ];
	suffix = looseMatching( formatProperties[ 10 ] );
	negativePrefix = looseMatching( formatProperties[ 13 ] );
	negativeSuffix = looseMatching( formatProperties[ 14 ] );
	infinitySymbol = looseMatching( formatProperties[ 16 ] );
	nanSymbol = looseMatching( formatProperties[ 17 ] );
	symbolMap = objectMap( formatProperties[ 18 ], function( pair ) {
		return [ pair[ 0 ], looseMatching( pair[ 1 ] ) ];
	});
	nuDigitsMap = formatProperties[ 19 ];

	invertedSymbolMap = objectMap( numberSymbolInvertedMap( cldr ), function( pair ) {
		return [ looseMatching( pair[ 0 ] ), pair[ 1 ] ];
	});

	digitsRe = nuDigitsMap ? "[" + nuDigitsMap + "]" : "\\d";
	groupingSeparatorRe = regexpEscape( symbolMap[ "," ] );
	decimalSymbolRe = regexpEscape( symbolMap[ "." ] );

	if ( nuDigitsMap ) {
		invertedNuDigitsMap = nuDigitsMap.split( "" ).reduce(function( object, localizedDigit, i ) {
			object[ localizedDigit ] = String( i );
			return object;
		}, {} );
	}

	aux = [ prefix, suffix, negativePrefix, negativeSuffix ].map(function( value ) {
		return value.replace( /('([^']|'')+'|'')|./g, function( character, literal ) {

			// Literals
			if ( literal ) {
				return removeLiteralQuotes( literal );
			}

			// Symbols
			character = character.replace( /[\-+E%\u2030]/, function( symbol ) {
				return symbolMap[ symbol ];
			});

			return character;
		});
	});

	prefix = aux[ 0 ];
	suffix = aux[ 1 ];
	negativePrefix = aux[ 2 ];
	negativeSuffix = aux[ 3 ];

	// Number
	//
	// number_re =                       integer fraction?
	//
	// integer =                         digits | digits_using_grouping_separators
	//
	// fraction =                        regexp((.\d+)?)
	//
	// digits =                          regexp(\d+)
	//
	// digits_w_grouping_separators =    digits_w_1_grouping_separators |
	//                                   digits_w_2_grouping_separators
	//
	// digits_w_1_grouping_separators =  regexp(\d{1,3}(,\d{3})+)
	//
	// digits_w_2_grouping_separators =  regexp(\d{1,2}((,\d{2})*(,\d{3})))

	// Integer part
	numberTokenizer = digitsRe + "+";

	// Grouping separators
	if ( primaryGroupingSize ) {
		if ( secondaryGroupingSize ) {
			aux = digitsRe + "{1," + secondaryGroupingSize + "}((" + groupingSeparatorRe +
				digitsRe + "{" + secondaryGroupingSize + "})*(" + groupingSeparatorRe +
				digitsRe + "{" + primaryGroupingSize + "}))";
		} else {
			aux = digitsRe + "{1," + primaryGroupingSize + "}(" + groupingSeparatorRe +
				digitsRe + "{" + primaryGroupingSize + "})+";
		}
		numberTokenizer = "(" + aux + "|" + numberTokenizer + ")";
	}

	// Fraction part? Only included if 1 or 2.
	// 1: Using significant digit format.
	// 2: Using integer and fractional format && it has a maximumFractionDigits.
	if ( !isNaN( minimumSignificantDigits * maximumSignificantDigits ) || /* 1 */
				maximumFractionDigits /* 2 */ ) {

		// 1: Handle trailing decimal separator, e.g., `"1." => `1``.
		aux = decimalSymbolRe + digitsRe + "+";
		numberTokenizer = numberTokenizer + "(" + aux + "|" + decimalSymbolRe /* 1 */ + ")?" +

			// Handle non-padded decimals, e.g., `".12"` => `0.12` by making the integer part
			// optional.
			"|(" + numberTokenizer + ")?" + aux;

		numberTokenizer = "(" + numberTokenizer + ")";
	}

	// 0: @invertedSymbolMap [Object] Inverted symbol map.
	// 1: @invertedNuDigitsMap [Object] Inverted digits map if numbering system is different than
	//    `latn`.
	// 2: @tokenizer [Object] Tokenizer map, used by parser to consume input.
	return [
		invertedSymbolMap,
		invertedNuDigitsMap,
		{
			infinity: new RegExp( "^" + regexpEscape( infinitySymbol ) ),
			nan: new RegExp( "^" + regexpEscape( nanSymbol ) ),
			negativePrefix: new RegExp( "^" + regexpEscape( negativePrefix ) ),
			negativeSuffix: new RegExp( "^" + regexpEscape( negativeSuffix ) ),
			number: new RegExp( "^" + numberTokenizer ),
			prefix: new RegExp( "^" + regexpEscape( prefix ) ),
			suffix: new RegExp( "^" + regexpEscape( suffix ) )
		}
	];

};




/**
 * Pattern( style )
 *
 * @style [String] "decimal" (default) or "percent".
 *
 * @cldr [Cldr instance].
 */
var numberPattern = function( style, cldr ) {
	if ( style !== "decimal" && style !== "percent" ) {
		throw new Error( "Invalid style" );
	}

	return cldr.main([
		"numbers",
		style + "Formats-numberSystem-" + numberNumberingSystem( cldr ),
		"standard"
	]);
};




/**
 * EBNF representation:
 *
 * compact_pattern_re =       prefix?
 *                            number_pattern_re
 *                            suffix?
 *
 * number_pattern_re =        0+
 *
 * Regexp groups:
 *
 *  0: compact_pattern_re
 *  1: prefix
 *  2: number_pattern_re (the number pattern to use in compact mode)
 *  3: suffix
 */
var numberCompactPatternRe = ( /^([^0]*)(0+)([^0]*)$/ );




/**
 * goupingSeparator( number, primaryGroupingSize, secondaryGroupingSize )
 *
 * @number [Number].
 *
 * @primaryGroupingSize [Number]
 *
 * @secondaryGroupingSize [Number]
 *
 * Return the formatted number with group separator.
 */
var numberFormatGroupingSeparator = function( number, primaryGroupingSize, secondaryGroupingSize ) {
	var index,
		currentGroupingSize = primaryGroupingSize,
		ret = "",
		sep = ",",
		switchToSecondary = secondaryGroupingSize ? true : false;

	number = String( number ).split( "." );
	index = number[ 0 ].length;

	while ( index > currentGroupingSize ) {
		ret = number[ 0 ].slice( index - currentGroupingSize, index ) +
			( ret.length ? sep : "" ) + ret;
		index -= currentGroupingSize;
		if ( switchToSecondary ) {
			currentGroupingSize = secondaryGroupingSize;
			switchToSecondary = false;
		}
	}

	number[ 0 ] = number[ 0 ].slice( 0, index ) + ( ret.length ? sep : "" ) + ret;
	return number.join( "." );
};




/**
 * integerFractionDigits( number, minimumIntegerDigits, minimumFractionDigits,
 * maximumFractionDigits, round, roundIncrement )
 *
 * @number [Number]
 *
 * @minimumIntegerDigits [Number]
 *
 * @minimumFractionDigits [Number]
 *
 * @maximumFractionDigits [Number]
 *
 * @round [Function]
 *
 * @roundIncrement [Function]
 *
 * Return the formatted integer and fraction digits.
 */
var numberFormatIntegerFractionDigits = function( number, minimumIntegerDigits, minimumFractionDigits, maximumFractionDigits, round,
	roundIncrement ) {

	// Fraction
	if ( maximumFractionDigits ) {

		// Rounding
		if ( roundIncrement ) {
			number = round( number, roundIncrement );

		// Maximum fraction digits
		} else {
			number = round( number, { exponent: -maximumFractionDigits } );
		}

	} else {
		number = round( number );
	}

	number = String( number );

	// Maximum integer digits (post string phase)
	if ( maximumFractionDigits && /e-/.test( number ) ) {

		// Use toFixed( maximumFractionDigits ) to make sure small numbers like 1e-7 are
		// displayed using plain digits instead of scientific notation.
		// 1: Remove leading decimal zeros.
		// 2: Remove leading decimal separator.
		// Note: String() is still preferred so it doesn't mess up with a number precision
		// unnecessarily, e.g., (123456789.123).toFixed(10) === "123456789.1229999959",
		// String(123456789.123) === "123456789.123".
		number = ( +number ).toFixed( maximumFractionDigits )
			.replace( /0+$/, "" ) /* 1 */
			.replace( /\.$/, "" ); /* 2 */
	}

	// Minimum fraction digits (post string phase)
	if ( minimumFractionDigits ) {
		number = number.split( "." );
		number[ 1 ] = stringPad( number[ 1 ] || "", minimumFractionDigits, true );
		number = number.join( "." );
	}

	// Minimum integer digits
	if ( minimumIntegerDigits ) {
		number = number.split( "." );
		number[ 0 ] = stringPad( number[ 0 ], minimumIntegerDigits );
		number = number.join( "." );
	}

	return number;
};




/**
 * toPrecision( number, precision, round )
 *
 * @number (Number)
 *
 * @precision (Number) significant figures precision (not decimal precision).
 *
 * @round (Function)
 *
 * Return number.toPrecision( precision ) using the given round function.
 */
var numberToPrecision = function( number, precision, round ) {
	var roundOrder;

	if ( number === 0 ) {  // Fix #706
		return number;
	}

	roundOrder = Math.ceil( Math.log( Math.abs( number ) ) / Math.log( 10 ) );
	roundOrder -= precision;

	return round( number, { exponent: roundOrder } );
};




/**
 * toPrecision( number, minimumSignificantDigits, maximumSignificantDigits, round )
 *
 * @number [Number]
 *
 * @minimumSignificantDigits [Number]
 *
 * @maximumSignificantDigits [Number]
 *
 * @round [Function]
 *
 * Return the formatted significant digits number.
 */
var numberFormatSignificantDigits = function( number, minimumSignificantDigits, maximumSignificantDigits, round ) {
	var atMinimum, atMaximum;

	// Sanity check.
	if ( minimumSignificantDigits > maximumSignificantDigits ) {
		maximumSignificantDigits = minimumSignificantDigits;
	}

	atMinimum = numberToPrecision( number, minimumSignificantDigits, round );
	atMaximum = numberToPrecision( number, maximumSignificantDigits, round );

	// Use atMaximum only if it has more significant digits than atMinimum.
	number = +atMinimum === +atMaximum ? atMinimum : atMaximum;

	// Expand integer numbers, eg. 123e5 to 12300.
	number = ( +number ).toString( 10 );

	if ( ( /e/ ).test( number ) ) {
		throw createErrorUnsupportedFeature({
			feature: "integers out of (1e21, 1e-7)"
		});
	}

	// Add trailing zeros if necessary.
	if ( minimumSignificantDigits - number.replace( /^0+|\./g, "" ).length > 0 ) {
		number = number.split( "." );
		number[ 1 ] = stringPad( number[ 1 ] || "", minimumSignificantDigits - number[ 0 ].replace( /^0+/, "" ).length, true );
		number = number.join( "." );
	}

	return number;
};




/**
 * format( number, properties )
 *
 * @number [Number].
 *
 * @properties [Object] Output of number/format-properties.
 *
 * Return the formatted number.
 * ref: http://www.unicode.org/reports/tr35/tr35-numbers.html
 */
var numberFormat = function( number, properties, pluralGenerator ) {
	var aux, compactMap, infinitySymbol, maximumFractionDigits, maximumSignificantDigits,
		minimumFractionDigits, minimumIntegerDigits, minimumSignificantDigits, nanSymbol,
		nuDigitsMap, prefix, primaryGroupingSize, pattern, round, roundIncrement,
		secondaryGroupingSize, stringToParts, suffix, symbolMap;

	minimumIntegerDigits = properties[ 2 ];
	minimumFractionDigits = properties[ 3 ];
	maximumFractionDigits = properties[ 4 ];
	minimumSignificantDigits = properties[ 5 ];
	maximumSignificantDigits = properties[ 6 ];
	roundIncrement = properties[ 7 ];
	primaryGroupingSize = properties[ 8 ];
	secondaryGroupingSize = properties[ 9 ];
	round = properties[ 15 ];
	infinitySymbol = properties[ 16 ];
	nanSymbol = properties[ 17 ];
	symbolMap = properties[ 18 ];
	nuDigitsMap = properties[ 19 ];
	compactMap = properties[ 20 ];

	// NaN
	if ( isNaN( number ) ) {
		return [ { type: "nan", value: nanSymbol } ];
	}

	if ( number < 0 ) {
		pattern = properties[ 12 ];
		prefix = properties[ 13 ];
		suffix = properties[ 14 ];
	} else {
		pattern = properties[ 11 ];
		prefix = properties[ 0 ];
		suffix = properties[ 10 ];
	}

	// For prefix, suffix, and number parts.
	stringToParts = function( string ) {
		var numberType = "integer",
			parts = [];

		// TODO Move the tokenization of all parts that don't depend on number into
		// format-properties.
		string.replace( /('([^']|'')+'|'')|./g, function( character, literal ) {

			// Literals
			if ( literal ) {
				partsPush( parts, "literal", removeLiteralQuotes( literal ) );
				return;
			}

			// Currency symbol
			if ( character === "\u00A4" ) {
				partsPush( parts, "currency", character );
				return;
			}

			// Symbols
			character = character.replace( /[.,\-+E%\u2030]/, function( symbol ) {
				if ( symbol === "." ) {
					numberType = "fraction";
				}
				partsPush( parts, numberSymbolName[ symbol ], symbolMap[ symbol ] );

				// "Erase" handled character.
				return "";
			});

			// Number
			character = character.replace( /[0-9]/, function( digit ) {

				// Numbering system
				if ( nuDigitsMap ) {
					digit = nuDigitsMap[ +digit ];
				}
				partsPush( parts, numberType, digit );

				// "Erase" handled character.
				return "";
			});

			// Etc
			character.replace( /./, function( etc ) {
				partsPush( parts, "literal", etc );
			});
		});
		return parts;
	};

	prefix = stringToParts( prefix );
	suffix = stringToParts( suffix );

	// Infinity
	if ( !isFinite( number ) ) {
		return prefix.concat(
			{ type: "infinity", value: infinitySymbol },
			suffix
		);
	}

	// Percent
	if ( pattern.indexOf( "%" ) !== -1 ) {
		number *= 100;

	// Per mille
	} else if ( pattern.indexOf( "\u2030" ) !== -1 ) {
		number *= 1000;
	}

	var compactPattern, compactDigits, compactProperties, divisor, numberExponent, pluralForm;

	// Compact mode: initial number digit processing
	if ( compactMap ) {
		numberExponent = Math.abs( Math.floor( number ) ).toString().length - 1;
		numberExponent = Math.min( numberExponent, compactMap.maxExponent );

		// Use default plural form to perform initial decimal shift
		if ( numberExponent >= 3 ) {
			compactPattern = compactMap[ numberExponent ] && compactMap[ numberExponent ].other;
		}

		if ( compactPattern === "0" ) {
			compactPattern = null;
		} else if ( compactPattern ) {
			compactDigits = compactPattern.split( "0" ).length - 1;
			divisor = numberExponent - ( compactDigits - 1 );
			number = number / Math.pow( 10, divisor );
		}
	}

	// Significant digit format
	if ( !isNaN( minimumSignificantDigits * maximumSignificantDigits ) ) {
		number = numberFormatSignificantDigits( number, minimumSignificantDigits,
			maximumSignificantDigits, round );

	// Integer and fractional format
	} else {
		number = numberFormatIntegerFractionDigits( number, minimumIntegerDigits,
			minimumFractionDigits, maximumFractionDigits, round, roundIncrement );
	}

	// Compact mode: apply formatting
	if ( compactMap && compactPattern ) {

		// Get plural form after possible roundings
		pluralForm = pluralGenerator ? pluralGenerator( +number ) : "other";

		compactPattern = compactMap[ numberExponent ][ pluralForm ] || compactPattern;
		compactProperties = compactPattern.match( numberCompactPatternRe );

		// TODO Move the tokenization of all parts that don't depend on number into
		// format-properties.
		aux = function( string ) {
			var parts = [];
			string.replace( /(\s+)|([^\s0]+)/g, function( _garbage, space, compact ) {

				// Literals
				if ( space ) {
					partsPush( parts, "literal", space );
					return;
				}

				// Compact value
				if ( compact ) {
					partsPush( parts, "compact", compact );
					return;
				}
			});
			return parts;
		};

		// update prefix/suffix with compact prefix/suffix
		prefix = prefix.concat( aux( compactProperties[ 1 ] ) );
		suffix = aux( compactProperties[ 3 ] ).concat( suffix );
	}

	// Remove the possible number minus sign
	number = number.replace( /^-/, "" );

	// Grouping separators
	if ( primaryGroupingSize ) {
		number = numberFormatGroupingSeparator( number, primaryGroupingSize,
			secondaryGroupingSize );
	}

	// Scientific notation
	// TODO implement here

	// Padding/'([^']|'')+'|''|[.,\-+E%\u2030]/g
	// TODO implement here

	return prefix.concat(
		stringToParts( number ),
		suffix
	);
};




var numberToPartsFormatterFn = function( properties, pluralGenerator ) {
	return function numberToPartsFormatter( value ) {
		validateParameterPresence( value, "value" );
		validateParameterTypeNumber( value, "value" );

		return numberFormat( value, properties, pluralGenerator );
	};
};




function validateDigits( properties ) {
	var minimumIntegerDigits = properties[ 2 ],
		minimumFractionDigits = properties[ 3 ],
		maximumFractionDigits = properties[ 4 ],
		minimumSignificantDigits = properties[ 5 ],
		maximumSignificantDigits = properties[ 6 ];

	// Validate significant digit format properties
	if ( !isNaN( minimumSignificantDigits * maximumSignificantDigits ) ) {
		validateParameterRange( minimumSignificantDigits, "minimumSignificantDigits", 1, 21 );
		validateParameterRange( maximumSignificantDigits, "maximumSignificantDigits",
			minimumSignificantDigits, 21 );

	} else if ( !isNaN( minimumSignificantDigits ) || !isNaN( maximumSignificantDigits ) ) {
		throw new Error( "Neither or both the minimum and maximum significant digits must be " +
			"present" );

	// Validate integer and fractional format
	} else {
		validateParameterRange( minimumIntegerDigits, "minimumIntegerDigits", 1, 21 );
		validateParameterRange( minimumFractionDigits, "minimumFractionDigits", 0, 20 );
		validateParameterRange( maximumFractionDigits, "maximumFractionDigits",
			minimumFractionDigits, 20 );
	}
}

/**
 * .numberFormatter( [options] )
 *
 * @options [Object]:
 * - style: [String] "decimal" (default) or "percent".
 * - see also number/format options.
 *
 * Return a function that formats a number according to the given options and default/instance
 * locale.
 */
Globalize.numberFormatter =
Globalize.prototype.numberFormatter = function( options ) {
	var args, numberToPartsFormatter, returnFn;

	validateParameterTypePlainObject( options, "options" );

	options = options || {};
	args = [ options ];

	numberToPartsFormatter = this.numberToPartsFormatter( options );
	returnFn = numberFormatterFn( numberToPartsFormatter );
	runtimeBind( args, this.cldr, returnFn, [ numberToPartsFormatter ] );

	return returnFn;
};

/**
 * .numberToPartsFormatter( [options] )
 *
 * @options [Object]:
 * - style: [String] "symbol" (default), "accounting", "code" or "name".
 * - see also number/format options.
 *
 * Return a function that formats a number to parts according to the given options and
 * default/instance locale.
 */
Globalize.numberToPartsFormatter =
Globalize.prototype.numberToPartsFormatter = function( options ) {
	var args, cldr, fnArgs, pattern, properties, returnFn;

	validateParameterTypePlainObject( options, "options" );

	options = options || {};
	cldr = this.cldr;

	args = [ options ];

	validateDefaultLocale( cldr );

	cldr.on( "get", validateCldr );
	try {
		if ( options.raw ) {
			pattern = options.raw;
		} else {
			pattern = numberPattern( options.style || "decimal", cldr );
		}

		properties = numberFormatProperties( pattern, cldr, options );
		fnArgs = [ properties ];
	} finally {
		cldr.off( "get", validateCldr );
	}

	validateDigits( properties );

	if ( options.compact ) {
		fnArgs.push( this.pluralGenerator() );
	}
	returnFn = numberToPartsFormatterFn.apply( null, fnArgs );
	runtimeBind( args, cldr, returnFn, fnArgs );

	return returnFn;
};

/**
 * .numberParser( [options] )
 *
 * @options [Object]:
 * - style: [String] "decimal" (default) or "percent".
 *
 * Return the number parser according to the default/instance locale.
 */
Globalize.numberParser =
Globalize.prototype.numberParser = function( options ) {
	var args, cldr, pattern, properties, returnFn;

	validateParameterTypePlainObject( options, "options" );

	options = options || {};
	cldr = this.cldr;

	args = [ options ];

	validateDefaultLocale( cldr );
	if ( options.compact ) {
		throw createErrorUnsupportedFeature({
			feature: "compact number parsing (not implemented)"
		});
	}

	cldr.on( "get", validateCldr );

	if ( options.raw ) {
		pattern = options.raw;
	} else {
		pattern = numberPattern( options.style || "decimal", cldr );
	}

	properties = numberParseProperties( pattern, cldr, options );

	cldr.off( "get", validateCldr );

	returnFn = numberParserFn( properties );

	runtimeBind( args, cldr, returnFn, [ properties ] );

	return returnFn;
};

/**
 * .formatNumber( value [, options] )
 *
 * @value [Number] number to be formatted.
 *
 * @options [Object]: see number/format-properties.
 *
 * Format a number according to the given options and default/instance locale.
 */
Globalize.formatNumber =
Globalize.prototype.formatNumber = function( value, options ) {
	validateParameterPresence( value, "value" );
	validateParameterTypeNumber( value, "value" );

	return this.numberFormatter( options )( value );
};

/**
 * .formatNumberToParts( value [, options] )
 *
 * @value [Number] number to be formatted.
 *
 * @options [Object]: see number/format-properties.
 *
 * Format a number to pars according to the given options and default/instance locale.
 */
Globalize.formatNumberToParts =
Globalize.prototype.formatNumberToParts = function( value, options ) {
	validateParameterPresence( value, "value" );
	validateParameterTypeNumber( value, "value" );

	return this.numberToPartsFormatter( options )( value );
};

/**
 * .parseNumber( value [, options] )
 *
 * @value [String]
 *
 * @options [Object]: See numberParser().
 *
 * Return the parsed Number (including Infinity) or NaN when value is invalid.
 */
Globalize.parseNumber =
Globalize.prototype.parseNumber = function( value, options ) {
	validateParameterPresence( value, "value" );
	validateParameterTypeString( value, "value" );

	return this.numberParser( options )( value );
};

/**
 * Optimization to avoid duplicating some internal functions across modules.
 */
Globalize._createErrorUnsupportedFeature = createErrorUnsupportedFeature;
Globalize._numberNumberingSystem = numberNumberingSystem;
Globalize._numberNumberingSystemDigitsMap = numberNumberingSystemDigitsMap;
Globalize._numberPattern = numberPattern;
Globalize._numberSymbol = numberSymbol;
Globalize._looseMatching = looseMatching;
Globalize._removeLiteralQuotes = removeLiteralQuotes;
Globalize._stringPad = stringPad;
Globalize._validateParameterTypeNumber = validateParameterTypeNumber;
Globalize._validateParameterTypeString = validateParameterTypeString;

return Globalize;




}));

/*!
 * Globalize v1.7.0
 *
 * https://github.com/globalizejs/globalize
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-08-02T11:53Z
 */
(function( root, factory ) {

	// UMD returnExports
	if ( typeof define === "function" && define.amd ) {

		// AMD
		define([
			"cldr",
			"../globalize",
			"./number",
			"cldr/event",
			"cldr/supplemental"
		], factory );
	} else if ( typeof exports === "object" ) {

		// Node, CommonJS
		module.exports = factory( require( "cldrjs" ), require( "../globalize" ) );
	} else {

		// Global
		factory( root.Cldr, root.Globalize );
	}
}(this, function( Cldr, Globalize ) {

var alwaysArray = Globalize._alwaysArray,
	createError = Globalize._createError,
	formatMessageToParts = Globalize._formatMessageToParts,
	numberNumberingSystem = Globalize._numberNumberingSystem,
	numberPattern = Globalize._numberPattern,
	partsJoin = Globalize._partsJoin,
	partsPush = Globalize._partsPush,
	runtimeBind = Globalize._runtimeBind,
	stringPad = Globalize._stringPad,
	validateCldr = Globalize._validateCldr,
	validateDefaultLocale = Globalize._validateDefaultLocale,
	validateParameterPresence = Globalize._validateParameterPresence,
	validateParameterType = Globalize._validateParameterType,
	validateParameterTypeNumber = Globalize._validateParameterTypeNumber,
	validateParameterTypePlainObject = Globalize._validateParameterTypePlainObject;


var createErrorPluralModulePresence = function() {
	return createError( "E_MISSING_PLURAL_MODULE", "Plural module not loaded." );
};




var validateParameterTypeCurrency = function( value, name ) {
	validateParameterType(
		value,
		name,
		value === undefined || typeof value === "string" && ( /^[A-Za-z]{3}$/ ).test( value ),
		"3-letter currency code string as defined by ISO 4217"
	);
};




var currencyFormatterFn = function( currencyToPartsFormatter ) {
	return function currencyFormatter( value ) {
		return partsJoin( currencyToPartsFormatter( value ));
	};
};




/**
 * supplementalOverride( currency, pattern, cldr )
 *
 * Return pattern with fraction digits overriden by supplemental currency data.
 */
var currencySupplementalOverride = function( currency, pattern, cldr ) {
	var digits,
		fraction = "",
		fractionData = cldr.supplemental([ "currencyData/fractions", currency ]) ||
			cldr.supplemental( "currencyData/fractions/DEFAULT" );

	digits = +fractionData._digits;

	if ( digits ) {
		fraction = "." + stringPad( "0", digits ).slice( 0, -1 ) + fractionData._rounding;
	}

	return pattern.replace( /\.(#+|0*[0-9]|0+[0-9]?)/g, fraction );
};




var objectFilter = function( object, testRe ) {
	var key,
		copy = {};

	for ( key in object ) {
		if ( testRe.test( key ) ) {
			copy[ key ] = object[ key ];
		}
	}

	return copy;
};




var currencyUnitPatterns = function( cldr ) {
	return objectFilter( cldr.main([
		"numbers",
		"currencyFormats-numberSystem-" + numberNumberingSystem( cldr )
	]), /^unitPattern/ );
};




/**
 * nameProperties( currency, cldr )
 *
 * Return number pattern with the appropriate currency code in as literal.
 */
var currencyNameProperties = function( currency, cldr ) {
	var pattern = numberPattern( "decimal", cldr );

	// The number of decimal places and the rounding for each currency is not locale-specific. Those
	// values overridden by Supplemental Currency Data.
	pattern = currencySupplementalOverride( currency, pattern, cldr );

	return {
		displayNames: objectFilter( cldr.main([
			"numbers/currencies",
			currency
		]), /^displayName/ ),
		pattern: pattern,
		unitPatterns: currencyUnitPatterns( cldr )
	};
};




/**
 * Unicode regular expression for: everything except symbols from the category S
 *
 * Generated by:
 *
 * var s = regenerate()
 *   .addRange( 0x0, 0x10FFFF )
 *   .remove( require( "@unicode/unicode-13.0.0/General_Category/Math_Symbol/symbols" ) )
 *   .remove( require( "@unicode/unicode-13.0.0/General_Category/Currency_Symbol/symbols" ) )
 *   .remove( require( "@unicode/unicode-13.0.0/General_Category/Modifier_Symbol/symbols" ) )
 *   .remove( require( "@unicode/unicode-13.0.0/General_Category/Other_Symbol/symbols" ) )
 *
 * https://github.com/mathiasbynens/regenerate
 * https://github.com/node-unicode/unicode-13.0.0
 * http://www.unicode.org/reports/tr44/#General_Category_Values
 */
var regexpNotS = /[\0-#%-\*,-;\?-\]_a-\{\}\x7F-\xA1\xA7\xAA\xAB\xAD\xB2\xB3\xB5-\xB7\xB9-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376-\u0383\u0386-\u03F5\u03F7-\u0481\u0483-\u058C\u0590-\u0605\u0609\u060A\u060C\u060D\u0610-\u06DD\u06DF-\u06E8\u06EA-\u06FC\u06FF-\u07F5\u07F7-\u07FD\u0800-\u09F1\u09F4-\u09F9\u09FC-\u0AF0\u0AF2-\u0B6F\u0B71-\u0BF2\u0BFB-\u0C7E\u0C80-\u0D4E\u0D50-\u0D78\u0D7A-\u0E3E\u0E40-\u0F00\u0F04-\u0F12\u0F14\u0F18\u0F19\u0F20-\u0F33\u0F35\u0F37\u0F39-\u0FBD\u0FC6\u0FCD\u0FD0-\u0FD4\u0FD9-\u109D\u10A0-\u138F\u139A-\u166C\u166E-\u17DA\u17DC-\u193F\u1941-\u19DD\u1A00-\u1B60\u1B6B-\u1B73\u1B7D-\u1FBC\u1FBE\u1FC2-\u1FCC\u1FD0-\u1FDC\u1FE0-\u1FEC\u1FF0-\u1FFC\u1FFF-\u2043\u2045-\u2051\u2053-\u2079\u207D-\u2089\u208D-\u209F\u20C0-\u20FF\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u218C-\u218F\u2308-\u230B\u2329\u232A\u2427-\u243F\u244B-\u249B\u24EA-\u24FF\u2768-\u2793\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2B74\u2B75\u2B96\u2C00-\u2CE4\u2CEB-\u2E4F\u2E52-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u2FEF\u2FFC-\u3003\u3005-\u3011\u3014-\u301F\u3021-\u3035\u3038-\u303D\u3040-\u309A\u309D-\u318F\u3192-\u3195\u31A0-\u31BF\u31E4-\u31FF\u321F-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48F\uA4C7-\uA6FF\uA717-\uA71F\uA722-\uA788\uA78B-\uA827\uA82C-\uA835\uA83A-\uAA76\uAA7A-\uAB5A\uAB5C-\uAB69\uAB6C-\uD7FF\uE000-\uFB28\uFB2A-\uFBB1\uFBC2-\uFDFB\uFDFE-\uFE61\uFE63\uFE67\uFE68\uFE6A-\uFF03\uFF05-\uFF0A\uFF0C-\uFF1B\uFF1F-\uFF3D\uFF3F\uFF41-\uFF5B\uFF5D\uFF5F-\uFFDF\uFFE7\uFFEF-\uFFFB\uFFFE\uFFFF]|\uD800[\uDC00-\uDD36\uDD40-\uDD78\uDD8A\uDD8B\uDD8F\uDD9D-\uDD9F\uDDA1-\uDDCF\uDDFD-\uDFFF]|[\uD801\uD803\uD804\uD806\uD808-\uD819\uD81B-\uD82E\uD830-\uD833\uD837\uD839\uD83A\uD83F-\uDBFF][\uDC00-\uDFFF]|\uD802[\uDC00-\uDC76\uDC79-\uDEC7\uDEC9-\uDFFF]|\uD805[\uDC00-\uDF3E\uDF40-\uDFFF]|\uD807[\uDC00-\uDFD4\uDFF2-\uDFFF]|\uD81A[\uDC00-\uDF3B\uDF40-\uDF44\uDF46-\uDFFF]|\uD82F[\uDC00-\uDC9B\uDC9D-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDD65-\uDD69\uDD6D-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDDE9-\uDDFF\uDE42-\uDE44\uDE46-\uDEFF\uDF57-\uDFFF]|\uD835[\uDC00-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE87-\uDFFF]|\uD838[\uDC00-\uDD4E\uDD50-\uDEFE\uDF00-\uDFFF]|\uD83B[\uDC00-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDD2D\uDD2F-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDD0C\uDDAE-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDE5F\uDE66-\uDEFF]|\uD83D[\uDED8-\uDEDF\uDEED-\uDEEF\uDEFD-\uDEFF\uDF74-\uDF7F\uDFD9-\uDFDF\uDFEC-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE\uDCAF\uDCB2-\uDCFF\uDD79\uDDCC\uDE54-\uDE5F\uDE6E\uDE6F\uDE75-\uDE77\uDE7B-\uDE7F\uDE87-\uDE8F\uDEA9-\uDEAF\uDEB7-\uDEBF\uDEC3-\uDECF\uDED7-\uDEFF\uDF93\uDFCB-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;




/**
 * Unicode regular expression for: everything except symbols from categories S and Z
 *
 * Generated by:
 *
 * var s = regenerate()
 *   .addRange( 0x0, 0x10FFFF )
 *   .remove( require( "@unicode/unicode-13.0.0/General_Category/Math_Symbol/symbols" ) )
 *   .remove( require( "@unicode/unicode-13.0.0/General_Category/Currency_Symbol/symbols" ) )
 *   .remove( require( "@unicode/unicode-13.0.0/General_Category/Modifier_Symbol/symbols" ) )
 *   .remove( require( "@unicode/unicode-13.0.0/General_Category/Other_Symbol/symbols" ) )
 *   .remove( require( "@unicode/unicode-13.0.0/General_Category/Space_Separator/symbols" ) )
 *   .remove( require( "@unicode/unicode-13.0.0/General_Category/Line_Separator/symbols" ) )
 *   .remove( require( "@unicode/unicode-13.0.0/General_Category/Paragraph_Separator/symbols" ) );
 *
 * https://github.com/mathiasbynens/regenerate
 * https://github.com/node-unicode/unicode-13.0.0
 * http://www.unicode.org/reports/tr44/#General_Category_Values
 */
var regexpNotSAndZ = /[\0-\x1F!-#%-\*,-;\?-\]_a-\{\}\x7F-\x9F\xA1\xA7\xAA\xAB\xAD\xB2\xB3\xB5-\xB7\xB9-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376-\u0383\u0386-\u03F5\u03F7-\u0481\u0483-\u058C\u0590-\u0605\u0609\u060A\u060C\u060D\u0610-\u06DD\u06DF-\u06E8\u06EA-\u06FC\u06FF-\u07F5\u07F7-\u07FD\u0800-\u09F1\u09F4-\u09F9\u09FC-\u0AF0\u0AF2-\u0B6F\u0B71-\u0BF2\u0BFB-\u0C7E\u0C80-\u0D4E\u0D50-\u0D78\u0D7A-\u0E3E\u0E40-\u0F00\u0F04-\u0F12\u0F14\u0F18\u0F19\u0F20-\u0F33\u0F35\u0F37\u0F39-\u0FBD\u0FC6\u0FCD\u0FD0-\u0FD4\u0FD9-\u109D\u10A0-\u138F\u139A-\u166C\u166E-\u167F\u1681-\u17DA\u17DC-\u193F\u1941-\u19DD\u1A00-\u1B60\u1B6B-\u1B73\u1B7D-\u1FBC\u1FBE\u1FC2-\u1FCC\u1FD0-\u1FDC\u1FE0-\u1FEC\u1FF0-\u1FFC\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u2043\u2045-\u2051\u2053-\u205E\u2060-\u2079\u207D-\u2089\u208D-\u209F\u20C0-\u20FF\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u218C-\u218F\u2308-\u230B\u2329\u232A\u2427-\u243F\u244B-\u249B\u24EA-\u24FF\u2768-\u2793\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2B74\u2B75\u2B96\u2C00-\u2CE4\u2CEB-\u2E4F\u2E52-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u2FEF\u2FFC-\u2FFF\u3001-\u3003\u3005-\u3011\u3014-\u301F\u3021-\u3035\u3038-\u303D\u3040-\u309A\u309D-\u318F\u3192-\u3195\u31A0-\u31BF\u31E4-\u31FF\u321F-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48F\uA4C7-\uA6FF\uA717-\uA71F\uA722-\uA788\uA78B-\uA827\uA82C-\uA835\uA83A-\uAA76\uAA7A-\uAB5A\uAB5C-\uAB69\uAB6C-\uD7FF\uE000-\uFB28\uFB2A-\uFBB1\uFBC2-\uFDFB\uFDFE-\uFE61\uFE63\uFE67\uFE68\uFE6A-\uFF03\uFF05-\uFF0A\uFF0C-\uFF1B\uFF1F-\uFF3D\uFF3F\uFF41-\uFF5B\uFF5D\uFF5F-\uFFDF\uFFE7\uFFEF-\uFFFB\uFFFE\uFFFF]|\uD800[\uDC00-\uDD36\uDD40-\uDD78\uDD8A\uDD8B\uDD8F\uDD9D-\uDD9F\uDDA1-\uDDCF\uDDFD-\uDFFF]|[\uD801\uD803\uD804\uD806\uD808-\uD819\uD81B-\uD82E\uD830-\uD833\uD837\uD839\uD83A\uD83F-\uDBFF][\uDC00-\uDFFF]|\uD802[\uDC00-\uDC76\uDC79-\uDEC7\uDEC9-\uDFFF]|\uD805[\uDC00-\uDF3E\uDF40-\uDFFF]|\uD807[\uDC00-\uDFD4\uDFF2-\uDFFF]|\uD81A[\uDC00-\uDF3B\uDF40-\uDF44\uDF46-\uDFFF]|\uD82F[\uDC00-\uDC9B\uDC9D-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDD65-\uDD69\uDD6D-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDDE9-\uDDFF\uDE42-\uDE44\uDE46-\uDEFF\uDF57-\uDFFF]|\uD835[\uDC00-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE87-\uDFFF]|\uD838[\uDC00-\uDD4E\uDD50-\uDEFE\uDF00-\uDFFF]|\uD83B[\uDC00-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDD2D\uDD2F-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDD0C\uDDAE-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDE5F\uDE66-\uDEFF]|\uD83D[\uDED8-\uDEDF\uDEED-\uDEEF\uDEFD-\uDEFF\uDF74-\uDF7F\uDFD9-\uDFDF\uDFEC-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE\uDCAF\uDCB2-\uDCFF\uDD79\uDDCC\uDE54-\uDE5F\uDE6E\uDE6F\uDE75-\uDE77\uDE7B-\uDE7F\uDE87-\uDE8F\uDEA9-\uDEAF\uDEB7-\uDEBF\uDEC3-\uDECF\uDED7-\uDEFF\uDF93\uDFCB-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;




/**
 * symbolProperties( currency, cldr )
 *
 * Return pattern replacing `¤` with the appropriate currency symbol literal.
 */
var currencySymbolProperties = function( currency, cldr, options ) {
	var currencySpacing, pattern, symbol, symbolEntries,
		regexp = {
			"[:digit:]": /\d/,
			"[:^S:]": regexpNotS,
			"[[:^S:]&[:^Z:]]": regexpNotSAndZ
		};

	if ( options.style === "code" ) {
		symbol = currency;
	} else {
		symbolEntries = [ "symbol" ];

		// If options.symbolForm === "narrow" was passed, prepend it.
		if ( options.symbolForm === "narrow" ) {
			symbolEntries.unshift( "symbol-alt-narrow" );
		}

		symbolEntries.some(function( symbolEntry ) {
			return symbol = cldr.main([
				"numbers/currencies",
				currency,
				symbolEntry
			]);
		});
	}

	currencySpacing = [ "beforeCurrency", "afterCurrency" ].map(function( position ) {
		return cldr.main([
			"numbers",
			"currencyFormats-numberSystem-" + numberNumberingSystem( cldr ),
			"currencySpacing",
			position
		]);
	});

	pattern = cldr.main([
		"numbers",
		"currencyFormats-numberSystem-" + numberNumberingSystem( cldr ),
		options.style === "accounting" ? "accounting" : "standard"
	]);

	pattern =

		// The number of decimal places and the rounding for each currency is not locale-specific.
		// Those values are overridden by Supplemental Currency Data.
		currencySupplementalOverride( currency, pattern, cldr )

		// Replace "¤" (\u00A4) with the appropriate symbol literal.
		.split( ";" ).map(function( pattern ) {

			return pattern.split( "\u00A4" ).map(function( part, i ) {
				var currencyMatch = regexp[ currencySpacing[ i ].currencyMatch ],
					surroundingMatch = regexp[ currencySpacing[ i ].surroundingMatch ],
					insertBetween = "";

				// For currencyMatch and surroundingMatch definitions, read [1].
				// When i === 0, beforeCurrency is being handled. Otherwise, afterCurrency.
				// 1: http://www.unicode.org/reports/tr35/tr35-numbers.html#Currencies
				currencyMatch = currencyMatch.test( symbol.charAt( i ? symbol.length - 1 : 0 ) );
				surroundingMatch = surroundingMatch.test(
					part.charAt( i ? 0 : part.length - 1 ).replace( /[#@,.]/g, "0" )
				);

				if ( currencyMatch && part && surroundingMatch ) {
					insertBetween = currencySpacing[ i ].insertBetween;
				}

				return ( i ? insertBetween : "" ) + part + ( i ? "" : insertBetween );
			}).join( "\u00A4" );
		}).join( ";" );

	return {
		pattern: pattern,
		symbol: symbol
	};
};




/**
 * nameFormat( formattedNumber, pluralForm, properties )
 *
 * Return the appropriate name form currency format.
 */
var currencyNameFormat = function( formattedNumber, pluralForm, properties ) {
	var displayName, unitPattern,
		parts = [],
		displayNames = properties.displayNames || {},
		unitPatterns = properties.unitPatterns;

	displayName = displayNames[ "displayName-count-" + pluralForm ] ||
		displayNames[ "displayName-count-other" ] ||
		displayNames.displayName ||
		properties.currency;
	unitPattern = unitPatterns[ "unitPattern-count-" + pluralForm ] ||
		unitPatterns[ "unitPattern-count-other" ];

	formatMessageToParts( unitPattern, [ formattedNumber, displayName ]).forEach(function( part ) {
		if ( part.type === "variable" && part.name === "0" ) {
			part.value.forEach(function( part ) {
				partsPush( parts, part.type, part.value );
			});
		} else if ( part.type === "variable" && part.name === "1" ) {
			partsPush( parts, "currency", part.value );
		} else {
			partsPush( parts, "literal", part.value );
		}
	});

	return parts;
};




/**
 * symbolFormat( parts, symbol )
 *
 * Return the appropriate symbol/account form format.
 */
var currencySymbolFormat = function( parts, symbol ) {
	parts.forEach(function( part ) {
		if ( part.type === "currency" ) {
			part.value = symbol;
		}
	});
	return parts;
};




var currencyToPartsFormatterFn = function( numberToPartsFormatter, pluralGenerator, properties ) {
	var fn;

	// Return formatter when style is "name".
	if ( pluralGenerator && properties ) {
		fn = function currencyToPartsFormatter( value ) {
			validateParameterPresence( value, "value" );
			validateParameterTypeNumber( value, "value" );
			return currencyNameFormat(
				numberToPartsFormatter( value ),
				pluralGenerator( value ),
				properties
			);
		};

	// Return formatter when style is "symbol", "accounting", or "code".
	} else {
		fn = function currencyToPartsFormatter( value ) {

			// 1: Reusing pluralGenerator argument, but in this case it is actually `symbol`
			return currencySymbolFormat( numberToPartsFormatter( value ), pluralGenerator /* 1 */ );
		};
	}

	return fn;
};




/**
 * objectOmit( object, keys )
 *
 * Return a copy of the object, filtered to omit the blacklisted key or array of keys.
 */
var objectOmit = function( object, keys ) {
	var key,
		copy = {};

	keys = alwaysArray( keys );

	for ( key in object ) {
		if ( keys.indexOf( key ) === -1 ) {
			copy[ key ] = object[ key ];
		}
	}

	return copy;
};




function validateRequiredCldr( path, value ) {
	validateCldr( path, value, {
		skip: [
			/numbers\/currencies\/[^/]+\/symbol-alt-/,
			/supplemental\/currencyData\/fractions\/[A-Za-z]{3}$/
		]
	});
}

/**
 * .currencyFormatter( currency [, options] )
 *
 * @currency [String] 3-letter currency code as defined by ISO 4217.
 *
 * @options [Object]:
 * - style: [String] "symbol" (default), "accounting", "code" or "name".
 * - see also number/format options.
 *
 * Return a function that formats a currency according to the given options and default/instance
 * locale.
 */
Globalize.currencyFormatter =
Globalize.prototype.currencyFormatter = function( currency, options ) {
	var args, currencyToPartsFormatter, returnFn;

	validateParameterPresence( currency, "currency" );
	validateParameterTypeCurrency( currency, "currency" );

	validateParameterTypePlainObject( options, "options" );

	options = options || {};
	args = [ currency, options ];

	currencyToPartsFormatter = this.currencyToPartsFormatter( currency, options );
	returnFn = currencyFormatterFn( currencyToPartsFormatter );
	runtimeBind( args, this.cldr, returnFn, [ currencyToPartsFormatter ] );

	return returnFn;
};

/**
 * .currencyToPartsFormatter( currency [, options] )
 *
 * @currency [String] 3-letter currency code as defined by ISO 4217.
 *
 * @options [Object]:
 * - style: [String] "symbol" (default), "accounting", "code" or "name".
 * - see also number/format options.
 *
 * Return a currency formatter function (of the form below) according to the given options and the
 * default/instance locale.
 *
 * fn( value )
 *
 * @value [Number]
 *
 * Return a function that formats a currency to parts according to the given options
 * and the default/instance locale.
 */
Globalize.currencyToPartsFormatter =
Globalize.prototype.currencyToPartsFormatter = function( currency, options ) {
	var args, cldr, numberToPartsFormatter, pluralGenerator, properties, returnFn, style;

	validateParameterPresence( currency, "currency" );
	validateParameterTypeCurrency( currency, "currency" );

	validateParameterTypePlainObject( options, "options" );

	cldr = this.cldr;
	options = options || {};

	args = [ currency, options ];
	style = options.style || "symbol";

	validateDefaultLocale( cldr );

	// Get properties given style ("symbol" default, "code" or "name").
	cldr.on( "get", validateRequiredCldr );
	try {
		properties = ({
			accounting: currencySymbolProperties,
			code: currencySymbolProperties,
			name: currencyNameProperties,
			symbol: currencySymbolProperties
		}[ style ] )( currency, cldr, options );
	} finally {
		cldr.off( "get", validateRequiredCldr );
	}

	// options = options minus style, plus raw pattern.
	options = objectOmit( options, "style" );
	options.raw = properties.pattern;

	// Return formatter when style is "symbol", "accounting", or "code".
	if ( style === "symbol" || style === "accounting" || style === "code" ) {
		numberToPartsFormatter = this.numberToPartsFormatter( options );

		returnFn = currencyToPartsFormatterFn( numberToPartsFormatter, properties.symbol );

		runtimeBind( args, cldr, returnFn, [ numberToPartsFormatter, properties.symbol ] );

	// Return formatter when style is "name".
	} else {
		numberToPartsFormatter = this.numberToPartsFormatter( options );

		// Is plural module present? Yes, use its generator. Nope, use an error generator.
		pluralGenerator = this.plural !== undefined ?
			this.pluralGenerator() :
			createErrorPluralModulePresence;

		returnFn = currencyToPartsFormatterFn(
			numberToPartsFormatter,
			pluralGenerator,
			properties
		);

		runtimeBind( args, cldr, returnFn, [
			numberToPartsFormatter,
			pluralGenerator,
			properties
		]);
	}

	return returnFn;
};

/**
 * .currencyParser( currency [, options] )
 *
 * @currency [String] 3-letter currency code as defined by ISO 4217.
 *
 * @options [Object] see currencyFormatter.
 *
 * Return the currency parser according to the given options and the default/instance locale.
 */
Globalize.currencyParser =
Globalize.prototype.currencyParser = function( /* currency, options */ ) {

	// TODO implement parser.

};

/**
 * .formatCurrency( value, currency [, options] )
 *
 * @value [Number] number to be formatted.
 *
 * @currency [String] 3-letter currency code as defined by ISO 4217.
 *
 * @options [Object] see currencyFormatter.
 *
 * Format a currency according to the given options and the default/instance locale.
 */
Globalize.formatCurrency =
Globalize.prototype.formatCurrency = function( value, currency, options ) {
	validateParameterPresence( value, "value" );
	validateParameterTypeNumber( value, "value" );
	return this.currencyFormatter( currency, options )( value );
};

/**
 * .formatCurrencyToParts( value, currency [, options] )
 *
 * @value [Number] number to be formatted.
 *
 * @currency [String] 3-letter currency code as defined by ISO 4217.
 *
 * @options [Object] see currencyFormatter.
 *
 * Format a currency to parts according to the given options and the default/instance locale.
 */
Globalize.formatCurrencyToParts =
Globalize.prototype.formatCurrencyToParts = function( value, currency, options ) {
	validateParameterPresence( value, "value" );
	validateParameterTypeNumber( value, "value" );
	return this.currencyToPartsFormatter( currency, options )( value );
};

/**
 * .parseCurrency( value, currency [, options] )
 *
 * @value [String]
 *
 * @currency [String] 3-letter currency code as defined by ISO 4217.
 *
 * @options [Object]: See currencyFormatter.
 *
 * Return the parsed currency or NaN when value is invalid.
 */
Globalize.parseCurrency =
Globalize.prototype.parseCurrency = function( /* value, currency, options */ ) {
};

return Globalize;




}));

/**
 * Globalize v1.7.0
 *
 * https://github.com/globalizejs/globalize
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-08-02T11:53Z
 */
/*!
 * Globalize v1.7.0 2021-08-02T11:53Z Released under the MIT license
 * http://git.io/TrdQbw
 */
(function( root, factory ) {

	// UMD returnExports
	if ( typeof define === "function" && define.amd ) {

		// AMD
		define([
			"cldr",
			"../globalize",
			"./number",
			"cldr/event",
			"cldr/supplemental"
		], factory );
	} else if ( typeof exports === "object" ) {

		// Node, CommonJS
		module.exports = factory( require( "cldrjs" ), require( "../globalize" ) );
	} else {

		// Extend global
		factory( root.Cldr, root.Globalize );
	}
}(this, function( Cldr, Globalize ) {

var createError = Globalize._createError,
	createErrorUnsupportedFeature = Globalize._createErrorUnsupportedFeature,
	formatMessage = Globalize._formatMessage,
	isPlainObject = Globalize._isPlainObject,
	looseMatching = Globalize._looseMatching,
	numberNumberingSystemDigitsMap = Globalize._numberNumberingSystemDigitsMap,
	numberSymbol = Globalize._numberSymbol,
	partsJoin = Globalize._partsJoin,
	partsPush = Globalize._partsPush,
	regexpEscape = Globalize._regexpEscape,
	removeLiteralQuotes = Globalize._removeLiteralQuotes,
	runtimeBind = Globalize._runtimeBind,
	stringPad = Globalize._stringPad,
	validate = Globalize._validate,
	validateCldr = Globalize._validateCldr,
	validateDefaultLocale = Globalize._validateDefaultLocale,
	validateParameterPresence = Globalize._validateParameterPresence,
	validateParameterType = Globalize._validateParameterType,
	validateParameterTypePlainObject = Globalize._validateParameterTypePlainObject,
	validateParameterTypeString = Globalize._validateParameterTypeString;


var validateParameterTypeDate = function( value, name ) {
	validateParameterType( value, name, value === undefined || value instanceof Date, "Date" );
};




var createErrorInvalidParameterValue = function( name, value ) {
	return createError( "E_INVALID_PAR_VALUE", "Invalid `{name}` value ({value}).", {
		name: name,
		value: value
	});
};




/**
 * Create a map between the skeleton fields and their positions, e.g.,
 * {
 *   G: 0
 *   y: 1
 *   ...
 * }
 */
var validateSkeletonFieldsPosMap = "GyYuUrQqMLlwWEecdDFghHKkmsSAzZOvVXx".split( "" ).reduce(function( memo, item, i ) {
	memo[ item ] = i;
	return memo;
}, {});




/**
 * validateSkeleton( skeleton )
 *
 * skeleton: Assume `j` has already been converted into a localized hour field.
 */
var validateSkeleton = function validateSkeleton( skeleton ) {
	var last,

		// Using easier to read variable.
		fieldsPosMap = validateSkeletonFieldsPosMap;

	// "The fields are from the Date Field Symbol Table in Date Format Patterns"
	// Ref: http://www.unicode.org/reports/tr35/tr35-dates.html#availableFormats_appendItems
	// I.e., check for invalid characters.
	skeleton.replace( /[^GyYuUrQqMLlwWEecdDFghHKkmsSAzZOvVXx]/, function( field ) {
		throw createError(
			"E_INVALID_OPTIONS", "Invalid field `{invalidField}` of skeleton `{value}`",
			{
				invalidField: field,
				type: "skeleton",
				value: skeleton
			}
		);
	});

	// "The canonical order is from top to bottom in that table; that is, yM not My".
	// http://www.unicode.org/reports/tr35/tr35-dates.html#availableFormats_appendItems
	// I.e., check for invalid order.
	skeleton.split( "" ).every(function( field ) {
		if ( fieldsPosMap[ field ] < last ) {
			throw createError(
				"E_INVALID_OPTIONS", "Invalid order `{invalidField}` of skeleton `{value}`",
				{
					invalidField: field,
					type: "skeleton",
					value: skeleton
				}
			);
		}
		last = fieldsPosMap[ field ];
		return true;
	});
};




/**
 * Returns a new object created by using `object`'s values as keys, and the keys as values.
 */
var objectInvert = function( object, fn ) {
	fn = fn || function( object, key, value ) {
		object[ value ] = key;
		return object;
	};
	return Object.keys( object ).reduce(function( newObject, key ) {
		return fn( newObject, key, object[ key ] );
	}, {});
};




// Invert key and values, e.g., {"e": "eEc"} ==> {"e": "e", "E": "e", "c": "e"}.
var dateExpandPatternSimilarFieldsMap = objectInvert({
	"e": "eEc",
	"L": "ML"
}, function( object, key, value ) {
	value.split( "" ).forEach(function( field ) {
		object[ field ] = key;
	});
	return object;
});




var dateExpandPatternNormalizePatternType = function( character ) {
	return dateExpandPatternSimilarFieldsMap[ character ] || character;
};




var datePatternRe = ( /([a-z])\1*|'([^']|'')+'|''|./ig );




var stringRepeat = function( str, count ) {
	var i, result = "";
	for ( i = 0; i < count; i++ ) {
		result = result + str;
	}
	return result;
};




function expandBestMatchFormat( skeletonWithoutFractionalSeconds, bestMatchFormat ) {
	var i, j, bestMatchFormatParts, matchedType, matchedLength, requestedType,
		requestedLength, requestedSkeletonParts,

		// Using an easier to read variable.
		normalizePatternType = dateExpandPatternNormalizePatternType;

	requestedSkeletonParts = skeletonWithoutFractionalSeconds.match( datePatternRe );
	bestMatchFormatParts = bestMatchFormat.match( datePatternRe );

	for ( i = 0; i < bestMatchFormatParts.length; i++ ) {
		matchedType = bestMatchFormatParts[ i ].charAt( 0 );
		matchedLength = bestMatchFormatParts[ i ].length;
		for ( j = 0; j < requestedSkeletonParts.length; j++ ) {
			requestedType = requestedSkeletonParts[ j ].charAt( 0 );
			requestedLength = requestedSkeletonParts[ j ].length;
			if ( normalizePatternType( matchedType ) === normalizePatternType( requestedType ) &&
				matchedLength < requestedLength
			) {
				bestMatchFormatParts[ i ] = stringRepeat( matchedType, requestedLength );
			}
		}
	}

	return bestMatchFormatParts.join( "" );
}

// See: http://www.unicode.org/reports/tr35/tr35-dates.html#Matching_Skeletons
var dateExpandPatternAugmentFormat = function( requestedSkeleton, bestMatchFormat, decimalSeparator ) {
	var countOfFractionalSeconds, fractionalSecondMatch, lastSecondIdx,
		skeletonWithoutFractionalSeconds;

	fractionalSecondMatch = requestedSkeleton.match( /S/g );
	countOfFractionalSeconds = fractionalSecondMatch ? fractionalSecondMatch.length : 0;
	skeletonWithoutFractionalSeconds = requestedSkeleton.replace( /S/g, "" );

	bestMatchFormat = expandBestMatchFormat( skeletonWithoutFractionalSeconds, bestMatchFormat );

	lastSecondIdx = bestMatchFormat.lastIndexOf( "s" );
	if ( lastSecondIdx !== -1 && countOfFractionalSeconds !== 0 ) {
		bestMatchFormat =
			bestMatchFormat.slice( 0, lastSecondIdx + 1 ) +
			decimalSeparator +
			stringRepeat( "S", countOfFractionalSeconds ) +
			bestMatchFormat.slice( lastSecondIdx + 1 );
	}
	return bestMatchFormat;
};




var dateExpandPatternCompareFormats = function( formatA, formatB ) {
	var a, b, distance, lenA, lenB, typeA, typeB, i, j,

		// Using easier to read variables.
		normalizePatternType = dateExpandPatternNormalizePatternType;

	if ( formatA === formatB ) {
		return 0;
	}

	formatA = formatA.match( datePatternRe );
	formatB = formatB.match( datePatternRe );

	if ( formatA.length !== formatB.length ) {
		return -1;
	}

	distance = 1;
	for ( i = 0; i < formatA.length; i++ ) {
		a = formatA[ i ].charAt( 0 );
		typeA = normalizePatternType( a );
		typeB = null;
		for ( j = 0; j < formatB.length; j++ ) {
			b = formatB[ j ].charAt( 0 );
			typeB = normalizePatternType( b );
			if ( typeA === typeB ) {
				break;
			} else {
				typeB = null;
			}
		}
		if ( typeB === null ) {
			return -1;
		}
		lenA = formatA[ i ].length;
		lenB = formatB[ j ].length;
		distance = distance + Math.abs( lenA - lenB );

		// Most symbols have a small distance from each other, e.g., M ≅ L; E ≅ c; a ≅ b ≅ B;
		// H ≅ k ≅ h ≅ K; ...
		if ( a !== b ) {
			distance += 1;
		}

		// Numeric (l<3) and text fields (l>=3) are given a larger distance from each other.
		if ( ( lenA < 3 && lenB >= 3 ) || ( lenA >= 3 && lenB < 3 ) ) {
			distance += 20;
		}
	}
	return distance;
};




var dateExpandPatternGetBestMatchPattern = function( cldr, askedSkeleton ) {
	var availableFormats, decimalSeparator, pattern, ratedFormats, skeleton,
		path = "dates/calendars/gregorian/dateTimeFormats/availableFormats",

		// Using easier to read variables.
		augmentFormat = dateExpandPatternAugmentFormat,
		compareFormats = dateExpandPatternCompareFormats;

	pattern = cldr.main([ path, askedSkeleton ]);

	if ( askedSkeleton && !pattern ) {
		availableFormats = cldr.main([ path ]);
		ratedFormats = [];

		for ( skeleton in availableFormats ) {
			ratedFormats.push({
				skeleton: skeleton,
				pattern: availableFormats[ skeleton ],
				rate: compareFormats( askedSkeleton, skeleton )
			});
		}

		ratedFormats = ratedFormats
			.filter( function( format ) {
				return format.rate > -1;
			} )
			.sort( function( formatA, formatB ) {
				return formatA.rate - formatB.rate;
			});

		if ( ratedFormats.length ) {
			decimalSeparator = numberSymbol( "decimal", cldr );
			pattern = augmentFormat( askedSkeleton, ratedFormats[ 0 ].pattern, decimalSeparator );
		}
	}

	return pattern;
};




/**
 * expandPattern( options, cldr )
 *
 * @options [Object] if String, it's considered a skeleton. Object accepts:
 * - skeleton: [String] lookup availableFormat;
 * - date: [String] ( "full" | "long" | "medium" | "short" );
 * - time: [String] ( "full" | "long" | "medium" | "short" );
 * - datetime: [String] ( "full" | "long" | "medium" | "short" );
 * - raw: [String] For more info see datetime/format.js.
 *
 * @cldr [Cldr instance].
 *
 * Return the corresponding pattern.
 * Eg for "en":
 * - "GyMMMd" returns "MMM d, y G";
 * - { skeleton: "GyMMMd" } returns "MMM d, y G";
 * - { date: "full" } returns "EEEE, MMMM d, y";
 * - { time: "full" } returns "h:mm:ss a zzzz";
 * - { datetime: "full" } returns "EEEE, MMMM d, y 'at' h:mm:ss a zzzz";
 * - { raw: "dd/mm" } returns "dd/mm";
 */
var dateExpandPattern = function( options, cldr ) {
	var dateSkeleton, result, skeleton, timeSkeleton, type,

		// Using easier to read variables.
		getBestMatchPattern = dateExpandPatternGetBestMatchPattern;

	function combineDateTime( type, datePattern, timePattern ) {
		return formatMessage(
			cldr.main([
				"dates/calendars/gregorian/dateTimeFormats",
				type
			]),
			[ timePattern, datePattern ]
		);
	}

	switch ( true ) {
		case "skeleton" in options:
			skeleton = options.skeleton;

			// Preferred hour (j).
			skeleton = skeleton.replace( /j/g, function() {
				return cldr.supplemental.timeData.preferred();
			});

			validateSkeleton( skeleton );

			// Try direct map (note that getBestMatchPattern handles it).
			// ... or, try to "best match" the whole skeleton.
			result = getBestMatchPattern(
				cldr,
				skeleton
			);
			if ( result ) {
				break;
			}

			// ... or, try to "best match" the date and time parts individually.
			timeSkeleton = skeleton.split( /[^hHKkmsSAzZOvVXx]/ ).slice( -1 )[ 0 ];
			dateSkeleton = skeleton.split( /[^GyYuUrQqMLlwWdDFgEec]/ )[ 0 ];
			dateSkeleton = getBestMatchPattern(
				cldr,
				dateSkeleton
			);
			timeSkeleton = getBestMatchPattern(
				cldr,
				timeSkeleton
			);

			if ( /(MMMM|LLLL).*[Ec]/.test( dateSkeleton ) ) {
				type = "full";
			} else if ( /MMMM|LLLL/.test( dateSkeleton ) ) {
				type = "long";
			} else if ( /MMM|LLL/.test( dateSkeleton ) ) {
				type = "medium";
			} else {
				type = "short";
			}

			if ( dateSkeleton && timeSkeleton ) {
				result = combineDateTime( type, dateSkeleton, timeSkeleton );
			} else {
				result = dateSkeleton || timeSkeleton;
			}

			break;

		case "date" in options:
		case "time" in options:
			result = cldr.main([
				"dates/calendars/gregorian",
				"date" in options ? "dateFormats" : "timeFormats",
				( options.date || options.time )
			]);
			break;

		case "datetime" in options:
			result = combineDateTime( options.datetime,
				cldr.main([ "dates/calendars/gregorian/dateFormats", options.datetime ]),
				cldr.main([ "dates/calendars/gregorian/timeFormats", options.datetime ])
			);
			break;

		case "raw" in options:
			result = options.raw;
			break;

		default:
			throw createErrorInvalidParameterValue({
				name: "options",
				value: options
			});
	}

	return result;
};




var dateWeekDays = [ "sun", "mon", "tue", "wed", "thu", "fri", "sat" ];




/**
 * firstDayOfWeek
 */
var dateFirstDayOfWeek = function( cldr ) {
	return dateWeekDays.indexOf( cldr.supplemental.weekData.firstDay() );
};




/**
 * getTimeZoneName( length, type )
 */
var dateGetTimeZoneName = function( length, type, timeZone, cldr ) {
	var metaZone, result;

	if ( !timeZone ) {
		return;
	}

	result = cldr.main([
		"dates/timeZoneNames/zone",
		timeZone,
		length < 4 ? "short" : "long",
		type
	]);

	if ( result ) {
		return result;
	}

	// The latest metazone data of the metazone array.
	// TODO expand to support the historic metazones based on the given date.
	metaZone = cldr.supplemental([
		"metaZones/metazoneInfo/timezone", timeZone, 0,
		"usesMetazone/_mzone"
	]);

	return cldr.main([
		"dates/timeZoneNames/metazone",
		metaZone,
		length < 4 ? "short" : "long",
		type
	]);
};




/**
 * timezoneHourFormatShortH( hourFormat )
 *
 * @hourFormat [String]
 *
 * Unofficial deduction of the short hourFormat given time zone `hourFormat` element.
 * Official spec is pending resolution: http://unicode.org/cldr/trac/ticket/8293
 *
 * Example:
 * - "+HH.mm;-HH.mm" => "+H;-H"
 * - "+HH:mm;-HH:mm" => "+H;-H"
 * - "+HH:mm;−HH:mm" => "+H;−H" (Note MINUS SIGN \u2212)
 * - "+HHmm;-HHmm" => "+H:-H"
 */
var dateTimezoneHourFormatH = function( hourFormat ) {
	return hourFormat
		.split( ";" )
		.map(function( format ) {
			return format.slice( 0, format.indexOf( "H" ) + 1 );
		})
		.join( ";" );
};




/**
 * timezoneHourFormatLongHm( hourFormat )
 *
 * @hourFormat [String]
 *
 * Unofficial deduction of the short hourFormat given time zone `hourFormat` element.
 * Official spec is pending resolution: http://unicode.org/cldr/trac/ticket/8293
 *
 * Example (hFormat === "H"): (used for short Hm)
 * - "+HH.mm;-HH.mm" => "+H.mm;-H.mm"
 * - "+HH:mm;-HH:mm" => "+H:mm;-H:mm"
 * - "+HH:mm;−HH:mm" => "+H:mm;−H:mm" (Note MINUS SIGN \u2212)
 * - "+HHmm;-HHmm" => "+Hmm:-Hmm"
 *
 * Example (hFormat === "HH": (used for long Hm)
 * - "+HH.mm;-HH.mm" => "+HH.mm;-HH.mm"
 * - "+HH:mm;-HH:mm" => "+HH:mm;-HH:mm"
 * - "+H:mm;-H:mm"   => "+HH:mm;-HH:mm"
 * - "+HH:mm;−HH:mm" => "+HH:mm;−HH:mm" (Note MINUS SIGN \u2212)
 * - "+HHmm;-HHmm" => "+HHmm:-HHmm"
 */
var dateTimezoneHourFormatHm = function( hourFormat, hFormat ) {
	return hourFormat
		.split( ";" )
		.map(function( format ) {
			var parts = format.split( /H+/ );
			parts.splice( 1, 0, hFormat );
			return parts.join( "" );
		})
		.join( ";" );
};




var runtimeCacheDataBind = function( key, data ) {
	var fn = function() {
		return data;
	};
	fn.dataCacheKey = key;
	return fn;
};




/**
 * properties( pattern, cldr )
 *
 * @pattern [String] raw pattern.
 * ref: http://www.unicode.org/reports/tr35/tr35-dates.html#Date_Format_Patterns
 *
 * @cldr [Cldr instance].
 *
 * Return the properties given the pattern and cldr.
 *
 * TODO Support other calendar types.
 */
var dateFormatProperties = function( pattern, cldr, timeZone ) {
	var properties = {
			numberFormatters: {},
			pattern: pattern,
			timeSeparator: numberSymbol( "timeSeparator", cldr )
		},
		widths = [ "abbreviated", "wide", "narrow" ];

	function setNumberFormatterPattern( pad ) {
		properties.numberFormatters[ pad ] = stringPad( "", pad );
	}

	if ( timeZone ) {
		properties.timeZoneData = runtimeCacheDataBind( "iana/" + timeZone, {
			offsets: cldr.get([ "globalize-iana/zoneData", timeZone, "offsets" ]),
			untils: cldr.get([ "globalize-iana/zoneData", timeZone, "untils" ]),
			isdsts: cldr.get([ "globalize-iana/zoneData", timeZone, "isdsts" ])
		});
	}

	pattern.replace( datePatternRe, function( current ) {
		var aux, chr, daylightTzName, formatNumber, genericTzName, length, standardTzName;

		chr = current.charAt( 0 );
		length = current.length;

		if ( chr === "j" ) {

			// Locale preferred hHKk.
			// http://www.unicode.org/reports/tr35/tr35-dates.html#Time_Data
			properties.preferredTime = chr = cldr.supplemental.timeData.preferred();
		}

		// ZZZZ: same as "OOOO".
		if ( chr === "Z" && length === 4 ) {
			chr = "O";
			length = 4;
		}

		// z...zzz: "{shortRegion}", eg. "PST" or "PDT".
		// zzzz: "{regionName} {Standard Time}" or "{regionName} {Daylight Time}",
		//       e.g., "Pacific Standard Time" or "Pacific Daylight Time".
		// http://unicode.org/reports/tr35/tr35-dates.html#Date_Format_Patterns
		if ( chr === "z" ) {
			standardTzName = dateGetTimeZoneName( length, "standard", timeZone, cldr );
			daylightTzName = dateGetTimeZoneName( length, "daylight", timeZone, cldr );
			if ( standardTzName ) {
				properties.standardTzName = standardTzName;
			}
			if ( daylightTzName ) {
				properties.daylightTzName = daylightTzName;
			}

			// Fall through the "O" format in case one name is missing.
			if ( !standardTzName || !daylightTzName ) {
				chr = "O";
				if ( length < 4 ) {
					length = 1;
				}
			}
		}

		// v...vvv: "{shortRegion}", eg. "PT".
		// vvvv: "{regionName} {Time}" or "{regionName} {Time}",
		// e.g., "Pacific Time"
		// http://unicode.org/reports/tr35/tr35-dates.html#Date_Format_Patterns
		if ( chr === "v" ) {
			genericTzName = dateGetTimeZoneName( length, "generic", timeZone, cldr );

			// Fall back to "V" format.
			if ( !genericTzName ) {
				chr = "V";
				length = 4;
			}
		}

		switch ( chr ) {

			// Era
			case "G":
				properties.eras = cldr.main([
					"dates/calendars/gregorian/eras",
					length <= 3 ? "eraAbbr" : ( length === 4 ? "eraNames" : "eraNarrow" )
				]);
				break;

			// Year
			case "y":

				// Plain year.
				formatNumber = true;
				break;

			case "Y":

				// Year in "Week of Year"
				properties.firstDay = dateFirstDayOfWeek( cldr );
				properties.minDays = cldr.supplemental.weekData.minDays();
				formatNumber = true;
				break;

			case "u": // Extended year. Need to be implemented.
			case "U": // Cyclic year name. Need to be implemented.
				throw createErrorUnsupportedFeature({
					feature: "year pattern `" + chr + "`"
				});

			// Quarter
			case "Q":
			case "q":
				if ( length > 2 ) {
					if ( !properties.quarters ) {
						properties.quarters = {};
					}
					if ( !properties.quarters[ chr ] ) {
						properties.quarters[ chr ] = {};
					}
					properties.quarters[ chr ][ length ] = cldr.main([
						"dates/calendars/gregorian/quarters",
						chr === "Q" ? "format" : "stand-alone",
						widths[ length - 3 ]
					]);
				} else {
					formatNumber = true;
				}
				break;

			// Month
			case "M":
			case "L":
				if ( length > 2 ) {
					if ( !properties.months ) {
						properties.months = {};
					}
					if ( !properties.months[ chr ] ) {
						properties.months[ chr ] = {};
					}
					properties.months[ chr ][ length ] = cldr.main([
						"dates/calendars/gregorian/months",
						chr === "M" ? "format" : "stand-alone",
						widths[ length - 3 ]
					]);
				} else {
					formatNumber = true;
				}
				break;

			// Week - Week of Year (w) or Week of Month (W).
			case "w":
			case "W":
				properties.firstDay = dateFirstDayOfWeek( cldr );
				properties.minDays = cldr.supplemental.weekData.minDays();
				formatNumber = true;
				break;

			// Day
			case "d":
			case "D":
			case "F":
				formatNumber = true;
				break;

			case "g":

				// Modified Julian day. Need to be implemented.
				throw createErrorUnsupportedFeature({
					feature: "Julian day pattern `g`"
				});

			// Week day
			case "e":
			case "c":
				if ( length <= 2 ) {
					properties.firstDay = dateFirstDayOfWeek( cldr );
					formatNumber = true;
					break;
				}

			/* falls through */
			case "E":
				if ( !properties.days ) {
					properties.days = {};
				}
				if ( !properties.days[ chr ] ) {
					properties.days[ chr ] = {};
				}
				if ( length === 6 ) {

					// If short day names are not explicitly specified, abbreviated day names are
					// used instead.
					// http://www.unicode.org/reports/tr35/tr35-dates.html#months_days_quarters_eras
					// http://unicode.org/cldr/trac/ticket/6790
					properties.days[ chr ][ length ] = cldr.main([
							"dates/calendars/gregorian/days",
							chr === "c" ? "stand-alone" : "format",
							"short"
						]) || cldr.main([
							"dates/calendars/gregorian/days",
							chr === "c" ? "stand-alone" : "format",
							"abbreviated"
						]);
				} else {
					properties.days[ chr ][ length ] = cldr.main([
						"dates/calendars/gregorian/days",
						chr === "c" ? "stand-alone" : "format",
						widths[ length < 3 ? 0 : length - 3 ]
					]);
				}
				break;

			// Period (AM or PM)
			case "a":
				properties.dayPeriods = {
					am: cldr.main(
						"dates/calendars/gregorian/dayPeriods/format/wide/am"
					),
					pm: cldr.main(
						"dates/calendars/gregorian/dayPeriods/format/wide/pm"
					)
				};
				break;

			// Hour
			case "h": // 1-12
			case "H": // 0-23
			case "K": // 0-11
			case "k": // 1-24

			// Minute
			case "m":

			// Second
			case "s":
			case "S":
			case "A":
				formatNumber = true;
				break;

			// Zone
			case "v":
				if ( length !== 1 && length !== 4 ) {
					throw createErrorUnsupportedFeature({
						feature: "timezone pattern `" + pattern + "`"
					});
				}
				properties.genericTzName = genericTzName;
				break;

			case "V":

				if ( length === 1 ) {
					throw createErrorUnsupportedFeature({
						feature: "timezone pattern `" + pattern + "`"
					});
				}

				if ( timeZone ) {
					if ( length === 2 ) {
						properties.timeZoneName = timeZone;
						break;
					}

					var timeZoneName,
						exemplarCity = cldr.main([
							"dates/timeZoneNames/zone", timeZone, "exemplarCity"
						]);

					if ( length === 3 ) {
						if ( !exemplarCity ) {
							exemplarCity = cldr.main([
								"dates/timeZoneNames/zone/Etc/Unknown/exemplarCity"
							]);
						}
						timeZoneName = exemplarCity;
					}

					if ( exemplarCity && length === 4 ) {
						timeZoneName = formatMessage(
							cldr.main(
								"dates/timeZoneNames/regionFormat"
							),
							[ exemplarCity ]
						);
					}

					if ( timeZoneName ) {
						properties.timeZoneName = timeZoneName;
						break;
					}
				}

				if ( current === "v" ) {
					length = 1;
				}

			/* falls through */
			case "O":

				// O: "{gmtFormat}+H;{gmtFormat}-H" or "{gmtZeroFormat}", eg. "GMT-8" or "GMT".
				// OOOO: "{gmtFormat}{hourFormat}" or "{gmtZeroFormat}", eg. "GMT-08:00" or "GMT".
				properties.gmtFormat = cldr.main( "dates/timeZoneNames/gmtFormat" );
				properties.gmtZeroFormat = cldr.main( "dates/timeZoneNames/gmtZeroFormat" );

				// Unofficial deduction of the hourFormat variations.
				// Official spec is pending resolution: http://unicode.org/cldr/trac/ticket/8293
				aux = cldr.main( "dates/timeZoneNames/hourFormat" );
				properties.hourFormat = length < 4 ?
					[ dateTimezoneHourFormatH( aux ), dateTimezoneHourFormatHm( aux, "H" ) ] :
					dateTimezoneHourFormatHm( aux, "HH" );

			/* falls through */
			case "Z":
			case "X":
			case "x":
				setNumberFormatterPattern( 1 );
				setNumberFormatterPattern( 2 );
				break;
		}

		if ( formatNumber ) {
			setNumberFormatterPattern( length );
		}
	});

	return properties;
};




var dateFormatterFn = function( dateToPartsFormatter ) {
	return function dateFormatter( value ) {
		return partsJoin( dateToPartsFormatter( value ));
	};
};




/**
 * parseProperties( cldr )
 *
 * @cldr [Cldr instance].
 *
 * @timeZone [String] FIXME.
 *
 * Return parser properties.
 */
var dateParseProperties = function( cldr, timeZone ) {
	var properties = {
		preferredTimeData: cldr.supplemental.timeData.preferred()
	};

	if ( timeZone ) {
		properties.timeZoneData = runtimeCacheDataBind( "iana/" + timeZone, {
			offsets: cldr.get([ "globalize-iana/zoneData", timeZone, "offsets" ]),
			untils: cldr.get([ "globalize-iana/zoneData", timeZone, "untils" ]),
			isdsts: cldr.get([ "globalize-iana/zoneData", timeZone, "isdsts" ])
		});
	}

	return properties;
};


var ZonedDateTime = (function() {
function definePrivateProperty(object, property, value) {
  Object.defineProperty(object, property, {
    value: value
  });
}

function getUntilsIndex(original, untils) {
  var index = 0;
  var originalTime = original.getTime();

  // TODO Should we do binary search for improved performance?
  while (index < untils.length - 1 && originalTime >= untils[index]) {
    index++;
  }
  return index;
}

function setWrap(fn) {
  var offset1 = this.getTimezoneOffset();
  var ret = fn();
  this.original.setTime(new Date(this.getTime()));
  var offset2 = this.getTimezoneOffset();
  if (offset2 - offset1) {
    this.original.setMinutes(this.original.getMinutes() + offset2 - offset1);
  }
  return ret;
}

var ZonedDateTime = function(date, timeZoneData) {
  definePrivateProperty(this, "original", new Date(date.getTime()));
  definePrivateProperty(this, "local", new Date(date.getTime()));
  definePrivateProperty(this, "timeZoneData", timeZoneData);
  definePrivateProperty(this, "setWrap", setWrap);
  if (!(timeZoneData.untils && timeZoneData.offsets && timeZoneData.isdsts)) {
    throw new Error("Invalid IANA data");
  }
  this.setTime(this.local.getTime() - this.getTimezoneOffset() * 60 * 1000);
};

ZonedDateTime.prototype.clone = function() {
  return new ZonedDateTime(this.original, this.timeZoneData);
};

// Date field getters.
["getFullYear", "getMonth", "getDate", "getDay", "getHours", "getMinutes",
"getSeconds", "getMilliseconds"].forEach(function(method) {
  // Corresponding UTC method, e.g., "getUTCFullYear" if method === "getFullYear".
  var utcMethod = "getUTC" + method.substr(3);
  ZonedDateTime.prototype[method] = function() {
    return this.local[utcMethod]();
  };
});

// Note: Define .valueOf = .getTime for arithmetic operations like date1 - date2.
ZonedDateTime.prototype.valueOf =
ZonedDateTime.prototype.getTime = function() {
  return this.local.getTime() + this.getTimezoneOffset() * 60 * 1000;
};

ZonedDateTime.prototype.getTimezoneOffset = function() {
  var index = getUntilsIndex(this.original, this.timeZoneData.untils);
  return this.timeZoneData.offsets[index];
};

// Date field setters.
["setFullYear", "setMonth", "setDate", "setHours", "setMinutes", "setSeconds", "setMilliseconds"].forEach(function(method) {
  // Corresponding UTC method, e.g., "setUTCFullYear" if method === "setFullYear".
  var utcMethod = "setUTC" + method.substr(3);
  ZonedDateTime.prototype[method] = function(value) {
    var local = this.local;
    // Note setWrap is needed for seconds and milliseconds just because
    // abs(value) could be >= a minute.
    return this.setWrap(function() {
      return local[utcMethod](value);
    });
  };
});

ZonedDateTime.prototype.setTime = function(time) {
  return this.local.setTime(time);
};

ZonedDateTime.prototype.isDST = function() {
  var index = getUntilsIndex(this.original, this.timeZoneData.untils);
  return Boolean(this.timeZoneData.isdsts[index]);
};

ZonedDateTime.prototype.inspect = function() {
  var index = getUntilsIndex(this.original, this.timeZoneData.untils);
  var abbrs = this.timeZoneData.abbrs;
  return this.local.toISOString().replace(/Z$/, "") + " " +
    (abbrs && abbrs[index] + " " || (this.getTimezoneOffset() * -1) + " ") +
    (this.isDST() ? "(daylight savings)" : "");
};

ZonedDateTime.prototype.toDate = function() {
  return new Date(this.getTime());
};

// Type cast getters.
["toISOString", "toJSON", "toUTCString"].forEach(function(method) {
  ZonedDateTime.prototype[method] = function() {
    return this.toDate()[method]();
  };
});

return ZonedDateTime;
}());


/**
 * isLeapYear( year )
 *
 * @year [Number]
 *
 * Returns an indication whether the specified year is a leap year.
 */
var dateIsLeapYear = function( year ) {
	return new Date( year, 1, 29 ).getMonth() === 1;
};




/**
 * lastDayOfMonth( date )
 *
 * @date [Date]
 *
 * Return the last day of the given date's month
 */
var dateLastDayOfMonth = function( date ) {
	return new Date( date.getFullYear(), date.getMonth() + 1, 0 ).getDate();
};




/**
 * startOf changes the input to the beginning of the given unit.
 *
 * For example, starting at the start of a day, resets hours, minutes
 * seconds and milliseconds to 0. Starting at the month does the same, but
 * also sets the date to 1.
 *
 * Returns the modified date
 */
var dateStartOf = function( date, unit ) {
	date = date instanceof ZonedDateTime ? date.clone() : new Date( date.getTime() );
	switch ( unit ) {
		case "year":
			date.setMonth( 0 );
		/* falls through */
		case "month":
			date.setDate( 1 );
		/* falls through */
		case "day":
			date.setHours( 0 );
		/* falls through */
		case "hour":
			date.setMinutes( 0 );
		/* falls through */
		case "minute":
			date.setSeconds( 0 );
		/* falls through */
		case "second":
			date.setMilliseconds( 0 );
	}
	return date;
};




/**
 * Differently from native date.setDate(), this function returns a date whose
 * day remains inside the month boundaries. For example:
 *
 * setDate( FebDate, 31 ): a "Feb 28" date.
 * setDate( SepDate, 31 ): a "Sep 30" date.
 */
var dateSetDate = function( date, day ) {
	var lastDay = new Date( date.getFullYear(), date.getMonth() + 1, 0 ).getDate();

	date.setDate( day < 1 ? 1 : day < lastDay ? day : lastDay );
};




/**
 * Differently from native date.setMonth(), this function adjusts date if
 * needed, so final month is always the one set.
 *
 * setMonth( Jan31Date, 1 ): a "Feb 28" date.
 * setDate( Jan31Date, 8 ): a "Sep 30" date.
 */
var dateSetMonth = function( date, month ) {
	var originalDate = date.getDate();

	date.setDate( 1 );
	date.setMonth( month );
	dateSetDate( date, originalDate );
};




var outOfRange = function( value, low, high ) {
	return value < low || value > high;
};




/**
 * parse( value, tokens, properties )
 *
 * @value [String] string date.
 *
 * @tokens [Object] tokens returned by date/tokenizer.
 *
 * @properties [Object] output returned by date/tokenizer-properties.
 *
 * ref: http://www.unicode.org/reports/tr35/tr35-dates.html#Date_Format_Patterns
 */
var dateParse = function( _value, tokens, properties ) {
	var amPm, day, daysOfYear, month, era, hour, hour12, timezoneOffset, valid,
		YEAR = 0,
		MONTH = 1,
		DAY = 2,
		HOUR = 3,
		MINUTE = 4,
		SECOND = 5,
		MILLISECONDS = 6,
		date = new Date(),
		truncateAt = [],
		units = [ "year", "month", "day", "hour", "minute", "second", "milliseconds" ];

	// Create globalize date with given timezone data.
	if ( properties.timeZoneData ) {
		date = new ZonedDateTime( date, properties.timeZoneData() );
	}

	if ( !tokens.length ) {
		return null;
	}

	valid = tokens.every(function( token ) {
		var century, chr, value, length;

		if ( token.type === "literal" ) {

			// continue
			return true;
		}

		chr = token.type.charAt( 0 );
		length = token.type.length;

		if ( chr === "j" ) {

			// Locale preferred hHKk.
			// http://www.unicode.org/reports/tr35/tr35-dates.html#Time_Data
			chr = properties.preferredTimeData;
		}

		switch ( chr ) {

			// Era
			case "G":
				truncateAt.push( YEAR );
				era = +token.value;
				break;

			// Year
			case "y":
				value = token.value;
				if ( length === 2 ) {
					if ( outOfRange( value, 0, 99 ) ) {
						return false;
					}

					// mimic dojo/date/locale: choose century to apply, according to a sliding
					// window of 80 years before and 20 years after present year.
					century = Math.floor( date.getFullYear() / 100 ) * 100;
					value += century;
					if ( value > date.getFullYear() + 20 ) {
						value -= 100;
					}
				}
				date.setFullYear( value );
				truncateAt.push( YEAR );
				break;

			case "Y": // Year in "Week of Year"
				throw createErrorUnsupportedFeature({
					feature: "year pattern `" + chr + "`"
				});

			// Quarter (skip)
			case "Q":
			case "q":
				break;

			// Month
			case "M":
			case "L":
				if ( length <= 2 ) {
					value = token.value;
				} else {
					value = +token.value;
				}
				if ( outOfRange( value, 1, 12 ) ) {
					return false;
				}

				// Setting the month later so that we have the correct year and can determine
				// the correct last day of February in case of leap year.
				month = value;
				truncateAt.push( MONTH );
				break;

			// Week (skip)
			case "w": // Week of Year.
			case "W": // Week of Month.
				break;

			// Day
			case "d":
				day = token.value;
				truncateAt.push( DAY );
				break;

			case "D":
				daysOfYear = token.value;
				truncateAt.push( DAY );
				break;

			case "F":

				// Day of Week in month. eg. 2nd Wed in July.
				// Skip
				break;

			// Week day
			case "e":
			case "c":
			case "E":

				// Skip.
				// value = arrayIndexOf( dateWeekDays, token.value );
				break;

			// Period (AM or PM)
			case "a":
				amPm = token.value;
				break;

			// Hour
			case "h": // 1-12
				value = token.value;
				if ( outOfRange( value, 1, 12 ) ) {
					return false;
				}
				hour = hour12 = true;
				date.setHours( value === 12 ? 0 : value );
				truncateAt.push( HOUR );
				break;

			case "K": // 0-11
				value = token.value;
				if ( outOfRange( value, 0, 11 ) ) {
					return false;
				}
				hour = hour12 = true;
				date.setHours( value );
				truncateAt.push( HOUR );
				break;

			case "k": // 1-24
				value = token.value;
				if ( outOfRange( value, 1, 24 ) ) {
					return false;
				}
				hour = true;
				date.setHours( value === 24 ? 0 : value );
				truncateAt.push( HOUR );
				break;

			case "H": // 0-23
				value = token.value;
				if ( outOfRange( value, 0, 23 ) ) {
					return false;
				}
				hour = true;
				date.setHours( value );
				truncateAt.push( HOUR );
				break;

			// Minute
			case "m":
				value = token.value;
				if ( outOfRange( value, 0, 59 ) ) {
					return false;
				}
				date.setMinutes( value );
				truncateAt.push( MINUTE );
				break;

			// Second
			case "s":
				value = token.value;
				if ( outOfRange( value, 0, 59 ) ) {
					return false;
				}
				date.setSeconds( value );
				truncateAt.push( SECOND );
				break;

			case "A":
				date.setHours( 0 );
				date.setMinutes( 0 );
				date.setSeconds( 0 );

			/* falls through */
			case "S":
				value = Math.round( token.value * Math.pow( 10, 3 - length ) );
				date.setMilliseconds( value );
				truncateAt.push( MILLISECONDS );
				break;

			// Zone
			case "z":
			case "Z":
			case "O":
			case "v":
			case "V":
			case "X":
			case "x":
				if ( typeof token.value === "number" ) {
					timezoneOffset = token.value;
				}
				break;
		}

		return true;
	});

	if ( !valid ) {
		return null;
	}

	// 12-hour format needs AM or PM, 24-hour format doesn't, ie. return null
	// if amPm && !hour12 || !amPm && hour12.
	if ( hour && !( !amPm ^ hour12 ) ) {
		return null;
	}

	if ( era === 0 ) {

		// 1 BC = year 0
		date.setFullYear( date.getFullYear() * -1 + 1 );
	}

	if ( month !== undefined ) {
		dateSetMonth( date, month - 1 );
	}

	if ( day !== undefined ) {
		if ( outOfRange( day, 1, dateLastDayOfMonth( date ) ) ) {
			return null;
		}
		date.setDate( day );
	} else if ( daysOfYear !== undefined ) {
		if ( outOfRange( daysOfYear, 1, dateIsLeapYear( date.getFullYear() ) ? 366 : 365 ) ) {
			return null;
		}
		date.setMonth( 0 );
		date.setDate( daysOfYear );
	}

	if ( hour12 && amPm === "pm" ) {
		date.setHours( date.getHours() + 12 );
	}

	if ( timezoneOffset !== undefined ) {
		date.setMinutes( date.getMinutes() + timezoneOffset - date.getTimezoneOffset() );
	}

	// Truncate date at the most precise unit defined. Eg.
	// If value is "12/31", and pattern is "MM/dd":
	// => new Date( <current Year>, 12, 31, 0, 0, 0, 0 );
	truncateAt = Math.max.apply( null, truncateAt );
	date = dateStartOf( date, units[ truncateAt ] );

	// Get date back from globalize date.
	if ( date instanceof ZonedDateTime ) {
		date = date.toDate();
	}

	return date;
};


/* eslint-disable no-unused-expressions */



/**
 * tokenizer( value, numberParser, properties )
 *
 * @value [String] string date.
 *
 * @numberParser [Function]
 *
 * @properties [Object] output returned by date/tokenizer-properties.
 *
 * Returns an Array of tokens, eg. value "5 o'clock PM", pattern "h 'o''clock' a":
 * [{
 *   type: "h",
 *   lexeme: "5"
 * }, {
 *   type: "literal",
 *   lexeme: " "
 * }, {
 *   type: "literal",
 *   lexeme: "o'clock"
 * }, {
 *   type: "literal",
 *   lexeme: " "
 * }, {
 *   type: "a",
 *   lexeme: "PM",
 *   value: "pm"
 * }]
 *
 * OBS: lexeme's are always String and may return invalid ranges depending of the token type.
 * Eg. "99" for month number.
 *
 * Return an empty Array when not successfully parsed.
 */
var dateTokenizer = function( value, numberParser, properties ) {
	var digitsRe, valid,
		tokens = [],
		widths = [ "abbreviated", "wide", "narrow" ];

	digitsRe = properties.digitsRe;
	value = looseMatching( value );

	valid = properties.pattern.match( datePatternRe ).every(function( current ) {
		var aux, chr, length, numeric, tokenRe,
			token = {};

		function hourFormatParse( tokenRe, numberParser ) {
			var aux, isPositive,
				match = value.match( tokenRe );
			numberParser = numberParser || function( value ) {
				return +value;
			};

			if ( !match ) {
				return false;
			}

			isPositive = match[ 1 ];

			// hourFormat containing H only, e.g., `+H;-H`
			if ( match.length < 6 ) {
				aux = isPositive ? 1 : 3;
				token.value = numberParser( match[ aux ] ) * 60;

			// hourFormat containing H and m, e.g., `+HHmm;-HHmm`
			} else if ( match.length < 10 ) {
				aux = isPositive ? [ 1, 3 ] : [ 5, 7 ];
				token.value = numberParser( match[ aux[ 0 ] ] ) * 60 +
					numberParser( match[ aux[ 1 ] ] );

			// hourFormat containing H, m, and s e.g., `+HHmmss;-HHmmss`
			} else {
				aux = isPositive ? [ 1, 3, 5 ] : [ 7, 9, 11 ];
				token.value = numberParser( match[ aux[ 0 ] ] ) * 60 +
					numberParser( match[ aux[ 1 ] ] ) +
					numberParser( match[ aux[ 2 ] ] ) / 60;
			}

			if ( isPositive ) {
				token.value *= -1;
			}

			return true;
		}

		function oneDigitIfLengthOne() {
			if ( length === 1 ) {

				// Unicode equivalent to /\d/
				numeric = true;
				return tokenRe = digitsRe;
			}
		}

		function oneOrTwoDigitsIfLengthOne() {
			if ( length === 1 ) {

				// Unicode equivalent to /\d\d?/
				numeric = true;
				return tokenRe = new RegExp( "^(" + digitsRe.source + "){1,2}" );
			}
		}

		function oneOrTwoDigitsIfLengthOneOrTwo() {
			if ( length === 1 || length === 2 ) {

				// Unicode equivalent to /\d\d?/
				numeric = true;
				return tokenRe = new RegExp( "^(" + digitsRe.source + "){1,2}" );
			}
		}

		function twoDigitsIfLengthTwo() {
			if ( length === 2 ) {

				// Unicode equivalent to /\d\d/
				numeric = true;
				return tokenRe = new RegExp( "^(" + digitsRe.source + "){2}" );
			}
		}

		// Brute-force test every locale entry in an attempt to match the given value.
		// Return the first found one (and set token accordingly), or null.
		function lookup( path ) {
			var array = properties[ path.join( "/" ) ];

			if ( !array ) {
				return null;
			}

			// array of pairs [key, value] sorted by desc value length.
			array.some(function( item ) {
				var valueRe = item[ 1 ];
				if ( valueRe.test( value ) ) {
					token.value = item[ 0 ];
					tokenRe = item[ 1 ];
					return true;
				}
			});
			return null;
		}

		token.type = current;
		chr = current.charAt( 0 );
		length = current.length;

		if ( chr === "Z" ) {

			// Z..ZZZ: same as "xxxx".
			if ( length < 4 ) {
				chr = "x";
				length = 4;

			// ZZZZ: same as "OOOO".
			} else if ( length < 5 ) {
				chr = "O";
				length = 4;

			// ZZZZZ: same as "XXXXX"
			} else {
				chr = "X";
				length = 5;
			}
		}

		if ( chr === "z" ) {
			if ( properties.standardOrDaylightTzName ) {
				token.value = null;
				tokenRe = properties.standardOrDaylightTzName;
			}
		}

		// v...vvv: "{shortRegion}", eg. "PT".
		// vvvv: "{regionName} {Time}" or "{regionName} {Time}",
		// e.g., "Pacific Time"
		// http://unicode.org/reports/tr35/tr35-dates.html#Date_Format_Patterns
		if ( chr === "v" ) {
			if ( properties.genericTzName ) {
				token.value = null;
				tokenRe = properties.genericTzName;

			// Fall back to "V" format.
			} else {
				chr = "V";
				length = 4;
			}
		}

		if ( chr === "V" && properties.timeZoneName ) {
			token.value = length === 2 ? properties.timeZoneName : null;
			tokenRe = properties.timeZoneNameRe;
		}

		switch ( chr ) {

			// Era
			case "G":
				lookup([
					"gregorian/eras",
					length <= 3 ? "eraAbbr" : ( length === 4 ? "eraNames" : "eraNarrow" )
				]);
				break;

			// Year
			case "y":
			case "Y":
				numeric = true;

				// number l=1:+, l=2:{2}, l=3:{3,}, l=4:{4,}, ...
				if ( length === 1 ) {

					// Unicode equivalent to /\d+/.
					tokenRe = new RegExp( "^(" + digitsRe.source + ")+" );
				} else if ( length === 2 ) {

					// Lenient parsing: there's no year pattern to indicate non-zero-padded 2-digits
					// year, so parser accepts both zero-padded and non-zero-padded for `yy`.
					//
					// Unicode equivalent to /\d\d?/
					tokenRe = new RegExp( "^(" + digitsRe.source + "){1,2}" );
				} else {

					// Unicode equivalent to /\d{length,}/
					tokenRe = new RegExp( "^(" + digitsRe.source + "){" + length + ",}" );
				}
				break;

			// Quarter
			case "Q":
			case "q":

				// number l=1:{1}, l=2:{2}.
				// lookup l=3...
				oneDigitIfLengthOne() || twoDigitsIfLengthTwo() ||
					lookup([
						"gregorian/quarters",
						chr === "Q" ? "format" : "stand-alone",
						widths[ length - 3 ]
					]);
				break;

			// Month
			case "M":
			case "L":

				// number l=1:{1,2}, l=2:{2}.
				// lookup l=3...
				//
				// Lenient parsing: skeleton "yMd" (i.e., one M) may include MM for the pattern,
				// therefore parser accepts both zero-padded and non-zero-padded for M and MM.
				// Similar for L.
				oneOrTwoDigitsIfLengthOneOrTwo() || lookup([
					"gregorian/months",
					chr === "M" ? "format" : "stand-alone",
					widths[ length - 3 ]
				]);
				break;

			// Day
			case "D":

				// number {l,3}.
				if ( length <= 3 ) {

					// Equivalent to /\d{length,3}/
					numeric = true;
					tokenRe = new RegExp( "^(" + digitsRe.source + "){" + length + ",3}" );
				}
				break;

			case "W":
			case "F":

				// number l=1:{1}.
				oneDigitIfLengthOne();
				break;

			// Week day
			case "e":
			case "c":

				// number l=1:{1}, l=2:{2}.
				// lookup for length >=3.
				if ( length <= 2 ) {
					oneDigitIfLengthOne() || twoDigitsIfLengthTwo();
					break;
				}

			/* falls through */
			case "E":
				if ( length === 6 ) {

					// Note: if short day names are not explicitly specified, abbreviated day
					// names are used instead http://www.unicode.org/reports/tr35/tr35-dates.html#months_days_quarters_eras
					lookup([
						"gregorian/days",
						[ chr === "c" ? "stand-alone" : "format" ],
						"short"
					]) || lookup([
						"gregorian/days",
						[ chr === "c" ? "stand-alone" : "format" ],
						"abbreviated"
					]);
				} else {
					lookup([
						"gregorian/days",
						[ chr === "c" ? "stand-alone" : "format" ],
						widths[ length < 3 ? 0 : length - 3 ]
					]);
				}
				break;

			// Period (AM or PM)
			case "a":
				lookup([
					"gregorian/dayPeriods/format/wide"
				]);
				break;

			// Week
			case "w":

				// number l1:{1,2}, l2:{2}.
				oneOrTwoDigitsIfLengthOne() || twoDigitsIfLengthTwo();
				break;

			// Day, Hour, Minute, or Second
			case "d":
			case "h":
			case "H":
			case "K":
			case "k":
			case "j":
			case "m":
			case "s":

				// number l1:{1,2}, l2:{2}.
				//
				// Lenient parsing:
				// - skeleton "hms" (i.e., one m) always includes mm for the pattern, i.e., it's
				//   impossible to use a different skeleton to parse non-zero-padded minutes,
				//   therefore parser accepts both zero-padded and non-zero-padded for m. Similar
				//   for seconds s.
				// - skeleton "hms" (i.e., one h) may include h or hh for the pattern, i.e., it's
				//   impossible to use a different skeleton to parser non-zero-padded hours for some
				//   locales, therefore parser accepts both zero-padded and non-zero-padded for h.
				//   Similar for d (in skeleton yMd).
				oneOrTwoDigitsIfLengthOneOrTwo();
				break;

			case "S":

				// number {l}.

				// Unicode equivalent to /\d{length}/
				numeric = true;
				tokenRe = new RegExp( "^(" + digitsRe.source + "){" + length + "}" );
				break;

			case "A":

				// number {l+5}.

				// Unicode equivalent to /\d{length+5}/
				numeric = true;
				tokenRe = new RegExp( "^(" + digitsRe.source + "){" + ( length + 5 ) + "}" );
				break;

			// Zone
			case "v":
			case "V":
			case "z":
				if ( tokenRe && tokenRe.test( value ) ) {
					break;
				}
				if ( chr === "V" && length === 2 ) {
					break;
				}

			/* falls through */
			case "O":

				// O: "{gmtFormat}+H;{gmtFormat}-H" or "{gmtZeroFormat}", eg. "GMT-8" or "GMT".
				// OOOO: "{gmtFormat}{hourFormat}" or "{gmtZeroFormat}", eg. "GMT-08:00" or "GMT".
				if ( value === properties[ "timeZoneNames/gmtZeroFormat" ] ) {
					token.value = 0;
					tokenRe = properties[ "timeZoneNames/gmtZeroFormatRe" ];
				} else {
					aux = properties[ "timeZoneNames/hourFormat" ].some(function( hourFormatRe ) {
						if ( hourFormatParse( hourFormatRe, numberParser ) ) {
							tokenRe = hourFormatRe;
							return true;
						}
					});
					if ( !aux ) {
						return null;
					}
				}
				break;

			case "X":

				// Same as x*, except it uses "Z" for zero offset.
				if ( value === "Z" ) {
					token.value = 0;
					tokenRe = /^Z/;
					break;
				}

			/* falls through */
			case "x":

				// x: hourFormat("+HH[mm];-HH[mm]")
				// xx: hourFormat("+HHmm;-HHmm")
				// xxx: hourFormat("+HH:mm;-HH:mm")
				// xxxx: hourFormat("+HHmm[ss];-HHmm[ss]")
				// xxxxx: hourFormat("+HH:mm[:ss];-HH:mm[:ss]")
				aux = properties.x.some(function( hourFormatRe ) {
					if ( hourFormatParse( hourFormatRe ) ) {
						tokenRe = hourFormatRe;
						return true;
					}
				});
				if ( !aux ) {
					return null;
				}
				break;

			case "'":
				token.type = "literal";
				tokenRe = new RegExp( "^" + regexpEscape( removeLiteralQuotes( current ) ) );
				break;

			default:
				token.type = "literal";
				tokenRe = new RegExp( "^" + regexpEscape( current ) );
		}

		if ( !tokenRe ) {
			return false;
		}

		// Get lexeme and consume it.
		value = value.replace( tokenRe, function( lexeme ) {
			token.lexeme = lexeme;
			if ( numeric ) {
				token.value = numberParser( lexeme );
			}
			return "";
		});

		if ( !token.lexeme ) {
			return false;
		}

		if ( numeric && isNaN( token.value ) ) {
			return false;
		}

		tokens.push( token );
		return true;
	});

	if ( value !== "" ) {
		valid = false;
	}

	return valid ? tokens : [];
};




var dateParserFn = function( numberParser, parseProperties, tokenizerProperties ) {
	return function dateParser( value ) {
		var tokens;

		validateParameterPresence( value, "value" );
		validateParameterTypeString( value, "value" );

		tokens = dateTokenizer( value, numberParser, tokenizerProperties );
		return dateParse( value, tokens, parseProperties ) || null;
	};
};




var objectFilter = function( object, testRe ) {
	var key,
		copy = {};

	for ( key in object ) {
		if ( testRe.test( key ) ) {
			copy[ key ] = object[ key ];
		}
	}

	return copy;
};




/**
 * tokenizerProperties( pattern, cldr )
 *
 * @pattern [String] raw pattern.
 *
 * @cldr [Cldr instance].
 *
 * Return Object with data that will be used by tokenizer.
 */
var dateTokenizerProperties = function( pattern, cldr, timeZone ) {
	var digitsReSource,
		properties = {
			pattern: looseMatching( pattern )
		},
		timeSeparator = numberSymbol( "timeSeparator", cldr ),
		widths = [ "abbreviated", "wide", "narrow" ];

	digitsReSource = numberNumberingSystemDigitsMap( cldr );
	digitsReSource = digitsReSource ? "[" + digitsReSource + "]" : "\\d";
	properties.digitsRe = new RegExp( digitsReSource );

	// Transform:
	// - "+H;-H" -> /\+(\d\d?)|-(\d\d?)/
	// - "+HH;-HH" -> /\+(\d\d)|-(\d\d)/
	// - "+HHmm;-HHmm" -> /\+(\d\d)(\d\d)|-(\d\d)(\d\d)/
	// - "+HH:mm;-HH:mm" -> /\+(\d\d):(\d\d)|-(\d\d):(\d\d)/
	//
	// If gmtFormat is GMT{0}, the regexp must fill {0} in each side, e.g.:
	// - "+H;-H" -> /GMT\+(\d\d?)|GMT-(\d\d?)/
	function hourFormatRe( hourFormat, gmtFormat, digitsReSource, timeSeparator ) {
		var re;

		if ( !digitsReSource ) {
			digitsReSource = "\\d";
		}
		if ( !gmtFormat ) {
			gmtFormat = "{0}";
		}

		re = hourFormat
			.replace( "+", "\\+" )

			// Unicode equivalent to (\\d\\d)
			.replace( /HH|mm|ss/g, "((" + digitsReSource + "){2})" )

			// Unicode equivalent to (\\d\\d?)
			.replace( /H|m/g, "((" + digitsReSource + "){1,2})" );

		if ( timeSeparator ) {
			re = re.replace( /:/g, timeSeparator );
		}

		re = re.split( ";" ).map(function( part ) {
			return gmtFormat.replace( "{0}", part );
		}).join( "|" );

		return new RegExp( "^" + re );
	}

	function populateProperties( path, value ) {

		// Skip
		var skipRe = /(timeZoneNames\/zone|supplemental\/metaZones|timeZoneNames\/metazone|timeZoneNames\/regionFormat|timeZoneNames\/gmtFormat)/;
		if ( skipRe.test( path ) ) {
			return;
		}

		if ( !value ) {
			return;
		}

		// The `dates` and `calendars` trim's purpose is to reduce properties' key size only.
		path = path.replace( /^.*\/dates\//, "" ).replace( /calendars\//, "" );

		// Specific filter for "gregorian/dayPeriods/format/wide".
		if ( path === "gregorian/dayPeriods/format/wide" ) {
			value = objectFilter( value, /^am|^pm/ );
		}

		// Transform object into array of pairs [key, /value/], sort by desc value length.
		if ( isPlainObject( value ) ) {
			value = Object.keys( value ).map(function( key ) {
				return [ key, new RegExp( "^" + regexpEscape( looseMatching( value[ key ] ) ) ) ];
			}).sort(function( a, b ) {
				return b[ 1 ].source.length - a[ 1 ].source.length;
			});

		// If typeof value === "string".
		} else {
			value = looseMatching( value );
		}
		properties[ path ] = value;
	}

	function regexpSourceSomeTerm( terms ) {
		return "(" + terms.filter(function( item ) {
			return item;
		}).reduce(function( memo, item ) {
			return memo + "|" + item;
		}) + ")";
	}

	cldr.on( "get", populateProperties );

	pattern.match( datePatternRe ).forEach(function( current ) {
		var aux, chr, daylightTzName, gmtFormat, length, standardTzName;

		chr = current.charAt( 0 );
		length = current.length;

		if ( chr === "Z" ) {
			if ( length < 5 ) {
				chr = "O";
				length = 4;
			} else {
				chr = "X";
				length = 5;
			}
		}

		// z...zzz: "{shortRegion}", eg. "PST" or "PDT".
		// zzzz: "{regionName} {Standard Time}" or "{regionName} {Daylight Time}",
		//       e.g., "Pacific Standard Time" or "Pacific Daylight Time".
		// http://unicode.org/reports/tr35/tr35-dates.html#Date_Format_Patterns
		if ( chr === "z" ) {
			standardTzName = dateGetTimeZoneName( length, "standard", timeZone, cldr );
			daylightTzName = dateGetTimeZoneName( length, "daylight", timeZone, cldr );
			if ( standardTzName ) {
				standardTzName = regexpEscape( looseMatching( standardTzName ) );
			}
			if ( daylightTzName ) {
				daylightTzName = regexpEscape( looseMatching( daylightTzName ) );
			}
			if ( standardTzName || daylightTzName ) {
				properties.standardOrDaylightTzName = new RegExp(
					"^" + regexpSourceSomeTerm([ standardTzName, daylightTzName ])
				);
			}

			// Fall through the "O" format in case one name is missing.
			if ( !standardTzName || !daylightTzName ) {
				chr = "O";
				if ( length < 4 ) {
					length = 1;
				}
			}
		}

		// v...vvv: "{shortRegion}", eg. "PT".
		// vvvv: "{regionName} {Time}" or "{regionName} {Time}",
		// e.g., "Pacific Time"
		// http://unicode.org/reports/tr35/tr35-dates.html#Date_Format_Patterns
		if ( chr === "v" ) {
			if ( length !== 1 && length !== 4 ) {
				throw createErrorUnsupportedFeature({
					feature: "timezone pattern `" + pattern + "`"
				});
			}
			var genericTzName = dateGetTimeZoneName( length, "generic", timeZone, cldr );
			if ( genericTzName ) {
				properties.genericTzName = new RegExp(
					"^" + regexpEscape( looseMatching( genericTzName ) )
				);
				chr = "O";

			// Fall back to "V" format.
			} else {
				chr = "V";
				length = 4;
			}
		}

		switch ( chr ) {

			// Era
			case "G":
				cldr.main([
					"dates/calendars/gregorian/eras",
					length <= 3 ? "eraAbbr" : ( length === 4 ? "eraNames" : "eraNarrow" )
				]);
				break;

			// Year
			case "u": // Extended year. Need to be implemented.
			case "U": // Cyclic year name. Need to be implemented.
				throw createErrorUnsupportedFeature({
					feature: "year pattern `" + chr + "`"
				});

			// Quarter
			case "Q":
			case "q":
				if ( length > 2 ) {
					cldr.main([
						"dates/calendars/gregorian/quarters",
						chr === "Q" ? "format" : "stand-alone",
						widths[ length - 3 ]
					]);
				}
				break;

			// Month
			case "M":
			case "L":

				// number l=1:{1,2}, l=2:{2}.
				// lookup l=3...
				if ( length > 2 ) {
					cldr.main([
						"dates/calendars/gregorian/months",
						chr === "M" ? "format" : "stand-alone",
						widths[ length - 3 ]
					]);
				}
				break;

			// Day
			case "g":

				// Modified Julian day. Need to be implemented.
				throw createErrorUnsupportedFeature({
					feature: "Julian day pattern `g`"
				});

			// Week day
			case "e":
			case "c":

				// lookup for length >=3.
				if ( length <= 2 ) {
					break;
				}

			/* falls through */
			case "E":
				if ( length === 6 ) {

					// Note: if short day names are not explicitly specified, abbreviated day
					// names are used instead http://www.unicode.org/reports/tr35/tr35-dates.html#months_days_quarters_eras
					// eslint-disable-next-line no-unused-expressions
					cldr.main([
						"dates/calendars/gregorian/days",
						[ chr === "c" ? "stand-alone" : "format" ],
						"short"
					]) || cldr.main([
						"dates/calendars/gregorian/days",
						[ chr === "c" ? "stand-alone" : "format" ],
						"abbreviated"
					]);
				} else {
					cldr.main([
						"dates/calendars/gregorian/days",
						[ chr === "c" ? "stand-alone" : "format" ],
						widths[ length < 3 ? 0 : length - 3 ]
					]);
				}
				break;

			// Period (AM or PM)
			case "a":
				cldr.main(
					"dates/calendars/gregorian/dayPeriods/format/wide"
				);
				break;

			// Zone
			case "V":

				if ( length === 1 ) {
					throw createErrorUnsupportedFeature({
						feature: "timezone pattern `" + pattern + "`"
					});
				}

				if ( timeZone ) {
					if ( length === 2 ) {

						// Skip looseMatching processing since timeZone is a canonical posix value.
						properties.timeZoneName = timeZone;
						properties.timeZoneNameRe = new RegExp( "^" + regexpEscape( timeZone ) );
						break;
					}

					var timeZoneName,
						exemplarCity = cldr.main([
							"dates/timeZoneNames/zone", timeZone, "exemplarCity"
						]);

					if ( length === 3 ) {
						if ( !exemplarCity ) {
							exemplarCity = cldr.main([
								"dates/timeZoneNames/zone/Etc/Unknown/exemplarCity"
							]);
						}
						timeZoneName = exemplarCity;
					}

					if ( exemplarCity && length === 4 ) {
						timeZoneName = formatMessage(
							cldr.main(
								"dates/timeZoneNames/regionFormat"
							),
							[ exemplarCity ]
						);
					}

					if ( timeZoneName ) {
						timeZoneName = looseMatching( timeZoneName );
						properties.timeZoneName = timeZoneName;
						properties.timeZoneNameRe = new RegExp(
							"^" + regexpEscape( timeZoneName )
						);
					}
				}

				if ( current === "v" ) {
					length = 1;
				}

			/* falls through */
			case "z":
			case "O":
				gmtFormat = cldr.main( "dates/timeZoneNames/gmtFormat" );
				cldr.main( "dates/timeZoneNames/gmtZeroFormat" );
				cldr.main( "dates/timeZoneNames/hourFormat" );
				properties[ "timeZoneNames/gmtZeroFormatRe" ] =
					new RegExp( "^" + regexpEscape( properties[ "timeZoneNames/gmtZeroFormat" ] ) );
				aux = properties[ "timeZoneNames/hourFormat" ];
				properties[ "timeZoneNames/hourFormat" ] = (
					length < 4 ?
						[ dateTimezoneHourFormatHm( aux, "H" ), dateTimezoneHourFormatH( aux ) ] :
						[ dateTimezoneHourFormatHm( aux, "HH" ) ]
				).map(function( hourFormat ) {
					return hourFormatRe(
						hourFormat,
						gmtFormat,
						digitsReSource,
						timeSeparator
					);
				});

			/* falls through */
			case "X":
			case "x":

				// x: hourFormat("+HH[mm];-HH[mm]")
				// xx: hourFormat("+HHmm;-HHmm")
				// xxx: hourFormat("+HH:mm;-HH:mm")
				// xxxx: hourFormat("+HHmm[ss];-HHmm[ss]")
				// xxxxx: hourFormat("+HH:mm[:ss];-HH:mm[:ss]")
				properties.x = [
					[ "+HHmm;-HHmm", "+HH;-HH" ],
					[ "+HHmm;-HHmm" ],
					[ "+HH:mm;-HH:mm" ],
					[ "+HHmmss;-HHmmss", "+HHmm;-HHmm" ],
					[ "+HH:mm:ss;-HH:mm:ss", "+HH:mm;-HH:mm" ]
				][ length - 1 ].map(function( hourFormat ) {
					return hourFormatRe( hourFormat );
				});
		}
	});

	cldr.off( "get", populateProperties );

	return properties;
};




/**
 * dayOfWeek( date, firstDay )
 *
 * @date
 *
 * @firstDay the result of `dateFirstDayOfWeek( cldr )`
 *
 * Return the day of the week normalized by the territory's firstDay [0-6].
 * Eg for "mon":
 * - return 0 if territory is GB, or BR, or DE, or FR (week starts on "mon");
 * - return 1 if territory is US (week starts on "sun");
 * - return 2 if territory is EG (week starts on "sat");
 */
var dateDayOfWeek = function( date, firstDay ) {
	return ( date.getDay() - firstDay + 7 ) % 7;
};




/**
 * distanceInDays( from, to )
 *
 * Return the distance in days between from and to Dates.
 */
var dateDistanceInDays = function( from, to ) {
	var inDays = 864e5;
	return ( to.getTime() - from.getTime() ) / inDays;
};




/**
 * dayOfYear
 *
 * Return the distance in days of the date to the begin of the year [0-d].
 */
var dateDayOfYear = function( date ) {
	return Math.floor( dateDistanceInDays( dateStartOf( date, "year" ), date ) );
};




// Invert key and values, e.g., {"year": "yY"} ==> {"y": "year", "Y": "year"}
var dateFieldsMap = objectInvert({
	"era": "G",
	"year": "yY",
	"quarter": "qQ",
	"month": "ML",
	"week": "wW",
	"day": "dDF",
	"weekday": "ecE",
	"dayperiod": "a",
	"hour": "hHkK",
	"minute": "m",
	"second": "sSA",
	"zone": "zvVOxX"
}, function( object, key, value ) {
	value.split( "" ).forEach(function( symbol ) {
		object[ symbol ] = key;
	});
	return object;
});




/**
 * millisecondsInDay
 */
var dateMillisecondsInDay = function( date ) {

	// TODO Handle daylight savings discontinuities
	return date - dateStartOf( date, "day" );
};




/**
 * hourFormat( date, format, timeSeparator, formatNumber )
 *
 * Return date's timezone offset according to the format passed.
 * Eg for format when timezone offset is 180:
 * - "+H;-H": -3
 * - "+HHmm;-HHmm": -0300
 * - "+HH:mm;-HH:mm": -03:00
 * - "+HH:mm:ss;-HH:mm:ss": -03:00:00
 */
var dateTimezoneHourFormat = function( date, format, timeSeparator, formatNumber ) {
	var absOffset,
		offset = date.getTimezoneOffset();

	absOffset = Math.abs( offset );
	formatNumber = formatNumber || {
		1: function( value ) {
			return stringPad( value, 1 );
		},
		2: function( value ) {
			return stringPad( value, 2 );
		}
	};

	return format

		// Pick the correct sign side (+ or -).
		.split( ";" )[ offset > 0 ? 1 : 0 ]

		// Localize time separator
		.replace( ":", timeSeparator )

		// Update hours offset.
		.replace( /HH?/, function( match ) {
			return formatNumber[ match.length ]( Math.floor( absOffset / 60 ) );
		})

		// Update minutes offset and return.
		.replace( /mm/, function() {
			return formatNumber[ 2 ]( Math.floor( absOffset % 60 ) );
		})

		// Update minutes offset and return.
		.replace( /ss/, function() {
			return formatNumber[ 2 ]( Math.floor( absOffset % 1 * 60 ) );
		});
};




/**
 * format( date, properties )
 *
 * @date [Date instance].
 *
 * @properties
 *
 * TODO Support other calendar types.
 *
 * Disclosure: this function borrows excerpts of dojo/date/locale.
 */
var dateFormat = function( date, numberFormatters, properties ) {
	var parts = [];

	var timeSeparator = properties.timeSeparator;

	// create globalize date with given timezone data
	if ( properties.timeZoneData ) {
		date = new ZonedDateTime( date, properties.timeZoneData() );
	}

	properties.pattern.replace( datePatternRe, function( current ) {
		var aux, dateField, type, value,
			chr = current.charAt( 0 ),
			length = current.length;

		if ( chr === "j" ) {

			// Locale preferred hHKk.
			// http://www.unicode.org/reports/tr35/tr35-dates.html#Time_Data
			chr = properties.preferredTime;
		}

		if ( chr === "Z" ) {

			// Z..ZZZ: same as "xxxx".
			if ( length < 4 ) {
				chr = "x";
				length = 4;

			// ZZZZ: same as "OOOO".
			} else if ( length < 5 ) {
				chr = "O";
				length = 4;

			// ZZZZZ: same as "XXXXX"
			} else {
				chr = "X";
				length = 5;
			}
		}

		// z...zzz: "{shortRegion}", e.g., "PST" or "PDT".
		// zzzz: "{regionName} {Standard Time}" or "{regionName} {Daylight Time}",
		//       e.g., "Pacific Standard Time" or "Pacific Daylight Time".
		if ( chr === "z" ) {
			if ( date.isDST ) {
				value = date.isDST() ? properties.daylightTzName : properties.standardTzName;
			}

			// Fall back to "O" format.
			if ( !value ) {
				chr = "O";
				if ( length < 4 ) {
					length = 1;
				}
			}
		}

		switch ( chr ) {

			// Era
			case "G":
				value = properties.eras[ date.getFullYear() < 0 ? 0 : 1 ];
				break;

			// Year
			case "y":

				// Plain year.
				// The length specifies the padding, but for two letters it also specifies the
				// maximum length.
				value = date.getFullYear();
				if ( length === 2 ) {
					value = String( value );
					value = +value.substr( value.length - 2 );
				}
				break;

			case "Y":

				// Year in "Week of Year"
				// The length specifies the padding, but for two letters it also specifies the
				// maximum length.
				// yearInWeekofYear = date + DaysInAWeek - (dayOfWeek - firstDay) - minDays
				value = new Date( date.getTime() );
				value.setDate(
					value.getDate() + 7 -
					dateDayOfWeek( date, properties.firstDay ) -
					properties.firstDay -
					properties.minDays
				);
				value = value.getFullYear();
				if ( length === 2 ) {
					value = String( value );
					value = +value.substr( value.length - 2 );
				}
				break;

			// Quarter
			case "Q":
			case "q":
				value = Math.ceil( ( date.getMonth() + 1 ) / 3 );
				if ( length > 2 ) {
					value = properties.quarters[ chr ][ length ][ value ];
				}
				break;

			// Month
			case "M":
			case "L":
				value = date.getMonth() + 1;
				if ( length > 2 ) {
					value = properties.months[ chr ][ length ][ value ];
				}
				break;

			// Week
			case "w":

				// Week of Year.
				// woy = ceil( ( doy + dow of 1/1 ) / 7 ) - minDaysStuff ? 1 : 0.
				// TODO should pad on ww? Not documented, but I guess so.
				value = dateDayOfWeek( dateStartOf( date, "year" ), properties.firstDay );
				value = Math.ceil( ( dateDayOfYear( date ) + value ) / 7 ) -
					( 7 - value >= properties.minDays ? 0 : 1 );
				break;

			case "W":

				// Week of Month.
				// wom = ceil( ( dom + dow of `1/month` ) / 7 ) - minDaysStuff ? 1 : 0.
				value = dateDayOfWeek( dateStartOf( date, "month" ), properties.firstDay );
				value = Math.ceil( ( date.getDate() + value ) / 7 ) -
					( 7 - value >= properties.minDays ? 0 : 1 );
				break;

			// Day
			case "d":
				value = date.getDate();
				break;

			case "D":
				value = dateDayOfYear( date ) + 1;
				break;

			case "F":

				// Day of Week in month. eg. 2nd Wed in July.
				value = Math.floor( date.getDate() / 7 ) + 1;
				break;

			// Week day
			case "e":
			case "c":
				if ( length <= 2 ) {

					// Range is [1-7] (deduced by example provided on documentation)
					// TODO Should pad with zeros (not specified in the docs)?
					value = dateDayOfWeek( date, properties.firstDay ) + 1;
					break;
				}

			/* falls through */
			case "E":
				value = dateWeekDays[ date.getDay() ];
				value = properties.days[ chr ][ length ][ value ];
				break;

			// Period (AM or PM)
			case "a":
				value = properties.dayPeriods[ date.getHours() < 12 ? "am" : "pm" ];
				break;

			// Hour
			case "h": // 1-12
				value = ( date.getHours() % 12 ) || 12;
				break;

			case "H": // 0-23
				value = date.getHours();
				break;

			case "K": // 0-11
				value = date.getHours() % 12;
				break;

			case "k": // 1-24
				value = date.getHours() || 24;
				break;

			// Minute
			case "m":
				value = date.getMinutes();
				break;

			// Second
			case "s":
				value = date.getSeconds();
				break;

			case "S":
				value = Math.round( date.getMilliseconds() * Math.pow( 10, length - 3 ) );
				break;

			case "A":
				value = Math.round( dateMillisecondsInDay( date ) * Math.pow( 10, length - 3 ) );
				break;

			// Zone
			case "z":
				break;

			case "v":

				// v...vvv: "{shortRegion}", eg. "PT".
				// vvvv: "{regionName} {Time}",
				//       e.g., "Pacific Time".
				if ( properties.genericTzName ) {
					value = properties.genericTzName;
					break;
				}

			/* falls through */
			case "V":

				//VVVV: "{explarCity} {Time}", e.g., "Los Angeles Time"
				if ( properties.timeZoneName ) {
					value = properties.timeZoneName;
					break;
				}

				if ( current === "v" ) {
					length = 1;
				}

			/* falls through */
			case "O":

				// O: "{gmtFormat}+H;{gmtFormat}-H" or "{gmtZeroFormat}", eg. "GMT-8" or "GMT".
				// OOOO: "{gmtFormat}{hourFormat}" or "{gmtZeroFormat}", eg. "GMT-08:00" or "GMT".
				if ( date.getTimezoneOffset() === 0 ) {
					value = properties.gmtZeroFormat;
				} else {

					// If O..OOO and timezone offset has non-zero minutes, show minutes.
					if ( length < 4 ) {
						aux = date.getTimezoneOffset();
						aux = properties.hourFormat[ aux % 60 - aux % 1 === 0 ? 0 : 1 ];
					} else {
						aux = properties.hourFormat;
					}

					value = dateTimezoneHourFormat(
						date,
						aux,
						timeSeparator,
						numberFormatters
					);
					value = properties.gmtFormat.replace( /\{0\}/, value );
				}
				break;

			case "X":

				// Same as x*, except it uses "Z" for zero offset.
				if ( date.getTimezoneOffset() === 0 ) {
					value = "Z";
					break;
				}

			/* falls through */
			case "x":

				// x: hourFormat("+HH[mm];-HH[mm]")
				// xx: hourFormat("+HHmm;-HHmm")
				// xxx: hourFormat("+HH:mm;-HH:mm")
				// xxxx: hourFormat("+HHmm[ss];-HHmm[ss]")
				// xxxxx: hourFormat("+HH:mm[:ss];-HH:mm[:ss]")
				aux = date.getTimezoneOffset();

				// If x and timezone offset has non-zero minutes, use xx (i.e., show minutes).
				if ( length === 1 && aux % 60 - aux % 1 !== 0 ) {
					length += 1;
				}

				// If (xxxx or xxxxx) and timezone offset has zero seconds, use xx or xxx
				// respectively (i.e., don't show optional seconds).
				if ( ( length === 4 || length === 5 ) && aux % 1 === 0 ) {
					length -= 2;
				}

				value = [
					"+HH;-HH",
					"+HHmm;-HHmm",
					"+HH:mm;-HH:mm",
					"+HHmmss;-HHmmss",
					"+HH:mm:ss;-HH:mm:ss"
				][ length - 1 ];

				value = dateTimezoneHourFormat( date, value, ":" );
				break;

			// timeSeparator
			case ":":
				value = timeSeparator;
				break;

			// ' literals.
			case "'":
				value = removeLiteralQuotes( current );
				break;

			// Anything else is considered a literal, including [ ,:/.@#], chinese, japonese, and
			// arabic characters.
			default:
				value = current;

		}
		if ( typeof value === "number" ) {
			value = numberFormatters[ length ]( value );
		}

		dateField = dateFieldsMap[ chr ];
		type = dateField ? dateField : "literal";

		partsPush( parts, type, value );
	});

	return parts;

};




var dateToPartsFormatterFn = function( numberFormatters, properties ) {
	return function dateToPartsFormatter( value ) {
		validateParameterPresence( value, "value" );
		validateParameterTypeDate( value, "value" );

		return dateFormat( value, numberFormatters, properties );
	};

};




function optionsHasStyle( options ) {
	return options.skeleton !== undefined ||
		options.date !== undefined ||
		options.time !== undefined ||
		options.datetime !== undefined ||
		options.raw !== undefined;
}

function validateRequiredCldr( path, value ) {
	validateCldr( path, value, {
		skip: [
			/dates\/calendars\/gregorian\/dateTimeFormats\/availableFormats/,
			/dates\/calendars\/gregorian\/days\/.*\/short/,
			/dates\/timeZoneNames\/zone/,
			/dates\/timeZoneNames\/metazone/,
			/globalize-iana/,
			/supplemental\/metaZones/,
			/supplemental\/timeData\/(?!001)/,
			/supplemental\/weekData\/(?!001)/
		]
	});
}

function validateOptionsPreset( options ) {
	validateOptionsPresetEach( "date", options );
	validateOptionsPresetEach( "time", options );
	validateOptionsPresetEach( "datetime", options );
}

function validateOptionsPresetEach( type, options ) {
	var value = options[ type ];
	validate(
		"E_INVALID_OPTIONS",
		"Invalid `{{type}: \"{value}\"}`.",
		value === undefined || [ "short", "medium", "long", "full" ].indexOf( value ) !== -1,
		{ type: type, value: value }
	);
}

function validateOptionsSkeleton( pattern, skeleton ) {
	validate(
		"E_INVALID_OPTIONS",
		"Invalid `{skeleton: \"{value}\"}` based on provided CLDR.",
		skeleton === undefined || ( typeof pattern === "string" && pattern ),
		{ type: "skeleton", value: skeleton }
	);
}

function validateRequiredIana( timeZone ) {
	return function( path, value ) {

		if ( !/globalize-iana/.test( path ) ) {
			return;
		}

		validate(
			"E_MISSING_IANA_TZ",
			"Missing required IANA timezone content for `{timeZone}`: `{path}`.",
			value,
			{
				path: path.replace( /globalize-iana\//, "" ),
				timeZone: timeZone
			}
		);
	};
}

/**
 * .loadTimeZone( json )
 *
 * @json [JSON]
 *
 * Load IANA timezone data.
 */
Globalize.loadTimeZone = function( json ) {
	var customData = {
			"globalize-iana": json
		};

	validateParameterPresence( json, "json" );
	validateParameterTypePlainObject( json, "json" );

	Cldr.load( customData );
};

/**
 * .dateFormatter( options )
 *
 * @options [Object] see date/expand_pattern for more info.
 *
 * Return a date formatter function (of the form below) according to the given options and the
 * default/instance locale.
 *
 * fn( value )
 *
 * @value [Date]
 *
 * Return a function that formats a date according to the given `format` and the default/instance
 * locale.
 */
Globalize.dateFormatter =
Globalize.prototype.dateFormatter = function( options ) {
	var args, dateToPartsFormatter, returnFn;

	validateParameterTypePlainObject( options, "options" );

	options = options || {};
	if ( !optionsHasStyle( options ) ) {
		options.skeleton = "yMd";
	}
	args = [ options ];

	dateToPartsFormatter = this.dateToPartsFormatter( options );
	returnFn = dateFormatterFn( dateToPartsFormatter );
	runtimeBind( args, this.cldr, returnFn, [ dateToPartsFormatter ] );

	return returnFn;
};

/**
 * .dateToPartsFormatter( options )
 *
 * @options [Object] see date/expand_pattern for more info.
 *
 * Return a date formatter function (of the form below) according to the given options and the
 * default/instance locale.
 *
 * fn( value )
 *
 * @value [Date]
 *
 * Return a function that formats a date to parts according to the given `format`
 * and the default/instance
 * locale.
 */
Globalize.dateToPartsFormatter =
Globalize.prototype.dateToPartsFormatter = function( options ) {
	var args, cldr, numberFormatters, pad, pattern, properties, returnFn,
		timeZone, ianaListener;

	validateParameterTypePlainObject( options, "options" );

	cldr = this.cldr;
	options = options || {};
	if ( !optionsHasStyle( options ) ) {
		options.skeleton = "yMd";
	}

	validateOptionsPreset( options );
	validateDefaultLocale( cldr );

	timeZone = options.timeZone;
	validateParameterTypeString( timeZone, "options.timeZone" );

	args = [ options ];

	cldr.on( "get", validateRequiredCldr );
	if ( timeZone ) {
		ianaListener = validateRequiredIana( timeZone );
		cldr.on( "get", ianaListener );
	}
	try {
		pattern = dateExpandPattern( options, cldr );
		validateOptionsSkeleton( pattern, options.skeleton );
		properties = dateFormatProperties( pattern, cldr, timeZone );
	} finally {
		cldr.off( "get", validateRequiredCldr );
		if ( ianaListener ) {
			cldr.off( "get", ianaListener );
		}
	}

	// Create needed number formatters.
	numberFormatters = properties.numberFormatters;
	delete properties.numberFormatters;
	for ( pad in numberFormatters ) {
		numberFormatters[ pad ] = this.numberFormatter({
			raw: numberFormatters[ pad ]
		});
	}

	returnFn = dateToPartsFormatterFn( numberFormatters, properties );

	runtimeBind( args, cldr, returnFn, [ numberFormatters, properties ] );

	return returnFn;
};

/**
 * .dateParser( options )
 *
 * @options [Object] see date/expand_pattern for more info.
 *
 * Return a function that parses a string date according to the given `formats` and the
 * default/instance locale.
 */
Globalize.dateParser =
Globalize.prototype.dateParser = function( options ) {
	var args, cldr, numberParser, parseProperties, pattern, returnFn, timeZone,
		tokenizerProperties;

	validateParameterTypePlainObject( options, "options" );

	cldr = this.cldr;
	options = options || {};
	if ( !optionsHasStyle( options ) ) {
		options.skeleton = "yMd";
	}

	validateOptionsPreset( options );
	validateDefaultLocale( cldr );

	timeZone = options.timeZone;
	validateParameterTypeString( timeZone, "options.timeZone" );

	args = [ options ];

	try {
		cldr.on( "get", validateRequiredCldr );
		if ( timeZone ) {
			cldr.on( "get", validateRequiredIana( timeZone ) );
		}
		pattern = dateExpandPattern( options, cldr );
		validateOptionsSkeleton( pattern, options.skeleton );
		tokenizerProperties = dateTokenizerProperties( pattern, cldr, timeZone );
		parseProperties = dateParseProperties( cldr, timeZone );
	} finally {
		cldr.off( "get", validateRequiredCldr );
		if ( timeZone ) {
			cldr.off( "get", validateRequiredIana( timeZone ) );
		}
	}
	numberParser = this.numberParser({ raw: "0" });

	returnFn = dateParserFn( numberParser, parseProperties, tokenizerProperties );

	runtimeBind( args, cldr, returnFn, [ numberParser, parseProperties, tokenizerProperties ] );

	return returnFn;
};

/**
 * .formatDate( value, options )
 *
 * @value [Date]
 *
 * @options [Object] see date/expand_pattern for more info.
 *
 * Formats a date or number according to the given options string and the default/instance locale.
 */
Globalize.formatDate =
Globalize.prototype.formatDate = function( value, options ) {
	validateParameterPresence( value, "value" );
	validateParameterTypeDate( value, "value" );

	return this.dateFormatter( options )( value );
};

/**
 * .formatDateToParts( value, options )
 *
 * @value [Date]
 *
 * @options [Object] see date/expand_pattern for more info.
 *
 * Formats a date or number to parts according to the given options and the default/instance locale.
 */
Globalize.formatDateToParts =
Globalize.prototype.formatDateToParts = function( value, options ) {
	validateParameterPresence( value, "value" );
	validateParameterTypeDate( value, "value" );

	return this.dateToPartsFormatter( options )( value );
};

/**
 * .parseDate( value, options )
 *
 * @value [String]
 *
 * @options [Object] see date/expand_pattern for more info.
 *
 * Return a Date instance or null.
 */
Globalize.parseDate =
Globalize.prototype.parseDate = function( value, options ) {
	validateParameterPresence( value, "value" );
	validateParameterTypeString( value, "value" );

	return this.dateParser( options )( value );
};

return Globalize;




}));

(function(){function o(n){var i=e;n&&(e[n]||(e[n]={}),i=e[n]);if(!i.define||!i.define.packaged)t.original=i.define,i.define=t,i.define.packaged=!0;if(!i.require||!i.require.packaged)r.original=i.require,i.require=r,i.require.packaged=!0}var ACE_NAMESPACE = "ace",e=function(){return this}();!e&&typeof window!="undefined"&&(e=window);if(!ACE_NAMESPACE&&typeof requirejs!="undefined")return;var t=function(e,n,r){if(typeof e!="string"){t.original?t.original.apply(this,arguments):(console.error("dropping module because define wasn't a string."),console.trace());return}arguments.length==2&&(r=n),t.modules[e]||(t.payloads[e]=r,t.modules[e]=null)};t.modules={},t.payloads={};var n=function(e,t,n){if(typeof t=="string"){var i=s(e,t);if(i!=undefined)return n&&n(),i}else if(Object.prototype.toString.call(t)==="[object Array]"){var o=[];for(var u=0,a=t.length;u<a;++u){var f=s(e,t[u]);if(f==undefined&&r.original)return;o.push(f)}return n&&n.apply(null,o)||!0}},r=function(e,t){var i=n("",e,t);return i==undefined&&r.original?r.original.apply(this,arguments):i},i=function(e,t){if(t.indexOf("!")!==-1){var n=t.split("!");return i(e,n[0])+"!"+i(e,n[1])}if(t.charAt(0)=="."){var r=e.split("/").slice(0,-1).join("/");t=r+"/"+t;while(t.indexOf(".")!==-1&&s!=t){var s=t;t=t.replace(/\/\.\//,"/").replace(/[^\/]+\/\.\.\//,"")}}return t},s=function(e,r){r=i(e,r);var s=t.modules[r];if(!s){s=t.payloads[r];if(typeof s=="function"){var o={},u={id:r,uri:"",exports:o,packaged:!0},a=function(e,t){return n(r,e,t)},f=s(a,o,u);o=f||u.exports,t.modules[r]=o,delete t.payloads[r]}s=t.modules[r]=o||s}return s};o(ACE_NAMESPACE)})(),ace.define("ace/lib/es6-shim",["require","exports","module"],function(e,t,n){function r(e,t,n){Object.defineProperty(e,t,{value:n,enumerable:!1,writable:!0,configurable:!0})}String.prototype.startsWith||r(String.prototype,"startsWith",function(e,t){return t=t||0,this.lastIndexOf(e,t)===t}),String.prototype.endsWith||r(String.prototype,"endsWith",function(e,t){var n=this;if(t===undefined||t>n.length)t=n.length;t-=e.length;var r=n.indexOf(e,t);return r!==-1&&r===t}),String.prototype.repeat||r(String.prototype,"repeat",function(e){var t="",n=this;while(e>0){e&1&&(t+=n);if(e>>=1)n+=n}return t}),String.prototype.includes||r(String.prototype,"includes",function(e,t){return this.indexOf(e,t)!=-1}),Object.assign||(Object.assign=function(e){if(e===undefined||e===null)throw new TypeError("Cannot convert undefined or null to object");var t=Object(e);for(var n=1;n<arguments.length;n++){var r=arguments[n];r!==undefined&&r!==null&&Object.keys(r).forEach(function(e){t[e]=r[e]})}return t}),Object.values||(Object.values=function(e){return Object.keys(e).map(function(t){return e[t]})}),Array.prototype.find||r(Array.prototype,"find",function(e){var t=this.length,n=arguments[1];for(var r=0;r<t;r++){var i=this[r];if(e.call(n,i,r,this))return i}}),Array.prototype.findIndex||r(Array.prototype,"findIndex",function(e){var t=this.length,n=arguments[1];for(var r=0;r<t;r++){var i=this[r];if(e.call(n,i,r,this))return r}}),Array.prototype.includes||r(Array.prototype,"includes",function(e,t){return this.indexOf(e,t)!=-1}),Array.prototype.fill||r(Array.prototype,"fill",function(e){var t=this,n=t.length>>>0,r=arguments[1],i=r>>0,s=i<0?Math.max(n+i,0):Math.min(i,n),o=arguments[2],u=o===undefined?n:o>>0,a=u<0?Math.max(n+u,0):Math.min(u,n);while(s<a)t[s]=e,s++;return t}),Array.of||r(Array,"of",function(){return Array.prototype.slice.call(arguments)})}),ace.define("ace/lib/fixoldbrowsers",["require","exports","module","ace/lib/es6-shim"],function(e,t,n){"use strict";e("./es6-shim")}),ace.define("ace/lib/lang",["require","exports","module"],function(e,t,n){"use strict";t.last=function(e){return e[e.length-1]},t.stringReverse=function(e){return e.split("").reverse().join("")},t.stringRepeat=function(e,t){var n="";while(t>0){t&1&&(n+=e);if(t>>=1)e+=e}return n};var r=/^\s\s*/,i=/\s\s*$/;t.stringTrimLeft=function(e){return e.replace(r,"")},t.stringTrimRight=function(e){return e.replace(i,"")},t.copyObject=function(e){var t={};for(var n in e)t[n]=e[n];return t},t.copyArray=function(e){var t=[];for(var n=0,r=e.length;n<r;n++)e[n]&&typeof e[n]=="object"?t[n]=this.copyObject(e[n]):t[n]=e[n];return t},t.deepCopy=function s(e){if(typeof e!="object"||!e)return e;var t;if(Array.isArray(e)){t=[];for(var n=0;n<e.length;n++)t[n]=s(e[n]);return t}if(Object.prototype.toString.call(e)!=="[object Object]")return e;t={};for(var n in e)t[n]=s(e[n]);return t},t.arrayToMap=function(e){var t={};for(var n=0;n<e.length;n++)t[e[n]]=1;return t},t.createMap=function(e){var t=Object.create(null);for(var n in e)t[n]=e[n];return t},t.arrayRemove=function(e,t){for(var n=0;n<=e.length;n++)t===e[n]&&e.splice(n,1)},t.escapeRegExp=function(e){return e.replace(/([.*+?^${}()|[\]\/\\])/g,"\\$1")},t.escapeHTML=function(e){return(""+e).replace(/&/g,"&#38;").replace(/"/g,"&#34;").replace(/'/g,"&#39;").replace(/</g,"&#60;")},t.getMatchOffsets=function(e,t){var n=[];return e.replace(t,function(e){n.push({offset:arguments[arguments.length-2],length:e.length})}),n},t.deferredCall=function(e){var t=null,n=function(){t=null,e()},r=function(e){return r.cancel(),t=setTimeout(n,e||0),r};return r.schedule=r,r.call=function(){return this.cancel(),e(),r},r.cancel=function(){return clearTimeout(t),t=null,r},r.isPending=function(){return t},r},t.delayedCall=function(e,t){var n=null,r=function(){n=null,e()},i=function(e){n==null&&(n=setTimeout(r,e||t))};return i.delay=function(e){n&&clearTimeout(n),n=setTimeout(r,e||t)},i.schedule=i,i.call=function(){this.cancel(),e()},i.cancel=function(){n&&clearTimeout(n),n=null},i.isPending=function(){return n},i}}),ace.define("ace/lib/oop",["require","exports","module"],function(e,t,n){"use strict";t.inherits=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})},t.mixin=function(e,t){for(var n in t)e[n]=t[n];return e},t.implement=function(e,n){t.mixin(e,n)}}),ace.define("ace/lib/useragent",["require","exports","module"],function(e,t,n){"use strict";t.OS={LINUX:"LINUX",MAC:"MAC",WINDOWS:"WINDOWS"},t.getOS=function(){return t.isMac?t.OS.MAC:t.isLinux?t.OS.LINUX:t.OS.WINDOWS};var r=typeof navigator=="object"?navigator:{},i=(/mac|win|linux/i.exec(r.platform)||["other"])[0].toLowerCase(),s=r.userAgent||"",o=r.appName||"";t.isWin=i=="win",t.isMac=i=="mac",t.isLinux=i=="linux",t.isIE=o=="Microsoft Internet Explorer"||o.indexOf("MSAppHost")>=0?parseFloat((s.match(/(?:MSIE |Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/)||[])[1]):parseFloat((s.match(/(?:Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/)||[])[1]),t.isOldIE=t.isIE&&t.isIE<9,t.isGecko=t.isMozilla=s.match(/ Gecko\/\d+/),t.isOpera=typeof opera=="object"&&Object.prototype.toString.call(window.opera)=="[object Opera]",t.isWebKit=parseFloat(s.split("WebKit/")[1])||undefined,t.isChrome=parseFloat(s.split(" Chrome/")[1])||undefined,t.isEdge=parseFloat(s.split(" Edge/")[1])||undefined,t.isAIR=s.indexOf("AdobeAIR")>=0,t.isAndroid=s.indexOf("Android")>=0,t.isChromeOS=s.indexOf(" CrOS ")>=0,t.isIOS=/iPad|iPhone|iPod/.test(s)&&!window.MSStream,t.isIOS&&(t.isMac=!0),t.isMobile=t.isIOS||t.isAndroid}),ace.define("ace/lib/dom",["require","exports","module","ace/lib/useragent"],function(e,t,n){"use strict";function u(){var e=o;o=null,e&&e.forEach(function(e){a(e[0],e[1])})}function a(e,n,r){if(typeof document=="undefined")return;if(o)if(r)u();else if(r===!1)return o.push([e,n]);if(s)return;var i=r;if(!r||!r.getRootNode)i=document;else{i=r.getRootNode();if(!i||i==r)i=document}var a=i.ownerDocument||i;if(n&&t.hasCssString(n,i))return null;n&&(e+="\n/*# sourceURL=ace/css/"+n+" */");var f=t.createElement("style");f.appendChild(a.createTextNode(e)),n&&(f.id=n),i==a&&(i=t.getDocumentHead(a)),i.insertBefore(f,i.firstChild)}var r=e("./useragent"),i="http://www.w3.org/1999/xhtml";t.buildDom=function l(e,t,n){if(typeof e=="string"&&e){var r=document.createTextNode(e);return t&&t.appendChild(r),r}if(!Array.isArray(e))return e&&e.appendChild&&t&&t.appendChild(e),e;if(typeof e[0]!="string"||!e[0]){var i=[];for(var s=0;s<e.length;s++){var o=l(e[s],t,n);o&&i.push(o)}return i}var u=document.createElement(e[0]),a=e[1],f=1;a&&typeof a=="object"&&!Array.isArray(a)&&(f=2);for(var s=f;s<e.length;s++)l(e[s],u,n);return f==2&&Object.keys(a).forEach(function(e){var t=a[e];e==="class"?u.className=Array.isArray(t)?t.join(" "):t:typeof t=="function"||e=="value"||e[0]=="$"?u[e]=t:e==="ref"?n&&(n[t]=u):e==="style"?typeof t=="string"&&(u.style.cssText=t):t!=null&&u.setAttribute(e,t)}),t&&t.appendChild(u),u},t.getDocumentHead=function(e){return e||(e=document),e.head||e.getElementsByTagName("head")[0]||e.documentElement},t.createElement=function(e,t){return document.createElementNS?document.createElementNS(t||i,e):document.createElement(e)},t.removeChildren=function(e){e.innerHTML=""},t.createTextNode=function(e,t){var n=t?t.ownerDocument:document;return n.createTextNode(e)},t.createFragment=function(e){var t=e?e.ownerDocument:document;return t.createDocumentFragment()},t.hasCssClass=function(e,t){var n=(e.className+"").split(/\s+/g);return n.indexOf(t)!==-1},t.addCssClass=function(e,n){t.hasCssClass(e,n)||(e.className+=" "+n)},t.removeCssClass=function(e,t){var n=e.className.split(/\s+/g);for(;;){var r=n.indexOf(t);if(r==-1)break;n.splice(r,1)}e.className=n.join(" ")},t.toggleCssClass=function(e,t){var n=e.className.split(/\s+/g),r=!0;for(;;){var i=n.indexOf(t);if(i==-1)break;r=!1,n.splice(i,1)}return r&&n.push(t),e.className=n.join(" "),r},t.setCssClass=function(e,n,r){r?t.addCssClass(e,n):t.removeCssClass(e,n)},t.hasCssString=function(e,t){var n=0,r;t=t||document;if(r=t.querySelectorAll("style"))while(n<r.length)if(r[n++].id===e)return!0},t.removeElementById=function(e,t){t=t||document,t.getElementById(e)&&t.getElementById(e).remove()};var s,o=[];t.useStrictCSP=function(e){s=e,e==0?u():o||(o=[])},t.importCssString=a,t.importCssStylsheet=function(e,n){t.buildDom(["link",{rel:"stylesheet",href:e}],t.getDocumentHead(n))},t.scrollbarWidth=function(e){var n=t.createElement("ace_inner");n.style.width="100%",n.style.minWidth="0px",n.style.height="200px",n.style.display="block";var r=t.createElement("ace_outer"),i=r.style;i.position="absolute",i.left="-10000px",i.overflow="hidden",i.width="200px",i.minWidth="0px",i.height="150px",i.display="block",r.appendChild(n);var s=e.documentElement;s.appendChild(r);var o=n.offsetWidth;i.overflow="scroll";var u=n.offsetWidth;return o==u&&(u=r.clientWidth),s.removeChild(r),o-u},t.computedStyle=function(e,t){return window.getComputedStyle(e,"")||{}},t.setStyle=function(e,t,n){e[t]!==n&&(e[t]=n)},t.HAS_CSS_ANIMATION=!1,t.HAS_CSS_TRANSFORMS=!1,t.HI_DPI=r.isWin?typeof window!="undefined"&&window.devicePixelRatio>=1.5:!0,r.isChromeOS&&(t.HI_DPI=!1);if(typeof document!="undefined"){var f=document.createElement("div");t.HI_DPI&&f.style.transform!==undefined&&(t.HAS_CSS_TRANSFORMS=!0),!r.isEdge&&typeof f.style.animationName!="undefined"&&(t.HAS_CSS_ANIMATION=!0),f=null}t.HAS_CSS_TRANSFORMS?t.translate=function(e,t,n){e.style.transform="translate("+Math.round(t)+"px, "+Math.round(n)+"px)"}:t.translate=function(e,t,n){e.style.top=Math.round(n)+"px",e.style.left=Math.round(t)+"px"}}),ace.define("ace/lib/net",["require","exports","module","ace/lib/dom"],function(e,t,n){"use strict";var r=e("./dom");t.get=function(e,t){var n=new XMLHttpRequest;n.open("GET",e,!0),n.onreadystatechange=function(){n.readyState===4&&t(n.responseText)},n.send(null)},t.loadScript=function(e,t){var n=r.getDocumentHead(),i=document.createElement("script");i.src=e,n.appendChild(i),i.onload=i.onreadystatechange=function(e,n){if(n||!i.readyState||i.readyState=="loaded"||i.readyState=="complete")i=i.onload=i.onreadystatechange=null,n||t()}},t.qualifyURL=function(e){var t=document.createElement("a");return t.href=e,t.href}}),ace.define("ace/lib/event_emitter",["require","exports","module"],function(e,t,n){"use strict";var r={},i=function(){this.propagationStopped=!0},s=function(){this.defaultPrevented=!0};r._emit=r._dispatchEvent=function(e,t){this._eventRegistry||(this._eventRegistry={}),this._defaultHandlers||(this._defaultHandlers={});var n=this._eventRegistry[e]||[],r=this._defaultHandlers[e];if(!n.length&&!r)return;if(typeof t!="object"||!t)t={};t.type||(t.type=e),t.stopPropagation||(t.stopPropagation=i),t.preventDefault||(t.preventDefault=s),n=n.slice();for(var o=0;o<n.length;o++){n[o](t,this);if(t.propagationStopped)break}if(r&&!t.defaultPrevented)return r(t,this)},r._signal=function(e,t){var n=(this._eventRegistry||{})[e];if(!n)return;n=n.slice();for(var r=0;r<n.length;r++)n[r](t,this)},r.once=function(e,t){var n=this;this.on(e,function r(){n.off(e,r),t.apply(null,arguments)});if(!t)return new Promise(function(e){t=e})},r.setDefaultHandler=function(e,t){var n=this._defaultHandlers;n||(n=this._defaultHandlers={_disabled_:{}});if(n[e]){var r=n[e],i=n._disabled_[e];i||(n._disabled_[e]=i=[]),i.push(r);var s=i.indexOf(t);s!=-1&&i.splice(s,1)}n[e]=t},r.removeDefaultHandler=function(e,t){var n=this._defaultHandlers;if(!n)return;var r=n._disabled_[e];if(n[e]==t)r&&this.setDefaultHandler(e,r.pop());else if(r){var i=r.indexOf(t);i!=-1&&r.splice(i,1)}},r.on=r.addEventListener=function(e,t,n){this._eventRegistry=this._eventRegistry||{};var r=this._eventRegistry[e];return r||(r=this._eventRegistry[e]=[]),r.indexOf(t)==-1&&r[n?"unshift":"push"](t),t},r.off=r.removeListener=r.removeEventListener=function(e,t){this._eventRegistry=this._eventRegistry||{};var n=this._eventRegistry[e];if(!n)return;var r=n.indexOf(t);r!==-1&&n.splice(r,1)},r.removeAllListeners=function(e){e||(this._eventRegistry=this._defaultHandlers=undefined),this._eventRegistry&&(this._eventRegistry[e]=undefined),this._defaultHandlers&&(this._defaultHandlers[e]=undefined)},t.EventEmitter=r}),ace.define("ace/lib/app_config",["require","exports","module","ace/lib/oop","ace/lib/event_emitter"],function(e,t,n){"no use strict";function o(e){typeof console!="undefined"&&console.warn&&console.warn.apply(console,arguments)}function u(e,t){var n=new Error(e);n.data=t,typeof console=="object"&&console.error&&console.error(n),setTimeout(function(){throw n})}var r=e("./oop"),i=e("./event_emitter").EventEmitter,s={setOptions:function(e){Object.keys(e).forEach(function(t){this.setOption(t,e[t])},this)},getOptions:function(e){var t={};if(!e){var n=this.$options;e=Object.keys(n).filter(function(e){return!n[e].hidden})}else Array.isArray(e)||(t=e,e=Object.keys(t));return e.forEach(function(e){t[e]=this.getOption(e)},this),t},setOption:function(e,t){if(this["$"+e]===t)return;var n=this.$options[e];if(!n)return o('misspelled option "'+e+'"');if(n.forwardTo)return this[n.forwardTo]&&this[n.forwardTo].setOption(e,t);n.handlesSet||(this["$"+e]=t),n&&n.set&&n.set.call(this,t)},getOption:function(e){var t=this.$options[e];return t?t.forwardTo?this[t.forwardTo]&&this[t.forwardTo].getOption(e):t&&t.get?t.get.call(this):this["$"+e]:o('misspelled option "'+e+'"')}},a=function(){this.$defaultOptions={}};(function(){r.implement(this,i),this.defineOptions=function(e,t,n){return e.$options||(this.$defaultOptions[t]=e.$options={}),Object.keys(n).forEach(function(t){var r=n[t];typeof r=="string"&&(r={forwardTo:r}),r.name||(r.name=t),e.$options[r.name]=r,"initialValue"in r&&(e["$"+r.name]=r.initialValue)}),r.implement(e,s),this},this.resetOptions=function(e){Object.keys(e.$options).forEach(function(t){var n=e.$options[t];"value"in n&&e.setOption(t,n.value)})},this.setDefaultValue=function(e,t,n){if(!e){for(e in this.$defaultOptions)if(this.$defaultOptions[e][t])break;if(!this.$defaultOptions[e][t])return!1}var r=this.$defaultOptions[e]||(this.$defaultOptions[e]={});r[t]&&(r.forwardTo?this.setDefaultValue(r.forwardTo,t,n):r[t].value=n)},this.setDefaultValues=function(e,t){Object.keys(t).forEach(function(n){this.setDefaultValue(e,n,t[n])},this)},this.warn=o,this.reportError=u}).call(a.prototype),t.AppConfig=a}),ace.define("ace/theme/textmate.css",["require","exports","module"],function(e,t,n){n.exports='.ace-tm .ace_gutter {\n  background: #f0f0f0;\n  color: #333;\n}\n\n.ace-tm .ace_print-margin {\n  width: 1px;\n  background: #e8e8e8;\n}\n\n.ace-tm .ace_fold {\n    background-color: #6B72E6;\n}\n\n.ace-tm {\n  background-color: #FFFFFF;\n  color: black;\n}\n\n.ace-tm .ace_cursor {\n  color: black;\n}\n        \n.ace-tm .ace_invisible {\n  color: rgb(191, 191, 191);\n}\n\n.ace-tm .ace_storage,\n.ace-tm .ace_keyword {\n  color: blue;\n}\n\n.ace-tm .ace_constant {\n  color: rgb(197, 6, 11);\n}\n\n.ace-tm .ace_constant.ace_buildin {\n  color: rgb(88, 72, 246);\n}\n\n.ace-tm .ace_constant.ace_language {\n  color: rgb(88, 92, 246);\n}\n\n.ace-tm .ace_constant.ace_library {\n  color: rgb(6, 150, 14);\n}\n\n.ace-tm .ace_invalid {\n  background-color: rgba(255, 0, 0, 0.1);\n  color: red;\n}\n\n.ace-tm .ace_support.ace_function {\n  color: rgb(60, 76, 114);\n}\n\n.ace-tm .ace_support.ace_constant {\n  color: rgb(6, 150, 14);\n}\n\n.ace-tm .ace_support.ace_type,\n.ace-tm .ace_support.ace_class {\n  color: rgb(109, 121, 222);\n}\n\n.ace-tm .ace_keyword.ace_operator {\n  color: rgb(104, 118, 135);\n}\n\n.ace-tm .ace_string {\n  color: rgb(3, 106, 7);\n}\n\n.ace-tm .ace_comment {\n  color: rgb(76, 136, 107);\n}\n\n.ace-tm .ace_comment.ace_doc {\n  color: rgb(0, 102, 255);\n}\n\n.ace-tm .ace_comment.ace_doc.ace_tag {\n  color: rgb(128, 159, 191);\n}\n\n.ace-tm .ace_constant.ace_numeric {\n  color: rgb(0, 0, 205);\n}\n\n.ace-tm .ace_variable {\n  color: rgb(49, 132, 149);\n}\n\n.ace-tm .ace_xml-pe {\n  color: rgb(104, 104, 91);\n}\n\n.ace-tm .ace_entity.ace_name.ace_function {\n  color: #0000A2;\n}\n\n\n.ace-tm .ace_heading {\n  color: rgb(12, 7, 255);\n}\n\n.ace-tm .ace_list {\n  color:rgb(185, 6, 144);\n}\n\n.ace-tm .ace_meta.ace_tag {\n  color:rgb(0, 22, 142);\n}\n\n.ace-tm .ace_string.ace_regex {\n  color: rgb(255, 0, 0)\n}\n\n.ace-tm .ace_marker-layer .ace_selection {\n  background: rgb(181, 213, 255);\n}\n.ace-tm.ace_multiselect .ace_selection.ace_start {\n  box-shadow: 0 0 3px 0px white;\n}\n.ace-tm .ace_marker-layer .ace_step {\n  background: rgb(252, 255, 0);\n}\n\n.ace-tm .ace_marker-layer .ace_stack {\n  background: rgb(164, 229, 101);\n}\n\n.ace-tm .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid rgb(192, 192, 192);\n}\n\n.ace-tm .ace_marker-layer .ace_active-line {\n  background: rgba(0, 0, 0, 0.07);\n}\n\n.ace-tm .ace_gutter-active-line {\n    background-color : #dcdcdc;\n}\n\n.ace-tm .ace_marker-layer .ace_selected-word {\n  background: rgb(250, 250, 255);\n  border: 1px solid rgb(200, 200, 250);\n}\n\n.ace-tm .ace_indent-guide {\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;\n}\n\n.ace-tm .ace_indent-guide-active {\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAZSURBVHjaYvj///9/hivKyv8BAAAA//8DACLqBhbvk+/eAAAAAElFTkSuQmCC") right repeat-y;\n}\n'}),ace.define("ace/theme/textmate",["require","exports","module","ace/theme/textmate.css","ace/lib/dom"],function(e,t,n){"use strict";t.isDark=!1,t.cssClass="ace-tm",t.cssText=e("./textmate.css"),t.$id="ace/theme/textmate";var r=e("../lib/dom");r.importCssString(t.cssText,t.cssClass,!1)}),ace.define("ace/config",["require","exports","module","ace/lib/lang","ace/lib/oop","ace/lib/net","ace/lib/dom","ace/lib/app_config","ace/theme/textmate"],function(e,t,n){"no use strict";var r=e("./lib/lang"),i=e("./lib/oop"),s=e("./lib/net"),o=e("./lib/dom"),u=e("./lib/app_config").AppConfig;n.exports=t=new u;var a={packaged:!1,workerPath:null,modePath:null,themePath:null,basePath:"",suffix:".js",$moduleUrls:{},loadWorkerFromBlob:!0,sharedPopups:!1,useStrictCSP:null};t.get=function(e){if(!a.hasOwnProperty(e))throw new Error("Unknown config key: "+e);return a[e]},t.set=function(e,t){if(a.hasOwnProperty(e))a[e]=t;else if(this.setDefaultValue("",e,t)==0)throw new Error("Unknown config key: "+e);e=="useStrictCSP"&&o.useStrictCSP(t)},t.all=function(){return r.copyObject(a)},t.$modes={},t.moduleUrl=function(e,t){if(a.$moduleUrls[e])return a.$moduleUrls[e];var n=e.split("/");t=t||n[n.length-2]||"";var r=t=="snippets"?"/":"-",i=n[n.length-1];if(t=="worker"&&r=="-"){var s=new RegExp("^"+t+"[\\-_]|[\\-_]"+t+"$","g");i=i.replace(s,"")}(!i||i==t)&&n.length>1&&(i=n[n.length-2]);var o=a[t+"Path"];return o==null?o=a.basePath:r=="/"&&(t=r=""),o&&o.slice(-1)!="/"&&(o+="/"),o+t+r+i+this.get("suffix")},t.setModuleUrl=function(e,t){return a.$moduleUrls[e]=t};var f=function(t,n){return t=="ace/theme/textmate"?n(null,e("./theme/textmate")):console.error("loader is not configured")};t.setLoader=function(e){f=e},t.$loading={},t.loadModule=function(n,r){var i,o;Array.isArray(n)&&(o=n[0],n=n[1]);try{i=e(n)}catch(u){}if(i&&!t.$loading[n])return r&&r(i);t.$loading[n]||(t.$loading[n]=[]),t.$loading[n].push(r);if(t.$loading[n].length>1)return;var a=function(){f(n,function(e,r){t._emit("load.module",{name:n,module:r});var i=t.$loading[n];t.$loading[n]=null,i.forEach(function(e){e&&e(r)})})};if(!t.get("packaged"))return a();s.loadScript(t.moduleUrl(n,o),a),l()};var l=function(){!a.basePath&&!a.workerPath&&!a.modePath&&!a.themePath&&!Object.keys(a.$moduleUrls).length&&(console.error("Unable to infer path to ace from script src,","use ace.config.set('basePath', 'path') to enable dynamic loading of modes and themes","or with webpack use ace/webpack-resolver"),l=function(){})};t.version="1.12.5"}),ace.define("ace/loader_build",["require","exports","module","ace/lib/fixoldbrowsers","ace/config"],function(e,t,n){"use strict";function s(t){if(!i||!i.document)return;r.set("packaged",t||e.packaged||n.packaged||i.define&&define.packaged);var s={},u="",a=document.currentScript||document._currentScript,f=a&&a.ownerDocument||document,l=f.getElementsByTagName("script");for(var c=0;c<l.length;c++){var h=l[c],p=h.src||h.getAttribute("src");if(!p)continue;var d=h.attributes;for(var v=0,m=d.length;v<m;v++){var g=d[v];g.name.indexOf("data-ace-")===0&&(s[o(g.name.replace(/^data-ace-/,""))]=g.value)}var y=p.match(/^(.*)\/ace(\-\w+)?\.js(\?|$)/);y&&(u=y[1])}u&&(s.base=s.base||u,s.packaged=!0),s.basePath=s.base,s.workerPath=s.workerPath||s.base,s.modePath=s.modePath||s.base,s.themePath=s.themePath||s.base,delete s.base;for(var b in s)typeof s[b]!="undefined"&&r.set(b,s[b])}function o(e){return e.replace(/-(.)/g,function(e,t){return t.toUpperCase()})}e("./lib/fixoldbrowsers");var r=e("./config");r.setLoader(function(t,n){e([t],function(e){n(null,e)})});var i=function(){return this||typeof window!="undefined"&&window}();n.exports=function(t){r.init=s,t.require=e,typeof define=="function"&&(t.define=define)}}),ace.define("ace/lib/keys",["require","exports","module","ace/lib/oop"],function(e,t,n){"use strict";var r=e("./oop"),i=function(){var e={MODIFIER_KEYS:{16:"Shift",17:"Ctrl",18:"Alt",224:"Meta",91:"MetaLeft",92:"MetaRight",93:"ContextMenu"},KEY_MODS:{ctrl:1,alt:2,option:2,shift:4,"super":8,meta:8,command:8,cmd:8,control:1},FUNCTION_KEYS:{8:"Backspace",9:"Tab",13:"Return",19:"Pause",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"Print",45:"Insert",46:"Delete",96:"Numpad0",97:"Numpad1",98:"Numpad2",99:"Numpad3",100:"Numpad4",101:"Numpad5",102:"Numpad6",103:"Numpad7",104:"Numpad8",105:"Numpad9","-13":"NumpadEnter",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"Numlock",145:"Scrolllock"},PRINTABLE_KEYS:{32:" ",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",61:"=",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",107:"+",109:"-",110:".",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",111:"/",106:"*"}},t,n;for(n in e.FUNCTION_KEYS)t=e.FUNCTION_KEYS[n].toLowerCase(),e[t]=parseInt(n,10);for(n in e.PRINTABLE_KEYS)t=e.PRINTABLE_KEYS[n].toLowerCase(),e[t]=parseInt(n,10);return r.mixin(e,e.MODIFIER_KEYS),r.mixin(e,e.PRINTABLE_KEYS),r.mixin(e,e.FUNCTION_KEYS),e.enter=e["return"],e.escape=e.esc,e.del=e["delete"],e[173]="-",function(){var t=["cmd","ctrl","alt","shift"];for(var n=Math.pow(2,t.length);n--;)e.KEY_MODS[n]=t.filter(function(t){return n&e.KEY_MODS[t]}).join("-")+"-"}(),e.KEY_MODS[0]="",e.KEY_MODS[-1]="input-",e}();r.mixin(t,i),t.keyCodeToString=function(e){var t=i[e];return typeof t!="string"&&(t=String.fromCharCode(e)),t.toLowerCase()}}),ace.define("ace/lib/event",["require","exports","module","ace/lib/keys","ace/lib/useragent"],function(e,t,n){"use strict";function a(){u=!1;try{document.createComment("").addEventListener("test",function(){},{get passive(){u={passive:!1}}})}catch(e){}}function f(){return u==undefined&&a(),u}function l(e,t,n){this.elem=e,this.type=t,this.callback=n}function d(e,t,n){var u=p(t);if(!i.isMac&&s){t.getModifierState&&(t.getModifierState("OS")||t.getModifierState("Win"))&&(u|=8);if(s.altGr){if((3&u)==3)return;s.altGr=0}if(n===18||n===17){var a="location"in t?t.location:t.keyLocation;if(n===17&&a===1)s[n]==1&&(o=t.timeStamp);else if(n===18&&u===3&&a===2){var f=t.timeStamp-o;f<50&&(s.altGr=!0)}}}n in r.MODIFIER_KEYS&&(n=-1);if(!u&&n===13){var a="location"in t?t.location:t.keyLocation;if(a===3){e(t,u,-n);if(t.defaultPrevented)return}}if(i.isChromeOS&&u&8){e(t,u,n);if(t.defaultPrevented)return;u&=-9}return!!u||n in r.FUNCTION_KEYS||n in r.PRINTABLE_KEYS?e(t,u,n):!1}function v(){s=Object.create(null)}var r=e("./keys"),i=e("./useragent"),s=null,o=0,u;l.prototype.destroy=function(){h(this.elem,this.type,this.callback),this.elem=this.type=this.callback=undefined};var c=t.addListener=function(e,t,n,r){e.addEventListener(t,n,f()),r&&r.$toDestroy.push(new l(e,t,n))},h=t.removeListener=function(e,t,n){e.removeEventListener(t,n,f())};t.stopEvent=function(e){return t.stopPropagation(e),t.preventDefault(e),!1},t.stopPropagation=function(e){e.stopPropagation&&e.stopPropagation()},t.preventDefault=function(e){e.preventDefault&&e.preventDefault()},t.getButton=function(e){return e.type=="dblclick"?0:e.type=="contextmenu"||i.isMac&&e.ctrlKey&&!e.altKey&&!e.shiftKey?2:e.button},t.capture=function(e,t,n){function i(e){t&&t(e),n&&n(e),h(r,"mousemove",t),h(r,"mouseup",i),h(r,"dragstart",i)}var r=e&&e.ownerDocument||document;return c(r,"mousemove",t),c(r,"mouseup",i),c(r,"dragstart",i),i},t.addMouseWheelListener=function(e,t,n){c(e,"wheel",function(e){var n=.15,r=e.deltaX||0,i=e.deltaY||0;switch(e.deltaMode){case e.DOM_DELTA_PIXEL:e.wheelX=r*n,e.wheelY=i*n;break;case e.DOM_DELTA_LINE:var s=15;e.wheelX=r*s,e.wheelY=i*s;break;case e.DOM_DELTA_PAGE:var o=150;e.wheelX=r*o,e.wheelY=i*o}t(e)},n)},t.addMultiMouseDownListener=function(e,n,r,s,o){function p(e){t.getButton(e)!==0?u=0:e.detail>1?(u++,u>4&&(u=1)):u=1;if(i.isIE){var o=Math.abs(e.clientX-a)>5||Math.abs(e.clientY-f)>5;if(!l||o)u=1;l&&clearTimeout(l),l=setTimeout(function(){l=null},n[u-1]||600),u==1&&(a=e.clientX,f=e.clientY)}e._clicks=u,r[s]("mousedown",e);if(u>4)u=0;else if(u>1)return r[s](h[u],e)}var u=0,a,f,l,h={2:"dblclick",3:"tripleclick",4:"quadclick"};Array.isArray(e)||(e=[e]),e.forEach(function(e){c(e,"mousedown",p,o)})};var p=function(e){return 0|(e.ctrlKey?1:0)|(e.altKey?2:0)|(e.shiftKey?4:0)|(e.metaKey?8:0)};t.getModifierString=function(e){return r.KEY_MODS[p(e)]},t.addCommandKeyListener=function(e,n,r){if(i.isOldGecko||i.isOpera&&!("KeyboardEvent"in window)){var o=null;c(e,"keydown",function(e){o=e.keyCode},r),c(e,"keypress",function(e){return d(n,e,o)},r)}else{var u=null;c(e,"keydown",function(e){s[e.keyCode]=(s[e.keyCode]||0)+1;var t=d(n,e,e.keyCode);return u=e.defaultPrevented,t},r),c(e,"keypress",function(e){u&&(e.ctrlKey||e.altKey||e.shiftKey||e.metaKey)&&(t.stopEvent(e),u=null)},r),c(e,"keyup",function(e){s[e.keyCode]=null},r),s||(v(),c(window,"focus",v))}};if(typeof window=="object"&&window.postMessage&&!i.isOldIE){var m=1;t.nextTick=function(e,n){n=n||window;var r="zero-timeout-message-"+m++,i=function(s){s.data==r&&(t.stopPropagation(s),h(n,"message",i),e())};c(n,"message",i),n.postMessage(r,"*")}}t.$idleBlocked=!1,t.onIdle=function(e,n){return setTimeout(function r(){t.$idleBlocked?setTimeout(r,100):e()},n)},t.$idleBlockId=null,t.blockIdle=function(e){t.$idleBlockId&&clearTimeout(t.$idleBlockId),t.$idleBlocked=!0,t.$idleBlockId=setTimeout(function(){t.$idleBlocked=!1},e||100)},t.nextFrame=typeof window=="object"&&(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame),t.nextFrame?t.nextFrame=t.nextFrame.bind(window):t.nextFrame=function(e){setTimeout(e,17)}}),ace.define("ace/range",["require","exports","module"],function(e,t,n){"use strict";var r=function(e,t){return e.row-t.row||e.column-t.column},i=function(e,t,n,r){this.start={row:e,column:t},this.end={row:n,column:r}};(function(){this.isEqual=function(e){return this.start.row===e.start.row&&this.end.row===e.end.row&&this.start.column===e.start.column&&this.end.column===e.end.column},this.toString=function(){return"Range: ["+this.start.row+"/"+this.start.column+"] -> ["+this.end.row+"/"+this.end.column+"]"},this.contains=function(e,t){return this.compare(e,t)==0},this.compareRange=function(e){var t,n=e.end,r=e.start;return t=this.compare(n.row,n.column),t==1?(t=this.compare(r.row,r.column),t==1?2:t==0?1:0):t==-1?-2:(t=this.compare(r.row,r.column),t==-1?-1:t==1?42:0)},this.comparePoint=function(e){return this.compare(e.row,e.column)},this.containsRange=function(e){return this.comparePoint(e.start)==0&&this.comparePoint(e.end)==0},this.intersects=function(e){var t=this.compareRange(e);return t==-1||t==0||t==1},this.isEnd=function(e,t){return this.end.row==e&&this.end.column==t},this.isStart=function(e,t){return this.start.row==e&&this.start.column==t},this.setStart=function(e,t){typeof e=="object"?(this.start.column=e.column,this.start.row=e.row):(this.start.row=e,this.start.column=t)},this.setEnd=function(e,t){typeof e=="object"?(this.end.column=e.column,this.end.row=e.row):(this.end.row=e,this.end.column=t)},this.inside=function(e,t){return this.compare(e,t)==0?this.isEnd(e,t)||this.isStart(e,t)?!1:!0:!1},this.insideStart=function(e,t){return this.compare(e,t)==0?this.isEnd(e,t)?!1:!0:!1},this.insideEnd=function(e,t){return this.compare(e,t)==0?this.isStart(e,t)?!1:!0:!1},this.compare=function(e,t){return!this.isMultiLine()&&e===this.start.row?t<this.start.column?-1:t>this.end.column?1:0:e<this.start.row?-1:e>this.end.row?1:this.start.row===e?t>=this.start.column?0:-1:this.end.row===e?t<=this.end.column?0:1:0},this.compareStart=function(e,t){return this.start.row==e&&this.start.column==t?-1:this.compare(e,t)},this.compareEnd=function(e,t){return this.end.row==e&&this.end.column==t?1:this.compare(e,t)},this.compareInside=function(e,t){return this.end.row==e&&this.end.column==t?1:this.start.row==e&&this.start.column==t?-1:this.compare(e,t)},this.clipRows=function(e,t){if(this.end.row>t)var n={row:t+1,column:0};else if(this.end.row<e)var n={row:e,column:0};if(this.start.row>t)var r={row:t+1,column:0};else if(this.start.row<e)var r={row:e,column:0};return i.fromPoints(r||this.start,n||this.end)},this.extend=function(e,t){var n=this.compare(e,t);if(n==0)return this;if(n==-1)var r={row:e,column:t};else var s={row:e,column:t};return i.fromPoints(r||this.start,s||this.end)},this.isEmpty=function(){return this.start.row===this.end.row&&this.start.column===this.end.column},this.isMultiLine=function(){return this.start.row!==this.end.row},this.clone=function(){return i.fromPoints(this.start,this.end)},this.collapseRows=function(){return this.end.column==0?new i(this.start.row,0,Math.max(this.start.row,this.end.row-1),0):new i(this.start.row,0,this.end.row,0)},this.toScreenRange=function(e){var t=e.documentToScreenPosition(this.start),n=e.documentToScreenPosition(this.end);return new i(t.row,t.column,n.row,n.column)},this.moveBy=function(e,t){this.start.row+=e,this.start.column+=t,this.end.row+=e,this.end.column+=t}}).call(i.prototype),i.fromPoints=function(e,t){return new i(e.row,e.column,t.row,t.column)},i.comparePoints=r,i.comparePoints=function(e,t){return e.row-t.row||e.column-t.column},t.Range=i}),ace.define("ace/clipboard",["require","exports","module"],function(e,t,n){"use strict";var r;n.exports={lineMode:!1,pasteCancelled:function(){return r&&r>Date.now()-50?!0:r=!1},cancel:function(){r=Date.now()}}}),ace.define("ace/keyboard/textinput",["require","exports","module","ace/lib/event","ace/lib/useragent","ace/lib/dom","ace/lib/lang","ace/clipboard","ace/lib/keys"],function(e,t,n){"use strict";var r=e("../lib/event"),i=e("../lib/useragent"),s=e("../lib/dom"),o=e("../lib/lang"),u=e("../clipboard"),a=i.isChrome<18,f=i.isIE,l=i.isChrome>63,c=400,h=e("../lib/keys"),p=h.KEY_MODS,d=i.isIOS,v=d?/\s/:/\n/,m=i.isMobile,g=function(e,t){function X(){x=!0,n.blur(),n.focus(),x=!1}function $(e){e.keyCode==27&&n.value.length<n.selectionStart&&(b||(T=n.value),N=C=-1,O()),V()}function K(){clearTimeout(J),J=setTimeout(function(){E&&(n.style.cssText=E,E=""),t.renderer.$isMousePressed=!1,t.renderer.$keepTextAreaAtCursor&&t.renderer.$moveTextAreaToCursor()},0)}function G(e,t,n){var r=null,i=!1;n.addEventListener("keydown",function(e){r&&clearTimeout(r),i=!0},!0),n.addEventListener("keyup",function(e){r=setTimeout(function(){i=!1},100)},!0);var s=function(e){if(document.activeElement!==n)return;if(i||b||t.$mouseHandler.isMousePressed)return;if(g)return;var r=n.selectionStart,s=n.selectionEnd,o=null,u=0;if(r==0)o=h.up;else if(r==1)o=h.home;else if(s>C&&T[s]=="\n")o=h.end;else if(r<N&&T[r-1]==" ")o=h.left,u=p.option;else if(r<N||r==N&&C!=N&&r==s)o=h.left;else if(s>C&&T.slice(0,s).split("\n").length>2)o=h.down;else if(s>C&&T[s-1]==" ")o=h.right,u=p.option;else if(s>C||s==C&&C!=N&&r==s)o=h.right;r!==s&&(u|=p.shift);if(o){var a=t.onCommandKey({},u,o);if(!a&&t.commands){o=h.keyCodeToString(o);var f=t.commands.findKeyCommand(u,o);f&&t.execCommand(f)}N=r,C=s,O("")}};document.addEventListener("selectionchange",s),t.on("destroy",function(){document.removeEventListener("selectionchange",s)})}var n=s.createElement("textarea");n.className="ace_text-input",n.setAttribute("wrap","off"),n.setAttribute("autocorrect","off"),n.setAttribute("autocapitalize","off"),n.setAttribute("spellcheck",!1),n.style.opacity="0",e.insertBefore(n,e.firstChild);var g=!1,y=!1,b=!1,w=!1,E="";m||(n.style.fontSize="1px");var S=!1,x=!1,T="",N=0,C=0,k=0;try{var L=document.activeElement===n}catch(A){}r.addListener(n,"blur",function(e){if(x)return;t.onBlur(e),L=!1},t),r.addListener(n,"focus",function(e){if(x)return;L=!0;if(i.isEdge)try{if(!document.hasFocus())return}catch(e){}t.onFocus(e),i.isEdge?setTimeout(O):O()},t),this.$focusScroll=!1,this.focus=function(){if(E||l||this.$focusScroll=="browser")return n.focus({preventScroll:!0});var e=n.style.top;n.style.position="fixed",n.style.top="0px";try{var t=n.getBoundingClientRect().top!=0}catch(r){return}var i=[];if(t){var s=n.parentElement;while(s&&s.nodeType==1)i.push(s),s.setAttribute("ace_nocontext",!0),!s.parentElement&&s.getRootNode?s=s.getRootNode().host:s=s.parentElement}n.focus({preventScroll:!0}),t&&i.forEach(function(e){e.removeAttribute("ace_nocontext")}),setTimeout(function(){n.style.position="",n.style.top=="0px"&&(n.style.top=e)},0)},this.blur=function(){n.blur()},this.isFocused=function(){return L},t.on("beforeEndOperation",function(){var e=t.curOp,r=e&&e.command&&e.command.name;if(r=="insertstring")return;var i=r&&(e.docChanged||e.selectionChanged);b&&i&&(T=n.value="",W()),O()});var O=d?function(e){if(!L||g&&!e||w)return;e||(e="");var r="\n ab"+e+"cde fg\n";r!=n.value&&(n.value=T=r);var i=4,s=4+(e.length||(t.selection.isEmpty()?0:1));(N!=i||C!=s)&&n.setSelectionRange(i,s),N=i,C=s}:function(){if(b||w)return;if(!L&&!P)return;b=!0;var e=0,r=0,i="";if(t.session){var s=t.selection,o=s.getRange(),u=s.cursor.row;e=o.start.column,r=o.end.column,i=t.session.getLine(u);if(o.start.row!=u){var a=t.session.getLine(u-1);e=o.start.row<u-1?0:e,r+=a.length+1,i=a+"\n"+i}else if(o.end.row!=u){var f=t.session.getLine(u+1);r=o.end.row>u+1?f.length:r,r+=i.length+1,i=i+"\n"+f}else m&&u>0&&(i="\n"+i,r+=1,e+=1);i.length>c&&(e<c&&r<c?i=i.slice(0,c):(i="\n",e==r?e=r=0:(e=0,r=1)))}var l=i+"\n\n";l!=T&&(n.value=T=l,N=C=l.length),P&&(N=n.selectionStart,C=n.selectionEnd);if(C!=r||N!=e||n.selectionEnd!=C)try{n.setSelectionRange(e,r),N=e,C=r}catch(h){}b=!1};this.resetSelection=O,L&&t.onFocus();var M=function(e){return e.selectionStart===0&&e.selectionEnd>=T.length&&e.value===T&&T&&e.selectionEnd!==C},_=function(e){if(b)return;g?g=!1:M(n)?(t.selectAll(),O()):m&&n.selectionStart!=N&&O()},D=null;this.setInputHandler=function(e){D=e},this.getInputHandler=function(){return D};var P=!1,H=function(e,r){P&&(P=!1);if(y)return O(),e&&t.onPaste(e),y=!1,"";var s=n.selectionStart,o=n.selectionEnd,u=N,a=T.length-C,f=e,l=e.length-s,c=e.length-o,h=0;while(u>0&&T[h]==e[h])h++,u--;f=f.slice(h),h=1;while(a>0&&T.length-h>N-1&&T[T.length-h]==e[e.length-h])h++,a--;l-=h-1,c-=h-1;var p=f.length-h+1;p<0&&(u=-p,p=0),f=f.slice(0,p);if(!r&&!f&&!l&&!u&&!a&&!c)return"";w=!0;var d=!1;return i.isAndroid&&f==". "&&(f="  ",d=!0),f&&!u&&!a&&!l&&!c||S?t.onTextInput(f):t.onTextInput(f,{extendLeft:u,extendRight:a,restoreStart:l,restoreEnd:c}),w=!1,T=e,N=s,C=o,k=c,d?"\n":f},B=function(e){if(b)return z();if(e&&e.inputType){if(e.inputType=="historyUndo")return t.execCommand("undo");if(e.inputType=="historyRedo")return t.execCommand("redo")}var r=n.value,i=H(r,!0);(r.length>c+100||v.test(i)||m&&N<1&&N==C)&&O()},j=function(e,t,n){var r=e.clipboardData||window.clipboardData;if(!r||a)return;var i=f||n?"Text":"text/plain";try{return t?r.setData(i,t)!==!1:r.getData(i)}catch(e){if(!n)return j(e,t,!0)}},F=function(e,i){var s=t.getCopyText();if(!s)return r.preventDefault(e);j(e,s)?(d&&(O(s),g=s,setTimeout(function(){g=!1},10)),i?t.onCut():t.onCopy(),r.preventDefault(e)):(g=!0,n.value=s,n.select(),setTimeout(function(){g=!1,O(),i?t.onCut():t.onCopy()}))},I=function(e){F(e,!0)},q=function(e){F(e,!1)},R=function(e){var s=j(e);if(u.pasteCancelled())return;typeof s=="string"?(s&&t.onPaste(s,e),i.isIE&&setTimeout(O),r.preventDefault(e)):(n.value="",y=!0)};r.addCommandKeyListener(n,t.onCommandKey.bind(t),t),r.addListener(n,"select",_,t),r.addListener(n,"input",B,t),r.addListener(n,"cut",I,t),r.addListener(n,"copy",q,t),r.addListener(n,"paste",R,t),(!("oncut"in n)||!("oncopy"in n)||!("onpaste"in n))&&r.addListener(e,"keydown",function(e){if(i.isMac&&!e.metaKey||!e.ctrlKey)return;switch(e.keyCode){case 67:q(e);break;case 86:R(e);break;case 88:I(e)}},t);var U=function(e){if(b||!t.onCompositionStart||t.$readOnly)return;b={};if(S)return;e.data&&(b.useTextareaForIME=!1),setTimeout(z,0),t._signal("compositionStart"),t.on("mousedown",X);var r=t.getSelectionRange();r.end.row=r.start.row,r.end.column=r.start.column,b.markerRange=r,b.selectionStart=N,t.onCompositionStart(b),b.useTextareaForIME?(T=n.value="",N=0,C=0):(n.msGetInputContext&&(b.context=n.msGetInputContext()),n.getInputContext&&(b.context=n.getInputContext()))},z=function(){if(!b||!t.onCompositionUpdate||t.$readOnly)return;if(S)return X();if(b.useTextareaForIME)t.onCompositionUpdate(n.value);else{var e=n.value;H(e),b.markerRange&&(b.context&&(b.markerRange.start.column=b.selectionStart=b.context.compositionStartOffset),b.markerRange.end.column=b.markerRange.start.column+C-b.selectionStart+k)}},W=function(e){if(!t.onCompositionEnd||t.$readOnly)return;b=!1,t.onCompositionEnd(),t.off("mousedown",X),e&&B()},V=o.delayedCall(z,50).schedule.bind(null,null);r.addListener(n,"compositionstart",U,t),r.addListener(n,"compositionupdate",z,t),r.addListener(n,"keyup",$,t),r.addListener(n,"keydown",V,t),r.addListener(n,"compositionend",W,t),this.getElement=function(){return n},this.setCommandMode=function(e){S=e,n.readOnly=!1},this.setReadOnly=function(e){S||(n.readOnly=e)},this.setCopyWithEmptySelection=function(e){},this.onContextMenu=function(e){P=!0,O(),t._emit("nativecontextmenu",{target:t,domEvent:e}),this.moveToMouse(e,!0)},this.moveToMouse=function(e,o){E||(E=n.style.cssText),n.style.cssText=(o?"z-index:100000;":"")+(i.isIE?"opacity:0.1;":"")+"text-indent: -"+(N+C)*t.renderer.characterWidth*.5+"px;";var u=t.container.getBoundingClientRect(),a=s.computedStyle(t.container),f=u.top+(parseInt(a.borderTopWidth)||0),l=u.left+(parseInt(u.borderLeftWidth)||0),c=u.bottom-f-n.clientHeight-2,h=function(e){s.translate(n,e.clientX-l-2,Math.min(e.clientY-f-2,c))};h(e);if(e.type!="mousedown")return;t.renderer.$isMousePressed=!0,clearTimeout(J),i.isWin&&r.capture(t.container,h,K)},this.onContextMenuClose=K;var J,Q=function(e){t.textInput.onContextMenu(e),K()};r.addListener(n,"mouseup",Q,t),r.addListener(n,"mousedown",function(e){e.preventDefault(),K()},t),r.addListener(t.renderer.scroller,"contextmenu",Q,t),r.addListener(n,"contextmenu",Q,t),d&&G(e,t,n),this.destroy=function(){n.parentElement&&n.parentElement.removeChild(n)}};t.TextInput=g,t.$setUserAgentForTests=function(e,t){m=e,d=t}}),ace.define("ace/mouse/default_handlers",["require","exports","module","ace/lib/useragent"],function(e,t,n){"use strict";function o(e){e.$clickSelection=null;var t=e.editor;t.setDefaultHandler("mousedown",this.onMouseDown.bind(e)),t.setDefaultHandler("dblclick",this.onDoubleClick.bind(e)),t.setDefaultHandler("tripleclick",this.onTripleClick.bind(e)),t.setDefaultHandler("quadclick",this.onQuadClick.bind(e)),t.setDefaultHandler("mousewheel",this.onMouseWheel.bind(e));var n=["select","startSelect","selectEnd","selectAllEnd","selectByWordsEnd","selectByLinesEnd","dragWait","dragWaitEnd","focusWait"];n.forEach(function(t){e[t]=this[t]},this),e.selectByLines=this.extendSelectionBy.bind(e,"getLineRange"),e.selectByWords=this.extendSelectionBy.bind(e,"getWordRange")}function u(e,t,n,r){return Math.sqrt(Math.pow(n-e,2)+Math.pow(r-t,2))}function a(e,t){if(e.start.row==e.end.row)var n=2*t.column-e.start.column-e.end.column;else if(e.start.row==e.end.row-1&&!e.start.column&&!e.end.column)var n=t.column-4;else var n=2*t.row-e.start.row-e.end.row;return n<0?{cursor:e.start,anchor:e.end}:{cursor:e.end,anchor:e.start}}var r=e("../lib/useragent"),i=0,s=550;(function(){this.onMouseDown=function(e){var t=e.inSelection(),n=e.getDocumentPosition();this.mousedownEvent=e;var i=this.editor,s=e.getButton();if(s!==0){var o=i.getSelectionRange(),u=o.isEmpty();(u||s==1)&&i.selection.moveToPosition(n),s==2&&(i.textInput.onContextMenu(e.domEvent),r.isMozilla||e.preventDefault());return}this.mousedownEvent.time=Date.now();if(t&&!i.isFocused()){i.focus();if(this.$focusTimeout&&!this.$clickSelection&&!i.inMultiSelectMode){this.setState("focusWait"),this.captureMouse(e);return}}return this.captureMouse(e),this.startSelect(n,e.domEvent._clicks>1),e.preventDefault()},this.startSelect=function(e,t){e=e||this.editor.renderer.screenToTextCoordinates(this.x,this.y);var n=this.editor;if(!this.mousedownEvent)return;this.mousedownEvent.getShiftKey()?n.selection.selectToPosition(e):t||n.selection.moveToPosition(e),t||this.select(),n.renderer.scroller.setCapture&&n.renderer.scroller.setCapture(),n.setStyle("ace_selecting"),this.setState("select")},this.select=function(){var e,t=this.editor,n=t.renderer.screenToTextCoordinates(this.x,this.y);if(this.$clickSelection){var r=this.$clickSelection.comparePoint(n);if(r==-1)e=this.$clickSelection.end;else if(r==1)e=this.$clickSelection.start;else{var i=a(this.$clickSelection,n);n=i.cursor,e=i.anchor}t.selection.setSelectionAnchor(e.row,e.column)}t.selection.selectToPosition(n),t.renderer.scrollCursorIntoView()},this.extendSelectionBy=function(e){var t,n=this.editor,r=n.renderer.screenToTextCoordinates(this.x,this.y),i=n.selection[e](r.row,r.column);if(this.$clickSelection){var s=this.$clickSelection.comparePoint(i.start),o=this.$clickSelection.comparePoint(i.end);if(s==-1&&o<=0){t=this.$clickSelection.end;if(i.end.row!=r.row||i.end.column!=r.column)r=i.start}else if(o==1&&s>=0){t=this.$clickSelection.start;if(i.start.row!=r.row||i.start.column!=r.column)r=i.end}else if(s==-1&&o==1)r=i.end,t=i.start;else{var u=a(this.$clickSelection,r);r=u.cursor,t=u.anchor}n.selection.setSelectionAnchor(t.row,t.column)}n.selection.selectToPosition(r),n.renderer.scrollCursorIntoView()},this.selectEnd=this.selectAllEnd=this.selectByWordsEnd=this.selectByLinesEnd=function(){this.$clickSelection=null,this.editor.unsetStyle("ace_selecting"),this.editor.renderer.scroller.releaseCapture&&this.editor.renderer.scroller.releaseCapture()},this.focusWait=function(){var e=u(this.mousedownEvent.x,this.mousedownEvent.y,this.x,this.y),t=Date.now();(e>i||t-this.mousedownEvent.time>this.$focusTimeout)&&this.startSelect(this.mousedownEvent.getDocumentPosition())},this.onDoubleClick=function(e){var t=e.getDocumentPosition(),n=this.editor,r=n.session,i=r.getBracketRange(t);i?(i.isEmpty()&&(i.start.column--,i.end.column++),this.setState("select")):(i=n.selection.getWordRange(t.row,t.column),this.setState("selectByWords")),this.$clickSelection=i,this.select()},this.onTripleClick=function(e){var t=e.getDocumentPosition(),n=this.editor;this.setState("selectByLines");var r=n.getSelectionRange();r.isMultiLine()&&r.contains(t.row,t.column)?(this.$clickSelection=n.selection.getLineRange(r.start.row),this.$clickSelection.end=n.selection.getLineRange(r.end.row).end):this.$clickSelection=n.selection.getLineRange(t.row),this.select()},this.onQuadClick=function(e){var t=this.editor;t.selectAll(),this.$clickSelection=t.getSelectionRange(),this.setState("selectAll")},this.onMouseWheel=function(e){if(e.getAccelKey())return;e.getShiftKey()&&e.wheelY&&!e.wheelX&&(e.wheelX=e.wheelY,e.wheelY=0);var t=this.editor;this.$lastScroll||(this.$lastScroll={t:0,vx:0,vy:0,allowed:0});var n=this.$lastScroll,r=e.domEvent.timeStamp,i=r-n.t,o=i?e.wheelX/i:n.vx,u=i?e.wheelY/i:n.vy;i<s&&(o=(o+n.vx)/2,u=(u+n.vy)/2);var a=Math.abs(o/u),f=!1;a>=1&&t.renderer.isScrollableBy(e.wheelX*e.speed,0)&&(f=!0),a<=1&&t.renderer.isScrollableBy(0,e.wheelY*e.speed)&&(f=!0);if(f)n.allowed=r;else if(r-n.allowed<s){var l=Math.abs(o)<=1.5*Math.abs(n.vx)&&Math.abs(u)<=1.5*Math.abs(n.vy);l?(f=!0,n.allowed=r):n.allowed=0}n.t=r,n.vx=o,n.vy=u;if(f)return t.renderer.scrollBy(e.wheelX*e.speed,e.wheelY*e.speed),e.stop()}}).call(o.prototype),t.DefaultHandlers=o}),ace.define("ace/tooltip",["require","exports","module","ace/lib/oop","ace/lib/dom"],function(e,t,n){"use strict";function o(e){this.isOpen=!1,this.$element=null,this.$parentNode=e}var r=e("./lib/oop"),i=e("./lib/dom"),s="ace_tooltip";(function(){this.$init=function(){return this.$element=i.createElement("div"),this.$element.className=s,this.$element.style.display="none",this.$parentNode.appendChild(this.$element),this.$element},this.getElement=function(){return this.$element||this.$init()},this.setText=function(e){this.getElement().textContent=e},this.setHtml=function(e){this.getElement().innerHTML=e},this.setPosition=function(e,t){this.getElement().style.left=e+"px",this.getElement().style.top=t+"px"},this.setClassName=function(e){i.addCssClass(this.getElement(),e)},this.show=function(e,t,n){e!=null&&this.setText(e),t!=null&&n!=null&&this.setPosition(t,n),this.isOpen||(this.getElement().style.display="block",this.isOpen=!0)},this.hide=function(){this.isOpen&&(this.getElement().style.display="none",this.getElement().className=s,this.isOpen=!1)},this.getHeight=function(){return this.getElement().offsetHeight},this.getWidth=function(){return this.getElement().offsetWidth},this.destroy=function(){this.isOpen=!1,this.$element&&this.$element.parentNode&&this.$element.parentNode.removeChild(this.$element)}}).call(o.prototype),t.Tooltip=o}),ace.define("ace/mouse/default_gutter_handler",["require","exports","module","ace/lib/dom","ace/lib/oop","ace/lib/event","ace/tooltip"],function(e,t,n){"use strict";function u(e){function l(){var r=u.getDocumentPosition().row,s=n.$annotations[r];if(!s)return c();var o=t.session.getLength();if(r==o){var a=t.renderer.pixelToScreenCoordinates(0,u.y).row,l=u.$pos;if(a>t.session.documentToScreenRow(l.row,l.column))return c()}if(f==s)return;f=s.text.join("<br/>"),i.setHtml(f);var p=s.className;p&&i.setClassName(p.trim()),i.show(),t._signal("showGutterTooltip",i),t.on("mousewheel",c);if(e.$tooltipFollowsMouse)h(u);else{var d=u.domEvent.target,v=d.getBoundingClientRect(),m=i.getElement().style;m.left=v.right+"px",m.top=v.bottom+"px"}}function c(){o&&(o=clearTimeout(o)),f&&(i.hide(),f=null,t._signal("hideGutterTooltip",i),t.off("mousewheel",c))}function h(e){i.setPosition(e.x,e.y)}var t=e.editor,n=t.renderer.$gutterLayer,i=new a(t.container);e.editor.setDefaultHandler("guttermousedown",function(r){if(!t.isFocused()||r.getButton()!=0)return;var i=n.getRegion(r);if(i=="foldWidgets")return;var s=r.getDocumentPosition().row,o=t.session.selection;if(r.getShiftKey())o.selectTo(s,0);else{if(r.domEvent.detail==2)return t.selectAll(),r.preventDefault();e.$clickSelection=t.selection.getLineRange(s)}return e.setState("selectByLines"),e.captureMouse(r),r.preventDefault()});var o,u,f;e.editor.setDefaultHandler("guttermousemove",function(t){var n=t.domEvent.target||t.domEvent.srcElement;if(r.hasCssClass(n,"ace_fold-widget"))return c();f&&e.$tooltipFollowsMouse&&h(t),u=t;if(o)return;o=setTimeout(function(){o=null,u&&!e.isMousePressed?l():c()},50)}),s.addListener(t.renderer.$gutter,"mouseout",function(e){u=null;if(!f||o)return;o=setTimeout(function(){o=null,c()},50)},t),t.on("changeSession",c)}function a(e){o.call(this,e)}var r=e("../lib/dom"),i=e("../lib/oop"),s=e("../lib/event"),o=e("../tooltip").Tooltip;i.inherits(a,o),function(){this.setPosition=function(e,t){var n=window.innerWidth||document.documentElement.clientWidth,r=window.innerHeight||document.documentElement.clientHeight,i=this.getWidth(),s=this.getHeight();e+=15,t+=15,e+i>n&&(e-=e+i-n),t+s>r&&(t-=20+s),o.prototype.setPosition.call(this,e,t)}}.call(a.prototype),t.GutterHandler=u}),ace.define("ace/mouse/mouse_event",["require","exports","module","ace/lib/event","ace/lib/useragent"],function(e,t,n){"use strict";var r=e("../lib/event"),i=e("../lib/useragent"),s=t.MouseEvent=function(e,t){this.domEvent=e,this.editor=t,this.x=this.clientX=e.clientX,this.y=this.clientY=e.clientY,this.$pos=null,this.$inSelection=null,this.propagationStopped=!1,this.defaultPrevented=!1};(function(){this.stopPropagation=function(){r.stopPropagation(this.domEvent),this.propagationStopped=!0},this.preventDefault=function(){r.preventDefault(this.domEvent),this.defaultPrevented=!0},this.stop=function(){this.stopPropagation(),this.preventDefault()},this.getDocumentPosition=function(){return this.$pos?this.$pos:(this.$pos=this.editor.renderer.screenToTextCoordinates(this.clientX,this.clientY),this.$pos)},this.inSelection=function(){if(this.$inSelection!==null)return this.$inSelection;var e=this.editor,t=e.getSelectionRange();if(t.isEmpty())this.$inSelection=!1;else{var n=this.getDocumentPosition();this.$inSelection=t.contains(n.row,n.column)}return this.$inSelection},this.getButton=function(){return r.getButton(this.domEvent)},this.getShiftKey=function(){return this.domEvent.shiftKey},this.getAccelKey=i.isMac?function(){return this.domEvent.metaKey}:function(){return this.domEvent.ctrlKey}}).call(s.prototype)}),ace.define("ace/mouse/dragdrop_handler",["require","exports","module","ace/lib/dom","ace/lib/event","ace/lib/useragent"],function(e,t,n){"use strict";function f(e){function T(e,n){var r=Date.now(),i=!n||e.row!=n.row,s=!n||e.column!=n.column;if(!S||i||s)t.moveCursorToPosition(e),S=r,x={x:p,y:d};else{var o=l(x.x,x.y,p,d);o>a?S=null:r-S>=u&&(t.renderer.scrollCursorIntoView(),S=null)}}function N(e,n){var r=Date.now(),i=t.renderer.layerConfig.lineHeight,s=t.renderer.layerConfig.characterWidth,u=t.renderer.scroller.getBoundingClientRect(),a={x:{left:p-u.left,right:u.right-p},y:{top:d-u.top,bottom:u.bottom-d}},f=Math.min(a.x.left,a.x.right),l=Math.min(a.y.top,a.y.bottom),c={row:e.row,column:e.column};f/s<=2&&(c.column+=a.x.left<a.x.right?-3:2),l/i<=1&&(c.row+=a.y.top<a.y.bottom?-1:1);var h=e.row!=c.row,v=e.column!=c.column,m=!n||e.row!=n.row;h||v&&!m?E?r-E>=o&&t.renderer.scrollCursorIntoView(c):E=r:E=null}function C(){var e=g;g=t.renderer.screenToTextCoordinates(p,d),T(g,e),N(g,e)}function k(){m=t.selection.toOrientedRange(),h=t.session.addMarker(m,"ace_selection",t.getSelectionStyle()),t.clearSelection(),t.isFocused()&&t.renderer.$cursorLayer.setBlinking(!1),clearInterval(v),C(),v=setInterval(C,20),y=0,i.addListener(document,"mousemove",O)}function L(){clearInterval(v),t.session.removeMarker(h),h=null,t.selection.fromOrientedRange(m),t.isFocused()&&!w&&t.$resetCursorStyle(),m=null,g=null,y=0,E=null,S=null,i.removeListener(document,"mousemove",O)}function O(){A==null&&(A=setTimeout(function(){A!=null&&h&&L()},20))}function M(e){var t=e.types;return!t||Array.prototype.some.call(t,function(e){return e=="text/plain"||e=="Text"})}function _(e){var t=["copy","copymove","all","uninitialized"],n=["move","copymove","linkmove","all","uninitialized"],r=s.isMac?e.altKey:e.ctrlKey,i="uninitialized";try{i=e.dataTransfer.effectAllowed.toLowerCase()}catch(e){}var o="none";return r&&t.indexOf(i)>=0?o="copy":n.indexOf(i)>=0?o="move":t.indexOf(i)>=0&&(o="copy"),o}var t=e.editor,n=r.createElement("div");n.style.cssText="top:-100px;position:absolute;z-index:2147483647;opacity:0.5",n.textContent="\u00a0";var f=["dragWait","dragWaitEnd","startDrag","dragReadyEnd","onMouseDrag"];f.forEach(function(t){e[t]=this[t]},this),t.on("mousedown",this.onMouseDown.bind(e));var c=t.container,h,p,d,v,m,g,y=0,b,w,E,S,x;this.onDragStart=function(e){if(this.cancelDrag||!c.draggable){var r=this;return setTimeout(function(){r.startSelect(),r.captureMouse(e)},0),e.preventDefault()}m=t.getSelectionRange();var i=e.dataTransfer;i.effectAllowed=t.getReadOnly()?"copy":"copyMove",t.container.appendChild(n),i.setDragImage&&i.setDragImage(n,0,0),setTimeout(function(){t.container.removeChild(n)}),i.clearData(),i.setData("Text",t.session.getTextRange()),w=!0,this.setState("drag")},this.onDragEnd=function(e){c.draggable=!1,w=!1,this.setState(null);if(!t.getReadOnly()){var n=e.dataTransfer.dropEffect;!b&&n=="move"&&t.session.remove(t.getSelectionRange()),t.$resetCursorStyle()}this.editor.unsetStyle("ace_dragging"),this.editor.renderer.setCursorStyle("")},this.onDragEnter=function(e){if(t.getReadOnly()||!M(e.dataTransfer))return;return p=e.clientX,d=e.clientY,h||k(),y++,e.dataTransfer.dropEffect=b=_(e),i.preventDefault(e)},this.onDragOver=function(e){if(t.getReadOnly()||!M(e.dataTransfer))return;return p=e.clientX,d=e.clientY,h||(k(),y++),A!==null&&(A=null),e.dataTransfer.dropEffect=b=_(e),i.preventDefault(e)},this.onDragLeave=function(e){y--;if(y<=0&&h)return L(),b=null,i.preventDefault(e)},this.onDrop=function(e){if(!g)return;var n=e.dataTransfer;if(w)switch(b){case"move":m.contains(g.row,g.column)?m={start:g,end:g}:m=t.moveText(m,g);break;case"copy":m=t.moveText(m,g,!0)}else{var r=n.getData("Text");m={start:g,end:t.session.insert(g,r)},t.focus(),b=null}return L(),i.preventDefault(e)},i.addListener(c,"dragstart",this.onDragStart.bind(e),t),i.addListener(c,"dragend",this.onDragEnd.bind(e),t),i.addListener(c,"dragenter",this.onDragEnter.bind(e),t),i.addListener(c,"dragover",this.onDragOver.bind(e),t),i.addListener(c,"dragleave",this.onDragLeave.bind(e),t),i.addListener(c,"drop",this.onDrop.bind(e),t);var A=null}function l(e,t,n,r){return Math.sqrt(Math.pow(n-e,2)+Math.pow(r-t,2))}var r=e("../lib/dom"),i=e("../lib/event"),s=e("../lib/useragent"),o=200,u=200,a=5;(function(){this.dragWait=function(){var e=Date.now()-this.mousedownEvent.time;e>this.editor.getDragDelay()&&this.startDrag()},this.dragWaitEnd=function(){var e=this.editor.container;e.draggable=!1,this.startSelect(this.mousedownEvent.getDocumentPosition()),this.selectEnd()},this.dragReadyEnd=function(e){this.editor.$resetCursorStyle(),this.editor.unsetStyle("ace_dragging"),this.editor.renderer.setCursorStyle(""),this.dragWaitEnd()},this.startDrag=function(){this.cancelDrag=!1;var e=this.editor,t=e.container;t.draggable=!0,e.renderer.$cursorLayer.setBlinking(!1),e.setStyle("ace_dragging");var n=s.isWin?"default":"move";e.renderer.setCursorStyle(n),this.setState("dragReady")},this.onMouseDrag=function(e){var t=this.editor.container;if(s.isIE&&this.state=="dragReady"){var n=l(this.mousedownEvent.x,this.mousedownEvent.y,this.x,this.y);n>3&&t.dragDrop()}if(this.state==="dragWait"){var n=l(this.mousedownEvent.x,this.mousedownEvent.y,this.x,this.y);n>0&&(t.draggable=!1,this.startSelect(this.mousedownEvent.getDocumentPosition()))}},this.onMouseDown=function(e){if(!this.$dragEnabled)return;this.mousedownEvent=e;var t=this.editor,n=e.inSelection(),r=e.getButton(),i=e.domEvent.detail||1;if(i===1&&r===0&&n){if(e.editor.inMultiSelectMode&&(e.getAccelKey()||e.getShiftKey()))return;this.mousedownEvent.time=Date.now();var o=e.domEvent.target||e.domEvent.srcElement;"unselectable"in o&&(o.unselectable="on");if(t.getDragDelay()){if(s.isWebKit){this.cancelDrag=!0;var u=t.container;u.draggable=!0}this.setState("dragWait")}else this.startDrag();this.captureMouse(e,this.onMouseDrag.bind(this)),e.defaultPrevented=!0}}}).call(f.prototype),t.DragdropHandler=f}),ace.define("ace/mouse/touch_handler",["require","exports","module","ace/mouse/mouse_event","ace/lib/event","ace/lib/dom"],function(e,t,n){"use strict";var r=e("./mouse_event").MouseEvent,i=e("../lib/event"),s=e("../lib/dom");t.addTouchListeners=function(e,t){function b(){var e=window.navigator&&window.navigator.clipboard,r=!1,i=function(){var n=t.getCopyText(),i=t.session.getUndoManager().hasUndo();y.replaceChild(s.buildDom(r?["span",!n&&["span",{"class":"ace_mobile-button",action:"selectall"},"Select All"],n&&["span",{"class":"ace_mobile-button",action:"copy"},"Copy"],n&&["span",{"class":"ace_mobile-button",action:"cut"},"Cut"],e&&["span",{"class":"ace_mobile-button",action:"paste"},"Paste"],i&&["span",{"class":"ace_mobile-button",action:"undo"},"Undo"],["span",{"class":"ace_mobile-button",action:"find"},"Find"],["span",{"class":"ace_mobile-button",action:"openCommandPallete"},"Palette"]]:["span"]),y.firstChild)},o=function(n){var s=n.target.getAttribute("action");if(s=="more"||!r)return r=!r,i();if(s=="paste")e.readText().then(function(e){t.execCommand(s,e)});else if(s){if(s=="cut"||s=="copy")e?e.writeText(t.getCopyText()):document.execCommand("copy");t.execCommand(s)}y.firstChild.style.display="none",r=!1,s!="openCommandPallete"&&t.focus()};y=s.buildDom(["div",{"class":"ace_mobile-menu",ontouchstart:function(e){n="menu",e.stopPropagation(),e.preventDefault(),t.textInput.focus()},ontouchend:function(e){e.stopPropagation(),e.preventDefault(),o(e)},onclick:o},["span"],["span",{"class":"ace_mobile-button",action:"more"},"..."]],t.container)}function w(){y||b();var e=t.selection.cursor,n=t.renderer.textToScreenCoordinates(e.row,e.column),r=t.renderer.textToScreenCoordinates(0,0).pageX,i=t.renderer.scrollLeft,s=t.container.getBoundingClientRect();y.style.top=n.pageY-s.top-3+"px",n.pageX-s.left<s.width-70?(y.style.left="",y.style.right="10px"):(y.style.right="",y.style.left=r+i-s.left+"px"),y.style.display="",y.firstChild.style.display="none",t.on("input",E)}function E(e){y&&(y.style.display="none"),t.off("input",E)}function S(){l=null,clearTimeout(l);var e=t.selection.getRange(),r=e.contains(p.row,p.column);if(e.isEmpty()||!r)t.selection.moveToPosition(p),t.selection.selectWord();n="wait",w()}function x(){l=null,clearTimeout(l),t.selection.moveToPosition(p);var e=d>=2?t.selection.getLineRange(p.row):t.session.getBracketRange(p);e&&!e.isEmpty()?t.selection.setRange(e):t.selection.selectWord(),n="wait"}function T(){h+=60,c=setInterval(function(){h--<=0&&(clearInterval(c),c=null),Math.abs(v)<.01&&(v=0),Math.abs(m)<.01&&(m=0),h<20&&(v=.9*v),h<20&&(m=.9*m);var e=t.session.getScrollTop();t.renderer.scrollBy(10*v,10*m),e==t.session.getScrollTop()&&(h=0)},10)}var n="scroll",o,u,a,f,l,c,h=0,p,d=0,v=0,m=0,g,y;i.addListener(e,"contextmenu",function(e){if(!g)return;var n=t.textInput.getElement();n.focus()},t),i.addListener(e,"touchstart",function(e){var i=e.touches;if(l||i.length>1){clearTimeout(l),l=null,a=-1,n="zoom";return}g=t.$mouseHandler.isMousePressed=!0;var s=t.renderer.layerConfig.lineHeight,c=t.renderer.layerConfig.lineHeight,y=e.timeStamp;f=y;var b=i[0],w=b.clientX,E=b.clientY;Math.abs(o-w)+Math.abs(u-E)>s&&(a=-1),o=e.clientX=w,u=e.clientY=E,v=m=0;var T=new r(e,t);p=T.getDocumentPosition();if(y-a<500&&i.length==1&&!h)d++,e.preventDefault(),e.button=0,x();else{d=0;var N=t.selection.cursor,C=t.selection.isEmpty()?N:t.selection.anchor,k=t.renderer.$cursorLayer.getPixelPosition(N,!0),L=t.renderer.$cursorLayer.getPixelPosition(C,!0),A=t.renderer.scroller.getBoundingClientRect(),O=t.renderer.layerConfig.offset,M=t.renderer.scrollLeft,_=function(e,t){return e/=c,t=t/s-.75,e*e+t*t};if(e.clientX<A.left){n="zoom";return}var D=_(e.clientX-A.left-k.left+M,e.clientY-A.top-k.top+O),P=_(e.clientX-A.left-L.left+M,e.clientY-A.top-L.top+O);D<3.5&&P<3.5&&(n=D>P?"cursor":"anchor"),P<3.5?n="anchor":D<3.5?n="cursor":n="scroll",l=setTimeout(S,450)}a=y},t),i.addListener(e,"touchend",function(e){g=t.$mouseHandler.isMousePressed=!1,c&&clearInterval(c),n=="zoom"?(n="",h=0):l?(t.selection.moveToPosition(p),h=0,w()):n=="scroll"?(T(),E()):w(),clearTimeout(l),l=null},t),i.addListener(e,"touchmove",function(e){l&&(clearTimeout(l),l=null);var i=e.touches;if(i.length>1||n=="zoom")return;var s=i[0],a=o-s.clientX,c=u-s.clientY;if(n=="wait"){if(!(a*a+c*c>4))return e.preventDefault();n="cursor"}o=s.clientX,u=s.clientY,e.clientX=s.clientX,e.clientY=s.clientY;var h=e.timeStamp,p=h-f;f=h;if(n=="scroll"){var d=new r(e,t);d.speed=1,d.wheelX=a,d.wheelY=c,10*Math.abs(a)<Math.abs(c)&&(a=0),10*Math.abs(c)<Math.abs(a)&&(c=0),p!=0&&(v=a/p,m=c/p),t._emit("mousewheel",d),d.propagationStopped||(v=m=0)}else{var g=new r(e,t),y=g.getDocumentPosition();n=="cursor"?t.selection.moveCursorToPosition(y):n=="anchor"&&t.selection.setSelectionAnchor(y.row,y.column),t.renderer.scrollCursorIntoView(y),e.preventDefault()}},t)}}),ace.define("ace/mouse/mouse_handler",["require","exports","module","ace/lib/event","ace/lib/useragent","ace/mouse/default_handlers","ace/mouse/default_gutter_handler","ace/mouse/mouse_event","ace/mouse/dragdrop_handler","ace/mouse/touch_handler","ace/config"],function(e,t,n){"use strict";var r=e("../lib/event"),i=e("../lib/useragent"),s=e("./default_handlers").DefaultHandlers,o=e("./default_gutter_handler").GutterHandler,u=e("./mouse_event").MouseEvent,a=e("./dragdrop_handler").DragdropHandler,f=e("./touch_handler").addTouchListeners,l=e("../config"),c=function(e){var t=this;this.editor=e,new s(this),new o(this),new a(this);var n=function(t){var n=!document.hasFocus||!document.hasFocus()||!e.isFocused()&&document.activeElement==(e.textInput&&e.textInput.getElement());n&&window.focus(),e.focus(),setTimeout(function(){e.isFocused()||e.focus()})},u=e.renderer.getMouseEventTarget();r.addListener(u,"click",this.onMouseEvent.bind(this,"click"),e),r.addListener(u,"mousemove",this.onMouseMove.bind(this,"mousemove"),e),r.addMultiMouseDownListener([u,e.renderer.scrollBarV&&e.renderer.scrollBarV.inner,e.renderer.scrollBarH&&e.renderer.scrollBarH.inner,e.textInput&&e.textInput.getElement()].filter(Boolean),[400,300,250],this,"onMouseEvent",e),r.addMouseWheelListener(e.container,this.onMouseWheel.bind(this,"mousewheel"),e),f(e.container,e);var l=e.renderer.$gutter;r.addListener(l,"mousedown",this.onMouseEvent.bind(this,"guttermousedown"),e),r.addListener(l,"click",this.onMouseEvent.bind(this,"gutterclick"),e),r.addListener(l,"dblclick",this.onMouseEvent.bind(this,"gutterdblclick"),e),r.addListener(l,"mousemove",this.onMouseEvent.bind(this,"guttermousemove"),e),r.addListener(u,"mousedown",n,e),r.addListener(l,"mousedown",n,e),i.isIE&&e.renderer.scrollBarV&&(r.addListener(e.renderer.scrollBarV.element,"mousedown",n,e),r.addListener(e.renderer.scrollBarH.element,"mousedown",n,e)),e.on("mousemove",function(n){if(t.state||t.$dragDelay||!t.$dragEnabled)return;var r=e.renderer.screenToTextCoordinates(n.x,n.y),i=e.session.selection.getRange(),s=e.renderer;!i.isEmpty()&&i.insideStart(r.row,r.column)?s.setCursorStyle("default"):s.setCursorStyle("")},e)};(function(){this.onMouseEvent=function(e,t){if(!this.editor.session)return;this.editor._emit(e,new u(t,this.editor))},this.onMouseMove=function(e,t){var n=this.editor._eventRegistry&&this.editor._eventRegistry.mousemove;if(!n||!n.length)return;this.editor._emit(e,new u(t,this.editor))},this.onMouseWheel=function(e,t){var n=new u(t,this.editor);n.speed=this.$scrollSpeed*2,n.wheelX=t.wheelX,n.wheelY=t.wheelY,this.editor._emit(e,n)},this.setState=function(e){this.state=e},this.captureMouse=function(e,t){this.x=e.x,this.y=e.y,this.isMousePressed=!0;var n=this.editor,s=this.editor.renderer;s.$isMousePressed=!0;var o=this,a=function(e){if(!e)return;if(i.isWebKit&&!e.which&&o.releaseMouse)return o.releaseMouse();o.x=e.clientX,o.y=e.clientY,t&&t(e),o.mouseEvent=new u(e,o.editor),o.$mouseMoved=!0},f=function(e){n.off("beforeEndOperation",c),clearInterval(h),n.session&&l(),o[o.state+"End"]&&o[o.state+"End"](e),o.state="",o.isMousePressed=s.$isMousePressed=!1,s.$keepTextAreaAtCursor&&s.$moveTextAreaToCursor(),o.$onCaptureMouseMove=o.releaseMouse=null,e&&o.onMouseEvent("mouseup",e),n.endOperation()},l=function(){o[o.state]&&o[o.state](),o.$mouseMoved=!1};if(i.isOldIE&&e.domEvent.type=="dblclick")return setTimeout(function(){f(e)});var c=function(e){if(!o.releaseMouse)return;n.curOp.command.name&&n.curOp.selectionChanged&&(o[o.state+"End"]&&o[o.state+"End"](),o.state="",o.releaseMouse())};n.on("beforeEndOperation",c),n.startOperation({command:{name:"mouse"}}),o.$onCaptureMouseMove=a,o.releaseMouse=r.capture(this.editor.container,a,f);var h=setInterval(l,20)},this.releaseMouse=null,this.cancelContextMenu=function(){var e=function(t){if(t&&t.domEvent&&t.domEvent.type!="contextmenu")return;this.editor.off("nativecontextmenu",e),t&&t.domEvent&&r.stopEvent(t.domEvent)}.bind(this);setTimeout(e,10),this.editor.on("nativecontextmenu",e)},this.destroy=function(){this.releaseMouse&&this.releaseMouse()}}).call(c.prototype),l.defineOptions(c.prototype,"mouseHandler",{scrollSpeed:{initialValue:2},dragDelay:{initialValue:i.isMac?150:0},dragEnabled:{initialValue:!0},focusTimeout:{initialValue:0},tooltipFollowsMouse:{initialValue:!0}}),t.MouseHandler=c}),ace.define("ace/mouse/fold_handler",["require","exports","module","ace/lib/dom"],function(e,t,n){"use strict";function i(e){e.on("click",function(t){var n=t.getDocumentPosition(),i=e.session,s=i.getFoldAt(n.row,n.column,1);s&&(t.getAccelKey()?i.removeFold(s):i.expandFold(s),t.stop());var o=t.domEvent&&t.domEvent.target;o&&r.hasCssClass(o,"ace_inline_button")&&r.hasCssClass(o,"ace_toggle_wrap")&&(i.setOption("wrap",!i.getUseWrapMode()),e.renderer.scrollCursorIntoView())}),e.on("gutterclick",function(t){var n=e.renderer.$gutterLayer.getRegion(t);if(n=="foldWidgets"){var r=t.getDocumentPosition().row,i=e.session;i.foldWidgets&&i.foldWidgets[r]&&e.session.onFoldWidgetClick(r,t),e.isFocused()||e.focus(),t.stop()}}),e.on("gutterdblclick",function(t){var n=e.renderer.$gutterLayer.getRegion(t);if(n=="foldWidgets"){var r=t.getDocumentPosition().row,i=e.session,s=i.getParentFoldRangeData(r,!0),o=s.range||s.firstRange;if(o){r=o.start.row;var u=i.getFoldAt(r,i.getLine(r).length,1);u?i.removeFold(u):(i.addFold("...",o),e.renderer.scrollCursorIntoView({row:o.start.row,column:0}))}t.stop()}})}var r=e("../lib/dom");t.FoldHandler=i}),ace.define("ace/keyboard/keybinding",["require","exports","module","ace/lib/keys","ace/lib/event"],function(e,t,n){"use strict";var r=e("../lib/keys"),i=e("../lib/event"),s=function(e){this.$editor=e,this.$data={editor:e},this.$handlers=[],this.setDefaultHandler(e.commands)};(function(){this.setDefaultHandler=function(e){this.removeKeyboardHandler(this.$defaultHandler),this.$defaultHandler=e,this.addKeyboardHandler(e,0)},this.setKeyboardHandler=function(e){var t=this.$handlers;if(t[t.length-1]==e)return;while(t[t.length-1]&&t[t.length-1]!=this.$defaultHandler)this.removeKeyboardHandler(t[t.length-1]);this.addKeyboardHandler(e,1)},this.addKeyboardHandler=function(e,t){if(!e)return;typeof e=="function"&&!e.handleKeyboard&&(e.handleKeyboard=e);var n=this.$handlers.indexOf(e);n!=-1&&this.$handlers.splice(n,1),t==undefined?this.$handlers.push(e):this.$handlers.splice(t,0,e),n==-1&&e.attach&&e.attach(this.$editor)},this.removeKeyboardHandler=function(e){var t=this.$handlers.indexOf(e);return t==-1?!1:(this.$handlers.splice(t,1),e.detach&&e.detach(this.$editor),!0)},this.getKeyboardHandler=function(){return this.$handlers[this.$handlers.length-1]},this.getStatusText=function(){var e=this.$data,t=e.editor;return this.$handlers.map(function(n){return n.getStatusText&&n.getStatusText(t,e)||""}).filter(Boolean).join(" ")},this.$callKeyboardHandlers=function(e,t,n,r){var s,o=!1,u=this.$editor.commands;for(var a=this.$handlers.length;a--;){s=this.$handlers[a].handleKeyboard(this.$data,e,t,n,r);if(!s||!s.command)continue;s.command=="null"?o=!0:o=u.exec(s.command,this.$editor,s.args,r),o&&r&&e!=-1&&s.passEvent!=1&&s.command.passEvent!=1&&i.stopEvent(r);if(o)break}return!o&&e==-1&&(s={command:"insertstring"},o=u.exec("insertstring",this.$editor,t)),o&&this.$editor._signal&&this.$editor._signal("keyboardActivity",s),o},this.onCommandKey=function(e,t,n){var i=r.keyCodeToString(n);return this.$callKeyboardHandlers(t,i,n,e)},this.onTextInput=function(e){return this.$callKeyboardHandlers(-1,e)}}).call(s.prototype),t.KeyBinding=s}),ace.define("ace/lib/bidiutil",["require","exports","module"],function(e,t,n){"use strict";function F(e,t,n,r){var i=s?d:p,c=null,h=null,v=null,m=0,g=null,y=null,b=-1,w=null,E=null,T=[];if(!r)for(w=0,r=[];w<n;w++)r[w]=R(e[w]);o=s,u=!1,a=!1,f=!1,l=!1;for(E=0;E<n;E++){c=m,T[E]=h=q(e,r,T,E),m=i[c][h],g=m&240,m&=15,t[E]=v=i[m][5];if(g>0)if(g==16){for(w=b;w<E;w++)t[w]=1;b=-1}else b=-1;y=i[m][6];if(y)b==-1&&(b=E);else if(b>-1){for(w=b;w<E;w++)t[w]=v;b=-1}r[E]==S&&(t[E]=0),o|=v}if(l)for(w=0;w<n;w++)if(r[w]==x){t[w]=s;for(var C=w-1;C>=0;C--){if(r[C]!=N)break;t[C]=s}}}function I(e,t,n){if(o<e)return;if(e==1&&s==m&&!f){n.reverse();return}var r=n.length,i=0,u,a,l,c;while(i<r){if(t[i]>=e){u=i+1;while(u<r&&t[u]>=e)u++;for(a=i,l=u-1;a<l;a++,l--)c=n[a],n[a]=n[l],n[l]=c;i=u}i++}}function q(e,t,n,r){var i=t[r],o,c,h,p;switch(i){case g:case y:u=!1;case E:case w:return i;case b:return u?w:b;case T:return u=!0,a=!0,y;case N:return E;case C:if(r<1||r+1>=t.length||(o=n[r-1])!=b&&o!=w||(c=t[r+1])!=b&&c!=w)return E;return u&&(c=w),c==o?c:E;case k:o=r>0?n[r-1]:S;if(o==b&&r+1<t.length&&t[r+1]==b)return b;return E;case L:if(r>0&&n[r-1]==b)return b;if(u)return E;p=r+1,h=t.length;while(p<h&&t[p]==L)p++;if(p<h&&t[p]==b)return b;return E;case A:h=t.length,p=r+1;while(p<h&&t[p]==A)p++;if(p<h){var d=e[r],v=d>=1425&&d<=2303||d==64286;o=t[p];if(v&&(o==y||o==T))return y}if(r<1||(o=t[r-1])==S)return E;return n[r-1];case S:return u=!1,f=!0,s;case x:return l=!0,E;case O:case M:case D:case P:case _:u=!1;case H:return E}}function R(e){var t=e.charCodeAt(0),n=t>>8;return n==0?t>191?g:B[t]:n==5?/[\u0591-\u05f4]/.test(e)?y:g:n==6?/[\u0610-\u061a\u064b-\u065f\u06d6-\u06e4\u06e7-\u06ed]/.test(e)?A:/[\u0660-\u0669\u066b-\u066c]/.test(e)?w:t==1642?L:/[\u06f0-\u06f9]/.test(e)?b:T:n==32&&t<=8287?j[t&255]:n==254?t>=65136?T:E:E}function U(e){return e>="\u064b"&&e<="\u0655"}var r=["\u0621","\u0641"],i=["\u063a","\u064a"],s=0,o=0,u=!1,a=!1,f=!1,l=!1,c=!1,h=!1,p=[[0,3,0,1,0,0,0],[0,3,0,1,2,2,0],[0,3,0,17,2,0,1],[0,3,5,5,4,1,0],[0,3,21,21,4,0,1],[0,3,5,5,4,2,0]],d=[[2,0,1,1,0,1,0],[2,0,1,1,0,2,0],[2,0,2,1,3,2,0],[2,0,2,33,3,1,1]],v=0,m=1,g=0,y=1,b=2,w=3,E=4,S=5,x=6,T=7,N=8,C=9,k=10,L=11,A=12,O=13,M=14,_=15,D=16,P=17,H=18,B=[H,H,H,H,H,H,H,H,H,x,S,x,N,S,H,H,H,H,H,H,H,H,H,H,H,H,H,H,S,S,S,x,N,E,E,L,L,L,E,E,E,E,E,k,C,k,C,C,b,b,b,b,b,b,b,b,b,b,C,E,E,E,E,E,E,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,E,E,E,E,E,E,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,E,E,E,E,H,H,H,H,H,H,S,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,C,E,L,L,L,L,E,E,E,E,g,E,E,H,E,E,L,L,b,b,E,g,E,E,E,b,g,E,E,E,E,E],j=[N,N,N,N,N,N,N,N,N,N,N,H,H,H,g,y,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,N,S,O,M,_,D,P,C,L,L,L,L,L,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,C,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,N];t.L=g,t.R=y,t.EN=b,t.ON_R=3,t.AN=4,t.R_H=5,t.B=6,t.RLE=7,t.DOT="\u00b7",t.doBidiReorder=function(e,n,r){if(e.length<2)return{};var i=e.split(""),o=new Array(i.length),u=new Array(i.length),a=[];s=r?m:v,F(i,a,i.length,n);for(var f=0;f<o.length;o[f]=f,f++);I(2,a,o),I(1,a,o);for(var f=0;f<o.length-1;f++)n[f]===w?a[f]=t.AN:a[f]===y&&(n[f]>T&&n[f]<O||n[f]===E||n[f]===H)?a[f]=t.ON_R:f>0&&i[f-1]==="\u0644"&&/\u0622|\u0623|\u0625|\u0627/.test(i[f])&&(a[f-1]=a[f]=t.R_H,f++);i[i.length-1]===t.DOT&&(a[i.length-1]=t.B),i[0]==="\u202b"&&(a[0]=t.RLE);for(var f=0;f<o.length;f++)u[f]=a[o[f]];return{logicalFromVisual:o,bidiLevels:u}},t.hasBidiCharacters=function(e,t){var n=!1;for(var r=0;r<e.length;r++)t[r]=R(e.charAt(r)),!n&&(t[r]==y||t[r]==T||t[r]==w)&&(n=!0);return n},t.getVisualFromLogicalIdx=function(e,t){for(var n=0;n<t.logicalFromVisual.length;n++)if(t.logicalFromVisual[n]==e)return n;return 0}}),ace.define("ace/bidihandler",["require","exports","module","ace/lib/bidiutil","ace/lib/lang"],function(e,t,n){"use strict";var r=e("./lib/bidiutil"),i=e("./lib/lang"),s=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\u202B]/,o=function(e){this.session=e,this.bidiMap={},this.currentRow=null,this.bidiUtil=r,this.charWidths=[],this.EOL="\u00ac",this.showInvisibles=!0,this.isRtlDir=!1,this.$isRtl=!1,this.line="",this.wrapIndent=0,this.EOF="\u00b6",this.RLE="\u202b",this.contentWidth=0,this.fontMetrics=null,this.rtlLineOffset=0,this.wrapOffset=0,this.isMoveLeftOperation=!1,this.seenBidi=s.test(e.getValue())};(function(){this.isBidiRow=function(e,t,n){return this.seenBidi?(e!==this.currentRow&&(this.currentRow=e,this.updateRowLine(t,n),this.updateBidiMap()),this.bidiMap.bidiLevels):!1},this.onChange=function(e){this.seenBidi?this.currentRow=null:e.action=="insert"&&s.test(e.lines.join("\n"))&&(this.seenBidi=!0,this.currentRow=null)},this.getDocumentRow=function(){var e=0,t=this.session.$screenRowCache;if(t.length){var n=this.session.$getRowCacheIndex(t,this.currentRow);n>=0&&(e=this.session.$docRowCache[n])}return e},this.getSplitIndex=function(){var e=0,t=this.session.$screenRowCache;if(t.length){var n,r=this.session.$getRowCacheIndex(t,this.currentRow);while(this.currentRow-e>0){n=this.session.$getRowCacheIndex(t,this.currentRow-e-1);if(n!==r)break;r=n,e++}}else e=this.currentRow;return e},this.updateRowLine=function(e,t){e===undefined&&(e=this.getDocumentRow());var n=e===this.session.getLength()-1,s=n?this.EOF:this.EOL;this.wrapIndent=0,this.line=this.session.getLine(e),this.isRtlDir=this.$isRtl||this.line.charAt(0)===this.RLE;if(this.session.$useWrapMode){var o=this.session.$wrapData[e];o&&(t===undefined&&(t=this.getSplitIndex()),t>0&&o.length?(this.wrapIndent=o.indent,this.wrapOffset=this.wrapIndent*this.charWidths[r.L],this.line=t<o.length?this.line.substring(o[t-1],o[t]):this.line.substring(o[o.length-1])):this.line=this.line.substring(0,o[t]),t==o.length&&(this.line+=this.showInvisibles?s:r.DOT))}else this.line+=this.showInvisibles?s:r.DOT;var u=this.session,a=0,f;this.line=this.line.replace(/\t|[\u1100-\u2029, \u202F-\uFFE6]/g,function(e,t){return e==="	"||u.isFullWidth(e.charCodeAt(0))?(f=e==="	"?u.getScreenTabSize(t+a):2,a+=f-1,i.stringRepeat(r.DOT,f)):e}),this.isRtlDir&&(this.fontMetrics.$main.textContent=this.line.charAt(this.line.length-1)==r.DOT?this.line.substr(0,this.line.length-1):this.line,this.rtlLineOffset=this.contentWidth-this.fontMetrics.$main.getBoundingClientRect().width)},this.updateBidiMap=function(){var e=[];r.hasBidiCharacters(this.line,e)||this.isRtlDir?this.bidiMap=r.doBidiReorder(this.line,e,this.isRtlDir):this.bidiMap={}},this.markAsDirty=function(){this.currentRow=null},this.updateCharacterWidths=function(e){if(this.characterWidth===e.$characterSize.width)return;this.fontMetrics=e;var t=this.characterWidth=e.$characterSize.width,n=e.$measureCharWidth("\u05d4");this.charWidths[r.L]=this.charWidths[r.EN]=this.charWidths[r.ON_R]=t,this.charWidths[r.R]=this.charWidths[r.AN]=n,this.charWidths[r.R_H]=n*.45,this.charWidths[r.B]=this.charWidths[r.RLE]=0,this.currentRow=null},this.setShowInvisibles=function(e){this.showInvisibles=e,this.currentRow=null},this.setEolChar=function(e){this.EOL=e},this.setContentWidth=function(e){this.contentWidth=e},this.isRtlLine=function(e){return this.$isRtl?!0:e!=undefined?this.session.getLine(e).charAt(0)==this.RLE:this.isRtlDir},this.setRtlDirection=function(e,t){var n=e.getCursorPosition();for(var r=e.selection.getSelectionAnchor().row;r<=n.row;r++)!t&&e.session.getLine(r).charAt(0)===e.session.$bidiHandler.RLE?e.session.doc.removeInLine(r,0,1):t&&e.session.getLine(r).charAt(0)!==e.session.$bidiHandler.RLE&&e.session.doc.insert({column:0,row:r},e.session.$bidiHandler.RLE)},this.getPosLeft=function(e){e-=this.wrapIndent;var t=this.line.charAt(0)===this.RLE?1:0,n=e>t?this.session.getOverwrite()?e:e-1:t,i=r.getVisualFromLogicalIdx(n,this.bidiMap),s=this.bidiMap.bidiLevels,o=0;!this.session.getOverwrite()&&e<=t&&s[i]%2!==0&&i++;for(var u=0;u<i;u++)o+=this.charWidths[s[u]];return!this.session.getOverwrite()&&e>t&&s[i]%2===0&&(o+=this.charWidths[s[i]]),this.wrapIndent&&(o+=this.isRtlDir?-1*this.wrapOffset:this.wrapOffset),this.isRtlDir&&(o+=this.rtlLineOffset),o},this.getSelections=function(e,t){var n=this.bidiMap,r=n.bidiLevels,i,s=[],o=0,u=Math.min(e,t)-this.wrapIndent,a=Math.max(e,t)-this.wrapIndent,f=!1,l=!1,c=0;this.wrapIndent&&(o+=this.isRtlDir?-1*this.wrapOffset:this.wrapOffset);for(var h,p=0;p<r.length;p++)h=n.logicalFromVisual[p],i=r[p],f=h>=u&&h<a,f&&!l?c=o:!f&&l&&s.push({left:c,width:o-c}),o+=this.charWidths[i],l=f;f&&p===r.length&&s.push({left:c,width:o-c});if(this.isRtlDir)for(var d=0;d<s.length;d++)s[d].left+=this.rtlLineOffset;return s},this.offsetToCol=function(e){this.isRtlDir&&(e-=this.rtlLineOffset);var t=0,e=Math.max(e,0),n=0,r=0,i=this.bidiMap.bidiLevels,s=this.charWidths[i[r]];this.wrapIndent&&(e-=this.isRtlDir?-1*this.wrapOffset:this.wrapOffset);while(e>n+s/2){n+=s;if(r===i.length-1){s=0;break}s=this.charWidths[i[++r]]}return r>0&&i[r-1]%2!==0&&i[r]%2===0?(e<n&&r--,t=this.bidiMap.logicalFromVisual[r]):r>0&&i[r-1]%2===0&&i[r]%2!==0?t=1+(e>n?this.bidiMap.logicalFromVisual[r]:this.bidiMap.logicalFromVisual[r-1]):this.isRtlDir&&r===i.length-1&&s===0&&i[r-1]%2===0||!this.isRtlDir&&r===0&&i[r]%2!==0?t=1+this.bidiMap.logicalFromVisual[r]:(r>0&&i[r-1]%2!==0&&s!==0&&r--,t=this.bidiMap.logicalFromVisual[r]),t===0&&this.isRtlDir&&t++,t+this.wrapIndent}}).call(o.prototype),t.BidiHandler=o}),ace.define("ace/selection",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/lib/event_emitter","ace/range"],function(e,t,n){"use strict";var r=e("./lib/oop"),i=e("./lib/lang"),s=e("./lib/event_emitter").EventEmitter,o=e("./range").Range,u=function(e){this.session=e,this.doc=e.getDocument(),this.clearSelection(),this.cursor=this.lead=this.doc.createAnchor(0,0),this.anchor=this.doc.createAnchor(0,0),this.$silent=!1;var t=this;this.cursor.on("change",function(e){t.$cursorChanged=!0,t.$silent||t._emit("changeCursor"),!t.$isEmpty&&!t.$silent&&t._emit("changeSelection"),!t.$keepDesiredColumnOnChange&&e.old.column!=e.value.column&&(t.$desiredColumn=null)}),this.anchor.on("change",function(){t.$anchorChanged=!0,!t.$isEmpty&&!t.$silent&&t._emit("changeSelection")})};(function(){r.implement(this,s),this.isEmpty=function(){return this.$isEmpty||this.anchor.row==this.lead.row&&this.anchor.column==this.lead.column},this.isMultiLine=function(){return!this.$isEmpty&&this.anchor.row!=this.cursor.row},this.getCursor=function(){return this.lead.getPosition()},this.setSelectionAnchor=function(e,t){this.$isEmpty=!1,this.anchor.setPosition(e,t)},this.getAnchor=this.getSelectionAnchor=function(){return this.$isEmpty?this.getSelectionLead():this.anchor.getPosition()},this.getSelectionLead=function(){return this.lead.getPosition()},this.isBackwards=function(){var e=this.anchor,t=this.lead;return e.row>t.row||e.row==t.row&&e.column>t.column},this.getRange=function(){var e=this.anchor,t=this.lead;return this.$isEmpty?o.fromPoints(t,t):this.isBackwards()?o.fromPoints(t,e):o.fromPoints(e,t)},this.clearSelection=function(){this.$isEmpty||(this.$isEmpty=!0,this._emit("changeSelection"))},this.selectAll=function(){this.$setSelection(0,0,Number.MAX_VALUE,Number.MAX_VALUE)},this.setRange=this.setSelectionRange=function(e,t){var n=t?e.end:e.start,r=t?e.start:e.end;this.$setSelection(n.row,n.column,r.row,r.column)},this.$setSelection=function(e,t,n,r){if(this.$silent)return;var i=this.$isEmpty,s=this.inMultiSelectMode;this.$silent=!0,this.$cursorChanged=this.$anchorChanged=!1,this.anchor.setPosition(e,t),this.cursor.setPosition(n,r),this.$isEmpty=!o.comparePoints(this.anchor,this.cursor),this.$silent=!1,this.$cursorChanged&&this._emit("changeCursor"),(this.$cursorChanged||this.$anchorChanged||i!=this.$isEmpty||s)&&this._emit("changeSelection")},this.$moveSelection=function(e){var t=this.lead;this.$isEmpty&&this.setSelectionAnchor(t.row,t.column),e.call(this)},this.selectTo=function(e,t){this.$moveSelection(function(){this.moveCursorTo(e,t)})},this.selectToPosition=function(e){this.$moveSelection(function(){this.moveCursorToPosition(e)})},this.moveTo=function(e,t){this.clearSelection(),this.moveCursorTo(e,t)},this.moveToPosition=function(e){this.clearSelection(),this.moveCursorToPosition(e)},this.selectUp=function(){this.$moveSelection(this.moveCursorUp)},this.selectDown=function(){this.$moveSelection(this.moveCursorDown)},this.selectRight=function(){this.$moveSelection(this.moveCursorRight)},this.selectLeft=function(){this.$moveSelection(this.moveCursorLeft)},this.selectLineStart=function(){this.$moveSelection(this.moveCursorLineStart)},this.selectLineEnd=function(){this.$moveSelection(this.moveCursorLineEnd)},this.selectFileEnd=function(){this.$moveSelection(this.moveCursorFileEnd)},this.selectFileStart=function(){this.$moveSelection(this.moveCursorFileStart)},this.selectWordRight=function(){this.$moveSelection(this.moveCursorWordRight)},this.selectWordLeft=function(){this.$moveSelection(this.moveCursorWordLeft)},this.getWordRange=function(e,t){if(typeof t=="undefined"){var n=e||this.lead;e=n.row,t=n.column}return this.session.getWordRange(e,t)},this.selectWord=function(){this.setSelectionRange(this.getWordRange())},this.selectAWord=function(){var e=this.getCursor(),t=this.session.getAWordRange(e.row,e.column);this.setSelectionRange(t)},this.getLineRange=function(e,t){var n=typeof e=="number"?e:this.lead.row,r,i=this.session.getFoldLine(n);return i?(n=i.start.row,r=i.end.row):r=n,t===!0?new o(n,0,r,this.session.getLine(r).length):new o(n,0,r+1,0)},this.selectLine=function(){this.setSelectionRange(this.getLineRange())},this.moveCursorUp=function(){this.moveCursorBy(-1,0)},this.moveCursorDown=function(){this.moveCursorBy(1,0)},this.wouldMoveIntoSoftTab=function(e,t,n){var r=e.column,i=e.column+t;return n<0&&(r=e.column-t,i=e.column),this.session.isTabStop(e)&&this.doc.getLine(e.row).slice(r,i).split(" ").length-1==t},this.moveCursorLeft=function(){var e=this.lead.getPosition(),t;if(t=this.session.getFoldAt(e.row,e.column,-1))this.moveCursorTo(t.start.row,t.start.column);else if(e.column===0)e.row>0&&this.moveCursorTo(e.row-1,this.doc.getLine(e.row-1).length);else{var n=this.session.getTabSize();this.wouldMoveIntoSoftTab(e,n,-1)&&!this.session.getNavigateWithinSoftTabs()?this.moveCursorBy(0,-n):this.moveCursorBy(0,-1)}},this.moveCursorRight=function(){var e=this.lead.getPosition(),t;if(t=this.session.getFoldAt(e.row,e.column,1))this.moveCursorTo(t.end.row,t.end.column);else if(this.lead.column==this.doc.getLine(this.lead.row).length)this.lead.row<this.doc.getLength()-1&&this.moveCursorTo(this.lead.row+1,0);else{var n=this.session.getTabSize(),e=this.lead;this.wouldMoveIntoSoftTab(e,n,1)&&!this.session.getNavigateWithinSoftTabs()?this.moveCursorBy(0,n):this.moveCursorBy(0,1)}},this.moveCursorLineStart=function(){var e=this.lead.row,t=this.lead.column,n=this.session.documentToScreenRow(e,t),r=this.session.screenToDocumentPosition(n,0),i=this.session.getDisplayLine(e,null,r.row,r.column),s=i.match(/^\s*/);s[0].length!=t&&!this.session.$useEmacsStyleLineStart&&(r.column+=s[0].length),this.moveCursorToPosition(r)},this.moveCursorLineEnd=function(){var e=this.lead,t=this.session.getDocumentLastRowColumnPosition(e.row,e.column);if(this.lead.column==t.column){var n=this.session.getLine(t.row);if(t.column==n.length){var r=n.search(/\s+$/);r>0&&(t.column=r)}}this.moveCursorTo(t.row,t.column)},this.moveCursorFileEnd=function(){var e=this.doc.getLength()-1,t=this.doc.getLine(e).length;this.moveCursorTo(e,t)},this.moveCursorFileStart=function(){this.moveCursorTo(0,0)},this.moveCursorLongWordRight=function(){var e=this.lead.row,t=this.lead.column,n=this.doc.getLine(e),r=n.substring(t);this.session.nonTokenRe.lastIndex=0,this.session.tokenRe.lastIndex=0;var i=this.session.getFoldAt(e,t,1);if(i){this.moveCursorTo(i.end.row,i.end.column);return}this.session.nonTokenRe.exec(r)&&(t+=this.session.nonTokenRe.lastIndex,this.session.nonTokenRe.lastIndex=0,r=n.substring(t));if(t>=n.length){this.moveCursorTo(e,n.length),this.moveCursorRight(),e<this.doc.getLength()-1&&this.moveCursorWordRight();return}this.session.tokenRe.exec(r)&&(t+=this.session.tokenRe.lastIndex,this.session.tokenRe.lastIndex=0),this.moveCursorTo(e,t)},this.moveCursorLongWordLeft=function(){var e=this.lead.row,t=this.lead.column,n;if(n=this.session.getFoldAt(e,t,-1)){this.moveCursorTo(n.start.row,n.start.column);return}var r=this.session.getFoldStringAt(e,t,-1);r==null&&(r=this.doc.getLine(e).substring(0,t));var s=i.stringReverse(r);this.session.nonTokenRe.lastIndex=0,this.session.tokenRe.lastIndex=0,this.session.nonTokenRe.exec(s)&&(t-=this.session.nonTokenRe.lastIndex,s=s.slice(this.session.nonTokenRe.lastIndex),this.session.nonTokenRe.lastIndex=0);if(t<=0){this.moveCursorTo(e,0),this.moveCursorLeft(),e>0&&this.moveCursorWordLeft();return}this.session.tokenRe.exec(s)&&(t-=this.session.tokenRe.lastIndex,this.session.tokenRe.lastIndex=0),this.moveCursorTo(e,t)},this.$shortWordEndIndex=function(e){var t=0,n,r=/\s/,i=this.session.tokenRe;i.lastIndex=0;if(this.session.tokenRe.exec(e))t=this.session.tokenRe.lastIndex;else{while((n=e[t])&&r.test(n))t++;if(t<1){i.lastIndex=0;while((n=e[t])&&!i.test(n)){i.lastIndex=0,t++;if(r.test(n)){if(t>2){t--;break}while((n=e[t])&&r.test(n))t++;if(t>2)break}}}}return i.lastIndex=0,t},this.moveCursorShortWordRight=function(){var e=this.lead.row,t=this.lead.column,n=this.doc.getLine(e),r=n.substring(t),i=this.session.getFoldAt(e,t,1);if(i)return this.moveCursorTo(i.end.row,i.end.column);if(t==n.length){var s=this.doc.getLength();do e++,r=this.doc.getLine(e);while(e<s&&/^\s*$/.test(r));/^\s+/.test(r)||(r=""),t=0}var o=this.$shortWordEndIndex(r);this.moveCursorTo(e,t+o)},this.moveCursorShortWordLeft=function(){var e=this.lead.row,t=this.lead.column,n;if(n=this.session.getFoldAt(e,t,-1))return this.moveCursorTo(n.start.row,n.start.column);var r=this.session.getLine(e).substring(0,t);if(t===0){do e--,r=this.doc.getLine(e);while(e>0&&/^\s*$/.test(r));t=r.length,/\s+$/.test(r)||(r="")}var s=i.stringReverse(r),o=this.$shortWordEndIndex(s);return this.moveCursorTo(e,t-o)},this.moveCursorWordRight=function(){this.session.$selectLongWords?this.moveCursorLongWordRight():this.moveCursorShortWordRight()},this.moveCursorWordLeft=function(){this.session.$selectLongWords?this.moveCursorLongWordLeft():this.moveCursorShortWordLeft()},this.moveCursorBy=function(e,t){var n=this.session.documentToScreenPosition(this.lead.row,this.lead.column),r;t===0&&(e!==0&&(this.session.$bidiHandler.isBidiRow(n.row,this.lead.row)?(r=this.session.$bidiHandler.getPosLeft(n.column),n.column=Math.round(r/this.session.$bidiHandler.charWidths[0])):r=n.column*this.session.$bidiHandler.charWidths[0]),this.$desiredColumn?n.column=this.$desiredColumn:this.$desiredColumn=n.column);if(e!=0&&this.session.lineWidgets&&this.session.lineWidgets[this.lead.row]){var i=this.session.lineWidgets[this.lead.row];e<0?e-=i.rowsAbove||0:e>0&&(e+=i.rowCount-(i.rowsAbove||0))}var s=this.session.screenToDocumentPosition(n.row+e,n.column,r);e!==0&&t===0&&s.row===this.lead.row&&s.column===this.lead.column,this.moveCursorTo(s.row,s.column+t,t===0)},this.moveCursorToPosition=function(e){this.moveCursorTo(e.row,e.column)},this.moveCursorTo=function(e,t,n){var r=this.session.getFoldAt(e,t,1);r&&(e=r.start.row,t=r.start.column),this.$keepDesiredColumnOnChange=!0;var i=this.session.getLine(e);/[\uDC00-\uDFFF]/.test(i.charAt(t))&&i.charAt(t-1)&&(this.lead.row==e&&this.lead.column==t+1?t-=1:t+=1),this.lead.setPosition(e,t),this.$keepDesiredColumnOnChange=!1,n||(this.$desiredColumn=null)},this.moveCursorToScreen=function(e,t,n){var r=this.session.screenToDocumentPosition(e,t);this.moveCursorTo(r.row,r.column,n)},this.detach=function(){this.lead.detach(),this.anchor.detach()},this.fromOrientedRange=function(e){this.setSelectionRange(e,e.cursor==e.start),this.$desiredColumn=e.desiredColumn||this.$desiredColumn},this.toOrientedRange=function(e){var t=this.getRange();return e?(e.start.column=t.start.column,e.start.row=t.start.row,e.end.column=t.end.column,e.end.row=t.end.row):e=t,e.cursor=this.isBackwards()?e.start:e.end,e.desiredColumn=this.$desiredColumn,e},this.getRangeOfMovements=function(e){var t=this.getCursor();try{e(this);var n=this.getCursor();return o.fromPoints(t,n)}catch(r){return o.fromPoints(t,t)}finally{this.moveCursorToPosition(t)}},this.toJSON=function(){if(this.rangeCount)var e=this.ranges.map(function(e){var t=e.clone();return t.isBackwards=e.cursor==e.start,t});else{var e=this.getRange();e.isBackwards=this.isBackwards()}return e},this.fromJSON=function(e){if(e.start==undefined){if(this.rangeList&&e.length>1){this.toSingleRange(e[0]);for(var t=e.length;t--;){var n=o.fromPoints(e[t].start,e[t].end);e[t].isBackwards&&(n.cursor=n.start),this.addRange(n,!0)}return}e=e[0]}this.rangeList&&this.toSingleRange(e),this.setSelectionRange(e,e.isBackwards)},this.isEqual=function(e){if((e.length||this.rangeCount)&&e.length!=this.rangeCount)return!1;if(!e.length||!this.ranges)return this.getRange().isEqual(e);for(var t=this.ranges.length;t--;)if(!this.ranges[t].isEqual(e[t]))return!1;return!0}}).call(u.prototype),t.Selection=u}),ace.define("ace/tokenizer",["require","exports","module","ace/config"],function(e,t,n){"use strict";var r=e("./config"),i=2e3,s=function(e){this.states=e,this.regExps={},this.matchMappings={};for(var t in this.states){var n=this.states[t],r=[],i=0,s=this.matchMappings[t]={defaultToken:"text"},o="g",u=[];for(var a=0;a<n.length;a++){var f=n[a];f.defaultToken&&(s.defaultToken=f.defaultToken),f.caseInsensitive&&o.indexOf("i")===-1&&(o+="i"),f.unicode&&o.indexOf("u")===-1&&(o+="u");if(f.regex==null)continue;f.regex instanceof RegExp&&(f.regex=f.regex.toString().slice(1,-1));var l=f.regex,c=(new RegExp("(?:("+l+")|(.))")).exec("a").length-2;Array.isArray(f.token)?f.token.length==1||c==1?f.token=f.token[0]:c-1!=f.token.length?(this.reportError("number of classes and regexp groups doesn't match",{rule:f,groupCount:c-1}),f.token=f.token[0]):(f.tokenArray=f.token,f.token=null,f.onMatch=this.$arrayTokens):typeof f.token=="function"&&!f.onMatch&&(c>1?f.onMatch=this.$applyToken:f.onMatch=f.token),c>1&&(/\\\d/.test(f.regex)?l=f.regex.replace(/\\([0-9]+)/g,function(e,t){return"\\"+(parseInt(t,10)+i+1)}):(c=1,l=this.removeCapturingGroups(f.regex)),!f.splitRegex&&typeof f.token!="string"&&u.push(f)),s[i]=a,i+=c,r.push(l),f.onMatch||(f.onMatch=null)}r.length||(s[0]=0,r.push("$")),u.forEach(function(e){e.splitRegex=this.createSplitterRegexp(e.regex,o)},this),this.regExps[t]=new RegExp("("+r.join(")|(")+")|($)",o)}};(function(){this.$setMaxTokenCount=function(e){i=e|0},this.$applyToken=function(e){var t=this.splitRegex.exec(e).slice(1),n=this.token.apply(this,t);if(typeof n=="string")return[{type:n,value:e}];var r=[];for(var i=0,s=n.length;i<s;i++)t[i]&&(r[r.length]={type:n[i],value:t[i]});return r},this.$arrayTokens=function(e){if(!e)return[];var t=this.splitRegex.exec(e);if(!t)return"text";var n=[],r=this.tokenArray;for(var i=0,s=r.length;i<s;i++)t[i+1]&&(n[n.length]={type:r[i],value:t[i+1]});return n},this.removeCapturingGroups=function(e){var t=e.replace(/\\.|\[(?:\\.|[^\\\]])*|\(\?[:=!<]|(\()/g,function(e,t){return t?"(?:":e});return t},this.createSplitterRegexp=function(e,t){if(e.indexOf("(?=")!=-1){var n=0,r=!1,i={};e.replace(/(\\.)|(\((?:\?[=!])?)|(\))|([\[\]])/g,function(e,t,s,o,u,a){return r?r=u!="]":u?r=!0:o?(n==i.stack&&(i.end=a+1,i.stack=-1),n--):s&&(n++,s.length!=1&&(i.stack=n,i.start=a)),e}),i.end!=null&&/^\)*$/.test(e.substr(i.end))&&(e=e.substring(0,i.start)+e.substr(i.end))}return e.charAt(0)!="^"&&(e="^"+e),e.charAt(e.length-1)!="$"&&(e+="$"),new RegExp(e,(t||"").replace("g",""))},this.getLineTokens=function(e,t){if(t&&typeof t!="string"){var n=t.slice(0);t=n[0],t==="#tmp"&&(n.shift(),t=n.shift())}else var n=[];var r=t||"start",s=this.states[r];s||(r="start",s=this.states[r]);var o=this.matchMappings[r],u=this.regExps[r];u.lastIndex=0;var a,f=[],l=0,c=0,h={type:null,value:""};while(a=u.exec(e)){var p=o.defaultToken,d=null,v=a[0],m=u.lastIndex;if(m-v.length>l){var g=e.substring(l,m-v.length);h.type==p?h.value+=g:(h.type&&f.push(h),h={type:p,value:g})}for(var y=0;y<a.length-2;y++){if(a[y+1]===undefined)continue;d=s[o[y]],d.onMatch?p=d.onMatch(v,r,n,e):p=d.token,d.next&&(typeof d.next=="string"?r=d.next:r=d.next(r,n),s=this.states[r],s||(this.reportError("state doesn't exist",r),r="start",s=this.states[r]),o=this.matchMappings[r],l=m,u=this.regExps[r],u.lastIndex=m),d.consumeLineEnd&&(l=m);break}if(v)if(typeof p=="string")!!d&&d.merge===!1||h.type!==p?(h.type&&f.push(h),h={type:p,value:v}):h.value+=v;else if(p){h.type&&f.push(h),h={type:null,value:""};for(var y=0;y<p.length;y++)f.push(p[y])}if(l==e.length)break;l=m;if(c++>i){c>2*e.length&&this.reportError("infinite loop with in ace tokenizer",{startState:t,line:e});while(l<e.length)h.type&&f.push(h),h={value:e.substring(l,l+=500),type:"overflow"};r="start",n=[];break}}return h.type&&f.push(h),n.length>1&&n[0]!==r&&n.unshift("#tmp",r),{tokens:f,state:n.length?n:r}},this.reportError=r.reportError}).call(s.prototype),t.Tokenizer=s}),ace.define("ace/mode/text_highlight_rules",["require","exports","module","ace/lib/lang"],function(e,t,n){"use strict";var r=e("../lib/lang"),i=function(){this.$rules={start:[{token:"empty_line",regex:"^$"},{defaultToken:"text"}]}};(function(){this.addRules=function(e,t){if(!t){for(var n in e)this.$rules[n]=e[n];return}for(var n in e){var r=e[n];for(var i=0;i<r.length;i++){var s=r[i];if(s.next||s.onMatch)typeof s.next=="string"&&s.next.indexOf(t)!==0&&(s.next=t+s.next),s.nextState&&s.nextState.indexOf(t)!==0&&(s.nextState=t+s.nextState)}this.$rules[t+n]=r}},this.getRules=function(){return this.$rules},this.embedRules=function(e,t,n,i,s){var o=typeof e=="function"?(new e).getRules():e;if(i)for(var u=0;u<i.length;u++)i[u]=t+i[u];else{i=[];for(var a in o)i.push(t+a)}this.addRules(o,t);if(n){var f=Array.prototype[s?"push":"unshift"];for(var u=0;u<i.length;u++)f.apply(this.$rules[i[u]],r.deepCopy(n))}this.$embeds||(this.$embeds=[]),this.$embeds.push(t)},this.getEmbeds=function(){return this.$embeds};var e=function(e,t){return(e!="start"||t.length)&&t.unshift(this.nextState,e),this.nextState},t=function(e,t){return t.shift(),t.shift()||"start"};this.normalizeRules=function(){function i(s){var o=r[s];o.processed=!0;for(var u=0;u<o.length;u++){var a=o[u],f=null;Array.isArray(a)&&(f=a,a={}),!a.regex&&a.start&&(a.regex=a.start,a.next||(a.next=[]),a.next.push({defaultToken:a.token},{token:a.token+".end",regex:a.end||a.start,next:"pop"}),a.token=a.token+".start",a.push=!0);var l=a.next||a.push;if(l&&Array.isArray(l)){var c=a.stateName;c||(c=a.token,typeof c!="string"&&(c=c[0]||""),r[c]&&(c+=n++)),r[c]=l,a.next=c,i(c)}else l=="pop"&&(a.next=t);a.push&&(a.nextState=a.next||a.push,a.next=e,delete a.push);if(a.rules)for(var h in a.rules)r[h]?r[h].push&&r[h].push.apply(r[h],a.rules[h]):r[h]=a.rules[h];var p=typeof a=="string"?a:a.include;p&&(Array.isArray(p)?f=p.map(function(e){return r[e]}):f=r[p]);if(f){var d=[u,1].concat(f);a.noEscape&&(d=d.filter(function(e){return!e.next})),o.splice.apply(o,d),u--}a.keywordMap&&(a.token=this.createKeywordMapper(a.keywordMap,a.defaultToken||"text",a.caseInsensitive),delete a.defaultToken)}}var n=0,r=this.$rules;Object.keys(r).forEach(i,this)},this.createKeywordMapper=function(e,t,n,r){var i=Object.create(null);return this.$keywordList=[],Object.keys(e).forEach(function(t){var s=e[t],o=s.split(r||"|");for(var u=o.length;u--;){var a=o[u];this.$keywordList.push(a),n&&(a=a.toLowerCase()),i[a]=t}},this),e=null,n?function(e){return i[e.toLowerCase()]||t}:function(e){return i[e]||t}},this.getKeywords=function(){return this.$keywords}}).call(i.prototype),t.TextHighlightRules=i}),ace.define("ace/mode/behaviour",["require","exports","module"],function(e,t,n){"use strict";var r=function(){this.$behaviours={}};(function(){this.add=function(e,t,n){switch(undefined){case this.$behaviours:this.$behaviours={};case this.$behaviours[e]:this.$behaviours[e]={}}this.$behaviours[e][t]=n},this.addBehaviours=function(e){for(var t in e)for(var n in e[t])this.add(t,n,e[t][n])},this.remove=function(e){this.$behaviours&&this.$behaviours[e]&&delete this.$behaviours[e]},this.inherit=function(e,t){if(typeof e=="function")var n=(new e).getBehaviours(t);else var n=e.getBehaviours(t);this.addBehaviours(n)},this.getBehaviours=function(e){if(!e)return this.$behaviours;var t={};for(var n=0;n<e.length;n++)this.$behaviours[e[n]]&&(t[e[n]]=this.$behaviours[e[n]]);return t}}).call(r.prototype),t.Behaviour=r}),ace.define("ace/token_iterator",["require","exports","module","ace/range"],function(e,t,n){"use strict";var r=e("./range").Range,i=function(e,t,n){this.$session=e,this.$row=t,this.$rowTokens=e.getTokens(t);var r=e.getTokenAt(t,n);this.$tokenIndex=r?r.index:-1};(function(){this.stepBackward=function(){this.$tokenIndex-=1;while(this.$tokenIndex<0){this.$row-=1;if(this.$row<0)return this.$row=0,null;this.$rowTokens=this.$session.getTokens(this.$row),this.$tokenIndex=this.$rowTokens.length-1}return this.$rowTokens[this.$tokenIndex]},this.stepForward=function(){this.$tokenIndex+=1;var e;while(this.$tokenIndex>=this.$rowTokens.length){this.$row+=1,e||(e=this.$session.getLength());if(this.$row>=e)return this.$row=e-1,null;this.$rowTokens=this.$session.getTokens(this.$row),this.$tokenIndex=0}return this.$rowTokens[this.$tokenIndex]},this.getCurrentToken=function(){return this.$rowTokens[this.$tokenIndex]},this.getCurrentTokenRow=function(){return this.$row},this.getCurrentTokenColumn=function(){var e=this.$rowTokens,t=this.$tokenIndex,n=e[t].start;if(n!==undefined)return n;n=0;while(t>0)t-=1,n+=e[t].value.length;return n},this.getCurrentTokenPosition=function(){return{row:this.$row,column:this.getCurrentTokenColumn()}},this.getCurrentTokenRange=function(){var e=this.$rowTokens[this.$tokenIndex],t=this.getCurrentTokenColumn();return new r(this.$row,t,this.$row,t+e.value.length)}}).call(i.prototype),t.TokenIterator=i}),ace.define("ace/mode/behaviour/cstyle",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/token_iterator","ace/lib/lang"],function(e,t,n){"use strict";var r=e("../../lib/oop"),i=e("../behaviour").Behaviour,s=e("../../token_iterator").TokenIterator,o=e("../../lib/lang"),u=["text","paren.rparen","rparen","paren","punctuation.operator"],a=["text","paren.rparen","rparen","paren","punctuation.operator","comment"],f,l={},c={'"':'"',"'":"'"},h=function(e){var t=-1;e.multiSelect&&(t=e.selection.index,l.rangeCount!=e.multiSelect.rangeCount&&(l={rangeCount:e.multiSelect.rangeCount}));if(l[t])return f=l[t];f=l[t]={autoInsertedBrackets:0,autoInsertedRow:-1,autoInsertedLineEnd:"",maybeInsertedBrackets:0,maybeInsertedRow:-1,maybeInsertedLineStart:"",maybeInsertedLineEnd:""}},p=function(e,t,n,r){var i=e.end.row-e.start.row;return{text:n+t+r,selection:[0,e.start.column+1,i,e.end.column+(i?0:1)]}},d=function(e){this.add("braces","insertion",function(t,n,r,i,s){var u=r.getCursorPosition(),a=i.doc.getLine(u.row);if(s=="{"){h(r);var l=r.getSelectionRange(),c=i.doc.getTextRange(l);if(c!==""&&c!=="{"&&r.getWrapBehavioursEnabled())return p(l,c,"{","}");if(d.isSaneInsertion(r,i))return/[\]\}\)]/.test(a[u.column])||r.inMultiSelectMode||e&&e.braces?(d.recordAutoInsert(r,i,"}"),{text:"{}",selection:[1,1]}):(d.recordMaybeInsert(r,i,"{"),{text:"{",selection:[1,1]})}else if(s=="}"){h(r);var v=a.substring(u.column,u.column+1);if(v=="}"){var m=i.$findOpeningBracket("}",{column:u.column+1,row:u.row});if(m!==null&&d.isAutoInsertedClosing(u,a,s))return d.popAutoInsertedClosing(),{text:"",selection:[1,1]}}}else{if(s=="\n"||s=="\r\n"){h(r);var g="";d.isMaybeInsertedClosing(u,a)&&(g=o.stringRepeat("}",f.maybeInsertedBrackets),d.clearMaybeInsertedClosing());var v=a.substring(u.column,u.column+1);if(v==="}"){var y=i.findMatchingBracket({row:u.row,column:u.column+1},"}");if(!y)return null;var b=this.$getIndent(i.getLine(y.row))}else{if(!g){d.clearMaybeInsertedClosing();return}var b=this.$getIndent(a)}var w=b+i.getTabString();return{text:"\n"+w+"\n"+b+g,selection:[1,w.length,1,w.length]}}d.clearMaybeInsertedClosing()}}),this.add("braces","deletion",function(e,t,n,r,i){var s=r.doc.getTextRange(i);if(!i.isMultiLine()&&s=="{"){h(n);var o=r.doc.getLine(i.start.row),u=o.substring(i.end.column,i.end.column+1);if(u=="}")return i.end.column++,i;f.maybeInsertedBrackets--}}),this.add("parens","insertion",function(e,t,n,r,i){if(i=="("){h(n);var s=n.getSelectionRange(),o=r.doc.getTextRange(s);if(o!==""&&n.getWrapBehavioursEnabled())return p(s,o,"(",")");if(d.isSaneInsertion(n,r))return d.recordAutoInsert(n,r,")"),{text:"()",selection:[1,1]}}else if(i==")"){h(n);var u=n.getCursorPosition(),a=r.doc.getLine(u.row),f=a.substring(u.column,u.column+1);if(f==")"){var l=r.$findOpeningBracket(")",{column:u.column+1,row:u.row});if(l!==null&&d.isAutoInsertedClosing(u,a,i))return d.popAutoInsertedClosing(),{text:"",selection:[1,1]}}}}),this.add("parens","deletion",function(e,t,n,r,i){var s=r.doc.getTextRange(i);if(!i.isMultiLine()&&s=="("){h(n);var o=r.doc.getLine(i.start.row),u=o.substring(i.start.column+1,i.start.column+2);if(u==")")return i.end.column++,i}}),this.add("brackets","insertion",function(e,t,n,r,i){if(i=="["){h(n);var s=n.getSelectionRange(),o=r.doc.getTextRange(s);if(o!==""&&n.getWrapBehavioursEnabled())return p(s,o,"[","]");if(d.isSaneInsertion(n,r))return d.recordAutoInsert(n,r,"]"),{text:"[]",selection:[1,1]}}else if(i=="]"){h(n);var u=n.getCursorPosition(),a=r.doc.getLine(u.row),f=a.substring(u.column,u.column+1);if(f=="]"){var l=r.$findOpeningBracket("]",{column:u.column+1,row:u.row});if(l!==null&&d.isAutoInsertedClosing(u,a,i))return d.popAutoInsertedClosing(),{text:"",selection:[1,1]}}}}),this.add("brackets","deletion",function(e,t,n,r,i){var s=r.doc.getTextRange(i);if(!i.isMultiLine()&&s=="["){h(n);var o=r.doc.getLine(i.start.row),u=o.substring(i.start.column+1,i.start.column+2);if(u=="]")return i.end.column++,i}}),this.add("string_dquotes","insertion",function(e,t,n,r,i){var s=r.$mode.$quotes||c;if(i.length==1&&s[i]){if(this.lineCommentStart&&this.lineCommentStart.indexOf(i)!=-1)return;h(n);var o=i,u=n.getSelectionRange(),a=r.doc.getTextRange(u);if(a!==""&&(a.length!=1||!s[a])&&n.getWrapBehavioursEnabled())return p(u,a,o,o);if(!a){var f=n.getCursorPosition(),l=r.doc.getLine(f.row),d=l.substring(f.column-1,f.column),v=l.substring(f.column,f.column+1),m=r.getTokenAt(f.row,f.column),g=r.getTokenAt(f.row,f.column+1);if(d=="\\"&&m&&/escape/.test(m.type))return null;var y=m&&/string|escape/.test(m.type),b=!g||/string|escape/.test(g.type),w;if(v==o)w=y!==b,w&&/string\.end/.test(g.type)&&(w=!1);else{if(y&&!b)return null;if(y&&b)return null;var E=r.$mode.tokenRe;E.lastIndex=0;var S=E.test(d);E.lastIndex=0;var x=E.test(d);if(S||x)return null;if(v&&!/[\s;,.})\]\\]/.test(v))return null;var T=l[f.column-2];if(!(d!=o||T!=o&&!E.test(T)))return null;w=!0}return{text:w?o+o:"",selection:[1,1]}}}}),this.add("string_dquotes","deletion",function(e,t,n,r,i){var s=r.$mode.$quotes||c,o=r.doc.getTextRange(i);if(!i.isMultiLine()&&s.hasOwnProperty(o)){h(n);var u=r.doc.getLine(i.start.row),a=u.substring(i.start.column+1,i.start.column+2);if(a==o)return i.end.column++,i}})};d.isSaneInsertion=function(e,t){var n=e.getCursorPosition(),r=new s(t,n.row,n.column);if(!this.$matchTokenType(r.getCurrentToken()||"text",u)){if(/[)}\]]/.test(e.session.getLine(n.row)[n.column]))return!0;var i=new s(t,n.row,n.column+1);if(!this.$matchTokenType(i.getCurrentToken()||"text",u))return!1}return r.stepForward(),r.getCurrentTokenRow()!==n.row||this.$matchTokenType(r.getCurrentToken()||"text",a)},d.$matchTokenType=function(e,t){return t.indexOf(e.type||e)>-1},d.recordAutoInsert=function(e,t,n){var r=e.getCursorPosition(),i=t.doc.getLine(r.row);this.isAutoInsertedClosing(r,i,f.autoInsertedLineEnd[0])||(f.autoInsertedBrackets=0),f.autoInsertedRow=r.row,f.autoInsertedLineEnd=n+i.substr(r.column),f.autoInsertedBrackets++},d.recordMaybeInsert=function(e,t,n){var r=e.getCursorPosition(),i=t.doc.getLine(r.row);this.isMaybeInsertedClosing(r,i)||(f.maybeInsertedBrackets=0),f.maybeInsertedRow=r.row,f.maybeInsertedLineStart=i.substr(0,r.column)+n,f.maybeInsertedLineEnd=i.substr(r.column),f.maybeInsertedBrackets++},d.isAutoInsertedClosing=function(e,t,n){return f.autoInsertedBrackets>0&&e.row===f.autoInsertedRow&&n===f.autoInsertedLineEnd[0]&&t.substr(e.column)===f.autoInsertedLineEnd},d.isMaybeInsertedClosing=function(e,t){return f.maybeInsertedBrackets>0&&e.row===f.maybeInsertedRow&&t.substr(e.column)===f.maybeInsertedLineEnd&&t.substr(0,e.column)==f.maybeInsertedLineStart},d.popAutoInsertedClosing=function(){f.autoInsertedLineEnd=f.autoInsertedLineEnd.substr(1),f.autoInsertedBrackets--},d.clearMaybeInsertedClosing=function(){f&&(f.maybeInsertedBrackets=0,f.maybeInsertedRow=-1)},r.inherits(d,i),t.CstyleBehaviour=d}),ace.define("ace/unicode",["require","exports","module"],function(e,t,n){"use strict";var r=[48,9,8,25,5,0,2,25,48,0,11,0,5,0,6,22,2,30,2,457,5,11,15,4,8,0,2,0,18,116,2,1,3,3,9,0,2,2,2,0,2,19,2,82,2,138,2,4,3,155,12,37,3,0,8,38,10,44,2,0,2,1,2,1,2,0,9,26,6,2,30,10,7,61,2,9,5,101,2,7,3,9,2,18,3,0,17,58,3,100,15,53,5,0,6,45,211,57,3,18,2,5,3,11,3,9,2,1,7,6,2,2,2,7,3,1,3,21,2,6,2,0,4,3,3,8,3,1,3,3,9,0,5,1,2,4,3,11,16,2,2,5,5,1,3,21,2,6,2,1,2,1,2,1,3,0,2,4,5,1,3,2,4,0,8,3,2,0,8,15,12,2,2,8,2,2,2,21,2,6,2,1,2,4,3,9,2,2,2,2,3,0,16,3,3,9,18,2,2,7,3,1,3,21,2,6,2,1,2,4,3,8,3,1,3,2,9,1,5,1,2,4,3,9,2,0,17,1,2,5,4,2,2,3,4,1,2,0,2,1,4,1,4,2,4,11,5,4,4,2,2,3,3,0,7,0,15,9,18,2,2,7,2,2,2,22,2,9,2,4,4,7,2,2,2,3,8,1,2,1,7,3,3,9,19,1,2,7,2,2,2,22,2,9,2,4,3,8,2,2,2,3,8,1,8,0,2,3,3,9,19,1,2,7,2,2,2,22,2,15,4,7,2,2,2,3,10,0,9,3,3,9,11,5,3,1,2,17,4,23,2,8,2,0,3,6,4,0,5,5,2,0,2,7,19,1,14,57,6,14,2,9,40,1,2,0,3,1,2,0,3,0,7,3,2,6,2,2,2,0,2,0,3,1,2,12,2,2,3,4,2,0,2,5,3,9,3,1,35,0,24,1,7,9,12,0,2,0,2,0,5,9,2,35,5,19,2,5,5,7,2,35,10,0,58,73,7,77,3,37,11,42,2,0,4,328,2,3,3,6,2,0,2,3,3,40,2,3,3,32,2,3,3,6,2,0,2,3,3,14,2,56,2,3,3,66,5,0,33,15,17,84,13,619,3,16,2,25,6,74,22,12,2,6,12,20,12,19,13,12,2,2,2,1,13,51,3,29,4,0,5,1,3,9,34,2,3,9,7,87,9,42,6,69,11,28,4,11,5,11,11,39,3,4,12,43,5,25,7,10,38,27,5,62,2,28,3,10,7,9,14,0,89,75,5,9,18,8,13,42,4,11,71,55,9,9,4,48,83,2,2,30,14,230,23,280,3,5,3,37,3,5,3,7,2,0,2,0,2,0,2,30,3,52,2,6,2,0,4,2,2,6,4,3,3,5,5,12,6,2,2,6,67,1,20,0,29,0,14,0,17,4,60,12,5,0,4,11,18,0,5,0,3,9,2,0,4,4,7,0,2,0,2,0,2,3,2,10,3,3,6,4,5,0,53,1,2684,46,2,46,2,132,7,6,15,37,11,53,10,0,17,22,10,6,2,6,2,6,2,6,2,6,2,6,2,6,2,6,2,31,48,0,470,1,36,5,2,4,6,1,5,85,3,1,3,2,2,89,2,3,6,40,4,93,18,23,57,15,513,6581,75,20939,53,1164,68,45,3,268,4,27,21,31,3,13,13,1,2,24,9,69,11,1,38,8,3,102,3,1,111,44,25,51,13,68,12,9,7,23,4,0,5,45,3,35,13,28,4,64,15,10,39,54,10,13,3,9,7,22,4,1,5,66,25,2,227,42,2,1,3,9,7,11171,13,22,5,48,8453,301,3,61,3,105,39,6,13,4,6,11,2,12,2,4,2,0,2,1,2,1,2,107,34,362,19,63,3,53,41,11,5,15,17,6,13,1,25,2,33,4,2,134,20,9,8,25,5,0,2,25,12,88,4,5,3,5,3,5,3,2],i=0,s=[];for(var o=0;o<r.length;o+=2)s.push(i+=r[o]),r[o+1]&&s.push(45,i+=r[o+1]);t.wordChars=String.fromCharCode.apply(null,s)}),ace.define("ace/mode/text",["require","exports","module","ace/config","ace/tokenizer","ace/mode/text_highlight_rules","ace/mode/behaviour/cstyle","ace/unicode","ace/lib/lang","ace/token_iterator","ace/range"],function(e,t,n){"use strict";var r=e("../config"),i=e("../tokenizer").Tokenizer,s=e("./text_highlight_rules").TextHighlightRules,o=e("./behaviour/cstyle").CstyleBehaviour,u=e("../unicode"),a=e("../lib/lang"),f=e("../token_iterator").TokenIterator,l=e("../range").Range,c=function(){this.HighlightRules=s};(function(){this.$defaultBehaviour=new o,this.tokenRe=new RegExp("^["+u.wordChars+"\\$_]+","g"),this.nonTokenRe=new RegExp("^(?:[^"+u.wordChars+"\\$_]|\\s])+","g"),this.getTokenizer=function(){return this.$tokenizer||(this.$highlightRules=this.$highlightRules||new this.HighlightRules(this.$highlightRuleConfig),this.$tokenizer=new i(this.$highlightRules.getRules())),this.$tokenizer},this.lineCommentStart="",this.blockComment="",this.toggleCommentLines=function(e,t,n,r){function w(e){for(var t=n;t<=r;t++)e(i.getLine(t),t)}var i=t.doc,s=!0,o=!0,u=Infinity,f=t.getTabSize(),l=!1;if(!this.lineCommentStart){if(!this.blockComment)return!1;var c=this.blockComment.start,h=this.blockComment.end,p=new RegExp("^(\\s*)(?:"+a.escapeRegExp(c)+")"),d=new RegExp("(?:"+a.escapeRegExp(h)+")\\s*$"),v=function(e,t){if(g(e,t))return;if(!s||/\S/.test(e))i.insertInLine({row:t,column:e.length},h),i.insertInLine({row:t,column:u},c)},m=function(e,t){var n;(n=e.match(d))&&i.removeInLine(t,e.length-n[0].length,e.length),(n=e.match(p))&&i.removeInLine(t,n[1].length,n[0].length)},g=function(e,n){if(p.test(e))return!0;var r=t.getTokens(n);for(var i=0;i<r.length;i++)if(r[i].type==="comment")return!0}}else{if(Array.isArray(this.lineCommentStart))var p=this.lineCommentStart.map(a.escapeRegExp).join("|"),c=this.lineCommentStart[0];else var p=a.escapeRegExp(this.lineCommentStart),c=this.lineCommentStart;p=new RegExp("^(\\s*)(?:"+p+") ?"),l=t.getUseSoftTabs();var m=function(e,t){var n=e.match(p);if(!n)return;var r=n[1].length,s=n[0].length;!b(e,r,s)&&n[0][s-1]==" "&&s--,i.removeInLine(t,r,s)},y=c+" ",v=function(e,t){if(!s||/\S/.test(e))b(e,u,u)?i.insertInLine({row:t,column:u},y):i.insertInLine({row:t,column:u},c)},g=function(e,t){return p.test(e)},b=function(e,t,n){var r=0;while(t--&&e.charAt(t)==" ")r++;if(r%f!=0)return!1;var r=0;while(e.charAt(n++)==" ")r++;return f>2?r%f!=f-1:r%f==0}}var E=Infinity;w(function(e,t){var n=e.search(/\S/);n!==-1?(n<u&&(u=n),o&&!g(e,t)&&(o=!1)):E>e.length&&(E=e.length)}),u==Infinity&&(u=E,s=!1,o=!1),l&&u%f!=0&&(u=Math.floor(u/f)*f),w(o?m:v)},this.toggleBlockComment=function(e,t,n,r){var i=this.blockComment;if(!i)return;!i.start&&i[0]&&(i=i[0]);var s=new f(t,r.row,r.column),o=s.getCurrentToken(),u=t.selection,a=t.selection.toOrientedRange(),c,h;if(o&&/comment/.test(o.type)){var p,d;while(o&&/comment/.test(o.type)){var v=o.value.indexOf(i.start);if(v!=-1){var m=s.getCurrentTokenRow(),g=s.getCurrentTokenColumn()+v;p=new l(m,g,m,g+i.start.length);break}o=s.stepBackward()}var s=new f(t,r.row,r.column),o=s.getCurrentToken();while(o&&/comment/.test(o.type)){var v=o.value.indexOf(i.end);if(v!=-1){var m=s.getCurrentTokenRow(),g=s.getCurrentTokenColumn()+v;d=new l(m,g,m,g+i.end.length);break}o=s.stepForward()}d&&t.remove(d),p&&(t.remove(p),c=p.start.row,h=-i.start.length)}else h=i.start.length,c=n.start.row,t.insert(n.end,i.end),t.insert(n.start,i.start);a.start.row==c&&(a.start.column+=h),a.end.row==c&&(a.end.column+=h),t.selection.fromOrientedRange(a)},this.getNextLineIndent=function(e,t,n){return this.$getIndent(t)},this.checkOutdent=function(e,t,n){return!1},this.autoOutdent=function(e,t,n){},this.$getIndent=function(e){return e.match(/^\s*/)[0]},this.createWorker=function(e){return null},this.createModeDelegates=function(e){this.$embeds=[],this.$modes={};for(var t in e)if(e[t]){var n=e[t],i=n.prototype.$id,s=r.$modes[i];s||(r.$modes[i]=s=new n),r.$modes[t]||(r.$modes[t]=s),this.$embeds.push(t),this.$modes[t]=s}var o=["toggleBlockComment","toggleCommentLines","getNextLineIndent","checkOutdent","autoOutdent","transformAction","getCompletions"];for(var t=0;t<o.length;t++)(function(e){var n=o[t],r=e[n];e[o[t]]=function(){return this.$delegator(n,arguments,r)}})(this)},this.$delegator=function(e,t,n){var r=t[0]||"start";if(typeof r!="string"){if(Array.isArray(r[2])){var i=r[2][r[2].length-1],s=this.$modes[i];if(s)return s[e].apply(s,[r[1]].concat([].slice.call(t,1)))}r=r[0]||"start"}for(var o=0;o<this.$embeds.length;o++){if(!this.$modes[this.$embeds[o]])continue;var u=r.split(this.$embeds[o]);if(!u[0]&&u[1]){t[0]=u[1];var s=this.$modes[this.$embeds[o]];return s[e].apply(s,t)}}var a=n.apply(this,t);return n?a:undefined},this.transformAction=function(e,t,n,r,i){if(this.$behaviour){var s=this.$behaviour.getBehaviours();for(var o in s)if(s[o][t]){var u=s[o][t].apply(this,arguments);if(u)return u}}},this.getKeywords=function(e){if(!this.completionKeywords){var t=this.$tokenizer.rules,n=[];for(var r in t){var i=t[r];for(var s=0,o=i.length;s<o;s++)if(typeof i[s].token=="string")/keyword|support|storage/.test(i[s].token)&&n.push(i[s].regex);else if(typeof i[s].token=="object")for(var u=0,a=i[s].token.length;u<a;u++)if(/keyword|support|storage/.test(i[s].token[u])){var r=i[s].regex.match(/\(.+?\)/g)[u];n.push(r.substr(1,r.length-2))}}this.completionKeywords=n}return e?n.concat(this.$keywordList||[]):this.$keywordList},this.$createKeywordList=function(){return this.$highlightRules||this.getTokenizer(),this.$keywordList=this.$highlightRules.$keywordList||[]},this.getCompletions=function(e,t,n,r){var i=this.$keywordList||this.$createKeywordList();return i.map(function(e){return{name:e,value:e,score:0,meta:"keyword"}})},this.$id="ace/mode/text"}).call(c.prototype),t.Mode=c}),ace.define("ace/apply_delta",["require","exports","module"],function(e,t,n){"use strict";function r(e,t){throw console.log("Invalid Delta:",e),"Invalid Delta: "+t}function i(e,t){return t.row>=0&&t.row<e.length&&t.column>=0&&t.column<=e[t.row].length}function s(e,t){t.action!="insert"&&t.action!="remove"&&r(t,"delta.action must be 'insert' or 'remove'"),t.lines instanceof Array||r(t,"delta.lines must be an Array"),(!t.start||!t.end)&&r(t,"delta.start/end must be an present");var n=t.start;i(e,t.start)||r(t,"delta.start must be contained in document");var s=t.end;t.action=="remove"&&!i(e,s)&&r(t,"delta.end must contained in document for 'remove' actions");var o=s.row-n.row,u=s.column-(o==0?n.column:0);(o!=t.lines.length-1||t.lines[o].length!=u)&&r(t,"delta.range must match delta lines")}t.applyDelta=function(e,t,n){var r=t.start.row,i=t.start.column,s=e[r]||"";switch(t.action){case"insert":var o=t.lines;if(o.length===1)e[r]=s.substring(0,i)+t.lines[0]+s.substring(i);else{var u=[r,1].concat(t.lines);e.splice.apply(e,u),e[r]=s.substring(0,i)+e[r],e[r+t.lines.length-1]+=s.substring(i)}break;case"remove":var a=t.end.column,f=t.end.row;r===f?e[r]=s.substring(0,i)+s.substring(a):e.splice(r,f-r+1,s.substring(0,i)+e[f].substring(a))}}}),ace.define("ace/anchor",["require","exports","module","ace/lib/oop","ace/lib/event_emitter"],function(e,t,n){"use strict";var r=e("./lib/oop"),i=e("./lib/event_emitter").EventEmitter,s=t.Anchor=function(e,t,n){this.$onChange=this.onChange.bind(this),this.attach(e),typeof n=="undefined"?this.setPosition(t.row,t.column):this.setPosition(t,n)};(function(){function e(e,t,n){var r=n?e.column<=t.column:e.column<t.column;return e.row<t.row||e.row==t.row&&r}function t(t,n,r){var i=t.action=="insert",s=(i?1:-1)*(t.end.row-t.start.row),o=(i?1:-1)*(t.end.column-t.start.column),u=t.start,a=i?u:t.end;return e(n,u,r)?{row:n.row,column:n.column}:e(a,n,!r)?{row:n.row+s,column:n.column+(n.row==a.row?o:0)}:{row:u.row,column:u.column}}r.implement(this,i),this.getPosition=function(){return this.$clipPositionToDocument(this.row,this.column)},this.getDocument=function(){return this.document},this.$insertRight=!1,this.onChange=function(e){if(e.start.row==e.end.row&&e.start.row!=this.row)return;if(e.start.row>this.row)return;var n=t(e,{row:this.row,column:this.column},this.$insertRight);this.setPosition(n.row,n.column,!0)},this.setPosition=function(e,t,n){var r;n?r={row:e,column:t}:r=this.$clipPositionToDocument(e,t);if(this.row==r.row&&this.column==r.column)return;var i={row:this.row,column:this.column};this.row=r.row,this.column=r.column,this._signal("change",{old:i,value:r})},this.detach=function(){this.document.off("change",this.$onChange)},this.attach=function(e){this.document=e||this.document,this.document.on("change",this.$onChange)},this.$clipPositionToDocument=function(e,t){var n={};return e>=this.document.getLength()?(n.row=Math.max(0,this.document.getLength()-1),n.column=this.document.getLine(n.row).length):e<0?(n.row=0,n.column=0):(n.row=e,n.column=Math.min(this.document.getLine(n.row).length,Math.max(0,t))),t<0&&(n.column=0),n}}).call(s.prototype)}),ace.define("ace/document",["require","exports","module","ace/lib/oop","ace/apply_delta","ace/lib/event_emitter","ace/range","ace/anchor"],function(e,t,n){"use strict";var r=e("./lib/oop"),i=e("./apply_delta").applyDelta,s=e("./lib/event_emitter").EventEmitter,o=e("./range").Range,u=e("./anchor").Anchor,a=function(e){this.$lines=[""],e.length===0?this.$lines=[""]:Array.isArray(e)?this.insertMergedLines({row:0,column:0},e):this.insert({row:0,column:0},e)};(function(){r.implement(this,s),this.setValue=function(e){var t=this.getLength()-1;this.remove(new o(0,0,t,this.getLine(t).length)),this.insert({row:0,column:0},e||"")},this.getValue=function(){return this.getAllLines().join(this.getNewLineCharacter())},this.createAnchor=function(e,t){return new u(this,e,t)},"aaa".split(/a/).length===0?this.$split=function(e){return e.replace(/\r\n|\r/g,"\n").split("\n")}:this.$split=function(e){return e.split(/\r\n|\r|\n/)},this.$detectNewLine=function(e){var t=e.match(/^.*?(\r\n|\r|\n)/m);this.$autoNewLine=t?t[1]:"\n",this._signal("changeNewLineMode")},this.getNewLineCharacter=function(){switch(this.$newLineMode){case"windows":return"\r\n";case"unix":return"\n";default:return this.$autoNewLine||"\n"}},this.$autoNewLine="",this.$newLineMode="auto",this.setNewLineMode=function(e){if(this.$newLineMode===e)return;this.$newLineMode=e,this._signal("changeNewLineMode")},this.getNewLineMode=function(){return this.$newLineMode},this.isNewLine=function(e){return e=="\r\n"||e=="\r"||e=="\n"},this.getLine=function(e){return this.$lines[e]||""},this.getLines=function(e,t){return this.$lines.slice(e,t+1)},this.getAllLines=function(){return this.getLines(0,this.getLength())},this.getLength=function(){return this.$lines.length},this.getTextRange=function(e){return this.getLinesForRange(e).join(this.getNewLineCharacter())},this.getLinesForRange=function(e){var t;if(e.start.row===e.end.row)t=[this.getLine(e.start.row).substring(e.start.column,e.end.column)];else{t=this.getLines(e.start.row,e.end.row),t[0]=(t[0]||"").substring(e.start.column);var n=t.length-1;e.end.row-e.start.row==n&&(t[n]=t[n].substring(0,e.end.column))}return t},this.insertLines=function(e,t){return console.warn("Use of document.insertLines is deprecated. Use the insertFullLines method instead."),this.insertFullLines(e,t)},this.removeLines=function(e,t){return console.warn("Use of document.removeLines is deprecated. Use the removeFullLines method instead."),this.removeFullLines(e,t)},this.insertNewLine=function(e){return console.warn("Use of document.insertNewLine is deprecated. Use insertMergedLines(position, ['', '']) instead."),this.insertMergedLines(e,["",""])},this.insert=function(e,t){return this.getLength()<=1&&this.$detectNewLine(t),this.insertMergedLines(e,this.$split(t))},this.insertInLine=function(e,t){var n=this.clippedPos(e.row,e.column),r=this.pos(e.row,e.column+t.length);return this.applyDelta({start:n,end:r,action:"insert",lines:[t]},!0),this.clonePos(r)},this.clippedPos=function(e,t){var n=this.getLength();e===undefined?e=n:e<0?e=0:e>=n&&(e=n-1,t=undefined);var r=this.getLine(e);return t==undefined&&(t=r.length),t=Math.min(Math.max(t,0),r.length),{row:e,column:t}},this.clonePos=function(e){return{row:e.row,column:e.column}},this.pos=function(e,t){return{row:e,column:t}},this.$clipPosition=function(e){var t=this.getLength();return e.row>=t?(e.row=Math.max(0,t-1),e.column=this.getLine(t-1).length):(e.row=Math.max(0,e.row),e.column=Math.min(Math.max(e.column,0),this.getLine(e.row).length)),e},this.insertFullLines=function(e,t){e=Math.min(Math.max(e,0),this.getLength());var n=0;e<this.getLength()?(t=t.concat([""]),n=0):(t=[""].concat(t),e--,n=this.$lines[e].length),this.insertMergedLines({row:e,column:n},t)},this.insertMergedLines=function(e,t){var n=this.clippedPos(e.row,e.column),r={row:n.row+t.length-1,column:(t.length==1?n.column:0)+t[t.length-1].length};return this.applyDelta({start:n,end:r,action:"insert",lines:t}),this.clonePos(r)},this.remove=function(e){var t=this.clippedPos(e.start.row,e.start.column),n=this.clippedPos(e.end.row,e.end.column);return this.applyDelta({start:t,end:n,action:"remove",lines:this.getLinesForRange({start:t,end:n})}),this.clonePos(t)},this.removeInLine=function(e,t,n){var r=this.clippedPos(e,t),i=this.clippedPos(e,n);return this.applyDelta({start:r,end:i,action:"remove",lines:this.getLinesForRange({start:r,end:i})},!0),this.clonePos(r)},this.removeFullLines=function(e,t){e=Math.min(Math.max(0,e),this.getLength()-1),t=Math.min(Math.max(0,t),this.getLength()-1);var n=t==this.getLength()-1&&e>0,r=t<this.getLength()-1,i=n?e-1:e,s=n?this.getLine(i).length:0,u=r?t+1:t,a=r?0:this.getLine(u).length,f=new o(i,s,u,a),l=this.$lines.slice(e,t+1);return this.applyDelta({start:f.start,end:f.end,action:"remove",lines:this.getLinesForRange(f)}),l},this.removeNewLine=function(e){e<this.getLength()-1&&e>=0&&this.applyDelta({start:this.pos(e,this.getLine(e).length),end:this.pos(e+1,0),action:"remove",lines:["",""]})},this.replace=function(e,t){e instanceof o||(e=o.fromPoints(e.start,e.end));if(t.length===0&&e.isEmpty())return e.start;if(t==this.getTextRange(e))return e.end;this.remove(e);var n;return t?n=this.insert(e.start,t):n=e.start,n},this.applyDeltas=function(e){for(var t=0;t<e.length;t++)this.applyDelta(e[t])},this.revertDeltas=function(e){for(var t=e.length-1;t>=0;t--)this.revertDelta(e[t])},this.applyDelta=function(e,t){var n=e.action=="insert";if(n?e.lines.length<=1&&!e.lines[0]:!o.comparePoints(e.start,e.end))return;n&&e.lines.length>2e4?this.$splitAndapplyLargeDelta(e,2e4):(i(this.$lines,e,t),this._signal("change",e))},this.$safeApplyDelta=function(e){var t=this.$lines.length;(e.action=="remove"&&e.start.row<t&&e.end.row<t||e.action=="insert"&&e.start.row<=t)&&this.applyDelta(e)},this.$splitAndapplyLargeDelta=function(e,t){var n=e.lines,r=n.length-t+1,i=e.start.row,s=e.start.column;for(var o=0,u=0;o<r;o=u){u+=t-1;var a=n.slice(o,u);a.push(""),this.applyDelta({start:this.pos(i+o,s),end:this.pos(i+u,s=0),action:e.action,lines:a},!0)}e.lines=n.slice(o),e.start.row=i+o,e.start.column=s,this.applyDelta(e,!0)},this.revertDelta=function(e){this.$safeApplyDelta({start:this.clonePos(e.start),end:this.clonePos(e.end),action:e.action=="insert"?"remove":"insert",lines:e.lines.slice()})},this.indexToPosition=function(e,t){var n=this.$lines||this.getAllLines(),r=this.getNewLineCharacter().length;for(var i=t||0,s=n.length;i<s;i++){e-=n[i].length+r;if(e<0)return{row:i,column:e+n[i].length+r}}return{row:s-1,column:e+n[s-1].length+r}},this.positionToIndex=function(e,t){var n=this.$lines||this.getAllLines(),r=this.getNewLineCharacter().length,i=0,s=Math.min(e.row,n.length);for(var o=t||0;o<s;++o)i+=n[o].length+r;return i+e.column}}).call(a.prototype),t.Document=a}),ace.define("ace/background_tokenizer",["require","exports","module","ace/lib/oop","ace/lib/event_emitter"],function(e,t,n){"use strict";var r=e("./lib/oop"),i=e("./lib/event_emitter").EventEmitter,s=function(e,t){this.running=!1,this.lines=[],this.states=[],this.currentLine=0,this.tokenizer=e;var n=this;this.$worker=function(){if(!n.running)return;var e=new Date,t=n.currentLine,r=-1,i=n.doc,s=t;while(n.lines[t])t++;var o=i.getLength(),u=0;n.running=!1;while(t<o){n.$tokenizeRow(t),r=t;do t++;while(n.lines[t]);u++;if(u%5===0&&new Date-e>20){n.running=setTimeout(n.$worker,20);break}}n.currentLine=t,r==-1&&(r=t),s<=r&&n.fireUpdateEvent(s,r)}};(function(){r.implement(this,i),this.setTokenizer=function(e){this.tokenizer=e,this.lines=[],this.states=[],this.start(0)},this.setDocument=function(e){this.doc=e,this.lines=[],this.states=[],this.stop()},this.fireUpdateEvent=function(e,t){var n={first:e,last:t};this._signal("update",{data:n})},this.start=function(e){this.currentLine=Math.min(e||0,this.currentLine,this.doc.getLength()),this.lines.splice(this.currentLine,this.lines.length),this.states.splice(this.currentLine,this.states.length),this.stop(),this.running=setTimeout(this.$worker,700)},this.scheduleStart=function(){this.running||(this.running=setTimeout(this.$worker,700))},this.$updateOnChange=function(e){var t=e.start.row,n=e.end.row-t;if(n===0)this.lines[t]=null;else if(e.action=="remove")this.lines.splice(t,n+1,null),this.states.splice(t,n+1,null);else{var r=Array(n+1);r.unshift(t,1),this.lines.splice.apply(this.lines,r),this.states.splice.apply(this.states,r)}this.currentLine=Math.min(t,this.currentLine,this.doc.getLength()),this.stop()},this.stop=function(){this.running&&clearTimeout(this.running),this.running=!1},this.getTokens=function(e){return this.lines[e]||this.$tokenizeRow(e)},this.getState=function(e){return this.currentLine==e&&this.$tokenizeRow(e),this.states[e]||"start"},this.$tokenizeRow=function(e){var t=this.doc.getLine(e),n=this.states[e-1],r=this.tokenizer.getLineTokens(t,n,e);return this.states[e]+""!=r.state+""?(this.states[e]=r.state,this.lines[e+1]=null,this.currentLine>e+1&&(this.currentLine=e+1)):this.currentLine==e&&(this.currentLine=e+1),this.lines[e]=r.tokens},this.cleanup=function(){this.running=!1,this.lines=[],this.states=[],this.currentLine=0,this.removeAllListeners()}}).call(s.prototype),t.BackgroundTokenizer=s}),ace.define("ace/search_highlight",["require","exports","module","ace/lib/lang","ace/lib/oop","ace/range"],function(e,t,n){"use strict";var r=e("./lib/lang"),i=e("./lib/oop"),s=e("./range").Range,o=function(e,t,n){this.setRegexp(e),this.clazz=t,this.type=n||"text"};(function(){this.MAX_RANGES=500,this.setRegexp=function(e){if(this.regExp+""==e+"")return;this.regExp=e,this.cache=[]},this.update=function(e,t,n,i){if(!this.regExp)return;var o=i.firstRow,u=i.lastRow,a={};for(var f=o;f<=u;f++){var l=this.cache[f];l==null&&(l=r.getMatchOffsets(n.getLine(f),this.regExp),l.length>this.MAX_RANGES&&(l=l.slice(0,this.MAX_RANGES)),l=l.map(function(e){return new s(f,e.offset,f,e.offset+e.length)}),this.cache[f]=l.length?l:"");for(var c=l.length;c--;){var h=l[c].toScreenRange(n),p=h.toString();if(a[p])continue;a[p]=!0,t.drawSingleLineMarker(e,h,this.clazz,i)}}}}).call(o.prototype),t.SearchHighlight=o}),ace.define("ace/edit_session/fold_line",["require","exports","module","ace/range"],function(e,t,n){"use strict";function i(e,t){this.foldData=e,Array.isArray(t)?this.folds=t:t=this.folds=[t];var n=t[t.length-1];this.range=new r(t[0].start.row,t[0].start.column,n.end.row,n.end.column),this.start=this.range.start,this.end=this.range.end,this.folds.forEach(function(e){e.setFoldLine(this)},this)}var r=e("../range").Range;(function(){this.shiftRow=function(e){this.start.row+=e,this.end.row+=e,this.folds.forEach(function(t){t.start.row+=e,t.end.row+=e})},this.addFold=function(e){if(e.sameRow){if(e.start.row<this.startRow||e.endRow>this.endRow)throw new Error("Can't add a fold to this FoldLine as it has no connection");this.folds.push(e),this.folds.sort(function(e,t){return-e.range.compareEnd(t.start.row,t.start.column)}),this.range.compareEnd(e.start.row,e.start.column)>0?(this.end.row=e.end.row,this.end.column=e.end.column):this.range.compareStart(e.end.row,e.end.column)<0&&(this.start.row=e.start.row,this.start.column=e.start.column)}else if(e.start.row==this.end.row)this.folds.push(e),this.end.row=e.end.row,this.end.column=e.end.column;else{if(e.end.row!=this.start.row)throw new Error("Trying to add fold to FoldRow that doesn't have a matching row");this.folds.unshift(e),this.start.row=e.start.row,this.start.column=e.start.column}e.foldLine=this},this.containsRow=function(e){return e>=this.start.row&&e<=this.end.row},this.walk=function(e,t,n){var r=0,i=this.folds,s,o,u,a=!0;t==null&&(t=this.end.row,n=this.end.column);for(var f=0;f<i.length;f++){s=i[f],o=s.range.compareStart(t,n);if(o==-1){e(null,t,n,r,a);return}u=e(null,s.start.row,s.start.column,r,a),u=!u&&e(s.placeholder,s.start.row,s.start.column,r);if(u||o===0)return;a=!s.sameRow,r=s.end.column}e(null,t,n,r,a)},this.getNextFoldTo=function(e,t){var n,r;for(var i=0;i<this.folds.length;i++){n=this.folds[i],r=n.range.compareEnd(e,t);if(r==-1)return{fold:n,kind:"after"};if(r===0)return{fold:n,kind:"inside"}}return null},this.addRemoveChars=function(e,t,n){var r=this.getNextFoldTo(e,t),i,s;if(r){i=r.fold;if(r.kind=="inside"&&i.start.column!=t&&i.start.row!=e)window.console&&window.console.log(e,t,i);else if(i.start.row==e){s=this.folds;var o=s.indexOf(i);o===0&&(this.start.column+=n);for(o;o<s.length;o++){i=s[o],i.start.column+=n;if(!i.sameRow)return;i.end.column+=n}this.end.column+=n}}},this.split=function(e,t){var n=this.getNextFoldTo(e,t);if(!n||n.kind=="inside")return null;var r=n.fold,s=this.folds,o=this.foldData,u=s.indexOf(r),a=s[u-1];this.end.row=a.end.row,this.end.column=a.end.column,s=s.splice(u,s.length-u);var f=new i(o,s);return o.splice(o.indexOf(this)+1,0,f),f},this.merge=function(e){var t=e.folds;for(var n=0;n<t.length;n++)this.addFold(t[n]);var r=this.foldData;r.splice(r.indexOf(e),1)},this.toString=function(){var e=[this.range.toString()+": ["];return this.folds.forEach(function(t){e.push("  "+t.toString())}),e.push("]"),e.join("\n")},this.idxToPosition=function(e){var t=0;for(var n=0;n<this.folds.length;n++){var r=this.folds[n];e-=r.start.column-t;if(e<0)return{row:r.start.row,column:r.start.column+e};e-=r.placeholder.length;if(e<0)return r.start;t=r.end.column}return{row:this.end.row,column:this.end.column+e}}}).call(i.prototype),t.FoldLine=i}),ace.define("ace/range_list",["require","exports","module","ace/range"],function(e,t,n){"use strict";var r=e("./range").Range,i=r.comparePoints,s=function(){this.ranges=[],this.$bias=1};(function(){this.comparePoints=i,this.pointIndex=function(e,t,n){var r=this.ranges;for(var s=n||0;s<r.length;s++){var o=r[s],u=i(e,o.end);if(u>0)continue;var a=i(e,o.start);return u===0?t&&a!==0?-s-2:s:a>0||a===0&&!t?s:-s-1}return-s-1},this.add=function(e){var t=!e.isEmpty(),n=this.pointIndex(e.start,t);n<0&&(n=-n-1);var r=this.pointIndex(e.end,t,n);return r<0?r=-r-1:r++,this.ranges.splice(n,r-n,e)},this.addList=function(e){var t=[];for(var n=e.length;n--;)t.push.apply(t,this.add(e[n]));return t},this.substractPoint=function(e){var t=this.pointIndex(e);if(t>=0)return this.ranges.splice(t,1)},this.merge=function(){var e=[],t=this.ranges;t=t.sort(function(e,t){return i(e.start,t.start)});var n=t[0],r;for(var s=1;s<t.length;s++){r=n,n=t[s];var o=i(r.end,n.start);if(o<0)continue;if(o==0&&!r.isEmpty()&&!n.isEmpty())continue;i(r.end,n.end)<0&&(r.end.row=n.end.row,r.end.column=n.end.column),t.splice(s,1),e.push(n),n=r,s--}return this.ranges=t,e},this.contains=function(e,t){return this.pointIndex({row:e,column:t})>=0},this.containsPoint=function(e){return this.pointIndex(e)>=0},this.rangeAtPoint=function(e){var t=this.pointIndex(e);if(t>=0)return this.ranges[t]},this.clipRows=function(e,t){var n=this.ranges;if(n[0].start.row>t||n[n.length-1].start.row<e)return[];var r=this.pointIndex({row:e,column:0});r<0&&(r=-r-1);var i=this.pointIndex({row:t,column:0},r);i<0&&(i=-i-1);var s=[];for(var o=r;o<i;o++)s.push(n[o]);return s},this.removeAll=function(){return this.ranges.splice(0,this.ranges.length)},this.attach=function(e){this.session&&this.detach(),this.session=e,this.onChange=this.$onChange.bind(this),this.session.on("change",this.onChange)},this.detach=function(){if(!this.session)return;this.session.removeListener("change",this.onChange),this.session=null},this.$onChange=function(e){var t=e.start,n=e.end,r=t.row,i=n.row,s=this.ranges;for(var o=0,u=s.length;o<u;o++){var a=s[o];if(a.end.row>=r)break}if(e.action=="insert"){var f=i-r,l=-t.column+n.column;for(;o<u;o++){var a=s[o];if(a.start.row>r)break;a.start.row==r&&a.start.column>=t.column&&(a.start.column==t.column&&this.$bias<=0||(a.start.column+=l,a.start.row+=f));if(a.end.row==r&&a.end.column>=t.column){if(a.end.column==t.column&&this.$bias<0)continue;a.end.column==t.column&&l>0&&o<u-1&&a.end.column>a.start.column&&a.end.column==s[o+1].start.column&&(a.end.column-=l),a.end.column+=l,a.end.row+=f}}}else{var f=r-i,l=t.column-n.column;for(;o<u;o++){var a=s[o];if(a.start.row>i)break;if(a.end.row<i&&(r<a.end.row||r==a.end.row&&t.column<a.end.column))a.end.row=r,a.end.column=t.column;else if(a.end.row==i)if(a.end.column<=n.column){if(f||a.end.column>t.column)a.end.column=t.column,a.end.row=t.row}else a.end.column+=l,a.end.row+=f;else a.end.row>i&&(a.end.row+=f);if(a.start.row<i&&(r<a.start.row||r==a.start.row&&t.column<a.start.column))a.start.row=r,a.start.column=t.column;else if(a.start.row==i)if(a.start.column<=n.column){if(f||a.start.column>t.column)a.start.column=t.column,a.start.row=t.row}else a.start.column+=l,a.start.row+=f;else a.start.row>i&&(a.start.row+=f)}}if(f!=0&&o<u)for(;o<u;o++){var a=s[o];a.start.row+=f,a.end.row+=f}}}).call(s.prototype),t.RangeList=s}),ace.define("ace/edit_session/fold",["require","exports","module","ace/range_list","ace/lib/oop"],function(e,t,n){"use strict";function o(e,t){e.row-=t.row,e.row==0&&(e.column-=t.column)}function u(e,t){o(e.start,t),o(e.end,t)}function a(e,t){e.row==0&&(e.column+=t.column),e.row+=t.row}function f(e,t){a(e.start,t),a(e.end,t)}var r=e("../range_list").RangeList,i=e("../lib/oop"),s=t.Fold=function(e,t){this.foldLine=null,this.placeholder=t,this.range=e,this.start=e.start,this.end=e.end,this.sameRow=e.start.row==e.end.row,this.subFolds=this.ranges=[]};i.inherits(s,r),function(){this.toString=function(){return'"'+this.placeholder+'" '+this.range.toString()},this.setFoldLine=function(e){this.foldLine=e,this.subFolds.forEach(function(t){t.setFoldLine(e)})},this.clone=function(){var e=this.range.clone(),t=new s(e,this.placeholder);return this.subFolds.forEach(function(e){t.subFolds.push(e.clone())}),t.collapseChildren=this.collapseChildren,t},this.addSubFold=function(e){if(this.range.isEqual(e))return;u(e,this.start);var t=e.start.row,n=e.start.column;for(var r=0,i=-1;r<this.subFolds.length;r++){i=this.subFolds[r].range.compare(t,n);if(i!=1)break}var s=this.subFolds[r],o=0;if(i==0){if(s.range.containsRange(e))return s.addSubFold(e);o=1}var t=e.range.end.row,n=e.range.end.column;for(var a=r,i=-1;a<this.subFolds.length;a++){i=this.subFolds[a].range.compare(t,n);if(i!=1)break}i==0&&a++;var f=this.subFolds.splice(r,a-r,e),l=i==0?f.length-1:f.length;for(var c=o;c<l;c++)e.addSubFold(f[c]);return e.setFoldLine(this.foldLine),e},this.restoreRange=function(e){return f(e,this.start)}}.call(s.prototype)}),ace.define("ace/edit_session/folding",["require","exports","module","ace/range","ace/edit_session/fold_line","ace/edit_session/fold","ace/token_iterator"],function(e,t,n){"use strict";function u(){this.getFoldAt=function(e,t,n){var r=this.getFoldLine(e);if(!r)return null;var i=r.folds;for(var s=0;s<i.length;s++){var o=i[s].range;if(o.contains(e,t)){if(n==1&&o.isEnd(e,t)&&!o.isEmpty())continue;if(n==-1&&o.isStart(e,t)&&!o.isEmpty())continue;return i[s]}}},this.getFoldsInRange=function(e){var t=e.start,n=e.end,r=this.$foldData,i=[];t.column+=1,n.column-=1;for(var s=0;s<r.length;s++){var o=r[s].range.compareRange(e);if(o==2)continue;if(o==-2)break;var u=r[s].folds;for(var a=0;a<u.length;a++){var f=u[a];o=f.range.compareRange(e);if(o==-2)break;if(o==2)continue;if(o==42)break;i.push(f)}}return t.column-=1,n.column+=1,i},this.getFoldsInRangeList=function(e){if(Array.isArray(e)){var t=[];e.forEach(function(e){t=t.concat(this.getFoldsInRange(e))},this)}else var t=this.getFoldsInRange(e);return t},this.getAllFolds=function(){var e=[],t=this.$foldData;for(var n=0;n<t.length;n++)for(var r=0;r<t[n].folds.length;r++)e.push(t[n].folds[r]);return e},this.getFoldStringAt=function(e,t,n,r){r=r||this.getFoldLine(e);if(!r)return null;var i={end:{column:0}},s,o;for(var u=0;u<r.folds.length;u++){o=r.folds[u];var a=o.range.compareEnd(e,t);if(a==-1){s=this.getLine(o.start.row).substring(i.end.column,o.start.column);break}if(a===0)return null;i=o}return s||(s=this.getLine(o.start.row).substring(i.end.column)),n==-1?s.substring(0,t-i.end.column):n==1?s.substring(t-i.end.column):s},this.getFoldLine=function(e,t){var n=this.$foldData,r=0;t&&(r=n.indexOf(t)),r==-1&&(r=0);for(r;r<n.length;r++){var i=n[r];if(i.start.row<=e&&i.end.row>=e)return i;if(i.end.row>e)return null}return null},this.getNextFoldLine=function(e,t){var n=this.$foldData,r=0;t&&(r=n.indexOf(t)),r==-1&&(r=0);for(r;r<n.length;r++){var i=n[r];if(i.end.row>=e)return i}return null},this.getFoldedRowCount=function(e,t){var n=this.$foldData,r=t-e+1;for(var i=0;i<n.length;i++){var s=n[i],o=s.end.row,u=s.start.row;if(o>=t){u<t&&(u>=e?r-=t-u:r=0);break}o>=e&&(u>=e?r-=o-u:r-=o-e+1)}return r},this.$addFoldLine=function(e){return this.$foldData.push(e),this.$foldData.sort(function(e,t){return e.start.row-t.start.row}),e},this.addFold=function(e,t){var n=this.$foldData,r=!1,o;e instanceof s?o=e:(o=new s(t,e),o.collapseChildren=t.collapseChildren),this.$clipRangeToDocument(o.range);var u=o.start.row,a=o.start.column,f=o.end.row,l=o.end.column,c=this.getFoldAt(u,a,1),h=this.getFoldAt(f,l,-1);if(c&&h==c)return c.addSubFold(o);c&&!c.range.isStart(u,a)&&this.removeFold(c),h&&!h.range.isEnd(f,l)&&this.removeFold(h);var p=this.getFoldsInRange(o.range);p.length>0&&(this.removeFolds(p),o.collapseChildren||p.forEach(function(e){o.addSubFold(e)}));for(var d=0;d<n.length;d++){var v=n[d];if(f==v.start.row){v.addFold(o),r=!0;break}if(u==v.end.row){v.addFold(o),r=!0;if(!o.sameRow){var m=n[d+1];if(m&&m.start.row==f){v.merge(m);break}}break}if(f<=v.start.row)break}return r||(v=this.$addFoldLine(new i(this.$foldData,o))),this.$useWrapMode?this.$updateWrapData(v.start.row,v.start.row):this.$updateRowLengthCache(v.start.row,v.start.row),this.$modified=!0,this._signal("changeFold",{data:o,action:"add"}),o},this.addFolds=function(e){e.forEach(function(e){this.addFold(e)},this)},this.removeFold=function(e){var t=e.foldLine,n=t.start.row,r=t.end.row,i=this.$foldData,s=t.folds;if(s.length==1)i.splice(i.indexOf(t),1);else if(t.range.isEnd(e.end.row,e.end.column))s.pop(),t.end.row=s[s.length-1].end.row,t.end.column=s[s.length-1].end.column;else if(t.range.isStart(e.start.row,e.start.column))s.shift(),t.start.row=s[0].start.row,t.start.column=s[0].start.column;else if(e.sameRow)s.splice(s.indexOf(e),1);else{var o=t.split(e.start.row,e.start.column);s=o.folds,s.shift(),o.start.row=s[0].start.row,o.start.column=s[0].start.column}this.$updating||(this.$useWrapMode?this.$updateWrapData(n,r):this.$updateRowLengthCache(n,r)),this.$modified=!0,this._signal("changeFold",{data:e,action:"remove"})},this.removeFolds=function(e){var t=[];for(var n=0;n<e.length;n++)t.push(e[n]);t.forEach(function(e){this.removeFold(e)},this),this.$modified=!0},this.expandFold=function(e){this.removeFold(e),e.subFolds.forEach(function(t){e.restoreRange(t),this.addFold(t)},this),e.collapseChildren>0&&this.foldAll(e.start.row+1,e.end.row,e.collapseChildren-1),e.subFolds=[]},this.expandFolds=function(e){e.forEach(function(e){this.expandFold(e)},this)},this.unfold=function(e,t){var n,i;if(e==null)n=new r(0,0,this.getLength(),0),t==null&&(t=!0);else if(typeof e=="number")n=new r(e,0,e,this.getLine(e).length);else if("row"in e)n=r.fromPoints(e,e);else{if(Array.isArray(e))return i=[],e.forEach(function(e){i=i.concat(this.unfold(e))},this),i;n=e}i=this.getFoldsInRangeList(n);var s=i;while(i.length==1&&r.comparePoints(i[0].start,n.start)<0&&r.comparePoints(i[0].end,n.end)>0)this.expandFolds(i),i=this.getFoldsInRangeList(n);t!=0?this.removeFolds(i):this.expandFolds(i);if(s.length)return s},this.isRowFolded=function(e,t){return!!this.getFoldLine(e,t)},this.getRowFoldEnd=function(e,t){var n=this.getFoldLine(e,t);return n?n.end.row:e},this.getRowFoldStart=function(e,t){var n=this.getFoldLine(e,t);return n?n.start.row:e},this.getFoldDisplayLine=function(e,t,n,r,i){r==null&&(r=e.start.row),i==null&&(i=0),t==null&&(t=e.end.row),n==null&&(n=this.getLine(t).length);var s=this.doc,o="";return e.walk(function(e,t,n,u){if(t<r)return;if(t==r){if(n<i)return;u=Math.max(i,u)}e!=null?o+=e:o+=s.getLine(t).substring(u,n)},t,n),o},this.getDisplayLine=function(e,t,n,r){var i=this.getFoldLine(e);if(!i){var s;return s=this.doc.getLine(e),s.substring(r||0,t||s.length)}return this.getFoldDisplayLine(i,e,t,n,r)},this.$cloneFoldData=function(){var e=[];return e=this.$foldData.map(function(t){var n=t.folds.map(function(e){return e.clone()});return new i(e,n)}),e},this.toggleFold=function(e){var t=this.selection,n=t.getRange(),r,i;if(n.isEmpty()){var s=n.start;r=this.getFoldAt(s.row,s.column);if(r){this.expandFold(r);return}(i=this.findMatchingBracket(s))?n.comparePoint(i)==1?n.end=i:(n.start=i,n.start.column++,n.end.column--):(i=this.findMatchingBracket({row:s.row,column:s.column+1}))?(n.comparePoint(i)==1?n.end=i:n.start=i,n.start.column++):n=this.getCommentFoldRange(s.row,s.column)||n}else{var o=this.getFoldsInRange(n);if(e&&o.length){this.expandFolds(o);return}o.length==1&&(r=o[0])}r||(r=this.getFoldAt(n.start.row,n.start.column));if(r&&r.range.toString()==n.toString()){this.expandFold(r);return}var u="...";if(!n.isMultiLine()){u=this.getTextRange(n);if(u.length<4)return;u=u.trim().substring(0,2)+".."}this.addFold(u,n)},this.getCommentFoldRange=function(e,t,n){var i=new o(this,e,t),s=i.getCurrentToken(),u=s&&s.type;if(s&&/^comment|string/.test(u)){u=u.match(/comment|string/)[0],u=="comment"&&(u+="|doc-start");var a=new RegExp(u),f=new r;if(n!=1){do s=i.stepBackward();while(s&&a.test(s.type)&&!/^comment.end/.test(s.type));s=i.stepForward()}f.start.row=i.getCurrentTokenRow(),f.start.column=i.getCurrentTokenColumn()+(/^comment.start/.test(s.type)?s.value.length:2),i=new o(this,e,t);if(n!=-1){var l=-1;do{s=i.stepForward();if(l==-1){var c=this.getState(i.$row);a.test(c)||(l=i.$row)}else if(i.$row>l)break}while(s&&a.test(s.type)&&!/^comment.start/.test(s.type));s=i.stepBackward()}else s=i.getCurrentToken();return f.end.row=i.getCurrentTokenRow(),f.end.column=i.getCurrentTokenColumn(),/^comment.end/.test(s.type)||(f.end.column+=s.value.length-2),f}},this.foldAll=function(e,t,n,r){n==undefined&&(n=1e5);var i=this.foldWidgets;if(!i)return;t=t||this.getLength(),e=e||0;for(var s=e;s<t;s++){i[s]==null&&(i[s]=this.getFoldWidget(s));if(i[s]!="start")continue;if(r&&!r(s))continue;var o=this.getFoldWidgetRange(s);o&&o.isMultiLine()&&o.end.row<=t&&o.start.row>=e&&(s=o.end.row,o.collapseChildren=n,this.addFold("...",o))}},this.foldToLevel=function(e){this.foldAll();while(e-->0)this.unfold(null,!1)},this.foldAllComments=function(){var e=this;this.foldAll(null,null,null,function(t){var n=e.getTokens(t);for(var r=0;r<n.length;r++){var i=n[r];if(i.type=="text"&&/^\s+$/.test(i.value))continue;return/comment/.test(i.type)?!0:!1}})},this.$foldStyles={manual:1,markbegin:1,markbeginend:1},this.$foldStyle="markbegin",this.setFoldStyle=function(e){if(!this.$foldStyles[e])throw new Error("invalid fold style: "+e+"["+Object.keys(this.$foldStyles).join(", ")+"]");if(this.$foldStyle==e)return;this.$foldStyle=e,e=="manual"&&this.unfold();var t=this.$foldMode;this.$setFolding(null),this.$setFolding(t)},this.$setFolding=function(e){if(this.$foldMode==e)return;this.$foldMode=e,this.off("change",this.$updateFoldWidgets),this.off("tokenizerUpdate",this.$tokenizerUpdateFoldWidgets),this._signal("changeAnnotation");if(!e||this.$foldStyle=="manual"){this.foldWidgets=null;return}this.foldWidgets=[],this.getFoldWidget=e.getFoldWidget.bind(e,this,this.$foldStyle),this.getFoldWidgetRange=e.getFoldWidgetRange.bind(e,this,this.$foldStyle),this.$updateFoldWidgets=this.updateFoldWidgets.bind(this),this.$tokenizerUpdateFoldWidgets=this.tokenizerUpdateFoldWidgets.bind(this),this.on("change",this.$updateFoldWidgets),this.on("tokenizerUpdate",this.$tokenizerUpdateFoldWidgets)},this.getParentFoldRangeData=function(e,t){var n=this.foldWidgets;if(!n||t&&n[e])return{};var r=e-1,i;while(r>=0){var s=n[r];s==null&&(s=n[r]=this.getFoldWidget(r));if(s=="start"){var o=this.getFoldWidgetRange(r);i||(i=o);if(o&&o.end.row>=e)break}r--}return{range:r!==-1&&o,firstRange:i}},this.onFoldWidgetClick=function(e,t){t=t.domEvent;var n={children:t.shiftKey,all:t.ctrlKey||t.metaKey,siblings:t.altKey},r=this.$toggleFoldWidget(e,n);if(!r){var i=t.target||t.srcElement;i&&/ace_fold-widget/.test(i.className)&&(i.className+=" ace_invalid")}},this.$toggleFoldWidget=function(e,t){if(!this.getFoldWidget)return;var n=this.getFoldWidget(e),r=this.getLine(e),i=n==="end"?-1:1,s=this.getFoldAt(e,i===-1?0:r.length,i);if(s)return t.children||t.all?this.removeFold(s):this.expandFold(s),s;var o=this.getFoldWidgetRange(e,!0);if(o&&!o.isMultiLine()){s=this.getFoldAt(o.start.row,o.start.column,1);if(s&&o.isEqual(s.range))return this.removeFold(s),s}if(t.siblings){var u=this.getParentFoldRangeData(e);if(u.range)var a=u.range.start.row+1,f=u.range.end.row;this.foldAll(a,f,t.all?1e4:0)}else t.children?(f=o?o.end.row:this.getLength(),this.foldAll(e+1,f,t.all?1e4:0)):o&&(t.all&&(o.collapseChildren=1e4),this.addFold("...",o));return o},this.toggleFoldWidget=function(e){var t=this.selection.getCursor().row;t=this.getRowFoldStart(t);var n=this.$toggleFoldWidget(t,{});if(n)return;var r=this.getParentFoldRangeData(t,!0);n=r.range||r.firstRange;if(n){t=n.start.row;var i=this.getFoldAt(t,this.getLine(t).length,1);i?this.removeFold(i):this.addFold("...",n)}},this.updateFoldWidgets=function(e){var t=e.start.row,n=e.end.row-t;if(n===0)this.foldWidgets[t]=null;else if(e.action=="remove")this.foldWidgets.splice(t,n+1,null);else{var r=Array(n+1);r.unshift(t,1),this.foldWidgets.splice.apply(this.foldWidgets,r)}},this.tokenizerUpdateFoldWidgets=function(e){var t=e.data;t.first!=t.last&&this.foldWidgets.length>t.first&&this.foldWidgets.splice(t.first,this.foldWidgets.length)}}var r=e("../range").Range,i=e("./fold_line").FoldLine,s=e("./fold").Fold,o=e("../token_iterator").TokenIterator;t.Folding=u}),ace.define("ace/edit_session/bracket_match",["require","exports","module","ace/token_iterator","ace/range"],function(e,t,n){"use strict";function s(){this.findMatchingBracket=function(e,t){if(e.column==0)return null;var n=t||this.getLine(e.row).charAt(e.column-1);if(n=="")return null;var r=n.match(/([\(\[\{])|([\)\]\}])/);return r?r[1]?this.$findClosingBracket(r[1],e):this.$findOpeningBracket(r[2],e):null},this.getBracketRange=function(e){var t=this.getLine(e.row),n=!0,r,s=t.charAt(e.column-1),o=s&&s.match(/([\(\[\{])|([\)\]\}])/);o||(s=t.charAt(e.column),e={row:e.row,column:e.column+1},o=s&&s.match(/([\(\[\{])|([\)\]\}])/),n=!1);if(!o)return null;if(o[1]){var u=this.$findClosingBracket(o[1],e);if(!u)return null;r=i.fromPoints(e,u),n||(r.end.column++,r.start.column--),r.cursor=r.end}else{var u=this.$findOpeningBracket(o[2],e);if(!u)return null;r=i.fromPoints(u,e),n||(r.start.column++,r.end.column--),r.cursor=r.start}return r},this.getMatchingBracketRanges=function(e,t){var n=this.getLine(e.row),r=/([\(\[\{])|([\)\]\}])/,s=!t&&n.charAt(e.column-1),o=s&&s.match(r);o||(s=(t===undefined||t)&&n.charAt(e.column),e={row:e.row,column:e.column+1},o=s&&s.match(r));if(!o)return null;var u=new i(e.row,e.column-1,e.row,e.column),a=o[1]?this.$findClosingBracket(o[1],e):this.$findOpeningBracket(o[2],e);if(!a)return[u];var f=new i(a.row,a.column,a.row,a.column+1);return[u,f]},this.$brackets={")":"(","(":")","]":"[","[":"]","{":"}","}":"{","<":">",">":"<"},this.$findOpeningBracket=function(e,t,n){var i=this.$brackets[e],s=1,o=new r(this,t.row,t.column),u=o.getCurrentToken();u||(u=o.stepForward());if(!u)return;n||(n=new RegExp("(\\.?"+u.type.replace(".","\\.").replace("rparen",".paren").replace(/\b(?:end)\b/,"(?:start|begin|end)")+")+"));var a=t.column-o.getCurrentTokenColumn()-2,f=u.value;for(;;){while(a>=0){var l=f.charAt(a);if(l==i){s-=1;if(s==0)return{row:o.getCurrentTokenRow(),column:a+o.getCurrentTokenColumn()}}else l==e&&(s+=1);a-=1}do u=o.stepBackward();while(u&&!n.test(u.type));if(u==null)break;f=u.value,a=f.length-1}return null},this.$findClosingBracket=function(e,t,n){var i=this.$brackets[e],s=1,o=new r(this,t.row,t.column),u=o.getCurrentToken();u||(u=o.stepForward());if(!u)return;n||(n=new RegExp("(\\.?"+u.type.replace(".","\\.").replace("lparen",".paren").replace(/\b(?:start|begin)\b/,"(?:start|begin|end)")+")+"));var a=t.column-o.getCurrentTokenColumn();for(;;){var f=u.value,l=f.length;while(a<l){var c=f.charAt(a);if(c==i){s-=1;if(s==0)return{row:o.getCurrentTokenRow(),column:a+o.getCurrentTokenColumn()}}else c==e&&(s+=1);a+=1}do u=o.stepForward();while(u&&!n.test(u.type));if(u==null)break;a=0}return null},this.getMatchingTags=function(e){var t=new r(this,e.row,e.column),n=this.$findTagName(t);if(!n)return;var i=t.stepBackward();return i.value==="<"?this.$findClosingTag(t,n):this.$findOpeningTag(t,n)},this.$findTagName=function(e){var t=e.getCurrentToken(),n=!1,r=!1;if(t&&t.type.indexOf("tag-name")===-1)do r?t=e.stepBackward():t=e.stepForward(),t&&(t.value==="/>"?r=!0:t.type.indexOf("tag-name")!==-1&&(n=!0));while(t&&!n);return t},this.$findClosingTag=function(e,t){var n,r=t.value,s=t.value,o=0,u=new i(e.getCurrentTokenRow(),e.getCurrentTokenColumn(),e.getCurrentTokenRow(),e.getCurrentTokenColumn()+1);t=e.stepForward();var a=new i(e.getCurrentTokenRow(),e.getCurrentTokenColumn(),e.getCurrentTokenRow(),e.getCurrentTokenColumn()+t.value.length),f=!1;do{n=t,t=e.stepForward();if(t){if(t.value===">"&&!f){var l=new i(e.getCurrentTokenRow(),e.getCurrentTokenColumn(),e.getCurrentTokenRow(),e.getCurrentTokenColumn()+1);f=!0}if(t.type.indexOf("tag-name")!==-1){r=t.value;if(s===r)if(n.value==="<")o++;else if(n.value==="</"){o--;if(o<0){e.stepBackward();var c=new i(e.getCurrentTokenRow(),e.getCurrentTokenColumn(),e.getCurrentTokenRow(),e.getCurrentTokenColumn()+2);t=e.stepForward();var h=new i(e.getCurrentTokenRow(),e.getCurrentTokenColumn(),e.getCurrentTokenRow(),e.getCurrentTokenColumn()+t.value.length);t=e.stepForward();if(!t||t.value!==">")return;var p=new i(e.getCurrentTokenRow(),e.getCurrentTokenColumn(),e.getCurrentTokenRow(),e.getCurrentTokenColumn()+1)}}}else if(s===r&&t.value==="/>"){o--;if(o<0)var c=new i(e.getCurrentTokenRow(),e.getCurrentTokenColumn(),e.getCurrentTokenRow(),e.getCurrentTokenColumn()+2),h=c,p=h,l=new i(a.end.row,a.end.column,a.end.row,a.end.column+1)}}}while(t&&o>=0);if(u&&l&&c&&p&&a&&h)return{openTag:new i(u.start.row,u.start.column,l.end.row,l.end.column),closeTag:new i(c.start.row,c.start.column,p.end.row,p.end.column),openTagName:a,closeTagName:h}},this.$findOpeningTag=function(e,t){var n=e.getCurrentToken(),r=t.value,s=0,o=e.getCurrentTokenRow(),u=e.getCurrentTokenColumn(),a=u+2,f=new i(o,u,o,a);e.stepForward();var l=new i(e.getCurrentTokenRow(),e.getCurrentTokenColumn(),e.getCurrentTokenRow(),e.getCurrentTokenColumn()+t.value.length);t=e.stepForward();if(!t||t.value!==">")return;var c=new i(e.getCurrentTokenRow(),e.getCurrentTokenColumn(),e.getCurrentTokenRow(),e.getCurrentTokenColumn()+1);e.stepBackward(),e.stepBackward();do{t=n,o=e.getCurrentTokenRow(),u=e.getCurrentTokenColumn(),a=u+t.value.length,n=e.stepBackward();if(t)if(t.type.indexOf("tag-name")!==-1){if(r===t.value)if(n.value==="<"){s++;if(s>0){var h=new i(o,u,o,a),p=new i(e.getCurrentTokenRow(),e.getCurrentTokenColumn(),e.getCurrentTokenRow(),e.getCurrentTokenColumn()+1);do t=e.stepForward();while(t&&t.value!==">");var d=new i(e.getCurrentTokenRow(),e.getCurrentTokenColumn(),e.getCurrentTokenRow(),e.getCurrentTokenColumn()+1)}}else n.value==="</"&&s--}else if(t.value==="/>"){var v=0,m=n;while(m){if(m.type.indexOf("tag-name")!==-1&&m.value===r){s--;break}if(m.value==="<")break;m=e.stepBackward(),v++}for(var g=0;g<v;g++)e.stepForward()}}while(n&&s<=0);if(p&&d&&f&&c&&h&&l)return{openTag:new i(p.start.row,p.start.column,d.end.row,d.end.column),closeTag:new i(f.start.row,f.start.column,c.end.row,c.end.column),openTagName:h,closeTagName:l}}}var r=e("../token_iterator").TokenIterator,i=e("../range").Range;t.BracketMatch=s}),ace.define("ace/edit_session",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/bidihandler","ace/config","ace/lib/event_emitter","ace/selection","ace/mode/text","ace/range","ace/document","ace/background_tokenizer","ace/search_highlight","ace/edit_session/folding","ace/edit_session/bracket_match"],function(e,t,n){"use strict";var r=e("./lib/oop"),i=e("./lib/lang"),s=e("./bidihandler").BidiHandler,o=e("./config"),u=e("./lib/event_emitter").EventEmitter,a=e("./selection").Selection,f=e("./mode/text").Mode,l=e("./range").Range,c=e("./document").Document,h=e("./background_tokenizer").BackgroundTokenizer,p=e("./search_highlight").SearchHighlight,d=function(e,t){this.$breakpoints=[],this.$decorations=[],this.$frontMarkers={},this.$backMarkers={},this.$markerId=1,this.$undoSelect=!0,this.$foldData=[],this.id="session"+ ++d.$uid,this.$foldData.toString=function(){return this.join("\n")},this.bgTokenizer=new h((new f).getTokenizer(),this);var n=this;this.bgTokenizer.on("update",function(e){n._signal("tokenizerUpdate",e)}),this.on("changeFold",this.onChangeFold.bind(this)),this.$onChange=this.onChange.bind(this);if(typeof e!="object"||!e.getLine)e=new c(e);this.setDocument(e),this.selection=new a(this),this.$bidiHandler=new s(this),o.resetOptions(this),this.setMode(t),o._signal("session",this),this.destroyed=!1};d.$uid=0,function(){function v(e){return e<4352?!1:e>=4352&&e<=4447||e>=4515&&e<=4519||e>=4602&&e<=4607||e>=9001&&e<=9002||e>=11904&&e<=11929||e>=11931&&e<=12019||e>=12032&&e<=12245||e>=12272&&e<=12283||e>=12288&&e<=12350||e>=12353&&e<=12438||e>=12441&&e<=12543||e>=12549&&e<=12589||e>=12593&&e<=12686||e>=12688&&e<=12730||e>=12736&&e<=12771||e>=12784&&e<=12830||e>=12832&&e<=12871||e>=12880&&e<=13054||e>=13056&&e<=19903||e>=19968&&e<=42124||e>=42128&&e<=42182||e>=43360&&e<=43388||e>=44032&&e<=55203||e>=55216&&e<=55238||e>=55243&&e<=55291||e>=63744&&e<=64255||e>=65040&&e<=65049||e>=65072&&e<=65106||e>=65108&&e<=65126||e>=65128&&e<=65131||e>=65281&&e<=65376||e>=65504&&e<=65510}r.implement(this,u),this.setDocument=function(e){this.doc&&this.doc.off("change",this.$onChange),this.doc=e,e.on("change",this.$onChange,!0),this.bgTokenizer.setDocument(this.getDocument()),this.resetCaches()},this.getDocument=function(){return this.doc},this.$resetRowCache=function(e){if(!e){this.$docRowCache=[],this.$screenRowCache=[];return}var t=this.$docRowCache.length,n=this.$getRowCacheIndex(this.$docRowCache,e)+1;t>n&&(this.$docRowCache.splice(n,t),this.$screenRowCache.splice(n,t))},this.$getRowCacheIndex=function(e,t){var n=0,r=e.length-1;while(n<=r){var i=n+r>>1,s=e[i];if(t>s)n=i+1;else{if(!(t<s))return i;r=i-1}}return n-1},this.resetCaches=function(){this.$modified=!0,this.$wrapData=[],this.$rowLengthCache=[],this.$resetRowCache(0),this.destroyed||this.bgTokenizer.start(0)},this.onChangeFold=function(e){var t=e.data;this.$resetRowCache(t.start.row)},this.onChange=function(e){this.$modified=!0,this.$bidiHandler.onChange(e),this.$resetRowCache(e.start.row);var t=this.$updateInternalDataOnChange(e);!this.$fromUndo&&this.$undoManager&&(t&&t.length&&(this.$undoManager.add({action:"removeFolds",folds:t},this.mergeUndoDeltas),this.mergeUndoDeltas=!0),this.$undoManager.add(e,this.mergeUndoDeltas),this.mergeUndoDeltas=!0,this.$informUndoManager.schedule()),this.bgTokenizer.$updateOnChange(e),this._signal("change",e)},this.setValue=function(e){this.doc.setValue(e),this.selection.moveTo(0,0),this.$resetRowCache(0),this.setUndoManager(this.$undoManager),this.getUndoManager().reset()},this.getValue=this.toString=function(){return this.doc.getValue()},this.getSelection=function(){return this.selection},this.getState=function(e){return this.bgTokenizer.getState(e)},this.getTokens=function(e){return this.bgTokenizer.getTokens(e)},this.getTokenAt=function(e,t){var n=this.bgTokenizer.getTokens(e),r,i=0;if(t==null){var s=n.length-1;i=this.getLine(e).length}else for(var s=0;s<n.length;s++){i+=n[s].value.length;if(i>=t)break}return r=n[s],r?(r.index=s,r.start=i-r.value.length,r):null},this.setUndoManager=function(e){this.$undoManager=e,this.$informUndoManager&&this.$informUndoManager.cancel();if(e){var t=this;e.addSession(this),this.$syncInformUndoManager=function(){t.$informUndoManager.cancel(),t.mergeUndoDeltas=!1},this.$informUndoManager=i.delayedCall(this.$syncInformUndoManager)}else this.$syncInformUndoManager=function(){}},this.markUndoGroup=function(){this.$syncInformUndoManager&&this.$syncInformUndoManager()},this.$defaultUndoManager={undo:function(){},redo:function(){},hasUndo:function(){},hasRedo:function(){},reset:function(){},add:function(){},addSelection:function(){},startNewGroup:function(){},addSession:function(){}},this.getUndoManager=function(){return this.$undoManager||this.$defaultUndoManager},this.getTabString=function(){return this.getUseSoftTabs()?i.stringRepeat(" ",this.getTabSize()):"	"},this.setUseSoftTabs=function(e){this.setOption("useSoftTabs",e)},this.getUseSoftTabs=function(){return this.$useSoftTabs&&!this.$mode.$indentWithTabs},this.setTabSize=function(e){this.setOption("tabSize",e)},this.getTabSize=function(){return this.$tabSize},this.isTabStop=function(e){return this.$useSoftTabs&&e.column%this.$tabSize===0},this.setNavigateWithinSoftTabs=function(e){this.setOption("navigateWithinSoftTabs",e)},this.getNavigateWithinSoftTabs=function(){return this.$navigateWithinSoftTabs},this.$overwrite=!1,this.setOverwrite=function(e){this.setOption("overwrite",e)},this.getOverwrite=function(){return this.$overwrite},this.toggleOverwrite=function(){this.setOverwrite(!this.$overwrite)},this.addGutterDecoration=function(e,t){this.$decorations[e]||(this.$decorations[e]=""),this.$decorations[e]+=" "+t,this._signal("changeBreakpoint",{})},this.removeGutterDecoration=function(e,t){this.$decorations[e]=(this.$decorations[e]||"").replace(" "+t,""),this._signal("changeBreakpoint",{})},this.getBreakpoints=function(){return this.$breakpoints},this.setBreakpoints=function(e){this.$breakpoints=[];for(var t=0;t<e.length;t++)this.$breakpoints[e[t]]="ace_breakpoint";this._signal("changeBreakpoint",{})},this.clearBreakpoints=function(){this.$breakpoints=[],this._signal("changeBreakpoint",{})},this.setBreakpoint=function(e,t){t===undefined&&(t="ace_breakpoint"),t?this.$breakpoints[e]=t:delete this.$breakpoints[e],this._signal("changeBreakpoint",{})},this.clearBreakpoint=function(e){delete this.$breakpoints[e],this._signal("changeBreakpoint",{})},this.addMarker=function(e,t,n,r){var i=this.$markerId++,s={range:e,type:n||"line",renderer:typeof n=="function"?n:null,clazz:t,inFront:!!r,id:i};return r?(this.$frontMarkers[i]=s,this._signal("changeFrontMarker")):(this.$backMarkers[i]=s,this._signal("changeBackMarker")),i},this.addDynamicMarker=function(e,t){if(!e.update)return;var n=this.$markerId++;return e.id=n,e.inFront=!!t,t?(this.$frontMarkers[n]=e,this._signal("changeFrontMarker")):(this.$backMarkers[n]=e,this._signal("changeBackMarker")),e},this.removeMarker=function(e){var t=this.$frontMarkers[e]||this.$backMarkers[e];if(!t)return;var n=t.inFront?this.$frontMarkers:this.$backMarkers;delete n[e],this._signal(t.inFront?"changeFrontMarker":"changeBackMarker")},this.getMarkers=function(e){return e?this.$frontMarkers:this.$backMarkers},this.highlight=function(e){if(!this.$searchHighlight){var t=new p(null,"ace_selected-word","text");this.$searchHighlight=this.addDynamicMarker(t)}this.$searchHighlight.setRegexp(e)},this.highlightLines=function(e,t,n,r){typeof t!="number"&&(n=t,t=e),n||(n="ace_step");var i=new l(e,0,t,Infinity);return i.id=this.addMarker(i,n,"fullLine",r),i},this.setAnnotations=function(e){this.$annotations=e,this._signal("changeAnnotation",{})},this.getAnnotations=function(){return this.$annotations||[]},this.clearAnnotations=function(){this.setAnnotations([])},this.$detectNewLine=function(e){var t=e.match(/^.*?(\r?\n)/m);t?this.$autoNewLine=t[1]:this.$autoNewLine="\n"},this.getWordRange=function(e,t){var n=this.getLine(e),r=!1;t>0&&(r=!!n.charAt(t-1).match(this.tokenRe)),r||(r=!!n.charAt(t).match(this.tokenRe));if(r)var i=this.tokenRe;else if(/^\s+$/.test(n.slice(t-1,t+1)))var i=/\s/;else var i=this.nonTokenRe;var s=t;if(s>0){do s--;while(s>=0&&n.charAt(s).match(i));s++}var o=t;while(o<n.length&&n.charAt(o).match(i))o++;return new l(e,s,e,o)},this.getAWordRange=function(e,t){var n=this.getWordRange(e,t),r=this.getLine(n.end.row);while(r.charAt(n.end.column).match(/[ \t]/))n.end.column+=1;return n},this.setNewLineMode=function(e){this.doc.setNewLineMode(e)},this.getNewLineMode=function(){return this.doc.getNewLineMode()},this.setUseWorker=function(e){this.setOption("useWorker",e)},this.getUseWorker=function(){return this.$useWorker},this.onReloadTokenizer=function(e){var t=e.data;this.bgTokenizer.start(t.first),this._signal("tokenizerUpdate",e)},this.$modes=o.$modes,this.$mode=null,this.$modeId=null,this.setMode=function(e,t){if(e&&typeof e=="object"){if(e.getTokenizer)return this.$onChangeMode(e);var n=e,r=n.path}else r=e||"ace/mode/text";this.$modes["ace/mode/text"]||(this.$modes["ace/mode/text"]=new f);if(this.$modes[r]&&!n){this.$onChangeMode(this.$modes[r]),t&&t();return}this.$modeId=r,o.loadModule(["mode",r],function(e){if(this.$modeId!==r)return t&&t();this.$modes[r]&&!n?this.$onChangeMode(this.$modes[r]):e&&e.Mode&&(e=new e.Mode(n),n||(this.$modes[r]=e,e.$id=r),this.$onChangeMode(e)),t&&t()}.bind(this)),this.$mode||this.$onChangeMode(this.$modes["ace/mode/text"],!0)},this.$onChangeMode=function(e,t){t||(this.$modeId=e.$id);if(this.$mode===e)return;var n=this.$mode;this.$mode=e,this.$stopWorker(),this.$useWorker&&this.$startWorker();var r=e.getTokenizer();if(r.on!==undefined){var i=this.onReloadTokenizer.bind(this);r.on("update",i)}this.bgTokenizer.setTokenizer(r),this.bgTokenizer.setDocument(this.getDocument()),this.tokenRe=e.tokenRe,this.nonTokenRe=e.nonTokenRe,t||(e.attachToSession&&e.attachToSession(this),this.$options.wrapMethod.set.call(this,this.$wrapMethod),this.$setFolding(e.foldingRules),this.bgTokenizer.start(0),this._emit("changeMode",{oldMode:n,mode:e}))},this.$stopWorker=function(){this.$worker&&(this.$worker.terminate(),this.$worker=null)},this.$startWorker=function(){try{this.$worker=this.$mode.createWorker(this)}catch(e){o.warn("Could not load worker",e),this.$worker=null}},this.getMode=function(){return this.$mode},this.$scrollTop=0,this.setScrollTop=function(e){if(this.$scrollTop===e||isNaN(e))return;this.$scrollTop=e,this._signal("changeScrollTop",e)},this.getScrollTop=function(){return this.$scrollTop},this.$scrollLeft=0,this.setScrollLeft=function(e){if(this.$scrollLeft===e||isNaN(e))return;this.$scrollLeft=e,this._signal("changeScrollLeft",e)},this.getScrollLeft=function(){return this.$scrollLeft},this.getScreenWidth=function(){return this.$computeWidth(),this.lineWidgets?Math.max(this.getLineWidgetMaxWidth(),this.screenWidth):this.screenWidth},this.getLineWidgetMaxWidth=function(){if(this.lineWidgetsWidth!=null)return this.lineWidgetsWidth;var e=0;return this.lineWidgets.forEach(function(t){t&&t.screenWidth>e&&(e=t.screenWidth)}),this.lineWidgetWidth=e},this.$computeWidth=function(e){if(this.$modified||e){this.$modified=!1;if(this.$useWrapMode)return this.screenWidth=this.$wrapLimit;var t=this.doc.getAllLines(),n=this.$rowLengthCache,r=0,i=0,s=this.$foldData[i],o=s?s.start.row:Infinity,u=t.length;for(var a=0;a<u;a++){if(a>o){a=s.end.row+1;if(a>=u)break;s=this.$foldData[i++],o=s?s.start.row:Infinity}n[a]==null&&(n[a]=this.$getStringScreenWidth(t[a])[0]),n[a]>r&&(r=n[a])}this.screenWidth=r}},this.getLine=function(e){return this.doc.getLine(e)},this.getLines=function(e,t){return this.doc.getLines(e,t)},this.getLength=function(){return this.doc.getLength()},this.getTextRange=function(e){return this.doc.getTextRange(e||this.selection.getRange())},this.insert=function(e,t){return this.doc.insert(e,t)},this.remove=function(e){return this.doc.remove(e)},this.removeFullLines=function(e,t){return this.doc.removeFullLines(e,t)},this.undoChanges=function(e,t){if(!e.length)return;this.$fromUndo=!0;for(var n=e.length-1;n!=-1;n--){var r=e[n];r.action=="insert"||r.action=="remove"?this.doc.revertDelta(r):r.folds&&this.addFolds(r.folds)}!t&&this.$undoSelect&&(e.selectionBefore?this.selection.fromJSON(e.selectionBefore):this.selection.setRange(this.$getUndoSelection(e,!0))),this.$fromUndo=!1},this.redoChanges=function(e,t){if(!e.length)return;this.$fromUndo=!0;for(var n=0;n<e.length;n++){var r=e[n];(r.action=="insert"||r.action=="remove")&&this.doc.$safeApplyDelta(r)}!t&&this.$undoSelect&&(e.selectionAfter?this.selection.fromJSON(e.selectionAfter):this.selection.setRange(this.$getUndoSelection(e,!1))),this.$fromUndo=!1},this.setUndoSelect=function(e){this.$undoSelect=e},this.$getUndoSelection=function(e,t){function n(e){return t?e.action!=="insert":e.action==="insert"}var r,i;for(var s=0;s<e.length;s++){var o=e[s];if(!o.start)continue;if(!r){n(o)?r=l.fromPoints(o.start,o.end):r=l.fromPoints(o.start,o.start);continue}n(o)?(i=o.start,r.compare(i.row,i.column)==-1&&r.setStart(i),i=o.end,r.compare(i.row,i.column)==1&&r.setEnd(i)):(i=o.start,r.compare(i.row,i.column)==-1&&(r=l.fromPoints(o.start,o.start)))}return r},this.replace=function(e,t){return this.doc.replace(e,t)},this.moveText=function(e,t,n){var r=this.getTextRange(e),i=this.getFoldsInRange(e),s=l.fromPoints(t,t);if(!n){this.remove(e);var o=e.start.row-e.end.row,u=o?-e.end.column:e.start.column-e.end.column;u&&(s.start.row==e.end.row&&s.start.column>e.end.column&&(s.start.column+=u),s.end.row==e.end.row&&s.end.column>e.end.column&&(s.end.column+=u)),o&&s.start.row>=e.end.row&&(s.start.row+=o,s.end.row+=o)}s.end=this.insert(s.start,r);if(i.length){var a=e.start,f=s.start,o=f.row-a.row,u=f.column-a.column;this.addFolds(i.map(function(e){return e=e.clone(),e.start.row==a.row&&(e.start.column+=u),e.end.row==a.row&&(e.end.column+=u),e.start.row+=o,e.end.row+=o,e}))}return s},this.indentRows=function(e,t,n){n=n.replace(/\t/g,this.getTabString());for(var r=e;r<=t;r++)this.doc.insertInLine({row:r,column:0},n)},this.outdentRows=function(e){var t=e.collapseRows(),n=new l(0,0,0,0),r=this.getTabSize();for(var i=t.start.row;i<=t.end.row;++i){var s=this.getLine(i);n.start.row=i,n.end.row=i;for(var o=0;o<r;++o)if(s.charAt(o)!=" ")break;o<r&&s.charAt(o)=="	"?(n.start.column=o,n.end.column=o+1):(n.start.column=0,n.end.column=o),this.remove(n)}},this.$moveLines=function(e,t,n){e=this.getRowFoldStart(e),t=this.getRowFoldEnd(t);if(n<0){var r=this.getRowFoldStart(e+n);if(r<0)return 0;var i=r-e}else if(n>0){var r=this.getRowFoldEnd(t+n);if(r>this.doc.getLength()-1)return 0;var i=r-t}else{e=this.$clipRowToDocument(e),t=this.$clipRowToDocument(t);var i=t-e+1}var s=new l(e,0,t,Number.MAX_VALUE),o=this.getFoldsInRange(s).map(function(e){return e=e.clone(),e.start.row+=i,e.end.row+=i,e}),u=n==0?this.doc.getLines(e,t):this.doc.removeFullLines(e,t);return this.doc.insertFullLines(e+i,u),o.length&&this.addFolds(o),i},this.moveLinesUp=function(e,t){return this.$moveLines(e,t,-1)},this.moveLinesDown=function(e,t){return this.$moveLines(e,t,1)},this.duplicateLines=function(e,t){return this.$moveLines(e,t,0)},this.$clipRowToDocument=function(e){return Math.max(0,Math.min(e,this.doc.getLength()-1))},this.$clipColumnToRow=function(e,t){return t<0?0:Math.min(this.doc.getLine(e).length,t)},this.$clipPositionToDocument=function(e,t){t=Math.max(0,t);if(e<0)e=0,t=0;else{var n=this.doc.getLength();e>=n?(e=n-1,t=this.doc.getLine(n-1).length):t=Math.min(this.doc.getLine(e).length,t)}return{row:e,column:t}},this.$clipRangeToDocument=function(e){e.start.row<0?(e.start.row=0,e.start.column=0):e.start.column=this.$clipColumnToRow(e.start.row,e.start.column);var t=this.doc.getLength()-1;return e.end.row>t?(e.end.row=t,e.end.column=this.doc.getLine(t).length):e.end.column=this.$clipColumnToRow(e.end.row,e.end.column),e},this.$wrapLimit=80,this.$useWrapMode=!1,this.$wrapLimitRange={min:null,max:null},this.setUseWrapMode=function(e){if(e!=this.$useWrapMode){this.$useWrapMode=e,this.$modified=!0,this.$resetRowCache(0);if(e){var t=this.getLength();this.$wrapData=Array(t),this.$updateWrapData(0,t-1)}this._signal("changeWrapMode")}},this.getUseWrapMode=function(){return this.$useWrapMode},this.setWrapLimitRange=function(e,t){if(this.$wrapLimitRange.min!==e||this.$wrapLimitRange.max!==t)this.$wrapLimitRange={min:e,max:t},this.$modified=!0,this.$bidiHandler.markAsDirty(),this.$useWrapMode&&this._signal("changeWrapMode")},this.adjustWrapLimit=function(e,t){var n=this.$wrapLimitRange;n.max<0&&(n={min:t,max:t});var r=this.$constrainWrapLimit(e,n.min,n.max);return r!=this.$wrapLimit&&r>1?(this.$wrapLimit=r,this.$modified=!0,this.$useWrapMode&&(this.$updateWrapData(0,this.getLength()-1),this.$resetRowCache(0),this._signal("changeWrapLimit")),!0):!1},this.$constrainWrapLimit=function(e,t,n){return t&&(e=Math.max(t,e)),n&&(e=Math.min(n,e)),e},this.getWrapLimit=function(){return this.$wrapLimit},this.setWrapLimit=function(e){this.setWrapLimitRange(e,e)},this.getWrapLimitRange=function(){return{min:this.$wrapLimitRange.min,max:this.$wrapLimitRange.max}},this.$updateInternalDataOnChange=function(e){var t=this.$useWrapMode,n=e.action,r=e.start,i=e.end,s=r.row,o=i.row,u=o-s,a=null;this.$updating=!0;if(u!=0)if(n==="remove"){this[t?"$wrapData":"$rowLengthCache"].splice(s,u);var f=this.$foldData;a=this.getFoldsInRange(e),this.removeFolds(a);var l=this.getFoldLine(i.row),c=0;if(l){l.addRemoveChars(i.row,i.column,r.column-i.column),l.shiftRow(-u);var h=this.getFoldLine(s);h&&h!==l&&(h.merge(l),l=h),c=f.indexOf(l)+1}for(c;c<f.length;c++){var l=f[c];l.start.row>=i.row&&l.shiftRow(-u)}o=s}else{var p=Array(u);p.unshift(s,0);var d=t?this.$wrapData:this.$rowLengthCache;d.splice.apply(d,p);var f=this.$foldData,l=this.getFoldLine(s),c=0;if(l){var v=l.range.compareInside(r.row,r.column);v==0?(l=l.split(r.row,r.column),l&&(l.shiftRow(u),l.addRemoveChars(o,0,i.column-r.column))):v==-1&&(l.addRemoveChars(s,0,i.column-r.column),l.shiftRow(u)),c=f.indexOf(l)+1}for(c;c<f.length;c++){var l=f[c];l.start.row>=s&&l.shiftRow(u)}}else{u=Math.abs(e.start.column-e.end.column),n==="remove"&&(a=this.getFoldsInRange(e),this.removeFolds(a),u=-u);var l=this.getFoldLine(s);l&&l.addRemoveChars(s,r.column,u)}return t&&this.$wrapData.length!=this.doc.getLength()&&console.error("doc.getLength() and $wrapData.length have to be the same!"),this.$updating=!1,t?this.$updateWrapData(s,o):this.$updateRowLengthCache(s,o),a},this.$updateRowLengthCache=function(e,t,n){this.$rowLengthCache[e]=null,this.$rowLengthCache[t]=null},this.$updateWrapData=function(e,t){var r=this.doc.getAllLines(),i=this.getTabSize(),o=this.$wrapData,u=this.$wrapLimit,a,f,l=e;t=Math.min(t,r.length-1);while(l<=t)f=this.getFoldLine(l,f),f?(a=[],f.walk(function(e,t,i,o){var u;if(e!=null){u=this.$getDisplayTokens(e,a.length),u[0]=n;for(var f=1;f<u.length;f++)u[f]=s}else u=this.$getDisplayTokens(r[t].substring(o,i),a.length);a=a.concat(u)}.bind(this),f.end.row,r[f.end.row].length+1),o[f.start.row]=this.$computeWrapSplits(a,u,i),l=f.end.row+1):(a=this.$getDisplayTokens(r[l]),o[l]=this.$computeWrapSplits(a,u,i),l++)};var e=1,t=2,n=3,s=4,a=9,c=10,h=11,d=12;this.$computeWrapSplits=function(e,r,i){function g(){var t=0;if(m===0)return t;if(v)for(var n=0;n<e.length;n++){var r=e[n];if(r==c)t+=1;else{if(r!=h){if(r==d)continue;break}t+=i}}return p&&v!==!1&&(t+=i),Math.min(t,m)}function y(t){var n=t-f;for(var r=f;r<t;r++){var i=e[r];if(i===12||i===2)n-=1}o.length||(b=g(),o.indent=b),l+=n,o.push(l),f=t}if(e.length==0)return[];var o=[],u=e.length,f=0,l=0,p=this.$wrapAsCode,v=this.$indentedSoftWrap,m=r<=Math.max(2*i,8)||v===!1?0:Math.floor(r/2),b=0;while(u-f>r-b){var w=f+r-b;if(e[w-1]>=c&&e[w]>=c){y(w);continue}if(e[w]==n||e[w]==s){for(w;w!=f-1;w--)if(e[w]==n)break;if(w>f){y(w);continue}w=f+r;for(w;w<e.length;w++)if(e[w]!=s)break;if(w==e.length)break;y(w);continue}var E=Math.max(w-(r-(r>>2)),f-1);while(w>E&&e[w]<n)w--;if(p){while(w>E&&e[w]<n)w--;while(w>E&&e[w]==a)w--}else while(w>E&&e[w]<c)w--;if(w>E){y(++w);continue}w=f+r,e[w]==t&&w--,y(w-b)}return o},this.$getDisplayTokens=function(n,r){var i=[],s;r=r||0;for(var o=0;o<n.length;o++){var u=n.charCodeAt(o);if(u==9){s=this.getScreenTabSize(i.length+r),i.push(h);for(var f=1;f<s;f++)i.push(d)}else u==32?i.push(c):u>39&&u<48||u>57&&u<64?i.push(a):u>=4352&&v(u)?i.push(e,t):i.push(e)}return i},this.$getStringScreenWidth=function(e,t,n){if(t==0)return[0,0];t==null&&(t=Infinity),n=n||0;var r,i;for(i=0;i<e.length;i++){r=e.charCodeAt(i),r==9?n+=this.getScreenTabSize(n):r>=4352&&v(r)?n+=2:n+=1;if(n>t)break}return[n,i]},this.lineWidgets=null,this.getRowLength=function(e){var t=1;return this.lineWidgets&&(t+=this.lineWidgets[e]&&this.lineWidgets[e].rowCount||0),!this.$useWrapMode||!this.$wrapData[e]?t:this.$wrapData[e].length+t},this.getRowLineCount=function(e){return!this.$useWrapMode||!this.$wrapData[e]?1:this.$wrapData[e].length+1},this.getRowWrapIndent=function(e){if(this.$useWrapMode){var t=this.screenToDocumentPosition(e,Number.MAX_VALUE),n=this.$wrapData[t.row];return n.length&&n[0]<t.column?n.indent:0}return 0},this.getScreenLastRowColumn=function(e){var t=this.screenToDocumentPosition(e,Number.MAX_VALUE);return this.documentToScreenColumn(t.row,t.column)},this.getDocumentLastRowColumn=function(e,t){var n=this.documentToScreenRow(e,t);return this.getScreenLastRowColumn(n)},this.getDocumentLastRowColumnPosition=function(e,t){var n=this.documentToScreenRow(e,t);return this.screenToDocumentPosition(n,Number.MAX_VALUE/10)},this.getRowSplitData=function(e){return this.$useWrapMode?this.$wrapData[e]:undefined},this.getScreenTabSize=function(e){return this.$tabSize-(e%this.$tabSize|0)},this.screenToDocumentRow=function(e,t){return this.screenToDocumentPosition(e,t).row},this.screenToDocumentColumn=function(e,t){return this.screenToDocumentPosition(e,t).column},this.screenToDocumentPosition=function(e,t,n){if(e<0)return{row:0,column:0};var r,i=0,s=0,o,u=0,a=0,f=this.$screenRowCache,l=this.$getRowCacheIndex(f,e),c=f.length;if(c&&l>=0)var u=f[l],i=this.$docRowCache[l],h=e>f[c-1];else var h=!c;var p=this.getLength()-1,d=this.getNextFoldLine(i),v=d?d.start.row:Infinity;while(u<=e){a=this.getRowLength(i);if(u+a>e||i>=p)break;u+=a,i++,i>v&&(i=d.end.row+1,d=this.getNextFoldLine(i,d),v=d?d.start.row:Infinity),h&&(this.$docRowCache.push(i),this.$screenRowCache.push(u))}if(d&&d.start.row<=i)r=this.getFoldDisplayLine(d),i=d.start.row;else{if(u+a<=e||i>p)return{row:p,column:this.getLine(p).length};r=this.getLine(i),d=null}var m=0,g=Math.floor(e-u);if(this.$useWrapMode){var y=this.$wrapData[i];y&&(o=y[g],g>0&&y.length&&(m=y.indent,s=y[g-1]||y[y.length-1],r=r.substring(s)))}return n!==undefined&&this.$bidiHandler.isBidiRow(u+g,i,g)&&(t=this.$bidiHandler.offsetToCol(n)),s+=this.$getStringScreenWidth(r,t-m)[1],this.$useWrapMode&&s>=o&&(s=o-1),d?d.idxToPosition(s):{row:i,column:s}},this.documentToScreenPosition=function(e,t){if(typeof t=="undefined")var n=this.$clipPositionToDocument(e.row,e.column);else n=this.$clipPositionToDocument(e,t);e=n.row,t=n.column;var r=0,i=null,s=null;s=this.getFoldAt(e,t,1),s&&(e=s.start.row,t=s.start.column);var o,u=0,a=this.$docRowCache,f=this.$getRowCacheIndex(a,e),l=a.length;if(l&&f>=0)var u=a[f],r=this.$screenRowCache[f],c=e>a[l-1];else var c=!l;var h=this.getNextFoldLine(u),p=h?h.start.row:Infinity;while(u<e){if(u>=p){o=h.end.row+1;if(o>e)break;h=this.getNextFoldLine(o,h),p=h?h.start.row:Infinity}else o=u+1;r+=this.getRowLength(u),u=o,c&&(this.$docRowCache.push(u),this.$screenRowCache.push(r))}var d="";h&&u>=p?(d=this.getFoldDisplayLine(h,e,t),i=h.start.row):(d=this.getLine(e).substring(0,t),i=e);var v=0;if(this.$useWrapMode){var m=this.$wrapData[i];if(m){var g=0;while(d.length>=m[g])r++,g++;d=d.substring(m[g-1]||0,d.length),v=g>0?m.indent:0}}return this.lineWidgets&&this.lineWidgets[u]&&this.lineWidgets[u].rowsAbove&&(r+=this.lineWidgets[u].rowsAbove),{row:r,column:v+this.$getStringScreenWidth(d)[0]}},this.documentToScreenColumn=function(e,t){return this.documentToScreenPosition(e,t).column},this.documentToScreenRow=function(e,t){return this.documentToScreenPosition(e,t).row},this.getScreenLength=function(){var e=0,t=null;if(!this.$useWrapMode){e=this.getLength();var n=this.$foldData;for(var r=0;r<n.length;r++)t=n[r],e-=t.end.row-t.start.row}else{var i=this.$wrapData.length,s=0,r=0,t=this.$foldData[r++],o=t?t.start.row:Infinity;while(s<i){var u=this.$wrapData[s];e+=u?u.length+1:1,s++,s>o&&(s=t.end.row+1,t=this.$foldData[r++],o=t?t.start.row:Infinity)}}return this.lineWidgets&&(e+=this.$getWidgetScreenLength()),e},this.$setFontMetrics=function(e){if(!this.$enableVarChar)return;this.$getStringScreenWidth=function(t,n,r){if(n===0)return[0,0];n||(n=Infinity),r=r||0;var i,s;for(s=0;s<t.length;s++){i=t.charAt(s),i==="	"?r+=this.getScreenTabSize(r):r+=e.getCharacterWidth(i);if(r>n)break}return[r,s]}},this.destroy=function(){this.destroyed||(this.bgTokenizer.setDocument(null),this.bgTokenizer.cleanup(),this.destroyed=!0),this.$stopWorker(),this.removeAllListeners(),this.doc&&this.doc.off("change",this.$onChange),this.selection.detach()},this.isFullWidth=v}.call(d.prototype),e("./edit_session/folding").Folding.call(d.prototype),e("./edit_session/bracket_match").BracketMatch.call(d.prototype),o.defineOptions(d.prototype,"session",{wrap:{set:function(e){!e||e=="off"?e=!1:e=="free"?e=!0:e=="printMargin"?e=-1:typeof e=="string"&&(e=parseInt(e,10)||!1);if(this.$wrap==e)return;this.$wrap=e;if(!e)this.setUseWrapMode(!1);else{var t=typeof e=="number"?e:null;this.setWrapLimitRange(t,t),this.setUseWrapMode(!0)}},get:function(){return this.getUseWrapMode()?this.$wrap==-1?"printMargin":this.getWrapLimitRange().min?this.$wrap:"free":"off"},handlesSet:!0},wrapMethod:{set:function(e){e=e=="auto"?this.$mode.type!="text":e!="text",e!=this.$wrapAsCode&&(this.$wrapAsCode=e,this.$useWrapMode&&(this.$useWrapMode=!1,this.setUseWrapMode(!0)))},initialValue:"auto"},indentedSoftWrap:{set:function(){this.$useWrapMode&&(this.$useWrapMode=!1,this.setUseWrapMode(!0))},initialValue:!0},firstLineNumber:{set:function(){this._signal("changeBreakpoint")},initialValue:1},useWorker:{set:function(e){this.$useWorker=e,this.$stopWorker(),e&&this.$startWorker()},initialValue:!0},useSoftTabs:{initialValue:!0},tabSize:{set:function(e){e=parseInt(e),e>0&&this.$tabSize!==e&&(this.$modified=!0,this.$rowLengthCache=[],this.$tabSize=e,this._signal("changeTabSize"))},initialValue:4,handlesSet:!0},navigateWithinSoftTabs:{initialValue:!1},foldStyle:{set:function(e){this.setFoldStyle(e)},handlesSet:!0},overwrite:{set:function(e){this._signal("changeOverwrite")},initialValue:!1},newLineMode:{set:function(e){this.doc.setNewLineMode(e)},get:function(){return this.doc.getNewLineMode()},handlesSet:!0},mode:{set:function(e){this.setMode(e)},get:function(){return this.$modeId},handlesSet:!0}}),t.EditSession=d}),ace.define("ace/search",["require","exports","module","ace/lib/lang","ace/lib/oop","ace/range"],function(e,t,n){"use strict";function u(e,t){function n(e){return/\w/.test(e)||t.regExp?"\\b":""}return n(e[0])+e+n(e[e.length-1])}var r=e("./lib/lang"),i=e("./lib/oop"),s=e("./range").Range,o=function(){this.$options={}};(function(){this.set=function(e){return i.mixin(this.$options,e),this},this.getOptions=function(){return r.copyObject(this.$options)},this.setOptions=function(e){this.$options=e},this.find=function(e){var t=this.$options,n=this.$matchIterator(e,t);if(!n)return!1;var r=null;return n.forEach(function(e,n,i,o){return r=new s(e,n,i,o),n==o&&t.start&&t.start.start&&t.skipCurrent!=0&&r.isEqual(t.start)?(r=null,!1):!0}),r},this.findAll=function(e){var t=this.$options;if(!t.needle)return[];this.$assembleRegExp(t);var n=t.range,i=n?e.getLines(n.start.row,n.end.row):e.doc.getAllLines(),o=[],u=t.re;if(t.$isMultiLine){var a=u.length,f=i.length-a,l;e:for(var c=u.offset||0;c<=f;c++){for(var h=0;h<a;h++)if(i[c+h].search(u[h])==-1)continue e;var p=i[c],d=i[c+a-1],v=p.length-p.match(u[0])[0].length,m=d.match(u[a-1])[0].length;if(l&&l.end.row===c&&l.end.column>v)continue;o.push(l=new s(c,v,c+a-1,m)),a>2&&(c=c+a-2)}}else for(var g=0;g<i.length;g++){var y=r.getMatchOffsets(i[g],u);for(var h=0;h<y.length;h++){var b=y[h];o.push(new s(g,b.offset,g,b.offset+b.length))}}if(n){var w=n.start.column,E=n.end.column,g=0,h=o.length-1;while(g<h&&o[g].start.column<w&&o[g].start.row==0)g++;var S=n.end.row-n.start.row;while(g<h&&o[h].end.column>E&&o[h].end.row==S)h--;o=o.slice(g,h+1);for(g=0,h=o.length;g<h;g++)o[g].start.row+=n.start.row,o[g].end.row+=n.start.row}return o},this.replace=function(e,t){var n=this.$options,r=this.$assembleRegExp(n);if(n.$isMultiLine)return t;if(!r)return;var i=r.exec(e);if(!i||i[0].length!=e.length)return null;t=e.replace(r,t);if(n.preserveCase){t=t.split("");for(var s=Math.min(e.length,e.length);s--;){var o=e[s];o&&o.toLowerCase()!=o?t[s]=t[s].toUpperCase():t[s]=t[s].toLowerCase()}t=t.join("")}return t},this.$assembleRegExp=function(e,t){if(e.needle instanceof RegExp)return e.re=e.needle;var n=e.needle;if(!e.needle)return e.re=!1;e.regExp||(n=r.escapeRegExp(n)),e.wholeWord&&(n=u(n,e));var i=e.caseSensitive?"gm":"gmi";e.$isMultiLine=!t&&/[\n\r]/.test(n);if(e.$isMultiLine)return e.re=this.$assembleMultilineRegExp(n,i);try{var s=new RegExp(n,i)}catch(o){s=!1}return e.re=s},this.$assembleMultilineRegExp=function(e,t){var n=e.replace(/\r\n|\r|\n/g,"$\n^").split("\n"),r=[];for(var i=0;i<n.length;i++)try{r.push(new RegExp(n[i],t))}catch(s){return!1}return r},this.$matchIterator=function(e,t){var n=this.$assembleRegExp(t);if(!n)return!1;var r=t.backwards==1,i=t.skipCurrent!=0,s=t.range,o=t.start;o||(o=s?s[r?"end":"start"]:e.selection.getRange()),o.start&&(o=o[i!=r?"end":"start"]);var u=s?s.start.row:0,a=s?s.end.row:e.getLength()-1;if(r)var f=function(e){var n=o.row;if(c(n,o.column,e))return;for(n--;n>=u;n--)if(c(n,Number.MAX_VALUE,e))return;if(t.wrap==0)return;for(n=a,u=o.row;n>=u;n--)if(c(n,Number.MAX_VALUE,e))return};else var f=function(e){var n=o.row;if(c(n,o.column,e))return;for(n+=1;n<=a;n++)if(c(n,0,e))return;if(t.wrap==0)return;for(n=u,a=o.row;n<=a;n++)if(c(n,0,e))return};if(t.$isMultiLine)var l=n.length,c=function(t,i,s){var o=r?t-l+1:t;if(o<0||o+l>e.getLength())return;var u=e.getLine(o),a=u.search(n[0]);if(!r&&a<i||a===-1)return;for(var f=1;f<l;f++){u=e.getLine(o+f);if(u.search(n[f])==-1)return}var c=u.match(n[l-1])[0].length;if(r&&c>i)return;if(s(o,a,o+l-1,c))return!0};else if(r)var c=function(t,r,i){var s=e.getLine(t),o=[],u,a=0;n.lastIndex=0;while(u=n.exec(s)){var f=u[0].length;a=u.index;if(!f){if(a>=s.length)break;n.lastIndex=a+=1}if(u.index+f>r)break;o.push(u.index,f)}for(var l=o.length-1;l>=0;l-=2){var c=o[l-1],f=o[l];if(i(t,c,t,c+f))return!0}};else var c=function(t,r,i){var s=e.getLine(t),o,u;n.lastIndex=r;while(u=n.exec(s)){var a=u[0].length;o=u.index;if(i(t,o,t,o+a))return!0;if(!a){n.lastIndex=o+=1;if(o>=s.length)return!1}}};return{forEach:f}}}).call(o.prototype),t.Search=o}),ace.define("ace/keyboard/hash_handler",["require","exports","module","ace/lib/keys","ace/lib/useragent"],function(e,t,n){"use strict";function o(e,t){this.platform=t||(i.isMac?"mac":"win"),this.commands={},this.commandKeyBinding={},this.addCommands(e),this.$singleCommand=!0}function u(e,t){o.call(this,e,t),this.$singleCommand=!1}var r=e("../lib/keys"),i=e("../lib/useragent"),s=r.KEY_MODS;u.prototype=o.prototype,function(){function e(e){return typeof e=="object"&&e.bindKey&&e.bindKey.position||(e.isDefault?-100:0)}this.addCommand=function(e){this.commands[e.name]&&this.removeCommand(e),this.commands[e.name]=e,e.bindKey&&this._buildKeyHash(e)},this.removeCommand=function(e,t){var n=e&&(typeof e=="string"?e:e.name);e=this.commands[n],t||delete this.commands[n];var r=this.commandKeyBinding;for(var i in r){var s=r[i];if(s==e)delete r[i];else if(Array.isArray(s)){var o=s.indexOf(e);o!=-1&&(s.splice(o,1),s.length==1&&(r[i]=s[0]))}}},this.bindKey=function(e,t,n){typeof e=="object"&&e&&(n==undefined&&(n=e.position),e=e[this.platform]);if(!e)return;if(typeof t=="function")return this.addCommand({exec:t,bindKey:e,name:t.name||e});e.split("|").forEach(function(e){var r="";if(e.indexOf(" ")!=-1){var i=e.split(/\s+/);e=i.pop(),i.forEach(function(e){var t=this.parseKeys(e),n=s[t.hashId]+t.key;r+=(r?" ":"")+n,this._addCommandToBinding(r,"chainKeys")},this),r+=" "}var o=this.parseKeys(e),u=s[o.hashId]+o.key;this._addCommandToBinding(r+u,t,n)},this)},this._addCommandToBinding=function(t,n,r){var i=this.commandKeyBinding,s;if(!n)delete i[t];else if(!i[t]||this.$singleCommand)i[t]=n;else{Array.isArray(i[t])?(s=i[t].indexOf(n))!=-1&&i[t].splice(s,1):i[t]=[i[t]],typeof r!="number"&&(r=e(n));var o=i[t];for(s=0;s<o.length;s++){var u=o[s],a=e(u);if(a>r)break}o.splice(s,0,n)}},this.addCommands=function(e){e&&Object.keys(e).forEach(function(t){var n=e[t];if(!n)return;if(typeof n=="string")return this.bindKey(n,t);typeof n=="function"&&(n={exec:n});if(typeof n!="object")return;n.name||(n.name=t),this.addCommand(n)},this)},this.removeCommands=function(e){Object.keys(e).forEach(function(t){this.removeCommand(e[t])},this)},this.bindKeys=function(e){Object.keys(e).forEach(function(t){this.bindKey(t,e[t])},this)},this._buildKeyHash=function(e){this.bindKey(e.bindKey,e)},this.parseKeys=function(e){var t=e.toLowerCase().split(/[\-\+]([\-\+])?/).filter(function(e){return e}),n=t.pop(),i=r[n];if(r.FUNCTION_KEYS[i])n=r.FUNCTION_KEYS[i].toLowerCase();else{if(!t.length)return{key:n,hashId:-1};if(t.length==1&&t[0]=="shift")return{key:n.toUpperCase(),hashId:-1}}var s=0;for(var o=t.length;o--;){var u=r.KEY_MODS[t[o]];if(u==null)return typeof console!="undefined"&&console.error("invalid modifier "+t[o]+" in "+e),!1;s|=u}return{key:n,hashId:s}},this.findKeyCommand=function(t,n){var r=s[t]+n;return this.commandKeyBinding[r]},this.handleKeyboard=function(e,t,n,r){if(r<0)return;var i=s[t]+n,o=this.commandKeyBinding[i];e.$keyChain&&(e.$keyChain+=" "+i,o=this.commandKeyBinding[e.$keyChain]||o);if(o)if(o=="chainKeys"||o[o.length-1]=="chainKeys")return e.$keyChain=e.$keyChain||i,{command:"null"};if(e.$keyChain)if(!!t&&t!=4||n.length!=1){if(t==-1||r>0)e.$keyChain=""}else e.$keyChain=e.$keyChain.slice(0,-i.length-1);return{command:o}},this.getStatusText=function(e,t){return t.$keyChain||""}}.call(o.prototype),t.HashHandler=o,t.MultiHashHandler=u}),ace.define("ace/commands/command_manager",["require","exports","module","ace/lib/oop","ace/keyboard/hash_handler","ace/lib/event_emitter"],function(e,t,n){"use strict";var r=e("../lib/oop"),i=e("../keyboard/hash_handler").MultiHashHandler,s=e("../lib/event_emitter").EventEmitter,o=function(e,t){i.call(this,t,e),this.byName=this.commands,this.setDefaultHandler("exec",function(e){return e.args?e.command.exec(e.editor,e.args,e.event,!1):e.command.exec(e.editor,{},e.event,!0)})};r.inherits(o,i),function(){r.implement(this,s),this.exec=function(e,t,n){if(Array.isArray(e)){for(var r=e.length;r--;)if(this.exec(e[r],t,n))return!0;return!1}typeof e=="string"&&(e=this.commands[e]);if(!e)return!1;if(t&&t.$readOnly&&!e.readOnly)return!1;if(this.$checkCommandState!=0&&e.isAvailable&&!e.isAvailable(t))return!1;var i={editor:t,command:e,args:n};return i.returnValue=this._emit("exec",i),this._signal("afterExec",i),i.returnValue===!1?!1:!0},this.toggleRecording=function(e){if(this.$inReplay)return;return e&&e._emit("changeStatus"),this.recording?(this.macro.pop(),this.off("exec",this.$addCommandToMacro),this.macro.length||(this.macro=this.oldMacro),this.recording=!1):(this.$addCommandToMacro||(this.$addCommandToMacro=function(e){this.macro.push([e.command,e.args])}.bind(this)),this.oldMacro=this.macro,this.macro=[],this.on("exec",this.$addCommandToMacro),this.recording=!0)},this.replay=function(e){if(this.$inReplay||!this.macro)return;if(this.recording)return this.toggleRecording(e);try{this.$inReplay=!0,this.macro.forEach(function(t){typeof t=="string"?this.exec(t,e):this.exec(t[0],e,t[1])},this)}finally{this.$inReplay=!1}},this.trimMacro=function(e){return e.map(function(e){return typeof e[0]!="string"&&(e[0]=e[0].name),e[1]||(e=e[0]),e})}}.call(o.prototype),t.CommandManager=o}),ace.define("ace/commands/default_commands",["require","exports","module","ace/lib/lang","ace/config","ace/range"],function(e,t,n){"use strict";function o(e,t){return{win:e,mac:t}}var r=e("../lib/lang"),i=e("../config"),s=e("../range").Range;t.commands=[{name:"showSettingsMenu",description:"Show settings menu",bindKey:o("Ctrl-,","Command-,"),exec:function(e){i.loadModule("ace/ext/settings_menu",function(t){t.init(e),e.showSettingsMenu()})},readOnly:!0},{name:"goToNextError",description:"Go to next error",bindKey:o("Alt-E","F4"),exec:function(e){i.loadModule("./ext/error_marker",function(t){t.showErrorMarker(e,1)})},scrollIntoView:"animate",readOnly:!0},{name:"goToPreviousError",description:"Go to previous error",bindKey:o("Alt-Shift-E","Shift-F4"),exec:function(e){i.loadModule("./ext/error_marker",function(t){t.showErrorMarker(e,-1)})},scrollIntoView:"animate",readOnly:!0},{name:"selectall",description:"Select all",bindKey:o("Ctrl-A","Command-A"),exec:function(e){e.selectAll()},readOnly:!0},{name:"centerselection",description:"Center selection",bindKey:o(null,"Ctrl-L"),exec:function(e){e.centerSelection()},readOnly:!0},{name:"gotoline",description:"Go to line...",bindKey:o("Ctrl-L","Command-L"),exec:function(e,t){typeof t=="number"&&!isNaN(t)&&e.gotoLine(t),e.prompt({$type:"gotoLine"})},readOnly:!0},{name:"fold",bindKey:o("Alt-L|Ctrl-F1","Command-Alt-L|Command-F1"),exec:function(e){e.session.toggleFold(!1)},multiSelectAction:"forEach",scrollIntoView:"center",readOnly:!0},{name:"unfold",bindKey:o("Alt-Shift-L|Ctrl-Shift-F1","Command-Alt-Shift-L|Command-Shift-F1"),exec:function(e){e.session.toggleFold(!0)},multiSelectAction:"forEach",scrollIntoView:"center",readOnly:!0},{name:"toggleFoldWidget",description:"Toggle fold widget",bindKey:o("F2","F2"),exec:function(e){e.session.toggleFoldWidget()},multiSelectAction:"forEach",scrollIntoView:"center",readOnly:!0},{name:"toggleParentFoldWidget",description:"Toggle parent fold widget",bindKey:o("Alt-F2","Alt-F2"),exec:function(e){e.session.toggleFoldWidget(!0)},multiSelectAction:"forEach",scrollIntoView:"center",readOnly:!0},{name:"foldall",description:"Fold all",bindKey:o(null,"Ctrl-Command-Option-0"),exec:function(e){e.session.foldAll()},scrollIntoView:"center",readOnly:!0},{name:"foldAllComments",description:"Fold all comments",bindKey:o(null,"Ctrl-Command-Option-0"),exec:function(e){e.session.foldAllComments()},scrollIntoView:"center",readOnly:!0},{name:"foldOther",description:"Fold other",bindKey:o("Alt-0","Command-Option-0"),exec:function(e){e.session.foldAll(),e.session.unfold(e.selection.getAllRanges())},scrollIntoView:"center",readOnly:!0},{name:"unfoldall",description:"Unfold all",bindKey:o("Alt-Shift-0","Command-Option-Shift-0"),exec:function(e){e.session.unfold()},scrollIntoView:"center",readOnly:!0},{name:"findnext",description:"Find next",bindKey:o("Ctrl-K","Command-G"),exec:function(e){e.findNext()},multiSelectAction:"forEach",scrollIntoView:"center",readOnly:!0},{name:"findprevious",description:"Find previous",bindKey:o("Ctrl-Shift-K","Command-Shift-G"),exec:function(e){e.findPrevious()},multiSelectAction:"forEach",scrollIntoView:"center",readOnly:!0},{name:"selectOrFindNext",description:"Select or find next",bindKey:o("Alt-K","Ctrl-G"),exec:function(e){e.selection.isEmpty()?e.selection.selectWord():e.findNext()},readOnly:!0},{name:"selectOrFindPrevious",description:"Select or find previous",bindKey:o("Alt-Shift-K","Ctrl-Shift-G"),exec:function(e){e.selection.isEmpty()?e.selection.selectWord():e.findPrevious()},readOnly:!0},{name:"find",description:"Find",bindKey:o("Ctrl-F","Command-F"),exec:function(e){i.loadModule("ace/ext/searchbox",function(t){t.Search(e)})},readOnly:!0},{name:"overwrite",description:"Overwrite",bindKey:"Insert",exec:function(e){e.toggleOverwrite()},readOnly:!0},{name:"selecttostart",description:"Select to start",bindKey:o("Ctrl-Shift-Home","Command-Shift-Home|Command-Shift-Up"),exec:function(e){e.getSelection().selectFileStart()},multiSelectAction:"forEach",readOnly:!0,scrollIntoView:"animate",aceCommandGroup:"fileJump"},{name:"gotostart",description:"Go to start",bindKey:o("Ctrl-Home","Command-Home|Command-Up"),exec:function(e){e.navigateFileStart()},multiSelectAction:"forEach",readOnly:!0,scrollIntoView:"animate",aceCommandGroup:"fileJump"},{name:"selectup",description:"Select up",bindKey:o("Shift-Up","Shift-Up|Ctrl-Shift-P"),exec:function(e){e.getSelection().selectUp()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"golineup",description:"Go line up",bindKey:o("Up","Up|Ctrl-P"),exec:function(e,t){e.navigateUp(t.times)},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"selecttoend",description:"Select to end",bindKey:o("Ctrl-Shift-End","Command-Shift-End|Command-Shift-Down"),exec:function(e){e.getSelection().selectFileEnd()},multiSelectAction:"forEach",readOnly:!0,scrollIntoView:"animate",aceCommandGroup:"fileJump"},{name:"gotoend",description:"Go to end",bindKey:o("Ctrl-End","Command-End|Command-Down"),exec:function(e){e.navigateFileEnd()},multiSelectAction:"forEach",readOnly:!0,scrollIntoView:"animate",aceCommandGroup:"fileJump"},{name:"selectdown",description:"Select down",bindKey:o("Shift-Down","Shift-Down|Ctrl-Shift-N"),exec:function(e){e.getSelection().selectDown()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"golinedown",description:"Go line down",bindKey:o("Down","Down|Ctrl-N"),exec:function(e,t){e.navigateDown(t.times)},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"selectwordleft",description:"Select word left",bindKey:o("Ctrl-Shift-Left","Option-Shift-Left"),exec:function(e){e.getSelection().selectWordLeft()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"gotowordleft",description:"Go to word left",bindKey:o("Ctrl-Left","Option-Left"),exec:function(e){e.navigateWordLeft()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"selecttolinestart",description:"Select to line start",bindKey:o("Alt-Shift-Left","Command-Shift-Left|Ctrl-Shift-A"),exec:function(e){e.getSelection().selectLineStart()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"gotolinestart",description:"Go to line start",bindKey:o("Alt-Left|Home","Command-Left|Home|Ctrl-A"),exec:function(e){e.navigateLineStart()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"selectleft",description:"Select left",bindKey:o("Shift-Left","Shift-Left|Ctrl-Shift-B"),exec:function(e){e.getSelection().selectLeft()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"gotoleft",description:"Go to left",bindKey:o("Left","Left|Ctrl-B"),exec:function(e,t){e.navigateLeft(t.times)},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"selectwordright",description:"Select word right",bindKey:o("Ctrl-Shift-Right","Option-Shift-Right"),exec:function(e){e.getSelection().selectWordRight()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"gotowordright",description:"Go to word right",bindKey:o("Ctrl-Right","Option-Right"),exec:function(e){e.navigateWordRight()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"selecttolineend",description:"Select to line end",bindKey:o("Alt-Shift-Right","Command-Shift-Right|Shift-End|Ctrl-Shift-E"),exec:function(e){e.getSelection().selectLineEnd()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"gotolineend",description:"Go to line end",bindKey:o("Alt-Right|End","Command-Right|End|Ctrl-E"),exec:function(e){e.navigateLineEnd()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"selectright",description:"Select right",bindKey:o("Shift-Right","Shift-Right"),exec:function(e){e.getSelection().selectRight()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"gotoright",description:"Go to right",bindKey:o("Right","Right|Ctrl-F"),exec:function(e,t){e.navigateRight(t.times)},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"selectpagedown",description:"Select page down",bindKey:"Shift-PageDown",exec:function(e){e.selectPageDown()},readOnly:!0},{name:"pagedown",description:"Page down",bindKey:o(null,"Option-PageDown"),exec:function(e){e.scrollPageDown()},readOnly:!0},{name:"gotopagedown",description:"Go to page down",bindKey:o("PageDown","PageDown|Ctrl-V"),exec:function(e){e.gotoPageDown()},readOnly:!0},{name:"selectpageup",description:"Select page up",bindKey:"Shift-PageUp",exec:function(e){e.selectPageUp()},readOnly:!0},{name:"pageup",description:"Page up",bindKey:o(null,"Option-PageUp"),exec:function(e){e.scrollPageUp()},readOnly:!0},{name:"gotopageup",description:"Go to page up",bindKey:"PageUp",exec:function(e){e.gotoPageUp()},readOnly:!0},{name:"scrollup",description:"Scroll up",bindKey:o("Ctrl-Up",null),exec:function(e){e.renderer.scrollBy(0,-2*e.renderer.layerConfig.lineHeight)},readOnly:!0},{name:"scrolldown",description:"Scroll down",bindKey:o("Ctrl-Down",null),exec:function(e){e.renderer.scrollBy(0,2*e.renderer.layerConfig.lineHeight)},readOnly:!0},{name:"selectlinestart",description:"Select line start",bindKey:"Shift-Home",exec:function(e){e.getSelection().selectLineStart()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"selectlineend",description:"Select line end",bindKey:"Shift-End",exec:function(e){e.getSelection().selectLineEnd()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"togglerecording",description:"Toggle recording",bindKey:o("Ctrl-Alt-E","Command-Option-E"),exec:function(e){e.commands.toggleRecording(e)},readOnly:!0},{name:"replaymacro",description:"Replay macro",bindKey:o("Ctrl-Shift-E","Command-Shift-E"),exec:function(e){e.commands.replay(e)},readOnly:!0},{name:"jumptomatching",description:"Jump to matching",bindKey:o("Ctrl-\\|Ctrl-P","Command-\\"),exec:function(e){e.jumpToMatching()},multiSelectAction:"forEach",scrollIntoView:"animate",readOnly:!0},{name:"selecttomatching",description:"Select to matching",bindKey:o("Ctrl-Shift-\\|Ctrl-Shift-P","Command-Shift-\\"),exec:function(e){e.jumpToMatching(!0)},multiSelectAction:"forEach",scrollIntoView:"animate",readOnly:!0},{name:"expandToMatching",description:"Expand to matching",bindKey:o("Ctrl-Shift-M","Ctrl-Shift-M"),exec:function(e){e.jumpToMatching(!0,!0)},multiSelectAction:"forEach",scrollIntoView:"animate",readOnly:!0},{name:"passKeysToBrowser",description:"Pass keys to browser",bindKey:o(null,null),exec:function(){},passEvent:!0,readOnly:!0},{name:"copy",description:"Copy",exec:function(e){},readOnly:!0},{name:"cut",description:"Cut",exec:function(e){var t=e.$copyWithEmptySelection&&e.selection.isEmpty(),n=t?e.selection.getLineRange():e.selection.getRange();e._emit("cut",n),n.isEmpty()||e.session.remove(n),e.clearSelection()},scrollIntoView:"cursor",multiSelectAction:"forEach"},{name:"paste",description:"Paste",exec:function(e,t){e.$handlePaste(t)},scrollIntoView:"cursor"},{name:"removeline",description:"Remove line",bindKey:o("Ctrl-D","Command-D"),exec:function(e){e.removeLines()},scrollIntoView:"cursor",multiSelectAction:"forEachLine"},{name:"duplicateSelection",description:"Duplicate selection",bindKey:o("Ctrl-Shift-D","Command-Shift-D"),exec:function(e){e.duplicateSelection()},scrollIntoView:"cursor",multiSelectAction:"forEach"},{name:"sortlines",description:"Sort lines",bindKey:o("Ctrl-Alt-S","Command-Alt-S"),exec:function(e){e.sortLines()},scrollIntoView:"selection",multiSelectAction:"forEachLine"},{name:"togglecomment",description:"Toggle comment",bindKey:o("Ctrl-/","Command-/"),exec:function(e){e.toggleCommentLines()},multiSelectAction:"forEachLine",scrollIntoView:"selectionPart"},{name:"toggleBlockComment",description:"Toggle block comment",bindKey:o("Ctrl-Shift-/","Command-Shift-/"),exec:function(e){e.toggleBlockComment()},multiSelectAction:"forEach",scrollIntoView:"selectionPart"},{name:"modifyNumberUp",description:"Modify number up",bindKey:o("Ctrl-Shift-Up","Alt-Shift-Up"),exec:function(e){e.modifyNumber(1)},scrollIntoView:"cursor",multiSelectAction:"forEach"},{name:"modifyNumberDown",description:"Modify number down",bindKey:o("Ctrl-Shift-Down","Alt-Shift-Down"),exec:function(e){e.modifyNumber(-1)},scrollIntoView:"cursor",multiSelectAction:"forEach"},{name:"replace",description:"Replace",bindKey:o("Ctrl-H","Command-Option-F"),exec:function(e){i.loadModule("ace/ext/searchbox",function(t){t.Search(e,!0)})}},{name:"undo",description:"Undo",bindKey:o("Ctrl-Z","Command-Z"),exec:function(e){e.undo()}},{name:"redo",description:"Redo",bindKey:o("Ctrl-Shift-Z|Ctrl-Y","Command-Shift-Z|Command-Y"),exec:function(e){e.redo()}},{name:"copylinesup",description:"Copy lines up",bindKey:o("Alt-Shift-Up","Command-Option-Up"),exec:function(e){e.copyLinesUp()},scrollIntoView:"cursor"},{name:"movelinesup",description:"Move lines up",bindKey:o("Alt-Up","Option-Up"),exec:function(e){e.moveLinesUp()},scrollIntoView:"cursor"},{name:"copylinesdown",description:"Copy lines down",bindKey:o("Alt-Shift-Down","Command-Option-Down"),exec:function(e){e.copyLinesDown()},scrollIntoView:"cursor"},{name:"movelinesdown",description:"Move lines down",bindKey:o("Alt-Down","Option-Down"),exec:function(e){e.moveLinesDown()},scrollIntoView:"cursor"},{name:"del",description:"Delete",bindKey:o("Delete","Delete|Ctrl-D|Shift-Delete"),exec:function(e){e.remove("right")},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"backspace",description:"Backspace",bindKey:o("Shift-Backspace|Backspace","Ctrl-Backspace|Shift-Backspace|Backspace|Ctrl-H"),exec:function(e){e.remove("left")},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"cut_or_delete",description:"Cut or delete",bindKey:o("Shift-Delete",null),exec:function(e){if(!e.selection.isEmpty())return!1;e.remove("left")},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"removetolinestart",description:"Remove to line start",bindKey:o("Alt-Backspace","Command-Backspace"),exec:function(e){e.removeToLineStart()},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"removetolineend",description:"Remove to line end",bindKey:o("Alt-Delete","Ctrl-K|Command-Delete"),exec:function(e){e.removeToLineEnd()},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"removetolinestarthard",description:"Remove to line start hard",bindKey:o("Ctrl-Shift-Backspace",null),exec:function(e){var t=e.selection.getRange();t.start.column=0,e.session.remove(t)},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"removetolineendhard",description:"Remove to line end hard",bindKey:o("Ctrl-Shift-Delete",null),exec:function(e){var t=e.selection.getRange();t.end.column=Number.MAX_VALUE,e.session.remove(t)},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"removewordleft",description:"Remove word left",bindKey:o("Ctrl-Backspace","Alt-Backspace|Ctrl-Alt-Backspace"),exec:function(e){e.removeWordLeft()},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"removewordright",description:"Remove word right",bindKey:o("Ctrl-Delete","Alt-Delete"),exec:function(e){e.removeWordRight()},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"outdent",description:"Outdent",bindKey:o("Shift-Tab","Shift-Tab"),exec:function(e){e.blockOutdent()},multiSelectAction:"forEach",scrollIntoView:"selectionPart"},{name:"indent",description:"Indent",bindKey:o("Tab","Tab"),exec:function(e){e.indent()},multiSelectAction:"forEach",scrollIntoView:"selectionPart"},{name:"blockoutdent",description:"Block outdent",bindKey:o("Ctrl-[","Ctrl-["),exec:function(e){e.blockOutdent()},multiSelectAction:"forEachLine",scrollIntoView:"selectionPart"},{name:"blockindent",description:"Block indent",bindKey:o("Ctrl-]","Ctrl-]"),exec:function(e){e.blockIndent()},multiSelectAction:"forEachLine",scrollIntoView:"selectionPart"},{name:"insertstring",description:"Insert string",exec:function(e,t){e.insert(t)},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"inserttext",description:"Insert text",exec:function(e,t){e.insert(r.stringRepeat(t.text||"",t.times||1))},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"splitline",description:"Split line",bindKey:o(null,"Ctrl-O"),exec:function(e){e.splitLine()},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"transposeletters",description:"Transpose letters",bindKey:o("Alt-Shift-X","Ctrl-T"),exec:function(e){e.transposeLetters()},multiSelectAction:function(e){e.transposeSelections(1)},scrollIntoView:"cursor"},{name:"touppercase",description:"To uppercase",bindKey:o("Ctrl-U","Ctrl-U"),exec:function(e){e.toUpperCase()},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"tolowercase",description:"To lowercase",bindKey:o("Ctrl-Shift-U","Ctrl-Shift-U"),exec:function(e){e.toLowerCase()},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"autoindent",description:"Auto Indent",bindKey:o(null,null),exec:function(e){e.autoIndent()},multiSelectAction:"forEachLine",scrollIntoView:"animate"},{name:"expandtoline",description:"Expand to line",bindKey:o("Ctrl-Shift-L","Command-Shift-L"),exec:function(e){var t=e.selection.getRange();t.start.column=t.end.column=0,t.end.row++,e.selection.setRange(t,!1)},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"openlink",bindKey:o("Ctrl+F3","F3"),exec:function(e){e.openLink()}},{name:"joinlines",description:"Join lines",bindKey:o(null,null),exec:function(e){var t=e.selection.isBackwards(),n=t?e.selection.getSelectionLead():e.selection.getSelectionAnchor(),i=t?e.selection.getSelectionAnchor():e.selection.getSelectionLead(),o=e.session.doc.getLine(n.row).length,u=e.session.doc.getTextRange(e.selection.getRange()),a=u.replace(/\n\s*/," ").length,f=e.session.doc.getLine(n.row);for(var l=n.row+1;l<=i.row+1;l++){var c=r.stringTrimLeft(r.stringTrimRight(e.session.doc.getLine(l)));c.length!==0&&(c=" "+c),f+=c}i.row+1<e.session.doc.getLength()-1&&(f+=e.session.doc.getNewLineCharacter()),e.clearSelection(),e.session.doc.replace(new s(n.row,0,i.row+2,0),f),a>0?(e.selection.moveCursorTo(n.row,n.column),e.selection.selectTo(n.row,n.column+a)):(o=e.session.doc.getLine(n.row).length>o?o+1:o,e.selection.moveCursorTo(n.row,o))},multiSelectAction:"forEach",readOnly:!0},{name:"invertSelection",description:"Invert selection",bindKey:o(null,null),exec:function(e){var t=e.session.doc.getLength()-1,n=e.session.doc.getLine(t).length,r=e.selection.rangeList.ranges,i=[];r.length<1&&(r=[e.selection.getRange()]);for(var o=0;o<r.length;o++)o==r.length-1&&(r[o].end.row!==t||r[o].end.column!==n)&&i.push(new s(r[o].end.row,r[o].end.column,t,n)),o===0?(r[o].start.row!==0||r[o].start.column!==0)&&i.push(new s(0,0,r[o].start.row,r[o].start.column)):i.push(new s(r[o-1].end.row,r[o-1].end.column,r[o].start.row,r[o].start.column));e.exitMultiSelectMode(),e.clearSelection();for(var o=0;o<i.length;o++)e.selection.addRange(i[o],!1)},readOnly:!0,scrollIntoView:"none"},{name:"addLineAfter",description:"Add new line after the current line",exec:function(e){e.selection.clearSelection(),e.navigateLineEnd(),e.insert("\n")},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"addLineBefore",description:"Add new line before the current line",exec:function(e){e.selection.clearSelection();var t=e.getCursorPosition();e.selection.moveTo(t.row-1,Number.MAX_VALUE),e.insert("\n"),t.row===0&&e.navigateUp()},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"openCommandPallete",description:"Open command palette",bindKey:o("F1","F1"),exec:function(e){e.prompt({$type:"commands"})},readOnly:!0},{name:"modeSelect",description:"Change language mode...",bindKey:o(null,null),exec:function(e){e.prompt({$type:"modes"})},readOnly:!0}];for(var u=1;u<9;u++)t.commands.push({name:"foldToLevel"+u,description:"Fold To Level "+u,level:u,exec:function(e){e.session.foldToLevel(this.level)},scrollIntoView:"center",readOnly:!0})}),ace.define("ace/editor",["require","exports","module","ace/lib/oop","ace/lib/dom","ace/lib/lang","ace/lib/useragent","ace/keyboard/textinput","ace/mouse/mouse_handler","ace/mouse/fold_handler","ace/keyboard/keybinding","ace/edit_session","ace/search","ace/range","ace/lib/event_emitter","ace/commands/command_manager","ace/commands/default_commands","ace/config","ace/token_iterator","ace/clipboard"],function(e,t,n){"use strict";var r=this&&this.__values||function(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},i=e("./lib/oop"),s=e("./lib/dom"),o=e("./lib/lang"),u=e("./lib/useragent"),a=e("./keyboard/textinput").TextInput,f=e("./mouse/mouse_handler").MouseHandler,l=e("./mouse/fold_handler").FoldHandler,c=e("./keyboard/keybinding").KeyBinding,h=e("./edit_session").EditSession,p=e("./search").Search,d=e("./range").Range,v=e("./lib/event_emitter").EventEmitter,m=e("./commands/command_manager").CommandManager,g=e("./commands/default_commands").commands,y=e("./config"),b=e("./token_iterator").TokenIterator,w=e("./clipboard"),E=function(e,t,n){this.$toDestroy=[];var r=e.getContainerElement();this.container=r,this.renderer=e,this.id="editor"+ ++E.$uid,this.commands=new m(u.isMac?"mac":"win",g),typeof document=="object"&&(this.textInput=new a(e.getTextAreaContainer(),this),this.renderer.textarea=this.textInput.getElement(),this.$mouseHandler=new f(this),new l(this)),this.keyBinding=new c(this),this.$search=(new p).set({wrap:!0}),this.$historyTracker=this.$historyTracker.bind(this),this.commands.on("exec",this.$historyTracker),this.$initOperationListeners(),this._$emitInputEvent=o.delayedCall(function(){this._signal("input",{}),this.session&&!this.session.destroyed&&this.session.bgTokenizer.scheduleStart()}.bind(this)),this.on("change",function(e,t){t._$emitInputEvent.schedule(31)}),this.setSession(t||n&&n.session||new h("")),y.resetOptions(this),n&&this.setOptions(n),y._signal("editor",this)};E.$uid=0,function(){i.implement(this,v),this.$initOperationListeners=function(){this.commands.on("exec",this.startOperation.bind(this),!0),this.commands.on("afterExec",this.endOperation.bind(this),!0),this.$opResetTimer=o.delayedCall(this.endOperation.bind(this,!0)),this.on("change",function(){this.curOp||(this.startOperation(),this.curOp.selectionBefore=this.$lastSel),this.curOp.docChanged=!0}.bind(this),!0),this.on("changeSelection",function(){this.curOp||(this.startOperation(),this.curOp.selectionBefore=this.$lastSel),this.curOp.selectionChanged=!0}.bind(this),!0)},this.curOp=null,this.prevOp={},this.startOperation=function(e){if(this.curOp){if(!e||this.curOp.command)return;this.prevOp=this.curOp}e||(this.previousCommand=null,e={}),this.$opResetTimer.schedule(),this.curOp=this.session.curOp={command:e.command||{},args:e.args,scrollTop:this.renderer.scrollTop},this.curOp.selectionBefore=this.selection.toJSON()},this.endOperation=function(e){if(this.curOp&&this.session){if(e&&e.returnValue===!1||!this.session)return this.curOp=null;if(e==1&&this.curOp.command&&this.curOp.command.name=="mouse")return;this._signal("beforeEndOperation");if(!this.curOp)return;var t=this.curOp.command,n=t&&t.scrollIntoView;if(n){switch(n){case"center-animate":n="animate";case"center":this.renderer.scrollCursorIntoView(null,.5);break;case"animate":case"cursor":this.renderer.scrollCursorIntoView();break;case"selectionPart":var r=this.selection.getRange(),i=this.renderer.layerConfig;(r.start.row>=i.lastRow||r.end.row<=i.firstRow)&&this.renderer.scrollSelectionIntoView(this.selection.anchor,this.selection.lead);break;default:}n=="animate"&&this.renderer.animateScrolling(this.curOp.scrollTop)}var s=this.selection.toJSON();this.curOp.selectionAfter=s,this.$lastSel=this.selection.toJSON(),this.session.getUndoManager().addSelection(s),this.prevOp=this.curOp,this.curOp=null}},this.$mergeableCommands=["backspace","del","insertstring"],this.$historyTracker=function(e){if(!this.$mergeUndoDeltas)return;var t=this.prevOp,n=this.$mergeableCommands,r=t.command&&e.command.name==t.command.name;if(e.command.name=="insertstring"){var i=e.args;this.mergeNextCommand===undefined&&(this.mergeNextCommand=!0),r=r&&this.mergeNextCommand&&(!/\s/.test(i)||/\s/.test(t.args)),this.mergeNextCommand=!0}else r=r&&n.indexOf(e.command.name)!==-1;this.$mergeUndoDeltas!="always"&&Date.now()-this.sequenceStartTime>2e3&&(r=!1),r?this.session.mergeUndoDeltas=!0:n.indexOf(e.command.name)!==-1&&(this.sequenceStartTime=Date.now())},this.setKeyboardHandler=function(e,t){if(e&&typeof e=="string"&&e!="ace"){this.$keybindingId=e;var n=this;y.loadModule(["keybinding",e],function(r){n.$keybindingId==e&&n.keyBinding.setKeyboardHandler(r&&r.handler),t&&t()})}else this.$keybindingId=null,this.keyBinding.setKeyboardHandler(e),t&&t()},this.getKeyboardHandler=function(){return this.keyBinding.getKeyboardHandler()},this.setSession=function(e){if(this.session==e)return;this.curOp&&this.endOperation(),this.curOp={};var t=this.session;if(t){this.session.off("change",this.$onDocumentChange),this.session.off("changeMode",this.$onChangeMode),this.session.off("tokenizerUpdate",this.$onTokenizerUpdate),this.session.off("changeTabSize",this.$onChangeTabSize),this.session.off("changeWrapLimit",this.$onChangeWrapLimit),this.session.off("changeWrapMode",this.$onChangeWrapMode),this.session.off("changeFold",this.$onChangeFold),this.session.off("changeFrontMarker",this.$onChangeFrontMarker),this.session.off("changeBackMarker",this.$onChangeBackMarker),this.session.off("changeBreakpoint",this.$onChangeBreakpoint),this.session.off("changeAnnotation",this.$onChangeAnnotation),this.session.off("changeOverwrite",this.$onCursorChange),this.session.off("changeScrollTop",this.$onScrollTopChange),this.session.off("changeScrollLeft",this.$onScrollLeftChange);var n=this.session.getSelection();n.off("changeCursor",this.$onCursorChange),n.off("changeSelection",this.$onSelectionChange)}this.session=e,e?(this.$onDocumentChange=this.onDocumentChange.bind(this),e.on("change",this.$onDocumentChange),this.renderer.setSession(e),this.$onChangeMode=this.onChangeMode.bind(this),e.on("changeMode",this.$onChangeMode),this.$onTokenizerUpdate=this.onTokenizerUpdate.bind(this),e.on("tokenizerUpdate",this.$onTokenizerUpdate),this.$onChangeTabSize=this.renderer.onChangeTabSize.bind(this.renderer),e.on("changeTabSize",this.$onChangeTabSize),this.$onChangeWrapLimit=this.onChangeWrapLimit.bind(this),e.on("changeWrapLimit",this.$onChangeWrapLimit),this.$onChangeWrapMode=this.onChangeWrapMode.bind(this),e.on("changeWrapMode",this.$onChangeWrapMode),this.$onChangeFold=this.onChangeFold.bind(this),e.on("changeFold",this.$onChangeFold),this.$onChangeFrontMarker=this.onChangeFrontMarker.bind(this),this.session.on("changeFrontMarker",this.$onChangeFrontMarker),this.$onChangeBackMarker=this.onChangeBackMarker.bind(this),this.session.on("changeBackMarker",this.$onChangeBackMarker),this.$onChangeBreakpoint=this.onChangeBreakpoint.bind(this),this.session.on("changeBreakpoint",this.$onChangeBreakpoint),this.$onChangeAnnotation=this.onChangeAnnotation.bind(this),this.session.on("changeAnnotation",this.$onChangeAnnotation),this.$onCursorChange=this.onCursorChange.bind(this),this.session.on("changeOverwrite",this.$onCursorChange),this.$onScrollTopChange=this.onScrollTopChange.bind(this),this.session.on("changeScrollTop",this.$onScrollTopChange),this.$onScrollLeftChange=this.onScrollLeftChange.bind(this),this.session.on("changeScrollLeft",this.$onScrollLeftChange),this.selection=e.getSelection(),this.selection.on("changeCursor",this.$onCursorChange),this.$onSelectionChange=this.onSelectionChange.bind(this),this.selection.on("changeSelection",this.$onSelectionChange),this.onChangeMode(),this.onCursorChange(),this.onScrollTopChange(),this.onScrollLeftChange(),this.onSelectionChange(),this.onChangeFrontMarker(),this.onChangeBackMarker(),this.onChangeBreakpoint(),this.onChangeAnnotation(),this.session.getUseWrapMode()&&this.renderer.adjustWrapLimit(),this.renderer.updateFull()):(this.selection=null,this.renderer.setSession(e)),this._signal("changeSession",{session:e,oldSession:t}),this.curOp=null,t&&t._signal("changeEditor",{oldEditor:this}),e&&e._signal("changeEditor",{editor:this}),e&&!e.destroyed&&e.bgTokenizer.scheduleStart()},this.getSession=function(){return this.session},this.setValue=function(e,t){return this.session.doc.setValue(e),t?t==1?this.navigateFileEnd():t==-1&&this.navigateFileStart():this.selectAll(),e},this.getValue=function(){return this.session.getValue()},this.getSelection=function(){return this.selection},this.resize=function(e){this.renderer.onResize(e)},this.setTheme=function(e,t){this.renderer.setTheme(e,t)},this.getTheme=function(){return this.renderer.getTheme()},this.setStyle=function(e){this.renderer.setStyle(e)},this.unsetStyle=function(e){this.renderer.unsetStyle(e)},this.getFontSize=function(){return this.getOption("fontSize")||s.computedStyle(this.container).fontSize},this.setFontSize=function(e){this.setOption("fontSize",e)},this.$highlightBrackets=function(){if(this.$highlightPending)return;var e=this;this.$highlightPending=!0,setTimeout(function(){e.$highlightPending=!1;var t=e.session;if(!t||t.destroyed)return;t.$bracketHighlight&&(t.$bracketHighlight.markerIds.forEach(function(e){t.removeMarker(e)}),t.$bracketHighlight=null);var n=e.getCursorPosition(),r=e.getKeyboardHandler(),i=r&&r.$getDirectionForHighlight&&r.$getDirectionForHighlight(e),s=t.getMatchingBracketRanges(n,i);if(!s){var o=new b(t,n.row,n.column),u=o.getCurrentToken();if(u&&/\b(?:tag-open|tag-name)/.test(u.type)){var a=t.getMatchingTags(n);a&&(s=[a.openTagName,a.closeTagName])}}!s&&t.$mode.getMatching&&(s=t.$mode.getMatching(e.session));if(!s){e.getHighlightIndentGuides()&&e.renderer.$textLayer.$highlightIndentGuide();return}var f="ace_bracket";Array.isArray(s)?s.length==1&&(f="ace_error_bracket"):s=[s],s.length==2&&(d.comparePoints(s[0].end,s[1].start)==0?s=[d.fromPoints(s[0].start,s[1].end)]:d.comparePoints(s[0].start,s[1].end)==0&&(s=[d.fromPoints(s[1].start,s[0].end)])),t.$bracketHighlight={ranges:s,markerIds:s.map(function(e){return t.addMarker(e,f,"text")})},e.getHighlightIndentGuides()&&e.renderer.$textLayer.$highlightIndentGuide()},50)},this.focus=function(){this.textInput.focus()},this.isFocused=function(){return this.textInput.isFocused()},this.blur=function(){this.textInput.blur()},this.onFocus=function(e){if(this.$isFocused)return;this.$isFocused=!0,this.renderer.showCursor(),this.renderer.visualizeFocus(),this._emit("focus",e)},this.onBlur=function(e){if(!this.$isFocused)return;this.$isFocused=!1,this.renderer.hideCursor(),this.renderer.visualizeBlur(),this._emit("blur",e)},this.$cursorChange=function(){this.renderer.updateCursor(),this.$highlightBrackets(),this.$updateHighlightActiveLine()},this.onDocumentChange=function(e){var t=this.session.$useWrapMode,n=e.start.row==e.end.row?e.end.row:Infinity;this.renderer.updateLines(e.start.row,n,t),this._signal("change",e),this.$cursorChange()},this.onTokenizerUpdate=function(e){var t=e.data;this.renderer.updateLines(t.first,t.last)},this.onScrollTopChange=function(){this.renderer.scrollToY(this.session.getScrollTop())},this.onScrollLeftChange=function(){this.renderer.scrollToX(this.session.getScrollLeft())},this.onCursorChange=function(){this.$cursorChange(),this._signal("changeSelection")},this.$updateHighlightActiveLine=function(){var e=this.getSession(),t;if(this.$highlightActiveLine){if(this.$selectionStyle!="line"||!this.selection.isMultiLine())t=this.getCursorPosition();this.renderer.theme&&this.renderer.theme.$selectionColorConflict&&!this.selection.isEmpty()&&(t=!1),this.renderer.$maxLines&&this.session.getLength()===1&&!(this.renderer.$minLines>1)&&(t=!1)}if(e.$highlightLineMarker&&!t)e.removeMarker(e.$highlightLineMarker.id),e.$highlightLineMarker=null;else if(!e.$highlightLineMarker&&t){var n=new d(t.row,t.column,t.row,Infinity);n.id=e.addMarker(n,"ace_active-line","screenLine"),e.$highlightLineMarker=n}else t&&(e.$highlightLineMarker.start.row=t.row,e.$highlightLineMarker.end.row=t.row,e.$highlightLineMarker.start.column=t.column,e._signal("changeBackMarker"))},this.onSelectionChange=function(e){var t=this.session;t.$selectionMarker&&t.removeMarker(t.$selectionMarker),t.$selectionMarker=null;if(!this.selection.isEmpty()){var n=this.selection.getRange(),r=this.getSelectionStyle();t.$selectionMarker=t.addMarker(n,"ace_selection",r)}else this.$updateHighlightActiveLine();var i=this.$highlightSelectedWord&&this.$getSelectionHighLightRegexp();this.session.highlight(i),this._signal("changeSelection")},this.$getSelectionHighLightRegexp=function(){var e=this.session,t=this.getSelectionRange();if(t.isEmpty()||t.isMultiLine())return;var n=t.start.column,r=t.end.column,i=e.getLine(t.start.row),s=i.substring(n,r);if(s.length>5e3||!/[\w\d]/.test(s))return;var o=this.$search.$assembleRegExp({wholeWord:!0,caseSensitive:!0,needle:s}),u=i.substring(n-1,r+1);if(!o.test(u))return;return o},this.onChangeFrontMarker=function(){this.renderer.updateFrontMarkers()},this.onChangeBackMarker=function(){this.renderer.updateBackMarkers()},this.onChangeBreakpoint=function(){this.renderer.updateBreakpoints()},this.onChangeAnnotation=function(){this.renderer.setAnnotations(this.session.getAnnotations())},this.onChangeMode=function(e){this.renderer.updateText(),this._emit("changeMode",e)},this.onChangeWrapLimit=function(){this.renderer.updateFull()},this.onChangeWrapMode=function(){this.renderer.onResize(!0)},this.onChangeFold=function(){this.$updateHighlightActiveLine(),this.renderer.updateFull()},this.getSelectedText=function(){return this.session.getTextRange(this.getSelectionRange())},this.getCopyText=function(){var e=this.getSelectedText(),t=this.session.doc.getNewLineCharacter(),n=!1;if(!e&&this.$copyWithEmptySelection){n=!0;var r=this.selection.getAllRanges();for(var i=0;i<r.length;i++){var s=r[i];if(i&&r[i-1].start.row==s.start.row)continue;e+=this.session.getLine(s.start.row)+t}}var o={text:e};return this._signal("copy",o),w.lineMode=n?o.text:!1,o.text},this.onCopy=function(){this.commands.exec("copy",this)},this.onCut=function(){this.commands.exec("cut",this)},this.onPaste=function(e,t){var n={text:e,event:t};this.commands.exec("paste",this,n)},this.$handlePaste=function(e){typeof e=="string"&&(e={text:e}),this._signal("paste",e);var t=e.text,n=t===w.lineMode,r=this.session;if(!this.inMultiSelectMode||this.inVirtualSelectionMode)n?r.insert({row:this.selection.lead.row,column:0},t):this.insert(t);else if(n)this.selection.rangeList.ranges.forEach(function(e){r.insert({row:e.start.row,column:0},t)});else{var i=t.split(/\r\n|\r|\n/),s=this.selection.rangeList.ranges,o=i.length==2&&(!i[0]||!i[1]);if(i.length!=s.length||o)return this.commands.exec("insertstring",this,t);for(var u=s.length;u--;){var a=s[u];a.isEmpty()||r.remove(a),r.insert(a.start,i[u])}}},this.execCommand=function(e,t){return this.commands.exec(e,this,t)},this.insert=function(e,t){var n=this.session,r=n.getMode(),i=this.getCursorPosition();if(this.getBehavioursEnabled()&&!t){var s=r.transformAction(n.getState(i.row),"insertion",this,n,e);s&&(e!==s.text&&(this.inVirtualSelectionMode||(this.session.mergeUndoDeltas=!1,this.mergeNextCommand=!1)),e=s.text)}e=="	"&&(e=this.session.getTabString());if(!this.selection.isEmpty()){var o=this.getSelectionRange();i=this.session.remove(o),this.clearSelection()}else if(this.session.getOverwrite()&&e.indexOf("\n")==-1){var o=new d.fromPoints(i,i);o.end.column+=e.length,this.session.remove(o)}if(e=="\n"||e=="\r\n"){var u=n.getLine(i.row);if(i.column>u.search(/\S|$/)){var a=u.substr(i.column).search(/\S|$/);n.doc.removeInLine(i.row,i.column,i.column+a)}}this.clearSelection();var f=i.column,l=n.getState(i.row),u=n.getLine(i.row),c=r.checkOutdent(l,u,e);n.insert(i,e),s&&s.selection&&(s.selection.length==2?this.selection.setSelectionRange(new d(i.row,f+s.selection[0],i.row,f+s.selection[1])):this.selection.setSelectionRange(new d(i.row+s.selection[0],s.selection[1],i.row+s.selection[2],s.selection[3])));if(this.$enableAutoIndent){if(n.getDocument().isNewLine(e)){var h=r.getNextLineIndent(l,u.slice(0,i.column),n.getTabString());n.insert({row:i.row+1,column:0},h)}c&&r.autoOutdent(l,n,i.row)}},this.autoIndent=function(){var e=this.session,t=e.getMode(),n,r;if(this.selection.isEmpty())n=0,r=e.doc.getLength()-1;else{var i=this.getSelectionRange();n=i.start.row,r=i.end.row}var s="",o="",u="",a,f,l,c=e.getTabString();for(var h=n;h<=r;h++)h>0&&(s=e.getState(h-1),o=e.getLine(h-1),u=t.getNextLineIndent(s,o,c)),a=e.getLine(h),f=t.$getIndent(a),u!==f&&(f.length>0&&(l=new d(h,0,h,f.length),e.remove(l)),u.length>0&&e.insert({row:h,column:0},u)),t.autoOutdent(s,e,h)},this.onTextInput=function(e,t){if(!t)return this.keyBinding.onTextInput(e);this.startOperation({command:{name:"insertstring"}});var n=this.applyComposition.bind(this,e,t);this.selection.rangeCount?this.forEachSelection(n):n(),this.endOperation()},this.applyComposition=function(e,t){if(t.extendLeft||t.extendRight){var n=this.selection.getRange();n.start.column-=t.extendLeft,n.end.column+=t.extendRight,n.start.column<0&&(n.start.row--,n.start.column+=this.session.getLine(n.start.row).length+1),this.selection.setRange(n),!e&&!n.isEmpty()&&this.remove()}(e||!this.selection.isEmpty())&&this.insert(e,!0);if(t.restoreStart||t.restoreEnd){var n=this.selection.getRange();n.start.column-=t.restoreStart,n.end.column-=t.restoreEnd,this.selection.setRange(n)}},this.onCommandKey=function(e,t,n){return this.keyBinding.onCommandKey(e,t,n)},this.setOverwrite=function(e){this.session.setOverwrite(e)},this.getOverwrite=function(){return this.session.getOverwrite()},this.toggleOverwrite=function(){this.session.toggleOverwrite()},this.setScrollSpeed=function(e){this.setOption("scrollSpeed",e)},this.getScrollSpeed=function(){return this.getOption("scrollSpeed")},this.setDragDelay=function(e){this.setOption("dragDelay",e)},this.getDragDelay=function(){return this.getOption("dragDelay")},this.setSelectionStyle=function(e){this.setOption("selectionStyle",e)},this.getSelectionStyle=function(){return this.getOption("selectionStyle")},this.setHighlightActiveLine=function(e){this.setOption("highlightActiveLine",e)},this.getHighlightActiveLine=function(){return this.getOption("highlightActiveLine")},this.setHighlightGutterLine=function(e){this.setOption("highlightGutterLine",e)},this.getHighlightGutterLine=function(){return this.getOption("highlightGutterLine")},this.setHighlightSelectedWord=function(e){this.setOption("highlightSelectedWord",e)},this.getHighlightSelectedWord=function(){return this.$highlightSelectedWord},this.setAnimatedScroll=function(e){this.renderer.setAnimatedScroll(e)},this.getAnimatedScroll=function(){return this.renderer.getAnimatedScroll()},this.setShowInvisibles=function(e){this.renderer.setShowInvisibles(e)},this.getShowInvisibles=function(){return this.renderer.getShowInvisibles()},this.setDisplayIndentGuides=function(e){this.renderer.setDisplayIndentGuides(e)},this.getDisplayIndentGuides=function(){return this.renderer.getDisplayIndentGuides()},this.setHighlightIndentGuides=function(e){this.renderer.setHighlightIndentGuides(e)},this.getHighlightIndentGuides=function(){return this.renderer.getHighlightIndentGuides()},this.setShowPrintMargin=function(e){this.renderer.setShowPrintMargin(e)},this.getShowPrintMargin=function(){return this.renderer.getShowPrintMargin()},this.setPrintMarginColumn=function(e){this.renderer.setPrintMarginColumn(e)},this.getPrintMarginColumn=function(){return this.renderer.getPrintMarginColumn()},this.setReadOnly=function(e){this.setOption("readOnly",e)},this.getReadOnly=function(){return this.getOption("readOnly")},this.setBehavioursEnabled=function(e){this.setOption("behavioursEnabled",e)},this.getBehavioursEnabled=function(){return this.getOption("behavioursEnabled")},this.setWrapBehavioursEnabled=function(e){this.setOption("wrapBehavioursEnabled",e)},this.getWrapBehavioursEnabled=function(){return this.getOption("wrapBehavioursEnabled")},this.setShowFoldWidgets=function(e){this.setOption("showFoldWidgets",e)},this.getShowFoldWidgets=function(){return this.getOption("showFoldWidgets")},this.setFadeFoldWidgets=function(e){this.setOption("fadeFoldWidgets",e)},this.getFadeFoldWidgets=function(){return this.getOption("fadeFoldWidgets")},this.remove=function(e){this.selection.isEmpty()&&(e=="left"?this.selection.selectLeft():this.selection.selectRight());var t=this.getSelectionRange();if(this.getBehavioursEnabled()){var n=this.session,r=n.getState(t.start.row),i=n.getMode().transformAction(r,"deletion",this,n,t);if(t.end.column===0){var s=n.getTextRange(t);if(s[s.length-1]=="\n"){var o=n.getLine(t.end.row);/^\s+$/.test(o)&&(t.end.column=o.length)}}i&&(t=i)}this.session.remove(t),this.clearSelection()},this.removeWordRight=function(){this.selection.isEmpty()&&this.selection.selectWordRight(),this.session.remove(this.getSelectionRange()),this.clearSelection()},this.removeWordLeft=function(){this.selection.isEmpty()&&this.selection.selectWordLeft(),this.session.remove(this.getSelectionRange()),this.clearSelection()},this.removeToLineStart=function(){this.selection.isEmpty()&&this.selection.selectLineStart(),this.selection.isEmpty()&&this.selection.selectLeft(),this.session.remove(this.getSelectionRange()),this.clearSelection()},this.removeToLineEnd=function(){this.selection.isEmpty()&&this.selection.selectLineEnd();var e=this.getSelectionRange();e.start.column==e.end.column&&e.start.row==e.end.row&&(e.end.column=0,e.end.row++),this.session.remove(e),this.clearSelection()},this.splitLine=function(){this.selection.isEmpty()||(this.session.remove(this.getSelectionRange()),this.clearSelection());var e=this.getCursorPosition();this.insert("\n"),this.moveCursorToPosition(e)},this.transposeLetters=function(){if(!this.selection.isEmpty())return;var e=this.getCursorPosition(),t=e.column;if(t===0)return;var n=this.session.getLine(e.row),r,i;t<n.length?(r=n.charAt(t)+n.charAt(t-1),i=new d(e.row,t-1,e.row,t+1)):(r=n.charAt(t-1)+n.charAt(t-2),i=new d(e.row,t-2,e.row,t)),this.session.replace(i,r),this.session.selection.moveToPosition(i.end)},this.toLowerCase=function(){var e=this.getSelectionRange();this.selection.isEmpty()&&this.selection.selectWord();var t=this.getSelectionRange(),n=this.session.getTextRange(t);this.session.replace(t,n.toLowerCase()),this.selection.setSelectionRange(e)},this.toUpperCase=function(){var e=this.getSelectionRange();this.selection.isEmpty()&&this.selection.selectWord();var t=this.getSelectionRange(),n=this.session.getTextRange(t);this.session.replace(t,n.toUpperCase()),this.selection.setSelectionRange(e)},this.indent=function(){var e=this.session,t=this.getSelectionRange();if(t.start.row<t.end.row){var n=this.$getSelectedRows();e.indentRows(n.first,n.last,"	");return}if(t.start.column<t.end.column){var r=e.getTextRange(t);if(!/^\s+$/.test(r)){var n=this.$getSelectedRows();e.indentRows(n.first,n.last,"	");return}}var i=e.getLine(t.start.row),s=t.start,u=e.getTabSize(),a=e.documentToScreenColumn(s.row,s.column);if(this.session.getUseSoftTabs())var f=u-a%u,l=o.stringRepeat(" ",f);else{var f=a%u;while(i[t.start.column-1]==" "&&f)t.start.column--,f--;this.selection.setSelectionRange(t),l="	"}return this.insert(l)},this.blockIndent=function(){var e=this.$getSelectedRows();this.session.indentRows(e.first,e.last,"	")},this.blockOutdent=function(){var e=this.session.getSelection();this.session.outdentRows(e.getRange())},this.sortLines=function(){var e=this.$getSelectedRows(),t=this.session,n=[];for(var r=e.first;r<=e.last;r++)n.push(t.getLine(r));n.sort(function(e,t){return e.toLowerCase()<t.toLowerCase()?-1:e.toLowerCase()>t.toLowerCase()?1:0});var i=new d(0,0,0,0);for(var r=e.first;r<=e.last;r++){var s=t.getLine(r);i.start.row=r,i.end.row=r,i.end.column=s.length,t.replace(i,n[r-e.first])}},this.toggleCommentLines=function(){var e=this.session.getState(this.getCursorPosition().row),t=this.$getSelectedRows();this.session.getMode().toggleCommentLines(e,this.session,t.first,t.last)},this.toggleBlockComment=function(){var e=this.getCursorPosition(),t=this.session.getState(e.row),n=this.getSelectionRange();this.session.getMode().toggleBlockComment(t,this.session,n,e)},this.getNumberAt=function(e,t){var n=/[\-]?[0-9]+(?:\.[0-9]+)?/g;n.lastIndex=0;var r=this.session.getLine(e);while(n.lastIndex<t){var i=n.exec(r);if(i.index<=t&&i.index+i[0].length>=t){var s={value:i[0],start:i.index,end:i.index+i[0].length};return s}}return null},this.modifyNumber=function(e){var t=this.selection.getCursor().row,n=this.selection.getCursor().column,r=new d(t,n-1,t,n),i=this.session.getTextRange(r);if(!isNaN(parseFloat(i))&&isFinite(i)){var s=this.getNumberAt(t,n);if(s){var o=s.value.indexOf(".")>=0?s.start+s.value.indexOf(".")+1:s.end,u=s.start+s.value.length-o,a=parseFloat(s.value);a*=Math.pow(10,u),o!==s.end&&n<o?e*=Math.pow(10,s.end-n-1):e*=Math.pow(10,s.end-n),a+=e,a/=Math.pow(10,u);var f=a.toFixed(u),l=new d(t,s.start,t,s.end);this.session.replace(l,f),this.moveCursorTo(t,Math.max(s.start+1,n+f.length-s.value.length))}}else this.toggleWord()},this.$toggleWordPairs=[["first","last"],["true","false"],["yes","no"],["width","height"],["top","bottom"],["right","left"],["on","off"],["x","y"],["get","set"],["max","min"],["horizontal","vertical"],["show","hide"],["add","remove"],["up","down"],["before","after"],["even","odd"],["in","out"],["inside","outside"],["next","previous"],["increase","decrease"],["attach","detach"],["&&","||"],["==","!="]],this.toggleWord=function(){var e=this.selection.getCursor().row,t=this.selection.getCursor().column;this.selection.selectWord();var n=this.getSelectedText(),r=this.selection.getWordRange().start.column,i=n.replace(/([a-z]+|[A-Z]+)(?=[A-Z_]|$)/g,"$1 ").split(/\s/),s=t-r-1;s<0&&(s=0);var u=0,a=0,f=this;n.match(/[A-Za-z0-9_]+/)&&i.forEach(function(t,i){a=u+t.length,s>=u&&s<=a&&(n=t,f.selection.clearSelection(),f.moveCursorTo(e,u+r),f.selection.selectTo(e,a+r)),u=a});var l=this.$toggleWordPairs,c;for(var h=0;h<l.length;h++){var p=l[h];for(var d=0;d<=1;d++){var v=+!d,m=n.match(new RegExp("^\\s?_?("+o.escapeRegExp(p[d])+")\\s?$","i"));if(m){var g=n.match(new RegExp("([_]|^|\\s)("+o.escapeRegExp(m[1])+")($|\\s)","g"));g&&(c=n.replace(new RegExp(o.escapeRegExp(p[d]),"i"),function(e){var t=p[v];return e.toUpperCase()==e?t=t.toUpperCase():e.charAt(0).toUpperCase()==e.charAt(0)&&(t=t.substr(0,0)+p[v].charAt(0).toUpperCase()+t.substr(1)),t}),this.insert(c),c="")}}}},this.findLinkAt=function(e,t){var n,i,s=this.session.getLine(e),o=s.split(/((?:https?|ftp):\/\/[\S]+)/),u=t;u<0&&(u=0);var a=0,f=0,l;try{for(var c=r(o),h=c.next();!h.done;h=c.next()){var p=h.value;f=a+p.length;if(u>=a&&u<=f&&p.match(/((?:https?|ftp):\/\/[\S]+)/)){l=p.replace(/[\s:.,'";}\]]+$/,"");break}a=f}}catch(d){n={error:d}}finally{try{h&&!h.done&&(i=c.return)&&i.call(c)}finally{if(n)throw n.error}}return l},this.openLink=function(){var e=this.selection.getCursor(),t=this.findLinkAt(e.row,e.column);return t&&window.open(t,"_blank"),t!=null},this.removeLines=function(){var e=this.$getSelectedRows();this.session.removeFullLines(e.first,e.last),this.clearSelection()},this.duplicateSelection=function(){var e=this.selection,t=this.session,n=e.getRange(),r=e.isBackwards();if(n.isEmpty()){var i=n.start.row;t.duplicateLines(i,i)}else{var s=r?n.start:n.end,o=t.insert(s,t.getTextRange(n),!1);n.start=s,n.end=o,e.setSelectionRange(n,r)}},this.moveLinesDown=function(){this.$moveLines(1,!1)},this.moveLinesUp=function(){this.$moveLines(-1,!1)},this.moveText=function(e,t,n){return this.session.moveText(e,t,n)},this.copyLinesUp=function(){this.$moveLines(-1,!0)},this.copyLinesDown=function(){this.$moveLines(1,!0)},this.$moveLines=function(e,t){var n,r,i=this.selection;if(!i.inMultiSelectMode||this.inVirtualSelectionMode){var s=i.toOrientedRange();n=this.$getSelectedRows(s),r=this.session.$moveLines(n.first,n.last,t?0:e),t&&e==-1&&(r=0),s.moveBy(r,0),i.fromOrientedRange(s)}else{var o=i.rangeList.ranges;i.rangeList.detach(this.session),this.inVirtualSelectionMode=!0;var u=0,a=0,f=o.length;for(var l=0;l<f;l++){var c=l;o[l].moveBy(u,0),n=this.$getSelectedRows(o[l]);var h=n.first,p=n.last;while(++l<f){a&&o[l].moveBy(a,0);var d=this.$getSelectedRows(o[l]);if(t&&d.first!=p)break;if(!t&&d.first>p+1)break;p=d.last}l--,u=this.session.$moveLines(h,p,t?0:e),t&&e==-1&&(c=l+1);while(c<=l)o[c].moveBy(u,0),c++;t||(u=0),a+=u}i.fromOrientedRange(i.ranges[0]),i.rangeList.attach(this.session),this.inVirtualSelectionMode=!1}},this.$getSelectedRows=function(e){return e=(e||this.getSelectionRange()).collapseRows(),{first:this.session.getRowFoldStart(e.start.row),last:this.session.getRowFoldEnd(e.end.row)}},this.onCompositionStart=function(e){this.renderer.showComposition(e)},this.onCompositionUpdate=function(e){this.renderer.setCompositionText(e)},this.onCompositionEnd=function(){this.renderer.hideComposition()},this.getFirstVisibleRow=function(){return this.renderer.getFirstVisibleRow()},this.getLastVisibleRow=function(){return this.renderer.getLastVisibleRow()},this.isRowVisible=function(e){return e>=this.getFirstVisibleRow()&&e<=this.getLastVisibleRow()},this.isRowFullyVisible=function(e){return e>=this.renderer.getFirstFullyVisibleRow()&&e<=this.renderer.getLastFullyVisibleRow()},this.$getVisibleRowCount=function(){return this.renderer.getScrollBottomRow()-this.renderer.getScrollTopRow()+1},this.$moveByPage=function(e,t){var n=this.renderer,r=this.renderer.layerConfig,i=e*Math.floor(r.height/r.lineHeight);t===!0?this.selection.$moveSelection(function(){this.moveCursorBy(i,0)}):t===!1&&(this.selection.moveCursorBy(i,0),this.selection.clearSelection());var s=n.scrollTop;n.scrollBy(0,i*r.lineHeight),t!=null&&n.scrollCursorIntoView(null,.5),n.animateScrolling(s)},this.selectPageDown=function(){this.$moveByPage(1,!0)},this.selectPageUp=function(){this.$moveByPage(-1,!0)},this.gotoPageDown=function(){this.$moveByPage(1,!1)},this.gotoPageUp=function(){this.$moveByPage(-1,!1)},this.scrollPageDown=function(){this.$moveByPage(1)},this.scrollPageUp=function(){this.$moveByPage(-1)},this.scrollToRow=function(e){this.renderer.scrollToRow(e)},this.scrollToLine=function(e,t,n,r){this.renderer.scrollToLine(e,t,n,r)},this.centerSelection=function(){var e=this.getSelectionRange(),t={row:Math.floor(e.start.row+(e.end.row-e.start.row)/2),column:Math.floor(e.start.column+(e.end.column-e.start.column)/2)};this.renderer.alignCursor(t,.5)},this.getCursorPosition=function(){return this.selection.getCursor()},this.getCursorPositionScreen=function(){return this.session.documentToScreenPosition(this.getCursorPosition())},this.getSelectionRange=function(){return this.selection.getRange()},this.selectAll=function(){this.selection.selectAll()},this.clearSelection=function(){this.selection.clearSelection()},this.moveCursorTo=function(e,t){this.selection.moveCursorTo(e,t)},this.moveCursorToPosition=function(e){this.selection.moveCursorToPosition(e)},this.jumpToMatching=function(e,t){var n=this.getCursorPosition(),r=new b(this.session,n.row,n.column),i=r.getCurrentToken(),s=0;i&&i.type.indexOf("tag-name")!==-1&&(i=r.stepBackward());var o=i||r.stepForward();if(!o)return;var u,a=!1,f={},l=n.column-o.start,c,h={")":"(","(":"(","]":"[","[":"[","{":"{","}":"{"};do{if(o.value.match(/[{}()\[\]]/g))for(;l<o.value.length&&!a;l++){if(!h[o.value[l]])continue;c=h[o.value[l]]+"."+o.type.replace("rparen","lparen"),isNaN(f[c])&&(f[c]=0);switch(o.value[l]){case"(":case"[":case"{":f[c]++;break;case")":case"]":case"}":f[c]--,f[c]===-1&&(u="bracket",a=!0)}}else o.type.indexOf("tag-name")!==-1&&(isNaN(f[o.value])&&(f[o.value]=0),i.value==="<"&&s>1?f[o.value]++:i.value==="</"&&f[o.value]--,f[o.value]===-1&&(u="tag",a=!0));a||(i=o,s++,o=r.stepForward(),l=0)}while(o&&!a);if(!u)return;var p,v;if(u==="bracket"){p=this.session.getBracketRange(n);if(!p){p=new d(r.getCurrentTokenRow(),r.getCurrentTokenColumn()+l-1,r.getCurrentTokenRow(),r.getCurrentTokenColumn()+l-1),v=p.start;if(t||v.row===n.row&&Math.abs(v.column-n.column)<2)p=this.session.getBracketRange(v)}}else if(u==="tag"){if(!o||o.type.indexOf("tag-name")===-1)return;p=new d(r.getCurrentTokenRow(),r.getCurrentTokenColumn()-2,r.getCurrentTokenRow(),r.getCurrentTokenColumn()-2);if(p.compare(n.row,n.column)===0){var m=this.session.getMatchingTags(n);m&&(m.openTag.contains(n.row,n.column)?(p=m.closeTag,v=p.start):(p=m.openTag,m.closeTag.start.row===n.row&&m.closeTag.start.column===n.column?v=p.end:v=p.start))}v=v||p.start}v=p&&p.cursor||v,v&&(e?p&&t?this.selection.setRange(p):p&&p.isEqual(this.getSelectionRange())?this.clearSelection():this.selection.selectTo(v.row,v.column):this.selection.moveTo(v.row,v.column))},this.gotoLine=function(e,t,n){this.selection.clearSelection(),this.session.unfold({row:e-1,column:t||0}),this.exitMultiSelectMode&&this.exitMultiSelectMode(),this.moveCursorTo(e-1,t||0),this.isRowFullyVisible(e-1)||this.scrollToLine(e-1,!0,n)},this.navigateTo=function(e,t){this.selection.moveTo(e,t)},this.navigateUp=function(e){if(this.selection.isMultiLine()&&!this.selection.isBackwards()){var t=this.selection.anchor.getPosition();return this.moveCursorToPosition(t)}this.selection.clearSelection(),this.selection.moveCursorBy(-e||-1,0)},this.navigateDown=function(e){if(this.selection.isMultiLine()&&this.selection.isBackwards()){var t=this.selection.anchor.getPosition();return this.moveCursorToPosition(t)}this.selection.clearSelection(),this.selection.moveCursorBy(e||1,0)},this.navigateLeft=function(e){if(!this.selection.isEmpty()){var t=this.getSelectionRange().start;this.moveCursorToPosition(t)}else{e=e||1;while(e--)this.selection.moveCursorLeft()}this.clearSelection()},this.navigateRight=function(e){if(!this.selection.isEmpty()){var t=this.getSelectionRange().end;this.moveCursorToPosition(t)}else{e=e||1;while(e--)this.selection.moveCursorRight()}this.clearSelection()},this.navigateLineStart=function(){this.selection.moveCursorLineStart(),this.clearSelection()},this.navigateLineEnd=function(){this.selection.moveCursorLineEnd(),this.clearSelection()},this.navigateFileEnd=function(){this.selection.moveCursorFileEnd(),this.clearSelection()},this.navigateFileStart=function(){this.selection.moveCursorFileStart(),this.clearSelection()},this.navigateWordRight=function(){this.selection.moveCursorWordRight(),this.clearSelection()},this.navigateWordLeft=function(){this.selection.moveCursorWordLeft(),this.clearSelection()},this.replace=function(e,t){t&&this.$search.set(t);var n=this.$search.find(this.session),r=0;return n?(this.$tryReplace(n,e)&&(r=1),this.selection.setSelectionRange(n),this.renderer.scrollSelectionIntoView(n.start,n.end),r):r},this.replaceAll=function(e,t){t&&this.$search.set(t);var n=this.$search.findAll(this.session),r=0;if(!n.length)return r;var i=this.getSelectionRange();this.selection.moveTo(0,0);for(var s=n.length-1;s>=0;--s)this.$tryReplace(n[s],e)&&r++;return this.selection.setSelectionRange(i),r},this.$tryReplace=function(e,t){var n=this.session.getTextRange(e);return t=this.$search.replace(n,t),t!==null?(e.end=this.session.replace(e,t),e):null},this.getLastSearchOptions=function(){return this.$search.getOptions()},this.find=function(e,t,n){t||(t={}),typeof e=="string"||e instanceof RegExp?t.needle=e:typeof e=="object"&&i.mixin(t,e);var r=this.selection.getRange();t.needle==null&&(e=this.session.getTextRange(r)||this.$search.$options.needle,e||(r=this.session.getWordRange(r.start.row,r.start.column),e=this.session.getTextRange(r)),this.$search.set({needle:e})),this.$search.set(t),t.start||this.$search.set({start:r});var s=this.$search.find(this.session);if(t.preventScroll)return s;if(s)return this.revealRange(s,n),s;t.backwards?r.start=r.end:r.end=r.start,this.selection.setRange(r)},this.findNext=function(e,t){this.find({skipCurrent:!0,backwards:!1},e,t)},this.findPrevious=function(e,t){this.find(e,{skipCurrent:!0,backwards:!0},t)},this.revealRange=function(e,t){this.session.unfold(e),this.selection.setSelectionRange(e);var n=this.renderer.scrollTop;this.renderer.scrollSelectionIntoView(e.start,e.end,.5),t!==!1&&this.renderer.animateScrolling(n)},this.undo=function(){this.session.getUndoManager().undo(this.session),this.renderer.scrollCursorIntoView(null,.5)},this.redo=function(){this.session.getUndoManager().redo(this.session),this.renderer.scrollCursorIntoView(null,.5)},this.destroy=function(){this.$toDestroy&&(this.$toDestroy.forEach(function(e){e.destroy()}),this.$toDestroy=null),this.$mouseHandler&&this.$mouseHandler.destroy(),this.renderer.destroy(),this._signal("destroy",this),this.session&&this.session.destroy(),this._$emitInputEvent&&this._$emitInputEvent.cancel(),this.removeAllListeners()},this.setAutoScrollEditorIntoView=function(e){if(!e)return;var t,n=this,r=!1;this.$scrollAnchor||(this.$scrollAnchor=document.createElement("div"));var i=this.$scrollAnchor;i.style.cssText="position:absolute",this.container.insertBefore(i,this.container.firstChild);var s=this.on("changeSelection",function(){r=!0}),o=this.renderer.on("beforeRender",function(){r&&(t=n.renderer.container.getBoundingClientRect())}),u=this.renderer.on("afterRender",function(){if(r&&t&&(n.isFocused()||n.searchBox&&n.searchBox.isFocused())){var e=n.renderer,s=e.$cursorLayer.$pixelPos,o=e.layerConfig,u=s.top-o.offset;s.top>=0&&u+t.top<0?r=!0:s.top<o.height&&s.top+t.top+o.lineHeight>window.innerHeight?r=!1:r=null,r!=null&&(i.style.top=u+"px",i.style.left=s.left+"px",i.style.height=o.lineHeight+"px",i.scrollIntoView(r)),r=t=null}});this.setAutoScrollEditorIntoView=function(e){if(e)return;delete this.setAutoScrollEditorIntoView,this.off("changeSelection",s),this.renderer.off("afterRender",u),this.renderer.off("beforeRender",o)}},this.$resetCursorStyle=function(){var e=this.$cursorStyle||"ace",t=this.renderer.$cursorLayer;if(!t)return;t.setSmoothBlinking(/smooth/.test(e)),t.isBlinking=!this.$readOnly&&e!="wide",s.setCssClass(t.element,"ace_slim-cursors",/slim/.test(e))},this.prompt=function(e,t,n){var r=this;y.loadModule("./ext/prompt",function(i){i.prompt(r,e,t,n)})}}.call(E.prototype),y.defineOptions(E.prototype,"editor",{selectionStyle:{set:function(e){this.onSelectionChange(),this._signal("changeSelectionStyle",{data:e})},initialValue:"line"},highlightActiveLine:{set:function(){this.$updateHighlightActiveLine()},initialValue:!0},highlightSelectedWord:{set:function(e){this.$onSelectionChange()},initialValue:!0},readOnly:{set:function(e){this.textInput.setReadOnly(e),this.$resetCursorStyle()},initialValue:!1},copyWithEmptySelection:{set:function(e){this.textInput.setCopyWithEmptySelection(e)},initialValue:!1},cursorStyle:{set:function(e){this.$resetCursorStyle()},values:["ace","slim","smooth","wide"],initialValue:"ace"},mergeUndoDeltas:{values:[!1,!0,"always"],initialValue:!0},behavioursEnabled:{initialValue:!0},wrapBehavioursEnabled:{initialValue:!0},enableAutoIndent:{initialValue:!0},autoScrollEditorIntoView:{set:function(e){this.setAutoScrollEditorIntoView(e)}},keyboardHandler:{set:function(e){this.setKeyboardHandler(e)},get:function(){return this.$keybindingId},handlesSet:!0},value:{set:function(e){this.session.setValue(e)},get:function(){return this.getValue()},handlesSet:!0,hidden:!0},session:{set:function(e){this.setSession(e)},get:function(){return this.session},handlesSet:!0,hidden:!0},showLineNumbers:{set:function(e){this.renderer.$gutterLayer.setShowLineNumbers(e),this.renderer.$loop.schedule(this.renderer.CHANGE_GUTTER),e&&this.$relativeLineNumbers?S.attach(this):S.detach(this)},initialValue:!0},relativeLineNumbers:{set:function(e){this.$showLineNumbers&&e?S.attach(this):S.detach(this)}},placeholder:{set:function(e){this.$updatePlaceholder||(this.$updatePlaceholder=function(){var e=this.session&&(this.renderer.$composition||this.getValue());if(e&&this.renderer.placeholderNode)this.renderer.off("afterRender",this.$updatePlaceholder),s.removeCssClass(this.container,"ace_hasPlaceholder"),this.renderer.placeholderNode.remove(),this.renderer.placeholderNode=null;else if(!e&&!this.renderer.placeholderNode){this.renderer.on("afterRender",this.$updatePlaceholder),s.addCssClass(this.container,"ace_hasPlaceholder");var t=s.createElement("div");t.className="ace_placeholder",t.textContent=this.$placeholder||"",this.renderer.placeholderNode=t,this.renderer.content.appendChild(this.renderer.placeholderNode)}else!e&&this.renderer.placeholderNode&&(this.renderer.placeholderNode.textContent=this.$placeholder||"")}.bind(this),this.on("input",this.$updatePlaceholder)),this.$updatePlaceholder()}},customScrollbar:"renderer",hScrollBarAlwaysVisible:"renderer",vScrollBarAlwaysVisible:"renderer",highlightGutterLine:"renderer",animatedScroll:"renderer",showInvisibles:"renderer",showPrintMargin:"renderer",printMarginColumn:"renderer",printMargin:"renderer",fadeFoldWidgets:"renderer",showFoldWidgets:"renderer",displayIndentGuides:"renderer",highlightIndentGuides:"renderer",showGutter:"renderer",fontSize:"renderer",fontFamily:"renderer",maxLines:"renderer",minLines:"renderer",scrollPastEnd:"renderer",fixedWidthGutter:"renderer",theme:"renderer",hasCssTransforms:"renderer",maxPixelHeight:"renderer",useTextareaForIME:"renderer",scrollSpeed:"$mouseHandler",dragDelay:"$mouseHandler",dragEnabled:"$mouseHandler",focusTimeout:"$mouseHandler",tooltipFollowsMouse:"$mouseHandler",firstLineNumber:"session",overwrite:"session",newLineMode:"session",useWorker:"session",useSoftTabs:"session",navigateWithinSoftTabs:"session",tabSize:"session",wrap:"session",indentedSoftWrap:"session",foldStyle:"session",mode:"session"});var S={getText:function(e,t){return(Math.abs(e.selection.lead.row-t)||t+1+(t<9?"\u00b7":""))+""},getWidth:function(e,t,n){return Math.max(t.toString().length,(n.lastRow+1).toString().length,2)*n.characterWidth},update:function(e,t){t.renderer.$loop.schedule(t.renderer.CHANGE_GUTTER)},attach:function(e){e.renderer.$gutterLayer.$renderer=this,e.on("changeSelection",this.update),this.update(null,e)},detach:function(e){e.renderer.$gutterLayer.$renderer==this&&(e.renderer.$gutterLayer.$renderer=null),e.off("changeSelection",this.update),this.update(null,e)}};t.Editor=E}),ace.define("ace/undomanager",["require","exports","module","ace/range"],function(e,t,n){"use strict";function i(e,t){for(var n=t;n--;){var r=e[n];if(r&&!r[0].ignore){while(n<t-1){var i=d(e[n],e[n+1]);e[n]=i[0],e[n+1]=i[1],n++}return!0}}}function a(e){var t=e.action=="insert",n=e.start,r=e.end,i=(r.row-n.row)*(t?1:-1),s=(r.column-n.column)*(t?1:-1);t&&(r=n);for(var o in this.marks){var a=this.marks[o],f=u(a,n);if(f<0)continue;if(f===0&&t){if(a.bias!=1){a.bias==-1;continue}f=1}var l=t?f:u(a,r);if(l>0){a.row+=i,a.column+=a.row==r.row?s:0;continue}!t&&l<=0&&(a.row=n.row,a.column=n.column,l===0&&(a.bias=1))}}function f(e){return{row:e.row,column:e.column}}function l(e){return{start:f(e.start),end:f(e.end),action:e.action,lines:e.lines.slice()}}function c(e){e=e||this;if(Array.isArray(e))return e.map(c).join("\n");var t="";e.action?(t=e.action=="insert"?"+":"-",t+="["+e.lines+"]"):e.value&&(Array.isArray(e.value)?t=e.value.map(h).join("\n"):t=h(e.value)),e.start&&(t+=h(e));if(e.id||e.rev)t+="	("+(e.id||e.rev)+")";return t}function h(e){return e.start.row+":"+e.start.column+"=>"+e.end.row+":"+e.end.column}function p(e,t){var n=e.action=="insert",r=t.action=="insert";if(n&&r)if(o(t.start,e.end)>=0)m(t,e,-1);else{if(!(o(t.start,e.start)<=0))return null;m(e,t,1)}else if(n&&!r)if(o(t.start,e.end)>=0)m(t,e,-1);else{if(!(o(t.end,e.start)<=0))return null;m(e,t,-1)}else if(!n&&r)if(o(t.start,e.start)>=0)m(t,e,1);else{if(!(o(t.start,e.start)<=0))return null;m(e,t,1)}else if(!n&&!r)if(o(t.start,e.start)>=0)m(t,e,1);else{if(!(o(t.end,e.start)<=0))return null;m(e,t,-1)}return[t,e]}function d(e,t){for(var n=e.length;n--;)for(var r=0;r<t.length;r++)if(!p(e[n],t[r])){while(n<e.length){while(r--)p(t[r],e[n]);r=t.length,n++}return[e,t]}return e.selectionBefore=t.selectionBefore=e.selectionAfter=t.selectionAfter=null,[t,e]}function v(e,t){var n=e.action=="insert",r=t.action=="insert";if(n&&r)o(e.start,t.start)<0?m(t,e,1):m(e,t,1);else if(n&&!r)o(e.start,t.end)>=0?m(e,t,-1):o(e.start,t.start)<=0?m(t,e,1):(m(e,s.fromPoints(t.start,e.start),-1),m(t,e,1));else if(!n&&r)o(t.start,e.end)>=0?m(t,e,-1):o(t.start,e.start)<=0?m(e,t,1):(m(t,s.fromPoints(e.start,t.start),-1),m(e,t,1));else if(!n&&!r)if(o(t.start,e.end)>=0)m(t,e,-1);else{if(!(o(t.end,e.start)<=0)){var i,u;return o(e.start,t.start)<0&&(i=e,e=y(e,t.start)),o(e.end,t.end)>0&&(u=y(e,t.end)),g(t.end,e.start,e.end,-1),u&&!i&&(e.lines=u.lines,e.start=u.start,e.end=u.end,u=e),[t,i,u].filter(Boolean)}m(e,t,-1)}return[t,e]}function m(e,t,n){g(e.start,t.start,t.end,n),g(e.end,t.start,t.end,n)}function g(e,t,n,r){e.row==(r==1?t:n).row&&(e.column+=r*(n.column-t.column)),e.row+=r*(n.row-t.row)}function y(e,t){var n=e.lines,r=e.end;e.end=f(t);var i=e.end.row-e.start.row,s=n.splice(i,n.length),o=i?t.column:t.column-e.start.column;n.push(s[0].substring(0,o)),s[0]=s[0].substr(o);var u={start:f(t),end:r,lines:s,action:e.action};return u}function b(e,t){t=l(t);for(var n=e.length;n--;){var r=e[n];for(var i=0;i<r.length;i++){var s=r[i],o=v(s,t);t=o[0],o.length!=2&&(o[2]?(r.splice(i+1,1,o[1],o[2]),i++):o[1]||(r.splice(i,1),i--))}r.length||e.splice(n,1)}return e}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];for(var i=0;i<r.length;i++)b(e,r[i])}}var r=function(){this.$maxRev=0,this.$fromUndo=!1,this.$undoDepth=Infinity,this.reset()};(function(){this.addSession=function(e){this.$session=e},this.add=function(e,t,n){if(this.$fromUndo)return;if(e==this.$lastDelta)return;this.$keepRedoStack||(this.$redoStack.length=0);if(t===!1||!this.lastDeltas){this.lastDeltas=[];var r=this.$undoStack.length;r>this.$undoDepth-1&&this.$undoStack.splice(0,r-this.$undoDepth+1),this.$undoStack.push(this.lastDeltas),e.id=this.$rev=++this.$maxRev}if(e.action=="remove"||e.action=="insert")this.$lastDelta=e;this.lastDeltas.push(e)},this.addSelection=function(e,t){this.selections.push({value:e,rev:t||this.$rev})},this.startNewGroup=function(){return this.lastDeltas=null,this.$rev},this.markIgnored=function(e,t){t==null&&(t=this.$rev+1);var n=this.$undoStack;for(var r=n.length;r--;){var i=n[r][0];if(i.id<=e)break;i.id<t&&(i.ignore=!0)}this.lastDeltas=null},this.getSelection=function(e,t){var n=this.selections;for(var r=n.length;r--;){var i=n[r];if(i.rev<e)return t&&(i=n[r+1]),i}},this.getRevision=function(){return this.$rev},this.getDeltas=function(e,t){t==null&&(t=this.$rev+1);var n=this.$undoStack,r=null,i=0;for(var s=n.length;s--;){var o=n[s][0];o.id<t&&!r&&(r=s+1);if(o.id<=e){i=s+1;break}}return n.slice(i,r)},this.getChangedRanges=function(e,t){t==null&&(t=this.$rev+1)},this.getChangedLines=function(e,t){t==null&&(t=this.$rev+1)},this.undo=function(e,t){this.lastDeltas=null;var n=this.$undoStack;if(!i(n,n.length))return;e||(e=this.$session),this.$redoStackBaseRev!==this.$rev&&this.$redoStack.length&&(this.$redoStack=[]),this.$fromUndo=!0;var r=n.pop(),s=null;return r&&(s=e.undoChanges(r,t),this.$redoStack.push(r),this.$syncRev()),this.$fromUndo=!1,s},this.redo=function(e,t){this.lastDeltas=null,e||(e=this.$session),this.$fromUndo=!0;if(this.$redoStackBaseRev!=this.$rev){var n=this.getDeltas(this.$redoStackBaseRev,this.$rev+1);w(this.$redoStack,n),this.$redoStackBaseRev=this.$rev,this.$redoStack.forEach(function(e){e[0].id=++this.$maxRev},this)}var r=this.$redoStack.pop(),i=null;return r&&(i=e.redoChanges(r,t),this.$undoStack.push(r),this.$syncRev()),this.$fromUndo=!1,i},this.$syncRev=function(){var e=this.$undoStack,t=e[e.length-1],n=t&&t[0].id||0;this.$redoStackBaseRev=n,this.$rev=n},this.reset=function(){this.lastDeltas=null,this.$lastDelta=null,this.$undoStack=[],this.$redoStack=[],this.$rev=0,this.mark=0,this.$redoStackBaseRev=this.$rev,this.selections=[]},this.canUndo=function(){return this.$undoStack.length>0},this.canRedo=function(){return this.$redoStack.length>0},this.bookmark=function(e){e==undefined&&(e=this.$rev),this.mark=e},this.isAtBookmark=function(){return this.$rev===this.mark},this.toJSON=function(){},this.fromJSON=function(){},this.hasUndo=this.canUndo,this.hasRedo=this.canRedo,this.isClean=this.isAtBookmark,this.markClean=this.bookmark,this.$prettyPrint=function(e){return e?c(e):c(this.$undoStack)+"\n---\n"+c(this.$redoStack)}}).call(r.prototype);var s=e("./range").Range,o=s.comparePoints,u=s.comparePoints;t.UndoManager=r}),ace.define("ace/layer/lines",["require","exports","module","ace/lib/dom"],function(e,t,n){"use strict";var r=e("../lib/dom"),i=function(e,t){this.element=e,this.canvasHeight=t||5e5,this.element.style.height=this.canvasHeight*2+"px",this.cells=[],this.cellCache=[],this.$offsetCoefficient=0};(function(){this.moveContainer=function(e){r.translate(this.element,0,-(e.firstRowScreen*e.lineHeight%this.canvasHeight)-e.offset*this.$offsetCoefficient)},this.pageChanged=function(e,t){return Math.floor(e.firstRowScreen*e.lineHeight/this.canvasHeight)!==Math.floor(t.firstRowScreen*t.lineHeight/this.canvasHeight)},this.computeLineTop=function(e,t,n){var r=t.firstRowScreen*t.lineHeight,i=Math.floor(r/this.canvasHeight),s=n.documentToScreenRow(e,0)*t.lineHeight;return s-i*this.canvasHeight},this.computeLineHeight=function(e,t,n){return t.lineHeight*n.getRowLineCount(e)},this.getLength=function(){return this.cells.length},this.get=function(e){return this.cells[e]},this.shift=function(){this.$cacheCell(this.cells.shift())},this.pop=function(){this.$cacheCell(this.cells.pop())},this.push=function(e){if(Array.isArray(e)){this.cells.push.apply(this.cells,e);var t=r.createFragment(this.element);for(var n=0;n<e.length;n++)t.appendChild(e[n].element);this.element.appendChild(t)}else this.cells.push(e),this.element.appendChild(e.element)},this.unshift=function(e){if(Array.isArray(e)){this.cells.unshift.apply(this.cells,e);var t=r.createFragment(this.element);for(var n=0;n<e.length;n++)t.appendChild(e[n].element);this.element.firstChild?this.element.insertBefore(t,this.element.firstChild):this.element.appendChild(t)}else this.cells.unshift(e),this.element.insertAdjacentElement("afterbegin",e.element)},this.last=function(){return this.cells.length?this.cells[this.cells.length-1]:null},this.$cacheCell=function(e){if(!e)return;e.element.remove(),this.cellCache.push(e)},this.createCell=function(e,t,n,i){var s=this.cellCache.pop();if(!s){var o=r.createElement("div");i&&i(o),this.element.appendChild(o),s={element:o,text:"",row:e}}return s.row=e,s}}).call(i.prototype),t.Lines=i}),ace.define("ace/layer/gutter",["require","exports","module","ace/lib/dom","ace/lib/oop","ace/lib/lang","ace/lib/event_emitter","ace/layer/lines"],function(e,t,n){"use strict";function f(e){var t=document.createTextNode("");e.appendChild(t);var n=r.createElement("span");return e.appendChild(n),e}var r=e("../lib/dom"),i=e("../lib/oop"),s=e("../lib/lang"),o=e("../lib/event_emitter").EventEmitter,u=e("./lines").Lines,a=function(e){this.element=r.createElement("div"),this.element.className="ace_layer ace_gutter-layer",e.appendChild(this.element),this.setShowFoldWidgets(this.$showFoldWidgets),this.gutterWidth=0,this.$annotations=[],this.$updateAnnotations=this.$updateAnnotations.bind(this),this.$lines=new u(this.element),this.$lines.$offsetCoefficient=1};(function(){i.implement(this,o),this.setSession=function(e){this.session&&this.session.off("change",this.$updateAnnotations),this.session=e,e&&e.on("change",this.$updateAnnotations)},this.addGutterDecoration=function(e,t){window.console&&console.warn&&console.warn("deprecated use session.addGutterDecoration"),this.session.addGutterDecoration(e,t)},this.removeGutterDecoration=function(e,t){window.console&&console.warn&&console.warn("deprecated use session.removeGutterDecoration"),this.session.removeGutterDecoration(e,t)},this.setAnnotations=function(e){this.$annotations=[];for(var t=0;t<e.length;t++){var n=e[t],r=n.row,i=this.$annotations[r];i||(i=this.$annotations[r]={text:[]});var o=n.text;o=o?s.escapeHTML(o):n.html||"",i.text.indexOf(o)===-1&&i.text.push(o);var u=n.type,a=n.className;a?i.className=a:u=="error"?i.className=" ace_error":u=="warning"&&i.className!=" ace_error"?i.className=" ace_warning":u=="info"&&!i.className&&(i.className=" ace_info")}},this.$updateAnnotations=function(e){if(!this.$annotations.length)return;var t=e.start.row,n=e.end.row-t;if(n!==0)if(e.action=="remove")this.$annotations.splice(t,n+1,null);else{var r=new Array(n+1);r.unshift(t,1),this.$annotations.splice.apply(this.$annotations,r)}},this.update=function(e){this.config=e;var t=this.session,n=e.firstRow,r=Math.min(e.lastRow+e.gutterOffset,t.getLength()-1);this.oldLastRow=r,this.config=e,this.$lines.moveContainer(e),this.$updateCursorRow();var i=t.getNextFoldLine(n),s=i?i.start.row:Infinity,o=null,u=-1,a=n;for(;;){a>s&&(a=i.end.row+1,i=t.getNextFoldLine(a,i),s=i?i.start.row:Infinity);if(a>r){while(this.$lines.getLength()>u+1)this.$lines.pop();break}o=this.$lines.get(++u),o?o.row=a:(o=this.$lines.createCell(a,e,this.session,f),this.$lines.push(o)),this.$renderCell(o,e,i,a),a++}this._signal("afterRender"),this.$updateGutterWidth(e)},this.$updateGutterWidth=function(e){var t=this.session,n=t.gutterRenderer||this.$renderer,r=t.$firstLineNumber,i=this.$lines.last()?this.$lines.last().text:"";if(this.$fixedWidth||t.$useWrapMode)i=t.getLength()+r-1;var s=n?n.getWidth(t,i,e):i.toString().length*e.characterWidth,o=this.$padding||this.$computePadding();s+=o.left+o.right,s!==this.gutterWidth&&!isNaN(s)&&(this.gutterWidth=s,this.element.parentNode.style.width=this.element.style.width=Math.ceil(this.gutterWidth)+"px",this._signal("changeGutterWidth",s))},this.$updateCursorRow=function(){if(!this.$highlightGutterLine)return;var e=this.session.selection.getCursor();if(this.$cursorRow===e.row)return;this.$cursorRow=e.row},this.updateLineHighlight=function(){if(!this.$highlightGutterLine)return;var e=this.session.selection.cursor.row;this.$cursorRow=e;if(this.$cursorCell&&this.$cursorCell.row==e)return;this.$cursorCell&&(this.$cursorCell.element.className=this.$cursorCell.element.className.replace("ace_gutter-active-line ",""));var t=this.$lines.cells;this.$cursorCell=null;for(var n=0;n<t.length;n++){var r=t[n];if(r.row>=this.$cursorRow){if(r.row>this.$cursorRow){var i=this.session.getFoldLine(this.$cursorRow);if(!(n>0&&i&&i.start.row==t[n-1].row))break;r=t[n-1]}r.element.className="ace_gutter-active-line "+r.element.className,this.$cursorCell=r;break}}},this.scrollLines=function(e){var t=this.config;this.config=e,this.$updateCursorRow();if(this.$lines.pageChanged(t,e))return this.update(e);this.$lines.moveContainer(e);var n=Math.min(e.lastRow+e.gutterOffset,this.session.getLength()-1),r=this.oldLastRow;this.oldLastRow=n;if(!t||r<e.firstRow)return this.update(e);if(n<t.firstRow)return this.update(e);if(t.firstRow<e.firstRow)for(var i=this.session.getFoldedRowCount(t.firstRow,e.firstRow-1);i>0;i--)this.$lines.shift();if(r>n)for(var i=this.session.getFoldedRowCount(n+1,r);i>0;i--)this.$lines.pop();e.firstRow<t.firstRow&&this.$lines.unshift(this.$renderLines(e,e.firstRow,t.firstRow-1)),n>r&&this.$lines.push(this.$renderLines(e,r+1,n)),this.updateLineHighlight(),this._signal("afterRender"),this.$updateGutterWidth(e)},this.$renderLines=function(e,t,n){var r=[],i=t,s=this.session.getNextFoldLine(i),o=s?s.start.row:Infinity;for(;;){i>o&&(i=s.end.row+1,s=this.session.getNextFoldLine(i,s),o=s?s.start.row:Infinity);if(i>n)break;var u=this.$lines.createCell(i,e,this.session,f);this.$renderCell(u,e,s,i),r.push(u),i++}return r},this.$renderCell=function(e,t,n,i){var s=e.element,o=this.session,u=s.childNodes[0],a=s.childNodes[1],f=o.$firstLineNumber,l=o.$breakpoints,c=o.$decorations,h=o.gutterRenderer||this.$renderer,p=this.$showFoldWidgets&&o.foldWidgets,d=n?n.start.row:Number.MAX_VALUE,v="ace_gutter-cell ";this.$highlightGutterLine&&(i==this.$cursorRow||n&&i<this.$cursorRow&&i>=d&&this.$cursorRow<=n.end.row)&&(v+="ace_gutter-active-line ",this.$cursorCell!=e&&(this.$cursorCell&&(this.$cursorCell.element.className=this.$cursorCell.element.className.replace("ace_gutter-active-line ","")),this.$cursorCell=e)),l[i]&&(v+=l[i]),c[i]&&(v+=c[i]),this.$annotations[i]&&(v+=this.$annotations[i].className),s.className!=v&&(s.className=v);if(p){var m=p[i];m==null&&(m=p[i]=o.getFoldWidget(i))}if(m){var v="ace_fold-widget ace_"+m;m=="start"&&i==d&&i<n.end.row?v+=" ace_closed":v+=" ace_open",a.className!=v&&(a.className=v);var g=t.lineHeight+"px";r.setStyle(a.style,"height",g),r.setStyle(a.style,"display","inline-block")}else a&&r.setStyle(a.style,"display","none");var y=(h?h.getText(o,i):i+f).toString();return y!==u.data&&(u.data=y),r.setStyle(e.element.style,"height",this.$lines.computeLineHeight(i,t,o)+"px"),r.setStyle(e.element.style,"top",this.$lines.computeLineTop(i,t,o)+"px"),e.text=y,e},this.$fixedWidth=!1,this.$highlightGutterLine=!0,this.$renderer="",this.setHighlightGutterLine=function(e){this.$highlightGutterLine=e},this.$showLineNumbers=!0,this.$renderer="",this.setShowLineNumbers=function(e){this.$renderer=!e&&{getWidth:function(){return 0},getText:function(){return""}}},this.getShowLineNumbers=function(){return this.$showLineNumbers},this.$showFoldWidgets=!0,this.setShowFoldWidgets=function(e){e?r.addCssClass(this.element,"ace_folding-enabled"):r.removeCssClass(this.element,"ace_folding-enabled"),this.$showFoldWidgets=e,this.$padding=null},this.getShowFoldWidgets=function(){return this.$showFoldWidgets},this.$computePadding=function(){if(!this.element.firstChild)return{left:0,right:0};var e=r.computedStyle(this.element.firstChild);return this.$padding={},this.$padding.left=(parseInt(e.borderLeftWidth)||0)+(parseInt(e.paddingLeft)||0)+1,this.$padding.right=(parseInt(e.borderRightWidth)||0)+(parseInt(e.paddingRight)||0),this.$padding},this.getRegion=function(e){var t=this.$padding||this.$computePadding(),n=this.element.getBoundingClientRect();if(e.x<t.left+n.left)return"markers";if(this.$showFoldWidgets&&e.x>n.right-t.right)return"foldWidgets"}}).call(a.prototype),t.Gutter=a}),ace.define("ace/layer/marker",["require","exports","module","ace/range","ace/lib/dom"],function(e,t,n){"use strict";var r=e("../range").Range,i=e("../lib/dom"),s=function(e){this.element=i.createElement("div"),this.element.className="ace_layer ace_marker-layer",e.appendChild(this.element)};(function(){function e(e,t,n,r){return(e?1:0)|(t?2:0)|(n?4:0)|(r?8:0)}this.$padding=0,this.setPadding=function(e){this.$padding=e},this.setSession=function(e){this.session=e},this.setMarkers=function(e){this.markers=e},this.elt=function(e,t){var n=this.i!=-1&&this.element.childNodes[this.i];n?this.i++:(n=document.createElement("div"),this.element.appendChild(n),this.i=-1),n.style.cssText=t,n.className=e},this.update=function(e){if(!e)return;this.config=e,this.i=0;var t;for(var n in this.markers){var r=this.markers[n];if(!r.range){r.update(t,this,this.session,e);continue}var i=r.range.clipRows(e.firstRow,e.lastRow);if(i.isEmpty())continue;i=i.toScreenRange(this.session);if(r.renderer){var s=this.$getTop(i.start.row,e),o=this.$padding+i.start.column*e.characterWidth;r.renderer(t,i,o,s,e)}else r.type=="fullLine"?this.drawFullLineMarker(t,i,r.clazz,e):r.type=="screenLine"?this.drawScreenLineMarker(t,i,r.clazz,e):i.isMultiLine()?r.type=="text"?this.drawTextMarker(t,i,r.clazz,e):this.drawMultiLineMarker(t,i,r.clazz,e):this.drawSingleLineMarker(t,i,r.clazz+" ace_start"+" ace_br15",e)}if(this.i!=-1)while(this.i<this.element.childElementCount)this.element.removeChild(this.element.lastChild)},this.$getTop=function(e,t){return(e-t.firstRowScreen)*t.lineHeight},this.drawTextMarker=function(t,n,i,s,o){var u=this.session,a=n.start.row,f=n.end.row,l=a,c=0,h=0,p=u.getScreenLastRowColumn(l),d=new r(l,n.start.column,l,h);for(;l<=f;l++)d.start.row=d.end.row=l,d.start.column=l==a?n.start.column:u.getRowWrapIndent(l),d.end.column=p,c=h,h=p,p=l+1<f?u.getScreenLastRowColumn(l+1):l==f?0:n.end.column,this.drawSingleLineMarker(t,d,i+(l==a?" ace_start":"")+" ace_br"+e(l==a||l==a+1&&n.start.column,c<h,h>p,l==f),s,l==f?0:1,o)},this.drawMultiLineMarker=function(e,t,n,r,i){var s=this.$padding,o=r.lineHeight,u=this.$getTop(t.start.row,r),a=s+t.start.column*r.characterWidth;i=i||"";if(this.session.$bidiHandler.isBidiRow(t.start.row)){var f=t.clone();f.end.row=f.start.row,f.end.column=this.session.getLine(f.start.row).length,this.drawBidiSingleLineMarker(e,f,n+" ace_br1 ace_start",r,null,i)}else this.elt(n+" ace_br1 ace_start","height:"+o+"px;"+"right:0;"+"top:"+u+"px;left:"+a+"px;"+(i||""));if(this.session.$bidiHandler.isBidiRow(t.end.row)){var f=t.clone();f.start.row=f.end.row,f.start.column=0,this.drawBidiSingleLineMarker(e,f,n+" ace_br12",r,null,i)}else{u=this.$getTop(t.end.row,r);var l=t.end.column*r.characterWidth;this.elt(n+" ace_br12","height:"+o+"px;"+"width:"+l+"px;"+"top:"+u+"px;"+"left:"+s+"px;"+(i||""))}o=(t.end.row-t.start.row-1)*r.lineHeight;if(o<=0)return;u=this.$getTop(t.start.row+1,r);var c=(t.start.column?1:0)|(t.end.column?0:8);this.elt(n+(c?" ace_br"+c:""),"height:"+o+"px;"+"right:0;"+"top:"+u+"px;"+"left:"+s+"px;"+(i||""))},this.drawSingleLineMarker=function(e,t,n,r,i,s){if(this.session.$bidiHandler.isBidiRow(t.start.row))return this.drawBidiSingleLineMarker(e,t,n,r,i,s);var o=r.lineHeight,u=(t.end.column+(i||0)-t.start.column)*r.characterWidth,a=this.$getTop(t.start.row,r),f=this.$padding+t.start.column*r.characterWidth;this.elt(n,"height:"+o+"px;"+"width:"+u+"px;"+"top:"+a+"px;"+"left:"+f+"px;"+(s||""))},this.drawBidiSingleLineMarker=function(e,t,n,r,i,s){var o=r.lineHeight,u=this.$getTop(t.start.row,r),a=this.$padding,f=this.session.$bidiHandler.getSelections(t.start.column,t.end.column);f.forEach(function(e){this.elt(n,"height:"+o+"px;"+"width:"+e.width+(i||0)+"px;"+"top:"+u+"px;"+"left:"+(a+e.left)+"px;"+(s||""))},this)},this.drawFullLineMarker=function(e,t,n,r,i){var s=this.$getTop(t.start.row,r),o=r.lineHeight;t.start.row!=t.end.row&&(o+=this.$getTop(t.end.row,r)-s),this.elt(n,"height:"+o+"px;"+"top:"+s+"px;"+"left:0;right:0;"+(i||""))},this.drawScreenLineMarker=function(e,t,n,r,i){var s=this.$getTop(t.start.row,r),o=r.lineHeight;this.elt(n,"height:"+o+"px;"+"top:"+s+"px;"+"left:0;right:0;"+(i||""))}}).call(s.prototype),t.Marker=s}),ace.define("ace/layer/text",["require","exports","module","ace/lib/oop","ace/lib/dom","ace/lib/lang","ace/layer/lines","ace/lib/event_emitter"],function(e,t,n){"use strict";var r=e("../lib/oop"),i=e("../lib/dom"),s=e("../lib/lang"),o=e("./lines").Lines,u=e("../lib/event_emitter").EventEmitter,a=function(e){this.dom=i,this.element=this.dom.createElement("div"),this.element.className="ace_layer ace_text-layer",e.appendChild(this.element),this.$updateEolChar=this.$updateEolChar.bind(this),this.$lines=new o(this.element)};(function(){r.implement(this,u),this.EOF_CHAR="\u00b6",this.EOL_CHAR_LF="\u00ac",this.EOL_CHAR_CRLF="\u00a4",this.EOL_CHAR=this.EOL_CHAR_LF,this.TAB_CHAR="\u2014",this.SPACE_CHAR="\u00b7",this.$padding=0,this.MAX_LINE_LENGTH=1e4,this.$updateEolChar=function(){var e=this.session.doc,t=e.getNewLineCharacter()=="\n"&&e.getNewLineMode()!="windows",n=t?this.EOL_CHAR_LF:this.EOL_CHAR_CRLF;if(this.EOL_CHAR!=n)return this.EOL_CHAR=n,!0},this.setPadding=function(e){this.$padding=e,this.element.style.margin="0 "+e+"px"},this.getLineHeight=function(){return this.$fontMetrics.$characterSize.height||0},this.getCharacterWidth=function(){return this.$fontMetrics.$characterSize.width||0},this.$setFontMetrics=function(e){this.$fontMetrics=e,this.$fontMetrics.on("changeCharacterSize",function(e){this._signal("changeCharacterSize",e)}.bind(this)),this.$pollSizeChanges()},this.checkForSizeChanges=function(){this.$fontMetrics.checkForSizeChanges()},this.$pollSizeChanges=function(){return this.$pollSizeChangesTimer=this.$fontMetrics.$pollSizeChanges()},this.setSession=function(e){this.session=e,e&&this.$computeTabString()},this.showInvisibles=!1,this.showSpaces=!1,this.showTabs=!1,this.showEOL=!1,this.setShowInvisibles=function(e){return this.showInvisibles==e?!1:(this.showInvisibles=e,typeof e=="string"?(this.showSpaces=/tab/i.test(e),this.showTabs=/space/i.test(e),this.showEOL=/eol/i.test(e)):this.showSpaces=this.showTabs=this.showEOL=e,this.$computeTabString(),!0)},this.displayIndentGuides=!0,this.setDisplayIndentGuides=function(e){return this.displayIndentGuides==e?!1:(this.displayIndentGuides=e,this.$computeTabString(),!0)},this.$highlightIndentGuides=!0,this.setHighlightIndentGuides=function(e){return this.$highlightIndentGuides===e?!1:(this.$highlightIndentGuides=e,e)},this.$tabStrings=[],this.onChangeTabSize=this.$computeTabString=function(){var e=this.session.getTabSize();this.tabSize=e;var t=this.$tabStrings=[0];for(var n=1;n<e+1;n++)if(this.showTabs){var r=this.dom.createElement("span");r.className="ace_invisible ace_invisible_tab",r.textContent=s.stringRepeat(this.TAB_CHAR,n),t.push(r)}else t.push(this.dom.createTextNode(s.stringRepeat(" ",n),this.element));if(this.displayIndentGuides){this.$indentGuideRe=/\s\S| \t|\t |\s$/;var i="ace_indent-guide",o=this.showSpaces?" ace_invisible ace_invisible_space":"",u=this.showSpaces?s.stringRepeat(this.SPACE_CHAR,this.tabSize):s.stringRepeat(" ",this.tabSize),a=this.showTabs?" ace_invisible ace_invisible_tab":"",f=this.showTabs?s.stringRepeat(this.TAB_CHAR,this.tabSize):u,r=this.dom.createElement("span");r.className=i+o,r.textContent=u,this.$tabStrings[" "]=r;var r=this.dom.createElement("span");r.className=i+a,r.textContent=f,this.$tabStrings["	"]=r}},this.updateLines=function(e,t,n){if(this.config.lastRow!=e.lastRow||this.config.firstRow!=e.firstRow)return this.update(e);this.config=e;var r=Math.max(t,e.firstRow),i=Math.min(n,e.lastRow),s=this.element.childNodes,o=0;for(var u=e.firstRow;u<r;u++){var a=this.session.getFoldLine(u);if(a){if(a.containsRow(r)){r=a.start.row;break}u=a.end.row}o++}var f=!1,u=r,a=this.session.getNextFoldLine(u),l=a?a.start.row:Infinity;for(;;){u>l&&(u=a.end.row+1,a=this.session.getNextFoldLine(u,a),l=a?a.start.row:Infinity);if(u>i)break;var c=s[o++];if(c){this.dom.removeChildren(c),this.$renderLine(c,u,u==l?a:!1),f&&(c.style.top=this.$lines.computeLineTop(u,e,this.session)+"px");var h=e.lineHeight*this.session.getRowLength(u)+"px";c.style.height!=h&&(f=!0,c.style.height=h)}u++}if(f)while(o<this.$lines.cells.length){var p=this.$lines.cells[o++];p.element.style.top=this.$lines.computeLineTop(p.row,e,this.session)+"px"}},this.scrollLines=function(e){var t=this.config;this.config=e;if(this.$lines.pageChanged(t,e))return this.update(e);this.$lines.moveContainer(e);var n=e.lastRow,r=t?t.lastRow:-1;if(!t||r<e.firstRow)return this.update(e);if(n<t.firstRow)return this.update(e);if(!t||t.lastRow<e.firstRow)return this.update(e);if(e.lastRow<t.firstRow)return this.update(e);if(t.firstRow<e.firstRow)for(var i=this.session.getFoldedRowCount(t.firstRow,e.firstRow-1);i>0;i--)this.$lines.shift();if(t.lastRow>e.lastRow)for(var i=this.session.getFoldedRowCount(e.lastRow+1,t.lastRow);i>0;i--)this.$lines.pop();e.firstRow<t.firstRow&&this.$lines.unshift(this.$renderLinesFragment(e,e.firstRow,t.firstRow-1)),e.lastRow>t.lastRow&&this.$lines.push(this.$renderLinesFragment(e,t.lastRow+1,e.lastRow)),this.$highlightIndentGuide()},this.$renderLinesFragment=function(e,t,n){var r=[],s=t,o=this.session.getNextFoldLine(s),u=o?o.start.row:Infinity;for(;;){s>u&&(s=o.end.row+1,o=this.session.getNextFoldLine(s,o),u=o?o.start.row:Infinity);if(s>n)break;var a=this.$lines.createCell(s,e,this.session),f=a.element;this.dom.removeChildren(f),i.setStyle(f.style,"height",this.$lines.computeLineHeight(s,e,this.session)+"px"),i.setStyle(f.style,"top",this.$lines.computeLineTop(s,e,this.session)+"px"),this.$renderLine(f,s,s==u?o:!1),this.$useLineGroups()?f.className="ace_line_group":f.className="ace_line",r.push(a),s++}return r},this.update=function(e){this.$lines.moveContainer(e),this.config=e;var t=e.firstRow,n=e.lastRow,r=this.$lines;while(r.getLength())r.pop();r.push(this.$renderLinesFragment(e,t,n))},this.$textToken={text:!0,rparen:!0,lparen:!0},this.$renderToken=function(e,t,n,r){var i=this,o=/(\t)|( +)|([\x00-\x1f\x80-\xa0\xad\u1680\u180E\u2000-\u200f\u2028\u2029\u202F\u205F\uFEFF\uFFF9-\uFFFC\u2066\u2067\u2068\u202A\u202B\u202D\u202E\u202C\u2069]+)|(\u3000)|([\u1100-\u115F\u11A3-\u11A7\u11FA-\u11FF\u2329-\u232A\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3001-\u303E\u3041-\u3096\u3099-\u30FF\u3105-\u312D\u3131-\u318E\u3190-\u31BA\u31C0-\u31E3\u31F0-\u321E\u3220-\u3247\u3250-\u32FE\u3300-\u4DBF\u4E00-\uA48C\uA490-\uA4C6\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFAFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF60\uFFE0-\uFFE6]|[\uD800-\uDBFF][\uDC00-\uDFFF])/g,u=this.dom.createFragment(this.element),a,f=0;while(a=o.exec(r)){var l=a[1],c=a[2],h=a[3],p=a[4],d=a[5];if(!i.showSpaces&&c)continue;var v=f!=a.index?r.slice(f,a.index):"";f=a.index+a[0].length,v&&u.appendChild(this.dom.createTextNode(v,this.element));if(l){var m=i.session.getScreenTabSize(t+a.index);u.appendChild(i.$tabStrings[m].cloneNode(!0)),t+=m-1}else if(c)if(i.showSpaces){var g=this.dom.createElement("span");g.className="ace_invisible ace_invisible_space",g.textContent=s.stringRepeat(i.SPACE_CHAR,c.length),u.appendChild(g)}else u.appendChild(this.com.createTextNode(c,this.element));else if(h){var g=this.dom.createElement("span");g.className="ace_invisible ace_invisible_space ace_invalid",g.textContent=s.stringRepeat(i.SPACE_CHAR,h.length),u.appendChild(g)}else if(p){t+=1;var g=this.dom.createElement("span");g.style.width=i.config.characterWidth*2+"px",g.className=i.showSpaces?"ace_cjk ace_invisible ace_invisible_space":"ace_cjk",g.textContent=i.showSpaces?i.SPACE_CHAR:p,u.appendChild(g)}else if(d){t+=1;var g=this.dom.createElement("span");g.style.width=i.config.characterWidth*2+"px",g.className="ace_cjk",g.textContent=d,u.appendChild(g)}}u.appendChild(this.dom.createTextNode(f?r.slice(f):r,this.element));if(!this.$textToken[n.type]){var y="ace_"+n.type.replace(/\./g," ace_"),g=this.dom.createElement("span");n.type=="fold"&&(g.style.width=n.value.length*this.config.characterWidth+"px"),g.className=y,g.appendChild(u),e.appendChild(g)}else e.appendChild(u);return t+r.length},this.renderIndentGuide=function(e,t,n){var r=t.search(this.$indentGuideRe);if(r<=0||r>=n)return t;if(t[0]==" "){r-=r%this.tabSize;var i=r/this.tabSize;for(var s=0;s<i;s++)e.appendChild(this.$tabStrings[" "].cloneNode(!0));return this.$highlightIndentGuide(),t.substr(r)}if(t[0]=="	"){for(var s=0;s<r;s++)e.appendChild(this.$tabStrings["	"].cloneNode(!0));return this.$highlightIndentGuide(),t.substr(r)}return this.$highlightIndentGuide(),t},this.$highlightIndentGuide=function(){if(!this.$highlightIndentGuides||!this.displayIndentGuides)return;this.$highlightIndentGuideMarker={indentLevel:undefined,start:undefined,end:undefined,dir:undefined};var e=this.session.doc.$lines;if(!e)return;var t=this.session.selection.getCursor(),n=/^\s*/.exec(this.session.doc.getLine(t.row))[0].length,r=Math.floor(n/this.tabSize);this.$highlightIndentGuideMarker={indentLevel:r,start:t.row};var i=this.session.$bracketHighlight;if(i){var s=this.session.$bracketHighlight.ranges;for(var o=0;o<s.length;o++)if(t.row!==s[o].start.row){this.$highlightIndentGuideMarker.end=s[o].start.row,t.row>s[o].start.row?this.$highlightIndentGuideMarker.dir=-1:this.$highlightIndentGuideMarker.dir=1;break}}if(!this.$highlightIndentGuideMarker.end&&e[t.row]!==""&&t.column===e[t.row].length){this.$highlightIndentGuideMarker.dir=1;for(var o=t.row+1;o<e.length;o++){var u=e[o],a=/^\s*/.exec(u)[0].length;if(u!==""){this.$highlightIndentGuideMarker.end=o;if(a<=n)break}}}this.$renderHighlightIndentGuide()},this.$clearActiveIndentGuide=function(){var e=this.$lines.cells;for(var t=0;t<e.length;t++){var n=e[t],r=n.element.childNodes;if(r.length>0)for(var i=0;i<r.length;i++)if(r[i].classList&&r[i].classList.contains("ace_indent-guide-active")){r[i].classList.remove("ace_indent-guide-active");break}}},this.$setIndentGuideActive=function(e,t){var n=this.session.doc.getLine(e.row);if(n!==""){var r=e.element.childNodes;if(r){var i=r[t-1];i&&i.classList&&i.classList.contains("ace_indent-guide")&&i.classList.add("ace_indent-guide-active")}}},this.$renderHighlightIndentGuide=function(){if(!this.$lines)return;var e=this.$lines.cells;this.$clearActiveIndentGuide();var t=this.$highlightIndentGuideMarker.indentLevel;if(t!==0)if(this.$highlightIndentGuideMarker.dir===1)for(var n=0;n<e.length;n++){var r=e[n];if(this.$highlightIndentGuideMarker.end&&r.row>=this.$highlightIndentGuideMarker.start+1){if(r.row>=this.$highlightIndentGuideMarker.end)break;this.$setIndentGuideActive(r,t)}}else for(var n=e.length-1;n>=0;n--){var r=e[n];if(this.$highlightIndentGuideMarker.end&&r.row<this.$highlightIndentGuideMarker.start){if(r.row<=this.$highlightIndentGuideMarker.end)break;this.$setIndentGuideActive(r,t)}}},this.$createLineElement=function(e){var t=this.dom.createElement("div");return t.className="ace_line",t.style.height=this.config.lineHeight+"px",t},this.$renderWrappedLine=function(e,t,n){var r=0,i=0,o=n[0],u=0,a=this.$createLineElement();e.appendChild(a);for(var f=0;f<t.length;f++){var l=t[f],c=l.value;if(f==0&&this.displayIndentGuides){r=c.length,c=this.renderIndentGuide(a,c,o);if(!c)continue;r-=c.length}if(r+c.length<o)u=this.$renderToken(a,u,l,c),r+=c.length;else{while(r+c.length>=o)u=this.$renderToken(a,u,l,c.substring(0,o-r)),c=c.substring(o-r),r=o,a=this.$createLineElement(),e.appendChild(a),a.appendChild(this.dom.createTextNode(s.stringRepeat("\u00a0",n.indent),this.element)),i++,u=0,o=n[i]||Number.MAX_VALUE;c.length!=0&&(r+=c.length,u=this.$renderToken(a,u,l,c))}}n[n.length-1]>this.MAX_LINE_LENGTH&&this.$renderOverflowMessage(a,u,null,"",!0)},this.$renderSimpleLine=function(e,t){var n=0;for(var r=0;r<t.length;r++){var i=t[r],s=i.value;if(r==0&&this.displayIndentGuides){s=this.renderIndentGuide(e,s);if(!s)continue}if(n+s.length>this.MAX_LINE_LENGTH)return this.$renderOverflowMessage(e,n,i,s);n=this.$renderToken(e,n,i,s)}},this.$renderOverflowMessage=function(e,t,n,r,i){n&&this.$renderToken(e,t,n,r.slice(0,this.MAX_LINE_LENGTH-t));var s=this.dom.createElement("span");s.className="ace_inline_button ace_keyword ace_toggle_wrap",s.textContent=i?"<hide>":"<click to see more...>",e.appendChild(s)},this.$renderLine=function(e,t,n){!n&&n!=0&&(n=this.session.getFoldLine(t));if(n)var r=this.$getFoldLineTokens(t,n);else var r=this.session.getTokens(t);var i=e;if(r.length){var s=this.session.getRowSplitData(t);if(s&&s.length){this.$renderWrappedLine(e,r,s);var i=e.lastChild}else{var i=e;this.$useLineGroups()&&(i=this.$createLineElement(),e.appendChild(i)),this.$renderSimpleLine(i,r)}}else this.$useLineGroups()&&(i=this.$createLineElement(),e.appendChild(i));if(this.showEOL&&i){n&&(t=n.end.row);var o=this.dom.createElement("span");o.className="ace_invisible ace_invisible_eol",o.textContent=t==this.session.getLength()-1?this.EOF_CHAR:this.EOL_CHAR,i.appendChild(o)}},this.$getFoldLineTokens=function(e,t){function i(e,t,n){var i=0,s=0;while(s+e[i].value.length<t){s+=e[i].value.length,i++;if(i==e.length)return}if(s!=t){var o=e[i].value.substring(t-s);o.length>n-t&&(o=o.substring(0,n-t)),r.push({type:e[i].type,value:o}),s=t+o.length,i+=1}while(s<n&&i<e.length){var o=e[i].value;o.length+s>n?r.push({type:e[i].type,value:o.substring(0,n-s)}):r.push(e[i]),s+=o.length,i+=1}}var n=this.session,r=[],s=n.getTokens(e);return t.walk(function(e,t,o,u,a){e!=null?r.push({type:"fold",value:e}):(a&&(s=n.getTokens(t)),s.length&&i(s,u,o))},t.end.row,this.session.getLine(t.end.row).length),r},this.$useLineGroups=function(){return this.session.getUseWrapMode()},this.destroy=function(){}}).call(a.prototype),t.Text=a}),ace.define("ace/layer/cursor",["require","exports","module","ace/lib/dom"],function(e,t,n){"use strict";var r=e("../lib/dom"),i=function(e){this.element=r.createElement("div"),this.element.className="ace_layer ace_cursor-layer",e.appendChild(this.element),this.isVisible=!1,this.isBlinking=!0,this.blinkInterval=1e3,this.smoothBlinking=!1,this.cursors=[],this.cursor=this.addCursor(),r.addCssClass(this.element,"ace_hidden-cursors"),this.$updateCursors=this.$updateOpacity.bind(this)};(function(){this.$updateOpacity=function(e){var t=this.cursors;for(var n=t.length;n--;)r.setStyle(t[n].style,"opacity",e?"":"0")},this.$startCssAnimation=function(){var e=this.cursors;for(var t=e.length;t--;)e[t].style.animationDuration=this.blinkInterval+"ms";this.$isAnimating=!0,setTimeout(function(){this.$isAnimating&&r.addCssClass(this.element,"ace_animate-blinking")}.bind(this))},this.$stopCssAnimation=function(){this.$isAnimating=!1,r.removeCssClass(this.element,"ace_animate-blinking")},this.$padding=0,this.setPadding=function(e){this.$padding=e},this.setSession=function(e){this.session=e},this.setBlinking=function(e){e!=this.isBlinking&&(this.isBlinking=e,this.restartTimer())},this.setBlinkInterval=function(e){e!=this.blinkInterval&&(this.blinkInterval=e,this.restartTimer())},this.setSmoothBlinking=function(e){e!=this.smoothBlinking&&(this.smoothBlinking=e,r.setCssClass(this.element,"ace_smooth-blinking",e),this.$updateCursors(!0),this.restartTimer())},this.addCursor=function(){var e=r.createElement("div");return e.className="ace_cursor",this.element.appendChild(e),this.cursors.push(e),e},this.removeCursor=function(){if(this.cursors.length>1){var e=this.cursors.pop();return e.parentNode.removeChild(e),e}},this.hideCursor=function(){this.isVisible=!1,r.addCssClass(this.element,"ace_hidden-cursors"),this.restartTimer()},this.showCursor=function(){this.isVisible=!0,r.removeCssClass(this.element,"ace_hidden-cursors"),this.restartTimer()},this.restartTimer=function(){var e=this.$updateCursors;clearInterval(this.intervalId),clearTimeout(this.timeoutId),this.$stopCssAnimation(),this.smoothBlinking&&(this.$isSmoothBlinking=!1,r.removeCssClass(this.element,"ace_smooth-blinking")),e(!0);if(!this.isBlinking||!this.blinkInterval||!this.isVisible){this.$stopCssAnimation();return}this.smoothBlinking&&(this.$isSmoothBlinking=!0,setTimeout(function(){this.$isSmoothBlinking&&r.addCssClass(this.element,"ace_smooth-blinking")}.bind(this)));if(r.HAS_CSS_ANIMATION)this.$startCssAnimation();else{var t=function(){this.timeoutId=setTimeout(function(){e(!1)},.6*this.blinkInterval)}.bind(this);this.intervalId=setInterval(function(){e(!0),t()},this.blinkInterval),t()}},this.getPixelPosition=function(e,t){if(!this.config||!this.session)return{left:0,top:0};e||(e=this.session.selection.getCursor());var n=this.session.documentToScreenPosition(e),r=this.$padding+(this.session.$bidiHandler.isBidiRow(n.row,e.row)?this.session.$bidiHandler.getPosLeft(n.column):n.column*this.config.characterWidth),i=(n.row-(t?this.config.firstRowScreen:0))*this.config.lineHeight;return{left:r,top:i}},this.isCursorInView=function(e,t){return e.top>=0&&e.top<t.maxHeight},this.update=function(e){this.config=e;var t=this.session.$selectionMarkers,n=0,i=0;if(t===undefined||t.length===0)t=[{cursor:null}];for(var n=0,s=t.length;n<s;n++){var o=this.getPixelPosition(t[n].cursor,!0);if((o.top>e.height+e.offset||o.top<0)&&n>1)continue;var u=this.cursors[i++]||this.addCursor(),a=u.style;this.drawCursor?this.drawCursor(u,o,e,t[n],this.session):this.isCursorInView(o,e)?(r.setStyle(a,"display","block"),r.translate(u,o.left,o.top),r.setStyle(a,"width",Math.round(e.characterWidth)+"px"),r.setStyle(a,"height",e.lineHeight+"px")):r.setStyle(a,"display","none")}while(this.cursors.length>i)this.removeCursor();var f=this.session.getOverwrite();this.$setOverwrite(f),this.$pixelPos=o,this.restartTimer()},this.drawCursor=null,this.$setOverwrite=function(e){e!=this.overwrite&&(this.overwrite=e,e?r.addCssClass(this.element,"ace_overwrite-cursors"):r.removeCssClass(this.element,"ace_overwrite-cursors"))},this.destroy=function(){clearInterval(this.intervalId),clearTimeout(this.timeoutId)}}).call(i.prototype),t.Cursor=i}),ace.define("ace/scrollbar",["require","exports","module","ace/lib/oop","ace/lib/dom","ace/lib/event","ace/lib/event_emitter"],function(e,t,n){"use strict";var r=e("./lib/oop"),i=e("./lib/dom"),s=e("./lib/event"),o=e("./lib/event_emitter").EventEmitter,u=32768,a=function(e){this.element=i.createElement("div"),this.element.className="ace_scrollbar ace_scrollbar"+this.classSuffix,this.inner=i.createElement("div"),this.inner.className="ace_scrollbar-inner",this.inner.textContent="\u00a0",this.element.appendChild(this.inner),e.appendChild(this.element),this.setVisible(!1),this.skipEvent=!1,s.addListener(this.element,"scroll",this.onScroll.bind(this)),s.addListener(this.element,"mousedown",s.preventDefault)};(function(){r.implement(this,o),this.setVisible=function(e){this.element.style.display=e?"":"none",this.isVisible=e,this.coeff=1}}).call(a.prototype);var f=function(e,t){a.call(this,e),this.scrollTop=0,this.scrollHeight=0,t.$scrollbarWidth=this.width=i.scrollbarWidth(e.ownerDocument),this.inner.style.width=this.element.style.width=(this.width||15)+5+"px",this.$minWidth=0};r.inherits(f,a),function(){this.classSuffix="-v",this.onScroll=function(){if(!this.skipEvent){this.scrollTop=this.element.scrollTop;if(this.coeff!=1){var e=this.element.clientHeight/this.scrollHeight;this.scrollTop=this.scrollTop*(1-e)/(this.coeff-e)}this._emit("scroll",{data:this.scrollTop})}this.skipEvent=!1},this.getWidth=function(){return Math.max(this.isVisible?this.width:0,this.$minWidth||0)},this.setHeight=function(e){this.element.style.height=e+"px"},this.setInnerHeight=this.setScrollHeight=function(e){this.scrollHeight=e,e>u?(this.coeff=u/e,e=u):this.coeff!=1&&(this.coeff=1),this.inner.style.height=e+"px"},this.setScrollTop=function(e){this.scrollTop!=e&&(this.skipEvent=!0,this.scrollTop=e,this.element.scrollTop=e*this.coeff)}}.call(f.prototype);var l=function(e,t){a.call(this,e),this.scrollLeft=0,this.height=t.$scrollbarWidth,this.inner.style.height=this.element.style.height=(this.height||15)+5+"px"};r.inherits(l,a),function(){this.classSuffix="-h",this.onScroll=function(){this.skipEvent||(this.scrollLeft=this.element.scrollLeft,this._emit("scroll",{data:this.scrollLeft})),this.skipEvent=!1},this.getHeight=function(){return this.isVisible?this.height:0},this.setWidth=function(e){this.element.style.width=e+"px"},this.setInnerWidth=function(e){this.inner.style.width=e+"px"},this.setScrollWidth=function(e){this.inner.style.width=e+"px"},this.setScrollLeft=function(e){this.scrollLeft!=e&&(this.skipEvent=!0,this.scrollLeft=this.element.scrollLeft=e)}}.call(l.prototype),t.ScrollBar=f,t.ScrollBarV=f,t.ScrollBarH=l,t.VScrollBar=f,t.HScrollBar=l}),ace.define("ace/scrollbar_custom",["require","exports","module","ace/lib/oop","ace/lib/dom","ace/lib/event","ace/lib/event_emitter"],function(e,t,n){"use strict";var r=e("./lib/oop"),i=e("./lib/dom"),s=e("./lib/event"),o=e("./lib/event_emitter").EventEmitter;i.importCssString(".ace_editor>.ace_sb-v div, .ace_editor>.ace_sb-h div{\n  position: absolute;\n  background: rgba(128, 128, 128, 0.6);\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  border: 1px solid #bbb;\n  border-radius: 2px;\n  z-index: 8;\n}\n.ace_editor>.ace_sb-v, .ace_editor>.ace_sb-h {\n  position: absolute;\n  z-index: 6;\n  background: none;\n  overflow: hidden!important;\n}\n.ace_editor>.ace_sb-v {\n  z-index: 6;\n  right: 0;\n  top: 0;\n  width: 12px;\n}\n.ace_editor>.ace_sb-v div {\n  z-index: 8;\n  right: 0;\n  width: 100%;\n}\n.ace_editor>.ace_sb-h {\n  bottom: 0;\n  left: 0;\n  height: 12px;\n}\n.ace_editor>.ace_sb-h div {\n  bottom: 0;\n  height: 100%;\n}\n.ace_editor>.ace_sb_grabbed {\n  z-index: 8;\n  background: #000;\n}","ace_scrollbar.css",!1);var u=function(e){this.element=i.createElement("div"),this.element.className="ace_sb"+this.classSuffix,this.inner=i.createElement("div"),this.inner.className="",this.element.appendChild(this.inner),this.VScrollWidth=12,this.HScrollHeight=12,e.appendChild(this.element),this.setVisible(!1),this.skipEvent=!1,s.addMultiMouseDownListener(this.element,[500,300,300],this,"onMouseDown")};(function(){r.implement(this,o),this.setVisible=function(e){this.element.style.display=e?"":"none",this.isVisible=e,this.coeff=1}}).call(u.prototype);var a=function(e,t){u.call(this,e),this.scrollTop=0,this.scrollHeight=0,this.parent=e,this.width=this.VScrollWidth,this.renderer=t,this.inner.style.width=this.element.style.width=(this.width||15)+"px",this.$minWidth=0};r.inherits(a,u),function(){this.classSuffix="-v",r.implement(this,o),this.onMouseDown=function(e,t){if(e!=="mousedown")return;if(s.getButton(t)!==0||t.detail===2)return;if(t.target===this.inner){var n=this,r=t.clientY,i=function(e){r=e.clientY},o=function(){clearInterval(l)},u=t.clientY,a=this.thumbTop,f=function(){if(r===undefined)return;var e=n.scrollTopFromThumbTop(a+r-u);if(e===n.scrollTop)return;n._emit("scroll",{data:e})};s.capture(this.inner,i,o);var l=setInterval(f,20);return s.preventDefault(t)}var c=t.clientY-this.element.getBoundingClientRect().top-this.thumbHeight/2;return this._emit("scroll",{data:this.scrollTopFromThumbTop(c)}),s.preventDefault(t)},this.getHeight=function(){return this.height},this.scrollTopFromThumbTop=function(e){var t=e*(this.pageHeight-this.viewHeight)/(this.slideHeight-this.thumbHeight);return t>>=0,t<0?t=0:t>this.pageHeight-this.viewHeight&&(t=this.pageHeight-this.viewHeight),t},this.getWidth=function(){return Math.max(this.isVisible?this.width:0,this.$minWidth||0)},this.setHeight=function(e){this.height=Math.max(0,e),this.slideHeight=this.height,this.viewHeight=this.height,this.setScrollHeight(this.pageHeight,!0)},this.setInnerHeight=this.setScrollHeight=function(e,t){if(this.pageHeight===e&&!t)return;this.pageHeight=e,this.thumbHeight=this.slideHeight*this.viewHeight/this.pageHeight,this.thumbHeight>this.slideHeight&&(this.thumbHeight=this.slideHeight),this.thumbHeight<15&&(this.thumbHeight=15),this.inner.style.height=this.thumbHeight+"px",this.scrollTop>this.pageHeight-this.viewHeight&&(this.scrollTop=this.pageHeight-this.viewHeight,this.scrollTop<0&&(this.scrollTop=0),this._emit("scroll",{data:this.scrollTop}))},this.setScrollTop=function(e){this.scrollTop=e,e<0&&(e=0),this.thumbTop=e*(this.slideHeight-this.thumbHeight)/(this.pageHeight-this.viewHeight),this.inner.style.top=this.thumbTop+"px"}}.call(a.prototype);var f=function(e,t){u.call(this,e),this.scrollLeft=0,this.scrollWidth=0,this.height=this.HScrollHeight,this.inner.style.height=this.element.style.height=(this.height||12)+"px",this.renderer=t};r.inherits(f,u),function(){this.classSuffix="-h",r.implement(this,o),this.onMouseDown=function(e,t){if(e!=="mousedown")return;if(s.getButton(t)!==0||t.detail===2)return;if(t.target===this.inner){var n=this,r=t.clientX,i=function(e){r=e.clientX},o=function(){clearInterval(l)},u=t.clientX,a=this.thumbLeft,f=function(){if(r===undefined)return;var e=n.scrollLeftFromThumbLeft(a+r-u);if(e===n.scrollLeft)return;n._emit("scroll",{data:e})};s.capture(this.inner,i,o);var l=setInterval(f,20);return s.preventDefault(t)}var c=t.clientX-this.element.getBoundingClientRect().left-this.thumbWidth/2;return this._emit("scroll",{data:this.scrollLeftFromThumbLeft(c)}),s.preventDefault(t)},this.getHeight=function(){return this.isVisible?this.height:0},this.scrollLeftFromThumbLeft=function(e){var t=e*(this.pageWidth-this.viewWidth)/(this.slideWidth-this.thumbWidth);return t>>=0,t<0?t=0:t>this.pageWidth-this.viewWidth&&(t=this.pageWidth-this.viewWidth),t},this.setWidth=function(e){this.width=Math.max(0,e),this.element.style.width=this.width+"px",this.slideWidth=this.width,this.viewWidth=this.width,this.setScrollWidth(this.pageWidth,!0)},this.setInnerWidth=this.setScrollWidth=function(e,t){if(this.pageWidth===e&&!t)return;this.pageWidth=e,this.thumbWidth=this.slideWidth*this.viewWidth/this.pageWidth,this.thumbWidth>this.slideWidth&&(this.thumbWidth=this.slideWidth),this.thumbWidth<15&&(this.thumbWidth=15),this.inner.style.width=this.thumbWidth+"px",this.scrollLeft>this.pageWidth-this.viewWidth&&(this.scrollLeft=this.pageWidth-this.viewWidth,this.scrollLeft<0&&(this.scrollLeft=0),this._emit("scroll",{data:this.scrollLeft}))},this.setScrollLeft=function(e){this.scrollLeft=e,e<0&&(e=0),this.thumbLeft=e*(this.slideWidth-this.thumbWidth)/(this.pageWidth-this.viewWidth),this.inner.style.left=this.thumbLeft+"px"}}.call(f.prototype),t.ScrollBar=a,t.ScrollBarV=a,t.ScrollBarH=f,t.VScrollBar=a,t.HScrollBar=f}),ace.define("ace/renderloop",["require","exports","module","ace/lib/event"],function(e,t,n){"use strict";var r=e("./lib/event"),i=function(e,t){this.onRender=e,this.pending=!1,this.changes=0,this.$recursionLimit=2,this.window=t||window;var n=this;this._flush=function(e){n.pending=!1;var t=n.changes;t&&(r.blockIdle(100),n.changes=0,n.onRender(t));if(n.changes){if(n.$recursionLimit--<0)return;n.schedule()}else n.$recursionLimit=2}};(function(){this.schedule=function(e){this.changes=this.changes|e,this.changes&&!this.pending&&(r.nextFrame(this._flush),this.pending=!0)},this.clear=function(e){var t=this.changes;return this.changes=0,t}}).call(i.prototype),t.RenderLoop=i}),ace.define("ace/layer/font_metrics",["require","exports","module","ace/lib/oop","ace/lib/dom","ace/lib/lang","ace/lib/event","ace/lib/useragent","ace/lib/event_emitter"],function(e,t,n){var r=e("../lib/oop"),i=e("../lib/dom"),s=e("../lib/lang"),o=e("../lib/event"),u=e("../lib/useragent"),a=e("../lib/event_emitter").EventEmitter,f=256,l=typeof ResizeObserver=="function",c=200,h=t.FontMetrics=function(e){this.el=i.createElement("div"),this.$setMeasureNodeStyles(this.el.style,!0),this.$main=i.createElement("div"),this.$setMeasureNodeStyles(this.$main.style),this.$measureNode=i.createElement("div"),this.$setMeasureNodeStyles(this.$measureNode.style),this.el.appendChild(this.$main),this.el.appendChild(this.$measureNode),e.appendChild(this.el),this.$measureNode.textContent=s.stringRepeat("X",f),this.$characterSize={width:0,height:0},l?this.$addObserver():this.checkForSizeChanges()};(function(){r.implement(this,a),this.$characterSize={width:0,height:0},this.$setMeasureNodeStyles=function(e,t){e.width=e.height="auto",e.left=e.top="0px",e.visibility="hidden",e.position="absolute",e.whiteSpace="pre",u.isIE<8?e["font-family"]="inherit":e.font="inherit",e.overflow=t?"hidden":"visible"},this.checkForSizeChanges=function(e){e===undefined&&(e=this.$measureSizes());if(e&&(this.$characterSize.width!==e.width||this.$characterSize.height!==e.height)){this.$measureNode.style.fontWeight="bold";var t=this.$measureSizes();this.$measureNode.style.fontWeight="",this.$characterSize=e,this.charSizes=Object.create(null),this.allowBoldFonts=t&&t.width===e.width&&t.height===e.height,this._emit("changeCharacterSize",{data:e})}},this.$addObserver=function(){var e=this;this.$observer=new window.ResizeObserver(function(t){e.checkForSizeChanges()}),this.$observer.observe(this.$measureNode)},this.$pollSizeChanges=function(){if(this.$pollSizeChangesTimer||this.$observer)return this.$pollSizeChangesTimer;var e=this;return this.$pollSizeChangesTimer=o.onIdle(function t(){e.checkForSizeChanges(),o.onIdle(t,500)},500)},this.setPolling=function(e){e?this.$pollSizeChanges():this.$pollSizeChangesTimer&&(clearInterval(this.$pollSizeChangesTimer),this.$pollSizeChangesTimer=0)},this.$measureSizes=function(e){var t={height:(e||this.$measureNode).clientHeight,width:(e||this.$measureNode).clientWidth/f};return t.width===0||t.height===0?null:t},this.$measureCharWidth=function(e){this.$main.textContent=s.stringRepeat(e,f);var t=this.$main.getBoundingClientRect();return t.width/f},this.getCharacterWidth=function(e){var t=this.charSizes[e];return t===undefined&&(t=this.charSizes[e]=this.$measureCharWidth(e)/this.$characterSize.width),t},this.destroy=function(){clearInterval(this.$pollSizeChangesTimer),this.$observer&&this.$observer.disconnect(),this.el&&this.el.parentNode&&this.el.parentNode.removeChild(this.el)},this.$getZoom=function e(t){return!t||!t.parentElement?1:(window.getComputedStyle(t).zoom||1)*e(t.parentElement)},this.$initTransformMeasureNodes=function(){var e=function(e,t){return["div",{style:"position: absolute;top:"+e+"px;left:"+t+"px;"}]};this.els=i.buildDom([e(0,0),e(c,0),e(0,c),e(c,c)],this.el)},this.transformCoordinates=function(e,t){function r(e,t,n){var r=e[1]*t[0]-e[0]*t[1];return[(-t[1]*n[0]+t[0]*n[1])/r,(+e[1]*n[0]-e[0]*n[1])/r]}function i(e,t){return[e[0]-t[0],e[1]-t[1]]}function s(e,t){return[e[0]+t[0],e[1]+t[1]]}function o(e,t){return[e*t[0],e*t[1]]}function u(e){var t=e.getBoundingClientRect();return[t.left,t.top]}if(e){var n=this.$getZoom(this.el);e=o(1/n,e)}this.els||this.$initTransformMeasureNodes();var a=u(this.els[0]),f=u(this.els[1]),l=u(this.els[2]),h=u(this.els[3]),p=r(i(h,f),i(h,l),i(s(f,l),s(h,a))),d=o(1+p[0],i(f,a)),v=o(1+p[1],i(l,a));if(t){var m=t,g=p[0]*m[0]/c+p[1]*m[1]/c+1,y=s(o(m[0],d),o(m[1],v));return s(o(1/g/c,y),a)}var b=i(e,a),w=r(i(d,o(p[0],b)),i(v,o(p[1],b)),b);return o(c,w)}}).call(h.prototype)}),ace.define("ace/css/editor.css",["require","exports","module"],function(e,t,n){n.exports='/*\nstyles = []\nfor (var i = 1; i < 16; i++) {\n    styles.push(".ace_br" + i + "{" + (\n        ["top-left", "top-right", "bottom-right", "bottom-left"]\n    ).map(function(x, j) {\n        return i & (1<<j) ? "border-" + x + "-radius: 3px;" : "" \n    }).filter(Boolean).join(" ") + "}")\n}\nstyles.join("\\n")\n*/\n.ace_br1 {border-top-left-radius    : 3px;}\n.ace_br2 {border-top-right-radius   : 3px;}\n.ace_br3 {border-top-left-radius    : 3px; border-top-right-radius:    3px;}\n.ace_br4 {border-bottom-right-radius: 3px;}\n.ace_br5 {border-top-left-radius    : 3px; border-bottom-right-radius: 3px;}\n.ace_br6 {border-top-right-radius   : 3px; border-bottom-right-radius: 3px;}\n.ace_br7 {border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px;}\n.ace_br8 {border-bottom-left-radius : 3px;}\n.ace_br9 {border-top-left-radius    : 3px; border-bottom-left-radius:  3px;}\n.ace_br10{border-top-right-radius   : 3px; border-bottom-left-radius:  3px;}\n.ace_br11{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-left-radius:  3px;}\n.ace_br12{border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}\n.ace_br13{border-top-left-radius    : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}\n.ace_br14{border-top-right-radius   : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}\n.ace_br15{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px;}\n\n\n.ace_editor {\n    position: relative;\n    overflow: hidden;\n    padding: 0;\n    font: 12px/normal \'Monaco\', \'Menlo\', \'Ubuntu Mono\', \'Consolas\', \'source-code-pro\', monospace;\n    direction: ltr;\n    text-align: left;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\n.ace_scroller {\n    position: absolute;\n    overflow: hidden;\n    top: 0;\n    bottom: 0;\n    background-color: inherit;\n    -ms-user-select: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    user-select: none;\n    cursor: text;\n}\n\n.ace_content {\n    position: absolute;\n    box-sizing: border-box;\n    min-width: 100%;\n    contain: style size layout;\n    font-variant-ligatures: no-common-ligatures;\n}\n\n.ace_dragging .ace_scroller:before{\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    content: \'\';\n    background: rgba(250, 250, 250, 0.01);\n    z-index: 1000;\n}\n.ace_dragging.ace_dark .ace_scroller:before{\n    background: rgba(0, 0, 0, 0.01);\n}\n\n.ace_gutter {\n    position: absolute;\n    overflow : hidden;\n    width: auto;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    cursor: default;\n    z-index: 4;\n    -ms-user-select: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    user-select: none;\n    contain: style size layout;\n}\n\n.ace_gutter-active-line {\n    position: absolute;\n    left: 0;\n    right: 0;\n}\n\n.ace_scroller.ace_scroll-left {\n    box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;\n}\n\n.ace_gutter-cell {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    padding-left: 19px;\n    padding-right: 6px;\n    background-repeat: no-repeat;\n}\n\n.ace_gutter-cell.ace_error {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABOFBMVEX/////////QRswFAb/Ui4wFAYwFAYwFAaWGAfDRymzOSH/PxswFAb/SiUwFAYwFAbUPRvjQiDllog5HhHdRybsTi3/Tyv9Tir+Syj/UC3////XurebMBIwFAb/RSHbPx/gUzfdwL3kzMivKBAwFAbbvbnhPx66NhowFAYwFAaZJg8wFAaxKBDZurf/RB6mMxb/SCMwFAYwFAbxQB3+RB4wFAb/Qhy4Oh+4QifbNRcwFAYwFAYwFAb/QRzdNhgwFAYwFAbav7v/Uy7oaE68MBK5LxLewr/r2NXewLswFAaxJw4wFAbkPRy2PyYwFAaxKhLm1tMwFAazPiQwFAaUGAb/QBrfOx3bvrv/VC/maE4wFAbRPBq6MRO8Qynew8Dp2tjfwb0wFAbx6eju5+by6uns4uH9/f36+vr/GkHjAAAAYnRSTlMAGt+64rnWu/bo8eAA4InH3+DwoN7j4eLi4xP99Nfg4+b+/u9B/eDs1MD1mO7+4PHg2MXa347g7vDizMLN4eG+Pv7i5evs/v79yu7S3/DV7/498Yv24eH+4ufQ3Ozu/v7+y13sRqwAAADLSURBVHjaZc/XDsFgGIBhtDrshlitmk2IrbHFqL2pvXf/+78DPokj7+Fz9qpU/9UXJIlhmPaTaQ6QPaz0mm+5gwkgovcV6GZzd5JtCQwgsxoHOvJO15kleRLAnMgHFIESUEPmawB9ngmelTtipwwfASilxOLyiV5UVUyVAfbG0cCPHig+GBkzAENHS0AstVF6bacZIOzgLmxsHbt2OecNgJC83JERmePUYq8ARGkJx6XtFsdddBQgZE2nPR6CICZhawjA4Fb/chv+399kfR+MMMDGOQAAAABJRU5ErkJggg==");\n    background-repeat: no-repeat;\n    background-position: 2px center;\n}\n\n.ace_gutter-cell.ace_warning {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAmVBMVEX///8AAAD///8AAAAAAABPSzb/5sAAAAB/blH/73z/ulkAAAAAAAD85pkAAAAAAAACAgP/vGz/rkDerGbGrV7/pkQICAf////e0IsAAAD/oED/qTvhrnUAAAD/yHD/njcAAADuv2r/nz//oTj/p064oGf/zHAAAAA9Nir/tFIAAAD/tlTiuWf/tkIAAACynXEAAAAAAAAtIRW7zBpBAAAAM3RSTlMAABR1m7RXO8Ln31Z36zT+neXe5OzooRDfn+TZ4p3h2hTf4t3k3ucyrN1K5+Xaks52Sfs9CXgrAAAAjklEQVR42o3PbQ+CIBQFYEwboPhSYgoYunIqqLn6/z8uYdH8Vmdnu9vz4WwXgN/xTPRD2+sgOcZjsge/whXZgUaYYvT8QnuJaUrjrHUQreGczuEafQCO/SJTufTbroWsPgsllVhq3wJEk2jUSzX3CUEDJC84707djRc5MTAQxoLgupWRwW6UB5fS++NV8AbOZgnsC7BpEAAAAABJRU5ErkJggg==");\n    background-position: 2px center;\n}\n\n.ace_gutter-cell.ace_info {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAJ0Uk5TAAB2k804AAAAPklEQVQY02NgIB68QuO3tiLznjAwpKTgNyDbMegwisCHZUETUZV0ZqOquBpXj2rtnpSJT1AEnnRmL2OgGgAAIKkRQap2htgAAAAASUVORK5CYII=");\n    background-position: 2px center;\n}\n.ace_dark .ace_gutter-cell.ace_info {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAChoaGAgIAqKiq+vr6tra1ZWVmUlJSbm5s8PDxubm56enrdgzg3AAAAAXRSTlMAQObYZgAAAClJREFUeNpjYMAPdsMYHegyJZFQBlsUlMFVCWUYKkAZMxZAGdxlDMQBAG+TBP4B6RyJAAAAAElFTkSuQmCC");\n}\n\n.ace_scrollbar {\n    contain: strict;\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    z-index: 6;\n}\n\n.ace_scrollbar-inner {\n    position: absolute;\n    cursor: text;\n    left: 0;\n    top: 0;\n}\n\n.ace_scrollbar-v{\n    overflow-x: hidden;\n    overflow-y: scroll;\n    top: 0;\n}\n\n.ace_scrollbar-h {\n    overflow-x: scroll;\n    overflow-y: hidden;\n    left: 0;\n}\n\n.ace_print-margin {\n    position: absolute;\n    height: 100%;\n}\n\n.ace_text-input {\n    position: absolute;\n    z-index: 0;\n    width: 0.5em;\n    height: 1em;\n    opacity: 0;\n    background: transparent;\n    -moz-appearance: none;\n    appearance: none;\n    border: none;\n    resize: none;\n    outline: none;\n    overflow: hidden;\n    font: inherit;\n    padding: 0 1px;\n    margin: 0 -1px;\n    contain: strict;\n    -ms-user-select: text;\n    -moz-user-select: text;\n    -webkit-user-select: text;\n    user-select: text;\n    /*with `pre-line` chrome inserts &nbsp; instead of space*/\n    white-space: pre!important;\n}\n.ace_text-input.ace_composition {\n    background: transparent;\n    color: inherit;\n    z-index: 1000;\n    opacity: 1;\n}\n.ace_composition_placeholder { color: transparent }\n.ace_composition_marker { \n    border-bottom: 1px solid;\n    position: absolute;\n    border-radius: 0;\n    margin-top: 1px;\n}\n\n[ace_nocontext=true] {\n    transform: none!important;\n    filter: none!important;\n    clip-path: none!important;\n    mask : none!important;\n    contain: none!important;\n    perspective: none!important;\n    mix-blend-mode: initial!important;\n    z-index: auto;\n}\n\n.ace_layer {\n    z-index: 1;\n    position: absolute;\n    overflow: hidden;\n    /* workaround for chrome bug https://github.com/ajaxorg/ace/issues/2312*/\n    word-wrap: normal;\n    white-space: pre;\n    height: 100%;\n    width: 100%;\n    box-sizing: border-box;\n    /* setting pointer-events: auto; on node under the mouse, which changes\n        during scroll, will break mouse wheel scrolling in Safari */\n    pointer-events: none;\n}\n\n.ace_gutter-layer {\n    position: relative;\n    width: auto;\n    text-align: right;\n    pointer-events: auto;\n    height: 1000000px;\n    contain: style size layout;\n}\n\n.ace_text-layer {\n    font: inherit !important;\n    position: absolute;\n    height: 1000000px;\n    width: 1000000px;\n    contain: style size layout;\n}\n\n.ace_text-layer > .ace_line, .ace_text-layer > .ace_line_group {\n    contain: style size layout;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n}\n\n.ace_hidpi .ace_text-layer,\n.ace_hidpi .ace_gutter-layer,\n.ace_hidpi .ace_content,\n.ace_hidpi .ace_gutter {\n    contain: strict;\n    will-change: transform;\n}\n.ace_hidpi .ace_text-layer > .ace_line, \n.ace_hidpi .ace_text-layer > .ace_line_group {\n    contain: strict;\n}\n\n.ace_cjk {\n    display: inline-block;\n    text-align: center;\n}\n\n.ace_cursor-layer {\n    z-index: 4;\n}\n\n.ace_cursor {\n    z-index: 4;\n    position: absolute;\n    box-sizing: border-box;\n    border-left: 2px solid;\n    /* workaround for smooth cursor repaintng whole screen in chrome */\n    transform: translatez(0);\n}\n\n.ace_multiselect .ace_cursor {\n    border-left-width: 1px;\n}\n\n.ace_slim-cursors .ace_cursor {\n    border-left-width: 1px;\n}\n\n.ace_overwrite-cursors .ace_cursor {\n    border-left-width: 0;\n    border-bottom: 1px solid;\n}\n\n.ace_hidden-cursors .ace_cursor {\n    opacity: 0.2;\n}\n\n.ace_hasPlaceholder .ace_hidden-cursors .ace_cursor {\n    opacity: 0;\n}\n\n.ace_smooth-blinking .ace_cursor {\n    transition: opacity 0.18s;\n}\n\n.ace_animate-blinking .ace_cursor {\n    animation-duration: 1000ms;\n    animation-timing-function: step-end;\n    animation-name: blink-ace-animate;\n    animation-iteration-count: infinite;\n}\n\n.ace_animate-blinking.ace_smooth-blinking .ace_cursor {\n    animation-duration: 1000ms;\n    animation-timing-function: ease-in-out;\n    animation-name: blink-ace-animate-smooth;\n}\n    \n@keyframes blink-ace-animate {\n    from, to { opacity: 1; }\n    60% { opacity: 0; }\n}\n\n@keyframes blink-ace-animate-smooth {\n    from, to { opacity: 1; }\n    45% { opacity: 1; }\n    60% { opacity: 0; }\n    85% { opacity: 0; }\n}\n\n.ace_marker-layer .ace_step, .ace_marker-layer .ace_stack {\n    position: absolute;\n    z-index: 3;\n}\n\n.ace_marker-layer .ace_selection {\n    position: absolute;\n    z-index: 5;\n}\n\n.ace_marker-layer .ace_bracket {\n    position: absolute;\n    z-index: 6;\n}\n\n.ace_marker-layer .ace_error_bracket {\n    position: absolute;\n    border-bottom: 1px solid #DE5555;\n    border-radius: 0;\n}\n\n.ace_marker-layer .ace_active-line {\n    position: absolute;\n    z-index: 2;\n}\n\n.ace_marker-layer .ace_selected-word {\n    position: absolute;\n    z-index: 4;\n    box-sizing: border-box;\n}\n\n.ace_line .ace_fold {\n    box-sizing: border-box;\n\n    display: inline-block;\n    height: 11px;\n    margin-top: -2px;\n    vertical-align: middle;\n\n    background-image:\n        url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),\n        url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACJJREFUeNpi+P//fxgTAwPDBxDxD078RSX+YeEyDFMCIMAAI3INmXiwf2YAAAAASUVORK5CYII=");\n    background-repeat: no-repeat, repeat-x;\n    background-position: center center, top left;\n    color: transparent;\n\n    border: 1px solid black;\n    border-radius: 2px;\n\n    cursor: pointer;\n    pointer-events: auto;\n}\n\n.ace_dark .ace_fold {\n}\n\n.ace_fold:hover{\n    background-image:\n        url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),\n        url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACBJREFUeNpi+P//fz4TAwPDZxDxD5X4i5fLMEwJgAADAEPVDbjNw87ZAAAAAElFTkSuQmCC");\n}\n\n.ace_tooltip {\n    background-color: #FFF;\n    background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1));\n    border: 1px solid gray;\n    border-radius: 1px;\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n    color: black;\n    max-width: 100%;\n    padding: 3px 4px;\n    position: fixed;\n    z-index: 999999;\n    box-sizing: border-box;\n    cursor: default;\n    white-space: pre;\n    word-wrap: break-word;\n    line-height: normal;\n    font-style: normal;\n    font-weight: normal;\n    letter-spacing: normal;\n    pointer-events: none;\n}\n\n.ace_folding-enabled > .ace_gutter-cell {\n    padding-right: 13px;\n}\n\n.ace_fold-widget {\n    box-sizing: border-box;\n\n    margin: 0 -12px 0 1px;\n    display: none;\n    width: 11px;\n    vertical-align: top;\n\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42mWKsQ0AMAzC8ixLlrzQjzmBiEjp0A6WwBCSPgKAXoLkqSot7nN3yMwR7pZ32NzpKkVoDBUxKAAAAABJRU5ErkJggg==");\n    background-repeat: no-repeat;\n    background-position: center;\n\n    border-radius: 3px;\n    \n    border: 1px solid transparent;\n    cursor: pointer;\n}\n\n.ace_folding-enabled .ace_fold-widget {\n    display: inline-block;   \n}\n\n.ace_fold-widget.ace_end {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42m3HwQkAMAhD0YzsRchFKI7sAikeWkrxwScEB0nh5e7KTPWimZki4tYfVbX+MNl4pyZXejUO1QAAAABJRU5ErkJggg==");\n}\n\n.ace_fold-widget.ace_closed {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAGCAYAAAAG5SQMAAAAOUlEQVR42jXKwQkAMAgDwKwqKD4EwQ26sSOkVWjgIIHAzPiCgaqiqnJHZnKICBERHN194O5b9vbLuAVRL+l0YWnZAAAAAElFTkSuQmCCXA==");\n}\n\n.ace_fold-widget:hover {\n    border: 1px solid rgba(0, 0, 0, 0.3);\n    background-color: rgba(255, 255, 255, 0.2);\n    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);\n}\n\n.ace_fold-widget:active {\n    border: 1px solid rgba(0, 0, 0, 0.4);\n    background-color: rgba(0, 0, 0, 0.05);\n    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);\n}\n/**\n * Dark version for fold widgets\n */\n.ace_dark .ace_fold-widget {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHklEQVQIW2P4//8/AzoGEQ7oGCaLLAhWiSwB146BAQCSTPYocqT0AAAAAElFTkSuQmCC");\n}\n.ace_dark .ace_fold-widget.ace_end {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//8/AxQ7wNjIAjDMgC4AxjCVKBirIAAF0kz2rlhxpAAAAABJRU5ErkJggg==");\n}\n.ace_dark .ace_fold-widget.ace_closed {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAFCAYAAACAcVaiAAAAHElEQVQIW2P4//+/AxAzgDADlOOAznHAKgPWAwARji8UIDTfQQAAAABJRU5ErkJggg==");\n}\n.ace_dark .ace_fold-widget:hover {\n    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);\n    background-color: rgba(255, 255, 255, 0.1);\n}\n.ace_dark .ace_fold-widget:active {\n    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);\n}\n\n.ace_inline_button {\n    border: 1px solid lightgray;\n    display: inline-block;\n    margin: -1px 8px;\n    padding: 0 5px;\n    pointer-events: auto;\n    cursor: pointer;\n}\n.ace_inline_button:hover {\n    border-color: gray;\n    background: rgba(200,200,200,0.2);\n    display: inline-block;\n    pointer-events: auto;\n}\n\n.ace_fold-widget.ace_invalid {\n    background-color: #FFB4B4;\n    border-color: #DE5555;\n}\n\n.ace_fade-fold-widgets .ace_fold-widget {\n    transition: opacity 0.4s ease 0.05s;\n    opacity: 0;\n}\n\n.ace_fade-fold-widgets:hover .ace_fold-widget {\n    transition: opacity 0.05s ease 0.05s;\n    opacity:1;\n}\n\n.ace_underline {\n    text-decoration: underline;\n}\n\n.ace_bold {\n    font-weight: bold;\n}\n\n.ace_nobold .ace_bold {\n    font-weight: normal;\n}\n\n.ace_italic {\n    font-style: italic;\n}\n\n\n.ace_error-marker {\n    background-color: rgba(255, 0, 0,0.2);\n    position: absolute;\n    z-index: 9;\n}\n\n.ace_highlight-marker {\n    background-color: rgba(255, 255, 0,0.2);\n    position: absolute;\n    z-index: 8;\n}\n\n.ace_mobile-menu {\n    position: absolute;\n    line-height: 1.5;\n    border-radius: 4px;\n    -ms-user-select: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    user-select: none;\n    background: white;\n    box-shadow: 1px 3px 2px grey;\n    border: 1px solid #dcdcdc;\n    color: black;\n}\n.ace_dark > .ace_mobile-menu {\n    background: #333;\n    color: #ccc;\n    box-shadow: 1px 3px 2px grey;\n    border: 1px solid #444;\n\n}\n.ace_mobile-button {\n    padding: 2px;\n    cursor: pointer;\n    overflow: hidden;\n}\n.ace_mobile-button:hover {\n    background-color: #eee;\n    opacity:1;\n}\n.ace_mobile-button:active {\n    background-color: #ddd;\n}\n\n.ace_placeholder {\n    font-family: arial;\n    transform: scale(0.9);\n    transform-origin: left;\n    white-space: pre;\n    opacity: 0.7;\n    margin: 0 10px;\n}'}),ace.define("ace/layer/decorators",["require","exports","module","ace/lib/dom","ace/lib/oop","ace/lib/event_emitter"],function(e,t,n){"use strict";var r=e("../lib/dom"),i=e("../lib/oop"),s=e("../lib/event_emitter").EventEmitter,o=function(e,t){this.canvas=r.createElement("canvas"),this.renderer=t,this.pixelRatio=1,this.maxHeight=t.layerConfig.maxHeight,this.lineHeight=t.layerConfig.lineHeight,this.canvasHeight=e.parent.scrollHeight,this.heightRatio=this.canvasHeight/this.maxHeight,this.canvasWidth=e.width,this.minDecorationHeight=2*this.pixelRatio|0,this.halfMinDecorationHeight=this.minDecorationHeight/2|0,this.canvas.width=this.canvasWidth,this.canvas.height=this.canvasHeight,this.canvas.style.top="0px",this.canvas.style.right="0px",this.canvas.style.zIndex="7px",this.canvas.style.position="absolute",this.colors={},this.colors.dark={error:"rgba(255, 18, 18, 1)",warning:"rgba(18, 136, 18, 1)",info:"rgba(18, 18, 136, 1)"},this.colors.light={error:"rgb(255,51,51)",warning:"rgb(32,133,72)",info:"rgb(35,68,138)"},e.element.appendChild(this.canvas)};(function(){i.implement(this,s),this.$updateDecorators=function(e){function i(e,t){return e.priority<t.priority?-1:e.priority>t.priority?1:0}var t=this.renderer.theme.isDark===!0?this.colors.dark:this.colors.light;if(e){this.maxHeight=e.maxHeight,this.lineHeight=e.lineHeight,this.canvasHeight=e.height;var n=(e.lastRow+1)*this.lineHeight;n<this.canvasHeight?this.heightRatio=1:this.heightRatio=this.canvasHeight/this.maxHeight}var r=this.canvas.getContext("2d"),s=this.renderer.session.$annotations;r.clearRect(0,0,this.canvas.width,this.canvas.height);if(s){var o={info:1,warning:2,error:3};s.forEach(function(e){e.priority=o[e.type]||null}),s=s.sort(i);var u=this.renderer.session.$foldData;for(var a=0;a<s.length;a++){var f=s[a].row,l=this.compensateFoldRows(f,u),c=Math.round((f-l)*this.lineHeight*this.heightRatio),h=Math.round((f-l)*this.lineHeight*this.heightRatio),p=Math.round(((f-l)*this.lineHeight+this.lineHeight)*this.heightRatio),d=p-h;if(d<this.minDecorationHeight){var v=(h+p)/2|0;v<this.halfMinDecorationHeight?v=this.halfMinDecorationHeight:v+this.halfMinDecorationHeight>this.canvasHeight&&(v=this.canvasHeight-this.halfMinDecorationHeight),h=Math.round(v-this.halfMinDecorationHeight),p=Math.round(v+this.halfMinDecorationHeight)}r.fillStyle=t[s[a].type]||null,r.fillRect(0,c,this.canvasWidth,p-h)}}var m=this.renderer.session.selection.getCursor();if(m){var l=this.compensateFoldRows(m.row,u),c=Math.round((m.row-l)*this.lineHeight*this.heightRatio);r.fillStyle="rgba(0, 0, 0, 0.5)",r.fillRect(0,c,this.canvasWidth,2)}},this.compensateFoldRows=function(e,t){var n=0;if(t&&t.length>0)for(var r=0;r<t.length;r++)e>t[r].start.row&&e<t[r].end.row?n+=e-t[r].start.row:e>=t[r].end.row&&(n+=t[r].end.row-t[r].start.row);return n}}).call(o.prototype),t.Decorator=o}),ace.define("ace/virtual_renderer",["require","exports","module","ace/lib/oop","ace/lib/dom","ace/config","ace/layer/gutter","ace/layer/marker","ace/layer/text","ace/layer/cursor","ace/scrollbar","ace/scrollbar","ace/scrollbar_custom","ace/scrollbar_custom","ace/renderloop","ace/layer/font_metrics","ace/lib/event_emitter","ace/css/editor.css","ace/layer/decorators","ace/lib/useragent"],function(e,t,n){"use strict";var r=e("./lib/oop"),i=e("./lib/dom"),s=e("./config"),o=e("./layer/gutter").Gutter,u=e("./layer/marker").Marker,a=e("./layer/text").Text,f=e("./layer/cursor").Cursor,l=e("./scrollbar").HScrollBar,c=e("./scrollbar").VScrollBar,h=e("./scrollbar_custom").HScrollBar,p=e("./scrollbar_custom").VScrollBar,d=e("./renderloop").RenderLoop,v=e("./layer/font_metrics").FontMetrics,m=e("./lib/event_emitter").EventEmitter,g=e("./css/editor.css"),y=e("./layer/decorators").Decorator,b=e("./lib/useragent"),w=b.isIE;i.importCssString(g,"ace_editor.css",!1);var E=function(e,t){var n=this;this.container=e||i.createElement("div"),i.addCssClass(this.container,"ace_editor"),i.HI_DPI&&i.addCssClass(this.container,"ace_hidpi"),this.setTheme(t),s.get("useStrictCSP")==null&&s.set("useStrictCSP",!1),this.$gutter=i.createElement("div"),this.$gutter.className="ace_gutter",this.container.appendChild(this.$gutter),this.$gutter.setAttribute("aria-hidden",!0),this.scroller=i.createElement("div"),this.scroller.className="ace_scroller",this.container.appendChild(this.scroller),this.content=i.createElement("div"),this.content.className="ace_content",this.scroller.appendChild(this.content),this.$gutterLayer=new o(this.$gutter),this.$gutterLayer.on("changeGutterWidth",this.onGutterResize.bind(this)),this.$markerBack=new u(this.content);var r=this.$textLayer=new a(this.content);this.canvas=r.element,this.$markerFront=new u(this.content),this.$cursorLayer=new f(this.content),this.$horizScroll=!1,this.$vScroll=!1,this.scrollBar=this.scrollBarV=new c(this.container,this),this.scrollBarH=new l(this.container,this),this.scrollBarV.on("scroll",function(e){n.$scrollAnimation||n.session.setScrollTop(e.data-n.scrollMargin.top)}),this.scrollBarH.on("scroll",function(e){n.$scrollAnimation||n.session.setScrollLeft(e.data-n.scrollMargin.left)}),this.scrollTop=0,this.scrollLeft=0,this.cursorPos={row:0,column:0},this.$fontMetrics=new v(this.container),this.$textLayer.$setFontMetrics(this.$fontMetrics),this.$textLayer.on("changeCharacterSize",function(e){n.updateCharacterSize(),n.onResize(!0,n.gutterWidth,n.$size.width,n.$size.height),n._signal("changeCharacterSize",e)}),this.$size={width:0,height:0,scrollerHeight:0,scrollerWidth:0,$dirty:!0},this.layerConfig={width:1,padding:0,firstRow:0,firstRowScreen:0,lastRow:0,lineHeight:0,characterWidth:0,minHeight:1,maxHeight:1,offset:0,height:1,gutterOffset:1},this.scrollMargin={left:0,right:0,top:0,bottom:0,v:0,h:0},this.margin={left:0,right:0,top:0,bottom:0,v:0,h:0},this.$keepTextAreaAtCursor=!b.isIOS,this.$loop=new d(this.$renderChanges.bind(this),this.container.ownerDocument.defaultView),this.$loop.schedule(this.CHANGE_FULL),this.updateCharacterSize(),this.setPadding(4),s.resetOptions(this),s._signal("renderer",this)};(function(){this.CHANGE_CURSOR=1,this.CHANGE_MARKER=2,this.CHANGE_GUTTER=4,this.CHANGE_SCROLL=8,this.CHANGE_LINES=16,this.CHANGE_TEXT=32,this.CHANGE_SIZE=64,this.CHANGE_MARKER_BACK=128,this.CHANGE_MARKER_FRONT=256,this.CHANGE_FULL=512,this.CHANGE_H_SCROLL=1024,r.implement(this,m),this.updateCharacterSize=function(){this.$textLayer.allowBoldFonts!=this.$allowBoldFonts&&(this.$allowBoldFonts=this.$textLayer.allowBoldFonts,this.setStyle("ace_nobold",!this.$allowBoldFonts)),this.layerConfig.characterWidth=this.characterWidth=this.$textLayer.getCharacterWidth(),this.layerConfig.lineHeight=this.lineHeight=this.$textLayer.getLineHeight(),this.$updatePrintMargin(),i.setStyle(this.scroller.style,"line-height",this.lineHeight+"px")},this.setSession=function(e){this.session&&this.session.doc.off("changeNewLineMode",this.onChangeNewLineMode),this.session=e,e&&this.scrollMargin.top&&e.getScrollTop()<=0&&e.setScrollTop(-this.scrollMargin.top),this.$cursorLayer.setSession(e),this.$markerBack.setSession(e),this.$markerFront.setSession(e),this.$gutterLayer.setSession(e),this.$textLayer.setSession(e);if(!e)return;this.$loop.schedule(this.CHANGE_FULL),this.session.$setFontMetrics(this.$fontMetrics),this.scrollBarH.scrollLeft=this.scrollBarV.scrollTop=null,this.onChangeNewLineMode=this.onChangeNewLineMode.bind(this),this.onChangeNewLineMode(),this.session.doc.on("changeNewLineMode",this.onChangeNewLineMode)},this.updateLines=function(e,t,n){t===undefined&&(t=Infinity),this.$changedLines?(this.$changedLines.firstRow>e&&(this.$changedLines.firstRow=e),this.$changedLines.lastRow<t&&(this.$changedLines.lastRow=t)):this.$changedLines={firstRow:e,lastRow:t};if(this.$changedLines.lastRow<this.layerConfig.firstRow){if(!n)return;this.$changedLines.lastRow=this.layerConfig.lastRow}if(this.$changedLines.firstRow>this.layerConfig.lastRow)return;this.$loop.schedule(this.CHANGE_LINES)},this.onChangeNewLineMode=function(){this.$loop.schedule(this.CHANGE_TEXT),this.$textLayer.$updateEolChar(),this.session.$bidiHandler.setEolChar(this.$textLayer.EOL_CHAR)},this.onChangeTabSize=function(){this.$loop.schedule(this.CHANGE_TEXT|this.CHANGE_MARKER),this.$textLayer.onChangeTabSize()},this.updateText=function(){this.$loop.schedule(this.CHANGE_TEXT)},this.updateFull=function(e){e?this.$renderChanges(this.CHANGE_FULL,!0):this.$loop.schedule(this.CHANGE_FULL)},this.updateFontSize=function(){this.$textLayer.checkForSizeChanges()},this.$changes=0,this.$updateSizeAsync=function(){this.$loop.pending?this.$size.$dirty=!0:this.onResize()},this.onResize=function(e,t,n,r){if(this.resizing>2)return;this.resizing>0?this.resizing++:this.resizing=e?1:0;var i=this.container;r||(r=i.clientHeight||i.scrollHeight),n||(n=i.clientWidth||i.scrollWidth);var s=this.$updateCachedSize(e,t,n,r);if(!this.$size.scrollerHeight||!n&&!r)return this.resizing=0;e&&(this.$gutterLayer.$padding=null),e?this.$renderChanges(s|this.$changes,!0):this.$loop.schedule(s|this.$changes),this.resizing&&(this.resizing=0),this.scrollBarH.scrollLeft=this.scrollBarV.scrollTop=null,this.$customScrollbar&&this.$updateCustomScrollbar(!0)},this.$updateCachedSize=function(e,t,n,r){r-=this.$extraHeight||0;var s=0,o=this.$size,u={width:o.width,height:o.height,scrollerHeight:o.scrollerHeight,scrollerWidth:o.scrollerWidth};r&&(e||o.height!=r)&&(o.height=r,s|=this.CHANGE_SIZE,o.scrollerHeight=o.height,this.$horizScroll&&(o.scrollerHeight-=this.scrollBarH.getHeight()),this.scrollBarV.setHeight(o.scrollerHeight),this.scrollBarV.element.style.bottom=this.scrollBarH.getHeight()+"px",s|=this.CHANGE_SCROLL);if(n&&(e||o.width!=n)){s|=this.CHANGE_SIZE,o.width=n,t==null&&(t=this.$showGutter?this.$gutter.offsetWidth:0),this.gutterWidth=t,i.setStyle(this.scrollBarH.element.style,"left",t+"px"),i.setStyle(this.scroller.style,"left",t+this.margin.left+"px"),o.scrollerWidth=Math.max(0,n-t-this.scrollBarV.getWidth()-this.margin.h),i.setStyle(this.$gutter.style,"left",this.margin.left+"px");var a=this.scrollBarV.getWidth()+"px";i.setStyle(this.scrollBarH.element.style,"right",a),i.setStyle(this.scroller.style,"right",a),i.setStyle(this.scroller.style,"bottom",this.scrollBarH.getHeight()),this.scrollBarH.setWidth(o.scrollerWidth);if(this.session&&this.session.getUseWrapMode()&&this.adjustWrapLimit()||e)s|=this.CHANGE_FULL}return o.$dirty=!n||!r,s&&this._signal("resize",u),s},this.onGutterResize=function(e){var t=this.$showGutter?e:0;t!=this.gutterWidth&&(this.$changes|=this.$updateCachedSize(!0,t,this.$size.width,this.$size.height)),this.session.getUseWrapMode()&&this.adjustWrapLimit()?this.$loop.schedule(this.CHANGE_FULL):this.$size.$dirty?this.$loop.schedule(this.CHANGE_FULL):this.$computeLayerConfig()},this.adjustWrapLimit=function(){var e=this.$size.scrollerWidth-this.$padding*2,t=Math.floor(e/this.characterWidth);return this.session.adjustWrapLimit(t,this.$showPrintMargin&&this.$printMarginColumn)},this.setAnimatedScroll=function(e){this.setOption("animatedScroll",e)},this.getAnimatedScroll=function(){return this.$animatedScroll},this.setShowInvisibles=function(e){this.setOption("showInvisibles",e),this.session.$bidiHandler.setShowInvisibles(e)},this.getShowInvisibles=function(){return this.getOption("showInvisibles")},this.getDisplayIndentGuides=function(){return this.getOption("displayIndentGuides")},this.setDisplayIndentGuides=function(e){this.setOption("displayIndentGuides",e)},this.getHighlightIndentGuides=function(){return this.getOption("highlightIndentGuides")},this.setHighlightIndentGuides=function(e){this.setOption("highlightIndentGuides",e)},this.setShowPrintMargin=function(e){this.setOption("showPrintMargin",e)},this.getShowPrintMargin=function(){return this.getOption("showPrintMargin")},this.setPrintMarginColumn=function(e){this.setOption("printMarginColumn",e)},this.getPrintMarginColumn=function(){return this.getOption("printMarginColumn")},this.getShowGutter=function(){return this.getOption("showGutter")},this.setShowGutter=function(e){return this.setOption("showGutter",e)},this.getFadeFoldWidgets=function(){return this.getOption("fadeFoldWidgets")},this.setFadeFoldWidgets=function(e){this.setOption("fadeFoldWidgets",e)},this.setHighlightGutterLine=function(e){this.setOption("highlightGutterLine",e)},this.getHighlightGutterLine=function(){return this.getOption("highlightGutterLine")},this.$updatePrintMargin=function(){if(!this.$showPrintMargin&&!this.$printMarginEl)return;if(!this.$printMarginEl){var e=i.createElement("div");e.className="ace_layer ace_print-margin-layer",this.$printMarginEl=i.createElement("div"),this.$printMarginEl.className="ace_print-margin",e.appendChild(this.$printMarginEl),this.content.insertBefore(e,this.content.firstChild)}var t=this.$printMarginEl.style;t.left=Math.round(this.characterWidth*this.$printMarginColumn+this.$padding)+"px",t.visibility=this.$showPrintMargin?"visible":"hidden",this.session&&this.session.$wrap==-1&&this.adjustWrapLimit()},this.getContainerElement=function(){return this.container},this.getMouseEventTarget=function(){return this.scroller},this.getTextAreaContainer=function(){return this.container},this.$moveTextAreaToCursor=function(){if(this.$isMousePressed)return;var e=this.textarea.style,t=this.$composition;if(!this.$keepTextAreaAtCursor&&!t){i.translate(this.textarea,-100,0);return}var n=this.$cursorLayer.$pixelPos;if(!n)return;t&&t.markerRange&&(n=this.$cursorLayer.getPixelPosition(t.markerRange.start,!0));var r=this.layerConfig,s=n.top,o=n.left;s-=r.offset;var u=t&&t.useTextareaForIME?this.lineHeight:w?0:1;if(s<0||s>r.height-u){i.translate(this.textarea,0,0);return}var a=1,f=this.$size.height-u;if(!t)s+=this.lineHeight;else if(t.useTextareaForIME){var l=this.textarea.value;a=this.characterWidth*this.session.$getStringScreenWidth(l)[0]}else s+=this.lineHeight+2;o-=this.scrollLeft,o>this.$size.scrollerWidth-a&&(o=this.$size.scrollerWidth-a),o+=this.gutterWidth+this.margin.left,i.setStyle(e,"height",u+"px"),i.setStyle(e,"width",a+"px"),i.translate(this.textarea,Math.min(o,this.$size.scrollerWidth-a),Math.min(s,f))},this.getFirstVisibleRow=function(){return this.layerConfig.firstRow},this.getFirstFullyVisibleRow=function(){return this.layerConfig.firstRow+(this.layerConfig.offset===0?0:1)},this.getLastFullyVisibleRow=function(){var e=this.layerConfig,t=e.lastRow,n=this.session.documentToScreenRow(t,0)*e.lineHeight;return n-this.session.getScrollTop()>e.height-e.lineHeight?t-1:t},this.getLastVisibleRow=function(){return this.layerConfig.lastRow},this.$padding=null,this.setPadding=function(e){this.$padding=e,this.$textLayer.setPadding(e),this.$cursorLayer.setPadding(e),this.$markerFront.setPadding(e),this.$markerBack.setPadding(e),this.$loop.schedule(this.CHANGE_FULL),this.$updatePrintMargin()},this.setScrollMargin=function(e,t,n,r){var i=this.scrollMargin;i.top=e|0,i.bottom=t|0,i.right=r|0,i.left=n|0,i.v=i.top+i.bottom,i.h=i.left+i.right,i.top&&this.scrollTop<=0&&this.session&&this.session.setScrollTop(-i.top),this.updateFull()},this.setMargin=function(e,t,n,r){var i=this.margin;i.top=e|0,i.bottom=t|0,i.right=r|0,i.left=n|0,i.v=i.top+i.bottom,i.h=i.left+i.right,this.$updateCachedSize(!0,this.gutterWidth,this.$size.width,this.$size.height),this.updateFull()},this.getHScrollBarAlwaysVisible=function(){return this.$hScrollBarAlwaysVisible},this.setHScrollBarAlwaysVisible=function(e){this.setOption("hScrollBarAlwaysVisible",e)},this.getVScrollBarAlwaysVisible=function(){return this.$vScrollBarAlwaysVisible},this.setVScrollBarAlwaysVisible=function(e){this.setOption("vScrollBarAlwaysVisible",e)},this.$updateScrollBarV=function(){var e=this.layerConfig.maxHeight,t=this.$size.scrollerHeight;!this.$maxLines&&this.$scrollPastEnd&&(e-=(t-this.lineHeight)*this.$scrollPastEnd,this.scrollTop>e-t&&(e=this.scrollTop+t,this.scrollBarV.scrollTop=null)),this.scrollBarV.setScrollHeight(e+this.scrollMargin.v),this.scrollBarV.setScrollTop(this.scrollTop+this.scrollMargin.top)},this.$updateScrollBarH=function(){this.scrollBarH.setScrollWidth(this.layerConfig.width+2*this.$padding+this.scrollMargin.h),this.scrollBarH.setScrollLeft(this.scrollLeft+this.scrollMargin.left)},this.$frozen=!1,this.freeze=function(){this.$frozen=!0},this.unfreeze=function(){this.$frozen=!1},this.$renderChanges=function(e,t){this.$changes&&(e|=this.$changes,this.$changes=0);if(!this.session||!this.container.offsetWidth||this.$frozen||!e&&!t){this.$changes|=e;return}if(this.$size.$dirty)return this.$changes|=e,this.onResize(!0);this.lineHeight||this.$textLayer.checkForSizeChanges(),this._signal("beforeRender",e),this.session&&this.session.$bidiHandler&&this.session.$bidiHandler.updateCharacterWidths(this.$fontMetrics);var n=this.layerConfig;if(e&this.CHANGE_FULL||e&this.CHANGE_SIZE||e&this.CHANGE_TEXT||e&this.CHANGE_LINES||e&this.CHANGE_SCROLL||e&this.CHANGE_H_SCROLL){e|=this.$computeLayerConfig()|this.$loop.clear();if(n.firstRow!=this.layerConfig.firstRow&&n.firstRowScreen==this.layerConfig.firstRowScreen){var r=this.scrollTop+(n.firstRow-this.layerConfig.firstRow)*this.lineHeight;r>0&&(this.scrollTop=r,e|=this.CHANGE_SCROLL,e|=this.$computeLayerConfig()|this.$loop.clear())}n=this.layerConfig,this.$updateScrollBarV(),e&this.CHANGE_H_SCROLL&&this.$updateScrollBarH(),i.translate(this.content,-this.scrollLeft,-n.offset);var s=n.width+2*this.$padding+"px",o=n.minHeight+"px";i.setStyle(this.content.style,"width",s),i.setStyle(this.content.style,"height",o)}e&this.CHANGE_H_SCROLL&&(i.translate(this.content,-this.scrollLeft,-n.offset),this.scroller.className=this.scrollLeft<=0?"ace_scroller":"ace_scroller ace_scroll-left");if(e&this.CHANGE_FULL){this.$changedLines=null,this.$textLayer.update(n),this.$showGutter&&this.$gutterLayer.update(n),this.$customScrollbar&&this.$scrollDecorator.$updateDecorators(n),this.$markerBack.update(n),this.$markerFront.update(n),this.$cursorLayer.update(n),this.$moveTextAreaToCursor(),this._signal("afterRender",e);return}if(e&this.CHANGE_SCROLL){this.$changedLines=null,e&this.CHANGE_TEXT||e&this.CHANGE_LINES?this.$textLayer.update(n):this.$textLayer.scrollLines(n),this.$showGutter&&(e&this.CHANGE_GUTTER||e&this.CHANGE_LINES?this.$gutterLayer.update(n):this.$gutterLayer.scrollLines(n)),this.$customScrollbar&&this.$scrollDecorator.$updateDecorators(n),this.$markerBack.update(n),this.$markerFront.update(n),this.$cursorLayer.update(n),this.$moveTextAreaToCursor(),this._signal("afterRender",e);return}e&this.CHANGE_TEXT?(this.$changedLines=null,this.$textLayer.update(n),this.$showGutter&&this.$gutterLayer.update(n),this.$customScrollbar&&this.$scrollDecorator.$updateDecorators(n)):e&this.CHANGE_LINES?((this.$updateLines()||e&this.CHANGE_GUTTER&&this.$showGutter)&&this.$gutterLayer.update(n),this.$customScrollbar&&this.$scrollDecorator.$updateDecorators(n)):e&this.CHANGE_TEXT||e&this.CHANGE_GUTTER?(this.$showGutter&&this.$gutterLayer.update(n),this.$customScrollbar&&this.$scrollDecorator.$updateDecorators(n)):e&this.CHANGE_CURSOR&&(this.$highlightGutterLine&&this.$gutterLayer.updateLineHighlight(n),this.$customScrollbar&&this.$scrollDecorator.$updateDecorators(n)),e&this.CHANGE_CURSOR&&(this.$cursorLayer.update(n),this.$moveTextAreaToCursor()),e&(this.CHANGE_MARKER|this.CHANGE_MARKER_FRONT)&&this.$markerFront.update(n),e&(this.CHANGE_MARKER|this.CHANGE_MARKER_BACK)&&this.$markerBack.update(n),this._signal("afterRender",e)},this.$autosize=function(){var e=this.session.getScreenLength()*this.lineHeight,t=this.$maxLines*this.lineHeight,n=Math.min(t,Math.max((this.$minLines||1)*this.lineHeight,e))+this.scrollMargin.v+(this.$extraHeight||0);this.$horizScroll&&(n+=this.scrollBarH.getHeight()),this.$maxPixelHeight&&n>this.$maxPixelHeight&&(n=this.$maxPixelHeight);var r=n<=2*this.lineHeight,i=!r&&e>t;if(n!=this.desiredHeight||this.$size.height!=this.desiredHeight||i!=this.$vScroll){i!=this.$vScroll&&(this.$vScroll=i,this.scrollBarV.setVisible(i));var s=this.container.clientWidth;this.container.style.height=n+"px",this.$updateCachedSize(!0,this.$gutterWidth,s,n),this.desiredHeight=n,this._signal("autosize")}},this.$computeLayerConfig=function(){var e=this.session,t=this.$size,n=t.height<=2*this.lineHeight,r=this.session.getScreenLength(),i=r*this.lineHeight,s=this.$getLongestLine(),o=!n&&(this.$hScrollBarAlwaysVisible||t.scrollerWidth-s-2*this.$padding<0),u=this.$horizScroll!==o;u&&(this.$horizScroll=o,this.scrollBarH.setVisible(o));var a=this.$vScroll;this.$maxLines&&this.lineHeight>1&&this.$autosize();var f=t.scrollerHeight+this.lineHeight,l=!this.$maxLines&&this.$scrollPastEnd?(t.scrollerHeight-this.lineHeight)*this.$scrollPastEnd:0;i+=l;var c=this.scrollMargin;this.session.setScrollTop(Math.max(-c.top,Math.min(this.scrollTop,i-t.scrollerHeight+c.bottom))),this.session.setScrollLeft(Math.max(-c.left,Math.min(this.scrollLeft,s+2*this.$padding-t.scrollerWidth+c.right)));var h=!n&&(this.$vScrollBarAlwaysVisible||t.scrollerHeight-i+l<0||this.scrollTop>c.top),p=a!==h;p&&(this.$vScroll=h,this.scrollBarV.setVisible(h));var d=this.scrollTop%this.lineHeight,v=Math.ceil(f/this.lineHeight)-1,m=Math.max(0,Math.round((this.scrollTop-d)/this.lineHeight)),g=m+v,y,b,w=this.lineHeight;m=e.screenToDocumentRow(m,0);var E=e.getFoldLine(m);E&&(m=E.start.row),y=e.documentToScreenRow(m,0),b=e.getRowLength(m)*w,g=Math.min(e.screenToDocumentRow(g,0),e.getLength()-1),f=t.scrollerHeight+e.getRowLength(g)*w+b,d=this.scrollTop-y*w;var S=0;if(this.layerConfig.width!=s||u)S=this.CHANGE_H_SCROLL;if(u||p)S|=this.$updateCachedSize(!0,this.gutterWidth,t.width,t.height),this._signal("scrollbarVisibilityChanged"),p&&(s=this.$getLongestLine());return this.layerConfig={width:s,padding:this.$padding,firstRow:m,firstRowScreen:y,lastRow:g,lineHeight:w,characterWidth:this.characterWidth,minHeight:f,maxHeight:i,offset:d,gutterOffset:w?Math.max(0,Math.ceil((d+t.height-t.scrollerHeight)/w)):0,height:this.$size.scrollerHeight},this.session.$bidiHandler&&this.session.$bidiHandler.setContentWidth(s-this.$padding),S},this.$updateLines=function(){if(!this.$changedLines)return;var e=this.$changedLines.firstRow,t=this.$changedLines.lastRow;this.$changedLines=null;var n=this.layerConfig;if(e>n.lastRow+1)return;if(t<n.firstRow)return;if(t===Infinity){this.$showGutter&&this.$gutterLayer.update(n),this.$textLayer.update(n);return}return this.$textLayer.updateLines(n,e,t),!0},this.$getLongestLine=function(){var e=this.session.getScreenWidth();return this.showInvisibles&&!this.session.$useWrapMode&&(e+=1),this.$textLayer&&e>this.$textLayer.MAX_LINE_LENGTH&&(e=this.$textLayer.MAX_LINE_LENGTH+30),Math.max(this.$size.scrollerWidth-2*this.$padding,Math.round(e*this.characterWidth))},this.updateFrontMarkers=function(){this.$markerFront.setMarkers(this.session.getMarkers(!0)),this.$loop.schedule(this.CHANGE_MARKER_FRONT)},this.updateBackMarkers=function(){this.$markerBack.setMarkers(this.session.getMarkers()),this.$loop.schedule(this.CHANGE_MARKER_BACK)},this.addGutterDecoration=function(e,t){this.$gutterLayer.addGutterDecoration(e,t)},this.removeGutterDecoration=function(e,t){this.$gutterLayer.removeGutterDecoration(e,t)},this.updateBreakpoints=function(e){this.$loop.schedule(this.CHANGE_GUTTER)},this.setAnnotations=function(e){this.$gutterLayer.setAnnotations(e),this.$loop.schedule(this.CHANGE_GUTTER)},this.updateCursor=function(){this.$loop.schedule(this.CHANGE_CURSOR)},this.hideCursor=function(){this.$cursorLayer.hideCursor()},this.showCursor=function(){this.$cursorLayer.showCursor()},this.scrollSelectionIntoView=function(e,t,n){this.scrollCursorIntoView(e,n),this.scrollCursorIntoView(t,n)},this.scrollCursorIntoView=function(e,t,n){if(this.$size.scrollerHeight===0)return;var r=this.$cursorLayer.getPixelPosition(e),i=r.left,s=r.top,o=n&&n.top||0,u=n&&n.bottom||0,a=this.$scrollAnimation?this.session.getScrollTop():this.scrollTop;a+o>s?(t&&a+o>s+this.lineHeight&&(s-=t*this.$size.scrollerHeight),s===0&&(s=-this.scrollMargin.top),this.session.setScrollTop(s)):a+this.$size.scrollerHeight-u<s+this.lineHeight&&(t&&a+this.$size.scrollerHeight-u<s-this.lineHeight&&(s+=t*this.$size.scrollerHeight),this.session.setScrollTop(s+this.lineHeight+u-this.$size.scrollerHeight));var f=this.scrollLeft;f>i?(i<this.$padding+2*this.layerConfig.characterWidth&&(i=-this.scrollMargin.left),this.session.setScrollLeft(i)):f+this.$size.scrollerWidth<i+this.characterWidth?this.session.setScrollLeft(Math.round(i+this.characterWidth-this.$size.scrollerWidth)):f<=this.$padding&&i-f<this.characterWidth&&this.session.setScrollLeft(0)},this.getScrollTop=function(){return this.session.getScrollTop()},this.getScrollLeft=function(){return this.session.getScrollLeft()},this.getScrollTopRow=function(){return this.scrollTop/this.lineHeight},this.getScrollBottomRow=function(){return Math.max(0,Math.floor((this.scrollTop+this.$size.scrollerHeight)/this.lineHeight)-1)},this.scrollToRow=function(e){this.session.setScrollTop(e*this.lineHeight)},this.alignCursor=function(e,t){typeof e=="number"&&(e={row:e,column:0});var n=this.$cursorLayer.getPixelPosition(e),r=this.$size.scrollerHeight-this.lineHeight,i=n.top-r*(t||0);return this.session.setScrollTop(i),i},this.STEPS=8,this.$calcSteps=function(e,t){var n=0,r=this.STEPS,i=[],s=function(e,t,n){return n*(Math.pow(e-1,3)+1)+t};for(n=0;n<r;++n)i.push(s(n/this.STEPS,e,t-e));return i},this.scrollToLine=function(e,t,n,r){var i=this.$cursorLayer.getPixelPosition({row:e,column:0}),s=i.top;t&&(s-=this.$size.scrollerHeight/2);var o=this.scrollTop;this.session.setScrollTop(s),n!==!1&&this.animateScrolling(o,r)},this.animateScrolling=function(e,t){var n=this.scrollTop;if(!this.$animatedScroll)return;var r=this;if(e==n)return;if(this.$scrollAnimation){var i=this.$scrollAnimation.steps;if(i.length){e=i[0];if(e==n)return}}var s=r.$calcSteps(e,n);this.$scrollAnimation={from:e,to:n,steps:s},clearInterval(this.$timer),r.session.setScrollTop(s.shift()),r.session.$scrollTop=n,this.$timer=setInterval(function(){if(!r.session)return clearInterval(r.$timer);s.length?(r.session.setScrollTop(s.shift()),r.session.$scrollTop=n):n!=null?(r.session.$scrollTop=-1,r.session.setScrollTop(n),n=null):(r.$timer=clearInterval(r.$timer),r.$scrollAnimation=null,t&&t())},10)},this.scrollToY=function(e){this.scrollTop!==e&&(this.$loop.schedule(this.CHANGE_SCROLL),this.scrollTop=e)},this.scrollToX=function(e){this.scrollLeft!==e&&(this.scrollLeft=e),this.$loop.schedule(this.CHANGE_H_SCROLL)},this.scrollTo=function(e,t){this.session.setScrollTop(t),this.session.setScrollLeft(e)},this.scrollBy=function(e,t){t&&this.session.setScrollTop(this.session.getScrollTop()+t),e&&this.session.setScrollLeft(this.session.getScrollLeft()+e)},this.isScrollableBy=function(e,t){if(t<0&&this.session.getScrollTop()>=1-this.scrollMargin.top)return!0;if(t>0&&this.session.getScrollTop()+this.$size.scrollerHeight-this.layerConfig.maxHeight<-1+this.scrollMargin.bottom)return!0;if(e<0&&this.session.getScrollLeft()>=1-this.scrollMargin.left)return!0;if(e>0&&this.session.getScrollLeft()+this.$size.scrollerWidth-this.layerConfig.width<-1+this.scrollMargin.right)return!0},this.pixelToScreenCoordinates=function(e,t){var n;if(this.$hasCssTransforms){n={top:0,left:0};var r=this.$fontMetrics.transformCoordinates([e,t]);e=r[1]-this.gutterWidth-this.margin.left,t=r[0]}else n=this.scroller.getBoundingClientRect();var i=e+this.scrollLeft-n.left-this.$padding,s=i/this.characterWidth,o=Math.floor((t+this.scrollTop-n.top)/this.lineHeight),u=this.$blockCursor?Math.floor(s):Math.round(s);return{row:o,column:u,side:s-u>0?1:-1,offsetX:i}},this.screenToTextCoordinates=function(e,t){var n;if(this.$hasCssTransforms){n={top:0,left:0};var r=this.$fontMetrics.transformCoordinates([e,t]);e=r[1]-this.gutterWidth-this.margin.left,t=r[0]}else n=this.scroller.getBoundingClientRect();var i=e+this.scrollLeft-n.left-this.$padding,s=i/this.characterWidth,o=this.$blockCursor?Math.floor(s):Math.round(s),u=Math.floor((t+this.scrollTop-n.top)/this.lineHeight);return this.session.screenToDocumentPosition(u,Math.max(o,0),i)},this.textToScreenCoordinates=function(e,t){var n=this.scroller.getBoundingClientRect(),r=this.session.documentToScreenPosition(e,t),i=this.$padding+(this.session.$bidiHandler.isBidiRow(r.row,e)?this.session.$bidiHandler.getPosLeft(r.column):Math.round(r.column*this.characterWidth)),s=r.row*this.lineHeight;return{pageX:n.left+i-this.scrollLeft,pageY:n.top+s-this.scrollTop}},this.visualizeFocus=function(){i.addCssClass(this.container,"ace_focus")},this.visualizeBlur=function(){i.removeCssClass(this.container,"ace_focus")},this.showComposition=function(e){this.$composition=e,e.cssText||(e.cssText=this.textarea.style.cssText),e.useTextareaForIME==undefined&&(e.useTextareaForIME=this.$useTextareaForIME),this.$useTextareaForIME?(i.addCssClass(this.textarea,"ace_composition"),this.textarea.style.cssText="",this.$moveTextAreaToCursor(),this.$cursorLayer.element.style.display="none"):e.markerId=this.session.addMarker(e.markerRange,"ace_composition_marker","text")},this.setCompositionText=function(e){var t=this.session.selection.cursor;this.addToken(e,"composition_placeholder",t.row,t.column),this.$moveTextAreaToCursor()},this.hideComposition=function(){if(!this.$composition)return;this.$composition.markerId&&this.session.removeMarker(this.$composition.markerId),i.removeCssClass(this.textarea,"ace_composition"),this.textarea.style.cssText=this.$composition.cssText;var e=this.session.selection.cursor;this.removeExtraToken(e.row,e.column),this.$composition=null,this.$cursorLayer.element.style.display=""},this.addToken=function(e,t,n,r){var i=this.session;i.bgTokenizer.lines[n]=null;var s={type:t,value:e},o=i.getTokens(n);if(r==null)o.push(s);else{var u=0;for(var a=0;a<o.length;a++){var f=o[a];u+=f.value.length;if(r<=u){var l=f.value.length-(u-r),c=f.value.slice(0,l),h=f.value.slice(l);o.splice(a,1,{type:f.type,value:c},s,{type:f.type,value:h});break}}}this.updateLines(n,n)},this.removeExtraToken=function(e,t){this.updateLines(e,e)},this.setTheme=function(e,t){function o(r){if(n.$themeId!=e)return t&&t();if(!r||!r.cssClass)throw new Error("couldn't load module "+e+" or it didn't call define");r.$id&&(n.$themeId=r.$id),i.importCssString(r.cssText,r.cssClass,n.container),n.theme&&i.removeCssClass(n.container,n.theme.cssClass);var s="padding"in r?r.padding:"padding"in(n.theme||{})?4:n.$padding;n.$padding&&s!=n.$padding&&n.setPadding(s),n.$theme=r.cssClass,n.theme=r,i.addCssClass(n.container,r.cssClass),i.setCssClass(n.container,"ace_dark",r.isDark),n.$size&&(n.$size.width=0,n.$updateSizeAsync()),n._dispatchEvent("themeLoaded",{theme:r}),t&&t()}var n=this;this.$themeId=e,n._dispatchEvent("themeChange",{theme:e});if(!e||typeof e=="string"){var r=e||this.$options.theme.initialValue;s.loadModule(["theme",r],o)}else o(e)},this.getTheme=function(){return this.$themeId},this.setStyle=function(e,t){i.setCssClass(this.container,e,t!==!1)},this.unsetStyle=function(e){i.removeCssClass(this.container,e)},this.setCursorStyle=function(e){i.setStyle(this.scroller.style,"cursor",e)},this.setMouseCursor=function(e){i.setStyle(this.scroller.style,"cursor",e)},this.attachToShadowRoot=function(){i.importCssString(g,"ace_editor.css",this.container)},this.destroy=function(){this.freeze(),this.$fontMetrics.destroy(),this.$cursorLayer.destroy(),this.removeAllListeners(),this.container.textContent=""},this.$updateCustomScrollbar=function(e){var t=this;this.$horizScroll=this.$vScroll=null,this.scrollBarV.element.remove(),this.scrollBarH.element.remove(),this.$scrollDecorator&&delete this.$scrollDecorator,e===!0?(this.scrollBarV=new p(this.container,this),this.scrollBarH=new h(this.container,this),this.scrollBarV.setHeight(this.$size.scrollerHeight),this.scrollBarH.setWidth(this.$size.scrollerWidth),this.scrollBarV.addEventListener("scroll",function(e){t.$scrollAnimation||t.session.setScrollTop(e.data-t.scrollMargin.top)}),this.scrollBarH.addEventListener("scroll",function(e){t.$scrollAnimation||t.session.setScrollLeft(e.data-t.scrollMargin.left)}),this.$scrollDecorator=new y(this.scrollBarV,this),this.$scrollDecorator.$updateDecorators()):(this.scrollBarV=new c(this.container,this),this.scrollBarH=new l(this.container,this),this.scrollBarV.addEventListener("scroll",function(e){t.$scrollAnimation||t.session.setScrollTop(e.data-t.scrollMargin.top)}),this.scrollBarH.addEventListener("scroll",function(e){t.$scrollAnimation||t.session.setScrollLeft(e.data-t.scrollMargin.left)}))}}).call(E.prototype),s.defineOptions(E.prototype,"renderer",{animatedScroll:{initialValue:!1},showInvisibles:{set:function(e){this.$textLayer.setShowInvisibles(e)&&this.$loop.schedule(this.CHANGE_TEXT)},initialValue:!1},showPrintMargin:{set:function(){this.$updatePrintMargin()},initialValue:!0},printMarginColumn:{set:function(){this.$updatePrintMargin()},initialValue:80},printMargin:{set:function(e){typeof e=="number"&&(this.$printMarginColumn=e),this.$showPrintMargin=!!e,this.$updatePrintMargin()},get:function(){return this.$showPrintMargin&&this.$printMarginColumn}},showGutter:{set:function(e){this.$gutter.style.display=e?"block":"none",this.$loop.schedule(this.CHANGE_FULL),this.onGutterResize()},initialValue:!0},fadeFoldWidgets:{set:function(e){i.setCssClass(this.$gutter,"ace_fade-fold-widgets",e)},initialValue:!1},showFoldWidgets:{set:function(e){this.$gutterLayer.setShowFoldWidgets(e),this.$loop.schedule(this.CHANGE_GUTTER)},initialValue:!0},displayIndentGuides:{set:function(e){this.$textLayer.setDisplayIndentGuides(e)&&this.$loop.schedule(this.CHANGE_TEXT)},initialValue:!0},highlightIndentGuides:{set:function(e){this.$textLayer.setHighlightIndentGuides(e)==1?this.$textLayer.$highlightIndentGuide():this.$textLayer.$clearActiveIndentGuide(this.$textLayer.$lines.cells)},initialValue:!0},highlightGutterLine:{set:function(e){this.$gutterLayer.setHighlightGutterLine(e),this.$loop.schedule(this.CHANGE_GUTTER)},initialValue:!0},hScrollBarAlwaysVisible:{set:function(e){(!this.$hScrollBarAlwaysVisible||!this.$horizScroll)&&this.$loop.schedule(this.CHANGE_SCROLL)},initialValue:!1},vScrollBarAlwaysVisible:{set:function(e){(!this.$vScrollBarAlwaysVisible||!this.$vScroll)&&this.$loop.schedule(this.CHANGE_SCROLL)},initialValue:!1},fontSize:{set:function(e){typeof e=="number"&&(e+="px"),this.container.style.fontSize=e,this.updateFontSize()},initialValue:12},fontFamily:{set:function(e){this.container.style.fontFamily=e,this.updateFontSize()}},maxLines:{set:function(e){this.updateFull()}},minLines:{set:function(e){this.$minLines<562949953421311||(this.$minLines=0),this.updateFull()}},maxPixelHeight:{set:function(e){this.updateFull()},initialValue:0},scrollPastEnd:{set:function(e){e=+e||0;if(this.$scrollPastEnd==e)return;this.$scrollPastEnd=e,this.$loop.schedule(this.CHANGE_SCROLL)},initialValue:0,handlesSet:!0},fixedWidthGutter:{set:function(e){this.$gutterLayer.$fixedWidth=!!e,this.$loop.schedule(this.CHANGE_GUTTER)}},customScrollbar:{set:function(e){this.$updateCustomScrollbar(e)},initialValue:!1},theme:{set:function(e){this.setTheme(e)},get:function(){return this.$themeId||this.theme},initialValue:"./theme/textmate",handlesSet:!0},hasCssTransforms:{},useTextareaForIME:{initialValue:!b.isMobile&&!b.isIE}}),t.VirtualRenderer=E}),ace.define("ace/worker/worker_client",["require","exports","module","ace/lib/oop","ace/lib/net","ace/lib/event_emitter","ace/config"],function(e,t,n){"use strict";function u(e){var t="importScripts('"+i.qualifyURL(e)+"');";try{return new Blob([t],{type:"application/javascript"})}catch(n){var r=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder,s=new r;return s.append(t),s.getBlob("application/javascript")}}function a(e){if(typeof Worker=="undefined")return{postMessage:function(){},terminate:function(){}};if(o.get("loadWorkerFromBlob")){var t=u(e),n=window.URL||window.webkitURL,r=n.createObjectURL(t);return new Worker(r)}return new Worker(e)}var r=e("../lib/oop"),i=e("../lib/net"),s=e("../lib/event_emitter").EventEmitter,o=e("../config"),f=function(e){e.postMessage||(e=this.$createWorkerFromOldConfig.apply(this,arguments)),this.$worker=e,this.$sendDeltaQueue=this.$sendDeltaQueue.bind(this),this.changeListener=this.changeListener.bind(this),this.onMessage=this.onMessage.bind(this),this.callbackId=1,this.callbacks={},this.$worker.onmessage=this.onMessage};(function(){r.implement(this,s),this.$createWorkerFromOldConfig=function(t,n,r,i,s){e.nameToUrl&&!e.toUrl&&(e.toUrl=e.nameToUrl);if(o.get("packaged")||!e.toUrl)i=i||o.moduleUrl(n,"worker");else{var u=this.$normalizePath;i=i||u(e.toUrl("ace/worker/worker.js",null,"_"));var f={};t.forEach(function(t){f[t]=u(e.toUrl(t,null,"_").replace(/(\.js)?(\?.*)?$/,""))})}return this.$worker=a(i),s&&this.send("importScripts",s),this.$worker.postMessage({init:!0,tlns:f,module:n,classname:r}),this.$worker},this.onMessage=function(e){var t=e.data;switch(t.type){case"event":this._signal(t.name,{data:t.data});break;case"call":var n=this.callbacks[t.id];n&&(n(t.data),delete this.callbacks[t.id]);break;case"error":this.reportError(t.data);break;case"log":window.console&&console.log&&console.log.apply(console,t.data)}},this.reportError=function(e){window.console&&console.error&&console.error(e)},this.$normalizePath=function(e){return i.qualifyURL(e)},this.terminate=function(){this._signal("terminate",{}),this.deltaQueue=null,this.$worker.terminate(),this.$worker=null,this.$doc&&this.$doc.off("change",this.changeListener),this.$doc=null},this.send=function(e,t){this.$worker.postMessage({command:e,args:t})},this.call=function(e,t,n){if(n){var r=this.callbackId++;this.callbacks[r]=n,t.push(r)}this.send(e,t)},this.emit=function(e,t){try{t.data&&t.data.err&&(t.data.err={message:t.data.err.message,stack:t.data.err.stack,code:t.data.err.code}),this.$worker&&this.$worker.postMessage({event:e,data:{data:t.data}})}catch(n){console.error(n.stack)}},this.attachToDocument=function(e){this.$doc&&this.terminate(),this.$doc=e,this.call("setValue",[e.getValue()]),e.on("change",this.changeListener,!0)},this.changeListener=function(e){this.deltaQueue||(this.deltaQueue=[],setTimeout(this.$sendDeltaQueue,0)),e.action=="insert"?this.deltaQueue.push(e.start,e.lines):this.deltaQueue.push(e.start,e.end)},this.$sendDeltaQueue=function(){var e=this.deltaQueue;if(!e)return;this.deltaQueue=null,e.length>50&&e.length>this.$doc.getLength()>>1?this.call("setValue",[this.$doc.getValue()]):this.emit("change",{data:e})}}).call(f.prototype);var l=function(e,t,n){var r=null,i=!1,u=Object.create(s),a=[],l=new f({messageBuffer:a,terminate:function(){},postMessage:function(e){a.push(e);if(!r)return;i?setTimeout(c):c()}});l.setEmitSync=function(e){i=e};var c=function(){var e=a.shift();e.command?r[e.command].apply(r,e.args):e.event&&u._signal(e.event,e.data)};return u.postMessage=function(e){l.onMessage({data:e})},u.callback=function(e,t){this.postMessage({type:"call",id:t,data:e})},u.emit=function(e,t){this.postMessage({type:"event",name:e,data:t})},o.loadModule(["worker",t],function(e){r=new e[n](u);while(a.length)c()}),l};t.UIWorkerClient=l,t.WorkerClient=f,t.createWorker=a}),ace.define("ace/placeholder",["require","exports","module","ace/range","ace/lib/event_emitter","ace/lib/oop"],function(e,t,n){"use strict";var r=e("./range").Range,i=e("./lib/event_emitter").EventEmitter,s=e("./lib/oop"),o=function(e,t,n,r,i,s){var o=this;this.length=t,this.session=e,this.doc=e.getDocument(),this.mainClass=i,this.othersClass=s,this.$onUpdate=this.onUpdate.bind(this),this.doc.on("change",this.$onUpdate,!0),this.$others=r,this.$onCursorChange=function(){setTimeout(function(){o.onCursorChange()})},this.$pos=n;var u=e.getUndoManager().$undoStack||e.getUndoManager().$undostack||{length:-1};this.$undoStackDepth=u.length,this.setup(),e.selection.on("changeCursor",this.$onCursorChange)};(function(){s.implement(this,i),this.setup=function(){var e=this,t=this.doc,n=this.session;this.selectionBefore=n.selection.toJSON(),n.selection.inMultiSelectMode&&n.selection.toSingleRange(),this.pos=t.createAnchor(this.$pos.row,this.$pos.column);var i=this.pos;i.$insertRight=!0,i.detach(),i.markerId=n.addMarker(new r(i.row,i.column,i.row,i.column+this.length),this.mainClass,null,!1),this.others=[],this.$others.forEach(function(n){var r=t.createAnchor(n.row,n.column);r.$insertRight=!0,r.detach(),e.others.push(r)}),n.setUndoSelect(!1)},this.showOtherMarkers=function(){if(this.othersActive)return;var e=this.session,t=this;this.othersActive=!0,this.others.forEach(function(n){n.markerId=e.addMarker(new r(n.row,n.column,n.row,n.column+t.length),t.othersClass,null,!1)})},this.hideOtherMarkers=function(){if(!this.othersActive)return;this.othersActive=!1;for(var e=0;e<this.others.length;e++)this.session.removeMarker(this.others[e].markerId)},this.onUpdate=function(e){if(this.$updating)return this.updateAnchors(e);var t=e;if(t.start.row!==t.end.row)return;if(t.start.row!==this.pos.row)return;this.$updating=!0;var n=e.action==="insert"?t.end.column-t.start.column:t.start.column-t.end.column,i=t.start.column>=this.pos.column&&t.start.column<=this.pos.column+this.length+1,s=t.start.column-this.pos.column;this.updateAnchors(e),i&&(this.length+=n);if(i&&!this.session.$fromUndo)if(e.action==="insert")for(var o=this.others.length-1;o>=0;o--){var u=this.others[o],a={row:u.row,column:u.column+s};this.doc.insertMergedLines(a,e.lines)}else if(e.action==="remove")for(var o=this.others.length-1;o>=0;o--){var u=this.others[o],a={row:u.row,column:u.column+s};this.doc.remove(new r(a.row,a.column,a.row,a.column-n))}this.$updating=!1,this.updateMarkers()},this.updateAnchors=function(e){this.pos.onChange(e);for(var t=this.others.length;t--;)this.others[t].onChange(e);this.updateMarkers()},this.updateMarkers=function(){if(this.$updating)return;var e=this,t=this.session,n=function(n,i){t.removeMarker(n.markerId),n.markerId=t.addMarker(new r(n.row,n.column,n.row,n.column+e.length),i,null,!1)};n(this.pos,this.mainClass);for(var i=this.others.length;i--;)n(this.others[i],this.othersClass)},this.onCursorChange=function(e){if(this.$updating||!this.session)return;var t=this.session.selection.getCursor();t.row===this.pos.row&&t.column>=this.pos.column&&t.column<=this.pos.column+this.length?(this.showOtherMarkers(),this._emit("cursorEnter",e)):(this.hideOtherMarkers(),this._emit("cursorLeave",e))},this.detach=function(){this.session.removeMarker(this.pos&&this.pos.markerId),this.hideOtherMarkers(),this.doc.off("change",this.$onUpdate),this.session.selection.off("changeCursor",this.$onCursorChange),this.session.setUndoSelect(!0),this.session=null},this.cancel=function(){if(this.$undoStackDepth===-1)return;var e=this.session.getUndoManager(),t=(e.$undoStack||e.$undostack).length-this.$undoStackDepth;for(var n=0;n<t;n++)e.undo(this.session,!0);this.selectionBefore&&this.session.selection.fromJSON(this.selectionBefore)}}).call(o.prototype),t.PlaceHolder=o}),ace.define("ace/mouse/multi_select_handler",["require","exports","module","ace/lib/event","ace/lib/useragent"],function(e,t,n){function s(e,t){return e.row==t.row&&e.column==t.column}function o(e){var t=e.domEvent,n=t.altKey,o=t.shiftKey,u=t.ctrlKey,a=e.getAccelKey(),f=e.getButton();u&&i.isMac&&(f=t.button);if(e.editor.inMultiSelectMode&&f==2){e.editor.textInput.onContextMenu(e.domEvent);return}if(!u&&!n&&!a){f===0&&e.editor.inMultiSelectMode&&e.editor.exitMultiSelectMode();return}if(f!==0)return;var l=e.editor,c=l.selection,h=l.inMultiSelectMode,p=e.getDocumentPosition(),d=c.getCursor(),v=e.inSelection()||c.isEmpty()&&s(p,d),m=e.x,g=e.y,y=function(e){m=e.clientX,g=e.clientY},b=l.session,w=l.renderer.pixelToScreenCoordinates(m,g),E=w,S;if(l.$mouseHandler.$enableJumpToDef)u&&n||a&&n?S=o?"block":"add":n&&l.$blockSelectEnabled&&(S="block");else if(a&&!n){S="add";if(!h&&o)return}else n&&l.$blockSelectEnabled&&(S="block");S&&i.isMac&&t.ctrlKey&&l.$mouseHandler.cancelContextMenu();if(S=="add"){if(!h&&v)return;if(!h){var x=c.toOrientedRange();l.addSelectionMarker(x)}var T=c.rangeList.rangeAtPoint(p);l.inVirtualSelectionMode=!0,o&&(T=null,x=c.ranges[0]||x,l.removeSelectionMarker(x)),l.once("mouseup",function(){var e=c.toOrientedRange();T&&e.isEmpty()&&s(T.cursor,e.cursor)?c.substractPoint(e.cursor):(o?c.substractPoint(x.cursor):x&&(l.removeSelectionMarker(x),c.addRange(x)),c.addRange(e)),l.inVirtualSelectionMode=!1})}else if(S=="block"){e.stop(),l.inVirtualSelectionMode=!0;var N,C=[],k=function(){var e=l.renderer.pixelToScreenCoordinates(m,g),t=b.screenToDocumentPosition(e.row,e.column,e.offsetX);if(s(E,e)&&s(t,c.lead))return;E=e,l.selection.moveToPosition(t),l.renderer.scrollCursorIntoView(),l.removeSelectionMarkers(C),C=c.rectangularRangeBlock(E,w),l.$mouseHandler.$clickSelection&&C.length==1&&C[0].isEmpty()&&(C[0]=l.$mouseHandler.$clickSelection.clone()),C.forEach(l.addSelectionMarker,l),l.updateSelectionMarkers()};h&&!a?c.toSingleRange():!h&&a&&(N=c.toOrientedRange(),l.addSelectionMarker(N)),o?w=b.documentToScreenPosition(c.lead):c.moveToPosition(p),E={row:-1,column:-1};var L=function(e){k(),clearInterval(O),l.removeSelectionMarkers(C),C.length||(C=[c.toOrientedRange()]),N&&(l.removeSelectionMarker(N),c.toSingleRange(N));for(var t=0;t<C.length;t++)c.addRange(C[t]);l.inVirtualSelectionMode=!1,l.$mouseHandler.$clickSelection=null},A=k;r.capture(l.container,y,L);var O=setInterval(function(){A()},20);return e.preventDefault()}}var r=e("../lib/event"),i=e("../lib/useragent");t.onMouseDown=o}),ace.define("ace/commands/multi_select_commands",["require","exports","module","ace/keyboard/hash_handler"],function(e,t,n){t.defaultCommands=[{name:"addCursorAbove",description:"Add cursor above",exec:function(e){e.selectMoreLines(-1)},bindKey:{win:"Ctrl-Alt-Up",mac:"Ctrl-Alt-Up"},scrollIntoView:"cursor",readOnly:!0},{name:"addCursorBelow",description:"Add cursor below",exec:function(e){e.selectMoreLines(1)},bindKey:{win:"Ctrl-Alt-Down",mac:"Ctrl-Alt-Down"},scrollIntoView:"cursor",readOnly:!0},{name:"addCursorAboveSkipCurrent",description:"Add cursor above (skip current)",exec:function(e){e.selectMoreLines(-1,!0)},bindKey:{win:"Ctrl-Alt-Shift-Up",mac:"Ctrl-Alt-Shift-Up"},scrollIntoView:"cursor",readOnly:!0},{name:"addCursorBelowSkipCurrent",description:"Add cursor below (skip current)",exec:function(e){e.selectMoreLines(1,!0)},bindKey:{win:"Ctrl-Alt-Shift-Down",mac:"Ctrl-Alt-Shift-Down"},scrollIntoView:"cursor",readOnly:!0},{name:"selectMoreBefore",description:"Select more before",exec:function(e){e.selectMore(-1)},bindKey:{win:"Ctrl-Alt-Left",mac:"Ctrl-Alt-Left"},scrollIntoView:"cursor",readOnly:!0},{name:"selectMoreAfter",description:"Select more after",exec:function(e){e.selectMore(1)},bindKey:{win:"Ctrl-Alt-Right",mac:"Ctrl-Alt-Right"},scrollIntoView:"cursor",readOnly:!0},{name:"selectNextBefore",description:"Select next before",exec:function(e){e.selectMore(-1,!0)},bindKey:{win:"Ctrl-Alt-Shift-Left",mac:"Ctrl-Alt-Shift-Left"},scrollIntoView:"cursor",readOnly:!0},{name:"selectNextAfter",description:"Select next after",exec:function(e){e.selectMore(1,!0)},bindKey:{win:"Ctrl-Alt-Shift-Right",mac:"Ctrl-Alt-Shift-Right"},scrollIntoView:"cursor",readOnly:!0},{name:"toggleSplitSelectionIntoLines",description:"Split into lines",exec:function(e){e.multiSelect.rangeCount>1?e.multiSelect.joinSelections():e.multiSelect.splitIntoLines()},bindKey:{win:"Ctrl-Alt-L",mac:"Ctrl-Alt-L"},readOnly:!0},{name:"splitSelectionIntoLines",description:"Split into lines",exec:function(e){e.multiSelect.splitIntoLines()},readOnly:!0},{name:"alignCursors",description:"Align cursors",exec:function(e){e.alignCursors()},bindKey:{win:"Ctrl-Alt-A",mac:"Ctrl-Alt-A"},scrollIntoView:"cursor"},{name:"findAll",description:"Find all",exec:function(e){e.findAll()},bindKey:{win:"Ctrl-Alt-K",mac:"Ctrl-Alt-G"},scrollIntoView:"cursor",readOnly:!0}],t.multiSelectCommands=[{name:"singleSelection",description:"Single selection",bindKey:"esc",exec:function(e){e.exitMultiSelectMode()},scrollIntoView:"cursor",readOnly:!0,isAvailable:function(e){return e&&e.inMultiSelectMode}}];var r=e("../keyboard/hash_handler").HashHandler;t.keyboardHandler=new r(t.multiSelectCommands)}),ace.define("ace/multi_select",["require","exports","module","ace/range_list","ace/range","ace/selection","ace/mouse/multi_select_handler","ace/lib/event","ace/lib/lang","ace/commands/multi_select_commands","ace/search","ace/edit_session","ace/editor","ace/config"],function(e,t,n){function h(e,t,n){return c.$options.wrap=!0,c.$options.needle=t,c.$options.backwards=n==-1,c.find(e)}function v(e,t){return e.row==t.row&&e.column==t.column}function m(e){if(e.$multiselectOnSessionChange)return;e.$onAddRange=e.$onAddRange.bind(e),e.$onRemoveRange=e.$onRemoveRange.bind(e),e.$onMultiSelect=e.$onMultiSelect.bind(e),e.$onSingleSelect=e.$onSingleSelect.bind(e),e.$multiselectOnSessionChange=t.onSessionChange.bind(e),e.$checkMultiselectChange=e.$checkMultiselectChange.bind(e),e.$multiselectOnSessionChange(e),e.on("changeSession",e.$multiselectOnSessionChange),e.on("mousedown",o),e.commands.addCommands(f.defaultCommands),g(e)}function g(e){function r(t){n&&(e.renderer.setMouseCursor(""),n=!1)}if(!e.textInput)return;var t=e.textInput.getElement(),n=!1;u.addListener(t,"keydown",function(t){var i=t.keyCode==18&&!(t.ctrlKey||t.shiftKey||t.metaKey);e.$blockSelectEnabled&&i?n||(e.renderer.setMouseCursor("crosshair"),n=!0):n&&r()},e),u.addListener(t,"keyup",r,e),u.addListener(t,"blur",r,e)}var r=e("./range_list").RangeList,i=e("./range").Range,s=e("./selection").Selection,o=e("./mouse/multi_select_handler").onMouseDown,u=e("./lib/event"),a=e("./lib/lang"),f=e("./commands/multi_select_commands");t.commands=f.defaultCommands.concat(f.multiSelectCommands);var l=e("./search").Search,c=new l,p=e("./edit_session").EditSession;(function(){this.getSelectionMarkers=function(){return this.$selectionMarkers}}).call(p.prototype),function(){this.ranges=null,this.rangeList=null,this.addRange=function(e,t){if(!e)return;if(!this.inMultiSelectMode&&this.rangeCount===0){var n=this.toOrientedRange();this.rangeList.add(n),this.rangeList.add(e);if(this.rangeList.ranges.length!=2)return this.rangeList.removeAll(),t||this.fromOrientedRange(e);this.rangeList.removeAll(),this.rangeList.add(n),this.$onAddRange(n)}e.cursor||(e.cursor=e.end);var r=this.rangeList.add(e);return this.$onAddRange(e),r.length&&this.$onRemoveRange(r),this.rangeCount>1&&!this.inMultiSelectMode&&(this._signal("multiSelect"),this.inMultiSelectMode=!0,this.session.$undoSelect=!1,this.rangeList.attach(this.session)),t||this.fromOrientedRange(e)},this.toSingleRange=function(e){e=e||this.ranges[0];var t=this.rangeList.removeAll();t.length&&this.$onRemoveRange(t),e&&this.fromOrientedRange(e)},this.substractPoint=function(e){var t=this.rangeList.substractPoint(e);if(t)return this.$onRemoveRange(t),t[0]},this.mergeOverlappingRanges=function(){var e=this.rangeList.merge();e.length&&this.$onRemoveRange(e)},this.$onAddRange=function(e){this.rangeCount=this.rangeList.ranges.length,this.ranges.unshift(e),this._signal("addRange",{range:e})},this.$onRemoveRange=function(e){this.rangeCount=this.rangeList.ranges.length;if(this.rangeCount==1&&this.inMultiSelectMode){var t=this.rangeList.ranges.pop();e.push(t),this.rangeCount=0}for(var n=e.length;n--;){var r=this.ranges.indexOf(e[n]);this.ranges.splice(r,1)}this._signal("removeRange",{ranges:e}),this.rangeCount===0&&this.inMultiSelectMode&&(this.inMultiSelectMode=!1,this._signal("singleSelect"),this.session.$undoSelect=!0,this.rangeList.detach(this.session)),t=t||this.ranges[0],t&&!t.isEqual(this.getRange())&&this.fromOrientedRange(t)},this.$initRangeList=function(){if(this.rangeList)return;this.rangeList=new r,this.ranges=[],this.rangeCount=0},this.getAllRanges=function(){return this.rangeCount?this.rangeList.ranges.concat():[this.getRange()]},this.splitIntoLines=function(){var e=this.ranges.length?this.ranges:[this.getRange()],t=[];for(var n=0;n<e.length;n++){var r=e[n],s=r.start.row,o=r.end.row;if(s===o)t.push(r.clone());else{t.push(new i(s,r.start.column,s,this.session.getLine(s).length));while(++s<o)t.push(this.getLineRange(s,!0));t.push(new i(o,0,o,r.end.column))}n==0&&!this.isBackwards()&&(t=t.reverse())}this.toSingleRange();for(var n=t.length;n--;)this.addRange(t[n])},this.joinSelections=function(){var e=this.rangeList.ranges,t=e[e.length-1],n=i.fromPoints(e[0].start,t.end);this.toSingleRange(),this.setSelectionRange(n,t.cursor==t.start)},this.toggleBlockSelection=function(){if(this.rangeCount>1){var e=this.rangeList.ranges,t=e[e.length-1],n=i.fromPoints(e[0].start,t.end);this.toSingleRange(),this.setSelectionRange(n,t.cursor==t.start)}else{var r=this.session.documentToScreenPosition(this.cursor),s=this.session.documentToScreenPosition(this.anchor),o=this.rectangularRangeBlock(r,s);o.forEach(this.addRange,this)}},this.rectangularRangeBlock=function(e,t,n){var r=[],s=e.column<t.column;if(s)var o=e.column,u=t.column,a=e.offsetX,f=t.offsetX;else var o=t.column,u=e.column,a=t.offsetX,f=e.offsetX;var l=e.row<t.row;if(l)var c=e.row,h=t.row;else var c=t.row,h=e.row;o<0&&(o=0),c<0&&(c=0),c==h&&(n=!0);var p;for(var d=c;d<=h;d++){var m=i.fromPoints(this.session.screenToDocumentPosition(d,o,a),this.session.screenToDocumentPosition(d,u,f));if(m.isEmpty()){if(p&&v(m.end,p))break;p=m.end}m.cursor=s?m.start:m.end,r.push(m)}l&&r.reverse();if(!n){var g=r.length-1;while(r[g].isEmpty()&&g>0)g--;if(g>0){var y=0;while(r[y].isEmpty())y++}for(var b=g;b>=y;b--)r[b].isEmpty()&&r.splice(b,1)}return r}}.call(s.prototype);var d=e("./editor").Editor;(function(){this.updateSelectionMarkers=function(){this.renderer.updateCursor(),this.renderer.updateBackMarkers()},this.addSelectionMarker=function(e){e.cursor||(e.cursor=e.end);var t=this.getSelectionStyle();return e.marker=this.session.addMarker(e,"ace_selection",t),this.session.$selectionMarkers.push(e),this.session.selectionMarkerCount=this.session.$selectionMarkers.length,e},this.removeSelectionMarker=function(e){if(!e.marker)return;this.session.removeMarker(e.marker);var t=this.session.$selectionMarkers.indexOf(e);t!=-1&&this.session.$selectionMarkers.splice(t,1),this.session.selectionMarkerCount=this.session.$selectionMarkers.length},this.removeSelectionMarkers=function(e){var t=this.session.$selectionMarkers;for(var n=e.length;n--;){var r=e[n];if(!r.marker)continue;this.session.removeMarker(r.marker);var i=t.indexOf(r);i!=-1&&t.splice(i,1)}this.session.selectionMarkerCount=t.length},this.$onAddRange=function(e){this.addSelectionMarker(e.range),this.renderer.updateCursor(),this.renderer.updateBackMarkers()},this.$onRemoveRange=function(e){this.removeSelectionMarkers(e.ranges),this.renderer.updateCursor(),this.renderer.updateBackMarkers()},this.$onMultiSelect=function(e){if(this.inMultiSelectMode)return;this.inMultiSelectMode=!0,this.setStyle("ace_multiselect"),this.keyBinding.addKeyboardHandler(f.keyboardHandler),this.commands.setDefaultHandler("exec",this.$onMultiSelectExec),this.renderer.updateCursor(),this.renderer.updateBackMarkers()},this.$onSingleSelect=function(e){if(this.session.multiSelect.inVirtualMode)return;this.inMultiSelectMode=!1,this.unsetStyle("ace_multiselect"),this.keyBinding.removeKeyboardHandler(f.keyboardHandler),this.commands.removeDefaultHandler("exec",this.$onMultiSelectExec),this.renderer.updateCursor(),this.renderer.updateBackMarkers(),this._emit("changeSelection")},this.$onMultiSelectExec=function(e){var t=e.command,n=e.editor;if(!n.multiSelect)return;if(!t.multiSelectAction){var r=t.exec(n,e.args||{});n.multiSelect.addRange(n.multiSelect.toOrientedRange()),n.multiSelect.mergeOverlappingRanges()}else t.multiSelectAction=="forEach"?r=n.forEachSelection(t,e.args):t.multiSelectAction=="forEachLine"?r=n.forEachSelection(t,e.args,!0):t.multiSelectAction=="single"?(n.exitMultiSelectMode(),r=t.exec(n,e.args||{})):r=t.multiSelectAction(n,e.args||{});return r},this.forEachSelection=function(e,t,n){if(this.inVirtualSelectionMode)return;var r=n&&n.keepOrder,i=n==1||n&&n.$byLines,o=this.session,u=this.selection,a=u.rangeList,f=(r?u:a).ranges,l;if(!f.length)return e.exec?e.exec(this,t||{}):e(this,t||{});var c=u._eventRegistry;u._eventRegistry={};var h=new s(o);this.inVirtualSelectionMode=!0;for(var p=f.length;p--;){if(i)while(p>0&&f[p].start.row==f[p-1].end.row)p--;h.fromOrientedRange(f[p]),h.index=p,this.selection=o.selection=h;var d=e.exec?e.exec(this,t||{}):e(this,t||{});!l&&d!==undefined&&(l=d),h.toOrientedRange(f[p])}h.detach(),this.selection=o.selection=u,this.inVirtualSelectionMode=!1,u._eventRegistry=c,u.mergeOverlappingRanges(),u.ranges[0]&&u.fromOrientedRange(u.ranges[0]);var v=this.renderer.$scrollAnimation;return this.onCursorChange(),this.onSelectionChange(),v&&v.from==v.to&&this.renderer.animateScrolling(v.from),l},this.exitMultiSelectMode=function(){if(!this.inMultiSelectMode||this.inVirtualSelectionMode)return;this.multiSelect.toSingleRange()},this.getSelectedText=function(){var e="";if(this.inMultiSelectMode&&!this.inVirtualSelectionMode){var t=this.multiSelect.rangeList.ranges,n=[];for(var r=0;r<t.length;r++)n.push(this.session.getTextRange(t[r]));var i=this.session.getDocument().getNewLineCharacter();e=n.join(i),e.length==(n.length-1)*i.length&&(e="")}else this.selection.isEmpty()||(e=this.session.getTextRange(this.getSelectionRange()));return e},this.$checkMultiselectChange=function(e,t){if(this.inMultiSelectMode&&!this.inVirtualSelectionMode){var n=this.multiSelect.ranges[0];if(this.multiSelect.isEmpty()&&t==this.multiSelect.anchor)return;var r=t==this.multiSelect.anchor?n.cursor==n.start?n.end:n.start:n.cursor;r.row!=t.row||this.session.$clipPositionToDocument(r.row,r.column).column!=t.column?this.multiSelect.toSingleRange(this.multiSelect.toOrientedRange()):this.multiSelect.mergeOverlappingRanges()}},this.findAll=function(e,t,n){t=t||{},t.needle=e||t.needle;if(t.needle==undefined){var r=this.selection.isEmpty()?this.selection.getWordRange():this.selection.getRange();t.needle=this.session.getTextRange(r)}this.$search.set(t);var i=this.$search.findAll(this.session);if(!i.length)return 0;var s=this.multiSelect;n||s.toSingleRange(i[0]);for(var o=i.length;o--;)s.addRange(i[o],!0);return r&&s.rangeList.rangeAtPoint(r.start)&&s.addRange(r,!0),i.length},this.selectMoreLines=function(e,t){var n=this.selection.toOrientedRange(),r=n.cursor==n.end,s=this.session.documentToScreenPosition(n.cursor);this.selection.$desiredColumn&&(s.column=this.selection.$desiredColumn);var o=this.session.screenToDocumentPosition(s.row+e,s.column);if(!n.isEmpty())var u=this.session.documentToScreenPosition(r?n.end:n.start),a=this.session.screenToDocumentPosition(u.row+e,u.column);else var a=o;if(r){var f=i.fromPoints(o,a);f.cursor=f.start}else{var f=i.fromPoints(a,o);f.cursor=f.end}f.desiredColumn=s.column;if(!this.selection.inMultiSelectMode)this.selection.addRange(n);else if(t)var l=n.cursor;this.selection.addRange(f),l&&this.selection.substractPoint(l)},this.transposeSelections=function(e){var t=this.session,n=t.multiSelect,r=n.ranges;for(var i=r.length;i--;){var s=r[i];if(s.isEmpty()){var o=t.getWordRange(s.start.row,s.start.column);s.start.row=o.start.row,s.start.column=o.start.column,s.end.row=o.end.row,s.end.column=o.end.column}}n.mergeOverlappingRanges();var u=[];for(var i=r.length;i--;){var s=r[i];u.unshift(t.getTextRange(s))}e<0?u.unshift(u.pop()):u.push(u.shift());for(var i=r.length;i--;){var s=r[i],o=s.clone();t.replace(s,u[i]),s.start.row=o.start.row,s.start.column=o.start.column}n.fromOrientedRange(n.ranges[0])},this.selectMore=function(e,t,n){var r=this.session,i=r.multiSelect,s=i.toOrientedRange();if(s.isEmpty()){s=r.getWordRange(s.start.row,s.start.column),s.cursor=e==-1?s.start:s.end,this.multiSelect.addRange(s);if(n)return}var o=r.getTextRange(s),u=h(r,o,e);u&&(u.cursor=e==-1?u.start:u.end,this.session.unfold(u),this.multiSelect.addRange(u),this.renderer.scrollCursorIntoView(null,.5)),t&&this.multiSelect.substractPoint(s.cursor)},this.alignCursors=function(){var e=this.session,t=e.multiSelect,n=t.ranges,r=-1,s=n.filter(function(e){if(e.cursor.row==r)return!0;r=e.cursor.row});if(!n.length||s.length==n.length-1){var o=this.selection.getRange(),u=o.start.row,f=o.end.row,l=u==f;if(l){var c=this.session.getLength(),h;do h=this.session.getLine(f);while(/[=:]/.test(h)&&++f<c);do h=this.session.getLine(u);while(/[=:]/.test(h)&&--u>0);u<0&&(u=0),f>=c&&(f=c-1)}var p=this.session.removeFullLines(u,f);p=this.$reAlignText(p,l),this.session.insert({row:u,column:0},p.join("\n")+"\n"),l||(o.start.column=0,o.end.column=p[p.length-1].length),this.selection.setRange(o)}else{s.forEach(function(e){t.substractPoint(e.cursor)});var d=0,v=Infinity,m=n.map(function(t){var n=t.cursor,r=e.getLine(n.row),i=r.substr(n.column).search(/\S/g);return i==-1&&(i=0),n.column>d&&(d=n.column),i<v&&(v=i),i});n.forEach(function(t,n){var r=t.cursor,s=d-r.column,o=m[n]-v;s>o?e.insert(r,a.stringRepeat(" ",s-o)):e.remove(new i(r.row,r.column,r.row,r.column-s+o)),t.start.column=t.end.column=d,t.start.row=t.end.row=r.row,t.cursor=t.end}),t.fromOrientedRange(n[0]),this.renderer.updateCursor(),this.renderer.updateBackMarkers()}},this.$reAlignText=function(e,t){function u(e){return a.stringRepeat(" ",e)}function f(e){return e[2]?u(i)+e[2]+u(s-e[2].length+o)+e[4].replace(/^([=:])\s+/,"$1 "):e[0]}function l(e){return e[2]?u(i+s-e[2].length)+e[2]+u(o)+e[4].replace(/^([=:])\s+/,"$1 "):e[0]}function c(e){return e[2]?u(i)+e[2]+u(o)+e[4].replace(/^([=:])\s+/,"$1 "):e[0]}var n=!0,r=!0,i,s,o;return e.map(function(e){var t=e.match(/(\s*)(.*?)(\s*)([=:].*)/);return t?i==null?(i=t[1].length,s=t[2].length,o=t[3].length,t):(i+s+o!=t[1].length+t[2].length+t[3].length&&(r=!1),i!=t[1].length&&(n=!1),i>t[1].length&&(i=t[1].length),s<t[2].length&&(s=t[2].length),o>t[3].length&&(o=t[3].length),t):[e]}).map(t?f:n?r?l:f:c)}}).call(d.prototype),t.onSessionChange=function(e){var t=e.session;t&&!t.multiSelect&&(t.$selectionMarkers=[],t.selection.$initRangeList(),t.multiSelect=t.selection),this.multiSelect=t&&t.multiSelect;var n=e.oldSession;n&&(n.multiSelect.off("addRange",this.$onAddRange),n.multiSelect.off("removeRange",this.$onRemoveRange),n.multiSelect.off("multiSelect",this.$onMultiSelect),n.multiSelect.off("singleSelect",this.$onSingleSelect),n.multiSelect.lead.off("change",this.$checkMultiselectChange),n.multiSelect.anchor.off("change",this.$checkMultiselectChange)),t&&(t.multiSelect.on("addRange",this.$onAddRange),t.multiSelect.on("removeRange",this.$onRemoveRange),t.multiSelect.on("multiSelect",this.$onMultiSelect),t.multiSelect.on("singleSelect",this.$onSingleSelect),t.multiSelect.lead.on("change",this.$checkMultiselectChange),t.multiSelect.anchor.on("change",this.$checkMultiselectChange)),t&&this.inMultiSelectMode!=t.selection.inMultiSelectMode&&(t.selection.inMultiSelectMode?this.$onMultiSelect():this.$onSingleSelect())},t.MultiSelect=m,e("./config").defineOptions(d.prototype,"editor",{enableMultiselect:{set:function(e){m(this),e?(this.on("changeSession",this.$multiselectOnSessionChange),this.on("mousedown",o)):(this.off("changeSession",this.$multiselectOnSessionChange),this.off("mousedown",o))},value:!0},enableBlockSelect:{set:function(e){this.$blockSelectEnabled=e},value:!0}})}),ace.define("ace/mode/folding/fold_mode",["require","exports","module","ace/range"],function(e,t,n){"use strict";var r=e("../../range").Range,i=t.FoldMode=function(){};(function(){this.foldingStartMarker=null,this.foldingStopMarker=null,this.getFoldWidget=function(e,t,n){var r=e.getLine(n);return this.foldingStartMarker.test(r)?"start":t=="markbeginend"&&this.foldingStopMarker&&this.foldingStopMarker.test(r)?"end":""},this.getFoldWidgetRange=function(e,t,n){return null},this.indentationBlock=function(e,t,n){var i=/\S/,s=e.getLine(t),o=s.search(i);if(o==-1)return;var u=n||s.length,a=e.getLength(),f=t,l=t;while(++t<a){var c=e.getLine(t).search(i);if(c==-1)continue;if(c<=o){var h=e.getTokenAt(t,0);if(!h||h.type!=="string")break}l=t}if(l>f){var p=e.getLine(l).length;return new r(f,u,l,p)}},this.openingBracketBlock=function(e,t,n,i,s){var o={row:n,column:i+1},u=e.$findClosingBracket(t,o,s);if(!u)return;var a=e.foldWidgets[u.row];return a==null&&(a=e.getFoldWidget(u.row)),a=="start"&&u.row>o.row&&(u.row--,u.column=e.getLine(u.row).length),r.fromPoints(o,u)},this.closingBracketBlock=function(e,t,n,i,s){var o={row:n,column:i},u=e.$findOpeningBracket(t,o);if(!u)return;return u.column++,o.column--,r.fromPoints(u,o)}}).call(i.prototype)}),ace.define("ace/line_widgets",["require","exports","module","ace/lib/dom"],function(e,t,n){"use strict";function i(e){this.session=e,this.session.widgetManager=this,this.session.getRowLength=this.getRowLength,this.session.$getWidgetScreenLength=this.$getWidgetScreenLength,this.updateOnChange=this.updateOnChange.bind(this),this.renderWidgets=this.renderWidgets.bind(this),this.measureWidgets=this.measureWidgets.bind(this),this.session._changedWidgets=[],this.$onChangeEditor=this.$onChangeEditor.bind(this),this.session.on("change",this.updateOnChange),this.session.on("changeFold",this.updateOnFold),this.session.on("changeEditor",this.$onChangeEditor)}var r=e("./lib/dom");(function(){this.getRowLength=function(e){var t;return this.lineWidgets?t=this.lineWidgets[e]&&this.lineWidgets[e].rowCount||0:t=0,!this.$useWrapMode||!this.$wrapData[e]?1+t:this.$wrapData[e].length+1+t},this.$getWidgetScreenLength=function(){var e=0;return this.lineWidgets.forEach(function(t){t&&t.rowCount&&!t.hidden&&(e+=t.rowCount)}),e},this.$onChangeEditor=function(e){this.attach(e.editor)},this.attach=function(e){e&&e.widgetManager&&e.widgetManager!=this&&e.widgetManager.detach();if(this.editor==e)return;this.detach(),this.editor=e,e&&(e.widgetManager=this,e.renderer.on("beforeRender",this.measureWidgets),e.renderer.on("afterRender",this.renderWidgets))},this.detach=function(e){var t=this.editor;if(!t)return;this.editor=null,t.widgetManager=null,t.renderer.off("beforeRender",this.measureWidgets),t.renderer.off("afterRender",this.renderWidgets);var n=this.session.lineWidgets;n&&n.forEach(function(e){e&&e.el&&e.el.parentNode&&(e._inDocument=!1,e.el.parentNode.removeChild(e.el))})},this.updateOnFold=function(e,t){var n=t.lineWidgets;if(!n||!e.action)return;var r=e.data,i=r.start.row,s=r.end.row,o=e.action=="add";for(var u=i+1;u<s;u++)n[u]&&(n[u].hidden=o);n[s]&&(o?n[i]?n[s].hidden=o:n[i]=n[s]:(n[i]==n[s]&&(n[i]=undefined),n[s].hidden=o))},this.updateOnChange=function(e){var t=this.session.lineWidgets;if(!t)return;var n=e.start.row,r=e.end.row-n;if(r!==0)if(e.action=="remove"){var i=t.splice(n+1,r);!t[n]&&i[i.length-1]&&(t[n]=i.pop()),i.forEach(function(e){e&&this.removeLineWidget(e)},this),this.$updateRows()}else{var s=new Array(r);t[n]&&t[n].column!=null&&e.start.column>t[n].column&&n++,s.unshift(n,0),t.splice.apply(t,s),this.$updateRows()}},this.$updateRows=function(){var e=this.session.lineWidgets;if(!e)return;var t=!0;e.forEach(function(e,n){if(e){t=!1,e.row=n;while(e.$oldWidget)e.$oldWidget.row=n,e=e.$oldWidget}}),t&&(this.session.lineWidgets=null)},this.$registerLineWidget=function(e){this.session.lineWidgets||(this.session.lineWidgets=new Array(this.session.getLength()));var t=this.session.lineWidgets[e.row];return t&&(e.$oldWidget=t,t.el&&t.el.parentNode&&(t.el.parentNode.removeChild(t.el),t._inDocument=!1)),this.session.lineWidgets[e.row]=e,e},this.addLineWidget=function(e){this.$registerLineWidget(e),e.session=this.session;if(!this.editor)return e;var t=this.editor.renderer;e.html&&!e.el&&(e.el=r.createElement("div"),e.el.innerHTML=e.html),e.el&&(r.addCssClass(e.el,"ace_lineWidgetContainer"),e.el.style.position="absolute",e.el.style.zIndex=5,t.container.appendChild(e.el),e._inDocument=!0,e.coverGutter||(e.el.style.zIndex=3),e.pixelHeight==null&&(e.pixelHeight=e.el.offsetHeight)),e.rowCount==null&&(e.rowCount=e.pixelHeight/t.layerConfig.lineHeight);var n=this.session.getFoldAt(e.row,0);e.$fold=n;if(n){var i=this.session.lineWidgets;e.row==n.end.row&&!i[n.start.row]?i[n.start.row]=e:e.hidden=!0}return this.session._emit("changeFold",{data:{start:{row:e.row}}}),this.$updateRows(),this.renderWidgets(null,t),this.onWidgetChanged(e),e},this.removeLineWidget=function(e){e._inDocument=!1,e.session=null,e.el&&e.el.parentNode&&e.el.parentNode.removeChild(e.el);if(e.editor&&e.editor.destroy)try{e.editor.destroy()}catch(t){}if(this.session.lineWidgets){var n=this.session.lineWidgets[e.row];if(n==e)this.session.lineWidgets[e.row]=e.$oldWidget,e.$oldWidget&&this.onWidgetChanged(e.$oldWidget);else while(n){if(n.$oldWidget==e){n.$oldWidget=e.$oldWidget;break}n=n.$oldWidget}}this.session._emit("changeFold",{data:{start:{row:e.row}}}),this.$updateRows()},this.getWidgetsAtRow=function(e){var t=this.session.lineWidgets,n=t&&t[e],r=[];while(n)r.push(n),n=n.$oldWidget;return r},this.onWidgetChanged=function(e){this.session._changedWidgets.push(e),this.editor&&this.editor.renderer.updateFull()},this.measureWidgets=function(e,t){var n=this.session._changedWidgets,r=t.layerConfig;if(!n||!n.length)return;var i=Infinity;for(var s=0;s<n.length;s++){var o=n[s];if(!o||!o.el)continue;if(o.session!=this.session)continue;if(!o._inDocument){if(this.session.lineWidgets[o.row]!=o)continue;o._inDocument=!0,t.container.appendChild(o.el)}o.h=o.el.offsetHeight,o.fixedWidth||(o.w=o.el.offsetWidth,o.screenWidth=Math.ceil(o.w/r.characterWidth));var u=o.h/r.lineHeight;o.coverLine&&(u-=this.session.getRowLineCount(o.row),u<0&&(u=0)),o.rowCount!=u&&(o.rowCount=u,o.row<i&&(i=o.row))}i!=Infinity&&(this.session._emit("changeFold",{data:{start:{row:i}}}),this.session.lineWidgetWidth=null),this.session._changedWidgets=[]},this.renderWidgets=function(e,t){var n=t.layerConfig,r=this.session.lineWidgets;if(!r)return;var i=Math.min(this.firstRow,n.firstRow),s=Math.max(this.lastRow,n.lastRow,r.length);while(i>0&&!r[i])i--;this.firstRow=n.firstRow,this.lastRow=n.lastRow,t.$cursorLayer.config=n;for(var o=i;o<=s;o++){var u=r[o];if(!u||!u.el)continue;if(u.hidden){u.el.style.top=-100-(u.pixelHeight||0)+"px";continue}u._inDocument||(u._inDocument=!0,t.container.appendChild(u.el));var a=t.$cursorLayer.getPixelPosition({row:o,column:0},!0).top;u.coverLine||(a+=n.lineHeight*this.session.getRowLineCount(u.row)),u.el.style.top=a-n.offset+"px";var f=u.coverGutter?0:t.gutterWidth;u.fixedWidth||(f-=t.scrollLeft),u.el.style.left=f+"px",u.fullWidth&&u.screenWidth&&(u.el.style.minWidth=n.width+2*n.padding+"px"),u.fixedWidth?u.el.style.right=t.scrollBar.getWidth()+"px":u.el.style.right=""}}}).call(i.prototype),t.LineWidgets=i}),ace.define("ace/ext/error_marker",["require","exports","module","ace/line_widgets","ace/lib/dom","ace/range"],function(e,t,n){"use strict";function o(e,t,n){var r=0,i=e.length-1;while(r<=i){var s=r+i>>1,o=n(t,e[s]);if(o>0)r=s+1;else{if(!(o<0))return s;i=s-1}}return-(r+1)}function u(e,t,n){var r=e.getAnnotations().sort(s.comparePoints);if(!r.length)return;var i=o(r,{row:t,column:-1},s.comparePoints);i<0&&(i=-i-1),i>=r.length?i=n>0?0:r.length-1:i===0&&n<0&&(i=r.length-1);var u=r[i];if(!u||!n)return;if(u.row===t){do u=r[i+=n];while(u&&u.row===t);if(!u)return r.slice()}var a=[];t=u.row;do a[n<0?"unshift":"push"](u),u=r[i+=n];while(u&&u.row==t);return a.length&&a}var r=e("../line_widgets").LineWidgets,i=e("../lib/dom"),s=e("../range").Range;t.showErrorMarker=function(e,t){var n=e.session;n.widgetManager||(n.widgetManager=new r(n),n.widgetManager.attach(e));var s=e.getCursorPosition(),o=s.row,a=n.widgetManager.getWidgetsAtRow(o).filter(function(e){return e.type=="errorMarker"})[0];a?a.destroy():o-=t;var f=u(n,o,t),l;if(f){var c=f[0];s.column=(c.pos&&typeof c.column!="number"?c.pos.sc:c.column)||0,s.row=c.row,l=e.renderer.$gutterLayer.$annotations[s.row]}else{if(a)return;l={text:["Looks good!"],className:"ace_ok"}}e.session.unfold(s.row),e.selection.moveToPosition(s);var h={row:s.row,fixedWidth:!0,coverGutter:!0,el:i.createElement("div"),type:"errorMarker"},p=h.el.appendChild(i.createElement("div")),d=h.el.appendChild(i.createElement("div"));d.className="error_widget_arrow "+l.className;var v=e.renderer.$cursorLayer.getPixelPosition(s).left;d.style.left=v+e.renderer.gutterWidth-5+"px",h.el.className="error_widget_wrapper",p.className="error_widget "+l.className,p.innerHTML=l.text.join("<br>"),p.appendChild(i.createElement("div"));var m=function(e,t,n){if(t===0&&(n==="esc"||n==="return"))return h.destroy(),{command:"null"}};h.destroy=function(){if(e.$mouseHandler.isMousePressed)return;e.keyBinding.removeKeyboardHandler(m),n.widgetManager.removeLineWidget(h),e.off("changeSelection",h.destroy),e.off("changeSession",h.destroy),e.off("mouseup",h.destroy),e.off("change",h.destroy)},e.keyBinding.addKeyboardHandler(m),e.on("changeSelection",h.destroy),e.on("changeSession",h.destroy),e.on("mouseup",h.destroy),e.on("change",h.destroy),e.session.widgetManager.addLineWidget(h),h.el.onmousedown=e.focus.bind(e),e.renderer.scrollCursorIntoView(null,.5,{bottom:h.el.offsetHeight})},i.importCssString("\n    .error_widget_wrapper {\n        background: inherit;\n        color: inherit;\n        border:none\n    }\n    .error_widget {\n        border-top: solid 2px;\n        border-bottom: solid 2px;\n        margin: 5px 0;\n        padding: 10px 40px;\n        white-space: pre-wrap;\n    }\n    .error_widget.ace_error, .error_widget_arrow.ace_error{\n        border-color: #ff5a5a\n    }\n    .error_widget.ace_warning, .error_widget_arrow.ace_warning{\n        border-color: #F1D817\n    }\n    .error_widget.ace_info, .error_widget_arrow.ace_info{\n        border-color: #5a5a5a\n    }\n    .error_widget.ace_ok, .error_widget_arrow.ace_ok{\n        border-color: #5aaa5a\n    }\n    .error_widget_arrow {\n        position: absolute;\n        border: solid 5px;\n        border-top-color: transparent!important;\n        border-right-color: transparent!important;\n        border-left-color: transparent!important;\n        top: -5px;\n    }\n","error_marker.css",!1)}),ace.define("ace/ace",["require","exports","module","ace/lib/dom","ace/lib/event","ace/range","ace/editor","ace/edit_session","ace/undomanager","ace/virtual_renderer","ace/worker/worker_client","ace/keyboard/hash_handler","ace/placeholder","ace/multi_select","ace/mode/folding/fold_mode","ace/theme/textmate","ace/ext/error_marker","ace/config","ace/loader_build"],function(e,t,n){"use strict";e("./loader_build")(t);var r=e("./lib/dom"),i=e("./lib/event"),s=e("./range").Range,o=e("./editor").Editor,u=e("./edit_session").EditSession,a=e("./undomanager").UndoManager,f=e("./virtual_renderer").VirtualRenderer;e("./worker/worker_client"),e("./keyboard/hash_handler"),e("./placeholder"),e("./multi_select"),e("./mode/folding/fold_mode"),e("./theme/textmate"),e("./ext/error_marker"),t.config=e("./config"),t.edit=function(e,n){if(typeof e=="string"){var s=e;e=document.getElementById(s);if(!e)throw new Error("ace.edit can't find div #"+s)}if(e&&e.env&&e.env.editor instanceof o)return e.env.editor;var u="";if(e&&/input|textarea/i.test(e.tagName)){var a=e;u=a.value,e=r.createElement("pre"),a.parentNode.replaceChild(e,a)}else e&&(u=e.textContent,e.innerHTML="");var l=t.createEditSession(u),c=new o(new f(e),l,n),h={document:l,editor:c,onResize:c.resize.bind(c,null)};return a&&(h.textarea=a),i.addListener(window,"resize",h.onResize),c.on("destroy",function(){i.removeListener(window,"resize",h.onResize),h.editor.container.env=null}),c.container.env=c.env=h,c},t.createEditSession=function(e,t){var n=new u(e,t);return n.setUndoManager(new a),n},t.Range=s,t.Editor=o,t.EditSession=u,t.UndoManager=a,t.VirtualRenderer=f,t.version=t.config.version});            (function() {
                ace.require(["ace/ace"], function(a) {
                    if (a) {
                        a.config.init(true);
                        a.define = ace.define;
                    }
                    if (!window.ace)
                        window.ace = a;
                    for (var key in a) if (a.hasOwnProperty(key))
                        window.ace[key] = a[key];
                    window.ace["default"] = window.ace;
                    if (typeof module == "object" && typeof exports == "object" && module) {
                        module.exports = window.ace;
                    }
                });
            })();
        
ace.define("ace/snippets",["require","exports","module","ace/lib/dom","ace/lib/oop","ace/lib/event_emitter","ace/lib/lang","ace/range","ace/range_list","ace/keyboard/hash_handler","ace/tokenizer","ace/clipboard","ace/editor"],function(e,t,n){"use strict";function p(e){var t=(new Date).toLocaleString("en-us",e);return t.length==1?"0"+t:t}var r=e("./lib/dom"),i=e("./lib/oop"),s=e("./lib/event_emitter").EventEmitter,o=e("./lib/lang"),u=e("./range").Range,a=e("./range_list").RangeList,f=e("./keyboard/hash_handler").HashHandler,l=e("./tokenizer").Tokenizer,c=e("./clipboard"),h={CURRENT_WORD:function(e){return e.session.getTextRange(e.session.getWordRange())},SELECTION:function(e,t,n){var r=e.session.getTextRange();return n?r.replace(/\n\r?([ \t]*\S)/g,"\n"+n+"$1"):r},CURRENT_LINE:function(e){return e.session.getLine(e.getCursorPosition().row)},PREV_LINE:function(e){return e.session.getLine(e.getCursorPosition().row-1)},LINE_INDEX:function(e){return e.getCursorPosition().row},LINE_NUMBER:function(e){return e.getCursorPosition().row+1},SOFT_TABS:function(e){return e.session.getUseSoftTabs()?"YES":"NO"},TAB_SIZE:function(e){return e.session.getTabSize()},CLIPBOARD:function(e){return c.getText&&c.getText()},FILENAME:function(e){return/[^/\\]*$/.exec(this.FILEPATH(e))[0]},FILENAME_BASE:function(e){return/[^/\\]*$/.exec(this.FILEPATH(e))[0].replace(/\.[^.]*$/,"")},DIRECTORY:function(e){return this.FILEPATH(e).replace(/[^/\\]*$/,"")},FILEPATH:function(e){return"/not implemented.txt"},WORKSPACE_NAME:function(){return"Unknown"},FULLNAME:function(){return"Unknown"},BLOCK_COMMENT_START:function(e){var t=e.session.$mode||{};return t.blockComment&&t.blockComment.start||""},BLOCK_COMMENT_END:function(e){var t=e.session.$mode||{};return t.blockComment&&t.blockComment.end||""},LINE_COMMENT:function(e){var t=e.session.$mode||{};return t.lineCommentStart||""},CURRENT_YEAR:p.bind(null,{year:"numeric"}),CURRENT_YEAR_SHORT:p.bind(null,{year:"2-digit"}),CURRENT_MONTH:p.bind(null,{month:"numeric"}),CURRENT_MONTH_NAME:p.bind(null,{month:"long"}),CURRENT_MONTH_NAME_SHORT:p.bind(null,{month:"short"}),CURRENT_DATE:p.bind(null,{day:"2-digit"}),CURRENT_DAY_NAME:p.bind(null,{weekday:"long"}),CURRENT_DAY_NAME_SHORT:p.bind(null,{weekday:"short"}),CURRENT_HOUR:p.bind(null,{hour:"2-digit",hour12:!1}),CURRENT_MINUTE:p.bind(null,{minute:"2-digit"}),CURRENT_SECOND:p.bind(null,{second:"2-digit"})};h.SELECTED_TEXT=h.SELECTION;var d=function(){this.snippetMap={},this.snippetNameMap={}};(function(){i.implement(this,s),this.getTokenizer=function(){return d.$tokenizer||this.createTokenizer()},this.createTokenizer=function(){function e(e){return e=e.substr(1),/^\d+$/.test(e)?[{tabstopId:parseInt(e,10)}]:[{text:e}]}function t(e){return"(?:[^\\\\"+e+"]|\\\\.)"}var n={regex:"/("+t("/")+"+)/",onMatch:function(e,t,n){var r=n[0];return r.fmtString=!0,r.guard=e.slice(1,-1),r.flag="",""},next:"formatString"};return d.$tokenizer=new l({start:[{regex:/\\./,onMatch:function(e,t,n){var r=e[1];return r=="}"&&n.length?e=r:"`$\\".indexOf(r)!=-1&&(e=r),[e]}},{regex:/}/,onMatch:function(e,t,n){return[n.length?n.shift():e]}},{regex:/\$(?:\d+|\w+)/,onMatch:e},{regex:/\$\{[\dA-Z_a-z]+/,onMatch:function(t,n,r){var i=e(t.substr(1));return r.unshift(i[0]),i},next:"snippetVar"},{regex:/\n/,token:"newline",merge:!1}],snippetVar:[{regex:"\\|"+t("\\|")+"*\\|",onMatch:function(e,t,n){var r=e.slice(1,-1).replace(/\\[,|\\]|,/g,function(e){return e.length==2?e[1]:"\0"}).split("\0").map(function(e){return{value:e}});return n[0].choices=r,[r[0]]},next:"start"},n,{regex:"([^:}\\\\]|\\\\.)*:?",token:"",next:"start"}],formatString:[{regex:/:/,onMatch:function(e,t,n){return n.length&&n[0].expectElse?(n[0].expectElse=!1,n[0].ifEnd={elseEnd:n[0]},[n[0].ifEnd]):":"}},{regex:/\\./,onMatch:function(e,t,n){var r=e[1];return r=="}"&&n.length?e=r:"`$\\".indexOf(r)!=-1?e=r:r=="n"?e="\n":r=="t"?e="	":"ulULE".indexOf(r)!=-1&&(e={changeCase:r,local:r>"a"}),[e]}},{regex:"/\\w*}",onMatch:function(e,t,n){var r=n.shift();return r&&(r.flag=e.slice(1,-1)),this.next=r&&r.tabstopId?"start":"",[r||e]},next:"start"},{regex:/\$(?:\d+|\w+)/,onMatch:function(e,t,n){return[{text:e.slice(1)}]}},{regex:/\${\w+/,onMatch:function(e,t,n){var r={text:e.slice(2)};return n.unshift(r),[r]},next:"formatStringVar"},{regex:/\n/,token:"newline",merge:!1},{regex:/}/,onMatch:function(e,t,n){var r=n.shift();return this.next=r&&r.tabstopId?"start":"",[r||e]},next:"start"}],formatStringVar:[{regex:/:\/\w+}/,onMatch:function(e,t,n){var r=n[0];return r.formatFunction=e.slice(2,-1),[n.shift()]},next:"formatString"},n,{regex:/:[\?\-+]?/,onMatch:function(e,t,n){e[1]=="+"&&(n[0].ifEnd=n[0]),e[1]=="?"&&(n[0].expectElse=!0)},next:"formatString"},{regex:"([^:}\\\\]|\\\\.)*:?",token:"",next:"formatString"}]}),d.$tokenizer},this.tokenizeTmSnippet=function(e,t){return this.getTokenizer().getLineTokens(e,t).tokens.map(function(e){return e.value||e})},this.getVariableValue=function(e,t,n){if(/^\d+$/.test(t))return(this.variables.__||{})[t]||"";if(/^[A-Z]\d+$/.test(t))return(this.variables[t[0]+"__"]||{})[t.substr(1)]||"";t=t.replace(/^TM_/,"");if(!this.variables.hasOwnProperty(t))return"";var r=this.variables[t];return typeof r=="function"&&(r=this.variables[t](e,t,n)),r==null?"":r},this.variables=h,this.tmStrFormat=function(e,t,n){if(!t.fmt)return e;var r=t.flag||"",i=t.guard;i=new RegExp(i,r.replace(/[^gim]/g,""));var s=typeof t.fmt=="string"?this.tokenizeTmSnippet(t.fmt,"formatString"):t.fmt,o=this,u=e.replace(i,function(){var e=o.variables.__;o.variables.__=[].slice.call(arguments);var t=o.resolveVariables(s,n),r="E";for(var i=0;i<t.length;i++){var u=t[i];if(typeof u=="object"){t[i]="";if(u.changeCase&&u.local){var a=t[i+1];a&&typeof a=="string"&&(u.changeCase=="u"?t[i]=a[0].toUpperCase():t[i]=a[0].toLowerCase(),t[i+1]=a.substr(1))}else u.changeCase&&(r=u.changeCase)}else r=="U"?t[i]=u.toUpperCase():r=="L"&&(t[i]=u.toLowerCase())}return o.variables.__=e,t.join("")});return u},this.tmFormatFunction=function(e,t,n){return t.formatFunction=="upcase"?e.toUpperCase():t.formatFunction=="downcase"?e.toLowerCase():e},this.resolveVariables=function(e,t){function f(t){var n=e.indexOf(t,s+1);n!=-1&&(s=n)}var n=[],r="",i=!0;for(var s=0;s<e.length;s++){var o=e[s];if(typeof o=="string"){n.push(o),o=="\n"?(i=!0,r=""):i&&(r=/^\t*/.exec(o)[0],i=/\S/.test(o));continue}if(!o)continue;i=!1;if(o.fmtString){var u=e.indexOf(o,s+1);u==-1&&(u=e.length),o.fmt=e.slice(s+1,u),s=u}if(o.text){var a=this.getVariableValue(t,o.text,r)+"";o.fmtString&&(a=this.tmStrFormat(a,o,t)),o.formatFunction&&(a=this.tmFormatFunction(a,o,t)),a&&!o.ifEnd?(n.push(a),f(o)):!a&&o.ifEnd&&f(o.ifEnd)}else o.elseEnd?f(o.elseEnd):o.tabstopId!=null?n.push(o):o.changeCase!=null&&n.push(o)}return n},this.insertSnippetForSelection=function(e,t){function f(e){var t=[];for(var n=0;n<e.length;n++){var r=e[n];if(typeof r=="object"){if(a[r.tabstopId])continue;var i=e.lastIndexOf(r,n-1);r=t[i]||{tabstopId:r.tabstopId}}t[n]=r}return t}var n=e.getCursorPosition(),r=e.session.getLine(n.row),i=e.session.getTabString(),s=r.match(/^\s*/)[0];n.column<s.length&&(s=s.slice(0,n.column)),t=t.replace(/\r/g,"");var o=this.tokenizeTmSnippet(t);o=this.resolveVariables(o,e),o=o.map(function(e){return e=="\n"?e+s:typeof e=="string"?e.replace(/\t/g,i):e});var u=[];o.forEach(function(e,t){if(typeof e!="object")return;var n=e.tabstopId,r=u[n];r||(r=u[n]=[],r.index=n,r.value="",r.parents={});if(r.indexOf(e)!==-1)return;e.choices&&!r.choices&&(r.choices=e.choices),r.push(e);var i=o.indexOf(e,t+1);if(i===-1)return;var s=o.slice(t+1,i),a=s.some(function(e){return typeof e=="object"});a&&!r.value?r.value=s:s.length&&(!r.value||typeof r.value!="string")&&(r.value=s.join(""))}),u.forEach(function(e){e.length=0});var a={};for(var l=0;l<o.length;l++){var c=o[l];if(typeof c!="object")continue;var h=c.tabstopId,p=u[h],d=o.indexOf(c,l+1);if(a[h]){a[h]===c&&(delete a[h],Object.keys(a).forEach(function(e){p.parents[e]=!0}));continue}a[h]=c;var m=p.value;typeof m!="string"?m=f(m):c.fmt&&(m=this.tmStrFormat(m,c,e)),o.splice.apply(o,[l+1,Math.max(0,d-l)].concat(m,c)),p.indexOf(c)===-1&&p.push(c)}var g=0,y=0,b="";o.forEach(function(e){if(typeof e=="string"){var t=e.split("\n");t.length>1?(y=t[t.length-1].length,g+=t.length-1):y+=e.length,b+=e}else e&&(e.start?e.end={row:g,column:y}:e.start={row:g,column:y})});var w=e.getSelectionRange(),E=e.session.replace(w,b),S=new v(e),x=e.inVirtualSelectionMode&&e.selection.index;S.addTabstops(u,w.start,E,x)},this.insertSnippet=function(e,t){var n=this;if(e.inVirtualSelectionMode)return n.insertSnippetForSelection(e,t);e.forEachSelection(function(){n.insertSnippetForSelection(e,t)},null,{keepOrder:!0}),e.tabstopManager&&e.tabstopManager.tabNext()},this.$getScope=function(e){var t=e.session.$mode.$id||"";t=t.split("/").pop();if(t==="html"||t==="php"){t==="php"&&!e.session.$mode.inlinePhp&&(t="html");var n=e.getCursorPosition(),r=e.session.getState(n.row);typeof r=="object"&&(r=r[0]),r.substring&&(r.substring(0,3)=="js-"?t="javascript":r.substring(0,4)=="css-"?t="css":r.substring(0,4)=="php-"&&(t="php"))}return t},this.getActiveScopes=function(e){var t=this.$getScope(e),n=[t],r=this.snippetMap;return r[t]&&r[t].includeScopes&&n.push.apply(n,r[t].includeScopes),n.push("_"),n},this.expandWithTab=function(e,t){var n=this,r=e.forEachSelection(function(){return n.expandSnippetForSelection(e,t)},null,{keepOrder:!0});return r&&e.tabstopManager&&e.tabstopManager.tabNext(),r},this.expandSnippetForSelection=function(e,t){var n=e.getCursorPosition(),r=e.session.getLine(n.row),i=r.substring(0,n.column),s=r.substr(n.column),o=this.snippetMap,u;return this.getActiveScopes(e).some(function(e){var t=o[e];return t&&(u=this.findMatchingSnippet(t,i,s)),!!u},this),u?t&&t.dryRun?!0:(e.session.doc.removeInLine(n.row,n.column-u.replaceBefore.length,n.column+u.replaceAfter.length),this.variables.M__=u.matchBefore,this.variables.T__=u.matchAfter,this.insertSnippetForSelection(e,u.content),this.variables.M__=this.variables.T__=null,!0):!1},this.findMatchingSnippet=function(e,t,n){for(var r=e.length;r--;){var i=e[r];if(i.startRe&&!i.startRe.test(t))continue;if(i.endRe&&!i.endRe.test(n))continue;if(!i.startRe&&!i.endRe)continue;return i.matchBefore=i.startRe?i.startRe.exec(t):[""],i.matchAfter=i.endRe?i.endRe.exec(n):[""],i.replaceBefore=i.triggerRe?i.triggerRe.exec(t)[0]:"",i.replaceAfter=i.endTriggerRe?i.endTriggerRe.exec(n)[0]:"",i}},this.snippetMap={},this.snippetNameMap={},this.register=function(e,t){function s(e){return e&&!/^\^?\(.*\)\$?$|^\\b$/.test(e)&&(e="(?:"+e+")"),e||""}function u(e,t,n){return e=s(e),t=s(t),n?(e=t+e,e&&e[e.length-1]!="$"&&(e+="$")):(e+=t,e&&e[0]!="^"&&(e="^"+e)),new RegExp(e)}function a(e){e.scope||(e.scope=t||"_"),t=e.scope,n[t]||(n[t]=[],r[t]={});var s=r[t];if(e.name){var a=s[e.name];a&&i.unregister(a),s[e.name]=e}n[t].push(e),e.prefix&&(e.tabTrigger=e.prefix),!e.content&&e.body&&(e.content=Array.isArray(e.body)?e.body.join("\n"):e.body),e.tabTrigger&&!e.trigger&&(!e.guard&&/^\w/.test(e.tabTrigger)&&(e.guard="\\b"),e.trigger=o.escapeRegExp(e.tabTrigger));if(!e.trigger&&!e.guard&&!e.endTrigger&&!e.endGuard)return;e.startRe=u(e.trigger,e.guard,!0),e.triggerRe=new RegExp(e.trigger),e.endRe=u(e.endTrigger,e.endGuard,!0),e.endTriggerRe=new RegExp(e.endTrigger)}var n=this.snippetMap,r=this.snippetNameMap,i=this;e||(e=[]),Array.isArray(e)?e.forEach(a):Object.keys(e).forEach(function(t){a(e[t])}),this._signal("registerSnippets",{scope:t})},this.unregister=function(e,t){function i(e){var i=r[e.scope||t];if(i&&i[e.name]){delete i[e.name];var s=n[e.scope||t],o=s&&s.indexOf(e);o>=0&&s.splice(o,1)}}var n=this.snippetMap,r=this.snippetNameMap;e.content?i(e):Array.isArray(e)&&e.forEach(i)},this.parseSnippetFile=function(e){e=e.replace(/\r/g,"");var t=[],n={},r=/^#.*|^({[\s\S]*})\s*$|^(\S+) (.*)$|^((?:\n*\t.*)+)/gm,i;while(i=r.exec(e)){if(i[1])try{n=JSON.parse(i[1]),t.push(n)}catch(s){}if(i[4])n.content=i[4].replace(/^\t/gm,""),t.push(n),n={};else{var o=i[2],u=i[3];if(o=="regex"){var a=/\/((?:[^\/\\]|\\.)*)|$/g;n.guard=a.exec(u)[1],n.trigger=a.exec(u)[1],n.endTrigger=a.exec(u)[1],n.endGuard=a.exec(u)[1]}else o=="snippet"?(n.tabTrigger=u.match(/^\S*/)[0],n.name||(n.name=u)):o&&(n[o]=u)}}return t},this.getSnippetByName=function(e,t){var n=this.snippetNameMap,r;return this.getActiveScopes(t).some(function(t){var i=n[t];return i&&(r=i[e]),!!r},this),r}}).call(d.prototype);var v=function(e){if(e.tabstopManager)return e.tabstopManager;e.tabstopManager=this,this.$onChange=this.onChange.bind(this),this.$onChangeSelection=o.delayedCall(this.onChangeSelection.bind(this)).schedule,this.$onChangeSession=this.onChangeSession.bind(this),this.$onAfterExec=this.onAfterExec.bind(this),this.attach(e)};(function(){this.attach=function(e){this.index=0,this.ranges=[],this.tabstops=[],this.$openTabstops=null,this.selectedTabstop=null,this.editor=e,this.editor.on("change",this.$onChange),this.editor.on("changeSelection",this.$onChangeSelection),this.editor.on("changeSession",this.$onChangeSession),this.editor.commands.on("afterExec",this.$onAfterExec),this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler)},this.detach=function(){this.tabstops.forEach(this.removeTabstopMarkers,this),this.ranges=null,this.tabstops=null,this.selectedTabstop=null,this.editor.removeListener("change",this.$onChange),this.editor.removeListener("changeSelection",this.$onChangeSelection),this.editor.removeListener("changeSession",this.$onChangeSession),this.editor.commands.removeListener("afterExec",this.$onAfterExec),this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler),this.editor.tabstopManager=null,this.editor=null},this.onChange=function(e){var t=e.action[0]=="r",n=this.selectedTabstop||{},r=n.parents||{},i=(this.tabstops||[]).slice();for(var s=0;s<i.length;s++){var o=i[s],u=o==n||r[o.index];o.rangeList.$bias=u?0:1;if(e.action=="remove"&&o!==n){var a=o.parents&&o.parents[n.index],f=o.rangeList.pointIndex(e.start,a);f=f<0?-f-1:f+1;var l=o.rangeList.pointIndex(e.end,a);l=l<0?-l-1:l-1;var c=o.rangeList.ranges.slice(f,l);for(var h=0;h<c.length;h++)this.removeRange(c[h])}o.rangeList.$onChange(e)}var p=this.editor.session;!this.$inChange&&t&&p.getLength()==1&&!p.getValue()&&this.detach()},this.updateLinkedFields=function(){var e=this.selectedTabstop;if(!e||!e.hasLinkedRanges||!e.firstNonLinked)return;this.$inChange=!0;var n=this.editor.session,r=n.getTextRange(e.firstNonLinked);for(var i=0;i<e.length;i++){var s=e[i];if(!s.linked)continue;var o=s.original,u=t.snippetManager.tmStrFormat(r,o,this.editor);n.replace(s,u)}this.$inChange=!1},this.onAfterExec=function(e){e.command&&!e.command.readOnly&&this.updateLinkedFields()},this.onChangeSelection=function(){if(!this.editor)return;var e=this.editor.selection.lead,t=this.editor.selection.anchor,n=this.editor.selection.isEmpty();for(var r=0;r<this.ranges.length;r++){if(this.ranges[r].linked)continue;var i=this.ranges[r].contains(e.row,e.column),s=n||this.ranges[r].contains(t.row,t.column);if(i&&s)return}this.detach()},this.onChangeSession=function(){this.detach()},this.tabNext=function(e){var t=this.tabstops.length,n=this.index+(e||1);n=Math.min(Math.max(n,1),t),n==t&&(n=0),this.selectTabstop(n),n===0&&this.detach()},this.selectTabstop=function(e){this.$openTabstops=null;var t=this.tabstops[this.index];t&&this.addTabstopMarkers(t),this.index=e,t=this.tabstops[this.index];if(!t||!t.length)return;this.selectedTabstop=t;var n=t.firstNonLinked||t;t.choices&&(n.cursor=n.start);if(!this.editor.inVirtualSelectionMode){var r=this.editor.multiSelect;r.toSingleRange(n);for(var i=0;i<t.length;i++){if(t.hasLinkedRanges&&t[i].linked)continue;r.addRange(t[i].clone(),!0)}}else this.editor.selection.fromOrientedRange(n);this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler),this.selectedTabstop&&this.selectedTabstop.choices&&this.editor.execCommand("startAutocomplete",{matches:this.selectedTabstop.choices})},this.addTabstops=function(e,t,n){var r=this.useLink||!this.editor.getOption("enableMultiselect");this.$openTabstops||(this.$openTabstops=[]);if(!e[0]){var i=u.fromPoints(n,n);g(i.start,t),g(i.end,t),e[0]=[i],e[0].index=0}var s=this.index,o=[s+1,0],f=this.ranges;e.forEach(function(e,n){var i=this.$openTabstops[n]||e;for(var s=0;s<e.length;s++){var l=e[s],c=u.fromPoints(l.start,l.end||l.start);m(c.start,t),m(c.end,t),c.original=l,c.tabstop=i,f.push(c),i!=e?i.unshift(c):i[s]=c,l.fmtString||i.firstNonLinked&&r?(c.linked=!0,i.hasLinkedRanges=!0):i.firstNonLinked||(i.firstNonLinked=c)}i.firstNonLinked||(i.hasLinkedRanges=!1),i===e&&(o.push(i),this.$openTabstops[n]=i),this.addTabstopMarkers(i),i.rangeList=i.rangeList||new a,i.rangeList.$bias=0,i.rangeList.addList(i)},this),o.length>2&&(this.tabstops.length&&o.push(o.splice(2,1)[0]),this.tabstops.splice.apply(this.tabstops,o))},this.addTabstopMarkers=function(e){var t=this.editor.session;e.forEach(function(e){e.markerId||(e.markerId=t.addMarker(e,"ace_snippet-marker","text"))})},this.removeTabstopMarkers=function(e){var t=this.editor.session;e.forEach(function(e){t.removeMarker(e.markerId),e.markerId=null})},this.removeRange=function(e){var t=e.tabstop.indexOf(e);t!=-1&&e.tabstop.splice(t,1),t=this.ranges.indexOf(e),t!=-1&&this.ranges.splice(t,1),t=e.tabstop.rangeList.ranges.indexOf(e),t!=-1&&e.tabstop.splice(t,1),this.editor.session.removeMarker(e.markerId),e.tabstop.length||(t=this.tabstops.indexOf(e.tabstop),t!=-1&&this.tabstops.splice(t,1),this.tabstops.length||this.detach())},this.keyboardHandler=new f,this.keyboardHandler.bindKeys({Tab:function(e){if(t.snippetManager&&t.snippetManager.expandWithTab(e))return;e.tabstopManager.tabNext(1),e.renderer.scrollCursorIntoView()},"Shift-Tab":function(e){e.tabstopManager.tabNext(-1),e.renderer.scrollCursorIntoView()},Esc:function(e){e.tabstopManager.detach()}})}).call(v.prototype);var m=function(e,t){e.row==0&&(e.column+=t.column),e.row+=t.row},g=function(e,t){e.row==t.row&&(e.column-=t.column),e.row-=t.row};r.importCssString("\n.ace_snippet-marker {\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    background: rgba(194, 193, 208, 0.09);\n    border: 1px dotted rgba(211, 208, 235, 0.62);\n    position: absolute;\n}","snippets.css",!1),t.snippetManager=new d;var y=e("./editor").Editor;(function(){this.insertSnippet=function(e,n){return t.snippetManager.insertSnippet(this,e,n)},this.expandSnippet=function(e){return t.snippetManager.expandWithTab(this,e)}}).call(y.prototype)}),ace.define("ace/autocomplete/popup",["require","exports","module","ace/virtual_renderer","ace/editor","ace/range","ace/lib/event","ace/lib/lang","ace/lib/dom"],function(e,t,n){"use strict";var r=e("../virtual_renderer").VirtualRenderer,i=e("../editor").Editor,s=e("../range").Range,o=e("../lib/event"),u=e("../lib/lang"),a=e("../lib/dom"),f=function(e){var t=new r(e);t.$maxLines=4;var n=new i(t);return n.setHighlightActiveLine(!1),n.setShowPrintMargin(!1),n.renderer.setShowGutter(!1),n.renderer.setHighlightGutterLine(!1),n.$mouseHandler.$focusTimeout=0,n.$highlightTagPending=!0,n},l=function(e){var t=a.createElement("div"),n=new f(t);e&&e.appendChild(t),t.style.display="none",n.renderer.content.style.cursor="default",n.renderer.setStyle("ace_autocomplete"),n.setOption("displayIndentGuides",!1),n.setOption("dragDelay",150);var r=function(){};n.focus=r,n.$isFocused=!0,n.renderer.$cursorLayer.restartTimer=r,n.renderer.$cursorLayer.element.style.opacity=0,n.renderer.$maxLines=8,n.renderer.$keepTextAreaAtCursor=!1,n.setHighlightActiveLine(!1),n.session.highlight(""),n.session.$searchHighlight.clazz="ace_highlight-marker",n.on("mousedown",function(e){var t=e.getDocumentPosition();n.selection.moveToPosition(t),c.start.row=c.end.row=t.row,e.stop()});var i,l=new s(-1,0,-1,Infinity),c=new s(-1,0,-1,Infinity);c.id=n.session.addMarker(c,"ace_active-line","fullLine"),n.setSelectOnHover=function(e){e?l.id&&(n.session.removeMarker(l.id),l.id=null):l.id=n.session.addMarker(l,"ace_line-hover","fullLine")},n.setSelectOnHover(!1),n.on("mousemove",function(e){if(!i){i=e;return}if(i.x==e.x&&i.y==e.y)return;i=e,i.scrollTop=n.renderer.scrollTop;var t=i.getDocumentPosition().row;l.start.row!=t&&(l.id||n.setRow(t),p(t))}),n.renderer.on("beforeRender",function(){if(i&&l.start.row!=-1){i.$pos=null;var e=i.getDocumentPosition().row;l.id||n.setRow(e),p(e,!0)}}),n.renderer.on("afterRender",function(){var e=n.getRow(),t=n.renderer.$textLayer,r=t.element.childNodes[e-t.config.firstRow];r!==t.selectedNode&&t.selectedNode&&a.removeCssClass(t.selectedNode,"ace_selected"),t.selectedNode=r,r&&a.addCssClass(r,"ace_selected")});var h=function(){p(-1)},p=function(e,t){e!==l.start.row&&(l.start.row=l.end.row=e,t||n.session._emit("changeBackMarker"),n._emit("changeHoverMarker"))};n.getHoveredRow=function(){return l.start.row},o.addListener(n.container,"mouseout",h),n.on("hide",h),n.on("changeSelection",h),n.session.doc.getLength=function(){return n.data.length},n.session.doc.getLine=function(e){var t=n.data[e];return typeof t=="string"?t:t&&t.value||""};var d=n.session.bgTokenizer;return d.$tokenizeRow=function(e){function s(e,n){e&&r.push({type:(t.className||"")+(n||""),value:e})}var t=n.data[e],r=[];if(!t)return r;typeof t=="string"&&(t={value:t});var i=t.caption||t.value||t.name,o=i.toLowerCase(),u=(n.filterText||"").toLowerCase(),a=0,f=0;for(var l=0;l<=u.length;l++)if(l!=f&&(t.matchMask&1<<l||l==u.length)){var c=u.slice(f,l);f=l;var h=o.indexOf(c,a);if(h==-1)continue;s(i.slice(a,h),""),a=h+c.length,s(i.slice(h,a),"completion-highlight")}return s(i.slice(a,i.length),""),t.meta&&r.push({type:"completion-meta",value:t.meta}),t.message&&r.push({type:"completion-message",value:t.message}),r},d.$updateOnChange=r,d.start=r,n.session.$computeWidth=function(){return this.screenWidth=0},n.isOpen=!1,n.isTopdown=!1,n.autoSelect=!0,n.filterText="",n.data=[],n.setData=function(e,t){n.filterText=t||"",n.setValue(u.stringRepeat("\n",e.length),-1),n.data=e||[],n.setRow(0)},n.getData=function(e){return n.data[e]},n.getRow=function(){return c.start.row},n.setRow=function(e){e=Math.max(this.autoSelect?0:-1,Math.min(this.data.length,e)),c.start.row!=e&&(n.selection.clearSelection(),c.start.row=c.end.row=e||0,n.session._emit("changeBackMarker"),n.moveCursorTo(e||0,0),n.isOpen&&n._signal("select"))},n.on("changeSelection",function(){n.isOpen&&n.setRow(n.selection.lead.row),n.renderer.scrollCursorIntoView()}),n.hide=function(){this.container.style.display="none",this._signal("hide"),n.isOpen=!1},n.show=function(e,t,r){var s=this.container,o=window.innerHeight,u=window.innerWidth,a=this.renderer,f=a.$maxLines*t*1.4,l=e.top+this.$borderSize,c=l>o/2&&!r;c&&l+t+f>o?(a.$maxPixelHeight=l-2*this.$borderSize,s.style.top="",s.style.bottom=o-l+"px",n.isTopdown=!1):(l+=t,a.$maxPixelHeight=o-l-.2*t,s.style.top=l+"px",s.style.bottom="",n.isTopdown=!0),s.style.display="";var h=e.left;h+s.offsetWidth>u&&(h=u-s.offsetWidth),s.style.left=h+"px",this._signal("show"),i=null,n.isOpen=!0},n.goTo=function(e){var t=this.getRow(),n=this.session.getLength()-1;switch(e){case"up":t=t<=0?n:t-1;break;case"down":t=t>=n?-1:t+1;break;case"start":t=0;break;case"end":t=n}this.setRow(t)},n.getTextLeftOffset=function(){return this.$borderSize+this.renderer.$padding+this.$imageSize},n.$imageSize=0,n.$borderSize=1,n};a.importCssString("\n.ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {\n    background-color: #CAD6FA;\n    z-index: 1;\n}\n.ace_dark.ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {\n    background-color: #3a674e;\n}\n.ace_editor.ace_autocomplete .ace_line-hover {\n    border: 1px solid #abbffe;\n    margin-top: -1px;\n    background: rgba(233,233,253,0.4);\n    position: absolute;\n    z-index: 2;\n}\n.ace_dark.ace_editor.ace_autocomplete .ace_line-hover {\n    border: 1px solid rgba(109, 150, 13, 0.8);\n    background: rgba(58, 103, 78, 0.62);\n}\n.ace_completion-meta {\n    opacity: 0.5;\n    margin: 0.9em;\n}\n.ace_completion-message {\n    color: blue;\n}\n.ace_editor.ace_autocomplete .ace_completion-highlight{\n    color: #2d69c7;\n}\n.ace_dark.ace_editor.ace_autocomplete .ace_completion-highlight{\n    color: #93ca12;\n}\n.ace_editor.ace_autocomplete {\n    width: 300px;\n    z-index: 200000;\n    border: 1px lightgray solid;\n    position: fixed;\n    box-shadow: 2px 3px 5px rgba(0,0,0,.2);\n    line-height: 1.4;\n    background: #fefefe;\n    color: #111;\n}\n.ace_dark.ace_editor.ace_autocomplete {\n    border: 1px #484747 solid;\n    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.51);\n    line-height: 1.4;\n    background: #25282c;\n    color: #c1c1c1;\n}","autocompletion.css",!1),t.AcePopup=l,t.$singleLineEditor=f}),ace.define("ace/autocomplete/util",["require","exports","module"],function(e,t,n){"use strict";t.parForEach=function(e,t,n){var r=0,i=e.length;i===0&&n();for(var s=0;s<i;s++)t(e[s],function(e,t){r++,r===i&&n(e,t)})};var r=/[a-zA-Z_0-9\$\-\u00A2-\u2000\u2070-\uFFFF]/;t.retrievePrecedingIdentifier=function(e,t,n){n=n||r;var i=[];for(var s=t-1;s>=0;s--){if(!n.test(e[s]))break;i.push(e[s])}return i.reverse().join("")},t.retrieveFollowingIdentifier=function(e,t,n){n=n||r;var i=[];for(var s=t;s<e.length;s++){if(!n.test(e[s]))break;i.push(e[s])}return i},t.getCompletionPrefix=function(e){var t=e.getCursorPosition(),n=e.session.getLine(t.row),r;return e.completers.forEach(function(e){e.identifierRegexps&&e.identifierRegexps.forEach(function(e){!r&&e&&(r=this.retrievePrecedingIdentifier(n,t.column,e))}.bind(this))}.bind(this)),r||this.retrievePrecedingIdentifier(n,t.column)}}),ace.define("ace/autocomplete",["require","exports","module","ace/keyboard/hash_handler","ace/autocomplete/popup","ace/autocomplete/util","ace/lib/lang","ace/lib/dom","ace/snippets","ace/config"],function(e,t,n){"use strict";var r=e("./keyboard/hash_handler").HashHandler,i=e("./autocomplete/popup").AcePopup,s=e("./autocomplete/util"),o=e("./lib/lang"),u=e("./lib/dom"),a=e("./snippets").snippetManager,f=e("./config"),l=function(){this.autoInsert=!1,this.autoSelect=!0,this.exactMatch=!1,this.gatherCompletionsId=0,this.keyboardHandler=new r,this.keyboardHandler.bindKeys(this.commands),this.blurListener=this.blurListener.bind(this),this.changeListener=this.changeListener.bind(this),this.mousedownListener=this.mousedownListener.bind(this),this.mousewheelListener=this.mousewheelListener.bind(this),this.changeTimer=o.delayedCall(function(){this.updateCompletions(!0)}.bind(this)),this.tooltipTimer=o.delayedCall(this.updateDocTooltip.bind(this),50)};(function(){this.$init=function(){return this.popup=new i(document.body||document.documentElement),this.popup.on("click",function(e){this.insertMatch(),e.stop()}.bind(this)),this.popup.focus=this.editor.focus.bind(this.editor),this.popup.on("show",this.tooltipTimer.bind(null,null)),this.popup.on("select",this.tooltipTimer.bind(null,null)),this.popup.on("changeHoverMarker",this.tooltipTimer.bind(null,null)),this.popup},this.getPopup=function(){return this.popup||this.$init()},this.openPopup=function(e,t,n){this.popup||this.$init(),this.popup.autoSelect=this.autoSelect,this.popup.setData(this.completions.filtered,this.completions.filterText),e.keyBinding.addKeyboardHandler(this.keyboardHandler);var r=e.renderer;this.popup.setRow(this.autoSelect?0:-1);if(!n){this.popup.setTheme(e.getTheme()),this.popup.setFontSize(e.getFontSize());var i=r.layerConfig.lineHeight,s=r.$cursorLayer.getPixelPosition(this.base,!0);s.left-=this.popup.getTextLeftOffset();var o=e.container.getBoundingClientRect();s.top+=o.top-r.layerConfig.offset,s.left+=o.left-e.renderer.scrollLeft,s.left+=r.gutterWidth,this.popup.show(s,i)}else n&&!t&&this.detach();this.changeTimer.cancel()},this.detach=function(){this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler),this.editor.off("changeSelection",this.changeListener),this.editor.off("blur",this.blurListener),this.editor.off("mousedown",this.mousedownListener),this.editor.off("mousewheel",this.mousewheelListener),this.changeTimer.cancel(),this.hideDocTooltip(),this.gatherCompletionsId+=1,this.popup&&this.popup.isOpen&&this.popup.hide(),this.base&&this.base.detach(),this.activated=!1,this.completions=this.base=null},this.changeListener=function(e){var t=this.editor.selection.lead;(t.row!=this.base.row||t.column<this.base.column)&&this.detach(),this.activated?this.changeTimer.schedule():this.detach()},this.blurListener=function(e){var t=document.activeElement,n=this.editor.textInput.getElement(),r=e.relatedTarget&&this.tooltipNode&&this.tooltipNode.contains(e.relatedTarget),i=this.popup&&this.popup.container;t!=n&&t.parentNode!=i&&!r&&t!=this.tooltipNode&&e.relatedTarget!=n&&this.detach()},this.mousedownListener=function(e){this.detach()},this.mousewheelListener=function(e){this.detach()},this.goTo=function(e){this.popup.goTo(e)},this.insertMatch=function(e,t){e||(e=this.popup.getData(this.popup.getRow()));if(!e)return!1;var n=this.completions;this.editor.startOperation({command:{name:"insertMatch"}});if(e.completer&&e.completer.insertMatch)e.completer.insertMatch(this.editor,e);else{if(!n)return!1;if(n.filterText){var r=this.editor.selection.getAllRanges();for(var i=0,s;s=r[i];i++)s.start.column-=n.filterText.length,this.editor.session.remove(s)}e.snippet?a.insertSnippet(this.editor,e.snippet):this.editor.execCommand("insertstring",e.value||e)}this.completions==n&&this.detach(),this.editor.endOperation()},this.commands={Up:function(e){e.completer.goTo("up")},Down:function(e){e.completer.goTo("down")},"Ctrl-Up|Ctrl-Home":function(e){e.completer.goTo("start")},"Ctrl-Down|Ctrl-End":function(e){e.completer.goTo("end")},Esc:function(e){e.completer.detach()},Return:function(e){return e.completer.insertMatch()},"Shift-Return":function(e){e.completer.insertMatch(null,{deleteSuffix:!0})},Tab:function(e){var t=e.completer.insertMatch();if(!!t||!!e.tabstopManager)return t;e.completer.goTo("down")},PageUp:function(e){e.completer.popup.gotoPageUp()},PageDown:function(e){e.completer.popup.gotoPageDown()}},this.gatherCompletions=function(e,t){var n=e.getSession(),r=e.getCursorPosition(),i=s.getCompletionPrefix(e);this.base=n.doc.createAnchor(r.row,r.column-i.length),this.base.$insertRight=!0;var o=[],u=e.completers.length;return e.completers.forEach(function(a,f){a.getCompletions(e,n,r,i,function(n,r){!n&&r&&(o=o.concat(r)),t(null,{prefix:s.getCompletionPrefix(e),matches:o,finished:--u===0})})}),!0},this.showPopup=function(e,t){this.editor&&this.detach(),this.activated=!0,this.editor=e,e.completer!=this&&(e.completer&&e.completer.detach(),e.completer=this),e.on("changeSelection",this.changeListener),e.on("blur",this.blurListener),e.on("mousedown",this.mousedownListener),e.on("mousewheel",this.mousewheelListener),this.updateCompletions(!1,t)},this.updateCompletions=function(e,t){if(e&&this.base&&this.completions){var n=this.editor.getCursorPosition(),r=this.editor.session.getTextRange({start:this.base,end:n});if(r==this.completions.filterText)return;this.completions.setFilter(r);if(!this.completions.filtered.length)return this.detach();if(this.completions.filtered.length==1&&this.completions.filtered[0].value==r&&!this.completions.filtered[0].snippet)return this.detach();this.openPopup(this.editor,r,e);return}if(t&&t.matches){var n=this.editor.getSelectionRange().start;return this.base=this.editor.session.doc.createAnchor(n.row,n.column),this.base.$insertRight=!0,this.completions=new c(t.matches),this.openPopup(this.editor,"",e)}var i=this.gatherCompletionsId,s=function(e){if(!e.finished)return;return this.detach()}.bind(this),o=function(t){var n=t.prefix,r=t.matches;this.completions=new c(r),this.exactMatch&&(this.completions.exactMatch=!0),this.completions.setFilter(n);var i=this.completions.filtered;if(!i.length)return s(t);if(i.length==1&&i[0].value==n&&!i[0].snippet)return s(t);if(this.autoInsert&&i.length==1&&t.finished)return this.insertMatch(i[0]);this.openPopup(this.editor,n,e)}.bind(this),u=!0,a=null;this.gatherCompletions(this.editor,function(e,t){var n=t.prefix,r=t&&t.matches;if(!r||!r.length)return s(t);if(n.indexOf(t.prefix)!==0||i!=this.gatherCompletionsId)return;if(u){a=t;return}o(t)}.bind(this)),u=!1;if(a){var f=a;a=null,o(f)}},this.cancelContextMenu=function(){this.editor.$mouseHandler.cancelContextMenu()},this.updateDocTooltip=function(){var e=this.popup,t=e.data,n=t&&(t[e.getHoveredRow()]||t[e.getRow()]),r=null;if(!n||!this.editor||!this.popup.isOpen)return this.hideDocTooltip();this.editor.completers.some(function(e){return e.getDocTooltip&&(r=e.getDocTooltip(n)),r}),!r&&typeof n!="string"&&(r=n),typeof r=="string"&&(r={docText:r});if(!r||!r.docHTML&&!r.docText)return this.hideDocTooltip();this.showDocTooltip(r)},this.showDocTooltip=function(e){this.tooltipNode||(this.tooltipNode=u.createElement("div"),this.tooltipNode.className="ace_tooltip ace_doc-tooltip",this.tooltipNode.style.margin=0,this.tooltipNode.style.pointerEvents="auto",this.tooltipNode.tabIndex=-1,this.tooltipNode.onblur=this.blurListener.bind(this),this.tooltipNode.onclick=this.onTooltipClick.bind(this));var t=this.tooltipNode;e.docHTML?t.innerHTML=e.docHTML:e.docText&&(t.textContent=e.docText),t.parentNode||document.body.appendChild(t);var n=this.popup,r=n.container.getBoundingClientRect();t.style.top=n.container.style.top,t.style.bottom=n.container.style.bottom,t.style.display="block",window.innerWidth-r.right<320?r.left<320?n.isTopdown?(t.style.top=r.bottom+"px",t.style.left=r.left+"px",t.style.right="",t.style.bottom=""):(t.style.top=n.container.offsetTop-t.offsetHeight+"px",t.style.left=r.left+"px",t.style.right="",t.style.bottom=""):(t.style.right=window.innerWidth-r.left+"px",t.style.left=""):(t.style.left=r.right+1+"px",t.style.right="")},this.hideDocTooltip=function(){this.tooltipTimer.cancel();if(!this.tooltipNode)return;var e=this.tooltipNode;!this.editor.isFocused()&&document.activeElement==e&&this.editor.focus(),this.tooltipNode=null,e.parentNode&&e.parentNode.removeChild(e)},this.onTooltipClick=function(e){var t=e.target;while(t&&t!=this.tooltipNode){if(t.nodeName=="A"&&t.href){t.rel="noreferrer",t.target="_blank";break}t=t.parentNode}},this.destroy=function(){this.detach();if(this.popup){this.popup.destroy();var e=this.popup.container;e&&e.parentNode&&e.parentNode.removeChild(e)}this.editor&&this.editor.completer==this&&this.editor.completer==null,this.popup=null}}).call(l.prototype),l.for=function(e){return e.completer?e.completer:(f.get("sharedPopups")?(l.$shared||(l.$sharedInstance=new l),e.completer=l.$sharedInstance):(e.completer=new l,e.once("destroy",function(e,t){t.completer.destroy()})),e.completer)},l.startCommand={name:"startAutocomplete",exec:function(e,t){var n=l.for(e);n.autoInsert=!1,n.autoSelect=!0,n.showPopup(e,t),n.cancelContextMenu()},bindKey:"Ctrl-Space|Ctrl-Shift-Space|Alt-Space"};var c=function(e,t){this.all=e,this.filtered=e,this.filterText=t||"",this.exactMatch=!1};(function(){this.setFilter=function(e){if(e.length>this.filterText&&e.lastIndexOf(this.filterText,0)===0)var t=this.filtered;else var t=this.all;this.filterText=e,t=this.filterCompletions(t,this.filterText),t=t.sort(function(e,t){return t.exactMatch-e.exactMatch||t.$score-e.$score||(e.caption||e.value).localeCompare(t.caption||t.value)});var n=null;t=t.filter(function(e){var t=e.snippet||e.caption||e.value;return t===n?!1:(n=t,!0)}),this.filtered=t},this.filterCompletions=function(e,t){var n=[],r=t.toUpperCase(),i=t.toLowerCase();e:for(var s=0,o;o=e[s];s++){var u=o.caption||o.value||o.snippet;if(!u)continue;var a=-1,f=0,l=0,c,h;if(this.exactMatch){if(t!==u.substr(0,t.length))continue e}else{var p=u.toLowerCase().indexOf(i);if(p>-1)l=p;else for(var d=0;d<t.length;d++){var v=u.indexOf(i[d],a+1),m=u.indexOf(r[d],a+1);c=v>=0?m<0||v<m?v:m:m;if(c<0)continue e;h=c-a-1,h>0&&(a===-1&&(l+=10),l+=h,f|=1<<d),a=c}}o.matchMask=f,o.exactMatch=l?0:1,o.$score=(o.score||0)-l,n.push(o)}return n}}).call(c.prototype),t.Autocomplete=l,t.FilteredList=c}),ace.define("ace/autocomplete/text_completer",["require","exports","module","ace/range"],function(e,t,n){function s(e,t){var n=e.getTextRange(r.fromPoints({row:0,column:0},t));return n.split(i).length-1}function o(e,t){var n=s(e,t),r=e.getValue().split(i),o=Object.create(null),u=r[n];return r.forEach(function(e,t){if(!e||e===u)return;var i=Math.abs(n-t),s=r.length-i;o[e]?o[e]=Math.max(s,o[e]):o[e]=s}),o}var r=e("../range").Range,i=/[^a-zA-Z_0-9\$\-\u00C0-\u1FFF\u2C00-\uD7FF\w]+/;t.getCompletions=function(e,t,n,r,i){var s=o(t,n),u=Object.keys(s);i(null,u.map(function(e){return{caption:e,value:e,score:s[e],meta:"local"}}))}}),ace.define("ace/ext/language_tools",["require","exports","module","ace/snippets","ace/autocomplete","ace/config","ace/lib/lang","ace/autocomplete/util","ace/autocomplete/text_completer","ace/editor","ace/config"],function(e,t,n){"use strict";var r=e("../snippets").snippetManager,i=e("../autocomplete").Autocomplete,s=e("../config"),o=e("../lib/lang"),u=e("../autocomplete/util"),a=e("../autocomplete/text_completer"),f={getCompletions:function(e,t,n,r,i){if(t.$mode.completer)return t.$mode.completer.getCompletions(e,t,n,r,i);var s=e.session.getState(n.row),o=t.$mode.getCompletions(s,t,n,r);i(null,o)}},l=function(e){var t={};return e.replace(/\${(\d+)(:(.*?))?}/g,function(e,n,r,i){return t[n]=i||""}).replace(/\$(\d+?)/g,function(e,n){return t[n]})},c={getCompletions:function(e,t,n,i,s){var o=[],u=t.getTokenAt(n.row,n.column);u&&u.type.match(/(tag-name|tag-open|tag-whitespace|attribute-name|attribute-value)\.xml$/)?o.push("html-tag"):o=r.getActiveScopes(e);var a=r.snippetMap,f=[];o.forEach(function(e){var t=a[e]||[];for(var n=t.length;n--;){var r=t[n],i=r.name||r.tabTrigger;if(!i)continue;f.push({caption:i,snippet:r.content,meta:r.tabTrigger&&!r.name?r.tabTrigger+"\u21e5 ":"snippet",type:"snippet"})}},this),s(null,f)},getDocTooltip:function(e){e.type=="snippet"&&!e.docHTML&&(e.docHTML=["<b>",o.escapeHTML(e.caption),"</b>","<hr></hr>",o.escapeHTML(l(e.snippet))].join(""))}},h=[c,a,f];t.setCompleters=function(e){h.length=0,e&&h.push.apply(h,e)},t.addCompleter=function(e){h.push(e)},t.textCompleter=a,t.keyWordCompleter=f,t.snippetCompleter=c;var p={name:"expandSnippet",exec:function(e){return r.expandWithTab(e)},bindKey:"Tab"},d=function(e,t){v(t.session.$mode)},v=function(e){typeof e=="string"&&(e=s.$modes[e]);if(!e)return;r.files||(r.files={}),m(e.$id,e.snippetFileId),e.modes&&e.modes.forEach(v)},m=function(e,t){if(!t||!e||r.files[e])return;r.files[e]={},s.loadModule(t,function(t){if(!t)return;r.files[e]=t,!t.snippets&&t.snippetText&&(t.snippets=r.parseSnippetFile(t.snippetText)),r.register(t.snippets||[],t.scope),t.includeScopes&&(r.snippetMap[t.scope].includeScopes=t.includeScopes,t.includeScopes.forEach(function(e){v("ace/mode/"+e)}))})},g=function(e){var t=e.editor,n=t.completer&&t.completer.activated;if(e.command.name==="backspace")n&&!u.getCompletionPrefix(t)&&t.completer.detach();else if(e.command.name==="insertstring"){var r=u.getCompletionPrefix(t);if(r&&!n){var s=i.for(t);s.autoInsert=!1,s.showPopup(t)}}},y=e("../editor").Editor;e("../config").defineOptions(y.prototype,"editor",{enableBasicAutocompletion:{set:function(e){e?(this.completers||(this.completers=Array.isArray(e)?e:h),this.commands.addCommand(i.startCommand)):this.commands.removeCommand(i.startCommand)},value:!1},enableLiveAutocompletion:{set:function(e){e?(this.completers||(this.completers=Array.isArray(e)?e:h),this.commands.on("afterExec",g)):this.commands.removeListener("afterExec",g)},value:!1},enableSnippets:{set:function(e){e?(this.commands.addCommand(p),this.on("changeMode",d),d(null,this)):(this.commands.removeCommand(p),this.off("changeMode",d))},value:!1}})});                (function() {
                    ace.require(["ace/ext/language_tools"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            
ace.define("ace/theme/dreamweaver.css",["require","exports","module"],function(e,t,n){n.exports='.ace-dreamweaver .ace_gutter {\n  background: #e8e8e8;\n  color: #333;\n}\n\n.ace-dreamweaver .ace_print-margin {\n  width: 1px;\n  background: #e8e8e8;\n}\n\n.ace-dreamweaver {\n  background-color: #FFFFFF;\n  color: black;\n}\n\n.ace-dreamweaver .ace_fold {\n    background-color: #757AD8;\n}\n\n.ace-dreamweaver .ace_cursor {\n  color: black;\n}\n        \n.ace-dreamweaver .ace_invisible {\n  color: rgb(191, 191, 191);\n}\n\n.ace-dreamweaver .ace_storage,\n.ace-dreamweaver .ace_keyword {\n  color: blue;\n}\n\n.ace-dreamweaver .ace_constant.ace_buildin {\n  color: rgb(88, 72, 246);\n}\n\n.ace-dreamweaver .ace_constant.ace_language {\n  color: rgb(88, 92, 246);\n}\n\n.ace-dreamweaver .ace_constant.ace_library {\n  color: rgb(6, 150, 14);\n}\n\n.ace-dreamweaver .ace_invalid {\n  background-color: rgb(153, 0, 0);\n  color: white;\n}\n\n.ace-dreamweaver .ace_support.ace_function {\n  color: rgb(60, 76, 114);\n}\n\n.ace-dreamweaver .ace_support.ace_constant {\n  color: rgb(6, 150, 14);\n}\n\n.ace-dreamweaver .ace_support.ace_type,\n.ace-dreamweaver .ace_support.ace_class {\n  color: #009;\n}\n\n.ace-dreamweaver .ace_support.ace_php_tag {\n  color: #f00;\n}\n\n.ace-dreamweaver .ace_keyword.ace_operator {\n  color: rgb(104, 118, 135);\n}\n\n.ace-dreamweaver .ace_string {\n  color: #00F;\n}\n\n.ace-dreamweaver .ace_comment {\n  color: rgb(76, 136, 107);\n}\n\n.ace-dreamweaver .ace_comment.ace_doc {\n  color: rgb(0, 102, 255);\n}\n\n.ace-dreamweaver .ace_comment.ace_doc.ace_tag {\n  color: rgb(128, 159, 191);\n}\n\n.ace-dreamweaver .ace_constant.ace_numeric {\n  color: rgb(0, 0, 205);\n}\n\n.ace-dreamweaver .ace_variable {\n  color: #06F\n}\n\n.ace-dreamweaver .ace_xml-pe {\n  color: rgb(104, 104, 91);\n}\n\n.ace-dreamweaver .ace_entity.ace_name.ace_function {\n  color: #00F;\n}\n\n\n.ace-dreamweaver .ace_heading {\n  color: rgb(12, 7, 255);\n}\n\n.ace-dreamweaver .ace_list {\n  color:rgb(185, 6, 144);\n}\n\n.ace-dreamweaver .ace_marker-layer .ace_selection {\n  background: rgb(181, 213, 255);\n}\n\n.ace-dreamweaver .ace_marker-layer .ace_step {\n  background: rgb(252, 255, 0);\n}\n\n.ace-dreamweaver .ace_marker-layer .ace_stack {\n  background: rgb(164, 229, 101);\n}\n\n.ace-dreamweaver .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid rgb(192, 192, 192);\n}\n\n.ace-dreamweaver .ace_marker-layer .ace_active-line {\n  background: rgba(0, 0, 0, 0.07);\n}\n\n.ace-dreamweaver .ace_gutter-active-line {\n  background-color : #DCDCDC;\n}\n\n.ace-dreamweaver .ace_marker-layer .ace_selected-word {\n  background: rgb(250, 250, 255);\n  border: 1px solid rgb(200, 200, 250);\n}\n\n.ace-dreamweaver .ace_meta.ace_tag {\n  color:#009;\n}\n\n.ace-dreamweaver .ace_meta.ace_tag.ace_anchor {\n  color:#060;\n}\n\n.ace-dreamweaver .ace_meta.ace_tag.ace_form {\n  color:#F90;\n}\n\n.ace-dreamweaver .ace_meta.ace_tag.ace_image {\n  color:#909;\n}\n\n.ace-dreamweaver .ace_meta.ace_tag.ace_script {\n  color:#900;\n}\n\n.ace-dreamweaver .ace_meta.ace_tag.ace_style {\n  color:#909;\n}\n\n.ace-dreamweaver .ace_meta.ace_tag.ace_table {\n  color:#099;\n}\n\n.ace-dreamweaver .ace_string.ace_regex {\n  color: rgb(255, 0, 0)\n}\n\n.ace-dreamweaver .ace_indent-guide {\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;\n}\n\n.ace-dreamweaver .ace_indent-guide-active {\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAZSURBVHjaYvj///9/hivKyv8BAAAA//8DACLqBhbvk+/eAAAAAElFTkSuQmCC") right repeat-y;\n} \n'}),ace.define("ace/theme/dreamweaver",["require","exports","module","ace/theme/dreamweaver.css","ace/lib/dom"],function(e,t,n){t.isDark=!1,t.cssClass="ace-dreamweaver",t.cssText=e("./dreamweaver.css");var r=e("../lib/dom");r.importCssString(t.cssText,t.cssClass,!1)});                (function() {
                    ace.require(["ace/theme/dreamweaver"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            
ace.define("ace/theme/ambiance.css",["require","exports","module"],function(e,t,n){n.exports=".ace-ambiance .ace_gutter {\n  background-color: #3d3d3d;\n  background-image: linear-gradient(left, #3D3D3D, #333);\n  background-repeat: repeat-x;\n  border-right: 1px solid #4d4d4d;\n  text-shadow: 0px 1px 1px #4d4d4d;\n  color: #222;\n}\n\n.ace-ambiance .ace_gutter-layer {\n  background: repeat left top;\n}\n\n.ace-ambiance .ace_gutter-active-line {\n  background-color: #3F3F3F;\n}\n\n.ace-ambiance .ace_fold-widget {\n  text-align: center;\n}\n\n.ace-ambiance .ace_fold-widget:hover {\n  color: #777;\n}\n\n.ace-ambiance .ace_fold-widget.ace_start,\n.ace-ambiance .ace_fold-widget.ace_end,\n.ace-ambiance .ace_fold-widget.ace_closed{\n  background: none !important;\n  border: none;\n  box-shadow: none;\n}\n\n.ace-ambiance .ace_fold-widget.ace_start:after {\n  content: '\u25be'\n}\n\n.ace-ambiance .ace_fold-widget.ace_end:after {\n  content: '\u25b4'\n}\n\n.ace-ambiance .ace_fold-widget.ace_closed:after {\n  content: '\u2023'\n}\n\n.ace-ambiance .ace_print-margin {\n  border-left: 1px dotted #2D2D2D;\n  right: 0;\n  background: #262626;\n}\n\n.ace-ambiance .ace_scroller {\n  -webkit-box-shadow: inset 0 0 10px black;\n  -moz-box-shadow: inset 0 0 10px black;\n  -o-box-shadow: inset 0 0 10px black;\n  box-shadow: inset 0 0 10px black;\n}\n\n.ace-ambiance {\n  color: #E6E1DC;\n  background-color: #202020;\n}\n\n.ace-ambiance .ace_cursor {\n  border-left: 1px solid #7991E8;\n}\n\n.ace-ambiance .ace_overwrite-cursors .ace_cursor {\n  border: 1px solid #FFE300;\n  background: #766B13;\n}\n\n.ace-ambiance.normal-mode .ace_cursor-layer {\n  z-index: 0;\n}\n \n.ace-ambiance .ace_marker-layer .ace_selection {\n  background: rgba(221, 240, 255, 0.20);\n}\n\n.ace-ambiance .ace_marker-layer .ace_selected-word {\n  border-radius: 4px;\n  border: 8px solid #3f475d;\n  box-shadow: 0 0 4px black;\n}\n\n.ace-ambiance .ace_marker-layer .ace_step {\n  background: rgb(198, 219, 174);\n}\n\n.ace-ambiance .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid rgba(255, 255, 255, 0.25);\n}\n\n.ace-ambiance .ace_marker-layer .ace_active-line {\n  background: rgba(255, 255, 255, 0.031);\n}\n\n.ace-ambiance .ace_invisible {\n  color: #333;\n}\n\n.ace-ambiance .ace_paren {\n  color: #24C2C7;\n}\n\n.ace-ambiance .ace_keyword {\n  color: #cda869;\n}\n\n.ace-ambiance .ace_keyword.ace_operator {\n  color: #fa8d6a;\n}\n\n.ace-ambiance .ace_punctuation.ace_operator {\n  color: #fa8d6a;\n}\n\n.ace-ambiance .ace_identifier {\n}\n\n.ace-ambiance .ace-statement {\n  color: #cda869;\n}\n\n.ace-ambiance .ace_constant {\n  color: #CF7EA9;\n}\n\n.ace-ambiance .ace_constant.ace_language {\n  color: #CF7EA9;\n}\n\n.ace-ambiance .ace_constant.ace_library {\n  \n}\n\n.ace-ambiance .ace_constant.ace_numeric {\n  color: #78CF8A;\n}\n\n.ace-ambiance .ace_invalid {\n  text-decoration: underline;\n}\n\n.ace-ambiance .ace_invalid.ace_illegal {\n  color:#F8F8F8;\n  background-color: rgba(86, 45, 86, 0.75);\n}\n\n.ace-ambiance .ace_invalid,\n.ace-ambiance .ace_deprecated {\n  text-decoration: underline;\n  font-style: italic;\n  color: #D2A8A1;\n}\n\n.ace-ambiance .ace_support {\n  color: #9B859D;\n}\n\n.ace-ambiance .ace_support.ace_function {\n  color: #DAD085;\n}\n\n.ace-ambiance .ace_function.ace_buildin {\n  color: #9b859d;\n}\n\n.ace-ambiance .ace_string {\n  color: #8f9d6a;\n}\n\n.ace-ambiance .ace_string.ace_regexp {\n  color: #DAD085;\n}\n\n.ace-ambiance .ace_comment {\n  font-style: italic;\n  color: #555;\n}\n\n.ace-ambiance .ace_comment.ace_doc {\n}\n\n.ace-ambiance .ace_comment.ace_doc.ace_tag {\n  color: #666;\n  font-style: normal;\n}\n\n.ace-ambiance .ace_definition,\n.ace-ambiance .ace_type {\n  color: #aac6e3;\n}\n\n.ace-ambiance .ace_variable {\n  color: #9999cc;\n}\n\n.ace-ambiance .ace_variable.ace_language {\n  color: #9b859d;\n}\n\n.ace-ambiance .ace_xml-pe {\n  color: #494949;\n}\n\n.ace-ambiance .ace_gutter-layer,\n.ace-ambiance .ace_text-layer {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAQAAAAHUWYVAABFFUlEQVQYGbzBCeDVU/74/6fj9HIcx/FRHx9JCFmzMyGRURhLZIkUsoeRfUjS2FNDtr6WkMhO9sm+S8maJfu+Jcsg+/o/c+Z4z/t97/vezy3z+z8ekGlnYICG/o7gdk+wmSHZ1z4pJItqapjoKXWahm8NmV6eOTbWUOp6/6a/XIg6GQqmenJ2lDHyvCFZ2cBDbmtHA043VFhHwXxClWmeYAdLhV00Bd85go8VmaFCkbVkzlQENzfBDZ5gtN7HwF0KDrTwJ0dypSOzpaKCMwQHKTIreYIxlmhXTzTWkVm+LTynZhiSBT3RZQ7aGfjGEd3qyXQ1FDymqbKxpspERQN2MiRjNZlFFQXfCNFm9nM1zpAsoYjmtRTc5ajwuaXc5xrWskT97RaKzAGe5ARHhVUsDbjKklziiX5WROcJwSNCNI+9w1Jwv4Zb2r7lCMZ4oq5C0EdTx+2GzNuKpJ+iFf38JEWkHJn9DNF7mmBDITrWEg0VWL3pHU20tSZnuqWu+R3BtYa8XxV1HO7GyD32UkOpL/yDloINFTmvtId+nmAjxRw40VMwVKiwrKLE4bK5UOVntYwhOcSSXKrJHKPJedocpGjVz/ZMIbnYUPB10/eKCrs5apqpgVmWzBYWpmtKHecJPjaUuEgRDDaU0oZghCJ6zNMQ5ZhDYx05r5v2muQdM0EILtXUsaKiQX9WMEUotagQzFbUNN6NUPC2nm5pxEWGCjMc3GdJHjSU2kORLK/JGSrkfGEIjncU/CYUnOipoYemwj8tST9NsJmB7TUVXtbUtXATJVZXBMvYeTXJfobgJUPmGMP/yFaWonaa6BcFO3nqcIqCozSZoZoSr1g4zJOzuyGnxTEX3lUEJ7WcZgme8ddaWvWJo2AJR9DZU3CUIbhCSG6ybSwN6qtJVnCU2svDTP2ZInOw2cBTrqtQahtNZn9NcJ4l2NaSmSkkP1noZWnVwkLmdUPOwLZEwy2Z3S3R+4rIG9hcbpPXHFVWcQdZkn2FOta3cKWQnNRC5g1LsJah4GCzSVsKnCOY5OAFRTBekyyryeyilhFKva75r4Mc0aWanGEaThcy31s439KKxTzJYY5WTHPU1FtIHjQU3Oip4xlNzj/lBw23dYZVliQa7WAXf4shetcQfatI+jWRDBPmyNeW6A1P5kdDgyYJlba0BIM8BZu1JfrFwItyjcAMR3K0BWOIrtMEXyhyrlVEx3ui5dUBjmB/Q3CXW85R4mBD0s7B+4q5tKUjOlb9qqmhi5AZ6GFIC5HXtOobdYGlVdMVbNJ8toNTFcHxnoL+muBagcctjWnbNMuR00uI7nQESwg5q2qqrKWIfrNUmeQocY6HuyxJV02wj36w00yhpmUFenv4p6fUkZYqLyuinx2RGOjhCXYyJF84oiU00YMOOhhquNdfbOB7gU88pY4xJO8LVdp6/q2voeB4R04vIdhSE40xZObx1HGGJ/ja0LBthFInKaLPPFzuCaYaoj8JjPME8yoyxo6zlBqkiUZYgq00OYMswbWO5NGmq+xhipxHLRW29ARjNKXO0wRnear8XSg4XFPLKEPUS1GqvyLwiuBUoa7zpZ0l5xxFwWmWZC1H5h5FwU8eQ7K+g8UcVY6TMQreVQT/8uQ8Z+ALIXnSEa2pYZQneE9RZbSBNYXfWYJzW/h/4j4Dp1tYVcFIC5019Vyi4ThPqSFCzjGWaHQTBU8q6vrVwgxP9Lkm840imWKpcLCjYTtrKuwvsKSnrvHCXGkSMk9p6lhckfRpIeis+N2PiszT+mFLspyGleUhDwcLrZqmyeylxwjBcKHEapqkmyangyLZRVOijwOtCY5SsG5zL0OwlCJ4y5KznF3EUNDDrinwiyLZRzOXtlBbK5ITHFGLp8Q0R6ab6mS7enI2cFrxOyHvOCFaT1HThS1krjCwqWeurCkk+willhCC+RSZnRXBiZaC5RXRIZYKp2lyfrHwiKPKR0JDzrdU2EFgpidawlFDR6FgXUMNa+g1FY3bUQh2cLCwosRdnuQTS/S+JVrGLeWIvtQUvONJxlqSQYYKpwoN2kaocLjdVsis4Mk80ESF2YpSkzwldjHkjFCUutI/r+EHDU8oCs6yzL3PhWiEooZdFMkymlas4AcI3KmoMMNSQ3tHzjGWCrcJJdYyZC7QFGwjRL9p+MrRkAGWzIaWCn9W0F3TsK01c2ZvQw0byvxuQU0r1lM0qJO7wW0kRIMdDTtXEdzi4VIh+EoIHm0mWtAtpCixlabgn83fKTI7anJe9ST7WIK1DMGpQmYeA58ImV6ezOGOzK2Kgq01pd60cKWiUi9Lievb/0vIDPHQ05Kzt4ddPckQBQtoaurjyHnek/nKzpQLrVgKPjIkh2v4uyezpv+Xoo7fPFXaGFp1vaLKxQ4uUpQQS5VuQs7BCq4xRJv7fwpVvvFEB3j+620haOuocqMhWd6TTPAEx+mdFNGHdranFe95WrWmIvlY4F1Dle2ECgc6cto7SryuqGGGha0tFQ5V53migUKmg6XKAo4qS3mik+0OZpAhOLeZKicacgaYcyx5hypYQE02ZA4xi/pNhOQxR4klNKyqacj+mpxnLTnnGSo85++3ZCZq6lrZkXlGEX3o+C9FieccJbZWVFjC0Yo1FZnJhoYMFoI1hEZ9r6hwg75HwzBNhbZCdJEfJwTPGzJvaKImw1yYX1HDAmpXR+ZJQ/SmgqMNVQb5vgamGwLtt7VwvP7Qk1xpiM5x5Cyv93E06MZmgs0Nya2azIKOYKCGBQQW97RmhKNKF02JZqHEJ4o58qp7X5EcZmc56trXEqzjCBZ1MFGR87Ql2tSTs6CGxS05PTzRQorkbw7aKoKXFDXsYW42VJih/q+FP2BdTzDTwVqOYB13liM50vG7wy28qagyuIXMeQI/Oqq8bcn5wJI50xH00CRntyfpL1T4hydYpoXgNiFzoIUTDZnLNRzh4TBHwbYGDvZkxmlyJloyr6tRihpeUG94GnKtIznREF0tzJG/OOr73JBcrSh1k6WuTprgLU+mnSGnv6Zge0NNz+kTDdH8nuAuTdJDCNb21LCiIuqlYbqGzT3RAoZofQfjFazkqeNWdYaGvYTM001EW2oKPvVk1ldUGSgUtHFwjKM1h9jnFcmy5lChoLNaQMGGDsYbKixlaMBmmsx1QjCfflwTfO/gckW0ruZ3jugKR3R5W9hGUWqCgxuFgsuaCHorotGKzGaeZB9DMsaTnKCpMtwTvOzhYk0rdrArKCqcaWmVk1+F372ur1YkKxgatI8Qfe1gIX9wE9FgS8ESmuABIXnRUbCapcKe+nO7slClSZFzpV/LkLncEb1qiO42fS3R855Su2mCLh62t1SYZZYVmKwIHjREF2uihTzB20JOkz7dkxzYQnK0UOU494wh+VWRc6Un2kpTaVgLDFEkJ/uhzRcI0YKGgpGWOlocBU/a4fKoJ/pEaNV6jip3+Es9VXY078rGnmAdf7t9ylPXS34RBSuYPs1UecZTU78WanhBCHpZ5sAoTz0LGZKjPf9TRypqWEiTvOFglL1fCEY3wY/++rbk7C8bWebA6p6om6PgOL2kp44TFJlVNBXae2rqqdZztOJpT87GQsE9jqCPIe9VReZuQ/CIgacsyZdCpIScSYqcZk8r+nsyCzhyfhOqHGOIvrLknC8wTpFcaYiGC/RU1NRbUeUpocQOnkRpGOrIOcNRx+1uA0UrzhSSt+VyS3SJpnFWkzNDqOFGIWcfR86DnmARTQ1HKIL33ExPiemeOhYSSjzlSUZZuE4TveoJLnBUOFof6KiysCbnAEcZgcUNTDOwkqWu3RWtmGpZwlHhJENdZ3miGz0lJlsKnjbwqSHQjpxnFDlTLLwqJPMZMjd7KrzkSG7VsxXBZE+F8YZkb01Oe00yyRK9psh5SYh29ySPKBo2ylNht7ZkZnsKenjKNJu9PNEyZpaCHv4Kt6RQsLvAVp7M9kIimmCUwGeWqLMmGuIotYMmWNpSahkhZw9FqZsVnKJhsjAHvtHMsTM9fCI06Dx/u3vfUXCqfsKRc4oFY2jMsoo/7DJDwZ1CsIKnJu+J9ldkpmiCxQx1rWjI+T9FwcWWzOuaYH0Hj7klNRVWEQpmaqosakiGNTFHdjS/qnUdmf0NJW5xsL0HhimCCZZSRzmSPTXJQ4aaztAwtZnoabebJ+htCaZ7Cm535ByoqXKbX1WRc4Eh2MkRXWzImVc96Cj4VdOKVxR84VdQsIUM8Psoou2byVHyZFuq7O8otbSQ2UAoeEWTudATLGSpZzVLlXVkPU2Jc+27lsw2jmg5T5VhbeE3BT083K9WsTTkFU/Osi0rC5lRlpwRHUiesNS0sOvmqGML1aRbPAxTJD9ZKtxuob+hhl8cwYGWpJ8nub7t5p6coYbMovZ1BTdaKn1jYD6h4GFDNFyT/Kqe1XCXphXHOKLZmuRSRdBPEfVUXQzJm5YGPGGJdvAEr7hHNdGZnuBvrpciGmopOLf5N0uVMy0FfYToJk90uUCbJupaVpO53UJXR2bVpoU00V2KOo4zMFrBd0Jtz2pa0clT5Q5L8IpQ177mWQejPMEJhuQjS10ref6HHjdEhy1P1EYR7GtO0uSsKJQYLiTnG1rVScj5lyazpqWGl5uBbRWl7m6ixGOOnEsMJR7z8J0n6KMnCdxhiNYQCoZ6CmYLnO8omC3MkW3bktlPmEt/VQQHejL3+dOE5FlPdK/Mq8hZxxJtLyRrepLThYKbLZxkSb5W52vYxNOaOxUF0yxMUPwBTYqCzy01XayYK0sJyWBLqX0MwU5CzoymRzV0EjjeUeLgDpTo6ij42ZAzvD01dHUUTPLU96MdLbBME8nFBn7zJCMtJcZokn8YoqU0FS5WFKyniHobguMcmW8N0XkWZjkyN3hqOMtS08r+/xTBwpZSZ3qiVRX8SzMHHjfUNFjgHEPmY9PL3ykEzxkSre/1ZD6z/NuznuB0RcE1TWTm9zRgfUWVJiG6yrzgmWPXC8EAR4Wxhlad0ZbgQyEz3pG5RVEwwDJH2mgKpjcTiCOzn1lfUWANFbZ2BA8balnEweJC9J0iuaeZoI+ippFCztEKVvckR2iice1JvhVytrQwUAZpgsubCPaU7xUe9vWnaOpaSBEspalykhC9bUlOMpT42ZHca6hyrqKmw/wMR8H5ZmdFoBVJb03O4UL0tSNnvIeRmkrLWqrs78gcrEn2tpcboh0UPOW3UUR9PMk4T4nnNKWmCjlrefhCwxRNztfmIQVdDElvS4m1/WuOujoZCs5XVOjtKPGokJzsYCtFYoWonSPT21DheU/wWhM19FcElwqNGOsp9Q8N/cwXaiND1MmeL1Q5XROtYYgGeFq1aTMsoMmcrKjQrOFQTQ1fmBYhmW6o8Jkjc7iDJRTBIo5kgJD5yMEYA3srCg7VFKwiVJkmRCc5ohGOKhsYMn/XBLdo5taZjlb9YAlGWRimqbCsoY7HFAXLa5I1HPRxMMsQDHFkWtRNniqT9UEeNjcE7RUlrCJ4R2CSJuqlKHWvJXjAUNcITYkenuBRB84TbeepcqTj3zZyFJzgYQdHnqfgI0ddUwS6GqWpsKWhjq9cV0vBAEMN2znq+EBfIWT+pClYw5xsTlJU6GeIBsjGmmANTzJZiIYpgrM0Oa8ZMjd7NP87jxhqGOhJlnQtjuQpB+8aEE00wZFznSJPyHxgH3HkPOsJFvYk8zqCHzTs1BYOa4J3PFU+UVRZxlHDM4YavlNUuMoRveiZA2d7grMNc2g+RbSCEKzmgYsUmWmazFJyoiOZ4KnyhKOGRzWJa0+moyV4TVHDzn51Awtqaphfk/lRQ08FX1iiqxTB/kLwd0VynKfEvI6cd4XMV5bMhZ7gZUWVzYQ6Nm2BYzxJbw3bGthEUUMfgbGeorae6DxHtJoZ6alhZ0+ytiVoK1R4z5PTrOECT/SugseEOlb1MMNR4VRNcJy+V1Hg9ONClSZFZjdHlc6W6FBLdJja2MC5hhpu0DBYEY1TFGwiFAxRRCsYkiM9JRb0JNMVkW6CZYT/2EiTGWmo8k+h4FhDNE7BvppoTSFnmCV5xZKzvcCdDo7VVPnIU+I+Rc68juApC90MwcFCsJ5hDqxgScYKreruyQwTqrzoqDCmhWi4IbhB0Yrt3RGa6GfDv52rKXWhh28dyZaWUvcZeMTBaZoSGyiCtRU5J8iviioHaErs7Jkj61syVzTTgOcUOQ8buFBTYWdL5g3T4qlpe0+wvD63heAXRfCCIed9RbCsp2CiI7raUOYOTU13N8PNHvpaGvayo4a3LLT1lDrVEPT2zLUlheB1R+ZTRfKWJ+dcocLJfi11vyJ51lLqJ0WD7tRwryezjiV5W28uJO9qykzX8JDe2lHl/9oyBwa2UMfOngpXCixvKdXTk3wrsKmiVYdZIqsoWEERjbcUNDuiaQomGoIbFdEHmsyWnuR+IeriKDVLnlawlyNHKwKlSU631PKep8J4Q+ayjkSLKYLhalNHlYvttb6fHm0p6OApsZ4l2VfdqZkjuysy6ysKLlckf1KUutCTs39bmCgEyyoasIWlVaMF7mgmWtBT8Kol5xpH9IGllo8cJdopcvZ2sImlDmMIbtDk3KIpeNiS08lQw11NFPTwVFlPP6pJ2gvRfI7gQUfmNAtf6Gs0wQxDsKGlVBdF8rCa3jzdwMaGHOsItrZk7hAyOzpK9VS06j5F49b0VNGOOfKs3lDToMsMBe9ZWtHFEgxTJLs7qrygKZjUnmCYoeAqeU6jqWuLJup4WghOdvCYJnrSkSzoyRkm5M2StQwVltPkfCAk58tET/CSg+8MUecmotMEnhBKfWBIZsg2ihruMJQaoIm+tkTLKEqspMh00w95gvFCQRtDwTT1gVDDSEVdlwqZfxoQRbK0g+tbiBZxzKlpnpypejdDwTaeOvorMk/IJE10h9CqRe28hhLbe0pMsdSwv4ZbhKivo2BjDWfL8UKJgeavwlwb5KlwhyE4u4XkGE2ytZCznKLCDZZq42VzT8HLCrpruFbIfOIINmh/qCdZ1ZBc65kLHR1Bkyf5zn6pN3SvGKIlFNGplhrO9QSXanLOMQTLCa0YJCRrCZm/CZmrLTm7WzCK4GJDiWUdFeYx1LCFg3NMd0XmCuF3Y5rITLDUsYS9zoHVzwnJoYpSTQoObyEzr4cFBNqYTopoaU/wkyLZ2lPhX/5Y95ulxGTV7KjhWrOZgl8MyUUafjYraNjNU1N3IWcjT5WzWqjwtoarHSUObGYO3GCJZpsBlnJGPd6ZYLyl1GdCA2625IwwJDP8GUKymbzuyPlZlvTUsaUh5zFDhRWFzPKKZLAlWdcQbObgF9tOqOsmB1dqcqYJmWstFbZRRI9poolmqiLnU0POvxScpah2iSL5UJNzgScY5+AuIbpO0YD3NCW+dLMszFSdFCWGqG6eVq2uYVNDdICGD6W7EPRWZEY5gpsE9rUkS3mijzzJnm6UpUFXG1hCUeVoS5WfNcFpblELL2qqrCvMvRfd45oalvKU2tiQ6ePJOVMRXase9iTtLJztPxJKLWpo2CRDcJwn2sWSLKIO1WQWNTCvpVUvOZhgSC40JD0dOctaSqzkCRbXsKlb11Oip6PCJ0IwSJM31j3akRxlP7Rwn6aGaUL0qiLnJkvB3xWZ2+Q1TfCwpQH3G0o92UzmX4o/oJNQMMSQc547wVHhdk+VCw01DFYEnTxzZKAm74QmeNNR1w6WzEhNK15VJzuCdxQ53dRUDws5KvwgBMOEgpcVNe0hZI6RXT1Jd0cyj5nsaEAHgVmGaJIlWdsc5Ui2ElrRR6jrRAttNMEAIWrTDFubkZaok7/AkzfIwfuWVq0jHzuCK4QabtLUMVPB3kJ0oyHTSVFlqMALilJf2Rf8k5aaHtMfayocLBS8L89oKoxpJvnAkDPa0qp5DAUTHKWmCcnthlou8iCKaFFLHWcINd1nyIwXqrSxMNmSs6KmoL2QrKuWtlQ5V0120xQ5vRyZS1rgFkWwhiOwiuQbR0OOVhQM9iS3tiXp4RawRPMp5tDletOOBL95MpM01dZTBM9pkn5qF010rIeHFcFZhmSGpYpTsI6nwhqe5C9ynhlpp5ophuRb6WcJFldkVnVEwwxVfrVkvnWUuNLCg5bgboFHPDlDPDmnK7hUrWiIbjadDclujlZcaokOFup4Ri1kacV6jmrrK1hN9bGwpKEBQ4Q6DvIUXOmo6U5LqQM6EPyiKNjVkPnJkDPNEaxhiFay5ExW1NXVUGqcpYYdPcGiCq7z/TSlbhL4pplWXKd7NZO5QQFrefhRQW/NHOsqcIglc4UhWklR8K0QzbAw08CBDnpbgqXdeD/QUsM4RZXDFBW6WJKe/mFPdH0LtBgiq57wFLzlyQzz82qYx5D5WJP5yVJDW01BfyHnS6HKO/reZqId1WGa4Hkh2kWodJ8i6KoIPlAj2hPt76CzXsVR6koPRzWTfKqIentatYpQw2me4AA3y1Kind3SwoOKZDcFXTwl9tWU6mfgRk9d71sKtlNwrjnYw5tC5n5LdKiGry3JKNlHEd3oaMCFHrazBPMp/uNJ+V7IudcSbeOIdjUEdwl0VHCOZo5t6YluEuaC9mQeMgSfOyKnYGFHcIeQ84yQWbuJYJpZw5CzglDH7gKnWqqM9ZTaXcN0TeYhR84eQtJT76JJ1lREe7WnnvsMmRc9FQ7SBBM9mV3lCUdmHk/S2RAMt0QjFNFqQpWjDPQ01DXWUdDBkXziKPjGEP3VP+zIWU2t7im41FOloyWzn/L6dkUy3VLDaZ6appgDLHPjJEsyvJngWEPUyVBiAaHCTEXwrLvSEbV1e1gKJniicWorC1MUrVjB3uDhJE/wgSOzk1DXpk0k73qCM8xw2UvD5kJmDUfOomqMpWCkJRlvKXGmoeBm18USjVIk04SClxTB6YrgLAPLWYK9HLUt5cmc0vYES8GnTeRc6skZbQkWdxRsIcyBRzx1DbTk9FbU0caTPOgJHhJKnOGIVhQqvKmo0llRw9sabrZkDtdg3PqaKi9oatjY8B+G371paMg6+mZFNNtQ04mWBq3rYLOmtWWQp8KJnpy9DdFensyjdqZ+yY40VJlH8wcdLzC8PZnvHMFUTZUrDTkLyQaGus5X5LzpYAf3i+e/ZlhqGqWhh6Ou6xTR9Z6oi5AZZtp7Mj2EEm8oSpxiYZCHU/1fbGdNNNRRoZMhmilEb2gqHOEJDtXkHK/JnG6IrvbPCwV3NhONVdS1thBMs1T4QOBcTWa2IzhMk2nW5Kyn9tXUtpv9RsG2msxk+ZsQzRQacJncpgke0+T8y5Fzj8BiGo7XlJjaTIlpQs7KFjpqGnKuoyEPeIKnFMkZHvopgh81ySxNFWvJWcKRs70j2FOT012IllEEO1n4pD1513Yg2ssQPOThOkvyrqHUdEXOSEsihmBbTbKX1kLBPWqWkLOqJbjB3GBIZmoa8qWl4CG/iZ7oiA72ZL7TJNeZUY7kFQftDcHHluBzRbCegzMtrRjVQpX2lgoPKKLJAkcbMl01XK2p7yhL8pCBbQ3BN2avJgKvttcrWDK3CiUOVxQ8ZP+pqXKyIxnmBymCg5vJjNfkPK4+c8cIfK8ocVt7kmfd/I5SR1hKvCzUtb+lhgc00ZaO6CyhIQP1Uv4yIZjload72PXX0OIJvnFU+0Zf6MhsJwTfW0r0UwQfW4LNLZl5HK261JCZ4qnBaAreVAS3WrjV0LBnNDUNNDToCEeFfwgcb4gOEqLRhirWkexrCEYKVV711DLYEE1XBEsp5tpTGjorkomKYF9FDXv7fR3BGwbettSxnyL53MBPjsxDZjMh+VUW9NRxq1DhVk+FSxQcaGjV9Pawv6eGByw5qzoy7xk4RsOShqjJwWKe/1pEEfzkobeD/dQJmpqedcyBTy2sr4nGNRH0c0SPWTLrqAc0OQcb/gemKgqucQT7ySWKCn2EUotoCvpZct7RO2sy/QW0IWcXd7pQRQyZVwT2USRO87uhjioTLKV2brpMUcMQRbKH/N2T+UlTpaMls6cmc6CCNy3JdYYSUzzJQ4oSD3oKLncULOiJvjBEC2oqnCJkJluCYy2ZQ5so9YYlZ1VLlQU1mXEW1jZERwj/MUSRc24TdexlqLKfQBtDTScJUV8FszXBEY5ktpD5Ur9hYB4Nb1iikw3JoYpkKX+RodRKFt53MMuRnKSpY31PwYaGaILh3wxJGz9TkTPEETxoCWZrgvOlmyMzxFEwVJE5xZKzvyJ4WxEc16Gd4Xe3Weq4XH2jKRikqOkGQ87hQnC7wBmGYLAnesX3M+S87eFATauuN+Qcrh7xIxXJbUIdMw3JGE3ylCWzrieaqCn4zhGM19TQ3z1oH1AX+pWEqIc7wNGAkULBo/ZxRaV9NNyh4Br3rCHZzbzmSfawBL0dNRwpW1kK9mxPXR9povcdrGSZK9c2k0xwFGzjuniCtRSZCZ6ccZ7gaktmgAOtKbG/JnOkJrjcQTdFMsxRQ2cLY3WTIrlCw1eWKn8R6pvt4GFDso3QoL4a3nLk3G6JrtME3dSenpx7PNFTmga0EaJTLQ061sEeQoWXhSo9LTXsaSjoJQRXeZLtDclbCrYzfzHHeaKjHCVOUkQHO3JeEepr56mhiyaYYKjjNU+Fed1wS5VlhWSqI/hYUdDOkaxiKehoyOnrCV5yBHtbWFqTHCCwtpDcYolesVR5yUzTZBb3RNMd0d6WP+SvhuBmRcGxnuQzT95IC285cr41cLGQ6aJJhmi4TMGempxeimBRQw1tFKV+8jd6KuzoSTqqDxzRtpZkurvKEHxlqXKRIjjfUNNXQsNOsRScoWFLT+YeRZVD3GRN0MdQcKqQjHDMrdGGVu3iYJpQx3WGUvfbmxwFfR20WBq0oYY7LMFhhgYtr8jpaEnaOzjawWWaTP8mMr0t/EPDPoqcnxTBI5o58L7uoWnMrpoqPwgVrlAUWE+V+TQl9rawoyP6QGAlQw2TPRX+YSkxyBC8Z6jhHkXBgQL7WII3DVFnRfCrBfxewv9D6xsyjys4VkhWb9pUU627JllV0YDNHMku/ldNMMXDEo4aFnAkk4U6frNEU4XgZUPmEKHUl44KrzmYamjAbh0JFvGnaTLPu1s9jPCwjFpYiN7z1DTOk/nc07CfDFzmCf7i+bfNHXhDtLeBXzTBT5rkMvWOIxpl4EMh2LGJBu2syDnAEx2naEhHDWMMzPZEhygyS1mS5RTJr5ZkoKbEUoYqr2kqdDUE8ztK7OaIntJkFrIECwv8LJTaVx5XJE86go8dFeZ3FN3rjabCAYpoYEeC9zzJVULBbmZhDyd7ko09ydpNZ3nm2Kee4FPPXHnYEF1nqOFEC08LUVcDvYXkJHW8gTaKCk9YGOeIJhqiE4ToPEepdp7IWFjdwnWaufGMwJJCMtUTTBBK9BGCOy2tGGrJTHIwyEOzp6aPzNMOtlZkDvcEWpP5SVNhfkvDxhmSazTJXYrM9U1E0xwFVwqZQwzJxw6+kGGGUj2FglGGmnb1/G51udRSMNlTw6GGnCcUwVcOpmsqTHa06o72sw1RL02p9z0VbnMLOaIX3QKaYKSCFQzBKEUNHTSc48k53RH9wxGMtpQa5KjjW0W0n6XCCCG4yxNNdhQ4R4l1Ff+2sSd6UFHiIEOyqqFgT01mEUMD+joy75jPhOA+oVVLm309FR4yVOlp4RhLiScNmSmaYF5Pw0STrOIoWMSR2UkRXOMp+M4SHW8o8Zoi6OZgjKOaFar8zZDzkWzvKOjkKBjmCXby8JahhjXULY4KlzgKLvAwxVGhvyd4zxB1d9T0piazmKLCVZY5sKiD0y2ZSYrkUEPUbIk+dlQ4SJHTR50k1DPaUWIdTZW9NJwnJMOECgd7ou/MnppMJ02O1VT4Wsh85MnZzcFTngpXGKo84qmwgKbCL/orR/SzJ2crA+t6Mp94KvxJUeIbT3CQu1uIdlQEOzlKfS3UMcrTiFmOuroocrZrT2AcmamOKg8YomeEKm/rlT2sociMaybaUlFhuqHCM2qIJ+rg4EcDFymiDSxzaHdPcpE62pD5kyM5SBMoA1PaUtfIthS85ig1VPiPPYXgYEMNk4Qq7TXBgo7oT57gPUdwgCHzhIVFPFU6OYJzHAX9m5oNrVjeE61miDrqQ4VSa1oiURTsKHC0IfjNwU2WzK6eqK8jWln4g15TVBnqmDteCJ501PGAocJhhqjZdtBEB6lnhLreFJKxmlKbeGrqLiSThVIbCdGzloasa6lpMQXHCME2boLpJgT7yWaemu6wBONbqGNVRS0PKIL7LckbjmQtR7K8I5qtqel+T/ChJTNIKLjdUMNIRyvOEko9YYl2cwQveBikCNawJKcLBbc7+JM92mysNvd/Fqp8a0k6CNEe7cnZrxlW0wQXaXjaktnRwNOGZKYiONwS7a1JVheq3WgJHlQUGKHKmp4KAxXR/ULURcNgoa4zhKSLpZR3kxRRb0NmD0OFn+UCS7CzI1nbP6+o4x47QZE5xRCt3ZagnYcvmpYQktXdk5YKXTzBC57kKEe0VVuiSYqapssMS3C9p2CKkHOg8B8Pa8p5atrIw3qezIWanMGa5HRDNF6RM9wcacl0N+Q8Z8hsIkSnaIIdHRUOEebAPy1zbCkhM062FCJtif7PU+UtoVXzWKqM1PxXO8cfdruhFQ/a6x3JKYagvVDhQEtNiyiiSQ7OsuRsZUku0CRNDs4Sog6KKjsZgk2bYJqijgsEenoKeniinRXBn/U3lgpPdyDZynQx8IiioMnCep5Ky8mjGs6Wty0l1hUQTcNWswS3WRp2kCNZwJG8omG8JphPUaFbC8lEfabwP7VtM9yoaNCAjpR41VNhrD9LkbN722v0CoZMByFzhaW+MyzRYEWFDQwN2M4/JiT76PuljT3VU/A36eaIThb+R9oZGOAJ9tewkgGvqOMNRWYjT/Cwu99Q8LqDE4TgbLWxJ1jaDDAERsFOFrobgjUsBScaguXU8kKm2RL19tRypSHnHNlHiIZqgufs4opgQdVdwxBNNFBR6kVFqb8ogimOzB6a6HTzrlDHEpYaxjiiA4TMQobkDg2vejjfwJGWmnbVFAw3H3hq2NyQfG7hz4aC+w3BbwbesG0swYayvpAs6++Ri1Vfzx93mFChvyN5xVHTS+0p9aqCAxyZ6ZacZyw5+7uuQkFPR9DDk9NOiE7X1PCYJVjVUqq7JlrHwWALF5nfHNGjApdpqgzx5OwilDhCiDYTgnc9waGW4BdLNNUQvOtpzDOWHDH8D7TR/A/85KljEQu3NREc4Pl/6B1Hhc8Umb5CsKMmGC9EPcxoT2amwHNCmeOEnOPbklnMkbOgIvO5UMOpQrS9UGVdt6iH/fURjhI/WOpaW9OKLYRod6HCUEdOX000wpDZQ6hwg6LgZfOqo1RfT/CrJzjekXOGhpc1VW71ZLbXyyp+93ILbC1kPtIEYx0FIx1VDrLoVzXRKRYWk809yYlC9ImcrinxtabKnzRJk3lAU1OLEN1j2zrYzr2myHRXJFf4h4QKT1qSTzTB5+ZNTzTRkAxX8FcLV2uS8eoQQ2aAkFzvCM72sJIcJET3WPjRk5wi32uSS9rfZajpWEvj9hW42F4o5NytSXYy8IKHay10VYdrcl4SkqscrXpMwyGOgtkajheSxdQqmpxP1L3t4R5PqasFnrQEjytq6qgp9Y09Qx9o4S1FzhUCn1kyHSzBWLemoSGvOqLNhZyBjmCaAUYpMgt4Ck7wBBMMwWKWgjsUwTaGVsxWC1mYoKiyqqeGKYqonSIRQ3KIkHO0pmAxTdBHkbOvfllfr+AA+7gnc50huVKYK393FOyg7rbPO/izI7hE4CnHHHnJ0ogNPRUGeUpsrZZTBJcrovUcJe51BPsr6GkJdhCCsZ6aTtMEb2pqWkqeVtDXE/QVggsU/Nl86d9RMF3DxvZTA58agu810RWawCiSzzXBeU3MMW9oyJUedvNEvQyNu1f10BSMddR1vaLCYpYa/mGocLSiYDcLbQz8aMn5iyF4xBNMs1P0QEOV7o5gaWGuzSeLue4tt3ro7y4Tgm4G/mopdZgl6q0o6KzJWE3mMksNr3r+a6CbT8g5wZNzT9O7fi/zpaOmnz3BRoqos+tv9zMbdpxsqDBOEewtJLt7cg5wtKKbvldpSzRRCD43VFheCI7yZLppggMVBS/KMAdHODJvOwq2NQSbKKKPLdFWQs7Fqo+mpl01JXYRgq8dnGLhTiFzqmWsUMdpllZdbKlyvSdYxhI9YghOtxR8LgSLWHK62mGGVoxzBE8LNWzqH9CUesQzFy5RQzTc56mhi6fgXEWwpKfE5Z7M05ZgZUPmo6auiv8YKzDYwWBLMErIbKHJvOwIrvEdhOBcQ9JdU1NHQ7CXn2XIDFBKU2WAgcX9UAUzDXWd5alwuyJ41Z9rjKLCL4aCp4WarhPm2rH+SaHUYE001JDZ2ZAzXPjdMpZWvC9wmqIB2lLhQ01D5jO06hghWMndbM7yRJMsoCj1vYbnFQVrW9jak3OlEJ3s/96+p33dEPRV5GxiqaGjIthUU6FFEZyqCa5qJrpBdzSw95IUnOPIrCUUjRZQFrbw5PR0R1qiYx3cb6nrWUMrBmmiBQxVHtTew5ICP/ip6g4hed/Akob/32wvBHsIOX83cI8hGeNeNPCIkPmXe8fPKx84OMSRM1MTdXSwjCZ4S30jVGhvqTRak/OVhgGazHuOCud5onEO1lJr6ecVyaOK6H7zqlBlIaHE0oroCgfvGJIdPcmfLNGLjpz7hZwZQpUbFME0A1cIJa7VNORkgfsMBatbKgwwJM9bSvQXeNOvbIjelg6WWvo5kvbKaJJNHexkKNHL9xRyFlH8Ti2riB5wVPhUk7nGkJnoCe428LR/wRGdYIlmWebCyxou1rCk4g/ShugBDX0V0ZQWkh0dOVsagkM0yV6OoLd5ye+pRlsCr0n+KiQrGuq5yJDzrTAXHtLUMduTDBVKrSm3eHL+6ijxhFDX9Z5gVU/wliHYTMiMFpKLNMEywu80wd3meoFmt6VbRMPenhrOc6DVe4pgXU8DnnHakLOIIrlF4FZPIw6R+zxBP0dyq6OOZ4Q5sLKCcz084ok+VsMMyQhNZmmBgX5xIXOEJTmi7VsGTvMTNdHHhpzdbE8Du2oKxgvBqQKdDDnTFOylCFaxR1syz2iqrOI/FEpNc3C6f11/7+ASS6l2inq2ciTrCCzgyemrCL5SVPjQkdPZUmGy2c9Sw9FtR1sS30RmsKPCS4rkIC/2U0MduwucYolGaPjKEyhzmiPYXagyWbYz8LWBDdzRimAXzxx4z8K9hpzlhLq+NiQ97HuKorMUfK/OVvC2JfiHUPCQI/q7J2gjK+tTDNxkCc4TMssqCs4TGtLVwQihyoAWgj9bosU80XGW6Ac9TJGziaUh5+hnFcHOnlaM1iRn29NaqGENTTTSUHCH2tWTeV0osUhH6psuVLjRUmGWhm6OZEshGeNowABHcJ2Bpy2ZszRcKkRXd2QuKVEeXnbfaEq825FguqfgfE2whlChSRMdron+LATTPQ2Z369t4B9C5gs/ylzv+CMmepIDPclFQl13W0rspPd1JOcbghGOEutqCv5qacURQl3dDKyvyJlqKXGPgcM9FfawJAMVmdcspcYKOZc4GjDYkFlK05olNMHyHn4zFNykyOxt99RkHlfwmiHo60l2EKI+mhreEKp080Tbug08BVPcgoqC5zWt+NLDTZ7oNSF51N1qie7Va3uCCwyZbkINf/NED6jzOsBdZjFN8oqG3wxVunqCSYYKf3EdhJyf9YWGf7tRU2oH3VHgPr1fe5J9hOgHd7xQ0y7qBwXr23aGErP0cm64JVjZwsOGqL+mhNgZmhJLW2oY4UhedsyBgzrCKrq7BmcpNVhR6jBPq64Vgi+kn6XE68pp8J5/+0wRHGOpsKenQn9DZntPzjRLZpDAdD2fnSgkG9tmIXnUwQ6WVighs7Yi2MxQ0N3CqYaCXkJ0oyOztMDJjmSSpcpvlrk0RMMOjmArQ04PRV1DO1FwhCVaUVPpKUM03JK5SxPsIWRu8/CGHi8UHChiqGFDTbSRJWeYUDDcH6vJWUxR4k1FXbMUwV6e4AJFXS8oMqsZKqzvYQ9DDQdZckY4aGsIhtlubbd2r3j4QBMoTamdPZk7O/Bf62lacZwneNjQoGcdVU7zJOd7ghsUHOkosagic6cnWc8+4gg285R6zZP5s1/LUbCKIznTwK36PkdwlOrl4U1LwfdCCa+IrvFkmgw1PCAUXKWo0sURXWcI2muKJlgyFzhynCY4RBOsqCjoI1R5zREco0n2Vt09BQtYSizgKNHfUmUrQ5UOCh51BFcLmY7umhYqXKQomOop8bUnWNNQcIiBcYaC6xzMNOS8JQQfeqKBmmglB+97ok/lfk3ygaHSyZaCRTzRxQo6GzLfa2jWBPepw+UmT7SQEJyiyRkhBLMVOfcoMjcK0eZChfUNzFAUzCsEN5vP/X1uP/n/aoMX+K+nw/Hjr/9xOo7j7Pju61tLcgvJpTWXNbfN5jLpi6VfCOviTktKlFusQixdEKWmEBUKNaIpjZRSSOXSgzaaKLdabrm1/9nZ+/f+vd/vz/v9+Xy+zZ7PRorYoZqyLrCwQdEAixxVOEXNNnjX2nUSRlkqGmWowk8lxR50JPy9Bo6qJXaXwNvREBvnThPEPrewryLhcAnj5WE15Fqi8W7R1sAuEu86S4ENikItFN4xkv9Af4nXSnUVcLiA9xzesFpivRRVeFKtsMRaKBhuSbjOELnAUtlSQUpXgdfB4Z1oSbnFEetbQ0IrAe+Y+pqnDcEJFj6S8LDZzZHwY4e3XONNlARraomNEt2bkvGsosA3ioyHm+6jCMbI59wqt4eeara28IzEmyPgoRaUOEDhTVdEJhmCoTWfC0p8aNkCp0oYqih2iqGi4yXeMkOsn4LdLLnmKfh/YogjNsPebeFGR4m9BJHLzB61XQ3BtpISfS2FugsK9FAtLWX1dCRcrCnUp44CNzuCowUZmxSRgYaE6Za0W2u/E7CVXCiI/UOR8aAm1+OSyE3mOUcwyc1zBBeoX1kiKy0Zfxck1Gsyulti11i83QTBF5Kg3pDQThFMVHiPSlK+0cSedng/VaS8bOZbtsBcTcZAR8JP5KeqQ1OYKAi20njdNNRpgnsU//K+JnaXJaGTomr7aYIphoRn9aeShJWKEq9LcozSF7QleEfDI5LYm5bgVkFkRwVDBCVu0DDIkGupo8TZBq+/pMQURYErJQmPKGKjNDkWOLx7Jd5QizdUweIaKrlP7SwJDhZvONjLkOsBBX9UpGxnydhXkfBLQ8IxgojQbLFnJf81JytSljclYYyEFyx0kVBvKWOFJmONpshGAcsduQY5giVNCV51eOdJYo/pLhbvM0uDHSevNKRcrKZIqnCtJeEsO95RoqcgGK4ocZcho1tTYtcZvH41pNQ7vA0WrhIfOSraIIntIAi+NXWCErdbkvrWwjRLrt0NKUdL6KSOscTOdMSOUtBHwL6OLA0vNSdynaWQEnCpIvKaIrJJEbvHkmuNhn6OjM8VkSGSqn1uYJCGHnq9I3aLhNME3t6GjIkO7xrNFumpyTNX/NrwX7CrIRiqqWijI9JO4d1iieykyfiposQIQ8YjjsjlBh6oHWbwRjgYJQn2NgSnNycmJAk3NiXhx44Sxykihxm8ybUwT1OVKySc7vi3OXVkdBJ4AyXBeksDXG0IhgtYY0lY5ahCD0ehborIk5aUWRJviMA7Xt5kyRjonrXENkm8yYqgs8VzgrJmClK20uMM3jRJ0FiQICQF9hdETlLQWRIb5ki6WDfWRPobvO6a4GP5mcOrNzDFELtTkONLh9dXE8xypEg7z8A9jkhrQ6Fhjlg/QVktJXxt4WXzT/03Q8IaQWSqIuEvloQ2mqC9Jfi7wRul4RX3pSPlzpoVlmCtI2jvKHCFhjcM3sN6lqF6HxnKelLjXWbwrpR4xzuCrTUZx2qq9oAh8p6ixCUGr78g8oyjRAtB5CZFwi80VerVpI0h+IeBxa6Zg6kWvpDHaioYYuEsRbDC3eOmC2JvGYLeioxGknL2UATNJN6hmtj1DlpLvDVmocYbrGCVJKOrg4X6DgddLA203BKMFngdJJFtFd7vJLm6KEpc5yjQrkk7M80SGe34X24nSex1Ra5Omgb71JKyg8SrU3i/kARKwWpH0kOGhKkObyfd0ZGjvyXlAkVZ4xRbYJ2irFMkFY1SwyWxr2oo4zlNiV+7zmaweFpT4kR3kaDAFW6xpSqzJay05FtYR4HmZhc9UxKbbfF2V8RG1MBmSaE+kmC6JnaRXK9gsiXhJHl/U0qM0WTcbyhwkYIvFGwjSbjfwhiJt8ZSQU+Bd5+marPMOkVkD0muxYLIfEuhh60x/J92itguihJSEMySVPQnTewnEm+620rTQEMsOfo4/kP/0ARvWjitlpSX7GxBgcMEsd3EEeYWvdytd+Saawi6aCIj1CkGb6Aj9rwhx16Cf3vAwFy5pyLhVonXzy51FDpdEblbkdJbUcEPDEFzQ8qNmhzzLTmmKWKbFCXeEuRabp6rxbvAtLF442QjQ+wEA9eL1xSR7Q0JXzlSHjJ4exq89yR0laScJ/FW6z4a73pFMEfDiRZvuvijIt86RaSFOl01riV2mD1UEvxGk/Geg5aWwGki1zgKPG9J2U8PEg8qYvMsZeytiTRXBMslCU8JSlxi8EabjwUldlDNLfzTUmCgxWsjqWCOHavYAqsknKFIO0yQ61VL5AVFxk6WhEaCAkdJgt9aSkzXlKNX2jEa79waYuc7gq0N3GDJGCBhoiTXUEPsdknCUE1CK0fwsiaylSF2uiDyO4XX3pFhNd7R4itFGc0k/ElBZwWvq+GC6szVeEoS/MZ+qylwpKNKv9Z469UOjqCjwlusicyTxG6VpNxcQ8IncoR4RhLbR+NdpGGmJWOcIzJGUuKPGpQg8rrG21dOMqQssJQ4RxH5jaUqnZuQ0F4Q+cjxLwPtpZbIAk3QTJHQWBE5S1BokoVtDd6lhqr9UpHSUxMcIYl9pojsb8h4SBOsMQcqvOWC2E8EVehqiJ1hrrAEbQxeK0NGZ0Gkq+guSRgniM23bIHVkqwx4hiHd7smaOyglyIyQuM978j4VS08J/A2G1KeMBRo4fBaSNhKUEZfQewVQ/C1I+MgfbEleEzCUw7mKXI0M3hd1EESVji8x5uQ41nxs1q4RMJCCXs7Iq9acpxn22oSDnQ/sJTxsCbHIYZiLyhY05TY0ZLIOQrGaSJDDN4t8pVaIrsqqFdEegtizc1iTew5Q4ayBDMUsQMkXocaYkc0hZua412siZ1rSXlR460zRJ5SlHGe5j801RLMlJTxtaOM3Q1pvxJ45zUlWFD7rsAbpfEm1JHxG0eh8w2R7QQVzBUw28FhFp5QZzq8t2rx2joqulYTWSuJdTYfWwqMFMcovFmSyJPNyLhE4E10pHzYjOC3huArRa571ZsGajQpQx38SBP5pyZB6lMU3khDnp0MBV51BE9o2E+TY5Ml2E8S7C0o6w1xvCZjf0HkVEHCzFoyNmqC+9wdcqN+Tp7jSDheE9ws8Y5V0NJCn2bk2tqSY4okdrEhx1iDN8cSudwepWmAGXKcJXK65H9to8jYQRH7SBF01ESUJdd0TayVInaWhLkOjlXE5irKGOnI6GSWGCJa482zBI9rCr0jyTVcEuzriC1vcr6mwFGSiqy5zMwxBH/TJHwjSPhL8+01kaaSUuMFKTcLEvaUePcrSmwn8DZrgikWb7CGPxkSjhQwrRk57tctmxLsb9sZvL9LSlyuSLlWkqOjwduo8b6Uv1DkmudIeFF2dHCgxVtk8dpIvHpBxhEOdhKk7OLIUSdJ+cSRY57B+0DgGUUlNfpthTfGkauzxrvTsUUaCVhlKeteTXCoJDCa2NOKhOmC4G1H8JBd4OBZReSRGkqcb/CO1PyLJTLB4j1q8JYaIutEjSLX8YKM+a6phdMsdLFUoV5RTm9JSkuDN8WcIon0NZMNZWh1q8C7SJEwV5HxrmnnTrf3KoJBlmCYI2ilSLlfEvlE4011NNgjgthzEua0oKK7JLE7HZHlEl60BLMVFewg4EWNt0ThrVNEVkkiTwpKXSWJzdRENgvKGq4IhjsiezgSFtsfCUq8qki5S1LRQeYQQ4nemmCkImWMw3tFUoUBZk4NOeZYEp4XRKTGa6wJjrWNHBVJR4m3FCnbuD6aak2WsMTh3SZImGCIPKNgsDpVwnsa70K31lCFJZYcwwSMFcQulGTsZuEaSdBXkPGZhu0FsdUO73RHjq8MPGGIfaGIbVTk6iuI3GFgucHrIQkmWSJdBd7BBu+uOryWAhY7+Lki9rK5wtEQzWwvtbqGhIMFwWRJsElsY4m9IIg9L6lCX0VklaPAYkfkZEGDnOWowlBJjtMUkcGK4Lg6EtoZInMUBVYLgn0UsdmCyCz7gIGHFfk+k1QwTh5We7A9x+IdJ6CvIkEagms0hR50eH9UnTQJ+2oiKyVlLFUE+8gBGu8MQ3CppUHesnjTHN4QB/UGPhCTHLFPHMFrCqa73gqObUJGa03wgbhHkrCfpEpzNLE7JDS25FMKhlhKKWKfCgqstLCPu1zBXy0J2ztwjtixBu8UTRn9LVtkmCN2iyFhtME70JHRQ1KVZXqKI/KNIKYMCYs1GUMEKbM1bKOI9LDXC7zbHS+bt+1MTWS9odA9DtrYtpbImQJ2VHh/lisEwaHqUk1kjKTAKknkBEXkbkdMGwq0dnhzLJF3NJH3JVwrqOB4Sca2hti75nmJN0WzxS6UxDYoEpxpa4htVlRjkYE7DZGzJVU72uC9IyhQL4i8YfGWSYLLNcHXloyz7QhNifmKSE9JgfGmuyLhc403Xm9vqcp6gXe3xuuv8F6VJNxkyTHEkHG2g0aKXL0MsXc1bGfgas2//dCONXiNLCX+5mB7eZIl1kHh7ajwpikyzlUUWOVOsjSQlsS+M0R+pPje/dzBXRZGO0rMtgQrLLG9VSu9n6CMXS3BhwYmSoIBhsjNBmZbgusE9BCPCP5triU4VhNbJfE+swSP27aayE8tuTpYYjtrYjMVGZdp2NpS1s6aBnKSHDsbKuplKbHM4a0wMFd/5/DmGyKrJSUaW4IBrqUhx0vyfzTBBLPIUcnZdrAkNsKR0sWRspumSns6Ch0v/qqIbBYUWKvPU/CFoyrDJGwSNFhbA/MlzKqjrO80hRbpKx0Jewsi/STftwGSlKc1JZyAzx05dhLEdnfQvhZOqiHWWEAHC7+30FuRcZUgaO5gpaIK+xsiHRUsqaPElTV40xQZQ107Q9BZE1nryDVGU9ZSQ47bmhBpLcYpUt7S+xuK/FiT8qKjwXYw5ypS2iuCv7q1gtgjhuBuB8LCFY5cUuCNtsQOFcT+4Ih9JX+k8Ea6v0iCIRZOtCT0Et00JW5UeC85Cg0ScK0k411HcG1zKtre3SeITBRk7WfwDhEvaYLTHP9le0m8By0JDwn4TlLW/aJOvGHxdjYUes+ScZigCkYQdNdEOhkiezgShqkx8ueKjI8lDfK2oNiOFvrZH1hS+tk7NV7nOmLHicGWEgubkXKdwdtZknCLJXaCpkrjZBtLZFsDP9CdxWsSr05Sxl6CMmoFbCOgryX40uDtamB7SVmXW4Ihlgpmq+00tBKUUa83WbjLUNkzDmY7cow1JDygyPGlhgGKYKz4vcV7QBNbJIgM11TUqZaMdwTeSguH6rOaw1JRKzaaGyxVm2EJ/uCIrVWUcZUkcp2grMsEjK+DMwS59jQk3Kd6SEq1d0S6uVmO4Bc1lDXTUcHjluCXEq+1OlBDj1pi9zgiXxnKuE0SqTXwhqbETW6RggMEnGl/q49UT2iCzgJvRwVXS2K/d6+ZkyUl7jawSVLit46EwxVljDZwoSQ20sDBihztHfk2yA8NVZghiXwrYHQdfKAOtzsayjhY9bY0yE2CWEeJ9xfzO423xhL5syS2TFJofO2pboHob0nY4GiAgRrvGQEDa/FWSsoaaYl0syRsEt3kWoH3B01shCXhTUWe9w3Bt44SC9QCh3eShQctwbaK2ApLroGCMlZrYqvlY3qYhM0aXpFkPOuoqJ3Dm6fxXrGwVF9gCWZagjPqznfkuMKQ8DPTQRO8ZqG1hPGKEm9IgpGW4DZDgTNriTxvFiq+Lz+0cKfp4wj6OCK9JSnzNSn9LFU7UhKZZMnYwcJ8s8yRsECScK4j5UOB95HFO0CzhY4xJxuCix0lDlEUeMdS6EZBkTsUkZ4K74dugyTXS7aNgL8aqjDfkCE0ZbwkCXpaWCKhl8P7VD5jxykivSyxyZrYERbe168LYu9ZYh86IkscgVLE7tWPKmJv11CgoyJltMEbrohtVAQfO4ImltiHEroYEs7RxAarVpY8AwXMcMReFOTYWe5iiLRQxJ5Q8DtJ8LQhWOhIeFESPGsILhbNDRljNbHzNRlTFbk2S3L0NOS6V1KFJYKUbSTcIIhM0wQ/s2TM0SRMNcQmSap3jCH4yhJZKSkwyRHpYYgsFeQ4U7xoCB7VVOExhXepo9ABBsYbvGWKXPME3lyH95YioZ0gssQRWWbI+FaSMkXijZXwgiTlYdPdkNLaETxlyDVIwqeaEus0aTcYcg0RVOkpR3CSJqIddK+90JCxzsDVloyrFd5ZAr4TBKfaWa6boEA7C7s6EpYaeFPjveooY72mjIccLHJ9HUwVlDhKkmutJDJBwnp1rvulJZggKDRfbXAkvC/4l3ozQOG9a8lxjx0i7nV4jSXc7vhe3OwIxjgSHjdEhhsif9YkPGlus3iLFDnWOFhtCZbJg0UbQcIaR67JjthoCyMEZRwhiXWyxO5QxI6w5NhT4U1WsJvDO60J34fW9hwzwlKij6ZAW9ne4L0s8C6XeBMEkd/LQy1VucBRot6QMlbivaBhoBgjqGiCJNhsqVp/S2SsG6DIONCR0dXhvWbJ+MRRZJkkuEjgDXJjFQW6SSL7GXK8Z2CZg7cVsbWGoKmEpzQ5elpiy8Ryg7dMkLLUEauzeO86CuwlSOlgYLojZWeJ9xM3S1PWfEfKl5ISLQ0MEKR8YOB2QfCxJBjrKPCN4f9MkaSsqoVXJBmP7EpFZ9UQfOoOFwSzBN4MQ8LsGrymlipcJQhmy0GaQjPqCHaXRwuCZwRbqK2Fg9wlClZqYicrIgMdZfxTQ0c7TBIbrChxmuzoKG8XRaSrIhhiyNFJkrC7oIAWMEOQa5aBekPCRknCo4IKPrYkvCDI8aYmY7WFtprgekcJZ3oLIqssCSMtFbQTJKwXYy3BY5oCh2iKPCpJOE+zRdpYgi6O2KmOAgvVCYaU4ySRek1sgyFhJ403QFHiVEmJHwtybO1gs8Hr5+BETQX3War0qZngYGgtVZtoqd6vFSk/UwdZElYqyjrF4HXUeFspIi9IGKf4j92pKGAdCYMVsbcV3kRF0N+R8LUd5PCsIGWoxDtBkCI0nKofdJQxT+LtZflvuc8Q3CjwWkq8KwUpHzkK/NmSsclCL0nseQdj5FRH5CNHSgtLiW80Of5HU9Hhlsga9bnBq3fEVltKfO5IaSTmGjjc4J0otcP7QsJUSQM8pEj5/wCuUuC2DWz8AAAAAElFTkSuQmCC\");\n}\n\n.ace-ambiance .ace_indent-guide {\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNQUFD4z6Crq/sfAAuYAuYl+7lfAAAAAElFTkSuQmCC\") right repeat-y;\n}\n\n.ace-ambiance .ace_indent-guide-active {\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACAQMAAACjTyRkAAAABlBMVEUAAADCwsK76u2xAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjYGBoAAAAhACBGFbxzQAAAABJRU5ErkJggg==\") right repeat-y;\n}\n"}),ace.define("ace/theme/ambiance",["require","exports","module","ace/theme/ambiance.css","ace/lib/dom"],function(e,t,n){t.isDark=!0,t.cssClass="ace-ambiance",t.cssText=e("./ambiance.css");var r=e("../lib/dom");r.importCssString(t.cssText,t.cssClass,!1)});                (function() {
                    ace.require(["ace/theme/ambiance"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            
;                (function() {
                    ace.require(["ace/snippets/text"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            