<script>
    let currentSlide = 0;
  
    let slides = [
      { image: "./images/rest6-slider-slide111.jpg", text: ["PASTA"], overlayImage: "./images/rest6-fork.png" },
      { image: "./images/rest6-slider-slide22.jpg", text: ["FROM", "TUSCANY"] },
    ];
  
    let interval;
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
    }
  
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    }

    function changeSlideAfterDelay(direction) {
    clearTimeout(timeout); 
    timeout = setTimeout(() => {
      if (direction === 'next') {
        nextSlide();
      } else if (direction === 'prev') {
        prevSlide();
      }
    }, 3000);
  }
  
    function startAutoSlide() {
      stopAutoSlide();
      interval = setInterval(nextSlide, 5000);
    }
  
    function stopAutoSlide() {
      clearInterval(interval);
    }
  
    startAutoSlide();
  </script>
  
  <div class="relative w-full h-[557px] overflow-hidden">
    {#each slides as slide, i}
      <div
      class="absolute inset-0 flex items-center justify-center bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out"
      style="
        background-image: url({slide.image});
        opacity: {i === currentSlide ? 1 : 0};
        z-index: {i === currentSlide ? 2 : 1};
        background-size: {i === currentSlide ? '110% 110%' : '100% 100%'};
        transition: opacity 2s ease-in-out, background-size 6s ease-in-out;
      "
      >
        {#if i === 0 && slide.overlayImage}
          <div class="absolute inset-0 z-10 top-24">
            <img src={slide.overlayImage} alt="fork" class="w-full h-full object-contain" />
          </div>
        {/if}
        <span class="relative text-center text-white font-[cormorant_garamond] font-thin leading-[62px]">
            {#each slide.text as line, index}
                <span class="block {i === 0 ? 'text-[120px] tracking-[62px] pl-[62px]' : 'text-[50px] tracking-[31px] pl-[31px]'}">
                    {line}
                </span>
            {/each}
        </span>
          
      </div>
    {/each}
  
    <button
        on:click={() => changeSlideAfterDelay('prev')}
      class="absolute left-2 top-1/2 -translate-y-1/2 z-3"
    >
      <img src="./images/rest6-arrow-left.png" alt="arrow left" class="w-[41px] h-[41px]">
    </button>
  
    <button
        on:click={() => changeSlideAfterDelay('prev')}
      class="absolute right-2 top-1/2 -translate-y-1/2 z-3"
    >
      <img src="./images/rest6-arrow-right.png" alt="arrow right" class="w-[41px] h-[41px]">
    </button>
  </div>
  