import{a as y,t as b}from"../chunks/disclose-version.DQSa0aiF.js";import"../chunks/legacy.DOTC06vW.js";import{w as g,x as w,y as u,z as N,f as x,c as n,r as f,s as _}from"../chunks/runtime.DVsvHIGw.js";import{b as p}from"../chunks/paths.3ifHSaLU.js";function A(a,r,t,i,o){var e;g&&w();var s=(e=r.$$slots)==null?void 0:e[t],c=!1;s===!0&&(s=r.children,c=!0),s===void 0||s(a,c?()=>i:i)}function v(a,r,t,i){var o=a.__attributes??(a.__attributes={});g&&(o[r]=a.getAttribute(r),a.nodeName==="LINK")||o[r]!==(o[r]=t)&&(t==null?a.removeAttribute(r):typeof t!="string"&&$(a).includes(r)?a[r]=t:a.setAttribute(r,t))}var d=new Map;function $(a){var r=d.get(a.nodeName);if(r)return r;d.set(a.nodeName,r=[]);for(var t,i=u(a),o=Element.prototype;o!==i;){t=N(i);for(var s in t)t[s].set&&r.push(s);i=u(i)}return r}const j=!0,C=Object.freeze(Object.defineProperty({__proto__:null,prerender:j},Symbol.toStringTag,{value:"Module"}));var z=b('<nav><ul><li><a>main</a></li> <li><a>Counter</a></li></ul></nav> <main class="container"><!></main>',1);function E(a,r){var t=z(),i=x(t),o=n(i),s=n(o),c=n(s);v(c,"href",`${p??""}/`),f(s);var e=_(s,2),h=n(e);v(h,"href",`${p??""}/counter`),f(e),f(o),f(i);var l=_(i,2),m=n(l);A(m,r,"default",{}),f(l),y(a,t)}export{E as component,C as universal};