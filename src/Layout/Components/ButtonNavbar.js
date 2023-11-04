import React from "react";
import { Link } from "react-router-dom";

const ButtonNavbar = ({ name, to }) => {
  return (
    <Link
      to={to}
      style={{color: "white",textDecoration: "none",}}
    >
      {name}
    </Link>
  );
}

export default ButtonNavbar;
