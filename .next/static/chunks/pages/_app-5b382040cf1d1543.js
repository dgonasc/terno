(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return a(5115)}])},5115:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return w}});var r=a(5893),o=a(1247),s=a.n(o),i=a(6141),n=a.n(i);a(7952);var l=a(6501),c=a(7294);let d=["light","dark"],u="(prefers-color-scheme: dark)",m="undefined"==typeof window,p=(0,c.createContext)(void 0),f=e=>(0,c.useContext)(p)?c.createElement(c.Fragment,null,e.children):c.createElement(y,e),h=["light","dark"],y=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:a=!0,enableColorScheme:r=!0,storageKey:o="theme",themes:s=h,defaultTheme:i=a?"system":"light",attribute:n="data-theme",value:l,children:m,nonce:f})=>{let[y,w]=(0,c.useState)(()=>b(o,i)),[$,_]=(0,c.useState)(()=>b(o)),E=l?Object.values(l):s,k=(0,c.useCallback)(e=>{let o=e;if(!o)return;"system"===e&&a&&(o=x());let s=l?l[o]:o,c=t?v():null,u=document.documentElement;if("class"===n?(u.classList.remove(...E),s&&u.classList.add(s)):s?u.setAttribute(n,s):u.removeAttribute(n),r){let e=d.includes(i)?i:null,t=d.includes(o)?o:e;u.style.colorScheme=t}null==c||c()},[]),S=(0,c.useCallback)(e=>{w(e);try{localStorage.setItem(o,e)}catch(e){}},[e]),C=(0,c.useCallback)(t=>{let r=x(t);_(r),"system"===y&&a&&!e&&k("system")},[y,e]);(0,c.useEffect)(()=>{let e=window.matchMedia(u);return e.addListener(C),C(e),()=>e.removeListener(C)},[C]),(0,c.useEffect)(()=>{let e=e=>{e.key===o&&S(e.newValue||i)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[S]),(0,c.useEffect)(()=>{k(null!=e?e:y)},[e,y]);let N=(0,c.useMemo)(()=>({theme:y,setTheme:S,forcedTheme:e,resolvedTheme:"system"===y?$:y,themes:a?[...s,"system"]:s,systemTheme:a?$:void 0}),[y,S,e,$,a,s]);return c.createElement(p.Provider,{value:N},c.createElement(g,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:a,enableColorScheme:r,storageKey:o,themes:s,defaultTheme:i,attribute:n,value:l,children:m,attrs:E,nonce:f}),m)},g=(0,c.memo)(({forcedTheme:e,storageKey:t,attribute:a,enableSystem:r,enableColorScheme:o,defaultTheme:s,value:i,attrs:n,nonce:l})=>{let m="system"===s,p="class"===a?`var d=document.documentElement,c=d.classList;c.remove(${n.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${a}',s='setAttribute';`,f=o?d.includes(s)&&s?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",h=(e,t=!1,r=!0)=>{let s=i?i[e]:e,n=t?e+"|| ''":`'${s}'`,l="";return o&&r&&!t&&d.includes(e)&&(l+=`d.style.colorScheme = '${e}';`),"class"===a?l+=t||s?`c.add(${n})`:"null":s&&(l+=`d[s](n,${n})`),l},y=e?`!function(){${p}${h(e)}}()`:r?`!function(){try{${p}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${m})){var t='${u}',m=window.matchMedia(t);if(m.media!==t||m.matches){${h("dark")}}else{${h("light")}}}else if(e){${i?`var x=${JSON.stringify(i)};`:""}${h(i?"x[e]":"e",!0)}}${m?"":"else{"+h(s,!1,!1)+"}"}${f}}catch(e){}}()`:`!function(){try{${p}var e=localStorage.getItem('${t}');if(e){${i?`var x=${JSON.stringify(i)};`:""}${h(i?"x[e]":"e",!0)}}else{${h(s,!1,!1)};}${f}}catch(t){}}();`;return c.createElement("script",{nonce:l,dangerouslySetInnerHTML:{__html:y}})},()=>!0),b=(e,t)=>{let a;if(!m){try{a=localStorage.getItem(e)||void 0}catch(e){}return a||t}},v=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},x=e=>(e||(e=window.matchMedia(u)),e.matches?"dark":"light");function w(e){let{Component:t,pageProps:a}=e;return(0,r.jsxs)("main",{className:"".concat(n().variable," font-noto ").concat(s().variable," font-xilosa"),children:[(0,r.jsx)(l.x7,{position:"bottom-center",reverseOrder:!1}),(0,r.jsx)(f,{enableSystem:!0,attribute:"class",children:(0,r.jsx)(t,{...a})})]})}},7952:function(){},6141:function(e){e.exports={style:{fontFamily:"'__Noto_Sans_72c578', '__Noto_Sans_Fallback_72c578'",fontWeight:200,fontStyle:"normal"},className:"__className_72c578",variable:"__variable_72c578"}},1247:function(e){e.exports={style:{fontFamily:"'__xilosa_9bd79e', '__xilosa_Fallback_9bd79e'"},className:"__className_9bd79e",variable:"__variable_9bd79e"}},6501:function(e,t,a){"use strict";let r,o;a.d(t,{x7:function(){return eo},ZP:function(){return es}});var s,i=a(7294);let n={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||n,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,m=(e,t)=>{let a="",r="",o="";for(let s in e){let i=e[s];"@"==s[0]?"i"==s[1]?a=s+" "+i+";":r+="f"==s[1]?m(i,s):s+"{"+m(i,"k"==s[1]?"":t)+"}":"object"==typeof i?r+=m(i,t?t.replace(/([^,])+/g,e=>s.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):s):null!=i&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=m.p?m.p(s,i):s+":"+i+";")}return a+(t&&o?t+"{"+o+"}":o)+r},p={},f=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+f(e[a]);return t}return e},h=(e,t,a,r,o)=>{var s;let i=f(e),n=p[i]||(p[i]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(i));if(!p[n]){let t=i!==e?e:(e=>{let t,a,r=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?r.shift():t[3]?(a=t[3].replace(u," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(u," ").trim();return r[0]})(e);p[n]=m(o?{["@keyframes "+n]:t}:t,a?"":"."+n)}let l=a&&p.g?p.g:null;return a&&(p.g=p[n]),s=p[n],l?t.data=t.data.replace(l,s):-1===t.data.indexOf(s)&&(t.data=r?s+t.data:t.data+s),n},y=(e,t,a)=>e.reduce((e,r,o)=>{let s=t[o];if(s&&s.call){let e=s(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;s=t?"."+t:e&&"object"==typeof e?e.props?"":m(e,""):!1===e?"":e}return e+r+(null==s?"":s)},"");function g(e){let t=this||{},a=e.call?e(t.p):e;return h(a.unshift?a.raw?y(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,l(t.target),t.g,t.o,t.k)}g.bind({g:1});let b,v,x,w=g.bind({k:1});function $(e,t){let a=this||{};return function(){let r=arguments;function o(s,i){let n=Object.assign({},s),l=n.className||o.className;a.p=Object.assign({theme:v&&v()},n),a.o=/ *go\d+/.test(l),n.className=g.apply(a,r)+(l?" "+l:""),t&&(n.ref=i);let c=e;return e[0]&&(c=n.as||e,delete n.as),x&&c[0]&&x(n),b(c,n)}return t?t(o):o}}var _=e=>"function"==typeof e,E=(e,t)=>_(e)?e(t):e,k=(r=0,()=>(++r).toString()),S=()=>{if(void 0===o&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");o=!e||e.matches}return o},C=new Map,N=e=>{if(C.has(e))return;let t=setTimeout(()=>{C.delete(e),A({type:4,toastId:e})},1e3);C.set(e,t)},T=e=>{let t=C.get(e);t&&clearTimeout(t)},O=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&T(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return e.toasts.find(e=>e.id===a.id)?O(e,{type:1,toast:a}):O(e,{type:0,toast:a});case 3:let{toastId:r}=t;return r?N(r):e.toasts.forEach(e=>{N(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},j=[],I={toasts:[],pausedAt:void 0},A=e=>{I=O(I,e),j.forEach(e=>{e(I)})},L={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},P=(e={})=>{let[t,a]=(0,i.useState)(I);(0,i.useEffect)(()=>(j.push(a),()=>{let e=j.indexOf(a);e>-1&&j.splice(e,1)}),[t]);let r=t.toasts.map(t=>{var a,r;return{...e,...e[t.type],...t,duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||L[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}});return{...t,toasts:r}},z=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||k()}),M=e=>(t,a)=>{let r=z(t,e,a);return A({type:2,toast:r}),r.id},F=(e,t)=>M("blank")(e,t);F.error=M("error"),F.success=M("success"),F.loading=M("loading"),F.custom=M("custom"),F.dismiss=e=>{A({type:3,toastId:e})},F.remove=e=>A({type:4,toastId:e}),F.promise=(e,t,a)=>{let r=F.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then(e=>(F.success(E(t.success,e),{id:r,...a,...null==a?void 0:a.success}),e)).catch(e=>{F.error(E(t.error,e),{id:r,...a,...null==a?void 0:a.error})}),e};var D=(e,t)=>{A({type:1,toast:{id:e,height:t}})},H=()=>{A({type:5,time:Date.now()})},K=e=>{let{toasts:t,pausedAt:a}=P(e);(0,i.useEffect)(()=>{if(a)return;let e=Date.now(),r=t.map(t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(a<0){t.visible&&F.dismiss(t.id);return}return setTimeout(()=>F.dismiss(t.id),a)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[t,a]);let r=(0,i.useCallback)(()=>{a&&A({type:6,time:Date.now()})},[a]),o=(0,i.useCallback)((e,a)=>{let{reverseOrder:r=!1,gutter:o=8,defaultPosition:s}=a||{},i=t.filter(t=>(t.position||s)===(e.position||s)&&t.height),n=i.findIndex(t=>t.id===e.id),l=i.filter((e,t)=>t<n&&e.visible).length;return i.filter(e=>e.visible).slice(...r?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+o,0)},[t]);return{toasts:t,handlers:{updateHeight:D,startPause:H,endPause:r,calculateOffset:o}}},J=$("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,U=$("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,X=$("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Z=$("div")`
  position: absolute;
`,q=$("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,B=$("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,R=({toast:e})=>{let{icon:t,type:a,iconTheme:r}=e;return void 0!==t?"string"==typeof t?i.createElement(B,null,t):t:"blank"===a?null:i.createElement(q,null,i.createElement(U,{...r}),"loading"!==a&&i.createElement(Z,null,"error"===a?i.createElement(J,{...r}):i.createElement(X,{...r})))},V=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,W=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,Y=$("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,G=$("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Q=(e,t)=>{let a=e.includes("top")?1:-1,[r,o]=S()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[V(a),W(a)];return{animation:t?`${w(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=i.memo(({toast:e,position:t,style:a,children:r})=>{let o=e.height?Q(e.position||t||"top-center",e.visible):{opacity:0},s=i.createElement(R,{toast:e}),n=i.createElement(G,{...e.ariaProps},E(e.message,e));return i.createElement(Y,{className:e.className,style:{...o,...a,...e.style}},"function"==typeof r?r({icon:s,message:n}):i.createElement(i.Fragment,null,s,n))});s=i.createElement,m.p=void 0,b=s,v=void 0,x=void 0;var et=({id:e,className:t,style:a,onHeightUpdate:r,children:o})=>{let s=i.useCallback(t=>{if(t){let a=()=>{r(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return i.createElement("div",{ref:s,className:t,style:a},o)},ea=(e,t)=>{let a=e.includes("top"),r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:S()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...a?{top:0}:{bottom:0},...r}},er=g`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,eo=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:r,children:o,containerStyle:s,containerClassName:n})=>{let{toasts:l,handlers:c}=K(a);return i.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...s},className:n,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(a=>{let s=a.position||t,n=ea(s,c.calculateOffset(a,{reverseOrder:e,gutter:r,defaultPosition:t}));return i.createElement(et,{id:a.id,key:a.id,onHeightUpdate:c.updateHeight,className:a.visible?er:"",style:n},"custom"===a.type?E(a.message,a):o?o(a):i.createElement(ee,{toast:a,position:s}))}))},es=F}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(6885)}),_N_E=e.O()}]);