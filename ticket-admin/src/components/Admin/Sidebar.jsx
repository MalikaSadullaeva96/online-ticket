import React from "react";
import { NavLink } from "react-router-dom";


const Sidebar = () => {

  const handleLogout = () => {
    sessionStorage.clear();
    window.location.replace("/")
  };

  return (
    <section id="sidebar">
      <NavLink to="/" className="brand">
        <i className="bx bxs-smile"></i>
        <span className="text">Ticked</span>
      </NavLink>
      <ul className="side-menu top">
        <li className="side__menu">
          <NavLink to="/">
            <i className="bx bxs-dashboard"></i>
            <span className="text">Dashboard</span>
          </NavLink>
        </li>
        <li className="side__menu">
          <NavLink to="/create-ticket">
            <i className="bx bxs-shopping-bag-alt"></i>
            <span className="text">Create ticket</span>
          </NavLink>
        </li>
      </ul>
      <ul className="side-menu">
        <li className="side__menu">
          <NavLink to="/settings">
            <i className="bx bxs-cog"></i>
            <span className="text">Settings</span>
          </NavLink>
        </li>
        <li>
          <a href="#/" onClick={handleLogout} className="logout">
            <i className="bx bxs-log-out-circle"></i>
            <span className="text">Logout</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;
