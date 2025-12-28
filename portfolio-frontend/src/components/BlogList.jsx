import { useEffect, useState } from "react";
import { getBlogs } from "../services/blogService";

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs().then(data => {
      setBlogs(data.slice(0, 2)); // ONLY 2 blogs on home
    });
  }, []);

  return (
    <div>
      {blogs.length === 0 && <p>No blogs yet.</p>}

      {blogs.map(blog => (
        <div key={blog.id} className="blog">
          <h3>{blog.title}</h3>
          <p>
            {blog.content.length > 160
              ? blog.content.substring(0, 160) + "..."
              : blog.content}
          </p>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
