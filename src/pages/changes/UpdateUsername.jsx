import React from "react";
import { useNavigate } from "react-router-dom";
import { updateAData } from "../../utils/datalayer";
import "../forgot-password/forget.css";
import { NavBar } from "../../components/nav/NavBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UpdateUsername = () => {
  const navigate = useNavigate();

  let formData = {};
  const handleChange = (e) => {
    formData[e.target.name] = e.target.value;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const res = await updateAData("update-profile", formData);
    const { status, error, data } = res;
    console.log(status, error, data);

    if (status === 200) {
      localStorage.setItem("user", JSON.stringify(data));
      toast.success("Username changed successfully");
      return setTimeout(() => {
        navigate("/profile");
      }, 3000);
    } else {
      alert("Error changing your username");
      return navigate("/settings");
    }
  };

  return (
    <div className="email-update">
      <NavBar />
      <div className="background-forget">
        <div className="auth-form-container foreget-width">
          <h2>Enter New Username</h2>

          <form
            className="login-form"
            onSubmit={handleFormSubmit}
            method="post"
          >
            <input
              type="text"
              placeholder="Username"
              onChange={handleChange}
              name="username"
              required
            />
            <button type="submit" className="btn btn-wide">
              Submit
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
