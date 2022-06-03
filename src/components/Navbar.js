import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <main className="navbar-container">
        <h1 className="title">India Furniture Limited</h1>
        <section>
          <Link to="/login" className="login-route">
            <button className="nav-btn login-btn">Login</button>
          </Link>
          <Link to="/enquiry-contact">
            <button className="nav-btn contact-us-btn">Contact Us</button>
          </Link>
        </section>
      </main>
    </>
  );
};

export default Navbar;
