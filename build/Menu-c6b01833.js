import{S as e,i as s,s as t,e as a,a as n,b as l,n as o,d as r,c,f as i}from"./index-13541f4e.js";function d(e){let s;return{c(){s=a("div"),s.innerHTML='<a href="/" class="svelte-15etjvw">Blog</a> \n\t<a href="/" class="svelte-15etjvw">Popular</a> \n\t<a href="/" class="svelte-15etjvw">Archive</a> \n\t<a href="/" class="svelte-15etjvw">About</a>',n(s,"class","svelte-15etjvw")},m(t,a){l(t,s,a),e[2](s)},p:o,i:o,o:o,d(t){t&&r(s),e[2](null)}}}function u(e,s,t){let a,{opened:n=!1}=s;return c(()=>n?a.classList.add("opened"):a.classList.remove("opened")),e.$set=e=>{"opened"in e&&t(1,n=e.opened)},[a,n,function(e){i[e?"unshift":"push"](()=>{t(0,a=e)})}]}export default class extends e{constructor(e){super(),s(this,e,u,d,t,{opened:1})}}
