import React, {useState} from "react";
import InputField from "../../../components/InputField";
import {Button} from "../../../components/Button";
import SelectField from "../../../components/SelectField";
import {
    validateAddress,
    validateDate,
    validateGender,
    validateLanguage
} from "../../../features/authentication/Validations";

const SignupTab3 = ({
                        onPrevious,
                        onContinue,
                        date,
                        setDate,
                        gender,
                        setGender,
                        address,
                        setAddress,
                        preferred_lang,
                        setLanguage
                    }) => {
    const [dateError, setDateError] = useState("");
    const [genderError, setGenderError] = useState("");
    const [addressError, setAddressError] = useState("");
    const [languageError, setLanguageError] = useState("");

    const handlePrevious2Click = () => {
        onPrevious();
    }

    const handleContinue3Click = (e) => {
        e.preventDefault();

        const err1 = validateDate(date);
        const err2 = validateGender(gender);
        const err3 = validateAddress(address);
        const err4 = validateLanguage(preferred_lang);

        setDateError(err1);
        setGenderError(err2);
        setAddressError(err3);
        setLanguageError(err4);

        if(err1 === "" && err2 === "" && err3 === "" && err4 === "") {
            onContinue();
        }
    }

    return (
        <div>
            <div className="relative w-[24vw] max-md:w-[60vw] items-center justify-center">
                <InputField
                    label="Date of Birth"
                    type="date"
                    value={date}
                    onChange={(event) => {
                        const newDate = event.target.value;
                        setDate(newDate);
                        const err = validateDate(newDate);
                        setDateError(err)
                    }
                    }
                    error={dateError}
                />

                <SelectField
                    label="Gender"
                    value={gender}
                    onChange={(event) => {
                        const newGender = event.target.value;
                        setGender(newGender);
                        const err = validateGender(newGender);
                        setGenderError(err);
                    }}
                    error={genderError}
                    options={["Man", "Woman", "Transgender", "Non-binary/non-conforming", "Prefer not to respond"]}
                    defaultOption={"Male"}
                />

                <InputField
                    label="Permanent Address"
                    type="text"
                    placeholder="Enter your permanent address"
                    value={address}
                    onChange={(event) => {
                        const newAddress = event.target.value;
                        setAddress(newAddress);
                        const err = validateAddress(newAddress);
                        setAddressError(err);
                    }}
                    error={addressError}
                />

                <SelectField
                    label="Preferred Language"
                    value={preferred_lang}
                    onChange={(event) => {
                        const newLang = event.target.value;
                        setLanguage(newLang);
                        const err = validateLanguage(newLang);
                        setLanguageError(err);
                    }}
                    error={languageError}
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
            </div>
            <br/>
            <div className="w-[24vw] max-md:w-[60vw] flex justify-between">
                <Button
                    classname="w-[11vw] max-md:w-[28vw] btn"
                    text="Previous Step"
                    type="button"
                    onClick={handlePrevious2Click}
                    isPreviousStep={true}
                />
                <Button
                    classname="w-[11vw] max-md:w-[28vw] btn"
                    text="Next Step"
                    type="button"
                    onClick={handleContinue3Click}
                    isForwardStep={true}
                />
            </div>
        </div>
    );
}

export default SignupTab3;