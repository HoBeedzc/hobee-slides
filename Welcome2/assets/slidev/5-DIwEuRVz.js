import{d as _,t as D,a0 as A,o as p,b as g,e as s,m as y,A as k,g as v,y as w,f as b,i as $,h as C,aA as S,c as x,k as f,l as u,aa as U,q as W,s as E,p as F,a as z,a6 as t}from"../modules/vue-Dd-JAU0j.js";import{ag as I,_ as N,ah as m}from"../index-Yi4DRX9V.js";import{_ as P}from"./CodeBlockWrapper.vue_vue_type_script_setup_true_lang-DWlulXuL.js";import{p as V,u as M,f as O}from"./context-BsykXzDd.js";import"../modules/shiki-CvS8Dv-u.js";import"../modules/unplugin-icons-DXBFbDK-.js";function B(i){return i.startsWith("/")?"/Welcome2/"+i.slice(1):i}function R(i,n=!1,l="cover"){const a=i&&(i[0]==="#"||i.startsWith("rgb")),r={background:a?i:void 0,color:i&&!a?"white":void 0,backgroundImage:a?void 0:i?n?`linear-gradient(#0005, #0008), url(${B(i)})`:`url("${B(i)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:l};return r.background||delete r.background,r}const T=["width","height"],X=["id"],q=["fill"],H=["id"],L=["fill"],Y=["x1","y1","x2","y2","stroke","stroke-width","marker-end","marker-start"],j=["x1","y1","x2","y2"],G=_({__name:"Arrow",props:{x1:{},y1:{},x2:{},y2:{},width:{},color:{},twoWay:{type:Boolean}},emits:["dblclick","clickOutside"],setup(i,{emit:n}){const l=n,a=I(),r={markerUnits:"strokeWidth",markerHeight:7,refY:3.5,orient:"auto"},d=D();return A(d,()=>l("clickOutside")),(e,h)=>(p(),g("svg",{class:"absolute left-0 top-0",width:Math.max(+e.x1,+e.x2)+50,height:Math.max(+e.y1,+e.y2)+50},[s("defs",null,[s("marker",y({id:k(a),markerWidth:"10",refX:"9"},r),[s("polygon",{points:"0 0, 10 3.5, 0 7",fill:e.color||"currentColor",onDblclick:h[0]||(h[0]=c=>l("dblclick"))},null,40,q)],16,X),e.twoWay?(p(),g("marker",y({key:0,id:`${k(a)}-rev`,markerWidth:"20",refX:"11"},r),[s("polygon",{points:"20 0, 10 3.5, 20 7",fill:e.color||"currentColor",onDblclick:h[1]||(h[1]=c=>l("dblclick"))},null,40,L)],16,H)):v("v-if",!0)]),s("line",{x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2,stroke:e.color||"currentColor","stroke-width":e.width||2,"marker-end":`url(#${k(a)})`,"marker-start":e.twoWay?`url(#${k(a)}-rev)`:"none",onDblclick:h[2]||(h[2]=c=>l("dblclick"))},null,40,Y),s("line",{ref_key:"clickArea",ref:d,x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2,stroke:"transparent","stroke-linecap":"round","stroke-width":20,onDblclick:h[3]||(h[3]=c=>l("dblclick"))},null,40,j)],8,T))}}),J={class:"grid grid-cols-2 w-full h-full auto-rows-fr"},K=_({__name:"image-right",props:{image:{type:String},class:{type:String},backgroundSize:{type:String,default:"cover"}},setup(i){const n=i,l=w(()=>R(n.image,!1,n.backgroundSize));return(a,r)=>(p(),g("div",J,[s("div",{class:$(["slidev-layout default",n.class])},[b(a.$slots,"default")],2),s("div",{class:"w-full h-full",style:C(l.value)},null,4)]))}}),o=i=>(F("data-v-d0302b12"),i=i(),z(),i),Q=o(()=>s("h1",null,"Code",-1)),Z=o(()=>s("p",null,[t("Use code snippets and get the highlighting directly!"),s("sup",{class:"footnote-ref"},[s("a",{href:"#fn1",id:"fnref1"},"[1]")])],-1)),ss=o(()=>s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-ts"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"interface"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," User"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"  id"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"number")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"  firstName"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"string")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"  lastName"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"string")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"  role"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"string")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"}")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"function"),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," updateUser"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"id"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," update"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"User"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"  const "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"user"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," getUser"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"id"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"  const "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"newUser"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," { ..."),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"user"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},", ..."),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"update"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," }")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"  saveUser"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"id"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," newUser"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"}")])])],-1)),is=o(()=>s("hr",{class:"footnotes-sep"},null,-1)),es=o(()=>s("section",{class:"footnotes"},[s("ol",{class:"footnotes-list"},[s("li",{id:"fn1",class:"footnote-item"},[s("p",null,[s("a",{href:"https://sli.dev/guide/syntax.html#line-highlighting",target:"_blank"},"Learn More"),t(),s("a",{href:"#fnref1",class:"footnote-backref"},"↩︎")])])])],-1)),ts={__name:"5",setup(i){return V(m),M(),(n,l)=>{const a=P,r=G,d=S("click");return p(),x(K,W(E(k(O)(k(m),4))),{default:f(()=>[Q,Z,u(a,y({},{ranges:["all","2","1-6","9","all"]}),{default:f(()=>[ss]),_:1},16),U(u(r,{x1:"400",y1:"420",x2:"230",y2:"330",color:"#564",width:"3",arrowSize:"1"},null,512),[[d,[3,4]]]),is,es]),_:1},16)}}},os=N(ts,[["__scopeId","data-v-d0302b12"]]);export{os as default};
