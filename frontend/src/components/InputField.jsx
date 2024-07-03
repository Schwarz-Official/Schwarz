import React from "react";
import {motion} from "framer-motion"

const InputField = ({label, type, placeholder, pattern, value = "", onChange, error, onFocus, onBlur, readonly, classname}) => {
    return (
        <div className={`flex flex-col ${classname}`}>
            <label htmlFor={label} className={"font-bold mt-3 mb-2"}>{label}</label>
            <input
                type={type}
                id={label}
                placeholder={placeholder}
                pattern={pattern}
                className={`border-2 outline-none rounded-xl p-2.5 mb-0.5 text-sm ${error ? "border-red-500" : "focus:border-blue-400"} transition-all duration-300 ease-in-out`}
                value={value}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                {...(readonly && { readOnly: true })}
            />
            {error &&
                <motion.div
                    className="text-red-500 text-[0.8em] pl-3"
                    initial={{opacity: 0, y: -10}}
                    animate={error ? {opacity: 1, y: 0} : {opacity: 0, y: 1000}}
                    transition={{duration: 0.3}}
                >{error}</motion.div>}
        </div>
    );
};

export default InputField;