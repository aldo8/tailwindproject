import React from "react";
import { Link } from "react-router-dom";
const Dropdown = ({isOpen,toogle}) => {
  return (
    <div className={isOpen ? 'grid grid-rows-4 text-center items-center bg-yellow-500' : 'hidden'} onClick={toogle}>
      <Link className="p-4" to="/">
        Home
      </Link>
      <Link className="p-4" to="/menu">
        Menu
      </Link>
      <Link className="p-4" to="/about">
        About
      </Link>
      <Link className="p-4" to="/about">
        Contact
      </Link>
    </div>
  );
};

export default Dropdown;
