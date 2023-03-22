import React from "react";
import "./register.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { sendData } from "../../utils/datalayer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Register = (props) => {
  const navigate = useNavigate();

  let formData = {};
  const handleChange = (e) => {
    formData[e.target.name] = e.target.value;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const res = await sendData("signup", formData);
    const { status, error, data } = res;

    console.log(status, error, data);
    if (status === 201) {
      return toast.info("Check your email for verification");
    } else if (status === 400) {
      return toast.error("Error. Please try again");
    } else {
      alert("Please Login");
      return navigate("/");
    }
  };

  return (
    <div className="background-register">
      <div className="auth-form-container register-width">
        <h2>Register</h2>
        <form
          className="register-form"
          onSubmit={handleFormSubmit}
          method="post"
        >
          <div className="form-display">
            <label>First name</label>
            <input
              type="text"
              placeholder="Firstname"
              className="input w-full max-w-xs"
              onChange={handleChange}
              name="firstName"
            />
          </div>

          <div className="form-display">
            <label>Last name</label>
            <input
              type="text"
              placeholder="Lastname"
              className="input w-full max-w-xs"
              onChange={handleChange}
              name="lastName"
            />
          </div>

          <div className="form-display">
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              className="input w-full max-w-xs"
              onChange={handleChange}
              name="email"
            />
          </div>

          <div className="form-display">
            <label>Phone Number</label>
            <input
              type="text"
              placeholder="Phone number"
              className="input w-full max-w-xs"
              onChange={handleChange}
              name="phoneNumber"
            />
          </div>

          <label>Select Favorite Sport</label>
          <select
            className="selection"
            placeholder="Select"
            onChange={handleChange}
            name="favoriteSports"
          >
            <option selected disabled></option>
            <option value="Football" className="selec">
              Football
            </option>
            <option value="Basketball" className="selec">
              Basketball
            </option>
            <option value="Ice Hockey" className="selec">
              Ice Hockey
            </option>
            <option value="Motorsports" className="selec">
              Motorsports
            </option>
            <option value="Bandy" className="selec">
              Bandy
            </option>
            <option value="Rugby" className="selec">
              Rugby
            </option>
            <option value="Skiing" className="selec">
              Skiing
            </option>
            <option value="Shooting" className="selec">
              Shooting
            </option>
            <option value="Swimming" className="selec">
              Swimming
            </option>
          </select>

          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            className="input w-full max-w-xs"
            onChange={handleChange}
            name="password"
          />

          <button type="submit" className="btn btn-wide">
            Sign Up
          </button>
        </form>
        <Link to="/">
          <button className="link-btn">
            Already have an account? Login here.
          </button>
        </Link>
      </div>
      <ToastContainer />
    </div>
  );
};
