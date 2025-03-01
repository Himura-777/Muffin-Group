<script>
	import { onMount } from "svelte";

	let isMenuOpen = false;
	let isOpen = false;

	let scrollPosition = 0;
	let showFixedMenu = false;

	const handleScroll = () => {
		scrollPosition = window.scrollY;
		showFixedMenu = scrollPosition > 60;
	};

	onMount(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});
</script>

<nav class="xl:hidden">
	<div
		class="absolute top-0 left-0 w-full h-[60px] px-3 flex items-center justify-end bg-[#2d2b2a] z-10 transition-opacity duration-500 {showFixedMenu
			? 'opacity-0'
			: 'opacity-100'}"
	>
		<a href="#0" class="absolute left-1/2 transform -translate-x-1/2">
			<img src="./images/restaurant6_logo.png" alt="" />
		</a>
		<button
			aria-label="Menu"
			on:click={() => (isMenuOpen = !isMenuOpen)}
			class="md:mr-[7%]"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="40px"
				height="22px"
				viewBox="0 0 22 22"
				fill="none"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z"
					fill="#ffffff"
				/>
			</svg>
		</button>
		<ul
			class={`absolute w-full left-0 top-[60px] text-center bg-[#2d2b2a] ${isMenuOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"} overflow-hidden transition-all duration-500`}
		>
			{#each ["WELCOME", "ABOUT US", "STORY", "CONTACT"] as item}
				<li class="h-[44px] flex justify-center items-center">
					<a href="#0" class="text-[13px] text-white font-[cormorant_garamond]"
						>{item}</a
					>
				</li>
			{/each}
		</ul>
	</div>

	<div
		class="fixed top-0 left-0 w-full h-[60px] px-3 flex items-center justify-end bg-[#2d2b2a] z-10 transition-all duration-300 {showFixedMenu
			? 'h-[60px] opacity-100 translate-y-0'
			: 'h-0 opacity-0 translate-y-[-100%]'}"
	>
		<a href="#0" class="absolute left-1/2 transform -translate-x-1/2">
			<img src="./images/restaurant6_logo.png" alt="" />
		</a>
		<button
			aria-label="Menu"
			on:click={() => (isOpen = !isOpen)}
			class="md:mr-[7%]"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="40px"
				height="22px"
				viewBox="0 0 22 22"
				fill="none"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z"
					fill="#ffffff"
				/>
			</svg>
		</button>
		<ul
			class={`absolute w-full left-0 top-[60px] text-center bg-[#2d2b2a] ${isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"} overflow-hidden transition-all duration-500`}
		>
			{#each ["WELCOME", "ABOUT US", "STORY", "CONTACT"] as item}
				<li class="h-[44px] flex justify-center items-center">
					<a href="#0" class="text-[13px] text-white font-[cormorant_garamond]"
						>{item}</a
					>
				</li>
			{/each}
		</ul>
	</div>
</nav>
