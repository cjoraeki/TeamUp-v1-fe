import "./settings.css";
import { NavBar } from "../../components/nav/NavBar";
import { Link } from "react-router-dom";

export const Settings = () => {
  return (
    <div className="seting">
      <NavBar />
      <div className="main-setting">
        <h1>Settings and Privacy</h1>
      </div>

      <div className="flex flex-col  items-center justify-center mt-20">
        <div className="card w-96 bg-base-100 shadow-xl ">
          <div className="card-body">
            <button className="btn btn-active ">
              <Link to="/change-password">Change Password</Link>
            </button>
            <button className="btn btn-active">
              <Link to="/update-email">Update Email</Link>
            </button>
            <button className="btn btn-active">
              <Link to="/update-username">Update Username</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
