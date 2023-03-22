import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { sendData } from "../../utils/datalayer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const navigate = useNavigate();

  let formData = {};
  const handleChange = (e) => {
    formData[e.target.name] = e.target.value;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const res = await sendData("login", formData);
    const { status, error, data } = res;
    console.log(status, error, data);

    if (status === 200) {
      localStorage.setItem("user", JSON.stringify(data));
      console.log(data);
      toast.success("Login successful");
      return navigate("/profile");
    } else if (data === null) {
      return toast.error("Input fields cannot be empty");
    } else {
      toast.info("Please Login");
      return navigate("/");
    }
  };

  return (
    <div className="background-login">
      <div className="auth-form-container foreget-width">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleFormSubmit} method="post">
          <label>Email or Phone Number</label>
          <input
            type="email"
            placeholder="Email or Phone Number"
            name="email" required
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password" required
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-wide">
            Log In
          </button>
        </form>

        <Link to="/signup">
          <button className="link-btn">
            Don't have an account? Register here.
          </button>
        </Link>
        <Link to="/forget-password">
          {" "}
          <button className="link-btn">Forgot Password? Click here.</button>
        </Link>
      </div>
      <ToastContainer />
    </div>
  );
};
