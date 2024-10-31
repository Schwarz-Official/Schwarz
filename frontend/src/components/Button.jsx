import React from "react";
import '../assets/css/button.css'

export const Button = ({classname, text, onClick, isForwardStep, isPreviousStep, type, ...restProps}) => {
    return (
        <button
            className={`flex items-center justify-center overflow-hidden rounded-xl btn btn-hover bg-neutral-950 dark:bg-neutral-100 text-white dark:text-neutral-950 dark:font-bold ${classname}`}
            onClick={onClick}
            type={type}
            {...restProps}>
            {isPreviousStep &&
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.6666 8H3.33331" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.99998 12.6667L3.33331 8.00001L7.99998 3.33334" stroke="white" strokeLinecap="round"
                          strokeLinejoin="round"/>
                </svg>
            }

            <p className={"p-2 max-md:text-sm"}>{text}</p>

            {isForwardStep &&
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.3335 8H12.6668" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 3.33331L12.6667 7.99998L8 12.6666" stroke="white" strokeLinecap="round"
                          strokeLinejoin="round"/>
                </svg>
            }
        </button>
    );
};
