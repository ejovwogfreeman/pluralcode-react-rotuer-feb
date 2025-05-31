import React from "react";
import { Link } from "react-router-dom";
import "../css/BlogCard.css";

const BlogCard = ({ blog, paramsId }) => {
  return (
    <div className="card">
      <h2>{blog.title}</h2>
      <p>{paramsId ? blog.description : blog.description.slice(0, 200)}...</p>
      <div className="card-line"></div>
      <div className="card-footer">
        {paramsId ? (
          <Link to="/" className="btn-primary">
            Go Back
          </Link>
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
