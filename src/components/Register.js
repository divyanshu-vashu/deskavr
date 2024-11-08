import React, { useState, useEffect } from 'react';
import vectorContact from '../assets/logos/conatct.png'; 
// import vectorContact from '../assets/logos/interview.png'; 
import '../stylesheets/Register.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from 'emailjs-com';

gsap.registerPlugin(ScrollTrigger);

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
    excitedAbout: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
    // Sending data using EmailJS
    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formData,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then((response) => {
      alert('Thank you for registering! We will reach out soon.');
      console.log('Email successfully sent:', response.status, response.text);
    })
    .catch((error) => {
      alert('An error occurred. Please try again later.');
      console.error('Failed to send email:', error);
    });
  };

  useEffect(() => {
    // GSAP animation
    gsap.fromTo(
      '.contactus-card',
      { opacity: 1, x: 50 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.2,
        duration: 1.5,
        scrollTrigger: {
          trigger: '.contactus-card',
          start: 'top 80%',
          end: 'bottom top',
          scrub: true,
          once: true,
        }
      }
    );
  }, []);

  return (
    <div className="contactus-section" id='register'>
      <div className='contact-title-container'>
      <h2 className="contactus-title">Pre-Register Now!</h2>
      </div>
        
      <div className="contactus-container">
        <p className="contactus-description">
          Excited to experience Desk-AVR? Pre-register now to be one of the first to try our innovative interview platform!
        </p>

        <div className="contactus-content">
          <div className="contactus-card">
            <img src={vectorContact} alt="Pre-register" className="contactus-image" />
            <h3 className="contactus-card-title">Join the Future of Interviews</h3>
            <p className="contactus-card-description">
              Be part of the revolution in interview experiences with Desk-AVR. Pre-register today!
            </p>
          </div>

          <form className="contactus-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="contactus-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="contactus-input"
            />
            <input
              type="text"
              name="college"
              placeholder="Your College"
              value={formData.college}
              onChange={handleChange}
              required
              className="contactus-input"
            />
            <select
              name="excitedAbout"
              value={formData.excitedAbout}
              onChange={handleChange}
              required
              className="contactus-input"
            >
              <option value="" disabled>Select what excites you the most</option>
              <option value="Gamified Interview">Gamified Interview</option>
              <option value="Realistic Graphics">Realistic Graphics</option>
              <option value="Personalized Reports">Personalized Reports</option>
            </select>
            <button type="submit" className="contactus-btn">Pre-register</button>
          </form>
        </div>

        <div className="feedback-section">
          <p className="feedback-description">
            We value your feedback! <br />
            Please share your thoughts about our website and software by filling out the <a href="https://docs.google.com/forms/d/1fym6HnTQ9ztMZuG9fZSgaJEbsaAroe-aNM68eb0P5-c/edit?ts=6720fc64" className="feedback-link" target='_a'>feedback form</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
