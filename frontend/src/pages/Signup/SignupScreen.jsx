import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {motion} from "framer-motion"
import {ReactComponent as LogoIcon} from "../../assets/img/Schwarz-logo.svg";
import SignupTab1 from "./components/SignupTab1";
import SignupTab2 from "./components/SignupTab2";
import SignupTab3 from "./components/SignupTab3";
import SignupTab4 from "./components/SignupTab4";
import {signup} from "../../services/actions/auth";
import {connect} from "react-redux";
import {Button} from "../../components/Button";
import {Heading} from "../../components/Heading";
import {SubHeading} from "../../components/SubHeading";

const SignupScreen = ({signup, isAuthenticated}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [re_password, setRePassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [date, setDate] = useState("");
    const [gender, setGender] = useState("Man");
    const [address, setAddress] = useState("");
    const [preferred_lang, setLanguage] = useState("English");
    const [company, setCompany] = useState("");
    const [job_title, setJobTitle] = useState("");
    const [industry, setIndustry] = useState("");
    const [experience, setExperience] = useState("");

    const [showSignupTab1, setShowSignupTab1] = useState(true);
    const [showSignupTab2, setShowSignupTab2] = useState(false);
    const [showSignupTab3, setShowSignupTab3] = useState(false);
    const [showSignupTab4, setShowSignupTab4] = useState(false);

    const [accountCreated, setAccountCreated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Create a Schwarz ID | Schwarz"
    }, [])

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

    const handleSubmit = e => {
        e.preventDefault();

        if (password === re_password) {
            signup(email, firstName, lastName, date, gender, address, preferred_lang, company, job_title, industry, experience, password, re_password);
            setAccountCreated(true);
        }
    };

    if (isAuthenticated) {
        return navigate('/');
    }
    if (accountCreated) {
        return navigate('/login');
    }

    return (
        <div className={"parent-container m-auto grid grid-cols-2 max-md:grid-cols-1 h-screen"}>
            <div className={"tile h-full"}>
                <form className={"flex flex-col items-center justify-center h-full"}>
                    <LogoIcon className="mb-4"/>
                    {(showSignupTab1 || showSignupTab2) &&
                        <Heading initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}}
                                 transition={{delay: 0.5, duration: 0.5}} text={"Create an Account"} classname={"text-2xl max-md:text-xl text-center"}/>
                    }
                    {(showSignupTab1 || showSignupTab2) &&
                        <SubHeading classname={"text-neutral-400 mx-4 text-center"} initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}}
                                    transition={{delay: 0.8, duration: 0.5}} text={<>
                            Create your <Link to="" className="text-blue">Schwarz ID</Link> and unlock a world of
                            possibilities.
                        </>} />
                    }

                    {(showSignupTab3) &&
                        <Heading initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}}
                                    transition={{delay: 0.5, duration: 0.5}} text={"Personal Information"} classname={"text-2xl max-md:text-xl text-center"}/>
                    }
                    {(showSignupTab3) &&
                        <SubHeading classname={"text-neutral-400 mx-4 text-center"} initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}}
                                    transition={{delay: 0.8, duration: 0.5}} text={"Help us personalize your experience " +
                            "and enhance our services by providing some additional personal information"}/>
                    }

                    {(showSignupTab4) &&
                        <Heading initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}}
                                    transition={{delay: 0.5, duration: 0.5}} text={"Work Information"} classname={"text-2xl max-md:text-xl text-center"}/>
                    }
                    {(showSignupTab4) &&
                        <SubHeading classname={"text-neutral-400 mx-4 text-center"} initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}}
                                    transition={{delay: 0.8, duration: 0.5}} text={"Help us personalize your experience and enhance our services by providing some additional work information"} />
                    }

                    <motion.div
                        initial={{opacity: 0, x: 150}}
                        animate={showSignupTab1 ? {opacity: 1, x: 0} : {opacity: 0, x: -1000}}
                        transition={{duration: 0.5}}>
                        {showSignupTab1 && <SignupTab1
                            onContinue={handleTransition1}
                            email={email}
                            setEmail={setEmail}
                        />}
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, x: 1000}}
                        animate={showSignupTab2 ? {opacity: 1, x: 0} : {opacity: 0, x: 150}}
                        transition={{duration: 0.5}}
                    >
                        {showSignupTab2 && <SignupTab2
                            onContinue={handleTransition2}
                            email={email}
                            password={password}
                            setPassword={setPassword}
                            re_password={re_password}
                            setRePassword={setRePassword}
                            firstName={firstName}
                            setFirstName={setFirstName}
                            lastName={lastName}
                            setLastName={setLastName}
                        />}
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, x: 1000}}
                        animate={showSignupTab3 ? {opacity: 1, x: 0} : {opacity: 0, x: 150}}
                        transition={{duration: 0.5}}
                    >
                        {showSignupTab3 &&
                            <SignupTab3
                                onPrevious={handlePreviousTransition1}
                                onContinue={handleTransition3}
                                date={date}
                                setDate={setDate}
                                gender={gender}
                                setGender={setGender}
                                address={address}
                                setAddress={setAddress}
                                preferred_lang={preferred_lang}
                                setLanguage={setLanguage}
                            />}
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, x: 1000}}
                        animate={showSignupTab4 ? {opacity: 1, x: 0} : {opacity: 0, x: 150}}
                        transition={{duration: 0.5}}
                    >
                        {showSignupTab4 &&
                            <>
                                <SignupTab4
                                    onPrevious={handlePreviousTransition2}
                                    company={company}
                                    setCompany={setCompany}
                                    job_title={job_title}
                                    setJobTitle={setJobTitle}
                                    industry={industry}
                                    setIndustry={setIndustry}
                                    experience={experience}
                                    setExperience={setExperience}
                                    email={email}
                                    firstName={firstName}
                                    lastName={lastName}
                                    password={password}
                                    re_password={re_password}
                                    date={date}
                                    gender={gender}
                                    address={address}
                                    preferred_lang={preferred_lang}
                                />
                                <Button classname={"w-full"} text="Create my Account"
                                        onClick={handleSubmit}/>
                            </>
                        }
                    </motion.div>
                </form>
            </div>

            <div className="bg-neutral-300 h-full block max-md:hidden">
                <h1 className="tile-marker h-full">Looping Simulation from Blender</h1>
            </div>
        </div>
    );
};
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {signup})(SignupScreen);

