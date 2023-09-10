import React from "react";

const SubmitButton = ({classname, text, onClick, isForwardStep, isPreviousStep}) => {
    return (
        <button
            className={"bg-black hover:bg-black hover:text-white text-white flex items-center justify-center font-sans rounded-xl " + classname}
            onClick={onClick}>
            {isPreviousStep ? (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.6666 8H3.33331" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.99998 12.6667L3.33331 8.00001L7.99998 3.33334" stroke="white" strokeLinecap="round"
                          strokeLinejoin="round"/>
                </svg>

            ) : null
            }

            <p className={"p-2 max-md:text-sm"}>{text}</p>

            {isForwardStep ? (
                <svg className={"mr-2"} width="16" height="16" viewBox="0 0 16 16" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.3335 8H12.6668" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 3.33331L12.6667 7.99998L8 12.6666" stroke="white" strokeLinecap="round"
                          strokeLinejoin="round"/>
                </svg>
            ) : null
            }
        </button>
    );
};

export default SubmitButton;