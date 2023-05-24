import React from "react";
import './Navbar.css'

function Navbar() {
  return (
    <div>
          <nav className="navbar fixed-top bg-dark px-5">
          <div className="container-fluid">
               <a className="navbar-brand" href="#">
               <img src="logo.png" alt="Logo" width={200} height={50} className="d-inline-block align-text-top img-style" />
               </a>
               <a className="discover"> Discover our solution</a>
               <button class="btn-signin" type="submit">Sign in</button>
          </div>
          </nav>
</div>

  );
}

export default Navbar;
