import { Button } from "@mui/material";
import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements.js";
import { styled } from "@mui/material/styles";
import classes from "./Navbar.module.css";
import CreditScoreRoundedIcon from "@mui/icons-material/CreditScoreRounded";


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/" activeStyle>
          {/* here you can add logo */}
          <div className={classes.icon}>
            <CreditScoreRoundedIcon
              style={{ color: "black", "font-size": "35px" }}
            />
            <p>QuickLoan</p>
          </div>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/admin/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/admin/requests" activeStyle>
            Pending applications
          </NavLink>
          <NavLink to="/admin/borrowers">Borrowers</NavLink>
          <NavLink to="/admin/requests" activeStyle>
            <Button sx={{}} variant="outlined" onClick={()=>{
              window.location.href="http://localhost:3000/admin/home"
            }}>
              Logout
            </Button>
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
