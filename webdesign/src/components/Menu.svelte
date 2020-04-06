<script lang="typescript">
	import { afterUpdate } from 'svelte'

	let menu: HTMLElement

	export let opened = false

	afterUpdate(() => (opened ? menu.classList.add('opened') : menu.classList.remove('opened')))
</script>

<style lang="less">
	div {
		position: fixed;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100vw;
		height: 100vh;
		left: 0;
		z-index: 1;
		font-family: 'Open Sans';
		background-color: dodgerblue;
		transform: translateY(-100%);
		transition: transform 1s;

		a {
			position: relative;
			color: white;
			font-size: 26px;
			letter-spacing: 2px;
			text-transform: uppercase;
			text-decoration: none;
			margin: 20px 0;
			transition: transform 0.5s;

			&:after {
				content: '';
				position: absolute;
				width: 0;
				height: 3px;
				border-radius: 8px;
				background-color: white;
				bottom: -3px;
				left: 0;
				transition: width 0.5s;
			}

			&:nth-of-type(1),
			&:nth-of-type(3) {
				transform: translateX(calc(-50vw - 50%));
			}

			&:nth-of-type(2),
			&:nth-of-type(4) {
				transform: translateX(calc(50vw + 50%));
			}

			&:nth-of-type(1) {
				margin-top: 140px;
			}
		}

		:global(&.opened) {
			transform: translateY(0) !important;

			a {
				transform: translateX(0);

				&:hover:after {
					width: 100%;
				}

				&:nth-of-type(1) {
					transition-delay: 1s;
				}

				&:nth-of-type(2) {
					transition-delay: 1.25s;
				}

				&:nth-of-type(3) {
					transition-delay: 1.5s;
				}

				&:nth-of-type(4) {
					transition-delay: 1.75s;
				}
			}
		}
	}
</style>

<div bind:this={menu}>
	<a href="/">Blog</a>
	<a href="/">Popular</a>
	<a href="/">Archive</a>
	<a href="/">About</a>
</div>
