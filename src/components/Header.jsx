import React from "react";

const Header = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column"
      style={{ height: "70vh" }}
    >
      <h1 className="fs-1 font-bold text-dark font-monospace mb-5">About Us</h1>

      <p className="text-center">
        We are a non-profit organization focused on celebrating and empowering <br />
        young Girls and Women in Technology across Africa.
      </p>
    </div>
  );
};

export default Header;
