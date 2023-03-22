import React from "react";
import { useNavigate } from "react-router-dom";
import { sendData } from "../../utils/datalayer";
import { NavBar } from "../../components/nav/NavBar";
import "../forgot-password/forget.css";

export const ChangePassword = () => {
  const navigate = useNavigate();

  let formData = {};
  const handleChange = (e) => {
    formData[e.target.name] = e.target.value;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    formData["emailForOTP"] = "cjoraeki3@gmail.com"; //find how to fetch
    const res = await sendData("change-password", formData);
    const { status, error, data } = res;

    console.log(status, error, data);

    if (status === 200) {
      return navigate("/");
    } else if (status === 400) {
      return alert("Error. Please try again ");
    } else {
      alert("Please Login ");
      return navigate("/");
    }
  };

  return (
    <div className="email-update">
        <NavBar />
      <div className="background-forget">
        <div className="auth-form-container foreget-width">
          <h2>Enter New Password</h2>

          <form
            className="login-form"
            onSubmit={handleFormSubmit}
            method="post"
          >
            <input
              type="text"
              placeholder="Password"
              onChange={handleChange}
              name="password" required
            />
            <input
              type="text"
              placeholder="Confirm Password"
              onChange={handleChange}
              // name="child[]"
              required
            />
            <button type="submit" className="btn btn-wide">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
