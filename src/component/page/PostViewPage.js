import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import CommentList from '../list/CommentList';
import Button from '../ui/Button';
import TextInput from '../ui/TextInput';
import data from '../../data.json';

const Wrapper = styled.div`
	padding: 16px;
	width: calc(100% - 32px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Container = styled.div`
	width: 100%;
	max-width: 720px;

	& > * {
		:not(:last-child) {
			margin-bottom: 16px;
		}	
	}
`;

const PostContainer = styled.div`
	padding: 8px 16px;
	border: 1px solid grey;
	border-radius: 8px;
`;

const TitleText = styled.p`
	font-size: 28px;
	font-weight: 500;
`;

const ContentText =styled.p`
	font-size: 20px;
	line-height: 32px;
	white-space: pre-wrap; // 공백을 코드 그대로 표시, 자동 줄바꿈
`;

const CommentLabel =styled.p`
	font-size: 16px;
	font-weight: 500;
`;

const PostViewPage = (props) => {
	const navigate = useNavigate();
	const { postId } = useParams();

	// 해당글 찾기
	const post = data.find((item) => {
		// eslint-disable-next-line
		return item.id == postId;
	});

	const [comment, setComment] = useState("");

	return (
		<Wrapper>
			<Container>
				<Button
					title="뒤로가기"
					onClick={() => {
						navigate("/");
					}}
				/>
				<PostContainer>
					<TitleText>{post.title}</TitleText>
					<ContentText>{post.content}</ContentText>
				</PostContainer>

				<CommentLabel>댓글</CommentLabel>
				<CommentList comments={post.comments} />

				<TextInput
					height={40}
					value={comment}
					onChange={(event) => {
						setComment(event.target.value);
					}}
				/>
				<Button
					title="댓글 작성하기"
					onClick={() => {
						navigate("/");
					}}
				/>
			</Container>
		</Wrapper>
	);
};

export default PostViewPage;