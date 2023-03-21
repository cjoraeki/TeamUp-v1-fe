import "./dashboard.css";
import cj from "../../assets/cj.jpeg";
import { MdEmail, MdOutlineSportsMartialArts } from "react-icons/md";
import { BsFillPhoneFill } from "react-icons/bs";

export const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  // const phoneNumber = localStorage.getItem("phoneNumber");
  // const favoriteSports = localStorage.getItem("favoriteSports");

  return (
    <div className="dashboard">
      <div className="dash-parent">
        <div className="dash-left">
          <div className="image">
            <img src={cj} alt="bigimage" />
          </div>

          <div className="user-details">
            <h3>{user && user.firstName} {user && user.lastName}</h3>
            <p>Software Developer</p>
          </div>

          <div className="active-dash"></div>
        </div>

        <div className="dash-right">
          <div className="dash-right-profile">
            <div className="all-profile email">
              <MdEmail className="icon-profile" />
              <h3>cjoraeki3@gmail.com</h3>
            </div>
            <div className="phone all-profile">
              <BsFillPhoneFill />
              <h3>{user && user.phoneNumber} </h3>
            </div>
            <div className="sport all-profile">
              <MdOutlineSportsMartialArts />
              <h3>{user && user.favoriteSports}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
