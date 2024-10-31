import React from "react";
import { motion } from "framer-motion";

const InputField = ({ label, type, placeholder, pattern, value = "", name, onChange, error, onFocus, onBlur, readonly, classname, input_classname }) => {
    return (
        <div className={`flex flex-col ${classname}`}>
            <label htmlFor={label} className={"font-bold dark:font-normal mt-3 mb-2 dark:text-neutral-500"}>{label}</label>
            <input
                type={type}
                id={label}
                name={name}
                placeholder={placeholder}
                pattern={pattern}
                className={`dark:bg-neutral-950 border-2 dark:border-neutral-800 dark:text-neutral-300 dark:placeholder-neutral-600 outline-none rounded-xl p-2.5 mb-0.5 text-sm ${error ? "border-red-500 dark:border-red-500" : "focus:border-blue-400 dark:focus:border-blue-600"} transition-all duration-300 ease-in-out ${input_classname}`}
                value={value}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                {...(readonly && { readOnly: true })}
            />
            {error &&
                <motion.div
                    className="text-red-500 text-[0.8em] pl-3"
                    initial={{ opacity: 0, y: -10 }}
                    animate={error ? { opacity: 1, y: 0 } : { opacity: 0, y: 1000 }}
                    transition={{ duration: 0.3 }}
                >{error}</motion.div>}
        </div>
    );
};

export default InputField;
