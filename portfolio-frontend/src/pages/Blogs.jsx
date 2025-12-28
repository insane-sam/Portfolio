import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBlogs } from "../services/blogService";
import { splitToPoints } from "../utils/blogUtil";
import { isAdmin } from "../utils/admin";

function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    getBlogs()
      .then(data => setBlogs(data || []))
      .catch(() => setBlogs([]));
  }, []);

  return (
    <div className="blog-page">
      <div className="blog-page-inner">

        {/* HEADER */}
        <div className="blogs-header">
          <h2>Blogs</h2>
        {isAdmin() && (
    <Link to="/blogs/new" className="primary-btn write-blog-btn">
      Write Blog
    </Link>
  )}
        </div>

        {/* BLOG LIST */}
        <div className="blogs-grid">
          {Array.isArray(blogs) &&
            blogs.map((blog) => (
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
        </div>

        {/* BLOG MODAL */}
        {selectedBlog && (
          <div
            className="blog-modal-overlay"
            onClick={() => setSelectedBlog(null)}
          >
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

      </div>
    </div>
  );
}

export default BlogsPage;
