// ... (imports and CSS imports)

const LoginForm = () => {
  // ... (state variables and event handlers)

  const handleNextStepClick = () => {
    setShowErrors(true); // Show errors when the button is clicked

    // Check for errors and set error messages
    if (!email.includes("@")) {
      setEmailError('Email should contain "@" symbol');
    } else {
      setEmailError("");
    }

    if (password.length < 8 || (password.match(/\d/g) || []).length < 2) {
      setPasswordError(
        "Password should be at least 8 characters long and contain at least 2 numbers"
      );
    } else {
      setPasswordError("");
    }

    if (firstName.trim() === "") {
      setFirstNameError("Please enter your first name");
    } else {
      setFirstNameError("");
    }

    if (lastName.trim() === "") {
      setLastNameError("Please enter your last name");
    } else {
      setLastNameError("");
    }
  };

  return (
    <div className="container">
      <div className="log-form">
        {/* ... (logo and introductory text) */}

        <div className="btn-container">
          <button className="passive-btn">Sign in</button>
          <button className="active-btn">Sign up</button>
        </div>

        {/* ... (social login buttons) */}
        {/* ... (divider section) */}

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

          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            placeholder="Enter your first name"
            className={`first-name-inp ${
              firstNameError && showErrors ? "error-border" : ""
            }`}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {firstNameError && showErrors && (
            <p className="error">{firstNameError}</p>
          )}

          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            placeholder="Enter your last name"
            className={`last-name-inp ${
              lastNameError && showErrors ? "error-border" : ""
            }`}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {lastNameError && showErrors && (
            <p className="error">{lastNameError}</p>
          )}
        </div>

        <button className="Sign-in-btn" onClick={handleNextStepClick}>
          Sign In
        </button>
      </div>
      <div className="bg-vid">
        {/* ... (background video) */}
      </div>
    </div>
  );
};

export default LoginForm;
