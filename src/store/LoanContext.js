import React from "react";
import { useState } from "react";
import { createContext } from "react";

const LoanContext = createContext({
  loanData: [],
  setLoanData: () => {},
});

export function LoanContextProvider(props) {
  const [loanData, setLoanData] = useState([]);

  const context = {
    loanData: loanData,
    setLoanData: setLoanData,
  };

  return (
    <LoanContext.Provider value={context}>
      {props.children}
    </LoanContext.Provider>
  );
}

export default LoanContext;
