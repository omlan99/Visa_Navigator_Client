import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { Tooltip } from "react-tooltip";

const links = (
  <>
    <li>
      <Link>Home</Link>
    </li>
    <li>
      <Link to={'/allvisa'}>All Visas</Link>
    </li>
  </>
);
const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login", { replace: true, state: null });
  };
  const { user, signOutUser } = useContext(AuthContext);

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
              <li>
                {user && (
                  <li>
                    <Link>Add Visa</Link>
                  </li>
                )}
                {user && (
                  <li>
                    <Link>My added visas</Link>
                  </li>
                )}
                {user && (
                  <li>
                    <Link>My Visa Applications</Link>
                  </li>
                )}
              </li>
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl">
            Visa Navigator
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-3">
            {links}

            {user && (
              <li>
                <Link>Add Visa</Link>
              </li>
            )}
            {user && (
              <li>
                <Link>My added visas</Link>
              </li>
            )}
            {user && (
              <li>
                <Link>My Visa Applications</Link>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end space-x-4">
          {user ? (
            <>
              {/* {" "} */}
              <Tooltip  id="my-tooltip"></Tooltip>
              <div
                className="avatar"
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user.displayName}
                data-tooltip-place="left"
              >
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt="" />
                </div>
              </div>
              <Link to="/login" onClick={signOutUser} className="btn">
                Log Out
              </Link>
            </>
          ) : (
            <>
              <Link to={"login"}>
                <button className="btn" onClick={handleClick}>
                  Login
                </button>
              </Link>
               <Link to={"signup"}>
                <button className="btn" onClick={handleClick}>
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
