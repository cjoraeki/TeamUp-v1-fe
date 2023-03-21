import "./navbar.css";
import pic1 from "../../assets/pic1.jpg";
import { useNavigate, Link } from "react-router-dom";
import { HiUserGroup } from "react-icons/hi";

export const NavBar = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  console.log(user);
  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    return navigate("/");
  }

  return (
    <>
      <div className="navbar bg-base-50">
        <div className="flex-1">
          <a href="/profile" className="btn btn-ghost normal-case text-xl ">
            <HiUserGroup />
            TeamUp
          </a>
        </div>

        <div className="flex-none gap-2">
          <div>
            <p>{user && user.username}</p>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-square avatar">
              <div className="w-20 mask mask-squircle">
                <img src={pic1} alt="profile_pic" />
              </div>
            </label>

            <ul
              tabIndex={0}
              className="mt-3 p-5 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 bg-black hover:bg-gray-400"
            >
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="">Buddies</Link>
              </li>
              <li>
                <Link to="">Discover</Link>
              </li>
              <li>
                <Link to="/settings">Settings & Privacy</Link>
              </li>
              <li>
                <button onClick={logout}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
