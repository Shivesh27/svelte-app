const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.BkiyV888.js","../chunks/disclose-version.DQSa0aiF.js","../chunks/runtime.DVsvHIGw.js","../chunks/legacy.DOTC06vW.js","../chunks/paths.3ifHSaLU.js","../nodes/1.CUuUDDk2.js","../chunks/render.BMduB4XF.js","../chunks/store.l_ldfGKu.js","../chunks/entry.UdvzOErS.js","../nodes/2.X_6ZIgn5.js","../nodes/3.Cbo6ssy8.js"])))=>i.map(i=>d[i]);
var re=t=>{throw TypeError(t)};var ae=(t,e,s)=>e.has(t)||re("Cannot "+s);var P=(t,e,s)=>(ae(t,e,"read from private field"),s?s.call(t):e.get(t)),Z=(t,e,s)=>e.has(t)?re("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),H=(t,e,s,d)=>(ae(t,e,"write to private field"),d?d.call(t,s):e.set(t,s),s);import{Z as B,_ as Ee,$ as Pe,a0 as L,a1 as Re,a as w,a2 as R,a3 as M,g as y,D as p,a4 as we,y as Se,G as Oe,w as j,x as oe,a5 as de,a6 as _e,a7 as Ie,a8 as Ae,N as Te,M as ne,a9 as se,W as ee,aa as te,O as ve,ab as xe,ac as Le,u as G,E as De,ad as Ne,ae as Ce,af as ke,ag as qe,ah as Be,ai as je,B as ie,aj as Fe,ak as he,al as Ue,am as Ve,an as me,p as F,ao as Ye,ap as Me,d as ge,aq as Ge,F as Ze,j as K,i as ye,q as He,h as Ke,f as V,v as We,ar as ze,s as Je,as as W,c as Qe,r as Xe,t as $e}from"../chunks/runtime.DVsvHIGw.js";import{h as pe,m as et,u as tt,s as rt}from"../chunks/render.BMduB4XF.js";import{a as C,t as be,c as z,d as at}from"../chunks/disclose-version.DQSa0aiF.js";import{c as nt}from"../chunks/store.l_ldfGKu.js";function D(t,e=null,s){if(typeof t!="object"||t===null||B in t)return t;const d=Se(t);if(d!==Ee&&d!==Pe)return t;var a=new Map,c=Oe(t),f=L(0);c&&a.set("length",L(t.length));var i;return new Proxy(t,{defineProperty(l,r,n){(!("value"in n)||n.configurable===!1||n.enumerable===!1||n.writable===!1)&&Re();var o=a.get(r);return o===void 0?(o=L(n.value),a.set(r,o)):w(o,D(n.value,i)),!0},deleteProperty(l,r){var n=a.get(r);if(n===void 0)r in l&&a.set(r,L(R));else{if(c&&typeof r=="string"){var o=a.get("length"),u=Number(r);Number.isInteger(u)&&u<o.v&&w(o,u)}w(n,R),fe(f)}return!0},get(l,r,n){var h;if(r===B)return t;var o=a.get(r),u=r in l;if(o===void 0&&(!u||(h=M(l,r))!=null&&h.writable)&&(o=L(D(u?l[r]:R,i)),a.set(r,o)),o!==void 0){var _=y(o);return _===R?void 0:_}return Reflect.get(l,r,n)},getOwnPropertyDescriptor(l,r){var n=Reflect.getOwnPropertyDescriptor(l,r);if(n&&"value"in n){var o=a.get(r);o&&(n.value=y(o))}else if(n===void 0){var u=a.get(r),_=u==null?void 0:u.v;if(u!==void 0&&_!==R)return{enumerable:!0,configurable:!0,value:_,writable:!0}}return n},has(l,r){var _;if(r===B)return!0;var n=a.get(r),o=n!==void 0&&n.v!==R||Reflect.has(l,r);if(n!==void 0||p!==null&&(!o||(_=M(l,r))!=null&&_.writable)){n===void 0&&(n=L(o?D(l[r],i):R),a.set(r,n));var u=y(n);if(u===R)return!1}return o},set(l,r,n,o){var E;var u=a.get(r),_=r in l;if(c&&r==="length")for(var h=n;h<u.v;h+=1){var v=a.get(h+"");v!==void 0?w(v,R):h in l&&(v=L(R),a.set(h+"",v))}u===void 0?(!_||(E=M(l,r))!=null&&E.writable)&&(u=L(void 0),w(u,D(n,i)),a.set(r,u)):(_=u.v!==R,w(u,D(n,i)));var m=Reflect.getOwnPropertyDescriptor(l,r);if(m!=null&&m.set&&m.set.call(o,n),!_){if(c&&typeof r=="string"){var O=a.get("length"),I=Number(r);Number.isInteger(I)&&I>=O.v&&w(O,I+1)}fe(f)}return!0},ownKeys(l){y(f);var r=Reflect.ownKeys(l).filter(u=>{var _=a.get(u);return _===void 0||_.v!==R});for(var[n,o]of a)o.v!==R&&!(n in l)&&r.push(n);return r},setPrototypeOf(){we()}})}function fe(t,e=1){w(t,t.v+e)}function st(t){throw new Error("lifecycle_outside_component")}function J(t,e,s=!1){j&&oe();var d=t,a=null,c=null,f=null,i=s?_e:0,l=!1;const r=(o,u=!0)=>{l=!0,n(u,o)},n=(o,u)=>{if(f===(f=o))return;let _=!1;if(j){const h=d.data===Ie;f===h&&(d=Ae(),Te(d),ne(!1),_=!0)}f?(a?se(a):u&&(a=ee(()=>u(d))),c&&te(c,()=>{c=null})):(c?se(c):u&&(c=ee(()=>u(d))),a&&te(a,()=>{a=null})),_&&ne(!0)};de(()=>{l=!1,e(r),l||n(null,null)},i),j&&(d=ve)}function Q(t,e,s){j&&oe();var d=t,a,c;de(()=>{a!==(a=e())&&(c&&(te(c),c=null),a&&(c=ee(()=>s(d,a))))},_e),j&&(d=ve)}function ue(t,e){return t===e||(t==null?void 0:t[B])===e}function X(t={},e,s,d){return xe(()=>{var a,c;return Le(()=>{a=c,c=[],G(()=>{t!==s(...c)&&(e(t,...c),a&&ue(s(...a),t)&&e(null,...a))})}),()=>{De(()=>{c&&ue(s(...c),t)&&e(null,...c)})}}),t}function le(t){for(var e=p,s=p;e!==null&&!(e.f&(Be|je));)e=e.parent;try{return ie(e),t()}finally{ie(s)}}function $(t,e,s,d){var k;var a=(s&Fe)!==0,c=!he||(s&Ue)!==0,f=(s&Ve)!==0,i=(s&Me)!==0,l=!1,r;f?[r,l]=nt(()=>t[e]):r=t[e];var n=B in t||me in t,o=((k=M(t,e))==null?void 0:k.set)??(n&&f&&e in t?g=>t[e]=g:void 0),u=d,_=!0,h=!1,v=()=>(h=!0,_&&(_=!1,i?u=G(d):u=d),u);r===void 0&&d!==void 0&&(o&&c&&Ne(),r=v(),o&&o(r));var m;if(c)m=()=>{var g=t[e];return g===void 0?v():(_=!0,h=!1,g)};else{var O=le(()=>(a?F:Ye)(()=>t[e]));O.f|=Ce,m=()=>{var g=y(O);return g!==void 0&&(u=void 0),g===void 0?u:g}}if(!(s&ke))return m;if(o){var I=t.$$legacy;return function(g,x){return arguments.length>0?((!c||!x||I||l)&&o(x?m():g),g):m()}}var E=!1,A=!1,b=ge(r),N=le(()=>F(()=>{var g=m(),x=y(b);return E?(E=!1,A=!0,x):(A=!1,b.v=g)}));return a||(N.equals=qe),function(g,x){if(arguments.length>0){const q=x?y(N):c&&f?D(g):g;return N.equals(q)||(E=!0,w(b,q),h&&u!==void 0&&(u=q),G(()=>y(N))),g}return y(N)}}function it(t){return class extends ft{constructor(e){super({component:t,...e})}}}var T,S;class ft{constructor(e){Z(this,T);Z(this,S);var c;var s=new Map,d=(f,i)=>{var l=ge(i);return s.set(f,l),l};const a=new Proxy({...e.props||{},$$events:{}},{get(f,i){return y(s.get(i)??d(i,Reflect.get(f,i)))},has(f,i){return i===me?!0:(y(s.get(i)??d(i,Reflect.get(f,i))),Reflect.has(f,i))},set(f,i,l){return w(s.get(i)??d(i,l),l),Reflect.set(f,i,l)}});H(this,S,(e.hydrate?pe:et)(e.component,{target:e.target,anchor:e.anchor,props:a,context:e.context,intro:e.intro??!1,recover:e.recover})),(!((c=e==null?void 0:e.props)!=null&&c.$$host)||e.sync===!1)&&Ge(),H(this,T,a.$$events);for(const f of Object.keys(P(this,S)))f==="$set"||f==="$destroy"||f==="$on"||Ze(this,f,{get(){return P(this,S)[f]},set(i){P(this,S)[f]=i},enumerable:!0});P(this,S).$set=f=>{Object.assign(a,f)},P(this,S).$destroy=()=>{tt(P(this,S))}}$set(e){P(this,S).$set(e)}$on(e,s){P(this,T)[e]=P(this,T)[e]||[];const d=(...a)=>s.call(this,...a);return P(this,T)[e].push(d),()=>{P(this,T)[e]=P(this,T)[e].filter(a=>a!==d)}}$destroy(){P(this,S).$destroy()}}T=new WeakMap,S=new WeakMap;function ut(t){K===null&&st(),he&&K.l!==null?lt(K).m.push(t):ye(()=>{const e=G(t);if(typeof e=="function")return e})}function lt(t){var e=t.l;return e.u??(e.u={a:[],b:[],m:[]})}const ct="modulepreload",ot=function(t,e){return new URL(t,e).href},ce={},Y=function(e,s,d){let a=Promise.resolve();if(s&&s.length>0){const f=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),l=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));a=Promise.allSettled(s.map(r=>{if(r=ot(r,d),r in ce)return;ce[r]=!0;const n=r.endsWith(".css"),o=n?'[rel="stylesheet"]':"";if(!!d)for(let h=f.length-1;h>=0;h--){const v=f[h];if(v.href===r&&(!n||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${o}`))return;const _=document.createElement("link");if(_.rel=n?"stylesheet":ct,n||(_.as="script"),_.crossOrigin="",_.href=r,l&&_.setAttribute("nonce",l),document.head.appendChild(_),n)return new Promise((h,v)=>{_.addEventListener("load",h),_.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${r}`)))})}))}function c(f){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=f,window.dispatchEvent(i),!i.defaultPrevented)throw f}return a.then(f=>{for(const i of f||[])i.status==="rejected"&&c(i.reason);return e().catch(c)})},Et={};var dt=be('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),_t=be("<!> <!>",1);function vt(t,e){He(e,!0);let s=$(e,"components",23,()=>[]),d=$(e,"data_0",3,null),a=$(e,"data_1",3,null);Ke(()=>e.stores.page.set(e.page)),ye(()=>{e.stores,e.page,e.constructors,s(),e.form,d(),a(),e.stores.page.notify()});let c=W(!1),f=W(!1),i=W(null);ut(()=>{const v=e.stores.page.subscribe(()=>{y(c)&&(w(f,!0),ze().then(()=>{w(i,D(document.title||"untitled page"))}))});return w(c,!0),v});const l=F(()=>e.constructors[1]);var r=_t(),n=V(r);{var o=v=>{var m=z();const O=F(()=>e.constructors[0]);var I=V(m);Q(I,()=>y(O),(E,A)=>{X(A(E,{get data(){return d()},get form(){return e.form},children:(b,N)=>{var k=z(),g=V(k);Q(g,()=>y(l),(x,q)=>{X(q(x,{get data(){return a()},get form(){return e.form}}),U=>s()[1]=U,()=>{var U;return(U=s())==null?void 0:U[1]})}),C(b,k)},$$slots:{default:!0}}),b=>s()[0]=b,()=>{var b;return(b=s())==null?void 0:b[0]})}),C(v,m)},u=v=>{var m=z();const O=F(()=>e.constructors[0]);var I=V(m);Q(I,()=>y(O),(E,A)=>{X(A(E,{get data(){return d()},get form(){return e.form}}),b=>s()[0]=b,()=>{var b;return(b=s())==null?void 0:b[0]})}),C(v,m)};J(n,v=>{e.constructors[1]?v(o):v(u,!1)})}var _=Je(n,2);{var h=v=>{var m=dt(),O=Qe(m);{var I=E=>{var A=at();$e(()=>rt(A,y(i))),C(E,A)};J(O,E=>{y(f)&&E(I)})}Xe(m),C(v,m)};J(_,v=>{y(c)&&v(h)})}C(t,r),We()}const Pt=it(vt),Rt=[()=>Y(()=>import("../nodes/0.BkiyV888.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url),()=>Y(()=>import("../nodes/1.CUuUDDk2.js"),__vite__mapDeps([5,1,2,3,6,7,8,4]),import.meta.url),()=>Y(()=>import("../nodes/2.X_6ZIgn5.js"),__vite__mapDeps([9,1,2,3]),import.meta.url),()=>Y(()=>import("../nodes/3.Cbo6ssy8.js"),__vite__mapDeps([10,1,2,3,6]),import.meta.url)],wt=[],St={"/":[2],"/counter":[3]},Ot={handleError:({error:t})=>{console.error(t)},reroute:()=>{}};export{St as dictionary,Ot as hooks,Et as matchers,Rt as nodes,Pt as root,wt as server_loads};
