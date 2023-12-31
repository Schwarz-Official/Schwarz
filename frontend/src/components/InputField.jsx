import React from "react";

const InputField = ({ label, type, placeholder, value, onChange, error, showError }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={label} className={"font-bold mt-3 mb-2"}>{label}</label>
      <input
        type={type}
        id={label}
        placeholder={placeholder}
        className={`border-2 border-[#E3E1E3] outline-none rounded-xl p-2.5 mb-0.5 text-sm ${error && showError ? "border-red" : ""}`}
        value={value}
        onChange={onChange}
      />
      {error && showError && <p className="text-red text-[0.8em] pl-3">{error}</p>}
    </div>
  );
};

export default InputField;