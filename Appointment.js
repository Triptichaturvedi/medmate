import React, { useState } from "react";
import "./Appointment.css";

export default function Appointment() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    doctor: "",
    date: "",
    time: "",
    reason: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment Submitted Successfully!");
    console.log(form);
  };

  return (
    <div className="appointment-page">

      {/* HEADER */}
      <div className="appointment-header">
        <h1>Book an Appointment</h1>
        <p>Schedule your visit with our experienced medical professionals.</p>
      </div>

      {/* FORM CARD */}
      <div className="appointment-card">
        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Full Name</label>
            <input 
              type="text" 
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name" 
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter email address"
              required 
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input 
              type="text" 
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              required 
            />
          </div>

          <div className="form-group">
            <label>Select Doctor</label>
            <select 
              name="doctor"
              value={form.doctor}
              onChange={handleChange}
              required
            >
              <option value="">Choose a doctor</option>
              <option value="Dr. Meera Kapoor">Dr. Meera Kapoor — Cardiologist</option>
              <option value="Dr. Rahul Verma">Dr. Rahul Verma — Orthopedic</option>
              <option value="Dr. Ananya Singh">Dr. Ananya Singh — Neurologist</option>
              <option value="Dr. Rohan Malhotra">Dr. Rohan Malhotra — General Physician</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group half">
              <label>Date</label>
              <input 
                type="date" 
                name="date"
                value={form.date}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="form-group half">
              <label>Time</label>
              <input 
                type="time" 
                name="time"
                value={form.time}
                onChange={handleChange}
                required 
              />
            </div>
          </div>

          <div className="form-group">
            <label>Reason for Appointment</label>
            <textarea
              name="reason"
              value={form.reason}
              onChange={handleChange}
              placeholder="Describe your symptoms or purpose..."
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Book Appointment
          </button>
        </form>
      </div>

      {/* FOOTER */}
      <footer className="appointment-footer">
        <p>© 2025 HealthMate — Your Trusted Healthcare Partner.</p>
      </footer>
    </div>
  );
}
