import{c as b,a as g,e as i}from "./disclose-version.CTpSXfKZ.js";import{l as C,o as y,v as D,q as A,g as H,B as I}from "./runtime.CXy5jL3L.js";import{e as N,s as V,f as n,a as P,d as j,g as J,c as K,b as L}from "./index.CQrFTxgF.js";import{i as F}from "./lifecycle.D99gxfa0.js";import{l as k,p as l,i as M,b as O,s as Q}from "./index-client.ITrb5yZo.js";function R(u, a){const c=[];return a.builders.forEach(s=>{const o=s.action(u);o&&c.push(o)}),{destroy:()=>{c.forEach(s=>{s.destroy&&s.destroy()})}}}function S(u){const a={};return u.forEach(c=>{Object.keys(c).forEach(s=>{s!=="action"&&(a[s]=c[s])})}),a}function T(u, a){const c=k(a,["children","$$slots","$$events","$$legacy"]),s=k(c,["href","type","builders","el"]);C(a,!1);let o=l(a,"href",24,()=>{}),_=l(a,"type",24,()=>{}),f=l(a,"builders",24,()=>[]),h=l(a,"el",28,()=>{});const w={"data-button-root":""};F();var r=b(),q=y(r);M(q,()=>f()&&f().length, v=>{var d=b(),z=y(d);N(z,()=>o()?"a":"button",!1,(e, B)=>{O(e, t=>h(t),()=>h());let m;A(()=>m=V(e,m,{type:o()?void 0:_(),href:o(),tabindex:"0",...S(f()),...s,...w})),i("click",e,function(t){n.call(this,a,t)}),i("change",e,function(t){n.call(this,a,t)}),i("keydown",e,function(t){n.call(this,a,t)}),i("keyup",e,function(t){n.call(this,a,t)}),i("mouseenter",e,function(t){n.call(this,a,t)}),i("mouseleave",e,function(t){n.call(this,a,t)}),i("mousedown",e,function(t){n.call(this,a,t)}),i("pointerdown",e,function(t){n.call(this,a,t)}),i("mouseup",e,function(t){n.call(this,a,t)}),i("pointerup",e,function(t){n.call(this,a,t)}),J(e,(t, G)=>R(t,G),()=>({builders:f()}));var x=b(),E=y(x);P(E,j(a),{}),g(B,x)}),g(v,d)}, v=>{var d=b(),z=y(d);N(z,()=>o()?"a":"button",!1,(e, B)=>{O(e, t=>h(t),()=>h());let m;A(()=>m=V(e,m,{type:o()?void 0:_(),href:o(),tabindex:"0",...s,...w})),i("click",e,function(t){n.call(this,a,t)}),i("change",e,function(t){n.call(this,a,t)}),i("keydown",e,function(t){n.call(this,a,t)}),i("keyup",e,function(t){n.call(this,a,t)}),i("mouseenter",e,function(t){n.call(this,a,t)}),i("mouseleave",e,function(t){n.call(this,a,t)}),i("mousedown",e,function(t){n.call(this,a,t)}),i("pointerdown",e,function(t){n.call(this,a,t)}),i("mouseup",e,function(t){n.call(this,a,t)}),i("pointerup",e,function(t){n.call(this,a,t)});var x=b(),E=y(x);P(E,j(a),{}),g(B,x)}),g(v,d)}),g(u,r),D()}function $(u, a){const c=k(a,["children","$$slots","$$events","$$legacy"]),s=k(c,["class","variant","size","builders"]);C(a,!1);let o=l(a,"class",8,void 0),_=l(a,"variant",8,"default"),f=l(a,"size",8,"default"),h=l(a,"builders",24,()=>[]);F();var w=I(()=>K(U({variant:_(),size:f(),className:o()})));T(u,Q({get builders(){return h()},get class(){return H(w)},type:"button"},()=>s,{$$events:{click(r){n.call(this,a,r)},keydown(r){n.call(this,a,r)}},children:(r, q)=>{var v=b(),d=y(v);P(d,j(a),{}),g(r,v)},$$slots:{default:!0}})),D()}const U=L({base:"focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50",variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90 shadow",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",outline:"border-input bg-background hover:bg-accent hover:text-accent-foreground border shadow-sm",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}});export{$ as B,U as b};
