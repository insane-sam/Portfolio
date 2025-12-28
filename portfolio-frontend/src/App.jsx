import Home from "./pages/Home";
import BlogsPage from "./pages/Blogs";
import NewBlog from "./pages/NewBlog";
import { Routes, Route, Navigate } from "react-router-dom";
import { isAdmin } from "./utils/admin";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route
  path="/blogs/new"
  element={isAdmin() ? <NewBlog /> : <Navigate to="/" />}
/>

    </Routes>
  );
}

export default App;
