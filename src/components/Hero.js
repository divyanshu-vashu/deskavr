import React, { useEffect } from 'react';
import '../stylesheets/Hero.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import trailer from '../assets/videos/trailer.mp4';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    gsap.fromTo(
      '.hero-text h1',
      { y: '300%', opacity: 0 },
      {
        y: '0',
        opacity: 1,
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom center',
          scrub: 1,
        },
        ease: 'power2.out',
      }
    );
  }, []);

  return (
    <div className="hero-section">
      {/* <div className="hero-content">
        <div className="hero-text">
          <h1 className="title">Welcome To DeskAVR</h1>
        </div>
      </div> */}
      <div className="hero-video">
        <video
          src={trailer}
          muted
          playsInline
          autoPlay={true}
          loop={true}
          preload="auto"
        />
      </div>
    </div>
  );
};

export default Hero;
