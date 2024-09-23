import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './hero.css';
import { FaAngleDoubleDown, FaAngleDoubleRight } from 'react-icons/fa';

const media = [
  './f7.mp4', // First Video
  './f8.mp4', // Second Video
  './f1.jpeg', // Image
  './f2.jpeg', // Image
  './f3.jpeg', // Image
  './f4.jpeg', // Image
  './f5.jpeg', // Image
  './f6.jpeg', // Image
];

const Hero = () => {
  const [currentMedia, setCurrentMedia] = useState(0);
  const heroText = useRef(null);
  const heroButtons = useRef(null);
  const sliderRef = useRef(null);
  const heroParagraph = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroText.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }
    );
    gsap.fromTo(
      heroButtons.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: 'power3.out' }
    );
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      heroText.current,
      { opacity: 0, y: -50, rotationY: 90 },
      { opacity: 1, y: 0, rotationY: 0, duration: 1.5, ease: 'power3.out' }
    )
      .fromTo(
        heroParagraph.current,
        { opacity: 0, y: 50, rotationY: -90 },
        { opacity: 1, y: 0, rotationY: 0, duration: 1.5, ease: 'power3.out' },
        "-=1"
      )
      .fromTo(
        heroButtons.current,
        { opacity: 0, scale: 0.5, rotationY: 90 },
        { opacity: 1, scale: 1, rotationY: 0, duration: 1.2, ease: 'power3.out' },
        "-=1"
      );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMedia((prev) => (prev + 1) % media.length);
      gsap.fromTo(
        sliderRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: 'power3.out' }
      );
    }, 5000); // Change media every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const isVideo = media[currentMedia].endsWith('.mp4');

  return (
    <div className="hero-container">
      <div className="hero-overlay"></div>
      <div
        className="hero-background"
        ref={sliderRef}
        style={{ zIndex: -1 }}
      >
        {isVideo ? (
          <video autoPlay loop muted className="hero-video" key={currentMedia}>
            <source src={media[currentMedia]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div
            style={{ backgroundImage: `url(${media[currentMedia]})` }}
            className="hero-image"
          ></div>
        )}
      </div>
      <div className="hero-content">
        <h1 ref={heroText} className='main-h1'>Revolutionizing Fish Farming</h1>
        <p ref={heroParagraph}>Sustainable, scalable, and profitable fish farming solutions.</p>
        <div className="hero-buttons" ref={heroButtons}>
          <button className="hero-btn" style={{display: "flex", justifyContent:"center", alignItems: "center"}}>Learn More{<FaAngleDoubleDown />}</button>
          <button className="hero-btn-1" style={{display: "flex", justifyContent:"center", alignItems: "center"}}>Contact Us{<FaAngleDoubleRight />}</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
