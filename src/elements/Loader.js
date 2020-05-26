import React from "react";
import styled from "styled-components";

import { ReactComponent as IconSpinner } from "assets/images/spinner.svg";

const Wrapper = styled("div")`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;

const Loader = () => {
	return (
		<Wrapper>
			<IconSpinner width="60" />
		</Wrapper>
	);
};

export default Loader;
