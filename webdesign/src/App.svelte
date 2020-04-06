<script lang="typescript">
	import { onMount } from 'svelte'
	import { store } from 'components/Store'
	import Svezy from 'utils/Svezy'
	import Loadable from 'svelte-loadable'
	import Hero from 'components/Hero'
	import Navbar from 'components/Navbar'
	import Card from 'components/Card'

	let trendingVisible = false
	let menuVisible = false

	const responsivity = () => {
		trendingVisible = window.innerWidth > 768 ? true : false
		menuVisible = window.innerWidth < 768 ? true : false
	}

	onMount(() => responsivity())
</script>

<style lang="less" global>
	* {
		box-sizing: border-box;
	}

	html, body {
		scroll-behavior: smooth;
	}

	body {
		margin: 0;
		background-color: rgb(240, 240, 240);
		padding: 0 12.5vw;
		transition: padding 0.5s;

		&::-webkit-scrollbar {
			width: 8px;
		}

		&::-webkit-scrollbar-thumb {
			border: 4px solid transparent;
			background-color: dodgerblue;
		}

		&::-webkit-scrollbar-corner {
			background-color: transparent;
		}

		@media screen and (max-width: 1024px) {
			padding: 0 6.25vw;
		}

		@media screen and (max-width: 768px) {
			padding: 0 24px;
		}

		> div[data-carousel] {
			padding: 72px 0;
		}
	}
</style>

<svelte:window on:resize={responsivity} />

{#if menuVisible}
	<Loadable loader={() => import('components/Menu')} opened={$store.menuOpened} />
{/if}
<Navbar />
<Hero />
{#if trendingVisible}
	<Loadable loader={() => import('components/Trending')} />
{/if}
<Svezy loader={() => import('components/Carousel')} pageDots={false} cellAlign="left" freeScroll={true} contain={true}>
	<Card img="../img/space-station.jpg" title="International Space Station">
		Lorem ipsum dolor sit amet consectetur adipiscing elit. Curabitur luctus aliquet sapien...
	</Card>
	<Card img="../img/sattelite.jpg" title="My capsule">
		Lorem ipsum dolor sit amet consectetur adipiscing elit. Curabitur luctus aliquet sapien...
	</Card>
	<Card img="../img/moon.jpg" title="My moon">
		Lorem ipsum dolor sit amet consectetur adipiscing elit. Curabitur luctus aliquet sapien...
	</Card>
</Svezy>
<Svezy loader={() => import('components/About')} />
