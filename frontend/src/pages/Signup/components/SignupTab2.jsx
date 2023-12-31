import InputField from "../../../components/InputField";
import React, {useState} from "react";
import SubmitButton from "../../../components/SubmitButton";

const SignupTab2 = ({onContinue}) => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [showErrors, setShowErrors] = useState(false);

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

    const handleConfirmPasswordChange = (event) => {
        const newConfirmPassword = event.target.value;
        setConfirmPassword(newConfirmPassword);

        if (newConfirmPassword.length < 8 || (newConfirmPassword.match(/\d/g) || []).length < 2) {
            setConfirmPasswordError(
                "Password should be at least 8 characters long and contain at least 2 numbers"
            );
        } else {
            setConfirmPasswordError("");
        }
    };

    const handleContinue2Click = () => {
        setShowErrors(true);

        if (password.length < 8 || (password.match(/\d/g) || []).length < 2) {
            setPasswordError(
                "Password should be at least 8 characters long and contain at least 2 numbers"
            );
        } else {

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

        onContinue();
    };

    return (
        <div>
            <div className="relative w-[24vw] max-md:w-[60vw] items-center justify-center">
                <InputField
                    label="First Name"
                    type="text"
                    placeholder="Enter your first name"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    error={firstNameError}
                    showError={showErrors}
                />

                <InputField
                    label="Last Name"
                    type="text"
                    placeholder="Enter your last name"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                    error={lastNameError}
                    showError={showErrors}
                />

                <InputField
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={handlePasswordChange}
                    error={passwordError}
                    showError={showErrors}
                />

                <InputField
                    label="Confirm Password"
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    error={confirmPasswordError}
                    showError={showErrors}
                />
            </div>
            <br/>
            <div className={"w-[24vw] max-md:w-[60vw] flex justify-end"}>
                <SubmitButton classname={"w-[12vw] max-md:w-[30vw]"} text="Next Step"
                              onClick={handleContinue2Click} isForwardStep={true}/>
            </div>
        </div>
    )
}

export default SignupTab2;