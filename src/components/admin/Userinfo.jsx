import React, { useEffect, useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import classes from "./userinfo.module.css";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import bootstrap from "bootstrap";

const axios = require("axios");
export default function Userinfo(props) {
  const [customer,setCustomer]=useState({})
  const [user,setUser]=useState({})
  const [isApproved,setApporved]=useState(0)

  useEffect(() => {
    console.log("id-",props.id)
    axios({
      method: "GET",
      url: "http://localhost:8080/loandetails/"+props.id,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }).then((data)=>{
      console.log("--loan data--")
      setCustomer(data.data)
      console.log(customer);
    })

    axios({
      method: "GET",
      url: "http://localhost:8080/getuser/"+props.id,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }).then((result)=>{
      
      console.log(result.data)
      setUser(result.data)
      })

  },[]);

  useEffect(()=>{
    customer.approved=isApproved
    console.log("customer",customer)
    axios({
      method: "post",
       url: "http://localhost:8080/addUserDetails" ,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      data: JSON.stringify(customer),
      success: window.alert("Applied Successfully"),
    }).then((res)=>{
        console.log("res",res);
    })
    
  },[isApproved])

  return (
    <div className={classes.main}>
      <div className={classes.body}>
        <h1
          style={{
            textAlign: "center",
            margin: "20px",
            fontFamily: "lato",
            color: "white",
          }}
        >
          User Info
        </h1>
        
        
        <div className={classes.customerdata}>
        <table className={classes.ct}>
          <tr>
            <td>Full Name</td>
            <td>{user.user_name}</td>
          </tr>
          <hr />
          <tr>
            <td>Email</td>
            <td>{user.email}</td>
          </tr>
          <hr />
          <tr>
            <td>User Income</td>
            <td>{customer.user_income}</td>
          </tr>
          <hr />
          <tr>
            <td>Loan Amount</td>
            <td>{customer.loan_amount}</td>
          </tr>
          <hr />
          <tr>
            <td>Loan Purpose</td>
            <td>{customer.loan_purpose}</td>
          </tr>
          <hr />
          <tr>
            <td>Duration in Years</td>
            <td>{customer.duration}</td>
          </tr>
          <hr />
          <tr>
            <td>Mortgage</td>
            <td>{customer.mortage}</td>
          </tr>
          <hr />
          <tr>
            <td>Cibil Score</td>
            <td>{customer.cibil_score}</td>
          </tr>
          <hr />
          <tr>
            <td>User Assests</td>
            <td>{customer.user_assets}</td>
          </tr>
        </table>
        </div>

   
          
        </div>
        <div className={classes.button}>
          <button className={classes.btns} onClick={()=>{
                  setApporved(1);
                }}>
            Approve
          </button>
          <button type="button" className={classes.btns} style={{"backgroundColor":"red"}}onClick={()=>{
                  setApporved(-1);
                }}>
            Reject
          </button>
          </div>
          <div className={classes.mainbtn}>
          <button className={classes.mainbtn1}
          onClick={() => {
            props.clicked(true);
            // props.refresh();
            window.location.href="http://localhost:3000/admin/requests"
          }}
        >
          
          Go Back To All Requested Loans Page <ExitToAppIcon  style={{"transform":"rotate(180deg)"}} />
          
        </button>

   
       
        </div>
      </div>
  );
}