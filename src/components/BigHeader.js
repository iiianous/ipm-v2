import styled from "styled-components";

const BigHeader = styled("h1")`
	font-family: "Lato", sans-serif;
	font-size: 3.6rem;
	text-align: right;
	font-weight: 900;
	z-index: 1;
	line-height: 0.75;
	align-self: center;
	letter-spacing: -0.02em;
	text-transform: uppercase;
	top: -9px;
	position: relative;
	color: var(--font-color);

	@media only screen and (min-width: 600px) {
		font-size: 5.2rem;
	}

	@media only screen and (min-width: 768px) {
		font-size: 6.2rem;
	}

	@media only screen and (min-width: 992px) {
		font-size: 7.8rem;
	}

	span {
		position: relative;
		display: inline-block;
		width: 100%;
	}
`;

export default BigHeader;
