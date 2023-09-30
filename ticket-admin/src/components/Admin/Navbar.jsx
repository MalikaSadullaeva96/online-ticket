import React from "react";

const Navbar = () => {
  return (
    <nav>
      <i className="bx bx-menu"></i>
      <span>Categories</span>
      <form>
        <div className="form-input">
          <input type="search" placeholder="Search..." />
          <button className="search-btn">
            <i className="bx bx-search"></i>
          </button>
        </div>
      </form>
      <input type="checkbox" id="switch-mode" hidden />
      <label htmlFor="switch-mode" className="switch-mode"></label>
    </nav>
  );
};

export default Navbar;
