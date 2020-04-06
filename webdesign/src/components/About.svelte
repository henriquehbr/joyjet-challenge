<style lang="less">
	section {
		position: relative;
		display: flex;
		padding: 72px 0 144px;
		opacity: 0;
		transform: translateY(-25%);
		animation: slideInDown 1s forwards;
		font-family: 'Open Sans';

		img {
			width: 320px;
			object-fit: cover;
			border-radius: 8px;
		}

		article {
			display: flex;
			flex-direction: column;
			margin-left: 32px;
			line-height: 1.75;
			font-size: 18px;
			color: rgba(0, 0, 0, 0.7);

			h3 {
				color: dodgerblue;
				text-transform: uppercase;
				font-size: 28px;
				margin: 0;
			}
		}

		&:after {
			content: '© 2016 Created by henriquehbr';
			position: absolute;
			border-top: 2px solid gainsboro;
			color: grey;
			font-size: 14px;
			padding-top: 12px;
			width: 100%;
			bottom: 72px;
		}
	}

	@keyframes slideInDown {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media screen and (max-width: 768px) {
		section {
			flex-direction: column;

			img {
				width: 100%;
			}

			article {
				margin-left: 0;

				h3 {
					margin: 24px 0;
				}

				p:first-of-type {
					margin-top: 0;
				}
			}

			&:after {
				text-align: center;
			}
		}
	}
</style>

<section>
	<img src="img/sattelite.jpg" alt="Sattelite Image" />
	<article>
		<h3>About us</h3>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet enim leo. Morbi a arcu at augue
			efficitur tincidunt. Duis interdum molestie orci, eu aliquet lectus tincidunt a. Aliquam placerat tortor
			finibus, gravida neque at, tristique lectus. Pellentesque porta laoreet nisi, vel euismod nibh ornare ac.
			Sed nec turpis sed ante consectetur imperdiet.
		</p>
		<p>
			Etiam commodo tristique nulla, volutpat auctor odio sodales nec. Morbi et diam at risus maximus pellentesque
			vitae sed lectus. Nunc eu sapien nulla. In ultrices, ligula id efficitur tincidunt, arcu ante pretium velit,
			vel porta sapien justo sit amet odio.
		</p>
	</article>
</section>
