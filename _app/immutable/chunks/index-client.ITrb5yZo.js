import{S as T,C as H,D as V,E as y,F as z,s as x,U as p,G as m,g as b,H as J,I as Q,J as W,K as F,b as X,h as N,a as k,L as ee,M as re,N as ne,O as K,P as M,c as B,p as U,d as te,Q as se,R as ie,T as fe,i as A,V as ae,W as ue,X as le,Y as Z,Z as ce,_ as Y,$ as O,a0 as oe,a1 as de,a2 as ve,a3 as $,B as _e,a4 as pe,m as he,f as D,a5 as L,e as be}from "./runtime.CXy5jL3L.js";function E(e, r=null, i){if(typeof e!="object"||e===null||T in e)return e;const f=W(e);if(f!==H&&f!==V)return e;var s=new Map,l=F(e),_=y(0);l&&s.set("length",y(e.length));var d;return new Proxy(e,{defineProperty(a, n, t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&z();var u=s.get(n);return u===void 0?(u=y(t.value),s.set(n,u)):x(u,E(t.value,d)),!0},deleteProperty(a, n){var t=s.get(n);return t===void 0?n in a&&s.set(n,y(p)):(x(t,p),j(_)),!0},get(a, n, t){var h;if(n===T)return e;var u=s.get(n),c=n in a;if(u===void 0&&(!c||(h=m(a,n))!=null&&h.writable)&&(u=y(E(c?a[n]:p,d)),s.set(n,u)),u!==void 0){var o=b(u);return o===p?void 0:o}return Reflect.get(a,n,t)},getOwnPropertyDescriptor(a, n){var t=Reflect.getOwnPropertyDescriptor(a,n);if(t&&"value"in t){var u=s.get(n);u&&(t.value=b(u))}else if(t===void 0){var c=s.get(n),o=c==null?void 0:c.v;if(c!==void 0&&o!==p)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return t},has(a, n){var o;if(n===T)return!0;var t=s.get(n),u=t!==void 0&&t.v!==p||Reflect.has(a,n);if(t!==void 0||J!==null&&(!u||(o=m(a,n))!=null&&o.writable)){t===void 0&&(t=y(u?E(a[n],d):p),s.set(n,t));var c=b(t);if(c===p)return!1}return u},set(a, n, t, u){var S;var c=s.get(n),o=n in a;if(l&&n==="length")for(var h=t; h<c.v; h+=1){var R=s.get(h+"");R!==void 0?x(R,p):h in a&&(R=y(p),s.set(h+"",R))}c===void 0?(!o||(S=m(a,n))!=null&&S.writable)&&(c=y(void 0),x(c,E(t,d)),s.set(n,c)):(o=c.v!==p,x(c,E(t,d)));var w=Reflect.getOwnPropertyDescriptor(a,n);if(w!=null&&w.set&&w.set.call(u,t),!o){if(l&&typeof n=="string"){var I=s.get("length"),P=Number(n);Number.isInteger(P)&&P>=I.v&&x(I,P+1)}j(_)}return!0},ownKeys(a){b(_);var n=Reflect.ownKeys(a).filter(c=>{var o=s.get(c);return o===void 0||o.v!==p});for(var[t,u]of s)u.v!==p&&!(t in a)&&n.push(t);return n},setPrototypeOf(){Q()}})}function j(e, r=1){x(e,e.v+r)}function Ee(e, r, i, f=null, s=!1){N&&k();var l=e,_=null,d=null,a=null,n=s?se:0;X(()=>{if(a===(a=!!r()))return;let t=!1;if(N){const u=l.data===ee;a===u&&(l=re(),ne(l),K(!1),t=!0)}a?(_?M(_):_=B(()=>i(l)),d&&U(d,()=>{d=null})):(d?M(d):f&&(d=B(()=>f(l))),_&&U(_,()=>{_=null})),t&&K(!0)},n),N&&(l=te)}function C(e, r){return e===r||(e==null?void 0:e[T])===r}function Se(e={}, r, i, f){return ie(()=>{var s,l;return fe(()=>{s=l,l=[],A(()=>{e!==i(...l)&&(r(e,...l),s&&C(i(...s),e)&&r(null,...s))})}),()=>{ae(()=>{l&&C(i(...l),e)&&r(null,...l)})}}),e}const Pe={get(e, r){if(!e.exclude.includes(r))return b(e.version),r in e.special?e.special[r]():e.props[r]},set(e, r, i){return r in e.special||(e.special[r]=we({get[r](){return e.props[r]}},r,Z)),e.special[r](i),Y(e.version),!0},getOwnPropertyDescriptor(e, r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e, r){return e.exclude.includes(r)||(e.exclude.push(r),Y(e.version)),!0},has(e, r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function me(e, r){return new Proxy({props:e,exclude:r,special:{},version:y(0)},Pe)}const ye={get(e, r){let i=e.props.length;for(; i--;){let f=e.props[i];if(O(f)&&(f=f()),typeof f=="object"&&f!==null&&r in f)return f[r]}},getOwnPropertyDescriptor(e, r){let i=e.props.length;for(; i--;){let f=e.props[i];if(O(f)&&(f=f()),typeof f=="object"&&f!==null&&r in f){const s=m(f,r);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e, r){for(let i of e.props)if(O(i)&&(i=i()),i!=null&&r in i)return!0;return!1},ownKeys(e){const r=[];for(let i of e.props){O(i)&&(i=i());for(const f in i)r.includes(f)||r.push(f)}return r}};function De(...e){return new Proxy({props:e},ye)}function we(e, r, i, f){var S;var s=(i&oe)!==0,l=(i&de)!==0,_=(i&ve)!==0,d=(i&pe)!==0,a=e[r],n=(S=m(e,r))==null?void 0:S.set,t=f,u=!0,c=()=>(d&&u&&(u=!1,t=A(f)),t);a===void 0&&f!==void 0&&(n&&l&&ue(),a=c(),n&&n(a));var o;if(l)o=()=>{var v=e[r];return v===void 0?c():(u=!0,v)};else{var h=(s?$:_e)(()=>e[r]);h.f|=le,o=()=>{var v=b(h);return v!==void 0&&(t=void 0),v===void 0?t:v}}if(!(i&Z))return o;if(n){var R=e.$$legacy;return function(v, g){return arguments.length>0?((!l||!g||R)&&n(g?o():v),v):o()}}var w=!1,I=he(a),P=$(()=>{var v=o(),g=b(I);return w?(w=!1,g):I.v=v});return s||(P.equals=ce),function(v, g){var G=b(P);if(arguments.length>0){const q=g?b(P):l&&_?E(v):v;return P.equals(q)||(w=!0,x(I,q),b(P)),v}return G}}function xe(e){D===null&&L(),D.l!==null?Ie(D).m.push(e):be(()=>{const r=A(e);if(typeof r=="function")return r})}function Oe(e){D===null&&L(),xe(()=>()=>A(e))}function Re(e, r, {bubbles:i=!1,cancelable:f=!1}={}){return new CustomEvent(e,{detail:r,bubbles:i,cancelable:f})}function Te(){const e=D;return e===null&&L(),(r, i, f)=>{var l;const s=(l=e.s.$$events)==null?void 0:l[r];if(s){const _=F(s)?s.slice():[s],d=Re(r,i,f);for(const a of _)a.call(e.x,d);return!d.defaultPrevented}return!0}}function Ie(e){var r=e.l;return r.u??(r.u={a:[],b:[],m:[]})}export{E as a,Se as b,Te as c,Oe as d,Ee as i,me as l,xe as o,we as p,De as s};
