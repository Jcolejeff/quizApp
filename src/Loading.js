import React from "react";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
	return (
		<Main>
			<div>
				<Skeleton
					count={1}
					highlightColor="#00ffff"
					height="60vh"
					baseColor="#6949fd"
				/>
			</div>
		</Main>
	);
};

const Main = styled.main`
	display: block;
	margin-inline: auto;
	margin-block-start: 10rem;
	width: 95%;
	line-height: 2;
	justify-items: center;
`;
export default Loading;
