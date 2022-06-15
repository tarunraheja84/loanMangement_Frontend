import loanimg from "./images/loan1-removebg-preview.png";
import style from "./loanreqstyle.module.css";
import Navbar from "./UserNavbar";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import UserContext from "../../store/UserContext";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
const axios = require("axios");

export default function LoanReq() {
  const [formData, setFormData] = useState({
    full_name: "",
    address: "",
    income: "",
    civil_score: "",
    requiredAmount: "",
    textarea: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };

  console.log(localStorage.getItem("userData"))
  const ctx = useContext(UserContext);
  console.log("ctx == ");
  console.log(ctx);

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#7b0d1e"),
    backgroundColor: "#7b0d1ee0",

    // margin:"auto",
    marginTop: "30px",
    // width:"50%",
    "&:hover": {
      backgroundColor: "#7b0d1e",
    },
  }));

  const [x,setx]=useState(1)
  return (
    <>
     {
       x==1? <div className={style.maincont}>
       <Navbar></Navbar>
         <div className={style.contentloan}>
           <div className={style.desc}>
             <h3 style={{ textAlign: "center", color: "#7b0d1e" }}>
               Apply for the Personal Loan
             </h3>
             <img
               src={loanimg}
               style={{ width: "80%", margin: "auto" }}
               alt="image not found"
             />
             <div style={{ width: "80%", margin: "auto" }}>
               <p>
                 Lorem ipsum, dolor sit amet consectetur adipi elit. Quas
                 veritatis excepturi mollitia sapiente dolores pisci ad. Labor
                 adipi elit. Quas labor!
               </p>
               <div className={style.text}>
                 <ArrowForwardIosRoundedIcon style={{ color: "#7b0d1e" }} />
                 <p> Rate of Interest Starting at 10.12% per annum </p>
               </div>
               <div className={style.text}>
                 <ArrowForwardIosRoundedIcon style={{ color: "#7b0d1e" }} />
                 <p> Loan amount starting from 15,000 INR to 15,00,000 INR</p>
               </div>
               <div className={style.text}>
                 <ArrowForwardIosRoundedIcon style={{ color: "#7b0d1e" }} />
                 <p> Tenure Ranging From 12 months to 60 months </p>
               </div>
             </div>
           </div>
           <div className={style.loanform}>
             <div className={style.loaninner}>
               <div className={style.form1}>
                 {/* <h3 style={{ color: "#7b0d1e", textAlign: "center" }}>
                 Get a step closer to your Loan Sanction
               </h3> */}
                 <form
                   className={style.inputLoan}
                   onSubmit={(event) => {
                     event.preventDefault();
                     // window.location.href="http://localhost:3000"
                   }}
                 >
                   <TextField
                     required
                     id="standard-required"
                     name="full_name"
                     label="Enter Your Name"
                     variant="standard"
                     value={formData.full_name}
                     onChange={handleChange}
                   />
                   <TextField
                     required
                     id="standard-password-input"
                     name="address"
                     label="Address"
                     autoComplete="current-password"
                     variant="standard"
                     value={formData.address}
                     onChange={handleChange}
                   />
                   <TextField
                     required
                     id="standard-required"
                     name="income"
                     label="Income per annum"
                     variant="standard"
                     value={formData.income}
                     onChange={handleChange}
                   />
 
                   <TextField
                     required
                     id="standard-required"
                     name="civil_score"
                     label="Civil Score"
                     variant="standard"
                     value={formData.civil_score}
                     onChange={handleChange}
                   />
                   <TextField
                     required
                     id="standard-required"
                     name="requiredAmount"
                     label="Enter the amount you want"
                     variant="standard"
                     value={formData.requiredAmount}
                     onChange={handleChange}
                   />
                   <div className={style.drop}>
                     <div className={style.accountType}>
                       <label for="accountType">Select Account type :</label>
 
                       <select name="accountType" id="accountType">
                         <option value="current">Current</option>
                         <option value="savings">Savings</option>
                         <option value="employee">Employee</option>
                         <option value="student">Student</option>
                       </select>
                     </div>
                     <div className={style.loanType}>
                       <label for="loanType">Select Loan Type :</label>
 
                       <select name="loanType" id="loanType">
                         <option value="home_loan">Home Loan</option>
                         <option value="car_loan">Car Loan</option>
                         <option value="gold_loan">Gold Loan</option>
                       </select>
                     </div>
                   </div>
                   <TextareaAutosize
                     aria-label="minimum height"
                     minRows={3}
                     name="textarea"
                     placeholder="Enter your Assets & Liablities"
                     style={{
                       width: "100%",
                       marginTop: "10px",
                       "font-size": "16px",
                       resize: " none",
                     }}
                     value={formData.textarea}
                     onChange={handleChange}
                   />
                   <div style={{ display: "flex", marginTop: "10px" }}>
                     <input type="checkbox" id="t&c" />
                     <label htmlFor="t&c">
                       {" "}
                       <b>
                         <small>
                           I authorize Axis Bank to call on the above mentioned
                           number and explain the features of the product anytime
                           between 8 am to 9 pm. I also agree to Axis Bank/
                           Subsidiaries/ Affiliates/ Agents contacting me for
                           various other product updates, special offers Third
                           Party Products or any such information from time to
                           time.
                         </small>
                       </b>{" "}
                     </label>
                   </div>
                   <ColorButton variant="contained" type="submit">
                     Apply For Loan
                   </ColorButton>
                 </form>
               </div>
             </div>
           </div>
         </div>
       </div>:<h1>no</h1>
     }
    </>
  );
}
