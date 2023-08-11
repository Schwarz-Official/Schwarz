import React from "react";
import "./Signup-Screen-4.css";

function SignupScreen() {
  return (
    <div className="work-information-light">
      <div className="work-information-light-child"></div>
      <div className="work-information-light-item"></div>
      <div className="looping-video-of-container">
        <p className="looping-video-of">Looping Video of Simulation</p>
        <p className="looping-video-of">from Blender</p>
      </div>
      <div className="work-information">Work Information</div>
      <div className="help-us-personalize-container">
        <p className="looping-video-of">
          Help us personalize your experience and enhance our services by
        </p>
        <p className="looping-video-of">
          providing some additional information
        </p>
      </div>
      <img
        className="logo-radiant-amethyst-no-bg"
        alt=""
        src={require("./public/logo--radiant-amethyst-no-bg-1@2x.png")}
      />

      <div className="step-4-of">Step 4 of 4</div>
      <div className="create-account-wrapper">
        <a href="your-new-page-url" className="create-account">
          Create Account
        </a>
      </div>
      <div className="job-titleposition-parent">
        <div className="job-titleposition">Job Title/Position</div>
        <input
          className="frame-child"
          type="text"
          placeholder="Enter your position"
          maxLength="30"
          minLength="1"
          required
          id="position"
        />
      </div>
      <div className="companyorganization-parent">
        <div className="job-titleposition">Company/Organization</div>
        <input
          className="frame-child"
          type="text"
          placeholder="Enter your organization"
          maxLength="30"
          minLength="1"
          required
          id="organization"
        />
      </div>
      <div className="industry-parent">
        <div className="job-titleposition">Industry</div>
        <select className="select-your-industry-parent" required>
          <option value="Select">Select your industry</option>
          <option value="finance">Finance</option>
          <option value="healthcare">Healthcare</option>
          <option value="education">Education</option>
          <option value="retail">Retail</option>
          <option value="manufacturing">Manufacturing</option>
          <option value="media">Media and entertainment</option>
        </select>
      </div>
      <div className="years-of-experience-parent">
        <div className="job-titleposition">Years of Experience</div>
        <input
          className="frame-child"
          type="number"
          placeholder="Enter your experience"
          min="0"
          max="100"
          step="2"
          required
          id="user-experience"
        />
      </div>
    </div>
  );
}

export default SignupScreen;
