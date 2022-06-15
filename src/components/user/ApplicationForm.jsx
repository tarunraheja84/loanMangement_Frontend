import React from "react";
import classes from "./applicationForm.module.css";
import Navbar from "./UserNavbar";
import UserContext from "../../store/UserContext";
import { useState, useEffect } from "react";
import { useContext } from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
// import "../../css/applicationForm.css"
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Link } from "react-router-dom";
const axios = require("axios");


export default function ApplicationForm() {
  const [applicationData, setApplicationData] = useState({
    income: "",
    cibil: "",
    assets: "",
    purpose: "",
    loan_amount: "",
    mortage:"",
    duration: "",
  });

  const [agree, setAgree] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    setApplicationData({
      ...applicationData,
      [e.target.name]: e.target.value,
    });
  };
  const handleCheck = (e) => {
    setAgree(!agree);
  };

  
  const ctx = useContext(UserContext);

  console.log("id -")
  console.log(ctx.userData[1])

  const responseData = window.localStorage.getItem("userData");
  console.log(responseData);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(applicationData));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      var data={
        customer_id:ctx.userData[1],
        user_income:parseInt(applicationData.income),
        cibil_score: parseInt(applicationData.cibil),
        user_assets: applicationData.assets,
        loan_purpose: applicationData.purpose,
        loan_amount: parseInt(applicationData.loan_amount),
        mortage:applicationData.mortage,
        duration: parseFloat(applicationData.duration),
        admin:ctx.userData[2],
        approved:0,
        rejected:0
    }
    console.log(JSON.stringify(data));
    axios({
      method: "post",
       url: "http://localhost:8080/addUserDetails" ,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      data: JSON.stringify(data),
      success: window.alert("Applied Successfully"),
    });
    window.location.href = "http://localhost:3000/";
    }
  }, [formErrors]);

  
  const validate = (values) => {
    const errors = {};

    if (!values.income) {
      errors.income = "Income is required!";
    }else if(!(/^[0-9]{1,10}$/).test(values.income)){
      errors.income="Income can only be Integer value"
    }

    if (!values.cibil) {
      errors.cibil = "Cibil score is required!";
    }else if(!(/^[0-9]{3}$/).test(values.cibil)){
      errors.cibil="Cibil Score can only be Integer value of three digit"
    }else if(values.cibil > 900){
      errors.cibil="Cibil Score should be less than 900"
    }else if(values.cibil < 300){
      errors.cibil="Cibil Score should be greater than 300"
    }

    if (!values.assets) {
      errors.assets = "Asset is required!";
    }else if(!(/^[a-zA-Z\s]{0,255}$/).test(values.assets)){
      errors.assets="Asset can only be string"
    }

    if (!values.purpose) {
      errors.purpose = "Purpose is required!";
    }else if(!(/^[a-zA-Z\s]{0,255}$/).test(values.purpose)){
      errors.purpose="Purpose can only be string"
    }

    if (!values.loan_amount) {
      errors.loan_amount = "Amount is required!";
    }else if(!(/^[0-9]{1,10}$/).test(values.loan_amount)){
      errors.loan_amount="Amount can only be Integer value"
    }

    if (!values.mortage) {
      errors.mortage = "Mortage is required!";
    }else if(!(/^[a-zA-Z\s]{0,255}$/).test(values.mortage)){
      errors.mortage="Mortage can only be string"
    }

    if (!values.duration) {
      errors.duration = "Duration is required!";
    }else if(!(/^[0-9]$/).test(values.duration)){
      errors.duration="Duration can only be Integer value"
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
  return (
    <>
      <div className={classes.header}>
        <Navbar></Navbar>
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
              <p style={{ fontWeight: "bold" }}>
                Rate of Interest Starting at 10.12% per annum
              </p>
            </div>
          </div>
          <div className={classes.c1}>
            <div className={classes.icon}>
              <AccountBalanceWalletIcon
                style={{ height: "50px", width: "80px" }}
              />
            </div>
            <div className={classes.cont}>
              <p style={{ fontWeight: "bold" }}>
                Loan amount starting from 15,000 INR to 15,00,000 INR
              </p>
            </div>
          </div>
          <div className={classes.c1}>
            <div className={classes.icon}>
              <EventNoteRoundedIcon style={{ height: "50px", width: "80px" }} />
            </div>
            <div className={classes.cont}>
              <p style={{ fontWeight: "bold" }}>
                Tenure Ranging From 12 months to 60 months
              </p>
            </div>
          </div>
        </div>
        <div className={classes.loginForm}>
          <h2 style={{ textAlign: "center" }}>APPLICATION FORM</h2>
          <div className={classes.form} style={{ padding: "10px 40px" }}>
            <form className={classes.login} onSubmit={handleSubmit}>
              <TextField
                required
                id="standard-required"
                name="income"
                label="Your Annual income"
                variant="standard"
                value={applicationData.income}
                onChange={handleChange}
              />
               <p style={{color:"red"}} >{formErrors.income}</p>
              <TextField
                required
                id="standard-required"
                name="cibil"
                label="Your CIBIL Score"
                variant="standard"
                value={applicationData.cibil}
                onChange={handleChange}
              />
               <p style={{color:"red"}}>{formErrors.cibil}</p>
              <TextField
                required
                id="standard-required"
                name="assets"
                label="Assets"
                variant="standard"
                value={applicationData.assets}
                onChange={handleChange}
              />
               <p style={{color:"red"}}>{formErrors.assets}</p>
              <TextField
                required
                id="standard-required"
                name="purpose"
                label="Purpose of loan"
                variant="standard"
                value={applicationData.type}
                onChange={handleChange}
              />
               <p style={{color:"red"}}>{formErrors.purpose}</p>
              <TextField
                required
                id="standard-requried"
                name="loan_amount"
                label="Loan Amount"
                variant="standard"
                value={applicationData.loan_amount}
                onChange={handleChange}
              />
               <p style={{color:"red"}}>{formErrors.loan_amount}</p>
               <TextField
                id="standard-required"
                name="mortage"
                label="Mortages"
                variant="standard"
                value={applicationData.mortage}
                onChange={handleChange}
              />
              <p style={{color:"red"}}>{formErrors.mortage}</p>
              <TextField
                required
                id="standard-required"
                name="duration"
                label="Loan Duration"
                variant="standard"
                value={applicationData.duration}
                onChange={handleChange}
              />
               <p style={{color:"red"}}>{formErrors.duration}</p>
              <div style={{ color: "#6b5c5b", marginTop: "10px" }}>
                <input type="checkbox" onClick={handleCheck} />I have read and
                accept <a href="#">Term and Conditions</a>
              </div>
              <ColorButton disabled={!agree} variant="contained" type="submit">
                SUBMIT
              </ColorButton>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
