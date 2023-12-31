import {socialButtons} from "../../../components/SocialButton";
import InputField from "../../../components/InputField";
import React, {useState} from "react";
import SubmitButton from "../../../components/SubmitButton";

const SignupTab1 = ({onContinue}) => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [showErrors, setShowErrors] = useState(false);
    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);

        if (!newEmail.includes("@")) {
            setEmailError("Email should contain the '@' symbol");
        } else {
            setEmailError("");
        }
    };

    const handleContinue1Click = () => {
        setShowErrors(true);

        // Check for errors and show them if present
        if (!email.includes("@")) {
            setEmailError("Email should contain the '@' symbol");
        } else {
            onContinue();
        }
    };

    return (
        <div>
            <div
                className="relative align-center w-[24vw] max-md:w-[60vw] bg-[#E9E9E9] mb-[32px] h-14 grid grid-cols-2 gap-2 p-1 rounded-md">
                <button
                    className="text-[#636363] hover:text-black hover:shadow-inner-2xl font-bold rounded-lg hover:bg-white transition-all ease-in-out duration-250 outline-none">Sign
                    in
                </button>
                <button className="shadow-inner-2xl font-bold rounded-lg bg-white outline-none">Sign up</button>
            </div>

            <div className="flex flex-col items-center justify-items-center gap-4">
                {socialButtons.map((button, index) => (
                    <button key={index} className={button.className}>
                        <div className={"flex justify-center items-center"}>
                            <span>{button.icon}</span> <span>{button.text}</span>
                        </div>
                    </button>
                ))}

                {/* section of ---- or ---- */}
                <div className="flex items-center justify-items-center gap-4 mt-4">
                    <hr className="border-gray-300 h-2 w-[10vw]"/>
                    <span>or</span>
                    <hr className="border-gray-300 h-2 w-[10vw]"/>
                </div>
            </div>

            <div className="relative w-[24vw] max-md:w-[60vw] items-center justify-center">
                <InputField
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                    error={emailError}
                    showError={showErrors}
                />
            </div>
            <br/>
            <div className={"w-[24vw] max-md:w-[60vw]"}>
                <SubmitButton classname={"w-[24vw] max-md:w-[60vw]"} text="Continue"
                              onClick={handleContinue1Click}/>
            </div>
        </div>
    )
}

export default SignupTab1;