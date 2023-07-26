import React, {useState} from "react";

export default function TwofaForm() {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // User Login info
    const database = [
        {
            username: "user1",
            password: "pass1"
        },
        {
            username: "user2",
            password: "pass2"
        }
    ];

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        var {uname, pass} = document.forms[0];

        // Find user login info
        const userData = database.find((user) => user.username === uname.value);

        // Compare user info
        if (userData) {
            if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessages({name: "pass", message: errors.pass});
            } else {
                setIsSubmitted(true);
            }
        } else {
            // Username not found
            setErrorMessages({name: "uname", message: errors.uname});
        }
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    // JSX code for login form
    const twofaForm = (
        <div className={"parent-container m-auto grid grid-cols-2 max-md:grid-cols-1 h-screen"}>
            <div className={"tile h-full"}>
                <div className={"flex flex-col items-center justify-center h-full"}>
                    <h1 className={"text-2xl max-md:text-xl font-bold font-sans mb-[4px]"}>Your 2FA Methods</h1>
                    <p className={"text-base max-md:text-sm w-3/4 font-medium font-sans text-l_grey mb-[64px] max-md:mb-[32px]"}>Choose from the available 2FA
                        Methods to log in to your Schwarz ID</p>
                    <div className={"border-2 border-solid border-grey hover:border-blue rounded-lg w-1/2 mb-6 flex items-center justify-center duration-150\t"}>
                        <div className={"flex-auto flex-col items-start text-start w-5/6"}>
                            <p className={"text-base font-bold font-sans px-4 mt-[8px]"}>Email Authentication</p>
                            <span className={"bg-red_bg text-red text-xs font-medium mr-2 px-4 py-0.5 rounded-full ml-[8px] mt-[1px]"}>Low Security</span>
                            <p className={"text-xs font-sans font-medium text-l_grey px-4 mt-[8px] mb-[8px] w-full"}>A
                                verification code will be sent to your registered
                                email id</p>
                        </div>
                        <div className={"flex-auto flex-col items-center justify-center w-1/6"}>
                            <input id="email-auth" type="radio" value="" name="radio"
                                   className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
                        </div>
                    </div>

                    <div className={"border-2 border-solid border-grey hover:border-blue rounded-lg w-1/2 mb-6 flex items-center justify-center duration-150"}>
                        <div className={"flex-auto flex-col items-start text-start w-5/6"}>
                            <p className={"text-base font-bold font-sans px-4 mt-[8px]"}>Text Authentication</p>
                            <span className={"bg-yellow_bg text-yellow text-xs font-medium mr-2 px-4 py-0.5 rounded-full ml-[8px] mt-[1px]"}>Medium Security</span>
                            <p className={"text-xs font-sans font-medium text-l_grey px-4 mt-[8px] mb-[8px] w-full"}>A verification code will be sent to your registered phone
                                number</p>
                        </div>
                        <div className={"flex-auto flex-col items-center justify-center w-1/6"}>
                            <input id="email-auth" type="radio" value="" name="radio"
                                   className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
                        </div>
                    </div>

                    <div className={"border-2 border-solid border-grey hover:border-blue rounded-lg w-1/2 mb-4 flex items-center justify-center duration-150"}>
                        <div className={"flex-auto flex-col items-start text-start w-5/6"}>
                            <p className={"text-base font-bold font-sans px-4 mt-[8px]"}>Mobile Authenticator Application</p>
                            <span className={"bg-green_bg text-green text-xs font-medium mr-2 px-4 py-0.5 rounded-full ml-[8px] mt-[1px]"}>Highest Security</span>
                            <p className={"text-xs font-sans font-medium text-l_grey px-4 mt-[8px] mb-[8px] w-full"}>Verify your identity with the Google Authenticator
                                application</p>
                        </div>
                        <div className={"flex-auto flex-col items-center justify-center w-1/6"}>
                            <input id="email-auth" type="radio" value="" name="radio"
                                   className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
                        </div>
                    </div>

                    <div className={"w-1/2 flex flex-col items-end justify-center mb-6"}>
                        <button className={"bg-black text-white w-1/2 flex items-center justify-center font-sans rounded-xl"}>
                            <p className={"p-2"}>Continue</p>
                            <svg className={"mr-2"} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.3335 8H12.6668" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8 3.33331L12.6667 7.99998L8 12.6666" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-l_light_grey h-full block max-md:hidden">
                <h1 className="tile-marker h-full">Looping Simulation from Blender</h1>
            </div>
        </div>
        // <div classNameName="form">
        //   <form onSubmit={handleSubmit}>
        //     <div classNameName="input-container">
        //       <label className="font-sans">Username </label>
        //       <input type="text" name="uname" required />
        //       {renderErrorMessage("uname")}
        //     </div>
        //     <div classNameName="input-container">
        //       <label>Password </label>
        //       <input type="password" name="pass" required />
        //       {renderErrorMessage("pass")}
        //     </div>
        //     <div classNameName="button-container">
        //       <input type="submit" />
        //     </div>
        //   </form>
        // </div>
    );

    return (
        <div classNameName="app">
            <div classNameName="login-form">
                {isSubmitted ? <div>User is successfully logged in</div> : twofaForm}
            </div>
        </div>
    );
}