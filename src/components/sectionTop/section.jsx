import React, { useEffect } from 'react';
import './style.css'; 
import constants_set from '../../constants/constants-page-one';


const Section = () => {
  useEffect(() => {
    const buttonReadyAnimation = document.getElementById('button_ready_on');

    const particles = document.querySelectorAll('.particle');

    


    setTimeout(() => {
      buttonReadyAnimation.classList.add('button_ready_on');
    }, 10000);

    
    function getRandom(min, max) {
      return Math.random() * (max - min) + min;
    }

   
    particles.forEach(particle => {
      particle.x = getRandom(0, window.innerWidth - 10);
      particle.y = getRandom(0, window.innerHeight - 10);
      particle.dx = getRandom(-0.5, 0.5);
      particle.dy = getRandom(-0.5, 0.5);
      particle.style.left = `${particle.x}px`;
      particle.style.top = `${particle.y}px`;
    });

    function moveParticles() {
      particles.forEach(particle => {
        particle.x += particle.dx;
        particle.y += particle.dy;


        if (particle.x + 10 > window.innerWidth || particle.x < 0) {
          particle.dx = -particle.dx;
        }
        if (particle.y + 10 > window.innerHeight || particle.y < 0) {
          particle.dy = -particle.dy;
        }

        particle.style.left = `${particle.x}px`;
        particle.style.top = `${particle.y}px`;
      });

      requestAnimationFrame(moveParticles);
    }

    moveParticles(); 
  
  }, []);

  return (
    <section className="hero" role="content_bottom_header" aria-label="Hero section">
      <div className="hero-content">
        <div className="avatar-container">
          <div className="avatar"></div>
        </div>
        <div className="title-wrapper">
          <article>
            <h1 id="main-heading" tabIndex="0">{constants_set.name_dev}</h1>
          </article>
        </div>
        <div className="intro-text">
          <span className="intro-message" aria-label="Welcome message">
          {constants_set.main_description_dev}
          </span>
        </div>
        <div className="button-ready-container">
          <a href="" style={{ textDecoration: 'none' }}>
            <button className="button_ready" id="button_ready_on" aria-label="View my projects">Yes</button>
          </a>
        </div>
        <div className="particles" aria-hidden="true">
          {Array.from({ length: 15 }).map((_, index) => (
            <div className="particle" key={index}></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;