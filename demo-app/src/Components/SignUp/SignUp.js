import React, { useEffect, useState } from "react";
import "./SignUp.css";
export default function SignUp() {
  // Declare a new state variables
  const [fname, setFname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  //Handling onChange Event for full name
  const handleChangesFullName = event => {
    setFname(event.target.value);
  };

  useEffect(() => {
    console.log("useEffect event fired in FullName");
  }, [fname]);
  //Handling onChange Event for email
  const handleChangesEmail = event => {
    setEmail(event.target.value);
  };

  useEffect(() => {
    console.log("useEffect event fired in Email");
  }, [email]);

  //Handling onChange Event for password
  const handleChangesPassword = event => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    console.log("useEffect event fired in password");
  }, [password]);

  //Handling onClick Event for Register button
  const handleRegisterUser = () => {
    const userDetails = {
      fullname: fname,
      Email: email,
      password: password
    };
    console.log(userDetails);
  };

  return (
    <>
      <h2>Sign Up</h2>
      <div className="container">
        <label htmlFor="fname">Full Name</label>
        <input
          type="text"
          id="fname"
          name="fullname"
          placeholder="Your Full Name"
          onChange={handleChangesFullName}
        />
        <label htmlFor="email">E-Mail</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          onChange={handleChangesEmail}
        />
        <label htmlFor="password">Password</label>
        <input
          type="Password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={handleChangesPassword}
        />
        <button className="button" onClick={handleRegisterUser}>
          Register
        </button>
      </div>
    </>
  );
}
