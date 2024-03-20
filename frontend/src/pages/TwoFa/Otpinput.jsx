import "./Otp.css"
import React, { useState } from "react";
const OtpInput = () => {
    const [otp, setOtp] = useState(new Array(6).fill(""));

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        //Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    return (
            <div className="row">
                <div className="col text-center">

                    {otp.map((data, index) => {
                        return (
                            <input
                                className="otp-field"
                                type="text"
                                name="otp"
                                maxLength="1"
                                key={index}
                                value={data}
                                onChange={e => handleChange(e.target, index)}
                                onFocus={e => e.target.select()}
                            />
                        );
                    })}

                    <p>
                        <div className="otp-box-controller flex flex-col gap-2">

                        <button
                            className="btn btn-secondary mr-2 relative left-40 text-lg hover:text-cyan-500 font-semibold"
                            onClick={e => setOtp([...otp.map(v => "")])}
                        >
                            Clear
                        </button>
                        <button
                            className="bg-zinc-950 w-96 text-white hover:bg-neutral-800  hover:text-white border-zinc-400 font-bold py-2 px-4 rounded-xl"
                            onClick={e =>
                                alert("Entered OTP is " + otp.join(""))
                            }
                        >
                            Verify OTP
                        </button></div>
                    </p>
                </div>
            </div>
        // </>
    );
};

export default OtpInput;