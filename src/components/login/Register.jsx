import React, { useEffect } from "react";
import classes from "./style.module.css";
import { useState } from "react";
import UserContext from "../../store/UserContext";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";
import CasesRoundedIcon from "@mui/icons-material/CasesRounded";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useContext } from "react";
const axios = require("axios");

export default function Home() {
  const [formData, setFormData] = useState({
    id: "",
    user_name: "",
    full_name: "",
    user_password: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(formData));
    setIsSubmit(true);
  };
  useEffect(()=>{
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      var data = {
        user_name: formData.user_name,
        user_password: formData.user_password,
        email: formData.email,
        isAdmin: 0,
      };
      console.log(JSON.stringify(data));
      axios({
        method: "POST",
        url: "http://localhost:8080/addUser",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        data: JSON.stringify(data),
        success: window.alert("Registerd Successfully"),
      });
      window.location.href = "http://localhost:3000/applyloan";
    }
  },[formErrors])

  const validate = (values) => {
    const errors = {};
    if (!values.user_password) {
      errors.user_password = "Password is required!";
    } else if (
      !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(values.user_password)
    ) {
      errors.user_password = "Password should contain atleast 1 number and 1 character of minimum length 6";
    }

    return errors;
  };

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#011638"),
    backgroundColor: "#011638e0",
    marginTop: "30px",
    "&:hover": {
      backgroundColor: "#011638",
    },
  }));

  const ctx=useContext(UserContext)
  console.log(ctx.userData)

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
            href="/applyloan"
            style={{ float: "left", color: "white", textDecoration: "none" }}
          >
            Login
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
              onSubmit={(event) => {
                event.preventDefault();
                var data = {
                  user_name: formData.user_name,
                  user_password: formData.user_password,
                  email: formData.email,
                  isAdmin: 0,
                };
                console.log(JSON.stringify(data));
                axios({
                  method: "POST",
                  url: "http://localhost:8080/addUser",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                  },
                  data: JSON.stringify(data),
                  success: window.alert("Added Successfully"),
                });
                window.location.href = "http://localhost:3000/applyloan";
              }}
            >
              <TextField
                required
                id="standard-required"
                name="user_name"
                label="Username"
                variant="standard"
                value={formData.user_name}
                onChange={handleChange}
              />
              <TextField
                required
                id="standard-required"
                name="full_name"
                label="Full Name"
                variant="standard"
                value={formData.full_name}
                onChange={handleChange}
              />
              <TextField
                required
                id="standard-required"
                name="email"
                label="Email"
                variant="standard"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                id="standard-password-input"
                name="user_password"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="standard"
                value={formData.user_password}
                onChange={handleChange}
              />
              <p style={{ color: "red" }}>{formErrors.user_password}</p>
              <div className={classes.tc}>
                <small>Let's Register for Loan</small>
              </div>
              <ColorButton variant="contained" type="submit">
                Register
              </ColorButton>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}