import{a1 as n,ag as r,t as j,y as u,ae as $,aB as v}from"../modules/vue-DM5yw1xj.js";import{aj as p,B as C,z as x,A as S,ak as l,y as k,w as R,C as T,al as g,am as E}from"../index-Cpos3gYu.js";function F(){const t=n(p),a=r(t,"nav"),s=n(C).value,e=r(s,"current"),i=n(x),c=n(S),o=n(l,{}),d=n(k,void 0),m=n(R,j(1)),f=n(T,u(()=>1));return{$slidev:t,$nav:a,$clicksContext:s,$clicks:e,$page:i,$route:d,$renderContext:c,$frontmatter:o,$scale:m,$zoom:f}}function L(t){var i,c;$(l,t);const{$slidev:a,$page:s}=F(),e=a.nav.slides.find(o=>o.no===s.value);if((c=(i=e==null?void 0:e.meta)==null?void 0:i.slide)!=null&&c.frontmatter){for(const o of Object.keys(e.meta.slide.frontmatter))o in t||delete e.meta.slide.frontmatter[o];Object.assign(e.meta.slide.frontmatter,t)}}function O(t,a){return{...v(t,a===0?g:E),frontmatter:t}}export{O as f,L as p,F as u};