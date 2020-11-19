import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <Link to="/" className="navlink">
          Task 12
        </Link>
        <Link to="/tasks" className="navlink">
          Tasks
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
