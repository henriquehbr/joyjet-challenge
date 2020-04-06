<script lang="typescript">
	export let img: string
	export let title: string
</script>

<style lang="less">
	article {
		font-family: 'Open Sans';
		background-color: white;
		margin: 0 18px;
		overflow: hidden;
		border-radius: 8px;
		width: 30%;
		object-fit: cover;
		transform: translateY(-100%);
		animation: slideInDown 1s forwards;

		@media screen and (max-width: 768px) {
			width: 320px;
		}

		&:nth-of-type(2) {
			animation-delay: 0.5s;
		}

		&:nth-of-type(3) {
			animation-delay: 0.75s;
		}

		img {
			width: 100%;
		}

		h4 {
			font-size: 18px;
			color: rgba(0, 0, 0, 0.7);
			margin: 0;
			padding: 18px 18px 8px;
		}

		p {
			margin: 0;
			padding: 0 18px 18px;
			color: rgba(0, 0, 0, 0.5);
		}
	}

	@keyframes slideInDown {
		to {
			transform: translateY(0);
		}
	}
</style>

<article>
	<img src={img} alt={img} />
	<h4>{title}</h4>
	<p>
		<slot />
	</p>
</article>
