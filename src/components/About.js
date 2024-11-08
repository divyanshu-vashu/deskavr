import React, { useEffect } from 'react';
import '../stylesheets/About.css';
import vectorImage1 from '../assets/logos/goal.png';
import vectorImage2 from '../assets/logos/console.png';
import vectorImage3 from '../assets/logos/result.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  useEffect(() => {


    // Description animation
    gsap.fromTo(
      '.aboutus-description',
      { opacity: 1, y: 0 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.aboutus-description',
          start: 'top 80%',
          end: 'bottom -=200',  // Finish 100px before the end of the section
          scrub: true,
        }
      }
    );

    // Create a timeline for the card animations
    const cardTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.aboutus-content',
        start: 'top 100%',
        end: 'bottom +=450',  // Finish 100px before the end of the section
        scrub: true,
        stagger:2,
      }
    });

    // Sequence the cards to animate one by one with a delay
    cardTimeline.fromTo(
      '.aboutus-card:nth-child(1)',
      { opacity: 0, x: -200 },
      { opacity: 1, x: 0, duration: 2 }
    )
    .fromTo(
      '.aboutus-card:nth-child(2)',
      { opacity: 0, x: 200 },
      { opacity: 1, x: 0, duration: 2 },
      '+=0.3' // Start this animation slightly before the previous one finishes
    )
    .fromTo(
      '.aboutus-card:nth-child(3)',
      { opacity: 0, x: -200 },
      { opacity: 1, x: 0, duration: 2 },
      '+=0.3' // Start this animation slightly before the previous one finishes
    );
  }, []);

  return (
    <div className="aboutus-section" id='about'>
      <div className="aboutus-container">
        <div className='about-title-container'>
        <h2 className="aboutus-title">ABOUT DeskAVR</h2>
        </div>
        <p className="aboutus-description">
          Desk-AVR is a unique online interview portal, designed to revolutionize traditional interviews.
          Powered by Unreal Engine, our platform delivers a gamified and realistic interview experience, immersing candidates in an interactive, virtual environment. We empower businesses with customizable interview setups and provide candidates with tools to practice through sample interviews, preparing them for real-world scenarios.
        </p>

        <div className="aboutus-content">
          <div className="aboutus-card">
            <img src={vectorImage1} alt="Our Mission" className="aboutus-image" />
            <h3 className="aboutus-card-title">Onboard</h3>
            <p className="aboutus-card-description">
              Give a try and empower yourself through an innovative and personalized interview experience.
            </p>
          </div>

          <div className="aboutus-card">
            <img src={vectorImage2} alt="Our Vision" className="aboutus-image" />
            <h3 className="aboutus-card-title">Experience</h3>
            <p className="aboutus-card-description">
              Get an immersive, realistic, and gamified interview experience, like never before.
            </p>
          </div>

          <div className="aboutus-card">
            <img src={vectorImage3} alt="Improve" className="aboutus-image" />
            <h3 className="aboutus-card-title">Improve</h3>
            <p className="aboutus-card-description">
              Get personalized interview reports and recommended areas of improvement to level up.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
