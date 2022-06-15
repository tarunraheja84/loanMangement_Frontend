import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/login/Login";
import Register from "./components/login/Register";
import Apply from "./components/user/ApplicationForm";
import Applyforloan from "./components/user/Applyforloan";
import Admin from "./components/admin/Admin";
import { UserContextProvider } from "./store/UserContext";
import { LoanContextProvider } from "./store/LoanContext";
import UserHomePage from "./components/user/UserHomePage";
import { useState } from "react";
import Home from "./components/login/Home";

import React from "react";
import Userinfo from "./components/admin/Userinfo";
import Userpage from "./components/user/Userpage";
import Navbar from "./components/Navbar";

function App() {
  const [userlogin, setuserlogin] = useState(false);
  const [adminlogin, setadminlogin] = useState(false);

  function loginhandler() {
    setuserlogin(true);
  }

  function adminloginhandler() {
    setadminlogin(true);
  }

  return (
    <LoanContextProvider>
      <UserContextProvider>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route exact path="/userinfo" element={<Userinfo />} />
              <Route exact path="/userpage" element={<Userpage />} />
              <Route exact path="/" element={<Home></Home>} />
              <Route exact path="/register" element={<Register></Register>} />
              <Route
                exact
                path="/applyloan"
                element={
                  userlogin ? (
                    <Apply></Apply>
                  ) : (
                    <Login
                      userlogin={loginhandler}
                      adminlogin={adminloginhandler}
                    ></Login>
                  )
                }
              />
              <Route
                path="/admin/*"
                element={
                  adminlogin ? (
                    <Admin />
                  ) : (
                    <Login
                      userlogin={loginhandler}
                      adminlogin={adminloginhandler}
                    ></Login>
                  )
                }
              />
              {/* <Route exact path="/login" element={<Login />} /> */}
              <Route exact path="/home" element={<UserHomePage />} />
            </Routes>
          </BrowserRouter>
        </div>
      </UserContextProvider>
    </LoanContextProvider>
  );
}

export default App;
