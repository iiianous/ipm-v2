import React from "react";
import styled, { keyframes } from "styled-components";

const spinThat = keyframes`
  0% { transform: rotate(0) }
  100% { transform: rotate(360deg)
`;

const Wrapper = styled("div")`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	transform: scale(0.3);

	.ldio-apsiublcxuf div {
		box-sizing: border-box !important;
	}
	.ldio-apsiublcxuf > div {
		position: absolute;
		width: 144px;
		height: 144px;
		top: 28px;
		left: 28px;
		border-radius: 50%;
		border: 16px solid #000;
		border-color: #f3dc1d transparent #f3dc1d transparent;
		animation: ${spinThat} 1s linear infinite;
	}
	.ldio-apsiublcxuf > div:nth-child(2) {
		border-color: transparent;
	}
	.ldio-apsiublcxuf > div:nth-child(2) div {
		position: absolute;
		width: 100%;
		height: 100%;
		transform: rotate(45deg);
	}
	.ldio-apsiublcxuf > div:nth-child(2) div:before,
	.ldio-apsiublcxuf > div:nth-child(2) div:after {
		content: "";
		display: block;
		position: absolute;
		width: 16px;
		height: 16px;
		top: -16px;
		left: 48px;
		background: #f3dc1d;
		border-radius: 50%;
		box-shadow: 0 128px 0 0 #f3dc1d;
	}
	.ldio-apsiublcxuf > div:nth-child(2) div:after {
		left: -16px;
		top: 48px;
		box-shadow: 128px 0 0 0 #f3dc1d;
	}
	.loadingio-spinner-dual-ring-fxhsbudfhvp {
		width: 200px;
		height: 200px;
		display: inline-block;
		overflow: hidden;
		background: #ffffff;
	}
	.ldio-apsiublcxuf {
		width: 100%;
		height: 100%;
		position: relative;
		transform: translateZ(0) scale(1);
		backface-visibility: hidden;
		transform-origin: 0 0; /* see note above */
	}
`;

const Loader = () => {
	return (
		<Wrapper>
			<div className="loadingio-spinner-dual-ring-svvy2b2xl9">
				<div className="ldio-apsiublcxuf">
					<div></div>
					<div>
						<div></div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default Loader;
