import React, { useState } from 'react';
import InputField from "../../../components/InputField";
import { Button } from "../../../components/Button";
import SelectField from "../../../components/SelectField";
import {validateLanguage} from "../../../features/authentication/Validations";

export const AccountDetails = ({ user }) => {
    const [firstName, setFirstName] = useState(user.first_name);
    const [lastName, setLastName] = useState(user.last_name);
    const [email, setEmail] = useState(user.email);
    const [dob, setDob] = useState(user.date_of_birth);
    const [gender, setGender] = useState(user.gender);
    const [address, setAddress] = useState(user.address);
    const [preferredLang, setPreferredLang] = useState(user.preferred_lang);
    const [organization, setOrganization] = useState(user.company);
    const [jobTitle, setJobTitle] = useState(user.job_title);
    const [industry, setIndustry] = useState(user.industry);
    const [experience, setExperience] = useState(user.experience);

    const [isEditBasic, setIsEditBasic] = useState(true);
    const [isEditPersonal, setIsEditPersonal] = useState(true);
    const [isEditWork, setIsEditWork] = useState(true);

    return (
        <div className={"w-full px-12 py-8 max-h-[calc(100vh-160px)] overflow-y-auto"}>
            <div className={"flex justify-between items-center"}>
                <h1 className={"text-xl font-bold dark:text-neutral-100"}>Basic Account Details</h1>
                <div className={"flex justify-center items-center gap-4"}>
                    <p className={`dark:text-neutral-100 hover:text-neutral-500 dark:hover:text-neutral-400 cursor-pointer transition-all duration-200 ${!isEditBasic && "hidden"}`}
                       onClick={() => {
                           setIsEditBasic(!isEditBasic);
                       }}>Edit</p>
                    <Button text={"Save"}/>
                </div>
            </div>
            <hr className="mt-4 dark:border-neutral-700"/>

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
                    classname={`w-1/2`}
                    input_classname={`${isEditBasic && "bg-neutral-100"}`}
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
                    input_classname={`${isEditBasic && "bg-neutral-100"}`}
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
                input_classname={`${isEditBasic && "bg-neutral-100"}`}
            />

            <div className={"mt-8 flex justify-between items-center"}>
                <h1 className={"text-xl font-bold dark:text-neutral-100"}>Personal Information</h1>
                <div className={"flex justify-center items-center gap-4"}>
                    <p className={`dark:text-neutral-100 hover:text-neutral-500 dark:hover:text-neutral-400 cursor-pointer transition-all duration-200 ${!isEditPersonal && "hidden"}`} onClick={() => {
                        setIsEditPersonal(!isEditPersonal);
                    }}>Edit</p>
                    <Button text={"Save"}/>
                </div>
            </div>
            <hr className="mt-4 dark:border-neutral-700"/>

            <div className={"flex justify-center items-center gap-4 w-full"}>
                <InputField
                    label={"Date of Birth"}
                    readonly={isEditPersonal}
                    id={"date_of_birth"}
                    type={"date"}
                    value={dob}
                    onChange={(event) => {
                        const newDob = event.target.value;
                        setDob(newDob);
                    }}
                    classname={`w-1/2`}
                    input_classname={`${isEditPersonal && "bg-neutral-100"}`}
                />

                <SelectField
                    label={"Gender"}
                    readonly={isEditPersonal}
                    id={"gender"}
                    onChange={(event) => {
                        const newGender = event.target.value;
                        setGender(newGender);
                    }}
                    options={["Man", "Woman", "Transgender", "Non-binary/non-conforming", "Prefer not to respond"]}
                    defaultOption={gender}
                    classname={`w-1/2`}
                />
            </div>

            <InputField
                label={"Address"}
                readonly={isEditPersonal}
                id={"address"}
                value={address}
                onChange={(event) => {
                    const newAddress = event.target.value;
                    setAddress(newAddress);
                }}
                input_classname={`${isEditPersonal && "bg-neutral-100"}`}
            />

            <SelectField
                label="Preferred Language"
                readonly={isEditPersonal}
                onChange={(event) => {
                    const newLang = event.target.value;
                    setLanguage(newLang);
                    const err = validateLanguage(newLang);
                    setLanguageError(err);
                }}
                defaultOption={preferredLang}
                options={[
                        "Afrikaans",
                        "Albanian",
                        "Amharic",
                        "Arabic",
                        "Aragonese",
                        "Armenian",
                        "Asturian",
                        "Azerbaijani",
                        "Basque",
                        "Belarusian",
                        "Bengali",
                        "Bosnian",
                        "Breton",
                        "Bulgarian",
                        "Catalan",
                        "Central Kurdish",
                        "Chinese",
                        "Chinese (Hong Kong)",
                        "Chinese (Simplified)",
                        "Chinese (Traditional)",
                        "Corsican",
                        "Croatian",
                        "Czech",
                        "Danish",
                        "Dutch",
                        "English",
                        "English (Australia)",
                        "English (Canada)",
                        "English (India)",
                        "English (New Zealand)",
                        "English (South Africa)",
                        "English (United Kingdom)",
                        "English (United States)",
                        "Esperanto",
                        "Estonian",
                        "Faroese",
                        "Filipino",
                        "Finnish",
                        "French",
                        "French (Canada)",
                        "French (France)",
                        "French (Switzerland)",
                        "Galician",
                        "Georgian",
                        "German",
                        "German (Austria)",
                        "German (Germany)",
                        "German (Liechtenstein)",
                        "German (Switzerland)",
                        "Greek",
                        "Guarani",
                        "Gujarati",
                        "Hausa",
                        "Hawaiian",
                        "Hebrew",
                        "Hindi",
                        "Hungarian",
                        "Icelandic",
                        "Indonesian",
                        "Interlingua",
                        "Irish",
                        "Italian",
                        "Italian (Italy)",
                        "Italian (Switzerland)",
                        "Japanese",
                        "Kannada",
                        "Kazakh",
                        "Khmer",
                        "Korean",
                        "Kurdish",
                        "Kyrgyz",
                        "Lao",
                        "Latin",
                        "Latvian",
                        "Lingala",
                        "Lithuanian",
                        "Macedonian",
                        "Malay",
                        "Malayalam",
                        "Maltese",
                        "Marathi",
                        "Mongolian",
                        "Nepali",
                        "Norwegian",
                        "Norwegian Bokmål",
                        "Norwegian Nynorsk",
                        "Occitan",
                        "Oriya",
                        "Oromo",
                        "Pashto",
                        "Persian",
                        "Polish",
                        "Portuguese",
                        "Portuguese (Brazil)",
                        "Portuguese (Portugal)",
                        "Punjabi",
                        "Quechua",
                        "Romanian",
                        "Romanian (Moldova)",
                        "Romansh",
                        "Russian",
                        "Scottish Gaelic",
                        "Serbian",
                        "Serbo",
                        "Shona",
                        "Sindhi",
                        "Sinhala",
                        "Slovak",
                        "Slovenian",
                        "Somali",
                        "Southern Sotho",
                        "Spanish",
                        "Spanish (Argentina)",
                        "Spanish (Latin America)",
                        "Spanish (Mexico)",
                        "Spanish (Spain)",
                        "Spanish (United States)",
                        "Sundanese",
                        "Swahili",
                        "Swedish",
                        "Tajik",
                        "Tamil",
                        "Tatar",
                        "Telugu",
                        "Thai",
                        "Tigrinya",
                        "Tongan",
                        "Turkish",
                        "Turkmen",
                        "Twi",
                        "Ukrainian",
                        "Urdu",
                        "Uyghur",
                        "Uzbek",
                        "Vietnamese",
                        "Walloon",
                        "Welsh",
                        "Western Frisian",
                        "Xhosa",
                        "Yiddish",
                        "Yoruba",
                        "Zulu"
                    ]}
            />

            <div className={"mt-8 flex justify-between items-center"}>
                <h1 className={"text-xl font-bold dark:text-neutral-100"}>Work Information</h1>
                <div className={"flex justify-center items-center gap-4"}>
                    <p className={`dark:text-neutral-100 hover:text-neutral-500 dark:hover:text-neutral-400 cursor-pointer transition-all duration-200 ${!isEditWork && "hidden"}`}
                       onClick={() => {
                           setIsEditWork(!isEditWork);
                       }}>Edit</p>
                    <Button text={"Save"}/>
                </div>
            </div>
            <hr className="mt-4 dark:border-neutral-700"/>

            <div className={"flex justify-center items-center gap-4 w-full"}>
                <InputField
                    label={"Job Title"}
                    readonly={isEditWork}
                    id={"job_title"}
                    value={jobTitle}
                    onChange={(event) => {
                        const newJob = event.target.value;
                        setJobTitle(newJob);
                    }}
                    classname={"w-1/2"}
                    input_classname={`${isEditWork && "bg-neutral-100"}`}
                />
                <InputField
                    label={"Organization"}
                    readonly={isEditWork}
                    id={"date_of_birth"}
                    value={organization}
                    onChange={(event) => {
                        const newOrg = event.target.value;
                        setOrganization(newOrg);
                    }}
                    classname={"w-1/2"}
                    input_classname={`${isEditWork && "bg-neutral-100"}`}
                />
            </div>

            <InputField
                label={"Industry"}
                readonly={isEditWork}
                id={"address"}
                value={industry}
                onChange={(event) => {
                    const newIndustry = event.target.value;
                    setIndustry(newIndustry);
                }}
                input_classname={`${isEditWork && "bg-neutral-100"}`}
            />
            <InputField
                label={"Experience"}
                readonly={isEditWork}
                id={"address"}
                value={experience}
                onChange={(event) => {
                    const newExp = event.target.value;
                    setExperience(newExp);
                }}
                input_classname={`${isEditWork && "bg-neutral-100"}`}
            />
        </div>
    );
}
