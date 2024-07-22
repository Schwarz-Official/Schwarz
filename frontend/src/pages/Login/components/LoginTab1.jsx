import React, {useState} from "react";
import {validateEmail} from "../../../features/authentication/Validations";
import {Button} from "../../../components/Button";
import InputField from "../../../components/InputField";
import {socialButtons} from "../../../components/SocialButton";

export const LoginTab1 = ({onContinue, email, setEmail}) => {
    const [emailError, setEmailError] = useState("");

    const handleContinue1Click = (e) => {
        e.preventDefault();

        const val = validateEmail(email);

        setEmailError(val);

        if (val === "") {
            onContinue();
        }
    };

    return (
        <div>
            <div
                className="relative align-center w-[24vw] max-md:w-[60vw] bg-neutral-200 mb-[32px] h-14 grid grid-cols-2 gap-2 p-1 rounded-md dark:bg-neutral-800">
                <button
                    className="shadow-inner-2xl font-bold rounded-lg bg-white outline-none dark:bg-neutral-700 dark:text-neutral-200">Sign
                    in
                </button>
                <button
                    className="text-neutral-500 hover:text-black hover:shadow-inner-2xl font-bold rounded-lg transition-all ease-in-out duration-250 outline-none">Sign
                    up
                </button>
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
                <div className="flex items-center justify-items-center gap-4 mt-4 dark:text-neutral-100">
                    <hr className="border-neutral-300 h-2 w-[10vw] dark:border-neutral-600"/>
                    <span>or</span>
                    <hr className="border-neutral-300 h-2 w-[10vw] dark:border-neutral-600"/>
                </div>
            </div>

            <div className="relative w-[24vw] max-md:w-[60vw] items-center justify-center">
                <InputField
                    label="Email"
                    type="text"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(event) => {
                        const newEmail = event.target.value;
                        setEmail(newEmail);
                        const val = validateEmail(newEmail);
                        setEmailError(val);
                    }}
                    error={emailError}
                />
            </div>
            <br/>
            <div className={"w-[24vw] max-md:w-[60vw]"}>
                <Button classname={"w-[24vw] max-md:w-[60vw]"} text="Continue"
                        onClick={handleContinue1Click} type={"submit"}/>
            </div>
        </div>
    );
}