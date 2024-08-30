import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import "./SigninPage.css"; // Import the CSS file

const auth = getAuth(app);

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const signinUser = async () => {
    try {
      const signin = await signInWithEmailAndPassword(auth, email, password)
      // .then(() => alert("Signed in Successfully"))
      if (signin) {
        alert("Signed in Successfully")
      }
      else if (!signin) {
        alert("Invalid user email/password")
        console.log("Error");
        
      }
    } catch (error) {
      alert("Invalid user email/password")
      console.log(error);
      
    }

      
  };

  return (
    <div className="signin-page">
      <div className="signin-container">
        <h1 className="signin-header">Existing user?</h1>
        <label className="signin-label">Enter your email:</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          required
          placeholder="Enter your registered email"
          className="signin-input"
        />
        <label className="signin-label">Enter your password:</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          required
          placeholder="Enter password"
          className="signin-input"
        />
        <button onClick={signinUser} className="signin-button">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SigninPage;
