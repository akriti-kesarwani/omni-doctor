import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">OmniDoctor</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#doctors">Doctors</a>
          <a href="#appointments">My Appointments</a>
          <a href="#about">About Us</a>
          <a href="#contact" className="active">Contact Us</a>
          <button className="book-now">Book Now</button>
        </div>
      </nav>

      <main className="contact-page">
        <div className="booking-section">
          <div className="booking-header">
            <h2 className="subtitle">BOOK AN APPOINTMENT</h2>
            <h1 className="title">Effortless Online Booking</h1>
            <h2 className="subtitle-dark">for Your Perfect Visit</h2>
          </div>

          <form className="booking-form">
            <div className="form-row">
              <div className="form-group">
                <input type="text" placeholder="Your Name" />
              </div>
              <div className="form-group phone-input-group">
                <select className="country-code">
                  <option value="+1">+1 (USA)</option>
                  <option value="+44">+44 (UK)</option>
                  <option value="+91">+91 (India)</option>
                  <option value="+61">+61 (Australia)</option>
                  <option value="+86">+86 (China)</option>
                  <option value="+81">+81 (Japan)</option>
                  <option value="+49">+49 (Germany)</option>
                  <option value="+33">+33 (France)</option>
                  <option value="+39">+39 (Italy)</option>
                  <option value="+7">+7 (Russia)</option>
                </select>
                <input type="tel" placeholder="Phone Number" className="phone-number" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <select defaultValue="">
                  <option value="" disabled>Type of Appointment</option>
                  <option>General Checkup</option>
                  <option>Specialist Consultation</option>
                  <option>Follow-up</option>
                </select>
              </div>
              <div className="form-group">
                <select defaultValue="">
                  <option value="" disabled>Preferred Doctor</option>
                  <option>Dr. Smith</option>
                  <option>Dr. Johnson</option>
                  <option>Dr. Williams</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <input type="date" placeholder="Preferred Date" />
              </div>
              <div className="form-group">
                <input type="time" placeholder="Preferred Time" />
              </div>
            </div>

            <div className="form-group full-width">
              <textarea placeholder="Special Request or Notes"></textarea>
            </div>

            <button type="submit" className="submit-btn">Book Your Appointment</button>
          </form>
        </div>

        <div className="info-section">
          <div className="message-box">
            <p>We're here to make your healthcare journey smooth and stress-free.Whether you have a question, need support, or just want to share feedback – don't hesitate to reach out.</p>
          </div>

          <div className="clinic-hours">
            <h3>Clinic Hours</h3>
            <div className="hours-list">
              <div className="hours-item">
                <span>Monday to Friday</span>
                <span>9:00-6:00</span>
              </div>
              <div className="hours-item">
                <span>Saturday</span>
                <span>11:00-2:00</span>
              </div>
              <div className="hours-item">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

          <div className="emergency-contact">
            <p className="motto">Your Smile Our Priority</p>
            <h3>24/7 Emergency</h3>
            <p className="phone">0000 0000-0000</p>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>OmniDoctor</h3>
            <p>Through secure video calls, chats, and digital prescriptions, you can consult licensed doctors without leaving your home. Our ecosystem is designed to fit into your daily life — saving you time while keeping your health in check.</p>
            <div className="social-links">
              <a href="#twitter">Twitter</a>
              <a href="#instagram">Instagram</a>
              <a href="#facebook">Facebook</a>
              <a href="#email">Email</a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Company</h3>
            <a href="#faq">FAQ</a>
            <a href="#team">Our Team</a>
            <a href="#contact">Contact Us</a>
            <a href="#about">About Us</a>
            <a href="#testimonials">Testimonials</a>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>1800 7800 2938</p>
            <p>example@gmail.com</p>
            <p>new york , 400890</p>
          </div>

          <div className="footer-section">
            <h3>Clinic Hours</h3>
            <div className="clinic-hours-footer">
              <div>Monday - Friday<span>9:00 - 6:00</span></div>
              <div>Saturday<span>11:00 - 2:00</span></div>
              <div>Sunday<span>Closed</span></div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 OmniDoctor - All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default App; 