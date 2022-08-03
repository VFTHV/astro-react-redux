import React from "react";
import GoogleAuth from "./GoogleAuth";

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-primary bg-primary">
        <div className="container-fluid">
          <GoogleAuth />
        </div>
      </nav>
    );
  }
}

export default Header;
