import styled, { css } from "styled-components";
import StyledCard from "../../ui/Card";
import {
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiReactrouter,
  SiSupabase,
} from "react-icons/si";
import FlexContainer from "../../ui/FlexContainer";
import useFooterGsap from "../../hooks/useFooterGsap";

const StyledVideo = styled.video`
  position: absolute;
  z-index: 1;
  top: 0;
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  user-select: none;
  pointer-events: none;
`;

const StyledCover = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  box-shadow: inset 0px -3.1px 3.5px rgba(0, 0, 0, 0.485),
    inset 0px -7.4px 8.3px rgba(0, 0, 0, 0.598),
    inset 0px -13.9px 15.7px rgba(0, 0, 0, 0.659),
    inset 0px -24.8px 27.9px rgba(0, 0, 0, 0.708),
    inset 0px -46.4px 52.2px rgba(0, 0, 0, 0.775),
    inset 0px -111px 125px rgba(0, 0, 0, 1);
  padding-left: 30px;
  padding-top: 120px;
`;

const StyledHeading = styled.div`
  position: relative;
  z-index: 10;
  font-size: 50px;
  font-weight: 900;
  color: #fff;
  ${(props) =>
    props.$ani &&
    css`
      transform: translateY(-100%);
      opacity: 0;
      mix-blend-mode: difference;
    `}
`;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  & svg {
    width: 40px;
    height: 40px;
    color: #00d0ff;
  }
  & span {
    color: #fff;
    text-align: center;
    font-size: 30px;
    font-weight: 900;
  }
`;

function Footer() {
  useFooterGsap();
  return (
    <>
      <StyledCard
        $width="100%"
        $height="100vh"
        $index={10}
        $bc="#222"
        className="picture"
      >
        <StyledVideo
          src="/audio-grid.mp4"
          autoPlay="autoplay"
          muted="muted"
          loop="loop"
        ></StyledVideo>
        <StyledCover>
          <StyledHeading className="footer-heading">
            WE OFFER THE BEST <br />
            AUDIO-VISUAL EXPERIENCE
          </StyledHeading>
        </StyledCover>
      </StyledCard>
      <StyledCard
        $width="100%"
        $height="100vh"
        $index={-1}
        $bc="#000000"
        className="footer_container"
      >
        <StyledHeading className="footer_scroll_text" $ani={1}>
          SUPPORT BY
        </StyledHeading>
        <StyledWrapper>
          <FlexContainer $fd="column" className="footer_scroll">
            <SiReact />
            <span>React</span>
          </FlexContainer>
          <FlexContainer $fd="column" className="footer_scroll">
            <SiReactquery />
            <span>React Query</span>
          </FlexContainer>

          <FlexContainer $fd="column" className="footer_scroll">
            <SiReactrouter />
            <span>React Router</span>
          </FlexContainer>

          <FlexContainer $fd="column" className="footer_scroll">
            <SiReacthookform />
            <span>React Hook Form</span>
          </FlexContainer>

          <FlexContainer $fd="column" className="footer_scroll">
            <SiSupabase />
            <span>Supabase</span>
          </FlexContainer>
        </StyledWrapper>
      </StyledCard>
    </>
  );
}

export default Footer;
