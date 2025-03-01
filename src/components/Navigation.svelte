<script>
    import { onMount } from 'svelte';
  
    let scrollPosition = 0;
    let showSecondMenu = false;
  
    const handleScroll = () => {
      scrollPosition = window.scrollY;
      showSecondMenu = scrollPosition > 120;
    };
  
    onMount(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    });
  </script>
  
  <nav class="hidden xl:block">
    <!-- Первое меню -->
    <div class="absolute top-0 left-0 w-full h-[120px] px-3 flex items-center justify-end bg-transparent z-10 transition-opacity duration-500 {showSecondMenu ? 'opacity-0' : 'opacity-100'}">
      <ul class="w-full flex items-center justify-center gap-x-10 left-0 top-[60px] text-center overflow-hidden transition-all duration-500">
        {#each ["WELCOME", "ABOUT US"] as item}
          <li class="h-[44px] flex justify-center items-center">
            <a href="#{item.toLowerCase()}" class="text-[16px] text-white font-[cormorant_garamond] leading-15 tracking-[1px]">{item}</a>
          </li>
        {/each}
      </ul>
      <a href="#0" class="absolute left-1/2 transform -translate-x-1/2">
        <img src="../images/restaurant6_logo.png" alt="" />
      </a>
      <ul class="w-full flex items-center justify-center gap-x-10 left-0 top-[60px] text-center overflow-hidden transition-all duration-500">
        {#each ["STORY", "CONTACT"] as item}
          <li class="h-[44px] flex justify-center items-center">
            <a href="#{item.toLowerCase()}" class="text-[16px] text-white font-[cormorant_garamond] leading-15 tracking-[1px]">{item}</a>
          </li>
        {/each}
      </ul>
    </div>
  
    <!-- Второе меню с эффектом появления сверху вниз -->
    <div class="fixed top-0 left-0 w-full flex items-center justify-end bg-[#2d2b2a] z-20 transition-all duration-300 {showSecondMenu ? 'h-[60px] opacity-100 translate-y-0' : 'h-0 opacity-0 translate-y-[-100%]'}">
      <ul class="w-full flex items-center justify-center gap-x-10 text-center">
        {#each ["WELCOME", "ABOUT US"] as item}
          <li class="h-[44px] flex justify-center items-center">
            <a href="#{item.toLowerCase()}" class="text-[16px] text-white font-[cormorant_garamond] leading-15 tracking-[1px]">{item}</a>
          </li>
        {/each}
      </ul>
      <a href="#0" class="absolute left-1/2 transform -translate-x-1/2">
        <img src="../images/restaurant6_logo.png" alt="" />
      </a>
      <ul class="w-full flex items-center justify-center gap-x-10 left-0 top-[60px] text-center overflow-hidden transition-all duration-500">
        {#each ["STORY", "CONTACT"] as item}
          <li class="h-[44px] flex justify-center items-center">
            <a href="#{item.toLowerCase()}" class="text-[16px] text-white font-[cormorant_garamond] leading-15 tracking-[1px]">{item}</a>
          </li>
        {/each}
      </ul>
    </div>
  </nav>
  