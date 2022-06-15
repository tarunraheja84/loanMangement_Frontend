import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn} from "./NavElements";
import Button from "@mui/material/Button";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreditScoreRoundedIcon from "@mui/icons-material/CreditScoreRounded";

const Navbar = () => {
  const style={
      "font-size": "1.4em",
      "font-weight":" bolder",
      display: "flex",
      "align-items": "center",
      width: "50%"
  }
  return (
    <>
      <Nav>
        <NavLink to='/home'>
        <div style={style}>
            <CreditScoreRoundedIcon
              style={{ color: "black", "font-size": "35px" }}
            />
            <p>QuickLoan</p>
          </div>
        </NavLink>
        <Bars />
        <NavMenu>
          {/* <NavLink to='/home' activeStyle>
            HOME
          </NavLink> */}
          <NavLink to='/applyloan' activeStyle>
            APPLY FOR LOAN
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a href='/applyloan' style={{"textDecoration":"none"}}><Button variant="contained">LogOut</Button></a>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
