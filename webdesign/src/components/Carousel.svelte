<script lang="typescript">
	import { onMount, afterUpdate } from 'svelte'
	import Flickity from 'flickity'

	export let cellAlign = 'center'
	export let contain = false
	export let freeScroll = false
	export let pageDots = true

	let carousel: Element
	let flickity: Flickity
	const flickityOptions: Flickity.Options = { cellAlign, contain, freeScroll, pageDots }

	onMount(() => flickity = new Flickity(carousel, flickityOptions))
</script>

<div data-carousel bind:this={carousel}>
	<slot />
</div>
