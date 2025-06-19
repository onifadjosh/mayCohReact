import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="bg-warning fixed-top d-flex justify-content-between align-items-center px-2 py-2"
      style={{ width: "100%", marginBottom: "100px" }}
    >
      <div>LOGO</div>

      <div className="d-flex gap-3">
        <Link to={"/"}>Home</Link>

        <Link to={"/about"}>About</Link>

        <Link to={"/contact"}>Contact</Link>
      </div>

      <div>
        <button>Log in</button>

        <Button />
      </div>
    </nav>
  );
};

export default NavBar;
