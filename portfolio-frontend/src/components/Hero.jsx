import profileImg from "../assets/Myimage.png";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">

        {/* LEFT — TEXT */}
        <div className="hero-text">
          <div className="hero-text-inner">
            <p className="hero-greeting">Hi there!</p>

           <h1 className="hero-title">
  <span className="hero-name">I'm Samarth Gupta,</span>
  <span className="hero-role">
    a Java Backend Developer.
  </span>
</h1>

<p className="hero-subtext">
  Backend developer with over 2 years of professional experience designing,
  developing, and maintaining robust backend applications in production
  environments.
</p>
            <button
              className="hero-btn"
              onClick={() => window.open("/resume.pdf", "_blank")}
            >
              View Resume
            </button>
          </div>
        </div>

        {/* RIGHT — IMAGE */}
        <div className="hero-image-wrapper">
          <img src={profileImg} alt="Samarth Gupta" />
        </div>

      </div>
    </section>
  );
}

export default Hero;
