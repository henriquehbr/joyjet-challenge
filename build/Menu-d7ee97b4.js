import{S as e,i as s,s as a,e as t,a as n,b as l,n as o,d as r,c,f as d}from"./index-b97eaa5d.js";function i(e){let s;return{c(){s=t("div"),s.innerHTML='<a href="/" class="svelte-15etjvw">Blog</a> \n\t<a href="/" class="svelte-15etjvw">Popular</a> \n\t<a href="/" class="svelte-15etjvw">Archive</a> \n\t<a href="/" class="svelte-15etjvw">About</a>',n(s,"class","svelte-15etjvw")},m(a,t){l(a,s,t),e[2](s)},p:o,i:o,o:o,d(a){a&&r(s),e[2](null)}}}function u(e,s,a){let t,{opened:n=!1}=s;return c(()=>n?t.classList.add("opened"):t.classList.remove("opened")),e.$set=e=>{"opened"in e&&a(1,n=e.opened)},[t,n,function(e){d[e?"unshift":"push"](()=>{a(0,t=e)})}]}export default class extends e{constructor(e){super(),s(this,e,u,i,a,{opened:1})}}
