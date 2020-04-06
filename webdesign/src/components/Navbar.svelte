<script lang="typescript">
	import { store } from 'components/Store'
	import Loadable from 'svelte-loadable'

	let navbar: HTMLElement
	let hamburgerMenuVisible = window.innerWidth < 768 ? true : false

	const toggleStickyNavbar = () => {
		if (document.documentElement.scrollTop >= navbar.clientHeight && !navbar.classList.contains('sticky')) {
			navbar.classList.add('sticky')
		} else if (document.documentElement.scrollTop <= navbar.clientHeight && navbar.classList.contains('sticky')) {
			navbar.classList.add('removing-sticky')
			navbar.classList.remove('sticky')
			navbar.addEventListener('animationend', () => navbar.classList.remove('removing-sticky'))
		}
	}
</script>

<style lang="less">
	nav {
		position: absolute;
		width: 100%;
		right: 0;
		left: 0;
		display: flex;
		align-items: center;
		font-size: 18px;
		width: 100%;
		font-family: 'Open Sans';
		text-transform: uppercase;
		padding: 18px 12.5vw;
		font-weight: bold;
		z-index: 1;
		transition: background-color 0.5s, box-shadow 0.5s;

		@media screen and (max-width: 1024px) {
			padding: 18px 6.25vw;
		}

		@media screen and (max-width: 768px) {
			padding: 18px 24px;
		}

		:global(&.sticky),
		:global(&.removing-sticky) {
			position: fixed !important;
			background-color: dodgerblue;
		}

		:global(&.sticky) {
			box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
			animation: slideInDown 0.5s forwards;
		}

		:global(&.removing-sticky) {
			animation: slideOutUp 0.5s forwards;
		}

		a {
			position: relative;
			color: white;

			&:first-child {
				margin-right: auto;

				img {
					filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(2%) hue-rotate(231deg)
						brightness(107%) contrast(101%);
				}
			}

			&:not(:first-child) {
				text-decoration: none;
				margin: 0 24px;

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

				&:hover:after {
					width: 100%;
				}

				@media screen and (max-width: 768px) {
					display: none;
				}
			}
		}
	}

	@keyframes slideInDown {
		from {
			transform: translateY(-100%);
		}

		to {
			transform: translateY(0);
		}
	}

	@keyframes slideOutUp {
		from {
			background-color: dodgerblue;
		}

		to {
			background-color: transparent;
		}
	}
</style>

<svelte:window
	on:scroll={toggleStickyNavbar}
	on:resize={() => (hamburgerMenuVisible = window.innerWidth < 768 ? true : false)} />

<nav style={$store.menuOpened ? 'box-shadow: none' : ''} bind:this={navbar}>
	<a href="#hero">
		<img src="img/logo.png" alt="Logo" />
	</a>
	<a href="/">Blog</a>
	<a href="/">Popular</a>
	<a href="/">Archive</a>
	<a href="/">About</a>
	{#if hamburgerMenuVisible}
		<Loadable loader={() => import('components/HamburgerMenu')} />
	{/if}
</nav>
