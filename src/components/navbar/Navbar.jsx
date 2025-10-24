import React from "react";
import { NavLink } from "react-router";
import gitIcon from '../../assets/github_icon.png'
import logo from '../../assets/logo.png'




const Navbar = () => {
  const links = (
    <>
      <NavLink to={'/'} >Home</NavLink>
      <NavLink to={'/allApps'}>Apps</NavLink>
      <NavLink to={'/installedApp'}>Installation</NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm sm:px-15">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <NavLink to={'/'}><div className="btn btn-ghost text-xl"> <img className="h-full" src={logo}/> <span className="text-3xl font-extrabold text-gradient">HERO.IO</span></div></NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-10 font-semibold">{links}</ul>
      </div>
      <div className="navbar-end">
        <a href="https://github.com/SAIMON-25"  className="btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white"><img src={gitIcon} /> Contribute</a>
      </div>
    </div>
  );
};

export default Navbar;
