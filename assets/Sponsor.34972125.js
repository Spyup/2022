var e=Object.defineProperty,r=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,a=Object.prototype.propertyIsEnumerable,s=(r,o,a)=>o in r?e(r,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[o]=a;import{u as n,l as t,q as l,t as i,v as c,m as p}from"./app.7b277d54.js";import{d as u,b as d,k as m,f,w as v,o as g,c as y,a as h,x as b,P as k,F as O,e as j,y as w}from"./vendor.e49a9334.js";var S=u({name:"Sponsor",setup(){const{locale:e,t:u}=n(),{breakpoint:g}=t(),y=d((()=>e.value)),h=m(null),b=m(null),k=async e=>Object.fromEntries(await Promise.all(Object.entries(c.groupBy(e,"level")).sort(((e,r)=>{const o=["titanium","diamond","gold","silver","bronze","friend","co-organizer","special-thanks"];return o.indexOf(e[0])-o.indexOf(r[0])})).map((async([e,n])=>[e,await Promise.all(n.map((async e=>{const n=((e,n)=>{for(var t in n||(n={}))r.call(n,t)&&s(e,t,n[t]);if(o)for(var t of o(n))a.call(n,t)&&s(e,t,n[t]);return e})({},e);return n.intro={en:p(n.intro.en),"zh-TW":p(n.intro["zh-TW"])},n})))])))),O=()=>{const e=Array.from(document.querySelectorAll("#sponsor .content-container"));e.forEach((e=>{e.classList.remove("folded")})),e.forEach((e=>{e.getBoundingClientRect().height>300&&e.classList.add("folded")}))};return f((async()=>{await(async()=>{h.value=await k(i.filter((e=>!e.prepare))),b.value=await k(i.filter((e=>e.prepare)))})(),l&&O()})),l&&v((()=>g.value),(async()=>{O()})),{t:u,languageType:y,sponsorGroups:h,prepareSponsorGroups:b,onReadmoreClick:e=>{if(!l)return;e.target.parentElement.classList.remove("folded")}}}});const T={id:"sponsor",class:"page-container"},$={class:"card outer-container"},G={class:"title"},P={class:"call-for-sponsorship"},C=h("a",{href:"mailto:sponsorship@coscup.org"}," sponsorship@coscup.org ",-1),E={class:"title level"},L={class:"img-container"},R={class:"content-container"},x=h("span",null,"Read More",-1),z={key:1,class:"outer-container"},F={class:"title level"},M={class:"card sponsor-container"},q={class:"content-container"};S.render=function(e,r,o,a,s,n){return g(),y("main",T,[h("div",$,[h("h2",G,b(e.t("sponsor.callForSponsorship.title")),1),h("p",P,[k(b(e.t("sponsor.callForSponsorship.content"))+" ",1),C])]),e.sponsorGroups?(g(!0),y(O,{key:0},j(Object.entries(e.sponsorGroups),(([o,a])=>(g(),y("div",{key:`sponsor-level-${o}`,class:"outer-container"},[h("h2",E,b(e.t(`sponsor.level['${o}']`)),1),(g(!0),y(O,null,j(a,(o=>(g(),y("div",{key:o.id,class:"card sponsor-container"},[h("div",L,[h("a",{href:`${o.link}`,target:"_blank",rel:"noopener"},[h("img",{src:o.image,alt:`Sponsor ${o.name[e.languageType]}'s logo`},null,8,["src","alt"])],8,["href"])]),h("div",R,[h("a",{href:`${o.link}`,target:"_blank",rel:"noopener"},[h("h2",null,b(o.name[e.languageType]),1)],8,["href"]),h("article",{innerHTML:o.intro[e.languageType],class:"markdown"},null,8,["innerHTML"]),h("div",{class:"readmore",onClick:r[1]||(r[1]=(...r)=>e.onReadmoreClick&&e.onReadmoreClick(...r))},[x])])])))),128))])))),128)):w("v-if",!0),Object.keys(e.prepareSponsorGroups||{}).length?(g(),y("div",z,[h("h2",F,b(e.t("sponsor.more")),1),h("div",M,[h("div",q,[(g(!0),y(O,null,j(Object.entries(e.prepareSponsorGroups),(([r,o])=>(g(),y("p",{key:`sponsor-level-${r}`},b(e.t(`sponsor.level['${r}']`))+" － "+b(o.map((r=>r.name[e.languageType])).join(",")),1)))),128))])])])):w("v-if",!0)])};export{S as default};
