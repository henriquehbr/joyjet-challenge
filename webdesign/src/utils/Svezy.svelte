<script>
	import { onMount } from 'svelte'
	import Loadable from 'utils/Loadable'

	export let loader

	let container
	let isVisible = false

	onMount(() => {
		const observerOptions = { rootMargin: '-25% 0px' }
		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					observer.unobserve(entry.target)
					isVisible = true
				}
			})
		}, observerOptions)
		observer.observe(container)
	})
</script>

<style>
	div {
		height: 100vh;
	}
</style>

<div bind:this={container}>
	{#if isVisible}
		<Loadable on:load={() => container.replaceWith(...container.childNodes)} {loader} let:component>
			<svelte:component this={component} {...$$props}>
				<slot />
			</svelte:component>
		</Loadable>
	{/if}
</div>
