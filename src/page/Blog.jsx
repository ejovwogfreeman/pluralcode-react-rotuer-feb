import React from "react";
import { useParams } from "react-router-dom";
import BlogCard from "../components/BlogCard";

const Blog = ({ blogs }) => {
  const params = useParams();

  return (
    <div className="container">
      {blogs.map(
        (blog) =>
          blog.id === params.id && (
            <BlogCard blog={blog} key={blog.id} paramsId={params.id} />
          )
      )}
    </div>
  );
};

export default Blog;
