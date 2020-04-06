<script lang="typescript">
	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher()
</script>

<style lang="less">
	button {
		font-family: 'Open Sans';
		font-size: 18px;
		font-weight: bold;
		background-color: dodgerblue;
		outline: none;
		border-radius: 6px;
		padding: 12px 36px;
		color: white;
		border: none;
		cursor: pointer;
		transition: box-shadow 0.5s, transform 0.5s;

		&:hover {
			box-shadow: 0 0 0 5px rgba(30, 144, 255, 0.5);
		}

		&:active {
			transform: scale(0.95);
		}
	}
</style>

<button on:click={() => dispatch('click')}>
	<slot />
</button>
