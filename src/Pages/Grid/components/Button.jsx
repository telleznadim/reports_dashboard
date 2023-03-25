import React from "react";
import { Link } from "react-router-dom";
import "../styles/Button.css";

const Button = ({ name, url }) => {
  const isExternal = url.startsWith("http") || url.startsWith("www");

  if (isExternal) {
    const target = url.startsWith("http") ? "_blank" : "_self";
    return (
      <div className="col">
        <a
          href={url}
          target={target}
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          {name}
        </a>
      </div>
    );
  } else {
    return (
      <div className="col">
        <Link to={url} className="btn btn-primary">
          {name}
        </Link>
      </div>
    );
  }
};

export default Button;
