import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Settings } from "./pages/settings/Settings";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { ForgotPassword } from "./pages/forgot-password/ForgotPassword";
import { Profile } from "./pages/profile/Profile";
import { OTP } from "./pages/otp/OTP";
import { UpdateEmail } from "./pages/changes/UpdateEmail";
import { UpdateUsername } from "./pages/changes/UpdateUsername";
import { ChangePassword } from "./pages/changes/ChangePassword";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="otp" element={<OTP />} />
          <Route path="forget-password" element={<ForgotPassword />} />
          <Route path="signup" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="update-email" element={<UpdateEmail />} />
          <Route path="update-username" element={<UpdateUsername />} />
          <Route path="change-password" element={<ChangePassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
