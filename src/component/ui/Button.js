import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	padding: 8px 16px;
	font-size: 16px;
	border: 1px solid darkgray;
	border-radius: 8px;
	cursor: pointer;
	:hover {
		background-color: grey;
		color: #fff;
	}
`;

const Button = (props) => {
	const { title, onClick } = props;

	return (
		<StyledButton onClick={onClick}>
			{title || "button"}
		</StyledButton>
	);
};

export default Button;