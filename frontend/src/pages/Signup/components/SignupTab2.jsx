import InputField from "../../../components/InputField";
import React, {useState} from "react";
import {Button} from "../../../components/Button";
import {
    validateConfirmPassword,
    validateFirstName,
    validateLastName,
    validatePassword
} from "../../../features/authentication/Validations";
import {DialogBox} from "../../../components/DialogBox";
import Check from "../../../assets/svg/check";
import Cross from "../../../assets/svg/cross"

const SignupTab2 = ({
                        onContinue,
                        email,
                        password,
                        setPassword,
                        re_password,
                        setRePassword,
                        firstName,
                        setFirstName,
                        lastName,
                        setLastName
                    }) => {
    const [passwordError, setPasswordError] = useState({
        hasMinLength: false,
        hasUpperCase: false,
        hasLowerCase: false,
        hasNumber: false,
        hasSpecialCharacter: false,
        hasNoEmailFirstNameLastName: false
    });
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [showDialog, setShowDialog] = useState(false);

    const handleContinue2Click = (e) => {
        e.preventDefault();

        const err1 = validateFirstName(firstName);
        const err2 = validateLastName(lastName);
        const { hasMinLength, hasUpperCase, hasLowerCase, hasNumber, hasSpecialCharacter, hasNoEmailFirstNameLastName } = validatePassword(password, firstName, lastName, email);
        const err4 = validateConfirmPassword(re_password, password);

        setFirstNameError(err1);
        setLastNameError(err2);
        setConfirmPasswordError(err4);

        if(err1 === "" && err2 === "" && (hasMinLength && hasLowerCase && hasUpperCase && hasNumber && hasSpecialCharacter
                && hasNoEmailFirstNameLastName) && err4 === "") {
            onContinue();
        } else {
            setShowDialog(true);
        }
    };

    return (
        <div>
            <div className="relative w-[24vw] max-md:w-[60vw] items-center justify-center">
                <InputField
                    label="First Name"
                    type="text"
                    placeholder="Enter your first name"
                    value={firstName}
                    onChange={(event) => {
                        const newFirstName = event.target.value;
                        setFirstName(newFirstName);
                        const err= validateFirstName(newFirstName);
                        setFirstNameError(err);
                    }}
                    error={firstNameError}
                />

                <InputField
                    label="Last Name"
                    type="text"
                    placeholder="Enter your last name"
                    value={lastName}
                    onChange={(event) => {
                        const newLastName = event.target.value;
                        setLastName(newLastName);
                        const err = validateLastName(newLastName);
                        setLastNameError(err);
                    }}
                    error={lastNameError}
                />

                <InputField
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(event) => {
                        const newPassword = event.target.value;
                        setPassword(newPassword);
                        const { hasMinLength, hasUpperCase, hasLowerCase, hasNumber, hasSpecialCharacter, hasNoEmailFirstNameLastName }  = validatePassword(newPassword, firstName, lastName, email);
                        setPasswordError({ hasMinLength, hasUpperCase, hasLowerCase, hasNumber, hasSpecialCharacter, hasNoEmailFirstNameLastName });
                    }}
                    onFocus={() => setShowDialog(true)}
                    onBlur={() => setShowDialog(false)}
                />

                {showDialog && <DialogBox content={
                    <>
                        <div className={"flex mb-1"}>
                            {passwordError.hasMinLength ?
                                <Check fillColor={"#22bb33"} height={"20px"} width={"20px"}/> :
                                <Cross fillColor={"#bb2124"} height={"20px"} width={"20px"}/>}
                            <p className={"ml-0.5"}>Has atleast 8 characters</p>
                        </div>
                        <div className={"flex mb-1"}>
                            {passwordError.hasLowerCase ?
                                <Check fillColor={"#22bb33"} height={"20px"} width={"20px"}/> :
                                <Cross fillColor={"#bb2124"} height={"20px"} width={"20px"}/>}
                            <p className={"ml-0.5"}>Has atleast 1 lowercase letter</p>
                        </div>
                        <div className={"flex mb-1"}>
                            {passwordError.hasUpperCase ?
                                <Check fillColor={"#22bb33"} height={"20px"} width={"20px"}/> :
                                <Cross fillColor={"#bb2124"} height={"20px"} width={"20px"}/>}
                            <p className={"ml-0.5"}>Has atleast 1 uppercase letter</p>
                        </div>
                        <div className={"flex mb-1"}>
                            {passwordError.hasNumber ?
                                <Check fillColor={"#22bb33"} height={"20px"} width={"20px"}/> :
                                <Cross fillColor={"#bb2124"} height={"20px"} width={"20px"}/>}
                            <p className={"ml-0.5"}>Has atleast 1 number</p>
                        </div>
                        <div className={"flex mb-1"}>
                            {passwordError.hasSpecialCharacter ?
                                <Check fillColor={"#22bb33"} height={"20px"} width={"20px"}/> :
                                <Cross fillColor={"#bb2124"} height={"20px"} width={"20px"}/>}
                            <p className={"ml-0.5"}>Has atleast 1 special character</p>
                        </div>
                        <div className={"flex"}>
                            {passwordError.hasNoEmailFirstNameLastName ?
                                <Check fillColor={"#22bb33"} height={"20px"} width={"20px"}/> :
                                <Cross fillColor={"#bb2124"} height={"20px"} width={"20px"}/>}
                            <p className={"ml-0.5"}>Does not contain your email, first name or last name</p>
                        </div>
                    </>
                } classname={"text-sm top-10 -right-16 w-96"}/>}

                <InputField
                    label="Confirm Password"
                    type="password"
                    placeholder="Confirm your password"
                    value={re_password}
                    onChange={(event) => {
                        const newRePassword = event.target.value;
                        setRePassword(newRePassword);
                        const err = validateConfirmPassword(newRePassword, password);
                        setConfirmPasswordError(err);
                    }}
                    error={confirmPasswordError}
                />
            </div>
            <br/>
            <div className={"w-[24vw] max-md:w-[60vw] flex justify-end"}>
                <Button classname={"w-[12vw] max-md:w-[30vw]"} text="Next Step" type={"button"}
                        onClick={handleContinue2Click} isForwardStep={true}/>
            </div>
        </div>
    )
}

export default SignupTab2;