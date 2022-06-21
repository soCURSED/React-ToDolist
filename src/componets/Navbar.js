import React from "react";

const Navbar = ({projectname}) => {
  return (
    <nav className="navbar navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">{projectname}</span>
      </div>
    </nav>
  );
};

export default Navbar;
