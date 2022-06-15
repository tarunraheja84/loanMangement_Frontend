import { Link } from "react-router-dom";
import classes from "./home.module.css";
import Button from "@mui/material/Button";
import React from "react";
import Navbar from "../user/UserNavbar";
import CreditScoreRoundedIcon from "@mui/icons-material/CreditScoreRounded";
import CottageRoundedIcon from "@mui/icons-material/CottageRounded";
import CarRentalRoundedIcon from "@mui/icons-material/CarRentalRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
export default function () {
  const divStyle = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80')",
    height: "95vh",
    backgroundPosition: "center",

    width: "100%",
    backgroundSize: "cover",
  };
  return (
    <>
      <div style={{ backgroundColor: "white", height: "auto" }}>
        <div className={classes.nav}>
          <div className={classes.icon}>
            <CreditScoreRoundedIcon
              style={{ color: "white", "font-size": "35px" }}
            />
            <p>QuickLoan</p>
          </div>
          <div className={classes.links}>
            <div className={classes.big}>
              <a href="/applyloan">Login as User</a>
              <a href="/admin/home">Login as Admin</a>
            </div>
            <div className={classes.small}>
              <a href="/admin/requests">Login as Admin</a>
            </div>
          </div>
        </div>
        <div style={divStyle} className={classes.maindiv}>
          <div className={classes.parent}>
            <div className={classes.child}>
              <div className="head">
                <p style={{ "font-weight": "bold", fontSize: "30px" }}>
                  Welcome to{" "}
                  <span style={{ color: "#bb3e03", fontWeight: "1000" }}>
                    QuickLoan
                  </span>{" "}
                </p>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eligendi eveniet accusantium exercitationem necessitatibus,
                pariatur perferendis est, earum neque assumenda incidunt quae
                impedit in consectetur quaerat nulla unde placeat laudantium
                quas.
              </p>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#bb3e03",
                  borderRadius: "5px 15px 5px 15px",
                }}
              >
                {" "}
                <a href="/applyloan">Log-In</a>{" "}
              </Button>
            </div>
          </div>
         </div>
        <div className={classes.loanType}>
          <p
            style={{ "font-size": "1.8em", fontWeight: "bold", color: "black" }}
          >
            Loans at best interest rates to meet your Life Goals :)
          </p>
          <hr
            style={{
              width: "20%",
              height: "2px",
              color: "black",
              backgroundColor: "black",
              border: "none",
            }}
          />
          <div className={classes.loans} style={{ color: "black" }}>
            <div className={classes.loan}>
              <CottageRoundedIcon style={{ "font-size": "60px" }} />
              <p>Home Loan</p>
            </div>
            <div className={classes.loan}>
              <CarRentalRoundedIcon style={{ "font-size": "60px" }} />
              <p>Car Loan</p>
            </div>
            <div className={classes.loan}>
              <SchoolRoundedIcon style={{ "font-size": "60px" }} />
              <p>Education Loan</p>
            </div>
            <div className={classes.loan}>
              <BusinessCenterRoundedIcon style={{ "font-size": "60px" }} />
              <p>Business Loan</p>
            </div>
          </div>
        </div>
        <div className={classes.steps}>
          <p style={{ fontSize: "30px", fontWeight: "900", color: "#bb3e03" }}>
            Get Loans in Three Steps
          </p>
          <div className={classes.mainsteps}>
            <div className={classes.sin}>
              <p>1. Register to the Website </p>
              <ArrowCircleRightIcon style={{ fontSize: "40px" }} />
            </div>
            <div className={classes.sin}>
              <p>2. Fill The Loan Form </p>
              <ArrowCircleRightIcon style={{ fontSize: "40px" }} />
            </div>
            <div className={classes.sin}>
              <p>3. Request For the Loan</p>
              <ArrowCircleRightIcon style={{ fontSize: "40px" }} />
            </div>
            <div className={classes.sin}>
              <p>And BOOM !!! </p>
              <EmojiEmotionsIcon style={{ fontSize: "40px" }} />
            </div>
          </div>
        </div>
        <div className={classes.moreinfo}>
          <img
            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Image nOt found"
          />
          <div className={classes.morecont} style={{ color: "#14213d" }}>
            <p style={{ fontWeight: "bold", fontSize: "30px" }}>
              We Provide What You and Your Loved ones Need
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique ex voluptatibus sed numquam magnam ipsam pariatur
              officiis fugiat, iusto consectetur libero corrupti aliquid
              incidunt delectus. Adipisci officiis pariatur fugiat esse.
            </p>
          </div>
        </div>
        <div className={classes.footer}>
          <p> © Developed by Maximus Group 3</p>
        </div>
      </div>
    </>
  );
}
