import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import "./SignupPage.css"; // Import the CSS file

const auth = getAuth(app);

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => alert('Sign-up Successful'))
      .catch((err) => console.error(err));
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h1 className="signup-header">New user? Register here</h1>
        <label className="signup-label">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          required
          placeholder="Enter your email here"
          className="signup-input"
        />
        <label className="signup-label">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          required
          placeholder="Enter your password here"
          className="signup-input"
        />
        <button onClick={createUser} className="signup-button">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignupPage;
