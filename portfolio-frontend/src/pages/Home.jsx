import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBlogs } from "../services/blogService";
import { splitToPoints } from "../utils/blogUtil";



function Home() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const [blogs, setBlogs] = useState([]);
const navigate = useNavigate();

useEffect(() => {
  getBlogs().then(data => setBlogs(data.slice(0,3))); // ONLY 3 BLOGS
}, []);

const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
  if (!blogs || blogs.length <= 2) return;

  const interval = setInterval(() => {
    setCurrentIndex((prev) =>
      (prev + 2) % blogs.length
    );
  }, 6000); // rotate every 4 seconds

  return () => clearInterval(interval);
}, [blogs]);


  return (
    <>
      <Navbar />
      <Hero />

     <Section id="about" >
        <div className="about-wrapper">
  <div className="about-content">

    <h1 className="section-title">About me</h1>
    <p>
      I’m a Java Backend Developer with over 2 years of experience building and
      maintaining backend systems using Java, Spring Boot, JPA/Hibernate, and
      PostgreSQL. I currently work in the banking domain, contributing to
      production-grade systems that handle real-world credit card application
      decision workflows.
    </p>

    <p>
      My day-to-day work involves designing and implementing RESTful APIs,
      writing clean and maintainable business logic, and ensuring reliable data
      flow between services and databases. I regularly work on production defect
      resolution, feature enhancements, and performance-related fixes, which
      has given me a strong understanding of exception handling, transactions,
      and data consistency.
    </p>

    <p>
      Alongside core backend development, I have exposure to microservices
      architecture, asynchronous communication using Kafka, Docker for
      containerization, and basic AWS (EC2) concepts. I actively collaborate
      with senior engineers and DevOps teams to understand deployment flows and
      production readiness.
    </p>

    <p>
      Outside of work, I enjoy going to the gym, watching anime, and playing
      table tennis. I like staying physically active and mentally curious —
      both help me stay focused and consistent in my work.
    </p>
</div>
  </div>
</Section>

<div id="skills" className="section">
  <div className="section-inner">

    <h2>Skills & Technologies</h2>

    <div className="skills-wrapper">
      <div className="skills-grid">

        <div className="skill-card"><span className="skill-icon">☕</span><h3>Java</h3></div>
        <div className="skill-card"><span className="skill-icon">🌱</span><h3>Spring Boot</h3></div>
        <div className="skill-card"><span className="skill-icon">🔐</span><h3>Spring Security</h3></div>
        <div className="skill-card"><span className="skill-icon">☁️</span><h3>Spring Cloud</h3></div>
        <div className="skill-card"><span className="skill-icon">🚪</span><h3>API Gateway</h3></div>

        <div className="skill-card"><span className="skill-icon">🧩</span><h3>Hibernate / JPA</h3></div>
        <div className="skill-card"><span className="skill-icon">🐘</span><h3>PostgreSQL</h3></div>
        <div className="skill-card"><span className="skill-icon">🗄️</span><h3>SQL / MySQL</h3></div>
        <div className="skill-card"><span className="skill-icon">🍃</span><h3>MongoDB</h3></div>
        <div className="skill-card"><span className="skill-icon">⚡</span><h3>Redis</h3></div>

        <div className="skill-card"><span className="skill-icon">🔗</span><h3>REST APIs</h3></div>
        <div className="skill-card"><span className="skill-icon">📦</span><h3>Kafka</h3></div>
        <div className="skill-card"><span className="skill-icon">🐳</span><h3>Docker</h3></div>
        <div className="skill-card"><span className="skill-icon">☁️</span><h3>AWS</h3></div>
        <div className="skill-card"><span className="skill-icon">🔄</span><h3>CI/CD Pipelines</h3></div>

        <div className="skill-card"><span className="skill-icon">🔀</span><h3>Microservices</h3></div>
        <div className="skill-card"><span className="skill-icon">🧠</span><h3>System Design</h3></div>
        <div className="skill-card"><span className="skill-icon">📐</span><h3>LLD / HLD</h3></div>
        <div className="skill-card"><span className="skill-icon">🧩</span><h3>SDLC</h3></div>

        <div className="skill-card"><span className="skill-icon">🧠</span><h3>Data Structures & Algorithms</h3></div>
        <div className="skill-card"><span className="skill-icon">🧱</span><h3>OOP Principles</h3></div>
        <div className="skill-card"><span className="skill-icon">⚛️</span><h3>React.js</h3></div>
        <div className="skill-card"><span className="skill-icon">🟨</span><h3>JavaScript</h3></div>
        <div className="skill-card"><span className="skill-icon">🐙</span><h3>GitHub</h3></div>

      </div>
    </div>

  </div>
</div>


<div id="experience" className="section">
  <div className="section-inner">

    <h2>Work Experience</h2>

    <div className="experience-card">

      <div className="experience-header">
        <h3>Cognizant Technology Solutions</h3>
        <span className="experience-role">Java Backend Developer</span>
        <span className="experience-meta">
          Bangalore, India · Dec 2023 – Present
        </span>
      </div>

      <ul className="experience-points">
        <li>
          Worked on enhancing and maintaining Spring Boot–based RESTful APIs
          for internal order and decision management systems used in
          production environments.
        </li>
        <li>
          Gained hands-on exposure to microservices architecture by assisting
          in the development, testing, and integration of modular backend services.
        </li>
        <li>
          Designed and optimized database interactions using PostgreSQL and
          Spring Data JPA, focusing on query performance and data consistency.
        </li>
        <li>
          Collaborated with team members to integrate Kafka for asynchronous,
          message-driven communication and Redis for caching and performance optimization.
        </li>
        <li>
          Assisted in Dockerizing backend services and deploying them on AWS
          (EC2, RDS), and contributed to CI/CD pipeline execution under senior
          developer guidance.
        </li>
        <li>
          Followed Agile development practices, participated in code reviews,
          and contributed to improving logging and monitoring using SLF4J
          and AWS CloudWatch.
        </li>
      </ul>

    </div>

  </div>
</div>


{/* PROJECT */}
      <div id="projects" className="section">
  <div className="section-inner">

    <h2>Projects</h2>

    <div className="projects-grid">

      {/* PROJECT 1 */}
      <div className="project-card">
        <h3>Smart Order Processing Microservice</h3>

        <p className="project-tech">
          Java · Spring Boot · Microservices · Kafka · Redis · Docker · AWS · PostgreSQL
        </p>

        <ul className="project-points">
          <li>
            Built a scalable microservice-based backend for smart order creation,
            validation, payment processing, and inventory workflows.
          </li>
          <li>
            Implemented asynchronous event-driven communication using Kafka/SQS
            and optimized performance using Redis caching.
          </li>
          <li>
            Ensured fault tolerance and resilience using Resilience4j to handle
            downstream service failures gracefully.
          </li>
          <li>
            Deployed the application on AWS using Docker containers and automated
            builds and deployments via CI/CD pipelines.
          </li>
        </ul>
      </div>

      {/* PROJECT 2 */}
      <div className="project-card">
        <h3>Book Management System</h3>

        <p className="project-tech">
          Spring Boot · Spring Data JPA · PostgreSQL · REST APIs · JWT
        </p>

        <ul className="project-points">
          <li>
            Developed a full-stack Book Management System supporting dynamic book
            search, CRUD operations, and secure user authentication using JWT.
          </li>
          <li>
            Implemented pagination, sorting, and filtering with optimized database
            queries to ensure efficient data retrieval and scalability.
          </li>
          <li>
            Integrated PostgreSQL with Spring Data JPA, ensuring reliable
            transactions and seamless API communication tested via Postman.
          </li>
          <li>
            Designed clean RESTful APIs with proper validation and exception
            handling to improve maintainability and robustness.
          </li>
        </ul>
      </div>

      {/* PROJECT 3 */}
      <div className="project-card">
        <h3>Fitness Web Application</h3>

        <p className="project-tech">
          Node.js · Express · React.js · MySQL · REST APIs
        </p>

        <ul className="project-points">
          <li>
            Developed a responsive full-stack fitness web application with a clean
            and intuitive user interface for managing fitness-related data.
          </li>
          <li>
            Implemented features such as BMI calculation, calorie tracking, and
            fitness data management to provide real-time health insights.
          </li>
          <li>
            Designed and integrated RESTful APIs to handle user data, fitness
            records, and calculations with proper validation and secure storage.
          </li>
        </ul>
      </div>

    </div>

  </div>
</div>


<div id="blogs" className="section">
  <div className="section-inner">

    <h2>Blogs written by me</h2>

   {Array.isArray(blogs) &&
  blogs
    .slice(currentIndex, currentIndex + 3)
    .map((blog) => (
      <div
        key={blog.id}
        className="blog-card clickable"
        onClick={() => setSelectedBlog(blog)}
      >
        <h3>{blog.title}</h3>

        <p className="read-more-text">
          Click here to read full blog →
        </p>
      </div>
    ))}

    
    {selectedBlog && (
  <div className="blog-modal-overlay" onClick={() => setSelectedBlog(null)}>
    <div
      className="blog-modal"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="blog-modal-close"
        onClick={() => setSelectedBlog(null)}
      >
        ✕
      </button>

      <h2>{selectedBlog.title}</h2>

      <ul className="blog-points full">
        {splitToPoints(selectedBlog.content).map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  </div>
)}


    <div className="view-all-blogs">
      <button
        className="primary-btn"
        onClick={() => navigate("/blogs")}
      >
        View all blogs
      </button>
    </div>

  </div>
</div>


      <Footer />
    </>
  );
}

export default Home;
