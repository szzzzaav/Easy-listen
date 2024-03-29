import styled from "styled-components";
import SpinnerMini from "../../ui/SpinnerMini";
import CommentItem from "./CommentItem";

const StyledContainer = styled.div`
  display: flex;
  position: relative;
  z-index: 2;
  top: -100px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-shrink: 0;
  padding: 30px 0;
  border-radius: 20px;
  width: 1200px;
  gap: 40px;
  height: auto;
  background-color: rgba(255, 255, 255, 0.5);
`;

function Comments({ comments, isPending }) {
  return (
    <StyledContainer>
      {isPending && <SpinnerMini />}
      {!isPending &&
        comments.map((comment) => (
          <CommentItem comment={comment} key={comment.id} />
        ))}
    </StyledContainer>
  );
}

export default Comments;
