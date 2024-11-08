import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import AboutUs from '../components/About';
import Register from '../components/Register';
import '../stylesheets/Homepage.css';
import Hero from '../components/Hero';

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {

  return (
    <>
      <Navbar />
      <Hero/>
      <AboutUs />
      <Register />
    </>
  );
};

export default HomePage;
