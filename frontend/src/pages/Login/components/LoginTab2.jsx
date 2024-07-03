import React, {useState} from "react";
import InputField from "../../../components/InputField";
import {Button} from "../../../components/Button";

export const LoginTab2 = ({ login, email, password, setPassword }) => {
    const [passwordError, setPasswordError] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        const minLength = password.length >= 8;
        if(!minLength)
            setPasswordError("Password must have atleast 8 characters");
        else {
            setPasswordError("");
            login(email, password);
        }

    };

    return(
        <div>
            <div className="relative w-[24vw] max-md:w-[60vw] items-center justify-center">
                <InputField
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(event) => {
                        const newPassword = event.target.value;
                        setPassword(newPassword);
                        const minLength = password.length >= 8;
                        if(!minLength)
                            setPasswordError("Password must have atleast 8 characters");
                        else
                            setPasswordError("");
                    }}
                    error={passwordError}
                />
                <Button classname={"w-full mt-6"} text="Login" onClick={handleSubmit}/>
            </div>
        </div>
    );
}