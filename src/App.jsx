import { useState } from "react";
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

function App() {
  const [blogs, setBlogs] = useState(blogsData);

  const user = sessionStorage.getItem("user");

  return (
    <Router>
      <Toastify />
      <Navbar user={user} />
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home blogs={blogs} />} />
          <Route path="/blog/:id" element={<Blog blogs={blogs} />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound blogs={blogs} />} />
      </Routes>
    </Router>
  );
}

export default App;
