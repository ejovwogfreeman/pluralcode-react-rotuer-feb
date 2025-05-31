import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container text-center">
      <h1 className="mt mb">404 - Page Not found</h1>
      <Link to="/" className="btn-secondary">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
