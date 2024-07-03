import React from "react";

const SelectField = ({label, value, onChange, error, options, defaultOption}) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={label} className={"font-bold mt-3 mb-2"}>
                {label}
            </label>
            <select
                id={label}
                className={`bg-white transition-all cursor-pointer hover:border-blue-600 border-2 border-[#E3E1E3] outline-none p-2.5 mb-0.5 text-sm rounded-xl appearance-none ${
                    error ? "border-red" : ""
                }`}
                value={value}
                onChange={onChange}
            >
                {options.map((option) => (
                    <option value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {error && (
                <p className="text-red text-[0.8em] pl-3">{error}</p>
            )}
        </div>
    );
};

export default SelectField;