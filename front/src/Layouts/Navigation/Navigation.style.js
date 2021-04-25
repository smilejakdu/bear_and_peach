import styled from "styled-components";
import palette from "../../utils/palette"
import { NavLink } from "react-router-dom";

const HeaderBody = styled.div`
  width:100%;
`;

const CategoryLink = styled.div`
  width: 60%;
  display: flex;
  margin:0 auto;
  z-index: 1;
  justify-content: space-between;
  /* position: fixed; 나중에 고정 시켜야 할때는 그럼 무엇으로 고정을 시키나? */
  background-color: white;
  border-bottom: 2px solid ${palette.base_clor[2]};
  overflow-x: hidden;

  a:hover {
    text-decoration: none;
  }
`;

const CategoryLinkItem = styled(NavLink)`
  padding: 6px 8px 6px 16px;
  margin-right: 3px;
  text-decoration: none;
  font-size: 18px;
  color: black;
  display: block;

  &.hover{
    border-bottom: 3px solid ${palette.base_clor[1]};
  }

  &.active {
    color:black;
    font-weight: bold;
    border-bottom: 3px solid ${palette.base_clor[1]};
  }

  @media (max-width: 850px) {
    font-size: 18px;
  }
`;

export { CategoryLinkItem, CategoryLink, HeaderBody };
