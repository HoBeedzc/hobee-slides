import{d as v,r as A,A as h,o,c as k,k as f,f as _,b as d,y,F as S,ad as b,i as C,l as u,g as D,h as L,m as P,q as I,s as N,e}from"../modules/vue-Dd-JAU0j.js";import{a as F,ad as T,ae as B}from"../index-Yi4DRX9V.js";import{_ as M}from"./title-renderer.md_vue_type_script_setup_true_lang-BLyCp9Mo.js";import{u as $,p as E,f as H}from"./context-BsykXzDd.js";import{_ as V}from"./CodeBlockWrapper.vue_vue_type_script_setup_true_lang-DWlulXuL.js";import{I as z}from"./default-Blctdb6p.js";import"../modules/shiki-CvS8Dv-u.js";import"../modules/unplugin-icons-DXBFbDK-.js";const O=["href","innerHTML"],R=["href"],j=v({__name:"Link",props:{to:{},title:{}},setup(p){const{isPrintMode:n}=F();return(s,r)=>{const i=A("RouterLink");return!h(n)&&s.title?(o(),k(i,{key:0,to:String(s.to),onClick:r[0]||(r[0]=c=>c.target.blur()),innerHTML:s.title},null,8,["to","innerHTML"])):!h(n)&&!s.title?(o(),k(i,{key:1,to:String(s.to),onClick:r[1]||(r[1]=c=>c.target.blur())},{default:f(()=>[_(s.$slots,"default")]),_:3},8,["to"])):h(n)&&s.title?(o(),d("a",{key:2,href:`#${s.to}`,innerHTML:s.title},null,8,O)):(o(),d("a",{key:3,href:`#${s.to}`},[_(s.$slots,"default")],8,R))}}}),q=["start"],w=v({__name:"TocList",props:{level:{default:1},start:{},listStyle:{},list:{},listClass:{}},setup(p){const n=p,s=y(()=>[...T(n.listClass||[]),"slidev-toc-list",`slidev-toc-list-level-${n.level}`]),r=y(()=>[...T(n.listStyle||[])]);return(i,c)=>{const m=j,l=A("TocList",!0);return i.list&&i.list.length>0?(o(),d("ol",{key:0,class:C(s.value),start:i.level===1?i.start:void 0,style:L(r.value.length>=i.level?`list-style:${r.value[i.level-1]}`:void 0)},[(o(!0),d(S,null,b(i.list,t=>(o(),d("li",{key:t.path,class:C(["slidev-toc-item",[{"slidev-toc-item-active":t.active},{"slidev-toc-item-parent-active":t.activeParent}]])},[u(m,{to:t.path},{default:f(()=>[u(h(M),{no:t.no},null,8,["no"])]),_:2},1032,["to"]),t.children.length>0?(o(),k(l,{key:0,level:i.level+1,"list-style":i.listStyle,list:t.children,"list-class":i.listClass},null,8,["level","list-style","list","list-class"])):D("v-if",!0)],2))),128))],14,q)):D("v-if",!0)}}}),W=v({__name:"Toc",props:{columns:{default:1},listClass:{default:""},start:{default:1},listStyle:{default:""},maxDepth:{default:Number.POSITIVE_INFINITY},minDepth:{default:1},mode:{default:"all"}},setup(p){const n=p,{$slidev:s}=$();function r(l,t=1){if(t>Number(n.maxDepth))return[];if(t<Number(n.minDepth)){const a=l.find(g=>g.active||g.activeParent);return a?r(a.children,t+1):[]}return l.map(a=>({...a,children:r(a.children,t+1)}))}function i(l){return l.filter(t=>t.active||t.activeParent||t.hasActiveParent).map(t=>({...t,children:i(t.children)}))}function c(l){const t=l.some(a=>a.active||a.activeParent||a.hasActiveParent);return l.filter(()=>t).map(a=>({...a,children:c(a.children)}))}const m=y(()=>{const l=s==null?void 0:s.nav.tocTree;if(!l)return[];let t=r(l);return n.mode==="onlyCurrentTree"?t=i(t):n.mode==="onlySiblings"&&(t=c(t)),t});return(l,t)=>{const a=w;return o(),d("div",{class:"slidev-toc",style:L(`column-count:${l.columns}`)},[u(a,{level:1,start:l.start,"list-style":l.listStyle,list:m.value,"list-class":l.listClass},null,8,["start","list-style","list","list-class"])],4)}}}),Y=e("h1",null,"Table of contents",-1),G=e("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[e("code",{class:"language-html"},[e("span",{class:"line"},[e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),e("span",{style:{"--shiki-dark":"#FDAEB7","--shiki-light":"#B31D28"}},"Toc"),e("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," minDepth"),e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),e("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),e("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"1"),e("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),e("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," maxDepth"),e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),e("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),e("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"1"),e("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"></"),e("span",{style:{"--shiki-dark":"#FDAEB7","--shiki-light":"#B31D28"}},"Toc"),e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")])])],-1),et={__name:"3",setup(p){return E(B),$(),(n,s)=>{const r=V,i=W;return o(),k(z,I(N(h(H)(h(B),2))),{default:f(()=>[Y,u(r,P({},{ranges:[]}),{default:f(()=>[G]),_:1},16),u(i,{maxDepth:"1"})]),_:1},16)}}};export{et as default};
