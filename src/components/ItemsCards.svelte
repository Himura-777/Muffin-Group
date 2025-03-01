<script>
	export let background;
	export let icon;
	export let title;
</script>

<li class="flex flex-col gap-y-[15px] md:w-[30%] xl:w-[333.34px]">
	<div
		class="h-[472.5px] md:h-[150.750px] xl:h-[256.406px] relative bg-no-repeat bg-cover group transition-all duration-500"
		style="background-image: url({background})"
	>
		<div
			class="absolute left-0 top-0 w-[14.2%] md:w-[30%] h-full bg-[#8b6f5c] bg-no-repeat bg-center scale-x-100 origin-left opacity-100 transition-all duration-1000
            group-hover:scale-x-0 group-hover:opacity-0"
			style="background-image: url({icon});"
		></div>
	</div>
	<h4
		class="font-[cormorant_garamond] text-xl font-bold whitespace-pre-line md:mb-[40px] xl:text-[26px] xl:pl-[30%]"
	>
		{title}
	</h4>
</li>

<style>
	.bg-left-custom {
		background-position: left 50px center;
	}

	@media (min-width: 768px) {
		.bg-left-custom {
			background-position: center !important;
		}
	}

	.group:hover {
		background-position: center !important;
	}
</style>
