import{t as y,a as _}from"../chunks/BYu6QfEi.js";import"../chunks/D7DoZtlm.js";import{B as ie,_ as re,r as R,h as T,n as se,b as oe,I as b,a6 as ne,a0 as le,a1 as Y,q as P,t as O,v as ce,a2 as J,C as Q,a3 as pe,ao as B,z as $,k as W,ap as de,a9 as ue,T as F,aq as me,ar as xe,y as fe,as as ge,at as ve,au as be,av as he,o as we,i as _e,aw as ye,Z as ke,ax as qe,N as v,ay as Z,O as u,W as Ae,az as Te,P as w,M as N,f as Ce}from"../chunks/CaOECpkr.js";import{i as Ie,p as A}from"../chunks/DNi0yFB2.js";import{s as j}from"../chunks/hFJiue3V.js";function z(a,e){return e}function Me(a,e,t,i){for(var o=[],r=e.length,s=0;s<r;s++)xe(e[s].e,o,!0);var l=r>0&&o.length===0&&t!==null;if(l){var p=t.parentNode;fe(p),p.append(t),i.clear(),M(a,e[0].prev,e[r-1].next)}ge(o,()=>{for(var d=0;d<r;d++){var n=e[d];l||(i.delete(n.k),M(a,n.prev,n.next)),ve(n.e,!l)}})}function D(a,e,t,i,o,r=null){var s=a,l={flags:e,items:new Map,first:null};{var p=a;s=T?R(se(p)):p.appendChild(ie())}T&&oe();var d=null,n=!1,x=ne(()=>{var c=t();return _e(c)?c:c==null?[]:$(c)});re(()=>{var c=b(x),f=c.length;if(n&&f===0)return;n=f===0;let g=!1;if(T){var q=s.data===le;q!==(f===0)&&(s=Y(),R(s),P(!1),g=!0)}if(T){for(var k=null,m,h=0;h<f;h++){if(O.nodeType===8&&O.data===ce){s=O,g=!0,P(!1);break}var S=c[h],C=i(S,h);m=ee(O,l,k,null,S,C,h,o,e,t),l.items.set(C,m),k=m}f>0&&R(Y())}T||Ee(c,l,s,o,e,i,t),r!==null&&(f===0?d?J(d):d=Q(()=>r(s)):d!==null&&pe(d,()=>{d=null})),g&&P(!0),b(x)}),T&&(s=O)}function Ee(a,e,t,i,o,r,s){var l=a.length,p=e.items,d=e.first,n=d,x,c=null,f=[],g=[],q,k,m,h;for(h=0;h<l;h+=1){if(q=a[h],k=r(q,h),m=p.get(k),m===void 0){var S=n?n.e.nodes_start:t;c=ee(S,e,c,c===null?e.first:c.next,q,k,h,i,o,s),p.set(k,c),f=[],g=[],n=c.next;continue}if(Se(m,q,h),(m.e.f&B)!==0&&J(m.e),m!==n){if(x!==void 0&&x.has(m)){if(f.length<g.length){var C=g[0],I;c=C.prev;var V=f[0],L=f[f.length-1];for(I=0;I<f.length;I+=1)K(f[I],C,t);for(I=0;I<g.length;I+=1)x.delete(g[I]);M(e,V.prev,L.next),M(e,c,V),M(e,L,C),n=C,c=L,h-=1,f=[],g=[]}else x.delete(m),K(m,n,t),M(e,m.prev,m.next),M(e,m,c===null?e.first:c.next),M(e,c,m),c=m;continue}for(f=[],g=[];n!==null&&n.k!==k;)(n.e.f&B)===0&&(x??(x=new Set)).add(n),g.push(n),n=n.next;if(n===null)continue;m=n}f.push(m),c=m,n=m.next}if(n!==null||x!==void 0){for(var H=x===void 0?[]:$(x);n!==null;)(n.e.f&B)===0&&H.push(n),n=n.next;var te=H.length;if(te>0){var ae=l===0?t:null;Me(e,H,ae,p)}}W.first=e.first&&e.first.e,W.last=c&&c.e}function Se(a,e,t,i){de(a.v,e),a.i=t}function ee(a,e,t,i,o,r,s,l,p,d){var n=(p&be)!==0,x=(p&he)===0,c=n?x?ue(o):F(o):o,f=(p&me)===0?s:F(s),g={i:f,v:c,k:r,a:null,e:null,prev:t,next:i};try{return g.e=Q(()=>l(a,c,f,d),T),g.e.prev=t&&t.e,g.e.next=i&&i.e,t===null?e.first=g:(t.next=g,t.e.next=g.e),i!==null&&(i.prev=g,i.e.prev=g.e),g}finally{}}function K(a,e,t){for(var i=a.next?a.next.e.nodes_start:t,o=e?e.e.nodes_start:t,r=a.e.nodes_start;r!==i;){var s=we(r);o.before(r),r=s}}function M(a,e,t){e===null?a.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}const U=[...` 	
\r\f \v\uFEFF`];function Ne(a,e,t){var i=a==null?"":""+a;if(e&&(i=i?i+" "+e:e),t){for(var o in t)if(t[o])i=i?i+" "+o:o;else if(i.length)for(var r=o.length,s=0;(s=i.indexOf(o,s))>=0;){var l=s+r;(s===0||U.includes(i[s-1]))&&(l===i.length||U.includes(i[l]))?i=(s===0?"":i.substring(0,s))+i.substring(l+1):s=l}}return i===""?null:i}function G(a,e,t,i,o,r){var s=a.__className;if(T||s!==t){var l=Ne(t,i,r);(!T||l!==a.getAttribute("class"))&&(l==null?a.removeAttribute("class"):a.className=l),a.__className=t}else if(r)for(var p in r){var d=!!r[p];(o==null||d!==!!o[p])&&a.classList.toggle(p,d)}return r}function E(a,e,t,i){var o=a.__attributes??(a.__attributes={});T&&(o[e]=a.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&a.nodeName==="LINK")||o[e]!==(o[e]=t)&&(e==="style"&&"__styles"in a&&(a.__styles={}),e==="loading"&&(a[ye]=t),t==null?a.removeAttribute(e):typeof t!="string"&&Oe(a).includes(e)?a[e]=t:a.setAttribute(e,t))}var X=new Map;function Oe(a){var e=X.get(a.nodeName);if(e)return e;X.set(a.nodeName,e=[]);for(var t,i=a,o=Element.prototype;o!==i;){t=qe(i);for(var r in t)t[r].set&&e.push(r);i=ke(i)}return e}var je=y('<nav class="fixed top-0 left-0 w-full h-[60px] px-3 flex items-center justify-end bg-[#2d2b2a] z-10 md:bg-transparent md:top-8"><a href="#0" class="absolute left-1/2 transform -translate-x-1/2"><img src="./images/restaurant6_logo.png" alt=""></a> <button aria-label="Menu"><svg xmlns="http://www.w3.org/2000/svg" width="40px" height="22px" viewBox="0 0 22 22" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z" fill="#ffffff"></path></svg></button></nav>');function ze(a){var e=je();_(a,e)}var De=y('<section class="relative w-full h-[617px] bg-[url(../images/rest6-slider-slide111.jpg)] flex items-center justify-center bg-cover bg-center bg-no-repeat"><!> <div class="absolute inset-0 z-1 top-30"><img src="../images/rest6-fork.png" alt="fork" class="w-full h-full object-contain"></div> <span class="relative text-center text-white font-[cormorant_garamond] font-thin leading-[62px] text-[120px] tracking-[62px] pl-[62px]">PASTA</span></section>');function Le(a){var e=De(),t=v(e);ze(t),Z(4),u(e),_(a,e)}var He=y('<div class="absolute inset-0 z-10 top-24"><img alt="fork" class="w-full h-full object-contain"></div>'),Re=y('<div class="absolute inset-0 flex items-center justify-center bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out"><!></div>'),Pe=y(`<section class="md:flex md:h-[855px] h-fit"><div class="h-fit bg-[url(../images/rest6-gradient.png)] bg-center bg-no-repeat bg-cover p-[8.66%] flex flex-col items-center justify-center gap-y-[48px] md:w-1/2 md:mt-[-60px] z-1 md:items-start"><h2 class="font-[cormorant_garamond] text-center text-white text-4xl font-semibold md:text-start md:pl-3 md:pr-15 leading-[49px]">True & memorable taste made with love and tradition</h2> <p class="font-[poppins] text-sm text-center text-white text-[13px] font-light md:text-start md:pl-3 md:pr-15 leading-[27px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore e t enim ad minim veniam, quis nostrud
			exercitation ullamco quantum presto.</p> <img src="../images/rest6-flowers.png" alt="flowers" width="68" height="25" class="inline md:pl-3"></div> <div class="relative w-full h-fit overflow-hidden md:w-1/2 md:h-full"></div></section>`);function Be(a){let e=Te(0),t=[{image:"../images/rest6-slider-slide111.jpg",overlayImage:"./images/rest6-fork.png"},{image:"../images/rest6-slider-slide22.jpg"},{image:"../images/rest6-slider-slide32.jpg"}],i;function o(){Ae(e,(b(e)+1)%t.length)}function r(){s(),i=setInterval(o,5e3)}function s(){clearInterval(i)}r();var l=Pe(),p=w(v(l),2);D(p,5,()=>t,z,(d,n,x)=>{var c=Re(),f=v(c);{var g=q=>{var k=He(),m=v(k);u(k),N(()=>E(m,"src",b(n).overlayImage)),_(q,k)};Ie(f,q=>{x===0&&b(n).overlayImage&&q(g)})}u(c),N(()=>E(c,"style",`
          background-image: url(${b(n).image??""});
          opacity: ${(x===b(e)?1:0)??""};
          z-index: ${(x===b(e)?2:1)??""};
          background-size: ${(x===b(e)?"110% 110%":"100% 100%")??""};
          transition: opacity 2s ease-in-out, background-size 6s ease-in-out;
        `)),_(d,c)}),u(p),u(l),_(a,l)}var Ze=y(`<li class="flex flex-col gap-y-[15px] md:w-[30%]"><div class="h-[472.5px] md:h-[150.750px] relative bg-no-repeat bg-cover group transition-all duration-500 svelte-1jsy1na"><div class="absolute left-0 top-0 w-[14.2%] md:w-[30%] h-full bg-[#8b6f5c] bg-no-repeat bg-center scale-x-100 origin-left opacity-100 transition-all duration-1000
            group-hover:scale-x-0 group-hover:opacity-0"></div></div> <h4 class="font-[cormorant_garamond] text-xl font-bold whitespace-pre-line md:mb-[40px]"> </h4></li>`);function Ve(a,e){let t=A(e,"background",8),i=A(e,"icon",8),o=A(e,"title",8);var r=Ze(),s=v(r),l=v(s);u(s);var p=w(s,2),d=v(p,!0);u(p),u(r),N(()=>{E(s,"style",`background-image: url(${t()??""})`),E(l,"style",`background-image: url(${i()??""});`),j(d,o())}),_(a,r)}var Ye=y('<section class="mt-[120px] w-[634px] mx-auto md:w-[708px] lg:w-[900px]"><h2 class="font-[cormorant_garamond] text-center text-black text-4xl font-semibold md:text-start">We know how to make <br> the best Italian food in the city.</h2> <ul class="mt-[35px] flex flex-col gap-[15px] md:flex-row md:gap-[40px]"></ul></section>');function We(a){const e=[{background:"../images/rest6-home-box1.jpg",icon:"../images/rest6-icon1.png",title:`20 years of
experience`},{background:"../images/rest6-home-box2.jpg",icon:"../images/rest6-icon2.png",title:`Only fresh Italian
ingredients`},{background:"../images/rest6-home-box3.jpg",icon:"../images/rest6-icon-3.png",title:"Traditional recipes"}];var t=Ye(),i=w(v(t),2);D(i,5,()=>e,z,(o,r)=>{let s=()=>b(r).background,l=()=>b(r).icon,p=()=>b(r).title;Ve(o,{get background(){return s()},get icon(){return l()},get title(){return p()}})}),u(i),u(t),_(a,t)}var Fe=y(`<section class="mt-[120px] mb-[80px] md:flex md:items-end md:gap-x-[9.12%]"><div class="mx-[9.01%] md:w-[45%] md:pl-[18%] md:mx-0"><h2 class="font-[cormorant_garamond] text-center text-black text-4xl font-semibold leading-[49px] md:text-start md:mr-[10%]">We have been<br>serving our dishes<br>since 1910</h2> <p class="mt-[20px] font-[poppins] text-[#5e5e5e] text-[13px] text-center font-light leading-[27px] md:text-start md:mr-[10%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore e t enim ad minim veniam, quis nostrud
			exercitation ullamco quantum presto. Lorem ipsum dolot sit omnia des.</p></div> <div class="mt-[60px] h-[232.5px] bg-[url(./images/rest6-home-forkk.png)] bg-no-repeat bg-contain bg-right md:w-[45%] md:bg-bottom"></div></section>`);function Ke(a){var e=Fe();_(a,e)}var Ue=y('<li class="border-b border-solid border-[#5e5e5e] pb-[20px] last:border-none last:pb-0 md:flex md:justify-between"><div class="md:w-[66.32%]"><h5 class="text-[20px] font-[cormorant_garamond] text-black font-bold text-center md:text-start"> </h5> <p class="my-[15px] mb-[15px] text-[13px] font-[poppins] text-[#5e5e5e] font-light text-center md:text-start"> </p></div> <span class="mx-auto block text-[19px] font-[cormorant_garamond] text-black font-light text-center md:w-[23.68%] md:text-end"> </span></li>');function Ge(a,e){let t=A(e,"nameOfDish",8),i=A(e,"description",8),o=A(e,"price",8);var r=Ue(),s=v(r),l=v(s),p=v(l,!0);u(l);var d=w(l,2),n=v(d,!0);u(d),u(s);var x=w(s,2),c=v(x);u(x),u(r),N(()=>{j(p,t()),j(n,i()),j(c,`$${o()??""}`)}),_(a,r)}var Xe=y('<li><div><div></div> <div class="flex flex-col items-center justify-end gap-y-5 md:w-[36%]"><div class="w-[125px] h-[107.3px] bg-no-repeat bg-[bottom_center] bg-contain"></div> <h4 class="text-[23px] font-[cormorant_garamond] text-black font-semibold"> </h4> <ul class="flex flex-col gap-[33px] mt-[20px] mx-auto w-[84.02%]"></ul></div></div></li>');function Je(a,e){let t=A(e,"title",8),i=A(e,"icon",8),o=A(e,"background",8),r=A(e,"index",8);const s=[{nameOfDish:"Proin gravida gravida",description:"Lorem ipsum dolor sit amet purus vitae libero lacinia accumsan vitae, dapibus et, tincidunt at, vulputate at sit amet purus vitae.",price:"23"},{nameOfDish:"Mauris pellentesque",description:"Lorem ipsum dolor sit amet purus vitae libero lacinia accumsan vitae, dapibus et, tincidunt at, vulputate at sit amet purus vitae.",price:"12"},{nameOfDish:"Libero lacinia",description:"Lorem ipsum dolor sit amet purus vitae libero lacinia accumsan vitae, dapibus et, tincidunt at, vulputate at sit amet purus vitae.",price:"16"}];var l=Xe(),p=v(l);let d;var n=v(p),x=w(n,2),c=v(x),f=w(c,2),g=v(f,!0);u(f);var q=w(f,2);D(q,5,()=>s,z,(k,m)=>{let h=()=>b(m).nameOfDish,S=()=>b(m).description,C=()=>b(m).price;Ge(k,{get nameOfDish(){return h()},get description(){return S()},get price(){return C()}})}),u(q),u(x),u(p),u(l),N(()=>{d=G(p,1,"flex flex-col md:flex-row md:gap-x-[6.99%] md:items-start",null,d,{"md:flex-row-reverse":r()%2===1}),G(n,1,`mb-[50px] h-[1322.47px] w-full bg-cover bg-no-repeat bg-center md:w-[25%] md:h-[331px]
			${(r()===2?"hidden md:block":"")??""}`),E(n,"style",`background-image: url(${o()??""})`),E(c,"style",`background-image: url(${i()??""})`),j(g,t())}),_(a,l)}var Qe=y('<section class="mt-[140px]"><h1 class="font-[cormorant_garamond] text-center text-black text-[53px] font-semibold md:font-normal md:px-[5%] md:leading-[61px]">The selected menu<br>More great meals await you<br>inside the trattoria</h1> <ul class="flex flex-col my-[50px] gap-y-[50px] md:mt-[90px]"></ul> <button class="block mt-[40px] mb-[20px] mx-auto w-[286px] h-[44px] bg-[#8b6f5c] font-[poppins] text-white text-[13px] font-light">BOOK A TABLE</button></section>');function $e(a){const e=[{background:"../images/rest6-pizza.jpg",title:"STARTERS",icon:"../images/rest6-bread-icon.png"},{background:"../images/rest6-pasta.jpg",title:"PASTA",icon:"../images/rest6-pasta-icon.png"},{title:"PIZZA",icon:"../images/rest6-pizza-icon.png"}];var t=Qe(),i=w(v(t),2);D(i,5,()=>e,z,(o,r,s)=>{let l=()=>b(r).icon,p=()=>b(r).title,d=()=>b(r).background;Je(o,{get icon(){return l()},get title(){return p()},get background(){return d()},index:s})}),u(i),Z(2),u(t),_(a,t)}var et=y(`<section class="mt-[90px]"><div class="h-[951px] flex justify-center items-center bg-[url(../images/rest6-toscania.jpg)] bg-no-repeat bg-cover bg-center"><h2 class="font-[cormorant_garamond] text-center text-white text-5xl font-light md:text-[30.72px]">Our every meal has<br>its own unique story we want<br>to share with
			you</h2></div> <div class="md:flex md:gap-x-[5.6%]"><div class="h-[1175.5px] bg-[url(../images/rest6-spices.jpg)] bg-no-repeat bg-cover bg-center z-1 md:w-[20%] md:h-[235px] md:mt-[-100px]"></div> <div class="mt-25 mb-[95px] md:w-[34.375%] md:pr-[1.6%]"><h2 class="font-[cormorant_garamond] text-center text-black text-4xl font-semibold leading-[49px] md:text-start md:mb-10">Tuscany's tradition<br>on your plat</h2> <div class="mt-4 flex flex-col gap-y-[15px] mx-auto w-[84.02%] md:mx-0"><p class="font-[poppins] text-[#5e5e5e] font-light text-[13px] text-center leading-6 md:text-start"><span class="font-bold">Praesent nec magna ac pede. Mauris suscipit mauris.</span> Nam dolore erat id tortor. Phasellus at nibh nulla nulla, egestas quam
					eutore. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
					ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
					velit esse cillum dolore eu fugiat nulla pariatur.</p> <p class="font-[poppins] text-[#5e5e5e] font-light text-[13px] text-center leading-6 md:text-start">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
					officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
					omnis iste natus error sit voluptatem <span class="font-bold">accusantium doloremque</span> laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
					et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
					voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed <u>quia consequuntur magni dolores</u> eos qui ratione voluptatem sequi nesciunt. <span class="font-bold">Neque porro quisquam</span> est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
					sedrat voluptatem.</p></div></div> <div class="h-[930px] bg-[url(../images/rest6-mozarella.jpg)] bg-no-repeat bg-cover bg-center md:w-[34.375%] md:h-[320px] md:mt-25"></div></div></section>`);function tt(a){var e=et();_(a,e)}var at=y('<li class="bg-white w-[46px] h-[46px]"><a href="#0"><img></a></li>');function it(a,e){let t=A(e,"icon",8);var i=at(),o=v(i),r=v(o);u(o),u(i),N(()=>E(r,"src",t())),_(a,i)}var rt=y('<div class="mx-auto w-[84.02%] max-w-[1120px]"><div><h2 class="font-[cormorant_garamond] text-white text-[53px] font-normal text-center">Level 13, 2 Elizabeth St,<br>Melbourne, Vctoria 3000,<br>Australia</h2> <ul class="mt-4 flex gap-x-[6px] justify-center items-center"></ul></div> <div class="mt-15 md:flex md:gap-x-[5%]"><div><h6 class="font-[cormorant_garamond] text-white text-[23px] font-bold">Opening hours</h6> <p class="mt-[30px] font-[poppins] text-white font-light text-[13px]">Mauris neque. Pelentesque dolor. Mauris in est. Vivamus lacus sed</p> <ul class="my-5 flex flex-col"><li class="flex flex-col"><p class="w-fit border-b border-solid border-[#8b6f5c] font-[poppins] text-white text-[15px] py-[10px] mb-2">Monday - Friday</p> <p class="font-[poppins] text-[#8b6f5c] text-[32px] py-[10px] font-light">8<span class="text-base align-super ml-1">00</span> - 16<span class="text-base align-super ml-1">00</span></p></li> <li class="flex flex-col"><p class="w-fit border-b border-solid border-[#8b6f5c] font-[poppins] text-white text-[15px] py-[10px] mb-2">Saturday</p> <p class="font-[poppins] text-[#8b6f5c] text-[32px] py-[10px] font-light">8<span class="text-base align-super ml-1">00</span> - 15<span class="text-base align-super ml-1">00</span></p></li></ul></div> <form class="mt-5 w-full"><input type="text" placeholder="Name" class="block w-[96.8%] text-white text-[poppins] text-light text-[15px] border-b border-solid border-white/70 p-[10px] mx-[10px] mb-[13px] placeholder:text-white/70 placeholder:text-[15px] placeholder:text-[poppins] focus:border-white focus:placeholder:text-white focus:outline-none"> <div class="md:flex md:gap-x-2"><input type="email" placeholder="Email" class="block w-[96.8%] text-white text-[poppins] text-light text-[15px] border-b border-solid border-white/70 p-[10px] mx-[10px] mb-[13px] placeholder:text-white/70 placeholder:text-[15px] placeholder:text-[poppins] focus:border-white focus:placeholder:text-white focus:outline-none"> <input type="text" placeholder="Subject" class="block w-[96.8%] text-white text-[poppins] text-light text-[15px] border-b border-solid border-white/70 p-[10px] mx-[10px] mb-[13px] placeholder:text-white/70 placeholder:text-[15px] placeholder:text-[poppins] focus:border-white focus:placeholder:text-white focus:outline-none"></div> <input type="text" placeholder="Details" class="block w-[96.8%] text-white text-[poppins] text-light text-[15px] border-b border-solid border-white/70 p-[10px] mx-[10px] mb-[13px] placeholder:text-white/70 placeholder:text-[15px] placeholder:text-[poppins] focus:border-white focus:placeholder:text-white focus:outline-none"> <textarea placeholder="Your message" class="block w-[96.8%] h-[234px] text-white text-[poppins] text-light text-[15px] border-b border-solid border-white/70 p-[10px] mx-[10px] mb-[13px] resize-none placeholder:text-white/70 placeholder:text-[15px] placeholder:text-[poppins] focus:border-white focus:placeholder:text-white focus:outline-none"></textarea> <button type="submit" class="w-[96.8%] h-10 py-[10px] px-5 bg-[#8b6f5c] text-white text-[13px] text-[poppins] mx-[10px]">Send a message</button></form></div></div>');function st(a){const e=[{icon:"../"},{icon:"../"},{icon:"../"},{icon:"../"}];var t=rt(),i=v(t),o=w(v(i),2);D(o,5,()=>e,z,(r,s)=>{let l=()=>b(s).icon;it(r,{get icon(){return l()}})}),u(o),u(i),Z(2),u(t),_(a,t)}var ot=y('<header><!></header> <main><!> <!> <!> <!> <!></main> <footer class="bg-[url(../images/rest6-bottom-sec-gra.jpg)] bg-no-repeat bg-cover bg-[top_center] py-[124px]"><!></footer>',1);function ut(a){var e=ot(),t=Ce(e),i=v(t);Le(i),u(t);var o=w(t,2),r=v(o);Be(r);var s=w(r,2);We(s);var l=w(s,2);Ke(l);var p=w(l,2);$e(p);var d=w(p,2);tt(d),u(o);var n=w(o,2),x=v(n);st(x),u(n),_(a,e)}export{ut as component};
