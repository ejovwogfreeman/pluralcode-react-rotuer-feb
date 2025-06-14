import { useState, useEffect } from "react";
import { blogsData } from "./data";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
import Blog from "./page/Blog";
import Register from "./page/Register";
import Login from "./page/Login";
import NotFound from "./page/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Toastify from "./components/Toastify";
import ProtectedRoutes from "./components/ProtectedRoutes";
import AddBlog from "./page/AddBlog";

function App() {
  // const [blogs, setBlogs] = useState(blogsData);

  let API_URL = "http://localhost:5000/blogs";

  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const res = await fetch(`${API_URL}`);
    const data = await res.json();
    // console.log(data);
    setBlogs(data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const addBlog = async (blog) => {
    await fetch(`${API_URL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    });
  };

  const deleteBlog = async (id) => {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
  };

  const user = JSON.parse(sessionStorage.getItem("user"));

  return (
    <Router>
      <Toastify />
      <Navbar user={user} />
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home blogs={blogs} />} />
          <Route
            path="/blog/:id"
            element={<Blog blogs={blogs} deleteBlog={deleteBlog} />}
          />
          <Route
            path="/add-blog"
            element={<AddBlog addBlog={addBlog} user={user} />}
          />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound blogs={blogs} />} />
      </Routes>
    </Router>
  );
}

export default App;
