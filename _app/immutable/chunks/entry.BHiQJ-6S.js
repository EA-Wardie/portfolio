import{ao as mt}from "./runtime.oTXMfI1T.js";import{w as bt}from "./index.M4ZDdpZJ.js";import{a as de,b as U}from "./paths.CPLr7IEa.js";import{v as he}from "./environment.CZLhA_4V.js";new URL("sveltekit-internal://");function pe(t, n){return t==="/"||n==="ignore"?t:n==="never"?t.endsWith("/")?t.slice(0,-1):t:n==="always"&&!t.endsWith("/")?t+"/":t}function ge(t){return t.split("%25").map(decodeURI).join("%25")}function me(t){for(const n in t)t[n]=decodeURIComponent(t[n]);return t}function dt({href:t}){return t.split("#")[0]}const ye=["href","pathname","search","toString","toJSON"];function _e(t, n, e){const r=new URL(t);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a, o){if(o==="get"||o==="getAll"||o==="has")return s=>(e(s),a[o](s));n();const i=Reflect.get(a,o);return typeof i=="function"?i.bind(a):i}}),enumerable:!0,configurable:!0});for(const a of ye)Object.defineProperty(r,a,{get(){return n(),t[a]},enumerable:!0,configurable:!0});return r}const we="/__data.json",ve=".html__data.json";function be(t){return t.endsWith(".html")?t.replace(/\.html$/,ve):t.replace(/\/$/,"")+we}function Ae(...t){let n=5381;for(const e of t)if(typeof e=="string"){let r=e.length;for(; r;)n=n*33^e.charCodeAt(--r)}else if(ArrayBuffer.isView(e)){const r=new Uint8Array(e.buffer,e.byteOffset,e.byteLength);let a=r.length;for(; a;)n=n*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function ke(t){const n=atob(t),e=new Uint8Array(n.length);for(let r=0; r<n.length; r++)e[r]=n.charCodeAt(r);return e.buffer}const Bt=window.fetch;window.fetch=(t, n)=>((t instanceof Request?t.method:(n==null?void 0:n.method)||"GET")!=="GET"&&q.delete(At(t)),Bt(t,n));const q=new Map;function Ee(t, n){const e=At(t,n),r=document.querySelector(e);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&q.set(e,{body:a,init:o,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=ke(a)),Promise.resolve(new Response(a,o))}return window.fetch(t,n)}function Se(t, n, e){if(q.size>0){const r=At(t,e),a=q.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(e==null?void 0:e.cache))return new Response(a.body,a.init);q.delete(r)}}return window.fetch(n,e)}function At(t, n){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(n!=null&&n.headers||n!=null&&n.body){const a=[];n.headers&&a.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&a.push(n.body),r+=`[data-hash="${Ae(...a)}"]`}return r}const Re=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ie(t){const n=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${Ue(t).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return n.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,f)=>{if(f%2){if(c.startsWith("x+"))return ht(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return ht(String.fromCharCode(...c.slice(2).split("-").map(l=>parseInt(l,16))));const d=Re.exec(c),[,h,g,u,m]=d;return n.push({name:u,matcher:m,optional:!!h,rest:!!g,chained:g?f===1&&i[0]==="":!1}),g?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return ht(c)}).join("")}).join("")}/?$`),params:n}}function Le(t){return!/^\([^)]+\)$/.test(t)}function Ue(t){return t.slice(1).split("/").filter(Le)}function Pe(t, n, e){const r={},a=t.slice(1),o=a.filter(s=>s!==void 0);let i=0;for(let s=0; s<n.length; s+=1){const c=n[s];let f=a[s-i];if(c.chained&&c.rest&&i&&(f=a.slice(s-i,s+1).filter(d=>d).join("/"),i=0),f===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||e[c.matcher](f)){r[c.name]=f;const d=n[s+1],h=a[s+1];d&&!d.rest&&d.optional&&h&&c.chained&&(i=0),!d&&!h&&Object.keys(r).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function ht(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Te({nodes:t,server_loads:n,dictionary:e,matchers:r}){const a=new Set(n);return Object.entries(e).map(([s,[c,f,d]])=>{const{pattern:h,params:g}=Ie(s),u={id:s,exec: m=>{const l=h.exec(m);if(l)return Pe(l,g,r)},errors:[1,...d||[]].map(m=>t[m]),layouts:[0,...f||[]].map(i),leaf:o(c)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u});function o(s){const c=s<0;return c&&(s=~s),[c,t[s]]}function i(s){return s===void 0?s:[a.has(s),t[s]]}}function Gt(t, n=JSON.parse){try{return n(sessionStorage[t])}catch{}}function xt(t, n, e=JSON.stringify){const r=e(n);try{sessionStorage[t]=r}catch{}}const qt="sveltekit:snapshot",Mt="sveltekit:scroll",Ht="sveltekit:states",xe="sveltekit:pageurl",$="sveltekit:history",H="sveltekit:navigation",X={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},W=location.origin;function Kt(t){if(t instanceof URL)return t;let n=document.baseURI;if(!n){const e=document.getElementsByTagName("base");n=e.length?e[0].href:document.URL}return new URL(t,n)}function kt(){return{x:pageXOffset,y:pageYOffset}}function O(t, n){return t.getAttribute(`data-sveltekit-${n}`)}const Nt={...X,"":X.hover};function Yt(t){let n=t.assignedSlot??t.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function Jt(t, n){for(; t&&t!==n;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=Yt(t)}}function yt(t, n){let e;try{e=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const r=t instanceof SVGAElement?t.target.baseVal:t.target,a=!e||!!r||rt(e,n)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(e==null?void 0:e.origin)===W&&t.hasAttribute("download");return{url:e,external:a,target:r,download:o}}function Z(t){let n=null,e=null,r=null,a=null,o=null,i=null,s=t;for(; s&&s!==document.documentElement;)r===null&&(r=O(s,"preload-code")),a===null&&(a=O(s,"preload-data")),n===null&&(n=O(s,"keepfocus")),e===null&&(e=O(s,"noscroll")),o===null&&(o=O(s,"reload")),i===null&&(i=O(s,"replacestate")),s=Yt(s);function c(f){switch(f){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Nt[r??"off"],preload_data:Nt[a??"off"],keepfocus:c(n),noscroll:c(e),reload:c(o),replace_state:c(i)}}function Ct(t){const n=bt(t);let e=!0;function r(){e=!0,n.update(i=>i)}function a(i){e=!1,n.set(i)}function o(i){let s;return n.subscribe(c=>{(s===void 0||e&&c!==s)&&i(s=c)})}return{notify:r,set:a,subscribe:o}}function Ne(){const{set:t,subscribe:n}=bt(!1);let e;async function r(){clearTimeout(e);try{const a=await fetch(`${de}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==he;return i&&(t(!0),clearTimeout(e)),i}catch{return!1}}return{subscribe:n,check:r}}function rt(t, n){return t.origin!==W||!t.pathname.startsWith(n)}function Ot(t){const n=Oe(t),e=new ArrayBuffer(n.length),r=new DataView(e);for(let a=0; a<e.byteLength; a++)r.setUint8(a,n.charCodeAt(a));return e}const Ce="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Oe(t){t.length%4===0&&(t=t.replace(/==?$/,""));let n="",e=0,r=0;for(let a=0; a<t.length; a++)e<<=6,e|=Ce.indexOf(t[a]),r+=6,r===24&&(n+=String.fromCharCode((e&16711680)>>16),n+=String.fromCharCode((e&65280)>>8),n+=String.fromCharCode(e&255),e=r=0);return r===12?(e>>=4,n+=String.fromCharCode(e)):r===18&&(e>>=2,n+=String.fromCharCode((e&65280)>>8),n+=String.fromCharCode(e&255)),n}const je=-1,$e=-2,De=-3,Fe=-4,Ve=-5,Be=-6;function sn(t, n){return Wt(JSON.parse(t),n)}function Wt(t, n){if(typeof t=="number")return a(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const e=t,r=Array(e.length);function a(o, i=!1){if(o===je)return;if(o===De)return NaN;if(o===Fe)return 1/0;if(o===Ve)return-1/0;if(o===Be)return-0;if(i)throw new Error("Invalid input");if(o in r)return r[o];const s=e[o];if(!s||typeof s!="object")r[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],f=n==null?void 0:n[c];if(f)return r[o]=f(a(s[1]));switch(c){case"Date":r[o]=new Date(s[1]);break;case"Set":const d=new Set;r[o]=d;for(let u=1; u<s.length; u+=1)d.add(a(s[u]));break;case"Map":const h=new Map;r[o]=h;for(let u=1; u<s.length; u+=2)h.set(a(s[u]),a(s[u+1]));break;case"RegExp":r[o]=new RegExp(s[1],s[2]);break;case"Object":r[o]=Object(s[1]);break;case"BigInt":r[o]=BigInt(s[1]);break;case"null":const g=Object.create(null);r[o]=g;for(let u=1; u<s.length; u+=2)g[s[u]]=a(s[u+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const u=globalThis[c],m=s[1],l=Ot(m),y=new u(l);r[o]=y;break}case"ArrayBuffer":{const u=s[1],m=Ot(u);r[o]=m;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);r[o]=c;for(let f=0; f<s.length; f+=1){const d=s[f];d!==$e&&(c[f]=a(d))}}else{const c={};r[o]=c;for(const f in s){const d=s[f];c[f]=a(d)}}return r[o]}return a(0)}const zt=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...zt];const Ge=new Set([...zt]);[...Ge];function qe(t){return t.filter(n=>n!=null)}class at{constructor(n, e){this.status=n,typeof e=="string"?this.body={message:e}:e?this.body=e:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class Xt{constructor(n, e){this.status=n,this.location=e}}class Et extends Error{constructor(n, e, r){super(r),this.status=n,this.text=e}}const Me="x-sveltekit-invalidated",He="x-sveltekit-trailing-slash";function Q(t){return t instanceof at||t instanceof Et?t.status:500}function Ke(t){return t instanceof Et?t.text:"Internal Error"}const C=Gt(Mt)??{},K=Gt(qt)??{},T={url:Ct({}),page:Ct({}),navigating:bt(null),updated:Ne()};function St(t){C[t]=kt()}function Ye(t, n){let e=t+1;for(; C[e];)delete C[e],e+=1;for(e=n+1; K[e];)delete K[e],e+=1}function F(t){return location.href=t.href,new Promise(()=>{})}function jt(){}let ot,_t,tt,P,wt,B;const Zt=[],et=[];let I=null;const Qt=[],Je=[];let j=[],_={branch:[],error:null,url:null},Rt=!1,nt=!1,$t=!0,Y=!1,G=!1,te=!1,st=!1,N,E,L,S,V;const M=new Set;let pt;async function cn(t, n, e){var a,o;document.URL!==location.href&&(location.href=location.href),B=t,ot=Te(t),P=document.documentElement,wt=n,_t=t.nodes[0],tt=t.nodes[1],_t(),tt(),E=(a=history.state)==null?void 0:a[$],L=(o=history.state)==null?void 0:o[H],E||(E=L=Date.now(),history.replaceState({...history.state,[$]:E,[H]:L},""));const r=C[E];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),e?await en(wt,e):Qe(location.href,{replaceState:!0}),tn()}async function We(){if(await(pt||(pt=Promise.resolve())),!pt)return;pt=null;const t=lt(_.url,!0);I=null;const n=V={},e=t&&await Ut(t);if(!(!e||n!==V)){if(e.type==="redirect")return it(new URL(e.location,_.url).href,{},1,n);e.props.page&&(S=e.props.page),_=e.state,ee(),N.$set(e.props)}}function ee(){Zt.length=0,st=!1}function ne(t){et.some(n=>n==null?void 0:n.snapshot)&&(K[t]=et.map(n=>{var e;return(e=n==null?void 0:n.snapshot)==null?void 0:e.capture()}))}function re(t){var n;(n=K[t])==null||n.forEach((e, r)=>{var a,o;(o=(a=et[r])==null?void 0:a.snapshot)==null||o.restore(e)})}function Dt(){St(E),xt(Mt,C),ne(L),xt(qt,K)}async function it(t, n, e, r){return z({type:"goto",url:Kt(t),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:e,nav_token:r,accept:()=>{n.invalidateAll&&(st=!0)}})}async function ze(t){if(t.id!==(I==null?void 0:I.id)){const n={};M.add(n),I={id:t.id,token:n,promise:Ut({...t,preload:n}).then(e=>(M.delete(n),e.type==="loaded"&&e.state.error&&(I=null),e))}}return I.promise}async function gt(t){const n=ot.find(e=>e.exec(se(t)));n&&await Promise.all([...n.layouts,n.leaf].map(e=>e==null?void 0:e[1]()))}function ae(t, n, e){var o;_=t.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),S=t.props.page,N=new B.root({target:n,props:{...t.props,stores:T,components:et},hydrate:e,sync:!1}),re(L);const a={from:null,to:{params:_.params,route:{id:((o=_.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};j.forEach(i=>i(a)),nt=!0}function J({url:t,params:n,branch:e,status:r,error:a,route:o,form:i}){let s="never";if(U&&(t.pathname===U||t.pathname===U+"/"))s="always";else for(const u of e)(u==null?void 0:u.slash)!==void 0&&(s=u.slash);t.pathname=pe(t.pathname,s),t.search=t.search;const c={type:"loaded",state:{url:t,params:n,branch:e,error:a,route:o},props:{constructors:qe(e).map(u=>u.node.component),page:S}};i!==void 0&&(c.props.form=i);let f={},d=!S,h=0;for(let u=0; u<Math.max(e.length,_.branch.length); u+=1){const m=e[u],l=_.branch[u];(m==null?void 0:m.data)!==(l==null?void 0:l.data)&&(d=!0),m&&(f={...f,...m.data},d&&(c.props[`data_${h}`]=f),h+=1)}return(!_.url||t.href!==_.url.href||_.error!==a||i!==void 0&&i!==S.form||d)&&(c.props.page={error:a,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(t),form:i??null,data:d?f:S.data}),c}async function It({loader:t,parent:n,url:e,params:r,route:a,server_data_node:o}){var d,h,g;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},f=await t();if((d=f.universal)!=null&&d.load){let u=function(...l){for(const y of l){const{href:b}=new URL(y,e);c.dependencies.add(b)}};const m={route:new Proxy(a,{get:(l, y)=>(s&&(c.route=!0),l[y])}),params:new Proxy(r,{get:(l, y)=>(s&&c.params.add(y),l[y])}),data:(o==null?void 0:o.data)??null,url:_e(e,()=>{s&&(c.url=!0)}, l=>{s&&c.search_params.add(l)}),async fetch(l, y){let b;l instanceof Request?(b=l.url,y={body:l.method==="GET"||l.method==="HEAD"?void 0:await l.blob(),cache:l.cache,credentials:l.credentials,headers:l.headers,integrity:l.integrity,keepalive:l.keepalive,method:l.method,mode:l.mode,redirect:l.redirect,referrer:l.referrer,referrerPolicy:l.referrerPolicy,signal:l.signal,...y}):b=l;const R=new URL(b,e);return s&&u(R.href),R.origin===e.origin&&(b=R.href.slice(e.origin.length)),nt?Se(b,R.href,y):Ee(b,y)},setHeaders:()=>{},depends:u,parent(){return s&&(c.parent=!0),n()},untrack(l){s=!1;try{return l()}finally{s=!0}}};i=await f.universal.load.call(null,m)??null}return{node:f,loader:t,server:o,universal:(h=f.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((g=f.universal)==null?void 0:g.trailingSlash)??(o==null?void 0:o.slash)}}function Ft(t, n, e, r, a, o){if(st)return!0;if(!a)return!1;if(a.parent&&t||a.route&&n||a.url&&e)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(o[i]!==_.params[i])return!0;for(const i of a.dependencies)if(Zt.some(s=>s(new URL(i))))return!0;return!1}function Lt(t, n){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?n??null:null}function Xe(t, n){if(!t)return new Set(n.searchParams.keys());const e=new Set([...t.searchParams.keys(),...n.searchParams.keys()]);for(const r of e){const a=t.searchParams.getAll(r),o=n.searchParams.getAll(r);a.every(i=>o.includes(i))&&o.every(i=>a.includes(i))&&e.delete(r)}return e}function Vt({error:t,url:n,route:e,params:r}){return{type:"loaded",state:{error:t,url:n,route:e,params:r,branch:[]},props:{page:S,constructors:[]}}}async function Ut({id:t,invalidating:n,url:e,params:r,route:a,preload:o}){if((I==null?void 0:I.id)===t)return M.delete(I.token),I.promise;const{errors:i,layouts:s,leaf:c}=a,f=[...s,c];i.forEach(p=>p==null?void 0:p().catch(()=>{})),f.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let d=null;const h=_.url?t!==_.url.pathname+_.url.search:!1,g=_.route?a.id!==_.route.id:!1,u=Xe(_.url,e);let m=!1;const l=f.map((p, v)=>{var x;const A=_.branch[v],k=!!(p!=null&&p[0])&&((A==null?void 0:A.loader)!==p[1]||Ft(m,g,h,u,(x=A.server)==null?void 0:x.uses,r));return k&&(m=!0),k});if(l.some(Boolean)){try{d=await le(e,l)}catch(p){const v=await D(p,{url:e,params:r,route:{id:t}});return M.has(o)?Vt({error:v,url:e,params:r,route:a}):ct({status:Q(p),error:v,url:e,route:a})}if(d.type==="redirect")return d}const y=d==null?void 0:d.nodes;let b=!1;const R=f.map(async(p, v)=>{var ft;if(!p)return;const A=_.branch[v],k=y==null?void 0:y[v];if((!k||k.type==="skip")&&p[1]===(A==null?void 0:A.loader)&&!Ft(b,g,h,u,(ft=A.universal)==null?void 0:ft.uses,r))return A;if(b=!0,(k==null?void 0:k.type)==="error")throw k;return It({loader:p[1],url:e,params:r,route:a,parent:async()=>{var Tt;const Pt={};for(let ut=0; ut<v; ut+=1)Object.assign(Pt,(Tt=await R[ut])==null?void 0:Tt.data);return Pt},server_data_node:Lt(k===void 0&&p[0]?{type:"skip"}:k??null,p[0]?A==null?void 0:A.server:void 0)})});for(const p of R)p.catch(()=>{});const w=[];for(let p=0; p<f.length; p+=1)if(f[p])try{w.push(await R[p])}catch(v){if(v instanceof Xt)return{type:"redirect",location:v.location};if(M.has(o))return Vt({error:await D(v,{params:r,url:e,route:{id:a.id}}),url:e,params:r,route:a});let A=Q(v),k;if(y!=null&&y.includes(v))A=v.status??A,k=v.error;else if(v instanceof at)k=v.body;else{if(await T.updated.check())return await F(e);k=await D(v,{params:r,url:e,route:{id:a.id}})}const x=await oe(p,w,i);return x?J({url:e,params:r,branch:w.slice(0,x.idx).concat(x.node),status:A,error:k,route:a}):await ce(e,{id:a.id},k,A)}else w.push(void 0);return J({url:e,params:r,branch:w,status:200,error:null,route:a,form:n?void 0:null})}async function oe(t, n, e){for(; t--;)if(e[t]){let r=t;for(; !n[r];)r-=1;try{return{idx:r+1,node:{node:await e[t](),loader:e[t],data:{},server:null,universal:null}}}catch{continue}}}async function ct({status:t,error:n,url:e,route:r}){const a={};let o=null;if(B.server_loads[0]===0)try{const f=await le(e,[!0]);if(f.type!=="data"||f.nodes[0]&&f.nodes[0].type!=="data")throw 0;o=f.nodes[0]??null}catch{(e.origin!==W||e.pathname!==location.pathname||Rt)&&await F(e)}const s=await It({loader:_t,url:e,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Lt(o)}),c={node:await tt(),loader:tt,universal:null,server:null,data:null};return J({url:e,params:a,branch:[s,c],status:t,error:n,route:null})}function lt(t, n){if(!t||rt(t,U))return;let e;try{e=B.hooks.reroute({url:new URL(t)})??t.pathname}catch{return}const r=se(e);for(const a of ot){const o=a.exec(r);if(o)return{id:t.pathname+t.search,invalidating:n,route:a,params:me(o),url:t}}}function se(t){return ge(t.slice(U.length)||"/")}function ie({url:t,type:n,intent:e,delta:r}){let a=!1;const o=ue(_,e,t,n);r!==void 0&&(o.navigation.delta=r);const i={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return Y||Qt.forEach(s=>s(i)),a?null:o}async function z({type:t,url:n,popped:e,keepfocus:r,noscroll:a,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:f=jt,block:d=jt}){const h=lt(n,!1),g=ie({url:n,type:t,delta:e==null?void 0:e.delta,intent:h});if(!g){d();return}const u=E,m=L;f(),Y=!0,nt&&T.navigating.set(g.navigation),V=c;let l=h&&await Ut(h);if(!l){if(rt(n,U))return await F(n);l=await ce(n,{id:null},await D(new Et(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,V!==c)return g.reject(new Error("navigation aborted")),!1;if(l.type==="redirect")if(s>=20)l=await ct({status:500,error:await D(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return it(new URL(l.location,n).href,{},s+1,c),!1;else l.props.page.status>=400&&await T.updated.check()&&await F(n);if(ee(),St(u),ne(m),l.props.page.url.pathname!==n.pathname&&(n.pathname=l.props.page.url.pathname),i=e?e.state:i,!e){const w=o?0:1,p={[$]:E+=w,[H]:L+=w,[Ht]:i};(o?history.replaceState:history.pushState).call(history,p,"",n),o||Ye(E,L)}if(I=null,l.props.page.state=i,nt){_=l.state,l.props.page&&(l.props.page.url=n);const w=(await Promise.all(Je.map(p=>p(g.navigation)))).filter(p=>typeof p=="function");if(w.length>0){let p=function(){j=j.filter(v=>!w.includes(v))};w.push(p),j.push(...w)}N.$set(l.props),te=!0}else ae(l,wt,!1);const{activeElement:y}=document;await mt();const b=e?e.scroll:a?kt():null;if($t){const w=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));b?scrollTo(b.x,b.y):w?w.scrollIntoView():scrollTo(0,0)}const R=document.activeElement!==y&&document.activeElement!==document.body;!r&&!R&&vt(),$t=!0,l.props.page&&(S=l.props.page),Y=!1,t==="popstate"&&re(L),g.fulfil(void 0),j.forEach(w=>w(g.navigation)),T.navigating.set(null)}async function ce(t, n, e, r){return t.origin===W&&t.pathname===location.pathname&&!Rt?await ct({status:r,error:e,url:t,route:n}):await F(t)}function Ze(){let t;P.addEventListener("mousemove", o=>{const i=o.target;clearTimeout(t),t=setTimeout(()=>{r(i,2)},20)});function n(o){r(o.composedPath()[0],1)}P.addEventListener("mousedown",n),P.addEventListener("touchstart",n,{passive:!0});const e=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(gt(i.target.href),e.unobserve(i.target))},{threshold:0});function r(o, i){const s=Jt(o,P);if(!s)return;const{url:c,external:f,download:d}=yt(s,U);if(f||d)return;const h=Z(s);if(!h.reload)if(i<=h.preload_data){const g=lt(c,!1);g&&ze(g)}else i<=h.preload_code&&gt(c.pathname)}function a(){e.disconnect();for(const o of P.querySelectorAll("a")){const{url:i,external:s,download:c}=yt(o,U);if(s||c)continue;const f=Z(o);f.reload||(f.preload_code===X.viewport&&e.observe(o),f.preload_code===X.eager&&gt(i.pathname))}}j.push(a),a()}function D(t, n){if(t instanceof at)return t.body;const e=Q(t),r=Ke(t);return B.hooks.handleError({error:t,event:n,status:e,message:r})??{message:r}}function Qe(t, n={}){return t=Kt(t),t.origin!==W?Promise.reject(new Error("goto: invalid URL")):it(t,n,0)}function ln(){return st=!0,We()}async function fn(t){if(t.type==="error"){const n=new URL(location.href),{branch:e,route:r}=_;if(!r)return;const a=await oe(_.branch.length,e,r.errors);if(a){const o=J({url:n,params:_.params,branch:e.slice(0,a.idx).concat(a.node),status:t.status??500,error:t.error,route:r});_=o.state,N.$set(o.props),mt().then(vt)}}else t.type==="redirect"?it(t.location,{invalidateAll:!0},0):(N.$set({form:null,page:{...S,form:t.data,status:t.status}}),await mt(),N.$set({form:t.data}),t.type==="success"&&vt())}function tn(){var n;history.scrollRestoration="manual",addEventListener("beforeunload", e=>{let r=!1;if(Dt(),!Y){const a=ue(_,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};Qt.forEach(i=>i(o))}r?(e.preventDefault(),e.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Dt()}),(n=navigator.connection)!=null&&n.saveData||Ze(),P.addEventListener("click",async e=>{var g;if(e.button||e.which!==1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)return;const r=Jt(e.composedPath()[0],P);if(!r)return;const{url:a,external:o,target:i,download:s}=yt(r,U);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=Z(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||s)return;if(o||c.reload){ie({url:a,type:"link"})?Y=!0:e.preventDefault();return}const[d,h]=a.href.split("#");if(h!==void 0&&d===dt(location)){const[,u]=_.url.href.split("#");if(u===h){e.preventDefault(),h===""||h==="top"&&r.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):(g=r.ownerDocument.getElementById(h))==null||g.scrollIntoView();return}if(G=!0,St(E),t(a),!c.replace_state)return;G=!1}e.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),z({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),P.addEventListener("submit", e=>{if(e.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(e.target),a=e.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const s=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(rt(s,U))return;const c=e.target,f=Z(c);if(f.reload)return;e.preventDefault(),e.stopPropagation();const d=new FormData(c),h=a==null?void 0:a.getAttribute("name");h&&d.append(h,(a==null?void 0:a.getAttribute("value"))??""),s.search=new URLSearchParams(d).toString(),z({type:"form",url:s,keepfocus:f.keepfocus,noscroll:f.noscroll,replace_state:f.replace_state??s.href===location.href})}),addEventListener("popstate",async e=>{var r;if((r=e.state)!=null&&r[$]){const a=e.state[$];if(V={},a===E)return;const o=C[a],i=e.state[Ht]??{},s=new URL(e.state[xe]??location.href),c=e.state[H],f=dt(location)===dt(_.url);if(c===L&&(te||f)){t(s),C[E]=kt(),o&&scrollTo(o.x,o.y),i!==S.state&&(S={...S,state:i},N.$set({page:S})),E=a;return}const h=a-E;await z({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{E=a,L=c},block:()=>{history.go(-h)},nav_token:V})}else if(!G){const a=new URL(location.href);t(a)}}),addEventListener("hashchange",()=>{G&&(G=!1,history.replaceState({...history.state,[$]:++E,[H]:L},"",location.href))});for(const e of document.querySelectorAll("link"))e.rel==="icon"&&(e.href=e.href);addEventListener("pageshow", e=>{e.persisted&&T.navigating.set(null)});function t(e){_.url=e,T.page.set({...S,url:e}),T.page.notify()}}async function en(t, {status:n=200,error:e,node_ids:r,params:a,route:o,data:i,form:s}){Rt=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=lt(c,!1)||{});let f;try{const d=r.map(async(u, m)=>{const l=i[m];return l!=null&&l.uses&&(l.uses=fe(l.uses)),It({loader:B.nodes[u],url:c,params:a,route:o,parent:async()=>{const y={};for(let b=0; b<m; b+=1)Object.assign(y,(await d[b]).data);return y},server_data_node:Lt(l)})}),h=await Promise.all(d),g=ot.find(({id:u})=>u===o.id);if(g){const u=g.layouts;for(let m=0; m<u.length; m++)u[m]||h.splice(m,0,void 0)}f=J({url:c,params:a,branch:h,status:n,error:e,form:s,route:g??null})}catch(d){if(d instanceof Xt){await F(new URL(d.location,location.href));return}f=await ct({status:Q(d),error:await D(d,{url:c,params:a,route:o}),url:c,route:o})}f.props.page&&(f.props.page.state={}),ae(f,t,!0)}async function le(t, n){var a;const e=new URL(t);e.pathname=be(t.pathname),t.pathname.endsWith("/")&&e.searchParams.append(He,"1"),e.searchParams.append(Me,n.map(o=>o?"1":"0").join(""));const r=await Bt(e.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new at(r.status,o)}return new Promise(async o=>{var h;const i=new Map,s=r.body.getReader(),c=new TextDecoder;function f(g){return Wt(g,{Promise: u=>new Promise((m, l)=>{i.set(u,{fulfil:m,reject:l})})})}let d="";for(;;){const{done:g,value:u}=await s.read();if(g&&!d)break;for(d+=!u&&d?`
`:c.decode(u,{stream:!0});;){const m=d.indexOf(`
`);if(m===-1)break;const l=JSON.parse(d.slice(0,m));if(d=d.slice(m+1),l.type==="redirect")return o(l);if(l.type==="data")(h=l.nodes)==null||h.forEach(y=>{(y==null?void 0:y.type)==="data"&&(y.uses=fe(y.uses),y.data=f(y.data))}),o(l);else if(l.type==="chunk"){const{id:y,data:b,error:R}=l,w=i.get(y);i.delete(y),R?w.reject(f(R)):w.fulfil(f(b))}}}})}function fe(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function vt(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const n=document.body,e=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),e!==null?n.setAttribute("tabindex",e):n.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const i=a[o],s=r.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}r.removeAllRanges()}})}}}function ue(t,n,e,r){var c,f;let a,o;const i=new Promise((d,h)=>{a=d,o=h});return i.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:e&&{params:(n==null?void 0:n.params)??null,route:{id:((f=n==null?void 0:n.route)==null?void 0:f.id)??null},url:e},willUnload:!n,type:r,complete:i},fulfil:a,reject:o}}export{fn as a,cn as b,ln as i,sn as p,T as s};
