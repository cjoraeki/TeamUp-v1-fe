import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./forget.css";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="background-forget">
      <div className="auth-form-container foreget-width">
        <h2>Reset password</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            id="email"
          />

          <button type="submit" className="btn btn-wide">
            Submit
          </button>
        </form>
        <Link to="/">
          {" "}
          <button className="link-btn">Go back to Login.</button>
        </Link>
      </div>
    </div>
  );
};
