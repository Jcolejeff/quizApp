import React from "react";
import styled from "styled-components";

const Loading = () => {
	return (
		<Main>
			<div className="loading"></div>
		</Main>
	);
};

const Main = styled.main`
	.loading {
		width: 6rem;
		height: 6rem;
		margin: 0 auto;
		border-radius: 50%;
		border: 3px solid #ccc;
		border-top-color: #75e6da;
		animation: spinner 0.6s linear infinite;
	}
`;
export default Loading;
