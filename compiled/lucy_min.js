module.exports=function(n){"use strict";function r(n,r,t){for(var e=Math.min(t,n.length)-r,u=new Array(e),i=0;e>i;i++)u[i]=n[r+i];return u}function t(n,r){return n-r}function e(n,r){return r-n}function u(n,r){for(var t,e=[],u=0;u<n.length;u++)t=n[u],r.indexOf(t)<0&&e.indexOf(t)<0&&e.push(t);for(u=0;u<r.length;u++)t=r[u],n.indexOf(t)<0&&e.indexOf(t)<0&&e.push(t);return e}function i(n,r){var t=[],e=n.length,u=1;if(!e)return t;if(t[0]=n[0],r)for(;e>u;u++)n[u]!==n[u-1]&&t.push(n[u]);else for(;e>u;u++)t.indexOf(n[u])<0&&t.push(n[u]);return t}function o(n){try{return p.parse(n)}catch(r){return!1}}var a,c={},f=Array,l=Object,s=Function,h=String,p=JSON,g=Math,v=(Boolean,void 0),m=WeakMap,d=Map,y=Number,b=l.keys,x=l.is,w=l.assign,A=(Function.bind,p.stringify),O="prototype",S=l[O],k=f[O],N=(h[O],k.push),T=l.getOwnPropertyDescriptor,C=/\s/g,I=/-/g,R=/_/g,M=/\.js/,j=/\.css/,F=/\.json/,L=/\./,q=S.toString,E=f.from;a=E?function(n){return E.call(f,n)}:function(n){for(var r=[],t=-1,e=n.length;++t!==e;r[t]=n[t]);return r};var U=function(n){return"[object "+n+"]"},z=U("RegExp"),W=U("Arguments"),_=(U("Array"),U("Boolean")),B=U("Date"),D=U("Error"),P=(U("Function"),U("Map")),J=(U("Number"),U("Object")),G=U("Set"),Q=(U("String"),U("WeakMap")),Z=(U("ArrayBuffer"),U("Float32Array")),H=U("Float64Array"),V=U("Int8Array"),K=U("Int16Array"),X=U("Int32Array"),Y=U("unit8Array"),$=U("unit8ClampedArray"),nn=U("unit16Array"),rn=U("unit32Array"),tn=function(n){return function(r){return q.call(r)===n}},en=tn(z),un=tn(W),on=tn(_),an=tn(B),cn=tn(D),fn=tn(P),ln=tn(J),sn=tn(G),hn=tn(Q),pn=tn(Z),gn=tn(H),vn=tn(V),mn=tn(K),dn=tn(X),yn=tn(Y),bn=tn($),xn=tn(nn),wn=tn(rn),An=function(n){return On(n)?-1!=n.toString().toLowerCase().indexOf("native"):!1},On=function(n){return void 0!==n&&null!==n},Sn=function(n){return void 0===n},kn=isNaN?isNaN:y.isNaN,Nn=y.isInteger?y.isInteger:function(n){return n%1===0?!0:!1},Tn=function(n){return null===n},Cn=function(n){return n instanceof f},In=function(n){return On(n)?n.constructor===h:!1},Rn=function(n){return On(n)?n.constructor==y:!1},Mn=function(n){return On(n)?"Object("===n.constructor.toString().trim().slice(9,16):!1},jn=function(n){return On(n)?n instanceof s:!1},Fn=function(n){return On(n)?"HTMLCollection"==n.constructor.name:!1},Ln=function(n){return On(n)?"NodeList"==n.constructor.name:!1},qn=function(n,r){var t,e;return In(r)?t=-1!=n.indexOf(r):Mr(r,function(r,u){e=-1!=n.indexOf(r),e&&(t=e)}),t},En=function(n){return!n.length},Un=function(n){if(On(n)){var r=En(n);return En(n)?!r:!l.keys(n).length}return!1},zn=function(n){return j.test(n)},Wn=function(n){return F.test(n)},_n=function(n){return M.test(n)&&!Wn(n)},Bn=function(n){return L.test(n)},Dn=function(n){return n.split(".")[0]},Pn=function(n){return Yn(n.split("/"))[0]},Jn=function(n,r){var r=r?r:c,n=n.split("/"),n=n[n.length-1];if(qn(n,"."))for(var t=n.split("."),e=t.length,u=0;e>u;u++){var r=r[t[u]];if(!r)return!1}else var r=r[n];return r||!1},Gn=Promise,Qn=Gn?Gn.resolve():null,Zn=Gn?function(n,r){return Qn.then(n),!1}:function(n,r){return Hn(n,0),!1},Hn=function(n,r,t){return setTimeout(function(){return n(),t&&t(),n=null,t=null,!1},r)},Vn=function(n,r,t,e){Xn[r]=function(){for(var e=n.length,u=Xn[r],i=0,o=0;e>o;o++)if(1==u[n[o]])var i=i+1;return i==e?(Zn(t),c.promises[r]=null,!0):!1},Xn[r].call={},e&&(Xn[r].call=e)},Kn=function(n,r){var t=Xn[r];if(Xn[r][n]=1,t){var e=t();e&&(Xn[r]=null)}var e=null;return!1},Xn=(c.promise=function(n,r,t){return t?Vn(n,r,t):Kn(n,r)},{});c.promises=Xn;var Yn=function(n,r){var t;return r||(r=1),t=n?n.splice(n.length-r,r):n[n.length-1]},$n=function(n,r){for(var t,e=0,u=n.length,i=[],o=0;u>o;o++)t=r(n[o],o,u,n),On(t)&&(i[e]=t,e++);return i},nr=function(n,r){for(var t=0,e=n.length;e>t;t++)r(n[t],t,e,n)},rr=function(n,r){for(var t=0,e=[],u=n.length;u>t&&(e[t]=r(n[t],t,u));t++);return e},tr=function(n,r){for(var t=0,e=[],u=n.length;u>t&&!(e[t]=r(n[t],t,u));t++);return e},er=function(n,r,t){for(var e=0,u=[],i=n.length;i>e&&t(u[e]=r(n[e],e,i));e++);return u},ur=function(n,r){for(var t=[],e=0;e<arr.length;)t[e]=r(n[e],e),e++;return t},ir=function(n,r){for(var t=[],e=n.length,u=e-1;u>=0;u--)t[u]=r(n[u],u,e);return t},or=function(n,r){for(var t,e={},u=0,i=b(n),o=i.length;o>u;u++)t=i[u],e[t]=r(n[t],t,o);return e},ar=function(n,r,t){if(!t)var t=r,r=n,n=0;for(var e=[];r>n;n++)e[n]=t(n);return e},cr=w?function(n,r){return w(n,r)}:function(n,r){for(var t=r||{},e=0,u=b(n),i=u.length;i>e;e++){var o=u[e],a=n[o];On(a)&&(t[o]=Mn(a)?cr(a):a)}return t},fr=function(n){return n.charAt(0).toUpperCase()+n.substr(1)},lr=function(n){return n.reduce(function(n,r){return Cn(n)||(n=[n]),Cn(r)||(r=[r]),pr(n,r),n})},sr=function Br(n,r){if(r){if(1===r)return lr(n);for(var t=0;r>t;t++)n=n.reduce(function(n,r,t,e){return n.concat(Cn(r)?r:[r])},[]);return n}return n.reduce(function(n,r,t,e){return n.concat(Cn(r)?Br(r):r)},[])},hr=function(n){for(var r=[],t=0;t<n.length;t++)n[t]&&r.push(n[t]);return r},pr=function(n,r){return N.apply(n,r)};c.pushApply=pr,c.bsearch=function(n,r,t){var e,u=0,i=n.length;if(t)for(;i>u;){e=u+i>>>1;var o=t(n[e],r);if(!o)return e;0>o?u=e+1:i=e}else for(;i>u;){if(e=u+i>>>1,n[e]===r)return e;n[e]<r?u=e+1:i=e}return-1},c.chunk=function(n,t){size=size||1;for(var e=Math.ceil(n.length/size),u=new Array(e),i=0,o=0;e>i;i++)u[i]=r(n,o,o+=size);return u},c.clear=function(n){return n.length=0,n},c.clone=function(n){return n.slice(0)},c.compact=hr,c.countBy=function(n,r){for(var t,e={},u=n.length,i=0;u>i;i++)t=n[i],results=r(t),e[results]||(e[results]=0),e[results]=e[results]+1;return e},c.createRange=function(n,r,t,e){for(var u=t?t:r,i=t?r:0,o=i;u>o;o++){if(e&&o>0)var o=o-1+5,a=o+e;if(n.push(o),e&&a==u)break}return n},c.createRangeTo=function(n,r,t,e){for(var u,i=t?t:r,o=t?r:0,u=o;i>=u&&(e&&u>0&&(u=u-1+5,i_check=u+e),n.push(u),!e||i_check!=i);u++);return n},c.difference=function(n,r){for(var t=[],e=n.length,u=0;e>u;u++){var i=n[u],o=r.indexOf(i);-1==o&&t.push(i)}return t},c.differenceAll=function(n){for(var r,t,e=n.length,u=[],i=0;e>i;i++){t=n[i],sub_len=t.length;for(var o=0;o<sub_len;o++)r=t[o],indexof=u.indexOf(r),-1==indexof?u.push(r):u.splice(indexof,1)}return u},c.dropWhile=function(n,r){for(var t=[],e=n.length,u=0;e>u;u++){var i=n[u],o=r(i,u,n);o||t.push(i)}return t},c.dropRightWhile=function(n,r){for(var t,e=[],u=n.length,i=u-1;i>=0;i--)t=n[i],condition=r(t,i,n),condition||(e[i]=t);return e},c.drop=function(n,r){return n.splice(r,n.length)},c.dropRight=function(n,r){return n.slice(0,n.length-r)},c.eachArray=$n,c.eachRaw=nr,c.eachRight=ir,c.eachDo=$n,c.eachWhile=er,c.whileTrue=rr,c.whileFalse=tr,c.whileLength=ur,c.isEqualArray=function(n,r){if(r===n)return!0;if(!r||r.length!==n.length)return!1;for(var t=0;t<r.length;t++)if(r[t]!==n[t])return!1;return!0},c.first=function(n,r){return r?n.splice(0,r):n[n.length-1]},c.firstFalse=function(n,r){for(var t,e=n.length,u=0;e>u;u++)if(t=n[u],!r(t))return t;return!1},c.firstTrue=function(n,r){for(var t,e=n.length,u=0;e>u;u++)if(t=n[u],r(t))return t;return!1},c.flatten=function(n,r){return sr(n,r)},c.flow=function(n,r){var t=n.length;return function(){for(var e=0;t>e;e++)r=n[e].apply(null,Cn(r)?r:[r]);return r}},c.flowRight=function(n,r){var t=n.length;return function(){for(var e=t-1;e>=0;e--)r=n[e].apply(null,Cn(r)?r:[r]);return r}},c.groupBy=function(n,r){for(var t,e,u={},i=n.length,o=0;i>o;o++)t=n[o],e=r(t),u[e]||(u[e]=[]),u[e].push(t);return u},c.indexBy=function(n,r){var t,e,u={},i=n.length;for(e=0;i>e;e++)t=n[e],u[t[r]]=t;return u},c.initial=function(n,r){for(var t=[],e=n.length-1,u=0;e>u;u++)t[u]=n[u];return t},c.intersect=function(n,r){var t=[],e=r.length;if(!e)return t;n:for(var u=0;u<n.length;u++){var i,o=n[u];if(t.indexOf(o)<0){for(i=0;e>i;i++)if(r[i].indexOf(o)<0)continue n;t.push(o)}}return t},c.invoke=function(n,r,t){for(var e,u=[],i=n.length,o=0;i>o;o++)e=n[o],u.push(e[r].apply(e,t));return u},c.isArrayEmpty=function(n){return 0===n.length},c.largest=function(n){return g.max.apply(g,n)},c.last=function(n,r){return Yn(n,r)},c.left=function(n,r){return n[r]},c.numSort=function(n){return n.sort(t)},c.object=function(n,r){for(var t=n.length,e={},u=0;t>u;u++)e[n[u]]=r[u];return e},c.partition=function(n,r){for(var t,e=[],u=[],i=n.length,o=0;i>o;o++)t=n[o],r(t)?e.push(t):u.push(t);return[e,u]},c.pluck=function(n,r){for(var t,e=[],u=n.length,i=0;u>i;i++)t=n[i][r],t&&e.push(t);return e},c.rNumSort=function(n){return n.sort(e)},c.remove=function(n,r){for(var t=0,e=0,u=0;u<n.length;u++){var i,o=!1;for(i=0;i<r.length;i++)if(n[u]===r[i]){o=!0;break}o?(e||(t=u),++e):e&&(n.splice(t,e),u-=e,e=0)}return e&&n.splice(t,e),n},c.rest=function(n,r){var n=this;return r?n.first(r):(n.shift(),n)},c.right=function(n,r){return n[n.length-1-r]},c.sample=function(n,r){var t=n.length-1;if(r){for(var e,u=[],i=0;r>i;i++)e=n.splice(Math.round(Math.random()*(n.length-1)),1)[0],e&&u.push(e);return u}return n[Math.round(Math.random()*t)]},c.shuffle=function(n){for(var r=a(n),t=[],e=0,u=r.length;u>e;)t.push(r.splice(Math.round(Math.random()*(r.length-1)),1)[0]),e++;return t},c.smallest=function(n){return g.min.apply(g,n)},c.sortedIndex=function(n,r){for(var t,e=0,u=n.length,i=0;u>i;i++)t=n[i],r>t&&(e=i);return e>0&&(e+=1),e},c.sumOf=function(){for(var n=this,r=0,t=n.length,e=0;t>e;e++)r+=n[e];return r},c.take=function(n){return this.slice(0,n)},c.takeWhile=function(n){for(var r,t=this,e=[],u=t.length,i=0;u>i;i++)r=t[i],condition=n(r,i,t),condition&&e.push(r);return e},c.takeRight=function(n){var r=this;return r.splice(r.length-n,n)},c.takeRightWhile=function(n){for(var r,t=this,e=[],u=t.length,i=u-1;i>=0;i--)r=t[i],condition=n(r,i,t),condition&&e.unshift(r);return e},c.union=function(n){var r,t,e,u=i(n);for(t=0;t<arguments.length;t++)for(r=arguments[t],e=0;e<r.length;e++)u.indexOf(r[e])<0&&u.push(r[e]);return u},c.uniq=i,c.without=function(n,r){var t,e,u=[];n:for(t=0;t<n.length;t++){for(e=0;e<arguments.length;e++)if(n[t]===arguments[e])continue n;u.push(n[t])}return u},c.xor=function(n){var r,t,e=arguments.length;if(!e)return i(n);for(t=u(n,arguments[0]),r=1;e>r;r++)t=u(t,arguments[r]);return t},c.zip=function(n){var r,t,e,u=n.length,i=a(arguments),o=i.length,c=[];for(r=0;u>r;r++){for(e=[],e.push(n[r]),t=0;o>t;t++)e.push(i[t][r]);c.push(e)}return c},c.unZip=function(n){var r,t,e,u=n.length,i=[],o=n[0],a=o.length;for(r=0;a>r;r++)i[r]=[];for(t=0;a>t;t++){for(e=0;u>e;e++)i[r].push(n[e][t]);r++}return i};var gr=/%(?![\da-f]{2})/gi,vr=/&/g,mr=/</g,dr=/>/g,yr=/"/g,br=/\//g;c.rangeString=function(n,r,t,e){var u=n.slice(0,r),i=n.slice(t,n.length),o=u+e+i,u=null,n=null,e=null,e=null,i=null;return o},c.lastString=function(n){return n[n.length-1]},c.rightString=function(n,r){return n[n.length-1-r]},c.endsWithString=function(n,r,t){(void 0===t||t>n.length)&&(t=n.length),t-=r.length;var e=n.indexOf(r,t);return-1!==e&&e===t},c.replacePhrase=function(n,r){if(!Cn(n)){if(Mn(n)){for(var t=this,e=0,u=b(n),i=u.length;i>e;e++)var o=u[e],t=t.replacephrase(o,n[o]);return t}var a=new RegExp("\\b"+n+"\\b","gi");return this.replace(a,r)}var n=n.join("|")},c.replaceList=function(n,r){for(var t=this,e=n.length,u=0;e>u;u++)var t=t.replace(n[u],r);var n=null,r=null;return t};var xr=function(n){return decodeURIComponent((n+"").replace(gr,function(){return"%25"}))};c.rawURLDecode=xr;var wr=function(n){return n.replace(vr,"&amp;").replace(mr,"&lt;").replace(dr,"&gt;").replace(yr,"&quot;").replace(br,"&quot;")};c.htmlEntities=wr,c.sanitize=function(n){return wr(xr(n))},c.duc=function(){return decodeURIComponent(this)},c.euc=function(){return encodeURIComponent(this)},c.tokenize=function(n){return n.match(/\S+/g)||[]},c.words=function(n){return n.match(/\w+/g)},c.ucFirst=fr,c.ucFirstAll=function(n){for(var r=n.split(" "),t=r.length,e=0;t>e;e++){var u=r[e];r[e]=u.charAt(0).toUpperCase()+u.substr(1)}return r.join(" ")},c.ucFirstOnly=function(n){return n.charAt(0).toUpperCase()+n.substr(1).toLowerCase()},c.ucFirstOnlyAll=function(n){for(var r=n.split(" "),t=r.length,e=0;t>e;e++){var u=r[e];r[e]=u.charAt(0).toUpperCase()+u.substr(1).toLowerCase()}return r.join(" ")},c.camel=function(n){var r=c.ucfirstall.call(n.replace(R," ").replace(I," "));return(r.charAt(0).toLowerCase()+r.substr(1)).replace(C,"")},c.kebab=function(n){return n.toLowerCase().replace(R," ").replace(C,"-")},c.snake=function(n){return n.toLowerCase().replace(I," ").replace(C,"_")},c.truncate=function(n,r){var t=n,e=t.length;return e>r?t.slice(0,r):t},c.truncateLeft=function(n,r){var t=n,e=t.length;return e>r?t.substr(r,e):t},c.truncateWord=function(n,r){var t=n,e=t.length;if(e>r){for(var u,i,o=0,a="",c=t.split(" "),f=c.length,l=0;f>l&&(u=c[l]+" ",i=u.length+o,r>i);l++)o=i,a+=u;return a.trim()}return t},c.repeat=function(n,r){if(!r)return"";if(1==r)return n;for(var t=n,e=t,u=1;r>u;u++)if(u>0)var e=e+t;return e},c.addParam=function(n,r){var t=n,e=t.length;if(e>0){var u=t[e-1];return-1!=t.indexOf("?")?"?"!=u?t+"&"+r:"?"==u?t+r:t+"&"+r:t+"?"+r}return"?"+r};c.cloneObject=function(){function n(){}function r(r){return n.prototype=r,new n}var t=function(){return r(this)};return t}(),c.copyObject=function(n){return cr(n,{})},c.eachObject=function(n,r){return or(n,r)},c.isEqualObject=x;var Ar=function(n,r){return cr(n.prototype,r)};c.extend=Ar,c.mergeObject=cr,c.stringify=function(n){return A(n)},c.ary=function(n,r,t){var e=function u(){return n.apply(t||u,a(arguments).splice(0,r))};return e},c.chain=function(n,r){if(n.methods){for(var t=0,e=b(r),u=e.length;u>t;t++){var i=e[t],o=r[i];n.methods[i]=function(r,t){return function(){return n.results[t]=r.apply(r,a(arguments)),n.methods}}(o,i)}return n}var c=function f(){return f.results.first=n.apply(f,a(arguments)),f.methods};c.removeChain=function(n){return c.results[n]=null,c},c.removeAllChains=function(){return c.methods={},c},c.values=function(n){if(!n)return c.results;for(var r=[],t=c.results,e=0,u=b(t),i=u.length;i>e;e++){var o=u[e],a=t[o];r.push(a)}return r},c.original=function(){return n.apply(c,a(arguments))},c.results={},c.methods={};for(var t=0,e=b(r),u=e.length;u>t;t++){var i=e[t],o=r[i];c.methods[i]=function(n,r){return function(){return c.results[r]=n.apply(n,a(arguments)),c.methods}}(o,i)}return c},c.curry=function(n){var r=0,t=[],e=n.length,u=function i(){if(t=$n(a(arguments),function(n){r++}),e==r){var u=n.apply(n,t);return r=0,t=[],u}return i};return u},c.curryRight=function(n){var r=0,t=[],e=n.length,u=function i(){if($n(a(arguments),function(n){t.unshift(n),r++}),e==r){var u=n.apply(i,t);return r=0,t=[],u}return i};return u},c.negate=function(n){return function(){return n.apply(n,a(arguments))?!1:!0}},c.once=function(n){var r,t=!1;return function(){return t||(t=!0,r=n.apply(this,a(arguments)),n=null),r}},c.after=function(n,r){var t=0,e=0;return function(){return t>r&&(r=1,e=n.apply(this,a(arguments)),n=null),e}},c.before=function(n,r){var t=0,e=0;return function(){return r>t&&(r=1,e=n.apply(this,a(arguments)),n=null),e}},c.reArg=function(n,r){return function(){return n.apply(n,$n(a(arguments),function(n,t){args.push(order[r[t]])}))}},c.debounce=function(n,r){var t=!1,e=function(){t!==!1&&clearTimeout(t);var e=a(arguments),u=this;t=setTimeout(function(){n.apply(u,e),t=!1,e=null,u=null},r)};return e.run=function(){t&&clearTimeout(t),n.apply(this,a(arguments))},e.clear=function(){t&&(clearTimeout(t),t=!1)},e},c.throttle=function(n,r){var t=!1,e=function u(){if(t!==!1)return!1;var e=a(arguments);t=setTimeout(function(){n.apply(u,e),e=null,t=!1},r)};return e.clear=function(){clearTimeout(t),t=!1},e.run=function(){clearTimeout(t),t=!1,n.apply(e,a(arguments))},e},c.timer=function(n,r){return setTimeout(n,r)},c.interval=function(n,r){return setInterval(n,r)},c.asyncFN=Gn?function(n){Qn.then(n)}:function(n){setTimeout(n,0)},c.wrap=function(n,r,t){if(jn(r))return function(){var e=a(arguments);return[r.apply(t,e),n.apply(t,e)]};if(Mn(r))for(var e=0,u=b(r),i=u.length;i>e;e++){var o=u[e];r[o]=c.wrap.apply(n,[r[o],t])}return r},c.wrapBefore=function(n,r,t){if(jn(r))return function(){var e=a(arguments);return[n.apply(t,e),r.apply(t,e)]};if(Mn(r))for(var e=0,u=b(r),i=u.length;i>e;e++){var o=u[e];r[o]=wrap_before.apply(n,[r[o],t])}return r};c.isZero=function(n){return 0===n},c.isNumberEqual=function(n,r){return n===r},c.isNumberInRange=function(n,r,t){if(t===v)var t=r,r=0;return n>r&&t>n},function(){var n=g.abs,r=g.acos,t=g.acosh,e=g.asin,u=g.asinh,i=g.atan,o=g.atanh,a=g.atan2,f=g.cbrt,l=g.ceil,s=g.clz32,h=g.cos,p=g.cosh,v=g.exp,m=g.expm1,d=g.floor,y=g.fround,b=g.hypot,x=g.imul,w=g.log,A=g.log1p,O=g.log10,S=g.log2,k=g.max,N=g.min,T=g.pow,C=g.random,I=g.round,R=g.sign,M=g.sin,j=g.sinh,F=g.sqrt,L=g.tan,q=g.tanh,E=g.trunc;c.add=function(n,r){return n+r},c.minus=function(n,r){return n-r},c.divide=function(n,r){return n/r},c.multiple=function(n,r){return n*r},c.remainder=function(n,r){return n%r},c.increment=function(n){return n+1},c.deduct=function(n){return n-1},c.abs=n,c.acos=r,c.acosh=t,c.asin=e,c.asinh=u,c.atan=i,c.atanh=o,c.atan2=a,c.cbrt=f,c.ceil=l,c.clz32=s,c.cos=h,c.cosh=p,c.exp=v,c.expm1=m,c.floor=d,c.fround=y,c.hypot=b,c.imul=x,c.log=w,c.log1p=A,c.log10=O,c.log2=S,c.max=k,c.min=N,c.pow=T,c.randomArbitrary=function(n,r){if(!r)var r=0;return C()*(n-r)+r},c.randomInt=function(n,r){if(!r)var r=0;return d(C()*(n-r))+r},c.random=C,c.round=I,c.sign=R,c.sin=M,c.sinh=j,c.sqrt=F,c.tan=L,c.tanh=q,c.trunc=E}();var Or=function(n){Zn(n)};c.async=function(n){jn(n)?Zn(n):Cn(n)?$n(n,Or):or(n,Or)};var Sr=function(){var n=function(n,r){return n?On(r)?Sr[n]=r:Sr[n]:Sr};return n}();c.cache=Sr,c.cacheToggle=function(n,r,t){return Sr[n]===r?Sr[n]=t:Sr[n]=r};var kr=console.log,Nr=console,Tr=function(n,r){var t=[n];r&&(t[0]="%c"+t[0],t.push(Ir[r]+"font-size:13px;padding:2px 5px;border-radius:3px;")),kr.apply(Nr,t)},Cr=function(n,r){return"color:"+n+";background:"+r+";"},Ir={notify:Cr("#01c690","#0e2a36"),warning:Cr("#ebb227","#262626"),important:Cr("#ffe4ea","#dc3153")},Rr=function(n,r,t){Ir[n]=Cr(r,t)};c.console=Tr,c.addConsoleTheme=Rr;var Mr=function(n,r,t){if(Cn(n))var e=$n(n,r);else if(Mn(n))var e=or(n,r);else if(Rn(n))var e=ar(n,r,t);else if(Ln(n)||Fn(n))var e=$n(a(n),r);else var e=or(n,r);return e};c.each=Mr,c.get=Jn,c.hasValue=On,c.has=qn,c.isArray=Cn,c.isString=In,c.isNumber=Rn,c.isObject=ln,c.isPlainObject=Mn,c.isFunction=jn,c.isRegex=en,c.isArgs=un,c.isBool=on,c.isDate=an,c.isError=cn,c.isMap=fn,c.isSet=sn,c.isWeakMap=hn,c.isFloat32=pn,c.isFloat64=gn,c.isInt8=vn,c.isInt16=mn,c.isInt32=dn,c.isUnit8=yn,c.isUnit8clamped=bn,c.isUnit16=xn,c.isUnit32=wn,c.isNative=An,c.isUndefined=Sn,c.isNaN=kn,c.isInt=Nn,c.isNull=Tn,c.isEmpty=Un,c.isFileCSS=zn,c.isFileJSON=Wn,c.isFileJS=_n,c.hasDot=Bn,c.getModelProperty=Pn,c.getModelRootName=Dn,c.json=o,c.weakMap=function(n){return new m(n)},c.map=function(n){return new d(n)};var jr,Fr;m&&(c.weakEvent=jr=new m,c.weakData=Fr=new m),c.e=g.E,c.ln2=g.LN2,c.ln10=g.LN10,c.log2e=g.LOG2E,c.log10e=g.LOG10E,c.pi=g.PI,c.sqrt1_2=g.SQRT1_2,c.sqrt2=g.SQRT2;var Lr=function(){var n=function(n,r,t){if(On(r)){var e=Lr[n]=r;return jn(e)?e=e.bind(e):Mn(e)&&or(e,function(n,r){jn(n)&&(e[r]=n.bind(e))}),e.modelName=n,e}return qn(n,".")?Jn(n,Lr):Lr[n]};return n}(),qr=function(n){return In(n)&&(n=Jn(n,c)),n},Er=function(){if(n){if(n.require&&!n.importScripts)return n.require;if(n.importScripts)return n.importScripts}else if(require)return require}(),Ur=function(n){return In(n)&&(n=Er(n)),n},zr=function(n){var r=n.invoke,t=n.name,e=n.require,u=$n(n["import"],qr),i=function(){var n;return arguments.length>0?(n=a(u),pr(n,arguments)):n=u,r.apply(i,n)}.bind(i);return t&&(Lr[t]=i),e&&pr(u,$n(e,Ur)),i};c.model=Lr,c.define=zr,c.keys=b,c.getPropDescrip=T,c.assign=w;var Wr=function Dr(n){return Dr[n]},_r=function(n,r){var t=Wr[n]={},e=t.process=r||{},u=t.run=function(n){n?e[n]():or(e,function(n){n()})},i=t.add=function(n){or(n,function(n,r){e[r]=n.bind(t)})},o=t.end=function(){t=null,e=null,u=null,o=null,i=null,t[n]=null};or(t,function(n,r){jn(n)&&(t[r]=n.bind(t))}),or(e,function(n,r){jn(n)&&(e[r]=n.bind(t))})};return c.createService=_r,c.service=Wr,c.timerClear=function(n){return clearTimeout(n)},c.intervalClear=function(n){return clearInterval(n)},c.clearTimers=function(){for(var n=setTimeout(function(){},0),r=0;n>r;r++)clearTimeout(r)},c.clearIntervals=function(){for(var n=setInterval(function(){},1e3),r=0;n>=r;r++)clearInterval(r)},c.toArray=a,c.toggle=function(n,r,t){return n===r?t:r},c.lucy={name:"Lucy",version:1,platform:"stable"},Tr("Lucy v"+c.lucy.version+" "+c.lucy.platform,"notify"),c};