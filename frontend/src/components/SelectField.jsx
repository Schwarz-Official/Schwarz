import React from "react";

const SelectField = ({label, value, onChange, error, options, defaultOption, readonly, classname, select_classname,}) => {
    return (
        <div className={`flex flex-col ${classname}`}>
            <label htmlFor={label} className={"font-bold dark:font-normal dark:text-neutral-500 mt-3 mb-2"}>
                {label}
            </label>
            <select
                id={label}
                className={`bg-white dark:bg-neutral-950 transition-all cursor-pointer border-2 dark:border-neutral-800 dark:text-neutral-300 ${error ? "border-red-500" : "focus:border-blue-500"} outline-none p-2.5 mb-0.5 text-sm rounded-xl appearance-none`}
                defaultValue={defaultOption}
                onChange={onChange}
                {...(readonly && { disabled: true })}
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
