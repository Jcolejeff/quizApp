import React from "react";
import { useGlobalContext } from "./context";
import styled from "styled-components";
import { Buttons } from "./App";

const Modal = () => {
	const { isModalOpen, closeModal, correct, questions } = useGlobalContext();
	return (
		<Div>
			<div
				className={`${
					isModalOpen ? "modal-container isOpen" : "modal-container"
				}`}
			>
				<div className="modal-content">
					<p>
						{/* correct answers calculation */}
						You answered {((correct / questions.length) * 100).toFixed(0)}% of
						questions correctly
					</p>
					<Buttons onClick={closeModal}>play again</Buttons>
				</div>
			</div>
		</Div>
	);
};

export default Modal;
const Div = styled.section`
	.modal-container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.75);
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0;
		transition: var(--transition);
		z-index: -1;
	}
	.isOpen {
		opacity: 1;
		z-index: 999;
	}

	.modal-content {
		background: #6949fd;
		width: 90vw;
		max-width: var(--fixed-width);
		padding: 3rem;
		border-radius: var(--radius);
		text-align: center;
		position: relative;
	}
	.modal-content p {
		font-size: 1.2rem;
		text-transform: none;
		color: yellow;
		text-align: center;

		padding: 1rem;
	}
	.close-btn {
		margin-right: auto;
	}
`;
