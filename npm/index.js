/* LUCY by ARITY 2.2.1 - ARITY.COMPANY - SENTIVATE.COM */(function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self,e.$=t())})(this,function(){'use strict';var e=Math.max,t=Math.min;let n;const i=(...e)=>n(...e);i.superMethod=e=>{n=e};const r=Object,s=r.keys,a=r.is,l=r.assign,c=r.getOwnPropertyDescriptor,d=r.defineProperty,p=r.getOwnPropertyNames,o=e=>s(e).length;l(i,{assign:l,defineProperty:d,getOwnPropertyDescriptor:c,getOwnPropertyNames:p,is:a,keys:s,objectSize:o});const u=Array,h=u.from;l(i,{toArray:h});const y=Reflect.apply;l(i,{apply:y});const g=function(e){return void 0===e},m=e=>null===e,f=e=>!g(e)&&!m(e),k=e=>t=>!!f(t)&&t.constructor===e,A=/\.|\+/,b=Array.isArray,x=k(String),O=k(Number),w=e=>!!f(e)&&"Object("===e.constructor.toString().trim().slice(9,16),j=e=>!!f(e)&&e instanceof Function,S=e=>!!e.length,v=e=>t=>!!f(t)&&e.test(t),C=v(/\.css$/),M=v(/\.json$/),N=v(/\.js$/),F=v(/\.html$/),I=v(/\./),R=/\.([0-9a-z]+)/;l(i,{getFileExtension:e=>{const t=e.match(R);if(t)return t[1]},has:(e,...t)=>e.includes(...t),hasDot:I,hasLength:S,hasValue:f,isArray:b,isBoolean:e=>"Boolean"===e.constructor.name,isDate:e=>e instanceof Date,isDecimal:e=>A.test(e.toString()),isEmpty:e=>x(e)||b(e)?!S(e):w(e)?!o(e):!f(e),isFileCSS:C,isFileHTML:F,isFileJS:N,isFileJSON:M,isFunction:j,isNull:m,isNumber:O,isPlainObject:w,isRegExp:e=>e instanceof RegExp,isString:x,isUndefined:g});const E=(e,t)=>{const n=e.length;for(let i=0;i<n;i++)t(e[i],i,e,n);return e},U=(e,t)=>{const n=e.length;for(let i=n-1;0<=i;i--)t(e[i],i,e,n);return e},L=(e,t)=>{const n=e.length;for(let i=0;i<n;i++)if(!1===t(e[i],i,e,n))return!1;return!0},P=(e,t,n=[])=>(E(e,(e,i,r,s)=>{!0===t(e,i,n,r,s)&&n.push(e)}),n),D=(e=>(t,n,i=[])=>(e(t,(e,t,r,s)=>{i[t]=n(e,t,i,r,s)}),i))(E),B=(e,t,n=[])=>(E(e,(e,i,r,s)=>{const a=t(e,i,n,r,s);f(a)&&n.push(a)}),n);l(i,{compactMapArray:B,eachArray:E,eachArrayRight:U,filterArray:P,mapArray:D,mapArrayRight:(e,t,n=[])=>{let i=0;const r=e.length;for(let s=r-1;0<=s;s--)n[i]=t(e[s],s,e,r),i++;return n},mapWhile:(e,t,n=[])=>{const i=e.length;for(let r=0;r<i;r++){const s=t(e[r],r,n,e,i);if(!1===s)break;n[r]=s}return n},whileArray:L});const q=e=>`[object ${e}]`,z=e=>t=>!!f(t)&&t.toString()===e;E(["Arguments","Map","Set","WeakMap"],e=>{i[`is${e}`]=z(q(e))});E(["ArrayBuffer","Float32Array","Float64Array","Int8Array","Int16Array","Int32Array","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array"],e=>{i[`is${e}`]=t=>!!f(t)&&t.constructor.name===e});l(i,{asyncEach:async(e,t)=>{const n=e.length;for(let i=0;i<n;i++){const r=e[i];await r(t,i,e,n)}return e}});const K=e=>b(e)?e:[e];l(i,{ensureArray:K});const T=e=>e.reduce((e,t)=>e.concat(b(t)?T(t):t),[]);l(i,{flatten:(e,t=1)=>{let n=e;for(let r=0;r<t;r++)n=n.reduce((e,t)=>e.concat(K(t)),[]);return n},flattenDeep:T});l(i,{remove:(e,...t)=>{let n=e.length;for(let i=0;i<n;i++){const r=e[i];t.includes(r)&&(e.splice(i,1),i--,n--)}return e},removeBy:(e,t)=>{let n=e.length;for(let i=0;i<n;i++){const r=e[i];t(r,i)&&(e.splice(i,1),i--,n--)}return e}});l(i,{chunk:(e,t=1)=>{const n=[];let i=0;return e.forEach((e,r)=>{r%t||(n.push([]),r&&i++),n[i].push(e)}),n}});l(i,{rest:e=>e.slice(1,e.length)});const W=e=>(e.length=0,e);l(i,{clear:W});l(i,{right:(e,t)=>e[e.length-1-t]});l(i,{cloneArray:e=>e.slice()});const Z=Math,$=Z.floor,J=Z.random,V=(e,t=0)=>$(J()*(e-t))+t;l(i,{add:(e,t)=>e+t,deduct:e=>e-1,divide:(e,t)=>e/t,increment:e=>e+1,minus:(e,t)=>e-t,multiply:(e,t)=>e*t,randomArbitrary:(e,t=0)=>J()*(e-t)+t,randomInt:V,remainder:(e,t)=>e%t});const H=(e,t=e.length)=>{if(1>=e.length)return h(e);const n=h(e);let i,r,s=0;for(;s<t;)i=V(n.length-1,0),r=n[s],n[s]=n[i],n[i]=r,s++;return n};l(i,{shuffle:H});const _=(e,t=1)=>{if(!e)return!1;const n=e.length;if(n===t||t>n)return H(e);if(1===t)return[e[V(n-1,0)]];const i=[],r={};let s,a=0;for(;a<t;)s=V(e.length-1,0),r[s]||(i.push(e[s]),r[s]=!0,a++);return i};l(i,{sample:_});l(i,{compact:e=>e.filter(e=>(!x(e)||e.length)&&e)});l(i,{initial:e=>e.slice(0,e.length-1)});l(i,{smallest:e=>t(...e)});const G=(e,t,n)=>{const i=[];for(let r=e;r<t;)i.push(r),r+=n;return i},Q=(e,t,n)=>{const i=0>n?-1*n:n,r=[];for(let s=e;s>t;)r.push(s),s-=i;return r};l(i,{range:(e,t,n=1)=>e<t?G(e,t,n):Q(e,t,n)});l(i,{intersect:(e,...t)=>B(e,e=>{const n=L(t,t=>t.includes(e));if(n)return e})});l(i,{difference:(e,...t)=>{const n=T(t);return B(e,e=>{if(!n.includes(e))return e})}});const X=(e,t,n=e.length)=>e.splice(t,n);l(i,{drop:X,dropRight:(e,t,n=e.length)=>X(e,0,n-t)});const Y=(e,t)=>e.length===t.length&&L(e,(e,n)=>t[n]===e);l(i,{isMatchArray:Y});l(i,{sortedIndex:(e,t)=>{let n=0;return L(e,(e,i)=>(n=i,!!(t>e))),n}});l(i,{largest:t=>e(...t)});l(i,{sum:e=>e.reduce((e,t)=>e+t,0)});const ee=async(e,t)=>{const n=e.length;for(let i=0;i<n;i++)await t(e[i],i,e,n);return e},te=async(e,t)=>{const n=e.length;for(let i=n-1;0<=i;i--)await t(e[i],i,e,n);return e};l(i,{eachAsync:ee,eachAsyncRight:te});l(i,{last:(e,t)=>{const n=e.length;return t?e.slice(n-t,n):e[n-1]}});l(i,{take:(e,t=1)=>e.slice(0,t),takeRight:(e,t=1)=>{const n=e.length;return e.slice(n-t,n)}});const ne=async(e,t)=>{const n=[];return await ee(e,async(e,i,r)=>{n[i]=await t(e,i,r)}),n};l(i,{mapAsync:ne});const ie=(e,t,n)=>n.indexOf(e)===t,re=(e,t,n)=>e!==n[t-1],se=(e,t)=>t?e.filter(re):e.filter(ie);l(i,{unique:se});l(i,{union:(...e)=>se(T(e))});l(i,{compactMapAsync:async(e,t)=>{const n=[];let i;return await ee(e,async(e,r,s)=>{i=await t(e,r,n,s),f(i)&&n.push(i)}),n}});const ae=(e,t)=>e-t;l(i,{numSort:e=>e.sort(ae)});l(i,{arrayToObject:(e,t)=>{const n={};return E(e,(e,i)=>{n[t[i]]=e}),n}});l(i,{without:(e,t)=>e.filter(e=>!t.includes(e))});l(i,{partition:(e,t)=>{const n=[];return[B(e,e=>t(e)?e:void n.push(e)),n]}});l(i,{xor:(...e)=>{const t=[];return E(e,e=>{E(se(e),e=>{t.includes(e)?t.splice(t.indexOf(e),1):t.push(e)})}),t}});l(i,{unZip:e=>e[0].map((t,n)=>e.map(e=>e[n])),zip:(...e)=>e[0].map((t,n)=>e.map(e=>e[n]))});l(i,{first:(e,t)=>t?e.slice(0,t):e[0]});const le=(e,t)=>t-e;l(i,{rNumSort:e=>e.sort(le)});const ce=(e,t,n)=>{const i=n?e:0,r=n?t:e;for(let s=i;s<r;s++)(n||t)(s,i,r)};l(i,{times:ce,timesMap:(e,t,n,i=[])=>{const r=n?e:0,s=n?t:e;let a;return ce(r,s,e=>{a=(n||t)(e,r,s,i),f(a)&&i.push(a)}),i}});const de=(e,t,n=!0)=>{const i=n?e:[...e];return i.sort((e,n)=>n[t]?e[t]?e[t]<n[t]?1:e[t]>n[t]?-1:0:1:-1)};l(i,{getNewest:(e,t)=>de(e,t,!1)[0],sortNewest:de});const pe=(e,t="id",n=!0)=>{const i=n?e:[...e];return i.sort((e,n)=>n[t]?e[t]?e[t]<n[t]?-1:e[t]>n[t]?1:0:-1:1)};l(i,{getOldest:(e,t="id")=>pe(e,t)[0],sortOldest:pe});l(i,{groupBy:(e,t)=>{const n={};return E(e,e=>{const i=t(e);n[i]||(n[i]=[]),n[i].push(e)}),n}});const oe=(e,t)=>{let n=0;return E(e,e=>{e[t]&&n++}),n},ue=(e,t)=>{let n=0;return E(e,e=>{e[t]||n++}),n};l(i,{countBy:(e,t)=>{const n={};let i;return E(e,e=>{i=t(e),n[i]||(n[i]=0),n[i]++}),n},countKey:oe,countWithoutKey:ue});l(i,{indexBy:(e,t="id")=>{const n={};return E(e,e=>{n[e[t]]=e}),n}});l(i,{pluck:(e,t)=>D(e,e=>{const n=e[t];return n})});const he=(e,t)=>D(t,t=>e[t]);l(i,{pluckObject:he});l(i,{pluckValues:(e,t)=>D(e,e=>he(e,t))});l(i,{invoke:(e,t,n)=>D(e,(e,i)=>e[t](n,i))});l(i,{invokeAsync:(e,t,n)=>ne(e,async(e,i)=>e[t](n,i))});const ye=(e,t,n,i,r)=>{if(e[r]===i)return!0};l(i,{findIndex:(e,t,n="id")=>{const i=e.findIndex((i,r)=>ye(i,r,e,t,n));return-1!==i&&i},findItem:(e,t,n="id")=>{const i=e.find((i,r)=>ye(i,r,e,t,n));return-1!==i&&i}});l(i,{sortAlphabetical:(e,t)=>e.sort((e,n)=>{const i=e[t],r=n[t];return i<r?-1:i>r?1:0})});l(i,{ary:(e,t)=>(...n)=>e(...n.splice(0,t))});l(i,{curry:(e,t=e.length)=>{const n=[],i=(...r)=>{if(n.push(...r),n.length===t){const t=e(...n);return W(n),t}return i};return i},curryRight:(e,t=e.length)=>{const n=[],i=(...r)=>{if(n.unshift(...r),n.length===t){const t=e(...n);return W(n),t}return i};return i}});l(i,{after:(e,t)=>{let n,i=e;const r=(...e)=>(null!==i&&i--,0>=i&&(n=t(...e),i=null),n);return r},before:(e,t)=>{let n,i=e;const r=(...e)=>(null!==i&&i--,1<=i?n=t(...e):i=null,n);return r},once:e=>{let t;const n=(...n)=>(f(t)||(t=e(...n)),t);return n}});l(i,{noop:()=>{},stubArray:()=>[],stubFalse:()=>!1,stubObject:()=>({}),stubString:()=>"",stubTrue:()=>!0});const ge=(e,t)=>{const n=s(e);E(n,(i,r,s,a)=>{t(e[i],i,e,a,n)})},me=(e,t)=>{const n=s(e);return L(n,(n,i,r,s)=>t(e[n],n,e,s,r))},fe=(e,t,n={})=>(ge(e,(e,i,r,s,a)=>{!0===t(e,i,n,r,s,a)&&(n[i]=e)}),n),ke=(e,t,n={})=>(ge(e,(e,i,r,s,a)=>{n[i]=t(e,i,n,r,s,a)}),n),Ae=(e,t,n={})=>(ge(e,(e,i,r,s,a)=>{const l=t(e,i,n,s,a);f(l)&&(n[i]=l)}),n);l(i,{compactMapObject:Ae,eachObject:ge,filterObject:fe,mapObject:ke,whileObject:me});const be=(e,t)=>e.forEach(t),xe=(e,t)=>(n,i,r)=>{let s;if(f(n))return s=b(n)?e:w(n)||j(n)?t:n.forEach?be:t,s(n,i,r)},Oe=xe(L,me),we=xe(E,ge),je=xe(P,fe),Se=xe(D,ke),ve=xe(B,Ae);l(i,{compactMap:ve,each:we,eachWhile:Oe,filter:je,map:Se});l(i,{bindAll:(e,t)=>Se(e,e=>j(e)?e.bind(t):e)});l(i,{ifInvoke:(e,...t)=>{if(j(e))return e(...t)}});l(i,{negate:e=>(...t)=>!e(...t)});l(i,{every:Oe});l(i,{over:e=>(...t)=>Se(e,e=>e(...t)),overEvery:e=>(...t)=>Oe(e,e=>e(...t))});const Ce=(e,t)=>setTimeout(e,t),Me=(e,t)=>setInterval(e,t),Ne=(e,t)=>()=>{ce(0,e(()=>{},0),e=>{t(e)})},Fe=Ne(Ce,clearTimeout),Ie=Ne(Me,clearInterval);l(i,{clearIntervals:Ie,clearTimers:Fe,debounce:(e,t)=>{let n=!1;const i=(...i)=>{!1!==n&&clearTimeout(n),n=Ce(()=>{e(...i),n=!1},t)};return i.clear=()=>{n&&(clearTimeout(n),n=!1)},i},interval:Me,throttle:(e,t)=>{let n,i=!1;const r=(...r)=>i?void(n=!0):void(e(...r),i=Ce(()=>{n&&e(...r),i=!1},t));return r.clear=()=>{clearTimeout(i),i=!1},r},timer:Ce});const Re=(e,t)=>(we(t,(t,n)=>{e.methods[n]=(...n)=>(t(e.value,...n),e.methods)}),e);l(i,{chain:e=>{const t=e=>(t.value=e,t.methods);return l(t,{add(e){return Re(t,e)},done(){const e=t.value;return t.value=null,e},methods:{}}),t.add(e),t}});l(i,{inAsync:async(e,t)=>ee(e,async e=>{await e(t)}),inSync:(e,t)=>we(e,e=>{e(t)})});l(i,{nthArg:(e=0)=>(...t)=>t[e]});l(i,{reArg:(e,t)=>(...n)=>e(...t.map(e=>n[e]))});l(i,{wrap:(e,t)=>(...n)=>t(e,...n)});l(i,{isNumberEqual:(e,t)=>e===t,isNumberInRange:(e,t,n)=>e>t&&e<n,isZero:e=>0===e});const Ee=(e,t)=>{const n=s(e);return L(t,e=>n.includes(e))};l(i,{hasAnyKeys:(e,t)=>{const n=s(e);return!!t.find(e=>n.includes(e))},hasKeys:Ee});l(i,{pick:(e,t,n={})=>(E(t,t=>{n[t]=e[t]}),n)});l(i,{compactKeys:e=>{const t=[];return ge(e,(e,n)=>{e&&t.push(n)}),t}});l(i,{isMatchObject:(e,t)=>{const n=s(e);return!!Y(n,s(t))&&L(n,n=>e[n]===t[n])}});l(i,{unZipObject:e=>{const t=[],n=[];return ge(e,(e,i)=>{t.push(i),n.push(e)}),[t,n]},zipObject:(e,t)=>{const n={};return E(e,(e,i)=>{n[e]=t[i]}),n}});l(i,{invert:(e,t={})=>(ge(e,(e,n)=>{t[e]=n}),t)});l(i,{omit:(e,t)=>fe(e,(e,n)=>!t.includes(n))});const Ue=async(e,t)=>{const n=s(e);return await ee(n,(i,r,s,a)=>t(e[i],i,e,a,n)),e};l(i,{eachObjectAsync:Ue});l(i,{compactMapObjectAsync:async(e,t,n={})=>(await Ue(e,async(e,i,r,s,a)=>{const l=await t(e,i,n,s,a);f(l)&&(n[i]=l)}),n),mapObjectAsync:async(e,t,n={})=>(await Ue(e,async(e,i,r,s,a)=>{n[i]=await t(e,i,n,r,s,a)}),n)});const Le=/[-_]/g,Pe=/ (.)/g;l(i,{camelCase:e=>e.toLowerCase().replace(Pe,e=>e.toUpperCase().replace(/ /g,"")),kebabCase:e=>e.replace(Le," ").trim().toLowerCase().replace(Pe,"-$1"),snakeCase:e=>e.replace(Le," ").trim().toLowerCase().replace(Pe,"_$1"),upperCase:e=>e.replace(Le," ").trim().toUpperCase()});const De=(e,t=1)=>e.substr(t);l(i,{chunkString:(e,t)=>e.match(new RegExp(`(.|[\r\n]){1,${t}}`,"g")),initialString:(e,t=1)=>e.slice(0,-1*t),insertInRange:(e,t,n)=>e.slice(0,t)+n+e.slice(t,e.length),restString:De,rightString:(e,t=1)=>e[e.length-t]});l(i,{replaceList:(e,t,n)=>e.replace(new RegExp("\\b"+t.join("|")+"\\b","gi"),n)});const Be=/%(?![\da-f]{2})/gi,qe=/&/g,ze=/</g,Ke=/>/g,Te=/"/g,We=e=>decodeURIComponent(e.replace(Be,()=>"%25")),Ze=e=>e.replace(qe,"&amp;").replace(ze,"&lt;").replace(Ke,"&gt;").replace(Te,"&quot;");l(i,{htmlEntities:Ze,rawURLDecode:We,sanitize:e=>Ze(We(e))});const $e=/\S+/g,Je=/\w+/g;l(i,{tokenize:e=>e.match($e)||[],words:e=>e.match(Je)||[]});const Ve=(e,t,n)=>{const i=e.split(""),r=i.length;let s,a=n-t;for(;a<r&&0<=a&&(s=i[a]," "!==s);a--);return e.slice(0,a).trim()},He=(e,t,n)=>{const i=e.split(""),r=i.length;let s,a=t;for(;a<r&&0<a&&(s=i[a]," "!==s);a++);return e.substr(a,n).trim()};l(i,{truncate:(e,t)=>{const n=e.length;return n>t?Ve(e,t,n):e},truncateRight:(e,t)=>{const n=e.length;return n>t?He(e,t,n):e}});const _e=/ (.)/g,Ge=e=>e[0].toUpperCase(),Qe=e=>Ge(e)+De(e).toLowerCase();l(i,{upperFirst:e=>Ge(e)+De(e),upperFirstAll:e=>e.replace(_e,e=>e.toUpperCase()),upperFirstLetter:Ge,upperFirstOnly:Qe,upperFirstOnlyAll:e=>Qe(e.toLowerCase()).replace(_e,e=>e.toUpperCase())});const Xe=(e,t,n=!0)=>(we(t,(t,i)=>{w(t)&&w(e[i])?Xe(e[i],t,n):n&&b(t)&&b(e[i])?e[i].push(...t):e[i]=t}),e);l(i,{assignDeep:Xe});const Ye=Function.prototype;l(i,{cacheNativeMethod:function(e){return Ye.call.bind(e)}});l(i,{ifNotEqual:(e,t,n)=>(t&&!f(e[t])&&(e[t]=n),e)});const et=(e,t)=>{if(e===t)return!0;if(e.toString()===t.toString())if(w(e)){const n=s(e);if(Ee(t,n))return L(n,n=>et(e[n],t[n]))}else if(b(e)&&e.length===t.length)return L(e,(e,n)=>et(e,t[n]));return!1};l(i,{isEqual:et});l(i,{propertyMatch:(e,t,n=s(e))=>L(n,n=>et(e[n],t[n]))});const tt=/\.|\[/,nt=/]/g,it=e=>e.replace(nt,"").split(tt);l(i,{toPath:it});let rt=0;const st=[],at=()=>{let e=st.shift(st);return f(e)||(e=rt,rt++),e};at.free=e=>{st.push(e)},l(i,{uid:at});const lt=(e,t=i)=>{let n=t;return L(it(e),e=>(n=n[e],f(n))),n};l(i,{get:lt});const ct=JSON,dt=ct.parse,pt=ct.stringify;l(i,{jsonParse:dt,stringify:pt});const ot=(e,t)=>(f(t)&&(ot[e]=t),lt(e,ot));i.superMethod(ot),l(i,{model:ot});l(i,{promise:e=>new Promise(e)});l(i,{toggle:(e,t,n)=>et(t,e)?n:t});const ut=e=>(...t)=>n=>{let i=n;return e(t,e=>{i=e(i)}),i},ht=ut(E),yt=ut(U);l(i,{flow:ht,flowRight:yt});const gt=e=>(...t)=>async n=>{let i=n;return await e(t,async e=>{i=await e(i)}),i},mt=gt(ee),ft=gt(te);return l(i,{flowAsync:mt,flowAsyncRight:ft}),i});
