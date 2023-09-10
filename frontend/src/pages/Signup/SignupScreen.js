import React from "react";
import {useState} from "react";
import {ReactComponent as LogoIcon} from "../../assets/img/Schwarz-logo.svg";
import {Link} from "react-router-dom";
import SignupTab1 from "./components/SignupTab1";
import SignupTab2 from "./components/SignupTab2";
import {motion} from "framer-motion"
import SignupTab3 from "./components/SignupTab3";
import SignupTab4 from "./components/SignupTab4";

const SignupScreen = () => {
    const [showSignupTab1, setShowSignupTab1] = useState(true);
    const [showSignupTab2, setShowSignupTab2] = useState(false);
    const [showSignupTab3, setShowSignupTab3] = useState(false);
    const [showSignupTab4, setShowSignupTab4] = useState(false);

    const handleTransition1 = () => {
        setShowSignupTab1(false);
        setShowSignupTab2(true);
    };

    const handleTransition2 = () => {
        setShowSignupTab2(false);
        setShowSignupTab3(true);
    };

    const handleTransition3 = () => {
        setShowSignupTab3(false);
        setShowSignupTab4(true);
    };

    const handlePreviousTransition1 = () => {
        setShowSignupTab3(false)
        setShowSignupTab2(true)
    }

    const handlePreviousTransition2 = () => {
        setShowSignupTab4(false)
        setShowSignupTab3(true)
    }

    return (
        <div className={"parent-container m-auto grid grid-cols-2 max-md:grid-cols-1 h-screen font-sans"}>
            <div className={"tile h-full"}>
                <div className={"flex flex-col items-center justify-center h-full"}>
                    <LogoIcon className="mb-4"/>
                    {(showSignupTab1 || showSignupTab2) &&
                        <h1 className={"text-2xl max-md:text-xl font-bold font-sans mb-[4px]"}>Create an Account</h1>}
                    {(showSignupTab1 || showSignupTab2) &&
                        <p className={"text-base max-md:text-sm w-3/4 font-medium font-sans text-l_grey mb-[32px] max-md:mb-[32px] text-center"}>Create
                            your <Link to={""} className={"text-blue"}>Schwarz ID</Link> and unlock a world of
                            possibilities.</p>}

                    {(showSignupTab3) && <h1 className={"text-2xl max-md:text-xl font-bold font-sans mb-[4px]"}>Personal
                        Information</h1>}
                    {(showSignupTab3) &&
                        <p className={"text-base max-md:text-sm w-3/4 font-medium font-sans text-l_grey mb-[32px] max-md:mb-[32px] text-center"}>Help
                            us personalize your experience and enhance our services
                            by providing some additional personal information</p>}

                    {(showSignupTab4) &&
                        <h1 className={"text-2xl max-md:text-xl font-bold font-sans mb-[4px]"}>Work Information</h1>}
                    {(showSignupTab4) &&
                        <p className={"text-base max-md:text-sm w-3/4 font-medium font-sans text-l_grey mb-[32px] max-md:mb-[32px] text-center"}>Help
                            us personalize your experience and enhance our services by
                            providing some additional work information</p>}

                    <motion.div initial={{x: 150}} animate={showSignupTab1 ? {x: 0} : {x: -1000}}
                                transition={{duration: 0.5}}>
                        {showSignupTab1 && <SignupTab1 onContinue={handleTransition1}/>}
                    </motion.div>

                    <motion.div
                        initial={{x: 1000}} // Start from the right (out of view)
                        animate={showSignupTab2 ? {x: 0} : {x: 150}} // Slide in from the right
                        transition={{duration: 0.5}}
                    >
                        {showSignupTab2 &&
                            <SignupTab2 onContinue={handleTransition2}/>} {/* Show SignupTab2 when the state is true */}
                    </motion.div>

                    <motion.div
                        initial={{x: 1000}} // Start from the right (out of view)
                        animate={showSignupTab3 ? {x: 0} : {x: 150}} // Slide in from the right
                        transition={{duration: 0.5}}
                    >
                        {showSignupTab3 &&
                            <SignupTab3 onPrevious={handlePreviousTransition1}
                                        onContinue={handleTransition3}/>} {/* Show SignupTab2 when the state is true */}
                    </motion.div>

                    <motion.div
                        initial={{x: 1000}} // Start from the right (out of view)
                        animate={showSignupTab4 ? {x: 0} : {x: 150}} // Slide in from the right
                        transition={{duration: 0.5}}
                    >
                        {showSignupTab4 &&
                            <SignupTab4 onPrevious={handlePreviousTransition2}/>} {/* Show SignupTab2 when the state is true */}
                    </motion.div>
                </div>
            </div>

            <div className="bg-l_light_grey h-full block max-md:hidden">
                <h1 className="tile-marker h-full">Looping Simulation from Blender</h1>
            </div>
        </div>
    );
};
export default SignupScreen;
