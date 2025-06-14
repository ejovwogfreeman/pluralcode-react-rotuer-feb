import "../css/Navbar.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FaBlog } from "react-icons/fa";

const Navbar = ({ user }) => {
  const logout = () => {
    sessionStorage.removeItem("user");
    toast.success("You Logged Out");
    setTimeout(() => {
      window.location.replace("/");
    }, 3000);
  };
  return (
    <nav className="container">
      <Link to="/">
        <h1
          style={{ display: "flex", alignItems: "center", marginLeft: "-10px" }}
        >
          <FaBlog />
          <span style={{ marginLeft: "5px" }}>DojoBlog</span>
        </h1>
      </Link>
      <ul>
        {!user ? (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login" className="btn-primary">
              Login
            </Link>
          </>
        ) : (
          <>
            <Link to="/">Home</Link>
            <Link to="/add-blog">Add Blog</Link>
            <button
              onClick={logout}
              className="btn-primary"
              style={{ padding: "10px" }}
            >
              Logout
            </button>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
