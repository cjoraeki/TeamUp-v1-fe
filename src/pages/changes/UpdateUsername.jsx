import React from "react";
import { useNavigate } from "react-router-dom";
import { updateAData } from "../../utils/datalayer";
import "../forgot-password/forget.css";
import { NavBar } from "../../components/nav/NavBar";

export const UpdateUsername = () => {
  const navigate = useNavigate();

  let formData = {};
  const handleChange = (e) => {
    formData[e.target.name] = e.target.value;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    // formData["emailForOTP"] = "cjoraeki3@gmail.com"; //find how to fetch
    const res = await updateAData("update-profile", formData);
    const { status, error, data } = res;

    console.log(status, error, data);

    if (status === 200) {
      return navigate("/profile");
    } else if (status === 400) {
      return alert("Error. Please try again ");
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
            />
            {/* <input
              type="text"
              placeholder="Confirm Username"
              onChange={handleChange}
              name="username"
            /> */}
            <button type="submit" className="btn btn-wide">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
