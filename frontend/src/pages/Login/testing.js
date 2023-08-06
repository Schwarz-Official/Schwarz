import React, { useState } from "react";
import "./Login.css";
import { ReactComponent as LogoIcon } from "./schwarz.svg";
import { ReactComponent as GoogleIcon } from "./google.svg";
import { ReactComponent as TwitterIcon } from "./twitter.svg";
import { ReactComponent as AppleIcon } from "./apple.svg";

const socialButtons = [
  // ... (unchanged)
];

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showErrors, setShowErrors] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setEmailError(newEmail.includes("@") ? "" : 'Email should contain "@" symbol');
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    const numCount = (newPassword.match(/\d/g) || []).length;
    setPasswordError(
      newPassword.length >= 8 && numCount >= 2
        ? ""
        : "Password should be at least 8 characters long and contain at least 2 numbers"
    );
  };

  const handleNextStepClick = () => {
    // Validate fields and set errors
    setFirstNameError(firstName.trim() === "" ? "Please enter your first name" : "");
    setLastNameError(lastName.trim() === "" ? "Please enter your last name" : "");
    setEmailError(email.includes("@") ? "" : 'Email should contain "@" symbol');
    const numCount = (password.match(/\d/g) || []).length;
    setPasswordError(
      password.length >= 8 && numCount >= 2
        ? ""
        : "Password should be at least 8 characters long and contain at least 2 numbers"
    );

    // Set showErrors to true to display errors when the button is clicked
    setShowErrors(true);
  };

  return (
    <div className="container">
      {/* Main content */}
      {/* ... (unchanged) */}
      
      {/* Fields */}
      <div className="name">
        {/* First Name */}
        <div className="text-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            placeholder="Enter your first name"
            className={`${firstNameError && showErrors ? "error-border" : ""}`}
            value={firstName}
            onChange={(event) => {
              const newName = event.target.value;
              setFirstName(newName);
              setFirstNameError(newName.trim() === "" ? "Please enter your first name" : "");
            }}
          />
          {firstNameError && showErrors && <p className="error">{firstNameError}</p>}
        </div>

        {/* Last Name */}
        <div className="text-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            placeholder="Enter your first name"
            className={`${firstNameError && showErrors ? "error-border" : ""}`}
            value={firstName}
            onChange={(event) => {
              const newName = event.target.value;
              setFirstName(newName);
              setFirstNameError(newName.trim() === "" ? "Please enter your first name" : "");
            }}
          />
          {firstNameError && showErrors && <p className="error">{firstNameError}</p>}
        </div>
      </div>

      {/* Pop-up */}
      <div className="popup-container">
        {/* Add your pop-up content here */}
        {/* For example, a div with class "popup" */}
        <div className="popup">
          {/* ... (popup content) */}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
