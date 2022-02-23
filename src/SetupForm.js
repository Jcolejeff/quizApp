import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "./context";
import { Main, Section, Buttons } from "./App";

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();
  return (
    <Main>
      <Section>
        <h2>setup quiz</h2>
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
          <Buttons type="submit" onClick={handleSubmit}>
            start
          </Buttons>
        </Form>
      </Section>
    </Main>
  );
};
const Form = styled.form`
  margin-bottom: 2rem;
  .form-control {
    margin-bottom: 2rem;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
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
    padding: 0.25rem 0.5rem;
    width: 100%;
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
