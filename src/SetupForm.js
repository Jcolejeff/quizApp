import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "./context";
import { Buttons } from "./App";
import Roll from "react-reveal/Roll";
import logo from "./Minimalist Modern Technology Store Logo Box (1).png";
import Fade from "react-reveal/Fade";

const SetupForm = () => {
	const { quiz, handleChange, handleSubmit, error } = useGlobalContext();
	return (
		<main>
			<Fade top triggerOnce={true}>
				<Form>
					{/* amount */}
					<div className="form-control">
						<label htmlFor="amount">number of questions</label>
						<input
							type="number"
							name="amount"
							id="amount"
							value={quiz.amount}
							onChange={handleChange}
							className="form-input"
							min={1}
							max={50}
						/>
					</div>

					{/* category */}

					<div className="form-control">
						<label htmlFor="category">category</label>
						<select
							name="category"
							id="category"
							className="form-input"
							value={quiz.category}
							onChange={handleChange}
						>
							<option value="Computers"> Computers</option>
							<option value="General">General</option>
							<option value="Mythology">Mythology</option>
							<option value="Books"> Books</option>
							<option value="Film"> Film</option>
							<option value="Music"> Music</option>
							<option value="Television"> Television</option>
							<option value="VideoGames"> Video-Games</option>
							<option value="BoardGames"> Board-Games</option>
							<option value="Nature<">Nature</option>
							<option value="Mathematics"> Mathematics</option>
							<option value="Sports">Sports</option>
							<option value="Geography">Geography</option>
							<option value="History">History</option>
							<option value="Politics">Politics</option>
							<option value="Art">Art</option>
							<option value="Celebrities">Celebrities</option>
							<option value=">Animals">Animals</option>
							<option value="Vehicles">Vehicles</option>
							<option value="Comics"> Comics</option>
							<option value="Gadgets"> Gadgets</option>
						</select>
					</div>

					{/* difficulty */}

					<div className="form-control">
						<label htmlFor="difficulty">select difficulty</label>
						<select
							name="difficulty"
							id="difficulty"
							className="form-input"
							value={quiz.difficulty}
							onChange={handleChange}
						>
							<option value="easy">easy</option>
							<option value="medium">medium</option>
							<option value="hard">hard</option>
						</select>
					</div>
					{error && (
						<p className="error">
							can't generate questions, please try different options
						</p>
					)}
					<button type="submit" onClick={handleSubmit}>
						start
					</button>
				</Form>
			</Fade>
		</main>
	);
};

const Form = styled.form`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 1rem;
	align-items: center;
	width: 90vw;
	max-width: var(--max-width);
	margin-inline: auto;
	padding: 1rem;
	.form-control {
		display: flex;
		flex-direction: column;
		align-items: center;
		grid-template-columns: 1fr;
	}
	.form-control label {
		display: block;
		text-transform: capitalize;
		font-weight: 500;
		color: #00ffff;
		margin-bottom: 0.5rem;
	}
	.form-input {
		border: none;
		background: #6949fd;
		font-size: 1.2rem;
		padding: 1rem 1rem;
		width: 90%;
		max-width: 800px;
		border-radius: var(--radius);
		text-align: center;
	}
	.error {
		color: var(--clr-red-dark);
		text-transform: capitalize;
	}
	button {
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
	}
`;

export default SetupForm;
