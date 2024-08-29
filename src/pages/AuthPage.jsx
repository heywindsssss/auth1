import React from "react";
import SigninPage from "./Signin";
import SignupPage from "./Signup";
import "./AuthPage.css"; // Import the combined CSS file

const AuthPage = () => {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-form">
          <SigninPage />
        </div>
        <div className="auth-form">
          <SignupPage />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
