import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {ReactComponent as LogoIcon} from "../../assets/img/Schwarz-logo.svg";
import {useNavigate, useLocation} from "react-router-dom";
import {Heading} from "../../components/Heading";
import {SubHeading} from "../../components/SubHeading";
import {LoginTab1} from "./components/LoginTab1";
import SignupTab2 from "../Signup/components/SignupTab2";
import {LoginTab2} from "./components/LoginTab2";
import {Button} from "../../components/Button";

const LoginScreen = ({login, isAuthenticated}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [showLoginTab1, setShowLoginTab1] = useState(true);
    const [showLoginTab2, setShowLoginTab2] = useState(false);

    useEffect(() => {
        document.title = "Access your Schwarz ID | Schwarz"
    }, [])

    const handleTransition1 = () => {
        setShowLoginTab1(false);
        setShowLoginTab2(true);
    };

    // const continueWithGoogle = async () => {
    //     try {
    //         const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}/google`)
    //
    //         window.location.replace(res.data.authorization_url);
    //     } catch (err) {
    //
    //     }
    // };
    //
    // const continueWithFacebook = async () => {
    //     try {
    //         const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/o/facebook/?redirect_uri=${process.env.REACT_APP_API_URL}/facebook`)
    //
    //         window.location.replace(res.data.authorization_url);
    //     } catch (err) {
    //
    //     }
    // };

    useEffect(() => {
        if (isAuthenticated) {
            navigate(from, { replace: true });
        }
    }, [isAuthenticated, navigate, from]);

    return (
        <div className={"dark:bg-neutral-900 m-auto grid grid-cols-2 max-md:grid-cols-1 h-screen"}>
            <div className={"tile h-full"}>
                <form className={"flex flex-col items-center justify-center h-full"}>
                    <LogoIcon className="mb-4"/>
                    <Heading initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}}
                             transition={{delay: 0.5, duration: 0.5}} text={"Welcome Back"}
                             classname={"text-2xl max-md:text-xl text-center dark:text-neutral-200"}/>

                    <SubHeading classname={"text-neutral-400 text-center dark:text-neutral-500"} initial={{opacity: 0, y: -20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: 0.8, duration: 0.5}}
                                text={"Reconnect with your Schwarz ID for seamless access."}/>

                    <motion.div
                        initial={{opacity: 0, x: 150}}
                        animate={showLoginTab1 ? {opacity: 1, x: 0} : {opacity: 0, x: -1000}}
                        transition={{duration: 0.5}}>
                        {showLoginTab1 && <LoginTab1
                            onContinue={handleTransition1}
                            email={email}
                            setEmail={setEmail}
                        />}
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, x: 1000}}
                        animate={showLoginTab2 ? {opacity: 1, x: 0} : {opacity: 0, x: 150}}
                        transition={{duration: 0.5}}
                    >
                        {showLoginTab2 &&
                            <>
                                <LoginTab2
                                email={email}
                                password={password}
                                setPassword={setPassword}
                                login={login}
                                />
                            </>
                        }
                    </motion.div>
                </form>
            </div>

            <div className="bg-neutral-300 h-full block max-md:hidden">
                <h1 className="tile-marker h-full">Looping Simulation from Blender</h1>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default LoginScreen;
