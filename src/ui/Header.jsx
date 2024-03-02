import { HiMusicNote, HiOutlineLightBulb, HiSearch } from "react-icons/hi";
import styled, { css } from "styled-components";
import Avatar from "./Avatar";
import { NavLink } from "react-router-dom";
import useHeaderGsap from "../hooks/useHeaderGsap";
import useLoad from "../hooks/useLoadUser";

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  min-width: 800px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  z-index: 99;
  & svg {
    color: #fff;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    background-clip: text;
  }
`;

const StyledFlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5px;
  padding: 0 5px;
  ${(props) =>
    props.$hi &&
    css`
      overflow: hidden;
    `}
  ${(props) =>
    props.$full &&
    css`
      width: 100%;
    `}
  & span {
    cursor: pointer;
    color: #fff;
    font-size: 20px;
  }
  & svg {
    width: 35px;
    height: 35px;
  }
  & svg:hover {
    transform: scale(1.2);
  }
`;

StyledFlexContainer.defaultProps = {
  $hi: null,
  $full: null,
};

const StyledSearchBar = styled.div`
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  padding: 5px 15px;
  width: 340px;
  gap: 5px;
  background-color: rgba(255, 255, 255, 0.4);
  transition: all 0.3s linear;
  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }
  & svg {
    width: 30px;
    height: 30px;
    color: #222;
  }
  & input {
    caret-color: #3f3f3f;
    font-weight: 500;
    font-size: 20px;
    text-indent: 0.2em;
    width: 260px;
    outline: none;
    border: none;
    background: transparent;
  }
`;

function Header() {
  useHeaderGsap();
  const { jump, user } = useLoad({ initialState: true });
  return (
    <StyledHeader>
      <StyledFlexContainer $full={1} $hi={1}>
        <StyledSearchBar className="header_move">
          <input type="text" />
          <HiSearch />
        </StyledSearchBar>
        <StyledFlexContainer className="header_icon_move" $hi={1}>
          <StyledFlexContainer $hi={1}>
            <NavLink to="music" onClick={(e) => jump(e, "/music/30")}>
              <HiMusicNote />
              <span>music</span>
            </NavLink>
          </StyledFlexContainer>
          <StyledFlexContainer $hi={1}>
            <NavLink to="create" onClick={(e) => jump(e, "/create")}>
              <HiOutlineLightBulb />
              <span>create</span>
            </NavLink>
          </StyledFlexContainer>
        </StyledFlexContainer>
      </StyledFlexContainer>

      <StyledFlexContainer>
        <Avatar user={user} jump={jump} />
      </StyledFlexContainer>
    </StyledHeader>
  );
}

export default Header;
