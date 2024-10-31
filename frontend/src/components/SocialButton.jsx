import React from "react";
import { ReactComponent as GoogleIcon } from "../assets/img/google.svg";
import { ReactComponent as TwitterIcon } from "../assets/img/twitter.svg";
import { ReactComponent as AppleIcon } from "../assets/img/apple.svg";

export const socialButtons = [
    {
        icon: <GoogleIcon className="bg-none h-[32px]" />,
        text: "Continue with Google",
        className: "border-black border-2 rounded-xl w-[24vw] max-md:w-[60vw] max-md:text-sm p-1 dark:border-none dark:bg-neutral-800 dark:text-neutral-100",
    },
    {
        icon: <AppleIcon className="bg-none h-[32px]" />,
        text: "Continue with Apple",
        className: "border-black border-2 rounded-xl w-[24vw] max-md:w-[60vw] max-md:text-sm p-1 dark:border-none dark:bg-neutral-800 dark:text-neutral-100",
    },
    {
        icon: <TwitterIcon className="bg-none h-[32px]" />,
        text: "Continue with Twitter",
        className: "border-black border-2 rounded-xl w-[24vw] max-md:w-[60vw] max-md:text-sm p-1 dark:border-none dark:bg-neutral-800 dark:text-neutral-100",
    },
];
