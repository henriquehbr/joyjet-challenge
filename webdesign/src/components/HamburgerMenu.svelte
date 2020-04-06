<script lang="typescript">
	import { afterUpdate } from 'svelte'
	import { store } from 'components/Store'

	let opened = false

	afterUpdate(() => document.body.style.overflowY = opened ? 'hidden' : 'visible')
</script>

<style lang="less">
	label {
		display: flex;
		flex-direction: column;
		cursor: pointer;

		input[type="checkbox"] {
			display: none;

			&:checked ~ span {
				margin: -2px;

				&:nth-of-type(1) {
					transform: rotate(45deg);
				}

				&:nth-of-type(2) {
					opacity: 0;
				}

				&:nth-of-type(3) {
					transform: rotate(-45deg);
				}
			}
		}

		span {
			width: 32px;
			margin: 3px;
			border: 2px solid white;
			transition: margin 0.5s, transform 0.5s, opacity 0.5s;
			border-radius: 12px;
		}
	}
</style>

<label>
	<input bind:checked={opened} on:change={() => $store.menuOpened = opened} type="checkbox" />
	<span />
	<span />
	<span />
</label>
