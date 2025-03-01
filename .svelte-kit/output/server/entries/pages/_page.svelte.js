import "clsx";
import { e as ensure_array_like, f as stringify, c as pop, p as push, h as bind_props } from "../../chunks/index.js";
import { e as escape_html } from "../../chunks/escaping.js";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean || value === "" && name === "class") return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function Navigation($$payload) {
  $$payload.out += `<nav class="fixed top-0 left-0 w-full h-[60px] px-3 flex items-center justify-end bg-[#2d2b2a] z-10"><a href="#0" class="absolute left-1/2 transform -translate-x-1/2"><img src="./images/restaurant6_logo.png" alt=""></a> <button aria-label="Menu"><svg xmlns="http://www.w3.org/2000/svg" width="40px" height="22px" viewBox="0 0 22 22" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z" fill="#ffffff"></path></svg></button> <ul></ul></nav>`;
}
function Header($$payload) {
  $$payload.out += `<section class="relative w-full h-[617px] bg-[url(../images/rest6-slider-slide111.jpg)] flex items-center justify-center bg-cover bg-center bg-no-repeat">`;
  Navigation($$payload);
  $$payload.out += `<!----> <div class="absolute inset-0 z-1 top-30"><img src="../images/rest6-fork.png" alt="fork" class="w-full h-full object-contain"></div> <span class="relative text-center text-white font-[cormorant_garamond] font-thin leading-[62px] text-[120px] tracking-[62px] pl-[62px]">PASTA</span></section>`;
}
function SliderIntroduction($$payload, $$props) {
  push();
  let currentSlide = 0;
  let slides = [
    {
      image: "../images/rest6-slider-slide111.jpg",
      overlayImage: "./images/rest6-fork.png"
    },
    { image: "../images/rest6-slider-slide22.jpg" },
    { image: "../images/rest6-slider-slide32.jpg" }
  ];
  let interval;
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
  }
  function startAutoSlide() {
    stopAutoSlide();
    interval = setInterval(nextSlide, 5e3);
  }
  function stopAutoSlide() {
    clearInterval(interval);
  }
  startAutoSlide();
  const each_array = ensure_array_like(slides);
  $$payload.out += `<section class="md:flex md:h-fit h-fit"><div class="h-fit bg-[url(../images/rest6-gradient.png)] bg-center bg-no-repeat bg-cover p-[8.66%] flex flex-col items-center justify-center gap-y-[48px] md:w-1/2 md:mt-[-60px] z-1 md:items-start"><h2 class="font-[cormorant_garamond] text-center text-white text-4xl font-semibold md:text-start md:pl-3 md:pr-15 leading-[49px] xl:text-[48px]">True &amp; memorable taste made with love and tradition</h2> <p class="font-[poppins] text-sm text-center text-white text-[13px] font-light md:text-start md:pl-3 md:pr-15 leading-[27px] xl:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore e t enim ad minim veniam, quis nostrud
			exercitation ullamco quantum presto.</p> <img src="../images/rest6-flowers.png" alt="flowers" width="68" height="25" class="inline md:pl-3"></div> <div class="relative w-full h-fit overflow-hidden md:w-1/2 md:h-full"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let slide = each_array[i];
    $$payload.out += `<div class="absolute inset-0 flex items-center justify-center bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out"${attr("style", ` background-image: url(${stringify(slide.image)}); opacity: ${stringify(i === currentSlide ? 1 : 0)}; z-index: ${stringify(i === currentSlide ? 2 : 1)}; background-size: ${stringify(i === currentSlide ? "110% 110%" : "100% 100%")}; transition: opacity 2s ease-in-out, background-size 6s ease-in-out; `)}>`;
    if (i === 0 && slide.overlayImage) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="absolute inset-0 z-10 top-24"><img${attr("src", slide.overlayImage)} alt="fork" class="w-full h-full object-contain"></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]--></div></section>`;
  pop();
}
function ItemsCards($$payload, $$props) {
  let background = $$props["background"];
  let icon = $$props["icon"];
  let title = $$props["title"];
  $$payload.out += `<li class="flex flex-col gap-y-[15px] md:w-[30%] xl:w-[333.34px]"><div class="h-[472.5px] md:h-[150.750px] xl:h-[256.406px] relative bg-no-repeat bg-cover group transition-all duration-500 svelte-1jsy1na"${attr("style", `background-image: url(${stringify(background)})`)}><div class="absolute left-0 top-0 w-[14.2%] md:w-[30%] h-full bg-[#8b6f5c] bg-no-repeat bg-center scale-x-100 origin-left opacity-100 transition-all duration-1000 group-hover:scale-x-0 group-hover:opacity-0"${attr("style", `background-image: url(${stringify(icon)});`)}></div></div> <h4 class="font-[cormorant_garamond] text-xl font-bold whitespace-pre-line md:mb-[40px] xl:text-[26px] xl:pl-[30%]">${escape_html(title)}</h4></li>`;
  bind_props($$props, { background, icon, title });
}
function Cards($$payload) {
  const items = [
    {
      background: "../images/rest6-home-box1.jpg",
      icon: "../images/rest6-icon1.png",
      title: "20 years of\nexperience"
    },
    {
      background: "../images/rest6-home-box2.jpg",
      icon: "../images/rest6-icon2.png",
      title: "Only fresh Italian\ningredients"
    },
    {
      background: "../images/rest6-home-box3.jpg",
      icon: "../images/rest6-icon-3.png",
      title: "Traditional recipes"
    }
  ];
  const each_array = ensure_array_like(items);
  $$payload.out += `<section class="mt-[120px] w-[634px] mx-auto md:w-[708px] xl:w-[1080px]"><h2 class="font-[cormorant_garamond] text-center text-black text-4xl font-semibold md:text-start lg:font-[48px]">We know how to make <br> the best Italian food in the city.</h2> <ul class="mt-[35px] flex flex-col gap-[15px] md:flex-row md:gap-[40px]"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let { background, icon, title } = each_array[$$index];
    ItemsCards($$payload, { background, icon, title });
  }
  $$payload.out += `<!--]--></ul></section>`;
}
function Beginning($$payload) {
  $$payload.out += `<section class="mt-[120px] mb-[80px] md:flex md:items-end md:gap-x-[9.12%]"><div class="mx-[9.01%] md:w-[45%] md:pl-[18%] md:mx-0"><h2 class="font-[cormorant_garamond] text-center text-black text-4xl font-semibold leading-[49px] md:text-start md:mr-[10%] xl:text-[48px] xl:mb-10">We have been<br>serving our dishes<br>since 1910</h2> <p class="mt-[20px] font-[poppins] text-[#5e5e5e] text-[13px] text-center font-light leading-[27px] md:text-start md:mr-[10%] xl:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore e t enim ad minim veniam, quis nostrud
			exercitation ullamco quantum presto. Lorem ipsum dolot sit omnia des.</p></div> <div class="mt-[60px] mr-[5px] h-[232.5px] bg-[url(./images/rest6-home-forkk.png)] bg-no-repeat bg-contain bg-right md:w-[46.2%] md:bg-bottom md:mt-0" style="padding-bottom: 17%"></div></section>`;
}
function DishStory($$payload) {
  $$payload.out += `<section class="mt-[90px]"><div class="h-[951px] flex justify-center items-center bg-[url(../images/rest6-toscania.jpg)] bg-no-repeat bg-cover bg-center md:bg-fixed"><h2 class="font-[cormorant_garamond] text-center text-white text-5xl font-light md:text-[30.72px] xl:text-[49.6px]">Our every meal has<br>its own unique story we want<br>to share with
			you</h2></div> <div class="md:flex md:gap-x-[5.6%]"><div class="h-[1175.5px] bg-[url(../images/rest6-spices.jpg)] bg-no-repeat bg-cover bg-center z-1 md:w-[20%] md:h-[235px] md:mt-[-100px]" style="padding-bottom: 29.2%"></div> <div class="mt-25 mb-[95px] md:w-[34.375%] md:pr-[1.6%]"><h2 class="font-[cormorant_garamond] text-center text-black text-4xl font-semibold leading-[49px] md:text-start md:mb-10 xl:text-[48px]">Tuscany's tradition<br>on your plat</h2> <div class="mt-4 flex flex-col gap-y-[15px] mx-auto w-[84.02%] md:mx-0 xl:w-fit"><p class="font-[poppins] text-[#5e5e5e] font-light text-[13px] text-center leading-8 md:text-start xl:text-base"><span class="font-bold">Praesent nec magna ac pede. Mauris suscipit mauris.</span> Nam dolore erat id tortor. Phasellus at nibh nulla nulla, egestas quam
					eutore. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
					ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
					velit esse cillum dolore eu fugiat nulla pariatur.</p> <p class="font-[poppins] text-[#5e5e5e] font-light text-[13px] text-center leading-8 md:text-start xl:text-base">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
					officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
					omnis iste natus error sit voluptatem <span class="font-bold">accusantium doloremque</span> laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
					et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
					voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed <u>quia consequuntur magni dolores</u> eos qui ratione voluptatem sequi nesciunt. <span class="font-bold">Neque porro quisquam</span> est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
					sedrat voluptatem.</p></div></div> <div class="h-[930px] bg-[url(../images/rest6-mozarella.jpg)] bg-no-repeat bg-cover bg-center md:w-[34.375%] md:h-[320px] md:mt-25" style="padding-bottom: 37.5%"></div></div></section>`;
}
function Contacts($$payload, $$props) {
  let icon = $$props["icon"];
  $$payload.out += `<li class="bg-white w-[46px] h-[46px]"><a href="#0"><img${attr("src", icon)}></a></li>`;
  bind_props($$props, { icon });
}
function Footer($$payload) {
  const items = [
    { icon: "../" },
    { icon: "../" },
    { icon: "../" },
    { icon: "../" }
  ];
  const each_array = ensure_array_like(items);
  $$payload.out += `<div class="mx-auto w-[84.02%] max-w-[1120px]"><div><h2 class="font-[cormorant_garamond] text-white text-[53px] font-normal text-center">Level 13, 2 Elizabeth St,<br>Melbourne, Vctoria 3000,<br>Australia</h2> <ul class="mt-4 flex gap-x-[6px] justify-center items-center"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let { icon } = each_array[$$index];
    Contacts($$payload, { icon });
  }
  $$payload.out += `<!--]--></ul></div> <div class="mt-15 md:flex md:gap-x-[5%]"><div><h6 class="font-[cormorant_garamond] text-white text-[23px] font-bold xl:text-[30px]">Opening hours</h6> <p class="mt-[30px] font-[poppins] text-white font-light text-[13px] xl:text-base">Mauris neque. Pelentesque dolor. Mauris in est. Vivamus lacus sed</p> <ul class="my-5 flex flex-col"><li class="flex flex-col"><p class="w-fit border-b border-solid border-[#8b6f5c] font-[poppins] text-white text-[15px] py-[10px] mb-2">Monday - Friday</p> <p class="font-[poppins] text-[#8b6f5c] text-[32px] py-[10px] font-light">8<span class="text-base align-super ml-1">00</span> - 16<span class="text-base align-super ml-1">00</span></p></li> <li class="flex flex-col"><p class="w-fit border-b border-solid border-[#8b6f5c] font-[poppins] text-white text-[15px] py-[10px] mb-2">Saturday</p> <p class="font-[poppins] text-[#8b6f5c] text-[32px] py-[10px] font-light">8<span class="text-base align-super ml-1">00</span> - 15<span class="text-base align-super ml-1">00</span></p></li></ul></div> <form class="mt-5 w-full"><input type="text" placeholder="Name" class="block w-[96.8%] text-white text-[poppins] text-light text-[15px] border-b border-solid border-white/70 p-[10px] mx-[10px] mb-[13px] placeholder:text-white/70 placeholder:text-[15px] placeholder:text-[poppins] focus:border-white focus:placeholder:text-white focus:outline-none"> <div class="md:flex md:gap-x-2"><input type="email" placeholder="Email" class="block w-[96.8%] text-white text-[poppins] text-light text-[15px] border-b border-solid border-white/70 p-[10px] mx-[10px] mb-[13px] placeholder:text-white/70 placeholder:text-[15px] placeholder:text-[poppins] focus:border-white focus:placeholder:text-white focus:outline-none"> <input type="text" placeholder="Subject" class="block w-[96.8%] text-white text-[poppins] text-light text-[15px] border-b border-solid border-white/70 p-[10px] mx-[10px] mb-[13px] placeholder:text-white/70 placeholder:text-[15px] placeholder:text-[poppins] focus:border-white focus:placeholder:text-white focus:outline-none"></div> <input type="text" placeholder="Details" class="block w-[96.8%] text-white text-[poppins] text-light text-[15px] border-b border-solid border-white/70 p-[10px] mx-[10px] mb-[13px] placeholder:text-white/70 placeholder:text-[15px] placeholder:text-[poppins] focus:border-white focus:placeholder:text-white focus:outline-none"> <textarea placeholder="Your message" class="block w-[96.8%] h-[234px] text-white text-[poppins] text-light text-[15px] border-b border-solid border-white/70 p-[10px] mx-[10px] mb-[13px] resize-none placeholder:text-white/70 placeholder:text-[15px] placeholder:text-[poppins] focus:border-white focus:placeholder:text-white focus:outline-none"></textarea> <button type="submit" class="w-[96.8%] h-10 py-[10px] px-5 bg-[#8b6f5c] text-white text-[13px] text-[poppins] mx-[10px]">Send a message</button></form></div></div>`;
}
function _page($$payload) {
  $$payload.out += `<header>`;
  Header($$payload);
  $$payload.out += `<!----></header> <main>`;
  SliderIntroduction($$payload);
  $$payload.out += `<!----> `;
  Cards($$payload);
  $$payload.out += `<!----> `;
  Beginning($$payload);
  $$payload.out += `<!----> `;
  DishStory($$payload);
  $$payload.out += `<!----></main> <footer class="bg-[url(../images/rest6-bottom-sec-gra.jpg)] bg-no-repeat bg-cover bg-[top_center] py-[124px]">`;
  Footer($$payload);
  $$payload.out += `<!----></footer>`;
}
export {
  _page as default
};
