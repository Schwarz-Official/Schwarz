import React from "react";
import "./Login.css";
import { useState } from "react";
import { ReactComponent as LogoIcon } from "./Schwarz-logo.svg";
import { ReactComponent as GoogleIcon } from "./google.svg";
import { ReactComponent as TwitterIcon } from "./twitter.svg";
import { ReactComponent as AppleIcon } from "./apple.svg";

const socialButtons = [
  {
    icon: <GoogleIcon className="google-icon" />,
    text: "Continue with Google",
    className: "google-btn",
  },
  {
    icon: <AppleIcon className="apple-icon" />,
    text: "Continue with Apple",
    className: "apple-btn",
  },
  {
    icon: <TwitterIcon className="twitter-icon" />,
    text: "Continue with Twitter",
    className: "twitter-btn",
  },
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

    if (!newEmail.includes("@")) {
      setEmailError('Email should contain "@" symbol');
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    if (newPassword.length < 8 || (newPassword.match(/\d/g) || []).length < 2) {
      setPasswordError(
        "Password should be at least 8 characters long and contain at least 2 numbers"
      );
    } else {
      setPasswordError("");
    }
  };
  const handleNextStepClick = () => {
    // Set showErrors to true to display errors when the button is clicked
    setShowErrors(true);

    // Check for errors and show them if present
    if (!email.includes("@")) {
      setEmailError('Email should contain "@" symbol');
    }

    if (password.length < 8 || (password.match(/\d/g) || []).length < 2) {
      setPasswordError(
        "Password should be at least 8 characters long and contain at least 2 numbers"
      );
    }

    if (!email.includes("@")) {
      setEmailError('Email should contain "@" symbol');
    }

    if (password.length < 8 || (password.match(/\d/g) || []).length < 2) {
      setPasswordError(
        "Password should be at least 8 characters long and contain at least 2 numbers"
      );
    }

    if (firstName.trim() === "") {
      setFirstNameError("Please enter your first name");
    }

    if (lastName.trim() === "") {
      setLastNameError("Please enter your last name");
    }
  };

  return (
    <div className="container font-sans">
      <div className="log-form">
        <LogoIcon className="logoIcon" />
        <p className="bold-text">Welcome Back</p>
        <p className="fade-text">
          Reconnect with your Schwarz ID for seamless access.
        </p>

        <div className="btn-container">
          <button className="passive-btn">Sign in</button>
          <button className="active-btn">Sign up</button>
        </div>

        <div className="log-method">
          {socialButtons.map((button, index) => (
            <button key={index} className={button.className}>
              <span>{button.icon}</span> <span>{button.text}</span>
            </button>
          ))}

          {/* section of ---- or ---- */}
          <div className="or-section">
            <div className="hr-line"></div>
            <span>or</span>
            <div className="hr-line"></div>
          </div>
        </div>

        <div className="log-detail">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter your username or email"
            className={`email-inp ${
              emailError && showErrors ? "error-border" : ""
            }`}
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && showErrors && <p className="error">{emailError}</p>}

          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className={`password-inp ${
              passwordError && showErrors ? "error-border" : ""
            }`}
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && showErrors && (
            <p className="error">{passwordError}</p>
          )}
        </div>

        <a href="#" className="Sign-in-btn" onClick={handleNextStepClick}>
          Sign In
        </a>
      </div>
      <div className="bg-vid">
        {/* Looping Video of Simulation from Blender */}
        <video autoPlay loop muted>
          <source
            src="https://media.istockphoto.com/id/1251524036/video/morphing-holographic-liquid-blobs-abstract-3d-animation.mp4?s=mp4-640x640-is&k=20&c=c8oAYJoLD-_B_xjmfGGlss3j7PRi9i5KKpmaVbyy71A=.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};
export default LoginForm;
