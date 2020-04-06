<style lang="less">
	section {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 24px 12.5vw;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: rgba(0, 0, 0, 0.6);
		font-size: 20px;
		font-family: 'Open Sans';
		color: white;
		overflow: hidden;

		@media screen and (max-width: 1024px) {
			padding: 18px 6.25vw;

			article:last-of-type {
				display: none;
			}
		}

		@media screen and (max-width: 768px) {
			display: none;
		}

		h4 {
			opacity: 0;
			transform: translateX(-50%);
			animation: appearRight 1s forwards;

			&:after {
				content: 'Today';
				display: block;
				color: dodgerblue;
				text-align: right;
				margin: 4px 0;
			}
		}

		article {
			position: relative;
			padding: 0 24px;
			margin: 0 24px;
			border-left: 2px solid white;
			transform: translateY(calc(-100% - 24px));
			line-height: 1.75;

			&:nth-of-type(1) {
				animation: slideInDown 1s forwards;
				animation-delay: 0.25s;
			}

			&:nth-of-type(2) {
				animation: slideInDown 1s forwards;
				animation-delay: 0.5s;
			}

			&:nth-of-type(3) {
				animation: slideInDown 1s forwards;
				animation-delay: 0.75s;
			} 
		}
	}

	@keyframes appearRight {
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	@keyframes slideInDown {
		to {
			transform: translateX(0);
		}
	}
</style>

<section>
	<h4>Trending</h4>
	<article>Lorem ipsum dolor sit amet, consectetur adipiscing ligula eget dolor.</article>
	<article>Lorem ipsum dolor sit amet, consectetur adipiscing ligula eget dolor.</article>
	<article>Lorem ipsum dolor sit amet, consectetur adipiscing ligula eget dolor.</article>
</section>
