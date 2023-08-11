import React from "react";
import "./Signup-Screen-3.css";
import logoImage from "./public/logo--radiant-amethyst-no-bg-1@2x.png";
import arrowLeftIcon from "./public/arrowleft-1.svg";
import arrowRightIcon from "./public/arrowright-1.svg";

function SignupScreen() {
  return (
    <div className="personal-information-light">
      <div className="personal-information-light-child"></div>
      <div className="personal-information-light-item"></div>
      <div className="looping-video-of-container">
        <p className="looping-video-of">Looping Video of Simulation</p>
        <p className="looping-video-of">from Blender</p>
      </div>
      <div className="personal-information">Personal Information</div>
      <div className="help-us-personalize-container">
        <p className="looping-video-of">
          Help us personalize your experience and enhance our services
        </p>
        <p className="looping-video-of">
          by providing some additional personal information
        </p>
      </div>
      <img className="logo-radiant-amethyst-no-bg" alt="" src={logoImage} />
      <div className="step-3-of">Step 3 of 4</div>
      <div className="frame-parent">
        <div className="age-parent">
          <div className="age">Age</div>
          <input
            className="frame-child"
            type="number"
            placeholder="Enter your age"
            id="age"
          />
        </div>
        <div className="age-parent">
          <div className="age">Gender</div>
          <select className="male-parent" required id="gender">
            <option value="" disabled selected>
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="not-answered">Do Not Want To Answer</option>
          </select>
        </div>
        <div className="age-parent">
          <div className="age">Location</div>
          <select className="male-parent">
            <option value="" disabled selected>
              Select Location
            </option>
            <option value="india">India</option>
          </select>
        </div>
        <div className="age-parent">
          <div className="age">Preferred Language</div>
          <input
            className="frame-child"
            type="text"
            maxLength="100"
            minLength="20"
            required
            id="lang"
          />
        </div>
        <div className="age-parent">
          <div className="purpose-of-using">Purpose of using Schwarz</div>
          <div className="frame">
            <input
              className="enter-a-purpose"
              type="text"
              maxLength="150"
              minLength="10"
              required
              id="purpose"
            />
          </div>
        </div>
      </div>
      <div className="frame-group">
        <a className="frame-container" href="link_to_previous_page">
          <div className="arrow-left-1-parent">
            <img className="arrow-left-1-icon" alt="" src={arrowLeftIcon} />
            <div className="previous-step">Previous Step</div>
          </div>
        </a>
        <a className="frame-container" href="link_to_next_page">
          <div className="next-step-parent">
            <div className="next-step">Next Step</div>
            <img className="arrow-right-1-icon" alt="" src={arrowRightIcon} />
          </div>
        </a>
      </div>
    </div>
  );
}

export default SignupScreen;
