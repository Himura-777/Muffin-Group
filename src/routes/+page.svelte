<script>
	import MobileNavigation from "../components/MobileNavigation.svelte";
	import Navigation from "../components/Navigation.svelte";
	import Header from "../components/Header.svelte";
	import SliderIntroduction from "../components/SliderIntroduction.svelte";
	import Cards from "../components/Cards.svelte";
	import Beginning from "../components/Beginning.svelte";
	import DishStory from "../components/DishStory.svelte";
	import Footer from "../components/Footer.svelte";
</script>

<header>
	<Header />
</header>

<main>
	<SliderIntroduction />
	<Cards />
	<Beginning />
	<DishStory />
</main>

<footer
	class="bg-[url(../images/rest6-bottom-sec-gra.jpg)] bg-no-repeat bg-cover bg-[top_center] py-[124px]"
>
	<Footer />
</footer>
