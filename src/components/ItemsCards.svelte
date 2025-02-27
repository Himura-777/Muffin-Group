<script>
    export let background;
    export let icon;
    export let title;
</script>

<li class="flex flex-col gap-y-[15px]">
    <div 
        class="w-[8w.66%] h-[472.5px] relative bg-no-repeat bg-cover group transition-all duration-500"
        style="background-image: url({background}); background-position: left 50px center;">
        <div 
            class="absolute left-0 top-0 w-[14.2%] h-full bg-[#8b6f5c] bg-no-repeat bg-center scale-x-100 origin-left opacity-100 transition-all duration-1000 
            group-hover:scale-x-0 group-hover:opacity-0"
            style="background-image: url({icon});">
        </div>
    </div>
    <h4 class="font-[cormorant_garamond] text-xl font-bold whitespace-pre-line">
        {title}
    </h4>
</li>

<style>
    .group:hover {
        background-position: center !important;
    }
</style>
