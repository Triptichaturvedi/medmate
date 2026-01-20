import React from "react";
import "./Register.css";

export default function Register() {
  return (
    <div className="reg-container">

      <div className="reg-box">

        <h2 className="reg-title">Create Your Account</h2>
        <p className="reg-subtitle">Join HealthMate and start your health journey</p>

        <form className="reg-form">

          {/* Full Name */}
          <div className="input-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter full name" required />
          </div>

          {/* Email */}
          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter email address" required />
          </div>

          {/* Password */}
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Create password" required />
          </div>

          {/* Confirm Password */}
          <div className="input-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="Re-enter password" required />
          </div>

          {/* Age + Gender */}
          <div className="row">
            <div className="input-group">
              <label>Age</label>
              <input type="number" placeholder="Your age" required />
            </div>

            <div className="input-group">
              <label>Gender</label>
              <select required>
                <option value="">Select gender</option>
                <option>Female</option>
                <option>Male</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {/* User Type */}
          <div className="input-group">
            <label>User Type</label>
            <select required>
              <option value="">Select role</option>
              <option>Patient</option>
              <option>Doctor</option>
              <option>Administrator</option>
            </select>
          </div>

          {/* Optional Fields */}
          <div className="input-group">
            <label>Phone Number</label>
            <input type="text" placeholder="Enter phone number" />
          </div>

          <div className="input-group">
            <label>Address</label>
            <textarea placeholder="Enter full address"></textarea>
          </div>

          {/* Doctor Only */}
          <div className="input-group">
            <label>Specialization (For Doctors)</label>
            <input type="text" placeholder="Eg: Cardiologist, Dermatologist" />
          </div>

          {/* Upload Photo */}
          <div className="input-group">
            <label>Profile Picture (Optional)</label>
            <input type="file" />
          </div>

          <button className="reg-btn">Create Account</button>

          <p className="login-text">
            Already have an account? <a href="/login">Login</a>
          </p>

        </form>
      </div>
    </div>
  );
}
