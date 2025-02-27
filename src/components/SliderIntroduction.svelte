<script>
    let currentSlide = 0;
  
    let slides = [
      { image: "./images/rest6-slider-slide111.jpg", overlayImage: "./images/rest6-fork.png" },
      { image: "./images/rest6-slider-slide22.jpg" },
      { image: "./images/rest6-slider-slide32.jpg"}
    ];
  
    let interval;
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
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
  
<section>
  <div class="h-[441px] bg-[url(../images/rest6-gradient.png)] bg-center bg-no-repeat bg-cover p-16 flex flex-col items-center justify-center gap-y-[48px]">
    <h2 class="font-[cormorant_garamond] text-center text-white text-4xl font-semibold">True & memorable taste made with love and tradition</h2>
    <p class="font-[poppins] text-center text-white text-[13px] font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore e t enim ad minim veniam, quis nostrud exercitation ullamco quantum presto.</p>
      <img src="../images/rest6-flowers.png" alt="flowers" width="68" height="25">
  </div>
  <div class="relative w-full h-[346px] overflow-hidden">
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
        </div>
      {/each}
  </div>
</section>
  