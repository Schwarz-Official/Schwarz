import React, {useState} from 'react';
import InputField from "../../../components/InputField";
import {Button} from "../../../components/Button";

export const AccountDetails = ({user}) => {
    const [isEditBasic, setIsEditBasic] = useState(true);
    const [firstName, setFirstName] = useState(user.first_name);
    const [lastName, setLastName] = useState(user.last_name);
    const [email, setEmail] = useState(user.email);

    return (
        <div className={"w-full px-12 py-8 max-h-96 overflow-y-auto"}>
            <div className={"flex justify-between items-center"}>
                <h1 className={"text-xl font-bold"}>Basic Account Details</h1>
                <div className={"flex justify-center items-center gap-4"}>
                    <p className={!isEditBasic ? "hidden" : "cursor-pointer"} onClick={() => {
                        setIsEditBasic(!isEditBasic);
                    }}>Edit</p>
                    <Button classname={"w-full"} text={"Save"} />
                </div>
            </div>
            <hr className="mt-4"/>



            <div className={"flex justify-center items-center gap-4 w-full"}>
                <InputField
                    label={"First Name"}
                    readonly={isEditBasic}
                    id={"firstname"}
                    value={firstName}
                    onChange={(event) => {
                        const newFirstName = event.target.value;
                        setFirstName(newFirstName);
                    }}
                    classname={"w-1/2"}
                />

                <InputField
                    label={"Last Name"}
                    readonly={isEditBasic}
                    id={"lastname"}
                    value={lastName}
                    onChange={(event) => {
                        const newLastName = event.target.value;
                        setLastName(newLastName);
                    }}
                    classname={"w-1/2"}
                />
            </div>
            <InputField
                label={"Email"}
                readonly={isEditBasic}
                id={"email"}
                value={email}
                onChange={(event) => {
                    const newEmail = event.target.value;
                    setEmail(newEmail);
                }}
            />

            <h1 className={"mt-8 text-xl font-bold"}>Personal Information</h1>
            <hr className="mt-4"/>

            <InputField label={"Date of Birth"} readOnly={true} id={"date_of_birth"} value={user.date_of_birth}/>
            <InputField label={"Gender"} readOnly={true} id={"gender"} value={user.gender}/>
            <InputField label={"Address"} readOnly={true} id={"address"} value={user.address}/>
            <InputField label={"Preferred Language"} readOnly={true} id={"language"} value={user.preferred_lang}/>

            <h1 className={"mt-8 text-xl font-bold"}>Work Information</h1>
            <hr className="mt-4"/>

            <InputField label={"Organization"} readOnly={true} id={"date_of_birth"} value={user.company}/>
            <InputField label={"Job Title"} readOnly={true} id={"job_title"} value={user.job_title}/>
            <InputField label={"Industry"} readOnly={true} id={"address"} value={user.industry}/>
            <InputField label={"Experience"} readOnly={true} id={"address"} value={user.experience}/>
        </div>
    );
}