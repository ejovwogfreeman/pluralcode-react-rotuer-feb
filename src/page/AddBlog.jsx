import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Form.css";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(advancedFormat);

const AddBlog = ({ user, addBlog }) => {
  const [blog, setBlog] = useState({
    id: uuidv4(),
    title: "",
    description: "",
    author: user.email.split("@")[0],
    datePosted: dayjs().format("Do MMM YYYY"),
  });

  const { title, description } = blog;

  const handleChage = (e) => {
    setBlog({
      ...blog,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) {
      toast.error("Please fill all fields");
    } else {
      setBlog({
        ...blog,
        title,
        description,
      });
      addBlog(blog);
      toast.success("Blog added successfully");
      setTimeout(() => {
        window.location.replace("/");
      }, 3000);
    }
  };

  return (
    <div className="container">
      <form className="mt" onSubmit={handleSubmit}>
        <h2 className="mb">ADD BLOG</h2>
        <div>
          <label htmlFor="">Title</label>
          <input
            type="text"
            placeholder="enter blog title"
            onChange={handleChage}
            name="title"
          />
        </div>
        <div>
          <label htmlFor="">Content</label>
          <textarea
            placeholder="enter blog content"
            onChange={handleChage}
            name="description"
          />
        </div>
        <div>
          <button
            className="btn-primary"
            style={{ marginBottom: "10px", padding: "10px" }}
          >
            ADD BLOG
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
