// Copyright 2012
// curasystems GmbH
var h=void 0,i=!0,j=null,k=!1,m,aa=aa||{},q=this;function ba(a){for(var a=a.split("."),b=q,c;c=a.shift();)if(b[c]!=j)b=b[c];else return j;return b}function ca(){}
function s(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function da(a){var b=s(a);return"array"==b||"object"==b&&"number"==typeof a.length}function t(a){return"string"==typeof a}function u(a){return a[ea]||(a[ea]=++fa)}var ea="closure_uid_"+Math.floor(2147483648*Math.random()).toString(36),fa=0;function ga(a,b,c){return a.call.apply(a.bind,arguments)}
function ha(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function v(a,b,c){v=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ga:ha;return v.apply(j,arguments)}
function ia(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=Array.prototype.slice.call(arguments);b.unshift.apply(b,c);return a.apply(this,b)}}var ja=Date.now||function(){return+new Date};function x(a,b){function c(){}c.prototype=b.prototype;a.U=b.prototype;a.prototype=new c};function ka(a){if(!la.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(ma,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(na,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(oa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(pa,"&quot;"));return a}var ma=/&/g,na=/</g,oa=/>/g,pa=/\"/g,la=/[&<>\"]/;var y=Array.prototype,qa=y.indexOf?function(a,b,c){return y.indexOf.call(a,b,c)}:function(a,b,c){c=c==j?0:0>c?Math.max(0,a.length+c):c;if(t(a))return!t(b)||1!=b.length?-1:a.indexOf(b,c);for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ra=y.forEach?function(a,b,c){y.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,f=t(a)?a.split(""):a,e=0;e<d;e++)e in f&&b.call(c,f[e],e,a)};var z,sa,ta,ua;function va(){return q.navigator?q.navigator.userAgent:j}ua=ta=sa=z=k;var wa;if(wa=va()){var xa=q.navigator;z=0==wa.indexOf("Opera");sa=!z&&-1!=wa.indexOf("MSIE");ta=!z&&-1!=wa.indexOf("WebKit");ua=!z&&!ta&&"Gecko"==xa.product}var ya=z,A=sa,B=ua,C=ta,za;
a:{var Aa="",D;if(ya&&q.opera)var Ba=q.opera.version,Aa="function"==typeof Ba?Ba():Ba;else if(B?D=/rv\:([^\);]+)(\)|;)/:A?D=/MSIE\s+([^\);]+)(\)|;)/:C&&(D=/WebKit\/(\S+)/),D)var Ca=D.exec(va()),Aa=Ca?Ca[1]:"";if(A){var Da,Ea=q.document;Da=Ea?Ea.documentMode:h;if(Da>parseFloat(Aa)){za=""+Da;break a}}za=Aa}var Fa={};
function E(a){var b;if(!(b=Fa[a])){b=0;for(var c=(""+za).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=(""+a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),f=Math.max(c.length,d.length),e=0;0==b&&e<f;e++){var g=c[e]||"",l=d[e]||"",p=RegExp("(\\d*)(\\D*)","g"),o=RegExp("(\\d*)(\\D*)","g");do{var r=p.exec(g)||["","",""],n=o.exec(l)||["","",""];if(0==r[0].length&&0==n[0].length)break;b=((0==r[1].length?0:parseInt(r[1],10))<(0==n[1].length?0:parseInt(n[1],10))?-1:(0==r[1].length?0:parseInt(r[1],
10))>(0==n[1].length?0:parseInt(n[1],10))?1:0)||((0==r[2].length)<(0==n[2].length)?-1:(0==r[2].length)>(0==n[2].length)?1:0)||(r[2]<n[2]?-1:r[2]>n[2]?1:0)}while(0==b)}b=Fa[a]=0<=b}return b}var Ga={};function Ha(){return Ga[9]||(Ga[9]=A&&!!document.documentMode&&9<=document.documentMode)};!A||Ha();!B&&!A||A&&Ha()||B&&E("1.9.1");A&&E("9");function Ia(a){var b=F,c;for(c in b)a.call(h,b[c],c,b)}function Ja(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function Ka(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}var La="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");function Ma(a,b){for(var c,d,f=1;f<arguments.length;f++){d=arguments[f];for(c in d)a[c]=d[c];for(var e=0;e<La.length;e++)c=La[e],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};A&&E(8);var G={};"ScriptEngine"in q&&"JScript"==q.ScriptEngine()&&(q.ScriptEngineMajorVersion(),q.ScriptEngineMinorVersion(),q.ScriptEngineBuildVersion());function H(a){return"object"===typeof a&&a&&0===a.Ca?a.content:(""+a).replace(Na,Oa)}var Pa={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","?":"&#133;","�":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function Oa(a){return Pa[a]}var Na=/[\x00\x22\x26\x27\x3c\x3e]/g;function Qa(a,b){this.id=a;this.ya=b}function Ra(a,b,c,d,f){this.id=a;this.na=b;this.description=c;this.ta=f;this.v=new Date(d)}function Sa(a){var b;try{return b=new Date,a.v.getDate()===b.getDate()&&a.v.getMonth()===b.getMonth()&&a.v.getYear()===b.getYear()}catch(c){return k}}function Ta(a){try{var b=a.studies,c,d,f,e;e=[];for(d=0,f=b.length;d<f;d++)c=b[d],e.push(this.l.push(Ua(this,c)))}catch(g){console.log(g)}}Ta.prototype.l=[];
function Ua(a,b){var c;return new Ra(b.id,b.modality,b.description,b["performed-at"],function(){var a,f,e,g;e=b.series;g=[];for(a=0,f=e.length;a<f;a++)c=e[a],g.push(new Qa(c.id,c.thumbUrl));return g}.call(a))};function Va(a){return eval("("+a+")")};var I={};function Wa(a){switch(a){case 200:case 201:case 202:case 204:case 304:case 1223:return i;default:return k}};function J(){}J.prototype.Z=k;J.prototype.q=function(){this.Z||(this.Z=i,this.i())};J.prototype.i=function(){this.la&&Xa.apply(j,this.la)};function Xa(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];da(d)?Xa.apply(j,d):d&&"function"==typeof d.q&&d.q()}};!A||Ha();var Ya=!A||Ha();A&&E("8");!C||E("528");B&&E("1.9b")||A&&E("8")||ya&&E("9.5")||C&&E("528");!B||E("8");function K(a,b){this.type=a;this.currentTarget=this.target=b}x(K,J);K.prototype.i=function(){delete this.type;delete this.target;delete this.currentTarget};K.prototype.o=k;K.prototype.F=i;function Za(a){Za[" "](a);return a}Za[" "]=ca;function L(a,b){a&&this.A(a,b)}x(L,K);m=L.prototype;m.target=j;m.relatedTarget=j;m.offsetX=0;m.offsetY=0;m.clientX=0;m.clientY=0;m.screenX=0;m.screenY=0;m.button=0;m.keyCode=0;m.charCode=0;m.ctrlKey=k;m.altKey=k;m.shiftKey=k;m.metaKey=k;
m.A=function(a,b){var c=this.type=a.type;K.call(this,c);this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(B){var f;a:{try{Za(d.nodeName);f=i;break a}catch(e){}f=k}f||(d=j)}}else"mouseover"==c?d=a.fromElement:"mouseout"==c&&(d=a.toElement);this.relatedTarget=d;this.offsetX=C||a.offsetX!==h?a.offsetX:a.layerX;this.offsetY=C||a.offsetY!==h?a.offsetY:a.layerY;this.clientX=a.clientX!==h?a.clientX:a.pageX;this.clientY=a.clientY!==h?a.clientY:a.pageY;this.screenX=a.screenX||
0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;delete this.F;delete this.o};m.i=function(){L.U.i.call(this);this.relatedTarget=this.currentTarget=this.target=j};function $a(){}var ab=0;m=$a.prototype;m.key=0;m.p=k;m.X=k;m.A=function(a,b,c,d,f,e){if("function"==s(a))this.da=i;else if(a&&a.handleEvent&&"function"==s(a.handleEvent))this.da=k;else throw Error("Invalid listener argument");this.u=a;this.ha=b;this.src=c;this.type=d;this.capture=!!f;this.O=e;this.X=k;this.key=++ab;this.p=k};m.handleEvent=function(a){return this.da?this.u.call(this.O||this.src,a):this.u.handleEvent.call(this.u,a)};var M={},N={},F={},O={};
function P(a,b,c,d,f){if(b){if("array"==s(b)){for(var e=0;e<b.length;e++)P(a,b[e],c,d,f);return j}var d=!!d,g=N;b in g||(g[b]={b:0,e:0});g=g[b];d in g||(g[d]={b:0,e:0},g.b++);var g=g[d],l=u(a),p;g.e++;if(g[l]){p=g[l];for(e=0;e<p.length;e++)if(g=p[e],g.u==c&&g.O==f){if(g.p)break;return p[e].key}}else p=g[l]=[],g.b++;e=bb();e.src=a;g=new $a;g.A(c,e,a,b,d,f);c=g.key;e.key=c;p.push(g);M[c]=g;F[l]||(F[l]=[]);F[l].push(g);a.addEventListener?(a==q||!a.Y)&&a.addEventListener(b,e,d):a.attachEvent(b in O?O[b]:
O[b]="on"+b,e);return c}throw Error("Invalid event type");}function bb(){var a=cb,b=Ya?function(c){return a.call(b.src,b.key,c)}:function(c){c=a.call(b.src,b.key,c);if(!c)return c};return b}function db(a,b,c,d,f){if("array"==s(b))for(var e=0;e<b.length;e++)db(a,b[e],c,d,f);else{d=!!d;a:{e=N;if(b in e&&(e=e[b],d in e&&(e=e[d],a=u(a),e[a]))){a=e[a];break a}a=j}if(a)for(e=0;e<a.length;e++)if(a[e].u==c&&a[e].capture==d&&a[e].O==f){eb(a[e].key);break}}}
function eb(a){if(M[a]){var b=M[a];if(!b.p){var c=b.src,d=b.type,f=b.ha,e=b.capture;c.removeEventListener?(c==q||!c.Y)&&c.removeEventListener(d,f,e):c.detachEvent&&c.detachEvent(d in O?O[d]:O[d]="on"+d,f);c=u(c);f=N[d][e][c];if(F[c]){var g=F[c],l=qa(g,b);0<=l&&y.splice.call(g,l,1);0==g.length&&delete F[c]}b.p=i;f.fa=i;fb(d,e,c,f);delete M[a]}}}
function fb(a,b,c,d){if(!d.B&&d.fa){for(var f=0,e=0;f<d.length;f++)d[f].p?d[f].ha.src=j:(f!=e&&(d[e]=d[f]),e++);d.length=e;d.fa=k;0==e&&(delete N[a][b][c],N[a][b].b--,0==N[a][b].b&&(delete N[a][b],N[a].b--),0==N[a].b&&delete N[a])}}function gb(a){var b,c=0,d=b==j;b=!!b;if(a==j)Ia(function(a){for(var e=a.length-1;0<=e;e--){var f=a[e];if(d||b==f.capture)eb(f.key),c++}});else if(a=u(a),F[a])for(var a=F[a],f=a.length-1;0<=f;f--){var e=a[f];if(d||b==e.capture)eb(e.key),c++}}
function Q(a,b,c,d,f){var e=1,b=u(b);if(a[b]){a.e--;a=a[b];a.B?a.B++:a.B=1;try{for(var g=a.length,l=0;l<g;l++){var p=a[l];p&&!p.p&&(e&=hb(p,f)!==k)}}finally{a.B--,fb(c,d,b,a)}}return Boolean(e)}function hb(a,b){var c=a.handleEvent(b);a.X&&eb(a.key);return c}
function cb(a,b){if(!M[a])return i;var c=M[a],d=c.type,f=N;if(!(d in f))return i;var f=f[d],e,g;if(!Ya){e=b||ba("window.event");var l=i in f,p=k in f;if(l){if(0>e.keyCode||e.returnValue!=h)return i;a:{var o=k;if(0==e.keyCode)try{e.keyCode=-1;break a}catch(r){o=i}if(o||e.returnValue==h)e.returnValue=i}}o=new L;o.A(e,this);e=i;try{if(l){for(var n=[],V=o.currentTarget;V;V=V.parentNode)n.push(V);g=f[i];g.e=g.b;for(var w=n.length-1;!o.o&&0<=w&&g.e;w--)o.currentTarget=n[w],e&=Q(g,n[w],d,i,o);if(p){g=f[k];
g.e=g.b;for(w=0;!o.o&&w<n.length&&g.e;w++)o.currentTarget=n[w],e&=Q(g,n[w],d,k,o)}}else e=hb(c,o)}finally{n&&(n.length=0),o.q()}return e}d=new L(b,this);try{e=hb(c,d)}finally{d.q()}return e};function R(){}x(R,J);m=R.prototype;m.Y=i;m.T=j;m.addEventListener=function(a,b,c,d){P(this,a,b,c,d)};m.removeEventListener=function(a,b,c,d){db(this,a,b,c,d)};
m.dispatchEvent=function(a){var b=a.type||a,c=N;if(b in c){if(t(a))a=new K(a,this);else if(a instanceof K)a.target=a.target||this;else{var d=a,a=new K(b,this);Ma(a,d)}var d=1,f,c=c[b],b=i in c,e;if(b){f=[];for(e=this;e;e=e.T)f.push(e);e=c[i];e.e=e.b;for(var g=f.length-1;!a.o&&0<=g&&e.e;g--)a.currentTarget=f[g],d&=Q(e,f[g],a.type,i,a)&&a.F!=k}if(k in c)if(e=c[k],e.e=e.b,b)for(g=0;!a.o&&g<f.length&&e.e;g++)a.currentTarget=f[g],d&=Q(e,f[g],a.type,k,a)&&a.F!=k;else for(f=this;!a.o&&f&&e.e;f=f.T)a.currentTarget=
f,d&=Q(e,f,a.type,k,a)&&a.F!=k;a=Boolean(d)}else a=i;return a};m.i=function(){R.U.i.call(this);gb(this);this.T=j};var ib=q.window;function jb(a){if("function"==typeof a.w)return a.w();if(t(a))return a.split("");if(da(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Ja(a)}function kb(a,b,c){if("function"==typeof a.forEach)a.forEach(b,c);else if(da(a)||t(a))ra(a,b,c);else{var d;if("function"==typeof a.N)d=a.N();else if("function"!=typeof a.w)if(da(a)||t(a)){d=[];for(var f=a.length,e=0;e<f;e++)d.push(e)}else d=Ka(a);else d=h;for(var f=jb(a),e=f.length,g=0;g<e;g++)b.call(c,f[g],d&&d[g],a)}};function lb(a,b){this.k={};this.c=[];var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){a instanceof lb?(c=a.N(),d=a.w()):(c=Ka(a),d=Ja(a));for(var f=0;f<c.length;f++)this.set(c[f],d[f])}}m=lb.prototype;m.b=0;m.w=function(){mb(this);for(var a=[],b=0;b<this.c.length;b++)a.push(this.k[this.c[b]]);return a};m.N=function(){mb(this);return this.c.concat()};
function mb(a){if(a.b!=a.c.length){for(var b=0,c=0;b<a.c.length;){var d=a.c[b];Object.prototype.hasOwnProperty.call(a.k,d)&&(a.c[c++]=d);b++}a.c.length=c}if(a.b!=a.c.length){for(var f={},c=b=0;b<a.c.length;)d=a.c[b],Object.prototype.hasOwnProperty.call(f,d)||(a.c[c++]=d,f[d]=1),b++;a.c.length=c}}m.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.k,a)?this.k[a]:b};m.set=function(a,b){Object.prototype.hasOwnProperty.call(this.k,a)||(this.b++,this.c.push(a));this.k[a]=b};function nb(a){return ob(a||arguments.callee.caller,[])}
function ob(a,b){var c=[];if(0<=qa(b,a))c.push("[...circular reference...]");else if(a&&50>b.length){c.push(pb(a)+"(");for(var d=a.arguments,f=0;f<d.length;f++){0<f&&c.push(", ");var e;e=d[f];switch(typeof e){case "object":e=e?"object":"null";break;case "string":break;case "number":e=""+e;break;case "boolean":e=e?"true":"false";break;case "function":e=(e=pb(e))?e:"[fn]";break;default:e=typeof e}40<e.length&&(e=e.substr(0,40)+"...");c.push(e)}b.push(a);c.push(")\n");try{c.push(ob(a.caller,b))}catch(g){c.push("[exception trying to get caller]\n")}}else a?
c.push("[...long stack...]"):c.push("[end]");return c.join("")}function pb(a){if(S[a])return S[a];a=""+a;if(!S[a]){var b=/function ([^\(]+)/.exec(a);S[a]=b?b[1]:"[Anonymous]"}return S[a]}var S={};function T(a,b,c,d,f){this.reset(a,b,c,d,f)}T.prototype.aa=j;T.prototype.$=j;var qb=0;T.prototype.reset=function(a,b,c,d,f){"number"==typeof f||qb++;d||ja();this.t=a;this.oa=b;delete this.aa;delete this.$};T.prototype.ka=function(a){this.t=a};function U(a){this.pa=a}U.prototype.C=j;U.prototype.t=j;U.prototype.J=j;U.prototype.ca=j;function W(a,b){this.name=a;this.value=b}W.prototype.toString=function(){return this.name};var rb=new W("SEVERE",1E3),sb=new W("WARNING",900),tb=new W("CONFIG",700),ub=new W("FINE",500);U.prototype.getParent=function(){return this.C};U.prototype.ka=function(a){this.t=a};function vb(a){return a.t?a.t:a.C?vb(a.C):j}
U.prototype.log=function(a,b,c){if(a.value>=vb(this).value){a=this.ma(a,b,c);b="log:"+a.oa;q.console&&(q.console.timeStamp?q.console.timeStamp(b):q.console.markTimeline&&q.console.markTimeline(b));q.msWriteProfilerMark&&q.msWriteProfilerMark(b);for(b=this;b;){var c=b,d=a;if(c.ca)for(var f=0,e=h;e=c.ca[f];f++)e(d);b=b.getParent()}}};
U.prototype.ma=function(a,b,c){var d=new T(a,""+b,this.pa);if(c){d.aa=c;var f;var e=arguments.callee.caller;try{var g;var l=ba("window.location.href");if(t(c))g={message:c,name:"Unknown error",lineNumber:"Not available",fileName:l,stack:"Not available"};else{var p,o,r=k;try{p=c.lineNumber||c.Da||"Not available"}catch(n){p="Not available",r=i}try{o=c.fileName||c.filename||c.sourceURL||l}catch(V){o="Not available",r=i}g=r||!c.lineNumber||!c.fileName||!c.stack?{message:c.message,name:c.name,lineNumber:p,
fileName:o,stack:c.stack||"Not available"}:c}f="Message: "+ka(g.message)+'\nUrl: <a href="view-source:'+g.fileName+'" target="_new">'+g.fileName+"</a>\nLine: "+g.lineNumber+"\n\nBrowser stack:\n"+ka(g.stack+"-> ")+"[end]\n\nJS stack traversal:\n"+ka(nb(e)+"-> ")}catch(w){f="Exception trying to expose exception! You win, we lose. "+w}d.$=f}return d};function X(a,b){a.log(ub,b,h)}var wb={},xb=j;
function yb(a){xb||(xb=new U(""),wb[""]=xb,xb.ka(tb));var b;if(!(b=wb[a])){b=new U(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=yb(a.substr(0,c));c.J||(c.J={});c.J[d]=b;b.C=c;wb[a]=b}return b};function zb(){}zb.prototype.W=j;zb.prototype.r=function(){var a;if(!(a=this.W))a={},Ab(this)&&(a[0]=i,a[1]=i),a=this.W=a;return a};function Bb(a,b){this.Ba=a;this.sa=b}x(Bb,zb);Bb.prototype.K=function(){return this.Ba()};Bb.prototype.r=function(){return this.sa()};I.f=function(){return I.f.ba.K()};I.f.r=function(){return I.f.ba.r()};I.f.Ea=function(a,b){I.f.ja(new Bb(a,b))};I.f.ja=function(a){I.f.ba=a};function Cb(){}x(Cb,zb);Cb.prototype.K=function(){var a=Ab(this);return a?new ActiveXObject(a):new XMLHttpRequest};Cb.prototype.P=j;
function Ab(a){if(!a.P&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.P=d}catch(f){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.P}I.f.ja(new Cb);var Db=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");function Y(a){this.headers=new lb;this.I=a||j}x(Y,R);Y.prototype.d=yb("goog.net.XhrIo");var Eb=/^https?$/i,Fb=[];function Gb(a,b){var c=new Y;Fb.push(c);b&&P(c,"complete",b);P(c,"ready",ia(Hb,c));c.send(a,h,h,h)}function Hb(a){a.q();a=qa(Fb,a);0<=a&&y.splice.call(Fb,a,1)}m=Y.prototype;m.g=k;m.a=j;m.H=j;m.R="";m.ea="";m.s="";m.M=k;m.z=k;m.Q=k;m.j=k;m.G=0;m.m=j;m.ia="";m.Aa=k;
m.send=function(a,b,c,d){if(this.a)throw Error("[goog.net.XhrIo] Object is active with another request");b=b?b.toUpperCase():"GET";this.R=a;this.s="";this.ea=b;this.M=k;this.g=i;this.a=this.I?this.I.K():I.f();this.H=this.I?this.I.r():I.f.r();this.a.onreadystatechange=v(this.ga,this);try{X(this.d,Z(this,"Opening Xhr")),this.Q=i,this.a.open(b,a,i),this.Q=k}catch(f){X(this.d,Z(this,"Error opening Xhr: "+f.message));Ib(this,f);return}var a=c||"",e=new lb(this.headers);d&&kb(d,function(a,b){e.set(b,a)});
"POST"==b&&!Object.prototype.hasOwnProperty.call(e.k,"Content-Type")&&e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");kb(e,function(a,b){this.a.setRequestHeader(b,a)},this);this.ia&&(this.a.responseType=this.ia);"withCredentials"in this.a&&(this.a.withCredentials=this.Aa);try{this.m&&(ib.clearTimeout(this.m),this.m=j),0<this.G&&(X(this.d,Z(this,"Will abort after "+this.G+"ms if incomplete")),this.m=ib.setTimeout(v(this.za,this),this.G)),X(this.d,Z(this,"Sending request")),
this.z=i,this.a.send(a),this.z=k}catch(g){X(this.d,Z(this,"Send error: "+g.message)),Ib(this,g)}};m.za=function(){"undefined"!=typeof aa&&this.a&&(this.s="Timed out after "+this.G+"ms, aborting",X(this.d,Z(this,this.s)),this.dispatchEvent("timeout"),this.abort(8))};function Ib(a,b){a.g=k;a.a&&(a.j=i,a.a.abort(),a.j=k);a.s=b;Jb(a);Kb(a)}function Jb(a){a.M||(a.M=i,a.dispatchEvent("complete"),a.dispatchEvent("error"))}
m.abort=function(){this.a&&this.g&&(X(this.d,Z(this,"Aborting")),this.g=k,this.j=i,this.a.abort(),this.j=k,this.dispatchEvent("complete"),this.dispatchEvent("abort"),Kb(this))};m.i=function(){this.a&&(this.g&&(this.g=k,this.j=i,this.a.abort(),this.j=k),Kb(this,i));Y.U.i.call(this)};m.ga=function(){!this.Q&&!this.z&&!this.j?this.ra():Lb(this)};m.ra=function(){Lb(this)};
function Lb(a){if(a.g&&"undefined"!=typeof aa)if(a.H[1]&&4==Mb(a)&&2==Nb(a))X(a.d,Z(a,"Local request error detected and ignored"));else if(a.z&&4==Mb(a))ib.setTimeout(v(a.ga,a),0);else if(a.dispatchEvent("readystatechange"),4==Mb(a)){X(a.d,Z(a,"Request complete"));a.g=k;var b=Nb(a),c;if(!(c=Wa(b))){if(b=0===b)b=(""+a.R).match(Db)[1]||j,!b&&self.location&&(b=self.location.protocol,b=b.substr(0,b.length-1)),b=!Eb.test(b?b.toLowerCase():"");c=b}if(c)a.dispatchEvent("complete"),a.dispatchEvent("success");
else{var d;try{d=2<Mb(a)?a.a.statusText:""}catch(f){X(a.d,"Can not get status: "+f.message),d=""}a.s=d+" ["+Nb(a)+"]";Jb(a)}Kb(a)}}function Kb(a,b){if(a.a){var c=a.a,d=a.H[0]?ca:j;a.a=j;a.H=j;a.m&&(ib.clearTimeout(a.m),a.m=j);b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(f){a.d.log(rb,"Problem encountered resetting onreadystatechange: "+f.message,h)}}}function Mb(a){return a.a?a.a.readyState:0}
function Nb(a){try{return 2<Mb(a)?a.a.status:-1}catch(b){return a.d.log(sb,"Can not get status: "+b.message,h),-1}}function Z(a,b){return b+" ["+a.ea+" "+a.R+" "+Nb(a)+"]"};function Ob(a){this.ua=a}Ob.prototype.get=function(a,b){var c,d;c=""+this.ua+a;d=I;return Gb(c,function(a){var c;d=a.target;a=Nb(d);if(Wa(a)){try{c=d.a?d.a.responseText:""}catch(g){X(d.d,"Can not get responseText: "+g.message),c=""}c=Va(c);return b(c,a)}return b(j,a)})};function Pb(a){this.va=new Ob(a)}Pb.prototype.get=function(a,b,c){var d;d=this;return this.va.get(a,function(f,e){return Qb(d,a,b,c,f,e)})};
function Qb(a,b,c,d,f,e){if(f!=j)return c(f);console.log("Error reading from "+b+" => "+e);return setTimeout(function(){var f;f=i;d!=j&&(f=d(e));f&&a.get(b,c,d)},1E3)};function Rb(a,b){return(new Pb("http://localhost:8000")).get("/studies/patientStudies",function(b){return a(new Ta(b))},b)};function Sb(a){for(var b="<ul class='dicom_studies'>",a=a.l,c=a.length,d=0;d<c;d++){var f=a[d],b=b+("<li id='"+H(f.id)+"' class='dicom_studies_list_item' >"+("<div class='dicom_studies_list_item_header'>"+("time"==f.type?"<img title='"+H(f.D)+" Uhr' class='dicom_studies_list_time_icon' src='/images/icon_time.png' />":"<img title='"+H(f.D)+"' class='dicom_studies_list_date_icon' src='/images/icon_calendar_grid.png'/>")+"<span>"+H(f.D)+"</span><span class='dicom_studies_list_item_modality'><strong>"+
H(f.na)+"</strong></span><span>"+H(f.description)+"</span><div>")+"<div class='dicom_studies_list_item_series'>"),f=f.ta,e=f.length;if(0<e)for(var g=0;g<e;g++)b+="<img width='64' src='"+H(f[g].ya)+"' />";b+="</div></li>"}return b+"</ul>"};function Tb(){}
Tb.prototype.L=function(a){var b;this.h=t(a)?document.getElementById(a):a;b=this;return Rb(function(a){a={n:Ub(b,a.l)};b.h.innerHTML="<div class='dicom_grouped_list'><h3>Dicom Studien</h2>"+(0<(a||G).n.V.l.length?"<div id='vertical' class='divider'><h4>"+H((a||G).n.V.title)+"</h4>"+Sb((a||G).n.V)+"</div>":"")+(0<(a||G).n.S.l.length?"<div id='vertical' style='margin-top:50px'><h4>"+H((a||G).n.S.title)+"</h4>"+Sb((a||G).n.S)+"</div>":"")+"</div>";var d,f,e,g;a=b.h||document;if(a.querySelectorAll&&a.querySelector&&
(!C||"CSS1Compat"==document.compatMode||E("528")))e=a.querySelectorAll("LI.dicom_studies_list_item");else{if(a.getElementsByClassName){a=a.getElementsByClassName("dicom_studies_list_item");d={};for(e=f=0;g=a[e];e++)"LI"==g.nodeName&&(d[f++]=g)}else{a=a.getElementsByTagName("LI");d={};for(e=f=0;g=a[e];e++){var l=g.className;"function"==typeof l.split&&0<=qa(l.split(/\s+/),"dicom_studies_list_item")&&(d[f++]=g)}}d.length=f;e=d}g=[];for(d=0,f=e.length;d<f;d++)a=e[d],g.push(P(a,"click",b.qa,k,{wa:a.id,
h:b.h}));return g},function(){var a=b.h;if("textContent"in a)a.textContent="Momentan keine Daten verf�gbar";else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data="Momentan keine Daten verf�gbar"}else{for(var d;d=a.firstChild;)a.removeChild(d);a.appendChild((9==a.nodeType?a:a.ownerDocument||a.document).createTextNode("Momentan keine Daten verf�gbar"))}return i})};Tb.prototype.qa=function(){return(new Vb(this.wa)).L(this.h)};
function Ub(a,b){var c;return{V:{title:"Heute",l:function(){var a,f,e;e=[];for(a=0,f=b.length;a<f;a++)c=b[a],Sa(c)&&e.push(Wb(c));return e}.call(a)},S:{title:"Fr�here Untersuchungen",l:function(){var a,f,e;e=[];for(a=0,f=b.length;a<f;a++)c=b[a],Sa(c)||e.push(Wb(c));return e}.call(a)}}}function Wb(a){Sa(a)?(a.type="time",a.D=a.v.toString("hh:mm:ss")):(a.type="date",a.D=a.v.toString("dd.MM.yy"));return a}function Vb(a){this.xa=a}x(Vb,R);
Vb.prototype.L=function(a){this.h=t(a)?document.getElementById(a):a;this.h.innerHTML='<div id="viewer-'+H(this.xa)+"\" class='fullscreen viewer'><p></p></div>"};function Xb(a){console.log("> started");(new Tb).L(a);console.log("< started")}var Yb=["cura","ipad","studylist","start"],$=q;!(Yb[0]in $)&&$.execScript&&$.execScript("var "+Yb[0]);for(var Zb;Yb.length&&(Zb=Yb.shift());)!Yb.length&&Xb!==h?$[Zb]=Xb:$=$[Zb]?$[Zb]:$[Zb]={};