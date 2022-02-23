import React, { useEffect } from "react";
import { useGlobalContext } from "./context";
import styled from "styled-components";

import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";
function App() {
  const {
    waiting,
    loading,
    questions,
    index,
    correct,
    nextQuestion,
    checkAnswer,
  } = useGlobalContext();

  //  changing the question very 10s
  useEffect(() => {
    let slider = setInterval(() => {
      nextQuestion();
    }, 10000);
    return () => {
      clearInterval(slider);
    };
  }, [nextQuestion]);
  if (waiting) {
    return <SetupForm />;
  }
  if (loading) {
    return <Loading />;
  }

  const { question, incorrect_answers, correct_answer } = questions[index];

  // const answers = [...incorrect_answers, correct_answer]
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
      <Section>
        <CorrectAnswers>
          correct answers : {correct}/{index}
        </CorrectAnswers>
        <Container>
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
        </Container>
        <Buttons onClick={nextQuestion}>next</Buttons>
      </Section>
    </Main>
  );
}

export const Main = styled.main`
  min-height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.article`
  h2 {
    margin-bottom: 2rem;
    text-align: center;
    line-height: 1;
    text-transform: capitalize;
    font-size: 1.2rem;
  }
`;
export const Section = styled.section`
  width: 88vw;
  max-width: 800px;
  margin: 4rem auto;
  background: #fff;
  border-radius: 1.5rem;
  padding: 3rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  h2 {
    font-family: "Segoe UI", Roboto, Oxygen;
  }
`;
const CorrectAnswers = styled.p`
  font-size: 0.8rem;
  margin-bottom: 2rem;
  text-align: right;
  text-transform: capitalize;
  letter-spacing: var(--spacing);
  color: var(--clr-green-dark);
`;
const Button = styled.button`
  display: block;

  width: 100%;
  margin: 0.75rem auto;
  background: var(--clr-primary-7);
  border-radius: var(--radius);
  border-color: transparent;
  color: var(--clr-black);
  letter-spacing: var(--spacing);
  font-size: 1rem;
  cursor: pointer;
  padding: 0.5rem 0;
  transition: var(--transition);
  @media (min-width: 567px) {
    max-width: 60%;
  }
  &:hover {
    background: var(--clr-primary-5);
    color: var(--clr-white);
  }
`;
export const Buttons = styled.button`
  border-radius: var(--radius);
  border-color: transparent;
  padding: 0.25rem 0.4rem;
  display: block;
  width: 35%;
  margin-left: auto;
  margin-top: 2rem;
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
