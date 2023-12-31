import React, {useState} from "react";
import InputField from "../../../components/InputField";
import SubmitButton from "../../../components/SubmitButton";
import SelectField from "../../../components/SelectField";

const SignupTab3 = ({onPrevious, onContinue}) => {
    const [age, setAge] = useState("");
    const [ageError, setAgeError] = useState("");
    const [gender, setGender] = useState("");
    const [genderError, setGenderError] = useState("");
    const [address, setAddress] = useState("");
    const [addressError, setAddressError] = useState("");
    const [language, setLanguage] = useState("");
    const [languageError, setLanguageError] = useState("");
    const [showErrors, setShowErrors] = useState(false);

    const handlePrevious2Click = () => {
        onPrevious();
    }

    const handleContinue3Click = () => {
        onContinue();
    }

    return (
        <div>
            <div className="relative w-[24vw] max-md:w-[60vw] items-center justify-center">
                <InputField
                    label="Age"
                    type="text"
                    placeholder="Enter your age"
                    value={age}
                    onChange={(event) => setAge(event.target.value)}
                    error={ageError}
                    showError={showErrors}
                />

                <SelectField
                    label="Gender"
                    value={gender}
                    onChange={(event) => setGender(event.target.value)}
                    error={genderError}
                    showError={showErrors}
                    options={["Man", "Woman", "Transgender", "Non-binary/non-conforming", "Prefer not to respond"]}
                    defaultOption={"Male"}
                />

                <InputField
                    label="Permanent Address"
                    type="text"
                    placeholder="Enter your permanent address"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                    error={addressError}
                    showError={showErrors}
                />

                <SelectField
                    label="Preferred Language"
                    value={language}
                    onChange={(event) => setLanguage(event.target.value)}
                    error={languageError}
                    showError={showErrors}
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
                    defaultOption={"English"}
                />
            </div>
            <br/>
            <div className={"w-[24vw] max-md:w-[60vw] flex justify-between"}>
                <SubmitButton classname={"w-[11vw] max-md:w-[28vw]"} text="Previous Step"
                              onClick={handlePrevious2Click} isPreviousStep={true}/>
                <SubmitButton classname={"w-[11vw] max-md:w-[28vw]"} text="Next Step"
                              onClick={handleContinue3Click} isForwardStep={true}/>
            </div>
        </div>
    );
}

export default SignupTab3;