import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "./context";
import { Main, Buttons } from "./App";
import Roll from "react-reveal/Roll";

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();
  return (
    <Main>
      <Roll>
        <Form>
          <h2>Triva Setup</h2>
          <Section>
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
          </Section>
          {/* category */}
          <Section>
            <div className="form-control">
              <label htmlFor="category">category</label>
              <select
                name="category"
                id="category"
                className="form-input"
                value={quiz.category}
                onChange={handleChange}
              >
                <option value="General">General</option>
                <option value="Mythology">Mythology</option>
                <option value="Books"> Books</option>
                <option value="Film"> Film</option>
                <option value="Music"> Music</option>
                <option value="Television"> Television</option>
                <option value="VideoGames"> Video-Games</option>
                <option value="BoardGames"> Board-Games</option>
                <option value="Nature<">Nature</option>
                <option value="Computers"> Computers</option>
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
          </Section>
          {/* difficulty */}
          <Section>
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
            <Buttons type="submit" onClick={handleSubmit}>
              start
            </Buttons>
          </Section>
        </Form>
      </Roll>
    </Main>
  );
};
const Section = styled.section`
  width: 88vw;
  max-width: 800px;
  margin: 1rem auto;
  background: #fff;
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

const Form = styled.form`
  h2 {
    font-family: "Segoe UI", Roboto, Oxygen;
    font-style: italic;
    font-weight: 400;
    text-shadow: 2px 3px 2px rgba(0, 0, 0, 0.21);
    text-align: center;
  }
  margin-bottom: 2rem;
  .form-control {
    margin-bottom: 2rem;
  }
  .form-control label {
    display: block;
    text-transform: capitalize;
    font-weight: 500;
    color: var(--clr-grey-3);
    margin-bottom: 0.5rem;
  }
  .form-input {
    border: none;
    background: var(--clr-grey-10);
    font-size: 1rem;
    padding: 0.25rem 1rem;
    width: 70%;
    border-radius: var(--radius);
  }
  .error {
    color: var(--clr-red-dark);
    text-transform: capitalize;
  }
  .submit-btn {
    width: 100%;
    margin-top: 3rem;
  }
`;

export default SetupForm;
