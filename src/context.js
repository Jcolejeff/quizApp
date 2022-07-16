import axios from "axios";
import React, { useState, useContext, createContext } from "react";

// setting up corresponding categories to the number at the api call
const table = {
	General: 9,
	Books: 10,
	Film: 11,
	Music: 12,
	Television: 14,
	VideoGames: 15,
	BoardGames: 16,
	Nature: 17,
	Computers: 18,
	Mathematics: 19,
	Mythology: 20,
	Sports: 21,
	Geography: 22,
	History: 23,
	Politics: 24,
	Art: 25,
	Celebrities: 26,
	Animals: 27,
	Vehicles: 28,
	Comics: 29,
	Gadgets: 30,
};

const API_ENDPOINT = "https://opentdb.com/api.php?";

const AppContext = createContext();

const AppProvider = ({ children }) => {
	const [Start, setStart] = useState(true);
	const [waiting, setWaiting] = useState(true);
	const [loading, setLoading] = useState(false);
	const [questions, setQuestions] = useState([]);
	const [index, setIndex] = useState(0);
	const [correct, setCorrect] = useState(0);
	const [error, setError] = useState(false);
	const [quiz, setQuiz] = useState({
		amount: 1,
		category: "Computers",
		difficulty: "easy",
	});

	const [isModalOpen, setIsModalOpen] = useState(false);

	const fetchQuestions = async (url) => {
		setLoading(true);
		setWaiting(false);
		const response = await axios(url).catch((err) => console.log(err));
		if (response) {
			const data = response.data.results;
			if (data.length > 0) {
				setQuestions(data);
				setLoading(false);
				setWaiting(false);
				setError(false);
			} else {
				setWaiting(true);
				setError(true);
			}
		} else {
			setWaiting(true);
		}
	};

	const nextQuestion = () => {
		setIndex((oldIndex) => {
			const index = oldIndex + 1;
			if (index > questions.length - 1) {
				openModal();
				return 0;
			} else {
				return index;
			}
		});
	};
	const checkAnswer = (value) => {
		if (value) {
			setCorrect((oldState) => oldState + 1);
		}
		nextQuestion();
	};

	const openModal = () => {
		setIsModalOpen(true);
	};
	const closeModal = () => {
		setWaiting(true);
		setCorrect(0);
		setIsModalOpen(false);
	};
	// handling the setup form
	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setQuiz({ ...quiz, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { amount, category, difficulty } = quiz;

		const url = `${API_ENDPOINT}amount=${amount}&difficulty=${difficulty}&category=${table[category]}&type=multiple`;
		fetchQuestions(url);
	};

	return (
		<AppContext.Provider
			// state values i want the whole app to have access to
			value={{
				waiting,
				loading,
				questions,
				index,
				correct,
				error,
				isModalOpen,
				nextQuestion,
				checkAnswer,
				closeModal,
				quiz,
				handleChange,
				handleSubmit,
				Start,
				setStart,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
// exporting the custom hook that returns our store
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppProvider };
