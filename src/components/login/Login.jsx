import React, { useContext } from "react";
import classes from "./style.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";
import CasesRoundedIcon from "@mui/icons-material/CasesRounded";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import UserContext from "../../store/UserContext";
import Button from "@mui/material/Button";
const axios = require("axios");

export default function Login(props) {
  const [formData, setFormData] = useState({
    user_name: "",
    user_password: "",
  });

  const ctx = useContext(UserContext);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#011638"),
    backgroundColor: "#011638e0",
    marginTop: "30px",
    "&:hover": {
      backgroundColor: "#011638",
    },
  }));
  return (
    <>
      <div className={classes.header}>
        <p>
          {" "}
          <a
            href="/"
            style={{ float: "left", color: "white", textDecoration: "none" }}
          >
            Home
          </a>
        </p>{" "}
        <p>|</p>{" "}
        <p>
          {" "}
          <a
            href="/register"
            style={{ float: "left", color: "white", textDecoration: "none" }}
          >
            Register
          </a>
        </p>
      </div>
      <div className={classes.content}>
        <div className={classes.explanation}>
          <div className={classes.c1}>
            <div className={classes.icon}>
              <MonetizationOnRoundedIcon
                style={{ height: "50px", width: "80px" }}
              />
            </div>
            <div className={classes.cont}>
              <p style={{ fontWeight: "bold" }}>GET LOANS IN THREE STEPS</p>
            </div>
          </div>
          <div className={classes.c1}>
            <div className={classes.icon}>
              <EventNoteRoundedIcon style={{ height: "50px", width: "80px" }} />
            </div>
            <div className={classes.cont}>
              <p style={{ fontWeight: "bold" }}>CONVENIENT PROCESS</p>
            </div>
          </div>
          <div className={classes.c1}>
            <div className={classes.icon}>
              <CasesRoundedIcon style={{ height: "50px", width: "80px" }} />
            </div>
            <div className={classes.cont}>
              <p style={{ fontWeight: "bold" }}>EXCLUSIVE BENEFITS</p>
            </div>
          </div>
        </div>
        <div className={classes.loginForm}>
          <p style={{ textAlign: "center" }}>LET US BEGIN</p>
          <div className={classes.form}>
            <h4 style={{ color: "#003049", textAlign: "center" }}>
              Enter Customer Id and Password
            </h4>
            <form
              className={classes.login}
              onSubmit={(e) => {
                e.preventDefault();
                var data = {
                  user_name: formData.user_name,
                  user_password: formData.user_password,
                };

                console.log("local == " + localStorage.getItem("userData"));

                var x = axios({
                  method: "POST",
                  url: "http://localhost:8080/loginCheck",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                  },
                  data: JSON.stringify(data),
                }).then(function (res) {
                  console.log(res.data);
                  ctx.addUserData(res.data);
                  console.log(ctx.userData);

                  window.localStorage.setItem("userData", res.data);

                  if (res.data[0] === 1 && res.data[2] === 1) {
                    props.adminlogin();
                  } else if (res.data[0] === 1 && res.data[2] === 0) {
                    props.userlogin();
                  } else {
                    window.alert("No Account Exists");
                    window.location.href = "http://localhost:3000/register";
                  }
                });
              }}
            >
              <TextField
                required
                id="standard-required"
                label="Username"
                name="user_name"
                variant="standard"
                value={formData.user_name}
                onChange={handleChange}
              />
              <TextField
                id="standard-password-input"
                label="Password"
                name="user_password"
                type="password"
                autoComplete="current-password"
                variant="standard"
                value={formData.user_password}
                onChange={handleChange}
              />
              <small
                style={{
                  color: "#0d21a1",
                  marginTop: "15px",
                  textDecoration: "underline",
                }}
              >
                {" "}
                <a href="/register">Forget Password</a>{" "}
              </small>
              <div className={classes.tc}>
                <small>Let's Login for Loan</small>
              </div>
              <ColorButton variant="contained" type="submit">
                LOG-IN
              </ColorButton>
              <small style={{ color: "black", marginTop: "10px" }}>
                New to Axis Bank <Link to="/register">Register</Link>{" "}
              </small>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
