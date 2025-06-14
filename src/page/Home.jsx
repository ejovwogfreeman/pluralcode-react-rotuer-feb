import React from "react";
import BlogCard from "../components/BlogCard";

const Home = ({ blogs }) => {
  return (
    <div className="container">
      <h1 className="mb">All Blogs</h1>
      {blogs.length <= 0 ? (
        "Loading blogs..."
      ) : (
        <>
          {blogs.map((blog) => (
            <BlogCard blog={blog} key={blog.id} />
          ))}
        </>
      )}
    </div>
  );
};

export default Home;
