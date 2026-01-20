import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        <div className="logo">
          <svg className="logo-svg" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="24" fill="#00d4ff" opacity="0.2"/>
            <path d="M25 10 L35 20 L35 40 L15 40 L15 20 Z" fill="#00d4ff" stroke="white" strokeWidth="2"/>
            <path d="M22 28 L28 28 M25 25 L25 31" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span>HealthMate</span>
        </div>
      </Link>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/pharmacy">Pharmacy</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
  );
}
