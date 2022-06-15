import { useEffect, useState, useContext } from "react";
import LoanContext from "../../../store/LoanContext.js";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import classes from "./UsersList.module.css";
import { ContactsOutlined } from "@mui/icons-material";
import Userinfo from "../Userinfo.jsx";
import { NavLink } from "react-router-dom";

const axios = require("axios");

const columns = [
  {
    id: "serialNo",
    label: "S.No",
    minWidth: 80,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "name",
    label: "Name",
    minWidth: 80,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "email",
    label: "Email",
    minWidth: 80,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "cibilScore",
    label: "Cibil Score",
    minWidth: 80,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "loanType",
    label: "Loan Type",
    minWidth: 80,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
];

export default function UsersList({ listName,applications,clicked,click,refresh}) {

  const [id,setId]=useState(0);
  const [loanApplications,setLoanApplications]=useState([]);

  useEffect(()=>{
    let list=[];
     applications.map((item)=>{
      if(listName=="requests"){
        if(item.approved==0){
          list.push(item);
        }
      } 
      else if(listName=="borrowers"){
        if(item.approved==1){
          list.push(item);
        }
      }
    })
        setLoanApplications(list);
  },[])
  return (
    click||listName=="borrowers"?<div className={classes.tableContainer}>
    <div
      className={classes.table}
      style={{ width: listName === "requests" ? "80%" : "70%" }}
    >
      <Paper
        sx={{
          overflow: "hidden",
          backgroundColor: "transparent",
          fontFamily: "Lato",
        }}
      >
        <TableContainer sx={{ maxHeight: 480, fontFamily: "Lato" }}>
          <Table
            stickyHeader
            aria-label="sticky table"
            sx={{ fontFamily: "Lato" }}
          >
            <TableHead sx={{ fontSize: 2, fontFamily: "Lato" }}>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    sx={{
                      backgroundColor: "var(--blue)",
                      fontFamily: "Lato",
                      color: "whitesmoke",
                      fontSize: "20px",
                    }}
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
                {listName === "requests" && (
                  <TableCell
                    sx={{
                      backgroundColor: "var(--blue)",
                      fontFamily: "Lato",
                      color: "whitesmoke",
                      fontSize: "20px",
                    }}
                    key="approveLoan"
                    align="center"
                    style={{ minWidth: 100 }}
                  >
                    View Details
                  </TableCell>
                )}
              </TableRow> 
             </TableHead>
            <TableBody>
              {loanApplications.length>0 && loanApplications
                .map((row, index) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.serialNo}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            sx={{ fontFamily: "Lato", fontWeight: "800" }}
                          >
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                      {listName === "requests" && (
                        <TableCell key="approveLoan" align="center">
                          <div className={classes.actionButtons}>
                            <Button
                              variant="contained"
                              sx={{ backgroundColor: "var(--blue)" }}
                              onClick={()=>{
                                clicked(false)
                                setId(row.id)
                              }}
                            >
                              View
                            </Button>
                          </div>
                        </TableCell>
                      )}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        {console.log("loan",loanApplications)};
        
      </Paper>
    </div>
  </div>: <Userinfo id={id} refresh= {refresh} clicked={clicked}></Userinfo>
  );
}
