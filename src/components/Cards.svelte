<script>
	import ItemsCards from "./ItemsCards.svelte";

	const items = [
		{
			background: "../images/rest6-home-box1.jpg",
			icon: "../images/rest6-icon1.png",
			title: "20 years of\nexperience",
		},
		{
			background: "../images/rest6-home-box2.jpg",
			icon: "../images/rest6-icon2.png",
			title: "Only fresh Italian\ningredients",
		},
		{
			background: "../images/rest6-home-box3.jpg",
			icon: "../images/rest6-icon-3.png",
			title: "Traditional recipes",
		},
	];
</script>

<section class="mt-[120px] w-[634px] mx-auto md:w-[708px] xl:w-[1080px]">
	<h2
		class="font-[cormorant_garamond] text-center text-black text-4xl font-semibold md:text-start lg:font-[48px]"
	>
		We know how to make
		<br />
		the best Italian food in the city.
	</h2>
	<ul class="mt-[35px] flex flex-col gap-[15px] md:flex-row md:gap-[40px]">
		{#each items as { background, icon, title }}
			<ItemsCards {background} {icon} {title} />
		{/each}
	</ul>
</section>
