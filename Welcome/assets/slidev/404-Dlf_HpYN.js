import{d as m,M as f,y as h,r as x,o as n,b as v,e as t,a6 as a,x as r,A as g,c as d,k as p,g as u,p as k,a as S}from"../modules/vue-BjFNkiJF.js";import{a as y,_ as N}from"../index-DTWa_Q7l.js";import"../modules/shiki-4yRvlU5n.js";const w=o=>(k("data-v-53098de1"),o=o(),S(),o),B={class:"grid justify-center text-center pt-15% gap-5"},C=w(()=>t("h1",{class:"text-9xl font-light"}," 404 ",-1)),I={class:"text-2xl"},R={class:"op-60"},V={class:"mt-3 flex flex-col gap-2 max-w-xs mx-auto w-full"},G=m({__name:"404",setup(o){const{currentRoute:l}=f(),{total:i}=y(),s=h(()=>{const c=l.value.path.match(/\d+/);if(c){const e=+c[0];if(e>0&&e<=i.value)return e}return null});return(_,c)=>{const e=x("RouterLink");return n(),v("div",B,[t("div",null,[C,t("p",I,[a(" Page "),t("code",R,r(g(l).path),1),a(" not found ")])]),t("div",V,[s.value!==1?(n(),d(e,{key:0,to:"/",class:"page-link"},{default:p(()=>[a(" Go Home ")]),_:1})):u("v-if",!0),s.value?(n(),d(e,{key:1,to:`/${s.value}`,class:"page-link"},{default:p(()=>[a(" Go to Slide "+r(s.value),1)]),_:1},8,["to"])):u("v-if",!0)])])}}}),A=N(G,[["__scopeId","data-v-53098de1"]]);export{A as default};
