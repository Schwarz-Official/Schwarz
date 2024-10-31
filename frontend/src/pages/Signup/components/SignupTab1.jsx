import {socialButtons} from "../../../components/SocialButton";
import InputField from "../../../components/InputField";
import React, {useState} from "react";
import {Button} from "../../../components/Button";
import {validateEmail} from "../../../features/authentication/Validations";

const SignupTab1 = ({onContinue, email, setEmail}) => {
    const [emailError, setEmailError] = useState("");

    const handleContinue1Click = (e) => {
        e.preventDefault();

        const val = validateEmail(email);

        setEmailError(val);

        if(val === "") {
            onContinue();
        }
    };

    return (
        <div>
            <div
                className="relative align-center w-[24vw] max-md:w-[60vw] bg-neutral-200 mb-[32px] h-14 grid grid-cols-2 gap-2 p-1 rounded-md">
                <button
                    className="text-neutral-500 hover:text-black hover:shadow-inner-2xl font-bold rounded-lg transition-all ease-in-out duration-250 outline-none">Sign
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

                <div className="flex items-center justify-items-center gap-4 mt-4">
                    <hr className="border-gray-300 h-2 w-[10vw]"/>
                    <span>or</span>
                    <hr className="border-gray-300 h-2 w-[10vw]"/>
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
                        const val =  validateEmail(newEmail);
                        setEmailError(val);
                    }}
                    error={emailError}
                />
            </div>
            <br/>
            <div className={"w-[24vw] max-md:w-[60vw]"}>
                <Button classname={"w-[24vw] max-md:w-[60vw]"} text="Continue" type={"button"}
                        onClick={handleContinue1Click}/>
            </div>
        </div>
    )
}

export default SignupTab1;
