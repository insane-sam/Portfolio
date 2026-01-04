import { useState, useEffect } from "react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">SG</div>

      <button 
        className="mobile-menu-toggle"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className={isMobileMenuOpen ? "hamburger open" : "hamburger"}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      <ul className={`nav-links ${isMobileMenuOpen ? "mobile-open" : ""}`}>
        <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
        <li><a href="#about" onClick={handleLinkClick}>About</a></li>
        <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
        <li><a href="#experience" onClick={handleLinkClick}>Experience</a></li>
        <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
        <li><a href="#blogs" onClick={handleLinkClick}>Blogs</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
