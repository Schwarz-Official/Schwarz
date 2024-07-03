import React, { useState, useRef, useEffect } from "react";

const CodeField = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputs = Array.from({ length: 6 }, (_, index) => useRef(null));

  const handleInputChange = (index, event) => {
    const value = event.target.value;

    if (isNaN(value) || value === "") {
      return; // Allow only numeric input
    }

    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);

    // Move to the next input
    if (index < otp.length - 1 && value !== "") {
      inputs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && index > 0 && otp[index] === "") {
      // Move to the previous input on Backspace press
      inputs[index - 1].current.focus();
    } else if (event.key === "Backspace" && otp[index] !== "") {
      // Clear the current input if it's not empty
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
    }
  };

  useEffect(() => {
    // Focus the first input on initial mount
    inputs[0].current.focus();
  }, []);

  return (
    <div className="h-screen bg-blue-500 py-20 px-3">
      <div className="container mx-auto">
        <div className="max-w-sm mx-auto md:max-w-lg">
          <div className="w-full">
            <div className="bg-white h-64 py-3 rounded text-center">
              <h1 className="text-2xl font-bold">OTP Verification</h1>
              <div className="flex flex-col mt-4">
                <span>Enter the OTP you received at</span>
                <span className="font-bold">+91 ******876</span>
              </div>

              <div className="flex flex-row justify-center text-center px-2 mt-5">
                {otp.map((value, index) => (
                  <input
                    key={index}
                    ref={inputs[index]}
                    className="m-2 border h-10 w-10 text-center form-control rounded"
                    type="text"
                    maxLength="1"
                    value={value}
                    onChange={(event) => handleInputChange(index, event)}
                    onKeyDown={(event) => handleKeyDown(index, event)}
                  />
                ))}
              </div>

              <div className="flex justify-center text-center mt-5">
                <a className="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer">
                  <span className="font-bold">Resend OTP</span>
                  <i className="bx bx-caret-right ml-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeField;
