import profileImg from "../assets/Myimage.jpeg";

function Header({ profile }) {
  if (!profile) return null;

  return (
    <header className="hero">
      <div className="hero-content">
        <img src={profileImg} alt="Profile" className="profile-img" />

        <h1>{profile.name}</h1>
        <h2>{profile.role}</h2>

        <p className="hero-text">
          Building scalable backend systems using Spring Boot & PostgreSQL.
        </p>

       <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="primary-btn"
>
  View Resume
</a>

      </div>
    </header>
  );
}

export default Header;
