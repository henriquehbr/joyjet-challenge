<script lang="typescript">
	import Button from 'components/Button'
</script>

<style lang="less">
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100vh;
		color: white;
		font-family: 'Open Sans';

		&:before {
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			left: 0;
			background-image: url('../img/sattelite.jpg');
			background-color: rgba(0, 0, 0, 0.4);
			background-blend-mode: overlay;
			background-size: cover;
			transform: scaleX(-1);
			z-index: -1;
		}

		h1 {
			font-family: 'Open Sans';
			font-size: calc(3.33vw + 64px);
			letter-spacing: 5px;
			margin: 0;

			&:after {
				content: '.';
				color: dodgerblue;
			}
		}

		h3 {
			margin-top: 0;
		}

		:global(button) {
			align-self: flex-start;
		}
	}
</style>

<section id="hero">
	<h1>SPACE</h1>
	<h3>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit.
		<br />
		Quisque molestie elit at lacus…
	</h3>
	<Button>Hello World!</Button>
</section>
