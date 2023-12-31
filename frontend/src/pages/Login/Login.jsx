import {socialButtons} from "../../components/SocialButton";
import InputField from "../../components/InputField";
import React, {useState} from "react";
import SubmitButton from "../../components/SubmitButton";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {ReactComponent as LogoIcon} from "../../assets/img/Schwarz-logo.svg";
const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
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

    const handleContinue1Click = () => {
        setShowErrors(true);

        // Check for errors and show them if present
        if (!email.includes("@")) {
            setEmailError("Email should contain the '@' symbol");
        } else {

        }
    };

    return (
        <div className={"parent-container m-auto grid grid-cols-2 max-md:grid-cols-1 h-screen font-sans"}>
            <div className={"tile h-full"}>
                <div className={"flex flex-col items-center justify-center h-full"}>
                    <LogoIcon className="mb-4"/>
                    <h1 className={"text-2xl max-md:text-xl font-bold font-sans mb-[4px]"}>Welcome Back</h1>
                    <p className={"text-base max-md:text-sm w-3/4 font-medium font-sans text-l_grey mb-[32px] max-md:mb-[32px] text-center"}>Reconnect with your Schwarz ID for seamless access.</p>

                    <motion.div initial={{x: 150}} animate={{x: 0}}
                                transition={{duration: 0.5}}>
                        <div
                            className="relative align-center w-[24vw] max-md:w-[60vw] bg-[#E9E9E9] mb-[32px] h-14 grid grid-cols-2 gap-2 p-1 rounded-md">
                            <button
                                className="text-[#636363] hover:text-black hover:shadow-inner-2xl font-bold rounded-lg hover:bg-white transition-all ease-in-out duration-250 outline-none">Sign
                                in
                            </button>
                            <button className="shadow-inner-2xl font-bold rounded-lg bg-white outline-none">Sign up
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

                            <InputField
                                label="Password"
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={handlePasswordChange}
                                error={passwordError}
                                showError={showErrors}
                            />
                        </div>
                        <br/>
                        <div className={"w-[24vw] max-md:w-[60vw]"}>
                            <SubmitButton classname={"w-[24vw] max-md:w-[60vw]"} text="Continue"
                                          onClick={handleContinue1Click}/>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="bg-l_light_grey h-full block max-md:hidden">
                <h1 className="tile-marker h-full">Looping Simulation from Blender</h1>
            </div>
        </div>
    )
}

export default LoginScreen;