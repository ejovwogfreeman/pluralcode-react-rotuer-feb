import React from "react";
import { Link } from "react-router-dom";
import "../css/BlogCard.css";
import { toast } from "react-toastify";

const BlogCard = ({ blog, paramsId, deleteBlog }) => {
  const handleDelete = (id) => {
    deleteBlog(id);
    toast.success("Blog deleted successfully");
    setTimeout(() => {
      window.location.replace("/");
    }, 3000);
  };
  return (
    <div className="card">
      <div className="card-header">
        <h2>{blog.title}</h2>
        <strong>@{blog.author}</strong>
      </div>
      <p>{paramsId ? blog.description : blog.description.slice(0, 200)}...</p>
      <div className="card-line"></div>
      <div className="card-footer">
        {paramsId ? (
          <div>
            <Link to="/" className="btn-primary">
              Go Back
            </Link>
            <button
              onClick={() => handleDelete(blog.id)}
              className="btn-primary"
              style={{ marginLeft: "10px", padding: "7px" }}
            >
              Delete
            </button>
          </div>
        ) : (
          <Link to={`/blog/${blog.id}`} className="btn-primary">
            READ MORE
          </Link>
        )}
        <span>{blog.datePosted}</span>
      </div>
    </div>
  );
};

export default BlogCard;
