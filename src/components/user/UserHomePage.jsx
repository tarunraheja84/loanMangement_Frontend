import React from 'react'
import Navbar from './UserNavbar'

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";

import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const darkTheme = createTheme({ palette: { mode: "dark" } });
const lightTheme = createTheme({ palette: { mode: "light" } });

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData("8934759823", "Nikhil Lallar", "60,000", "approved"),
  createData("8934759823", "Nikhil Lallar", "60,000", "approved"),
  createData("8934759823", "Nikhil Lallar", "60,000", "approved"),
  createData("8934759823", "Nikhil Lallar", "60,000", "approved"),
  createData("8934759823", "Nikhil Lallar", "60,000", "approved"),
  createData("8934759823", "Nikhil Lallar", "60,000", "approved"),
  createData("8934759823", "Nikhil Lallar", "60,000", "approved"),
  createData("8934759823", "Nikhil Lallar", "60,000", "approved"),
  createData("8934759823", "Nikhil Lallar", "60,000", "approved"),
  createData("8934759823", "Nikhil Lallar", "60,000", "approved"),
];

export default function Userpage() {
  return (
    <div>
      <Navbar></Navbar>
      <div style={{ padding: "70px" }}>
        <Card sx={{ minWidth: 275 }}>
          <div style={{ padding: "70px" }}>
            <Box sx={{ width: 1 }}>
              <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                <Box gridColumn="span 8">
                  <h1
                    style={{
                      margin: "0px",
                      textAlign: "center",
                      fontFamily: "lato",
                      fontWeight: 300,
                    }}
                  >
                    Loan Summary
                  </h1>

                  <Item elevation="24">
                    {" "}
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>Loan ID</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Amount</TableCell>
                            <TableCell align="right">Status</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row) => (
                            <TableRow
                              key={row.name}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell component="th" scope="row">
                                {row.name}
                              </TableCell>
                              <TableCell align="right">
                                {row.calories}
                              </TableCell>
                              <TableCell align="right">{row.fat}</TableCell>
                              <TableCell align="right">{row.carbs}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Item>
                </Box>

                <Box gridColumn="span 4">
                  <div
                    style={{
                      padding: "0px 20px ",

                      display: "table",
                      margin: " 0 auto",
                    }}
                  >
                    
                  </div>
                </Box>
              </Box>
            </Box>
          </div>
        </Card>
      </div>
    </div>
  );
}