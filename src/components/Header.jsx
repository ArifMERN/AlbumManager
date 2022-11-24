import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="headerWrapper">
        <Link to="/">Home</Link>
        <Link to="/albums">Albums</Link>
        <Link to="/addAlbum">Add_Albums</Link>
      </div>
    </div>
  );
};

export default Header;
