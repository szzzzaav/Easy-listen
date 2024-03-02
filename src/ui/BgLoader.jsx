import styled, { css, keyframes } from "styled-components";
import { useTransitionContext } from "../context/TransitionLoaderContext";

const ani1 = keyframes`
  0%{
  transform: translateY(100%);
  }
  100%{
    transform: translateY(200%);
  }
`;

const ani2 = keyframes`
  100%{
    transform: translateY(100%);
  }
`;

const StyledBg = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background: linear-gradient(
    to right,
    var(--color--blue-100),
    var(--color--blue-80),
    var(--color--blue-60)
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  top: -100%;
  animation: ${ani1} 0.4s ease-in-out backwards;
  ${(props) =>
    props.$isloading &&
    css`
      animation: ${ani2} 0.4s ease-in-out forwards;
    `}
`;

const StyledImg = styled.img`
  width: 300px;
  height: 300px;
  border-radius: var(--border-radius-lg);
  border: 2px solid white;
`;

const StyledText = styled.span`
  font-family: "Calibri", "Montserrat", sans-serif;
  font-size: 25px;
  letter-spacing: 5px;
  word-spacing: 0px;
  color: #fff;
  font-weight: normal;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
`;

function BgLoader() {
  const { isLoading } = useTransitionContext();

  return (
    <StyledBg $isloading={isLoading ? 1 : 0}>
      <StyledImg src="/logo.png" />
      <StyledText>-- Easy Listen --</StyledText>
    </StyledBg>
  );
}

export default BgLoader;
