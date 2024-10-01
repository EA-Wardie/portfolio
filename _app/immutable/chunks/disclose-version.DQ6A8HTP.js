import{t as q,V as B,a8 as F,K as U,ae as T,b as Y,af as j,h as c,ag as C,ah as k,O as g,N as b,d as s,ai as w,H as M,aj as G,ak as z,a as H,al as O,am as S,an as K,ao as x,ap as J,aq as Q,ar as X,as as Z,c as ee,l as te,v as re,f as ae}from "./runtime.Dh3IQy2e.js";const P=new Set,R=new Set;function ne(e, t, r, o){function n(a){if(o.capture||E.call(t,a),!a.cancelBubble)return r.call(this,a)}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?B(()=>{t.addEventListener(e,n,o)}):t.addEventListener(e,n,o),n}function _e(e, t, r, o, n){var a={capture:o,passive:n},i=ne(e,t,r,a);(t===document.body||t===window||t===document)&&q(()=>{t.removeEventListener(e,i,a)})}function he(e){for(var t=0; t<e.length; t++)P.add(e[t]);for(var r of R)r(e)}function E(e){var V;var t=this,r=t.ownerDocument,o=e.type,n=((V=e.composedPath)==null?void 0:V.call(e))||[],a=n[0]||e.target,i=0,_=e.__root;if(_){var u=n.indexOf(_);if(u!==-1&&(t===document||t===window)){e.__root=t;return}var v=n.indexOf(t);if(v===-1)return;u<=v&&(i=u)}if(a=n[i]||e.target,a!==t){F(e,"currentTarget",{configurable:!0,get(){return a||r}});try{for(var m,d=[]; a!==null;){var h=a.parentNode||a.host||null;try{var l=a["__"+o];if(l!==void 0&&!a.disabled)if(U(l)){var[N,...L]=l;N.apply(a,[e,...L])}else l.call(a,e)}catch(A){m?d.push(A):m=A}if(e.cancelBubble||h===t||h===null)break;a=h}if(m){for(let A of d)queueMicrotask(()=>{throw A});throw m}}finally{e.__root=t,delete e.currentTarget}}}let f;function oe(){f=void 0}function pe(e){let t=null,r=c;var o;if(c){for(t=s,f===void 0&&(f=w(document.head)); f!==null&&(f.nodeType!==8||f.data!==C);)f=k(f);f===null?g(!1):f=b(k(f))}c||(o=document.head.appendChild(T()));try{Y(()=>e(o),j)}finally{r&&(g(!0),f=s,b(t))}}function W(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function p(e, t){var r=M;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function ve(e, t){var r=(t&G)!==0,o=(t&z)!==0,n,a=!e.startsWith("<!>");return()=>{if(c)return p(s,null),s;n===void 0&&(n=W(a?e:"<!>"+e),r||(n=w(n)));var i=o?document.importNode(n,!0):n.cloneNode(!0);if(r){var _=w(i),u=i.lastChild;p(_,u)}else p(i,i);return i}}function me(e, t, r="svg"){var o=!e.startsWith("<!>"),n=`<${r}>${o?e:"<!>"+e}</${r}>`,a;return()=>{if(c)return p(s,null),s;if(!a){var i=W(n),_=w(i);a=w(_)}var u=a.cloneNode(!0);return p(u,u),u}}function ye(e=""){if(!c){var t=T(e+"");return p(t,t),t}var r=s;return r.nodeType!==3&&(r.before(r=T()),b(r)),p(r,r),r}function ge(){if(c)return p(s,null),s;var e=document.createDocumentFragment(),t=document.createComment(""),r=T();return e.append(t,r),p(t,r),e}function we(e, t){if(c){M.nodes_end=s,H();return}e!==null&&e.before(t)}function Ee(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const ie=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Te(e){return ie.includes(e)}const se={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function be(e){return e=e.toLowerCase(),se[e]??e}const ue=["wheel","mousewheel","touchstart","touchmove"];function de(e){return ue.includes(e)}let D=!0;function Ne(e){D=e}function Le(e, t){t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t==null?"":t+"")}function le(e, t){const r=t.anchor??t.target.appendChild(T());return $(e,{...t,anchor:r})}function Ae(e, t){O(),t.intro=t.intro??!1;const r=t.target,o=c,n=s;try{for(var a=w(r); a&&(a.nodeType!==8||a.data!==C);)a=k(a);if(!a)throw S;g(!0),b(a),H();const i=$(e,{...t,anchor:a});if(s===null||s.nodeType!==8||s.data!==K)throw x(),S;return g(!1),i}catch(i){if(i===S)return t.recover===!1&&J(),O(),Q(r),g(!1),le(e,t);throw i}finally{g(o),b(n),oe()}}const y=new Map;function $(e, {target:t,anchor:r,props:o={},events:n,context:a,intro:i=!0}){O();var _=new Set,u= d=>{for(var h=0; h<d.length; h++){var l=d[h];if(!_.has(l)){_.add(l);var N=de(l);t.addEventListener(l,E,{passive:N});var L=y.get(l);L===void 0?(document.addEventListener(l,E,{passive:N}),y.set(l,1)):y.set(l,L+1)}}};u(X(P)),R.add(u);var v=void 0,m=Z(()=>(ee(()=>{if(a){te({});var d=ae;d.c=a}n&&(o.$$events=n),c&&p(r,null),D=i,v=e(r,o)||{},D=!0,c&&(M.nodes_end=s),a&&re()}),()=>{for(var d of _){t.removeEventListener(d,E);var h=y.get(d);--h===0?(document.removeEventListener(d,E),y.delete(d)):y.set(d,h)}R.delete(u),I.delete(v)}));return I.set(v,m),v}let I=new WeakMap;function Se(e){const t=I.get(e);t&&t()}const fe="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(fe);export{we as a,ye as b,ge as c,Ae as d,_e as e,p as f,Ne as g,pe as h,Ee as i,ne as j,he as k,Te as l,le as m,be as n,me as o,W as p,D as q,Le as s,ve as t,Se as u};
