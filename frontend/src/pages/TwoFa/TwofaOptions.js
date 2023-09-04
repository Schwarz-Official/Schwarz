import React, {useState} from "react";
import SubmitButton from "../../components/SubmitButton";

const TwofaForm = () => {
    return(
        <div className={"parent-container m-auto grid grid-cols-2 max-md:grid-cols-1 h-screen"}>
            <div className={"tile h-full"}>
                <div className={"flex flex-col items-center justify-center h-full"}>
                    <h1 className={"text-2xl max-md:text-xl font-bold font-sans mb-[4px] text-center"}>Your 2FA Methods</h1>
                    <p className={"text-base max-md:text-sm w-3/4 font-medium font-sans text-l_grey mb-[64px] text-center max-md:mb-[32px]"}>Choose from the available 2FA
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
                        <SubmitButton text="Next Step" onClick={(e) => {window.location.href = "/"}} isStep={true}/>
                    </div>
                </div>
            </div>
            <div className="bg-l_light_grey h-full block max-md:hidden">
                <h1 className="tile-marker h-full">Looping Simulation from Blender</h1>
            </div>
        </div>
    );
}

export default TwofaForm