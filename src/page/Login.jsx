import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Form.css";
import { toast } from "react-toastify";

const Login = () => {
  const [user, setUser] = useState({
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

    let userFromSession = JSON.parse(sessionStorage.getItem("user"));

    if (
      user?.email === userFromSession?.email &&
      user?.password === userFromSession?.password
    ) {
      toast.success("Login successful");
      setTimeout(() => {
        window.location.replace("/");
      }, 3000);
    } else {
      toast.error("Wrong email or password");
    }
  };

  return (
    <div className="container">
      <form className="mt" onSubmit={handleSubmit}>
        <h2 className="mb">REGISTER</h2>
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
            LOGIN
          </button>
          <p>
            New Here? <Link to="/register">Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
