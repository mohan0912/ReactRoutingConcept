import React from "react";
import "./Header.css";
import { useHistory } from "react-router-dom";

export default function Header() {
  let history = useHistory();
  return (
    <>
      <div>
        <h1>MyWebApp</h1>
      </div>
      <div className="topnav">
        <a
          href="/"
          onClick={() => {
            history.push("/HomeScreen");
          }}
        >
          Home
        </a>
        <a
          href="SignUp"
          onClick={() => {
            history.push("/SignUp");
          }}
        >
          Sign Up
        </a>
      </div>
    </>
  );
}
