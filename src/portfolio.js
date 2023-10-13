import React, { useEffect, useState } from 'react';
import './App.css';
function Ar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);
  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      setMenuOpen(false);
      if (window.scrollY > 0) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (e, target) => {
    e.preventDefault();
    const targetElement = document.querySelector(target);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="App">
      <header className={`user ${isMenuOpen ? 'toggle' : ''}`}>
        <div className="user">
          <h3 className="name">Arjun</h3>
        </div>
        <nav className="navbar">
          <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#education">EDUCATION</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>
      </header>

      <div id="menu" className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} onClick={handleMenuClick}></div>

      <section className="home" id="home">
        <h3>Hi Everyone</h3>
        <h1>I'M<span>   Arjun</span></h1>
      </section>
      {showTopButton && (
        <a href="#home" className="top" onClick={(e) => handleLinkClick(e, '#home')}>
        </a>
      )}
    </div>
  );
}

export default Ar;