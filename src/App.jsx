import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import "./App.css";
import LoginForm from "./pages/Login/LoginForm/LoginForm";
import LoginCreate from "./pages/Login/LoginCreate/LoginCreate";
import LoginPasswordLost from "./pages/Login/LoginPasswordLost/LoginPasswordLost";
import LoginPasswordReset from "./pages/Login/LoginPasswordReset/LoginPasswordReset";
import { UserStorage } from "./UserContext";
import User from "./pages/User/User";
import ProtectedRoute from "./components/Helper/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />}>
            <Route index element={<LoginForm />} />
            <Route path="criar" element={<LoginCreate />} />
            <Route path="perdeu" element={<LoginPasswordLost />} />
            <Route path="resetar" element={<LoginPasswordReset />} />
          </Route>
          <Route
            path="conta/*"
            element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
