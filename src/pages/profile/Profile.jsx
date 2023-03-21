import React from "react";
import "./profile.css";
import { NavBar } from "../../components/nav/NavBar";
import { Footer } from "../../components/footer/Footer";
import { Dashboard } from "../../components/dashboard/Dashboard";

export const Profile = () => {
  return (
    <div className="profile">
      <NavBar />

      <Dashboard />

      <Footer />
    </div>
  );
};

export default Profile;
