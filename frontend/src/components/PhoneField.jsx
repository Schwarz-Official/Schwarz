import React from "react";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "../assets/css/phonefield.css";
import "react-phone-input-2/lib/style.css"; // Import the default styles for PhoneInput

const PhoneField = ({
    label,
    placeholder,
    value = "",
    onChange,
    error,
    onFocus,
    onBlur,
    readonly,
    classname,
    input_classname
}) => {

    return (
        <div className={`flex flex-col ${classname}`}>
            <label
                htmlFor={label}
                className={"font-bold dark:font-normal mt-3 mb-2 dark:text-neutral-500"}
            >
                {label}
            </label>
            <PhoneInput
                enableSearch={true}
                // value={value}
                // onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            {error && (
                <motion.div
                    className="text-red-500 text-[0.8em] pl-3"
                    initial={{ opacity: 0, y: -10 }}
                    animate={error ? { opacity: 1, y: 0 } : { opacity: 0, y: 1000 }}
                    transition={{ duration: 0.3 }}
                >
                    {error}
                </motion.div>
            )}
        </div>
    );
};

export default PhoneField;
