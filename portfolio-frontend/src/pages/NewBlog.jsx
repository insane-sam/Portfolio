import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createBlog } from "../services/blogService";

function NewBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createBlog({ title, content });
    navigate("/blogs");
  };

  return (
    <div className="new-blog-page">
      <div className="new-blog-inner">
        <h2>Write a Blog</h2>

        <form className="blog-form" onSubmit={handleSubmit}>
          <input
            type="text" 
            placeholder="Blog title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <textarea
            rows="10"
            placeholder="Write your blog here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />

          <button className="primary-btn">Publish</button>
        </form>
      </div>
    </div>
  );
}

export default NewBlog;
