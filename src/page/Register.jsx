import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Form.css";
import { toast } from "react-toastify";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChage = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(user));
    toast.success("Registration Successful");
    navigate("/login");
  };

  return (
    <div className="container">
      <form className="mt" onSubmit={handleSubmit}>
        <h2 className="mb">REGISTER</h2>
        <div>
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="e.g John Doe"
            onChange={handleChage}
            name="name"
            required
          />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="e.g john@gmail.com"
            onChange={handleChage}
            name="email"
            required
          />
        </div>
        <div>
          <label htmlFor="">password</label>
          <input
            type="text"
            placeholder="e.g 12345"
            onChange={handleChage}
            name="password"
            required
          />
        </div>
        <div>
          <button
            className="btn-primary"
            style={{ marginBottom: "10px", padding: "10px" }}
          >
            REGISTER
          </button>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
