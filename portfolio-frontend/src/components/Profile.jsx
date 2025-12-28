function Profile({ profile }) {
  if (!profile) return null;

  return (
    <section className="card">
      <h2>Hi there, Thanks for reading about me</h2>
      <p>{profile.about}</p>

      <div className="links">
        <a href={profile.linkedin} target="_blank">LinkedIn</a>
        <a href={profile.github} target="_blank">GitHub</a>
      </div>
    </section>
  );
}

export default Profile;
