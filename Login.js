import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="login-container">

      <div className="login-box">

        <h2 className="login-title">Welcome Back 👋</h2>
        <p className="login-subtitle">Login to continue your HealthMate journey</p>

        <form className="login-form">

          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>

          <div className="input-group">
            <label>User Type</label>
            <select required>
              <option value="">Select user type</option>
              <option>Patient</option>
              <option>Doctor</option>
              <option>Administrator</option>
            </select>
          </div>

          <div className="input-group">
            <label>Security Key (Optional)</label>
            <input type="text" placeholder="Enter security key if provided" />
          </div>

          <div className="extra-options">
            <label>
              <input type="checkbox" /> Remember Me
            </label>

            <a href="/forgot-password" className="forgot-link">
              Forgot Password?
            </a>
          </div>

          <button className="login-btn">Login</button>

          <p className="signup-text">
            Don’t have an account?{" "}
            <a href="/register">Create one</a>
          </p>

        </form>
      </div>
    </div>
  );
}
