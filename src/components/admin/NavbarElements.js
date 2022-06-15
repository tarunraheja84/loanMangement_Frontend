import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background-image: url("https://www.transparenttextures.com/patterns/beige-paper.png");
  background-color: white;
  ${'' /* border-radius: 10px; */}
  height: 57px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  z-index: 10;
`;

export const NavLink = styled(Link)`
  color: #166ecb;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 17px;
  font-weight: bold;
  padding: 0 2rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
