import{a as d,t as v}from"../chunks/disclose-version.DQSa0aiF.js";import"../chunks/legacy.DOTC06vW.js";import{h,i as f,j as $,u as x,k as u,g as _,l as k,o as y,p as j,q,f as E,t as S,v as w,c as l,r as g,s as z}from"../chunks/runtime.DVsvHIGw.js";import{s as m}from"../chunks/render.BMduB4XF.js";import{s as A,a as B}from"../chunks/store.l_ldfGKu.js";import{s as C}from"../chunks/entry.UdvzOErS.js";function D(s=!1){const t=$,e=t.l.u;if(!e)return;let n=()=>y(t.s);if(s){let a=0,r={};const c=j(()=>{let i=!1;const p=t.s;for(const o in p)p[o]!==r[o]&&(r[o]=p[o],i=!0);return i&&a++,a});n=()=>_(c)}e.b.length&&h(()=>{b(t,n),u(e.b)}),f(()=>{const a=x(()=>e.m.map(k));return()=>{for(const r of a)typeof r=="function"&&r()}}),e.a.length&&f(()=>{b(t,n),u(e.a)})}function b(s,t){if(s.l.s)for(const e of s.l.s)_(e);t()}const F=()=>{const s=C;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},G={subscribe(s){return F().page.subscribe(s)}};var H=v("<h1> </h1> <p> </p>",1);function O(s,t){q(t,!1);const e=A(),n=()=>B(G,"$page",e);D();var a=H(),r=E(a),c=l(r,!0);g(r);var i=z(r,2),p=l(i,!0);g(i),S(()=>{var o;m(c,n().status),m(p,(o=n().error)==null?void 0:o.message)}),d(s,a),w()}export{O as component};
