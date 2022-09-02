import React from "react";
import { useGlobalContext } from "./context";
import styled from "styled-components";
import StartPage from "./StartPage";
import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";
import Fade from "react-reveal/Fade";
function App() {
	// getting states from store
	const {
		waiting,
		loading,
		questions,
		index,
		correct,
		nextQuestion,
		checkAnswer,
		Start,
	} = useGlobalContext();

	if (Start) {
		return <StartPage></StartPage>;
	}
	// returning a component based on some conditions
	if (waiting) {
		return <SetupForm />;
	}
	if (loading) {
		return <Loading />;
	}

	const { question, incorrect_answers, correct_answer } = questions[index];

	// making sure the answers are on random options on each question
	let answers = [...incorrect_answers];
	const tempIndex = Math.floor(Math.random() * 4);
	if (tempIndex === 3) {
		answers.push(correct_answer);
	} else {
		answers.push(answers[tempIndex]);
		answers[tempIndex] = correct_answer;
	}

	return (
		<Main>
			<Modal />
			<Fade top triggerOnce={true}>
				<p>
					correct answers : {correct}/{index}
				</p>
				{/* api returns html ,so i had to insert directly */}
				<h2 dangerouslySetInnerHTML={{ __html: question }} />
				<div className="btn-container">
					{answers.map((answer, index) => {
						return (
							<Button
								key={index}
								className="answer-btn"
								onClick={() => checkAnswer(correct_answer === answer)}
								dangerouslySetInnerHTML={{ __html: answer }}
							/>
						);
					})}
				</div>
				<Buttons onClick={nextQuestion}>next</Buttons>
			</Fade>
		</Main>
	);
}

export const Main = styled.main`
	padding: 3rem;
	display: grid;
	grid-template-columns: 1fr;
	align-content: center;
	h2 {
		margin-bottom: 2rem;
		text-align: center;
		line-height: 1;
		text-transform: capitalize;
		font-size: 1.2rem;
		color: var(--clr-white);
		font-weight: 200;
	}

	p {
		font-size: 0.8rem;
		margin-bottom: 2rem;
		text-align: right;
		text-transform: capitalize;
		letter-spacing: var(--spacing);
		color: var(--clr-white);
	}
`;

const Button = styled.button`
	display: block;

	width: 100%;
	margin: 0.75rem auto;
	background: #6949fd;
	border-radius: var(--radius);
	border-color: #00ffff;
	color: var(--clr-white);
	letter-spacing: var(--spacing);
	font-size: 1rem;
	cursor: pointer;
	padding: 0.5rem 0;
	transition: var(--transition);
	@media (min-width: 567px) {
		max-width: 60%;
	}
	&:hover {
		color: var(--clr-black);
	}
`;
export const Buttons = styled.button`
	border-radius: var(--radius);
	border-color: transparent;
	padding: 0.25rem 0.4rem;
	display: block;
	width: 70%;
	margin-inline: auto;
	text-transform: capitalize;
	font-weight: 700;
	letter-spacing: var(--spacing);
	font-size: 1rem;
	background: #75e6da;
	color: var(--clr-black);
	transition: var(--transition);
	cursor: pointer;
`;
export default App;
