import{b as v,s as b,t as g}from"../modules/unplugin-icons-_9YsUpsT.js";import{d as x,y as k,o as d,b as y,e as t,f as C,h as $,c as w,k as A,A as r,ar as B,l as c,q as P,s as S}from"../modules/vue-DM5yw1xj.js";import{u,p as H,f as z}from"./context-CkgQtL79.js";import{a1 as l}from"../index-Cpos3gYu.js";import"../modules/shiki-CG3CnnlV.js";function p(e){return e.startsWith("/")?"/HCII2024/"+e.slice(1):e}function G(e,o=!1){const n=e&&["#","rgb","hsl"].some(a=>e.indexOf(a)===0),s={background:n?e:void 0,color:e&&!n?"white":void 0,backgroundImage:n?void 0:e?o?`linear-gradient(#0005, #0008), url(${p(e)})`:`url("${p(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return s.background||delete s.background,s}const I={class:"my-auto w-full"},N=x({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(e){u();const o=e,n=k(()=>G(o.background,!0));return(s,a)=>(d(),y("div",{class:"slidev-layout cover text-center",style:$(n.value)},[t("div",I,[C(s.$slots,"default")])],4))}}),O=t("h1",null,"Cross-Cultural Perspectives on AI Generated Content",-1),V=t("p",null,"A Comparative Study of Attitudes and Acceptance Among Global Products",-1),q=t("p",null,"Zequn Liu, Zhe Chen @ Beihang University",-1),R={class:"pt-12"},T={class:"abs-br m-6 flex gap-2"},U={href:"https://hobee.me",target:"_blank",alt:"Hobee.me",title:"Open in Hobee.me",class:"text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white"},Z={href:"https://github.com/HoBeedzc",target:"_blank",alt:"GitHub",title:"Open in GitHub",class:"text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white"},Q={__name:"1",setup(e){H(l);const{$slidev:o,$nav:n,$clicksContext:s,$clicks:a,$page:E,$renderContext:F,$frontmatter:L}=u();return(W,i)=>{const _=v,m=b,h=g;return d(),w(N,P(S(r(z)(r(l),0))),{default:A(()=>[O,V,q,t("div",R,[t("span",{onClick:i[0]||(i[0]=(...f)=>r(o).nav.next&&r(o).nav.next(...f)),class:"px-2 py-1 rounded cursor-pointer",hover:"bg-white bg-opacity-10"},[B(" Press Space to Start "),c(_,{class:"inline"})])]),t("div",T,[t("a",U,[c(m)]),t("a",Z,[c(h)])])]),_:1},16)}}};export{Q as default};
