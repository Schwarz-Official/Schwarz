import React from "react";

const SelectField = ({label, value, onChange, error, showError, options, defaultOption}) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={label} className={"font-bold mt-3 mb-2"}>
                {label}
            </label>
            <select
                id={label}
                className={`border-2 border-[#E3E1E3] outline-none rounded-xl p-2.5 mb-0.5 text-sm ${
                    error && showError ? "border-red" : ""
                }`}
                value={value}
                onChange={onChange}
            >
                {options.map((option) => (
                    <option value={option} selected={option === defaultOption}>
                        {option}
                    </option>
                ))}
            </select>
            {error && showError && (
                <p className="text-red text-[0.8em] pl-3">{error}</p>
            )}
        </div>
    );
};

export default SelectField;