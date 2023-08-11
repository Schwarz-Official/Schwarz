import React from "react";
import "./Signup-Screen-1.css";
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

const Signup_Screen_1 = () => {
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
    <div className="container mx-auto flex">
      <div className="log-form">
        <LogoIcon className="logoIcon" />
        <p className="bold-text">Create an Account</p>
        <p className="fade-text">
          Create your Schwarz ID and unlock a world of possibilities.
        </p>

        <div className="btn-container grid grid-cols-2 gap-2">
          <button className="active-btn hover:bg-blue-100">Sign in</button>
          <button className="passive-btn hover:bg-blue-100">Sign up</button>
        </div>

        <div className="log-method flex flex-col gap-4">
          {socialButtons.map((button, index) => (
            <button key={index} className={button.className}>
              <span>{button.icon}</span> <span>{button.text}</span>
            </button>
          ))}

          {/* section of ---- or ---- */}
          <div className="or-section flex items-center gap-4 mt-8">
            <div className="hr-line border-t border-gray-300 flex-grow"></div>
            <span>or</span>
            <div className="hr-line border-t border-gray-300 flex-grow"></div>
          </div>
        </div>

        <div className="name flex flex-row items-start">
          <div className="text-group flex flex-col mr-4 mt-5">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter your first name"
              className={`${
                firstNameError && showErrors ? "error-border" : ""
              }`}
              value={firstName}
              onChange={(event) => {
                const newName = event.target.value;
                setFirstName(newName);

                if (newName.trim() === "") {
                  setFirstNameError("Please enter your first name");
                } else {
                  setFirstNameError("");
                }
              }}
            />
            {firstNameError && showErrors && (
              <p className="error">{firstNameError}</p>
            )}
          </div>

          <div className="text-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter your last name"
              className={`${lastNameError && showErrors ? "error-border" : ""}`}
              value={lastName}
              onChange={(event) => {
                const newName = event.target.value;
                setLastName(newName);

                if (newName.trim() === "") {
                  setLastNameError("Please enter your last name");
                } else {
                  setLastNameError("");
                }
              }}
            />
            {lastNameError && showErrors && (
              <p className="error">{lastNameError}</p>
            )}
          </div>
        </div>

        <div className="log-detail relative top-12">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
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
            <p className="error border border-red-500 bg-gray-100 p-2 mt-2 rounded">
              {passwordError}
            </p>
          )}
        </div>

        <a
          href="#"
          className="next bg-black text-white w-32 py-2 rounded-md text-center block mx-auto mt-8"
          onClick={handleNextStepClick}
        >
          Next Step
        </a>
      </div>
      <div className="bg-vid">
        {/* Looping Video of Simulation from Blender */}
        <h1>Looping Video of Simulation from Blender</h1>
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
export default Signup_Screen_1;
