import { BrowserRouter, Route, Routes } from "react-router-dom";
import InfoGraphic from "./adminComponents/InfoGraphic";
import UsersList from "./adminComponents/UsersList";
import Navbar from "./Navbar";
import classes from "./index.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Admin() {
  const [applications,setApplications]=useState([]);
  // const loanCtx = useContext(LoanContext);
  const [demo,setDemo]=useState(0);

  useEffect(() => {
    let rows = [];
    axios({
      method: "GET",
      url: "http://localhost:8080/loanapplications",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }).then((res) => {
      res.data.map((loan,index)=>{
          axios({
            method: "GET",
            url: "http://localhost:8080/getuser/"+loan.customer_id,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }).then((result)=>{
            rows.push({ 
              serialNo: index + 1,
              id:result.data.user_id,
              name: result.data.user_name,
              email: result.data.email,
              cibilScore: loan.cibil_score,
              loanType: loan.loan_purpose,
              ...loan,
              ...result.data
            })
          })
          if(index===res.data.length-1){
              setApplications(rows);
              // setDemo(1);
              console.log("rows",rows);
          }
      })
    // setapplications(rows);
    });
    console.log("applications",applications);
  },[demo]);
function refresh(){
  setDemo(demo+1);
}
// function refresh2(num){
//   setTimeout(() => {
    
//   }, 3000);
// }
  
  const [clicked,setClicked]=useState(true);
  const [item, setItem] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="home" element={<InfoGraphic />} />
        <Route path="requests" element={<UsersList refresh= {refresh} key="1" listName="requests" clicked={setClicked} click={clicked} applications={applications}/>} />
        <Route path="borrowers" element={<UsersList refresh= {refresh} key="2" listName="borrowers" clicked={setClicked} click={clicked} applications={applications}/>} />
      </Routes>
    </>
  );
}

export default Admin;
