import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: calc(100% - 32px);
	padding: 16px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	border: 1px solid grey;
	border-radius: 8px;
	cursor: pointer;
	background-color: white;
	:hover {
		background-color: lightgrey;
	}
`;

const TitleText = styled.p`
	font-size: 16px;
	font-weight: 500;
`;

const PostListItem = (props) => {
	const { post, onClick } = props;

	return (
		<Wrapper onClick={onClick}>
			<TitleText>{post.title}</TitleText>
		</Wrapper>
	);
};

export default PostListItem;