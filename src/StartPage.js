import React from "react";
import logo from "./images/—Pngtree—blue purple gradient light bulb_4886135 (2).png";
import styled from "styled-components";
import { useGlobalContext } from "./context";
const StartPage = () => {
	const { setStart } = useGlobalContext();
	return (
		<Main>
			<section>
				<div className="container">
					<div className="image">
						<img src={logo} alt="logo" />
					</div>
					<h1>QUIZZLES</h1>
				</div>

				<div className="text">
					<h3> Let's Play</h3>
					<p>Play now and level Up!!!</p>
				</div>

				<button onClick={() => setStart(false)}>Play Now</button>
			</section>
		</Main>
	);
};

export default StartPage;
const Main = styled.main`
	border: 1px solid white;
	section {
		text-align: center;
		display: grid;
		grid-template-columns: 1fr;
		align-content: center;
		gap: 3rem;
		.image {
			margin-inline: auto;
			width: 150px;
			img {
				width: 100%;
			}
		}
		h1 {
			color: #00ffff;
		}
		.text {
			h3,
			p {
				color: white;
			}
		}
		button {
			background: #6949fd;
			border: none;
			border-radius: 30px;
			color: white;
			padding-inline: 7rem;
			padding-block: 1rem;
			font-size: 1.4rem;
			cursor: pointer;
			font-weight: 500;
		}
	}
`;
