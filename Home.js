import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to <span>HealthMate</span></h1>
          <p>Your trusted digital platform for managing health records, appointments & wellness.</p>
          <div className="hero-buttons">
            <Link to="/login" className="btn-primary">Get Started</Link>
            <Link to="/about" className="btn-secondary">Learn More</Link>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1576091160550-112173f7f869?w=600&h=400&fit=crop"
          alt="Healthcare"
          className="hero-img"
        />
      </section>

      {/* ABOUT SECTION */}
      <section className="about">
        <h2>About HealthMate</h2>
        <p>
          HealthMate is your digital partner created to simplify patient record management, 
          appointment tracking, and daily health monitoring.  
          Our platform ensures accuracy, security, and the fastest access to your medical data.
        </p>

        <img
          src="https://images.unsplash.com/photo-1631217314831-c6227db76b6e?w=600&h=400&fit=crop"
          alt="About HealthMate"
          className="about-img"
        />
      </section>

      {/* SERVICES SECTION */}
      <section className="services">
        <h2>What We Offer</h2>

        <div className="service-boxes">

          <div className="box">
            <img src="https://cdn-icons-png.flaticon.com/512/2966/2966486.png" alt="records"/>
            <h3>Manage Records</h3>
            <p>Easily add, view & organize each patient’s medical history.</p>
          </div>

          <div className="box">
            <img src="https://cdn-icons-png.flaticon.com/512/3209/3209265.png" alt="doctor"/>
            <h3>Doctor Access</h3>
            <p>Doctors can view & update patient details in seconds.</p>
          </div>

          <div className="box">
            <img src="https://cdn-icons-png.flaticon.com/512/4285/4285498.png" alt="appointment"/>
            <h3>Appointments</h3>
            <p>Quickly schedule appointments and receive reminders.</p>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta">
        <h2>Join HealthMate Today</h2>
        <p>Experience a smarter, faster, and more secure healthcare system.</p>

        <Link to="/register" className="btn-primary">
          Create an Account
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 HealthMate. All Rights Reserved.</p>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/pharmacy">Pharmacy</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </footer>

    </div>
  );
}
