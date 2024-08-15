import React, {useState} from "react";
import {MegaMenu} from "../../layouts/MegaMenu";
import {Heading} from "../../components/Heading";
import backgroundImg from "../../assets/img/background.jpg";
import {useNavigate} from "react-router-dom";
import InputField from "../../components/InputField";
import 'react-phone-input-2/lib/style.css'
import PhoneField from "../../components/PhoneField";
import Links from "../../components/Links";
import {FileUpload} from "../../components/FileUpload";

const ArtistProfileApplicationScreen = ({isAuthenticated, user}) => {
    const [legalName, setLegalName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [portfolio, setPortfolio] = useState('');

    const [reasonOfJoining, setReasonOfJoining] = useState('');
    const [typeOfContent, setTypeOfContent] = useState('');

    const navigate = useNavigate();

    if (!isAuthenticated) {
        return navigate('/login', {state: {from: 'apply/artist'}});
    }

    return (
        <div className={"w-full overflow-x-hidden"}>
            <MegaMenu
                classname={"z-10"}
                isAuthenticated={isAuthenticated}
                user={user}
            />
            <div className={"flex justify-center items-center bg-neutral-100 dark:bg-neutral-950"}>
                <div className={"w-1/2 mt-16 flex flex-col justify-center items-center"}>
                    <div
                        className={"rounded-xl w-full py-20 flex justify-center items-center"}
                        style={{
                            backgroundImage: `url(${backgroundImg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        <Heading text={"Artist Profile Application"}
                                 classname={"text-4xl max-md:text-xl text-neutral-100 text-center"}/>
                    </div>
                    
                    <div className={"w-full flex items-center justify-center mt-8"}>
                        <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
                            <li className="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                                <span
                                    className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                                    {/*<svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"*/}
                                    {/*     fill="currentColor" viewBox="0 0 20 20">*/}
                                    {/*    <path*/}
                                    {/*        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>*/}
                                    {/*</svg>*/}
                                    <span className="me-2">1</span>
                                    Profile <span className="hidden sm:inline-flex sm:ms-2">Info</span>
                                </span>
                            </li>
                            <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                                <span
                                    class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                                    <span class="me-2">2</span>
                                    Account <span class="hidden sm:inline-flex sm:ms-2">Info</span>
                                </span>
                            </li>
                            <li className="flex items-center">
                                <span class="me-2">3</span>
                                Confirmation
                            </li>
                        </ol>
                    </div>

                    <div
                        className={"mt-8 px-10 pt-8 pb-10 w-full flex flex-col bg-white rounded-lg dark:bg-neutral-900 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"}>
                        <Heading text={"Legal Information"} classname={"text-2xl dark:text-neutral-300"}/>
                        <hr className={"border-neutral-300 dark:border-neutral-600"}/>

                        <InputField
                            type={"text"}
                            id={"legalname"}
                            label={"Legal Name"}
                            value={legalName}
                            classname={"mt-4"}
                            onChange={(event) => {
                                const newLegalName = event.target.value;
                                setLegalName(newLegalName);
                            }}
                        />

                        <InputField
                            type={"text"}
                            id={"email"}
                            label={"Email Address (for communication)"}
                            value={email}
                            onChange={(event) => {
                                const newEmail = event.target.value;
                                setEmail(newEmail);
                            }}
                        />
                        <div>
                            <PhoneField
                                classname={"w-full"}
                                value={phone}
                                label={"Phone Number"}
                                onChange={(event) => {
                                    const newPhone = event.target.value;
                                    setPhone(newPhone);
                                }}
                            />
                        </div>
                    </div>

                    <div
                        className={"mt-8 px-10 py-4 w-full flex flex-col bg-white rounded-lg dark:bg-neutral-900 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"}>
                        <Heading text={"Professional Information"}
                                 classname={"mt-4 mb-4 text-2xl dark:text-neutral-300"}/>
                        <hr className={"border-neutral-300 dark:border-neutral-600"}/>

                        <InputField
                            type={"text"}
                            id={"portfolio"}
                            label={"Portfolio Link"}
                            placeholder={"https://example.com"}
                            value={portfolio}
                            classname={"mt-4"}
                            onChange={(event) => {
                                const newPortfolio = event.target.value;
                                setPortfolio(newPortfolio);
                            }}
                        />

                        <FileUpload
                            label={"Upload your Resume/CV"}
                        />
                    </div>

                    <div
                        className={"mt-8 px-10 py-4 w-full flex flex-col bg-white rounded-lg dark:bg-neutral-900 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"}>
                        <Heading text={"Social Information"} classname={"mt-4 mb-4 text-2xl dark:text-neutral-300"}/>
                        <hr className={"border-neutral-300 dark:border-neutral-600"}/>
                        <Links/>
                    </div>

                    <div
                        className={"mt-8 px-10 py-4 w-full flex flex-col bg-white rounded-lg dark:bg-neutral-900 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"}>
                        <Heading text={"Verification Questions"} classname={"mt-4 mb-4 text-2xl dark:text-neutral-300"}/>
                        <hr className={"border-neutral-300 dark:border-neutral-600"}/>

                        <InputField
                            type={"text"}
                            id={"reasonOfJoining"}
                            label={"Why do you want to join the platform as an artist?"}
                            value={reasonOfJoining}
                            classname={"mt-4"}
                            onChange={(event) => {
                                const newReason = event.target.value;
                                setReasonOfJoining(newReason);
                            }}
                        />

                        <InputField
                            type={"text"}
                            id={"typeOfContent"}
                            label={"What type of content do you plan to create?"}
                            value={typeOfContent}
                            classname={"mt-4"}
                            onChange={(event) => {
                                const newContent = event.target.value;
                                setTypeOfContent(newContent);
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArtistProfileApplicationScreen;
