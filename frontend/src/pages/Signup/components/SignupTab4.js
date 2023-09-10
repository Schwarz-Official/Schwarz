import React, {useState} from "react";
import InputField from "../../../components/InputField";
import SelectField from "../../../components/SelectField";
import SubmitButton from "../../../components/SubmitButton";

const SignupTab4 = ({onPrevious}) => {
    const [company, setCompany] = useState("");
    const [companyError, setCompanyError] = useState("");
    const [position, setPosition] = useState("");
    const [positionError, setPositionError] = useState("");
    const [industry, setIndustry] = useState("");
    const [industryError, setIndustryError] = useState("");
    const [years, setYears] = useState("");
    const [yearsError, setYearsError] = useState("");
    const [showErrors, setShowErrors] = useState(false);

    const handlePrevious3Click = () => {
        onPrevious();
    }

    const handleSubmit = () => {

    }

    return (
        <div>
            <div className="relative w-[24vw] max-md:w-[60vw] items-center justify-center">
                <InputField
                    label="Company/Organization"
                    type="text"
                    placeholder="Enter your company/organization's name"
                    value={company}
                    onChange={(event) => setCompany(event.target.value)}
                    error={companyError}
                    showError={showErrors}
                />

                <InputField
                    label="Job Title/Position"
                    type="text"
                    placeholder="Enter your job title/position"
                    value={position}
                    onChange={(event) => setPosition(event.target.value)}
                    error={positionError}
                    showError={showErrors}
                />

                <InputField
                    label="Industry"
                    type="text"
                    placeholder="Enter your industry"
                    value={industry}
                    onChange={(event) => setIndustry(event.target.value)}
                    error={industryError}
                    showError={showErrors}
                />

                <InputField
                    label="Years of Experience"
                    type="text"
                    placeholder="Enter a number"
                    value={years}
                    onChange={(event) => setYears(event.target.value)}
                    error={yearsError}
                    showError={showErrors}
                />
            </div>
            <br/>
            <div className={"w-[24vw] max-md:w-[60vw] flex justify-between"}>
                <SubmitButton classname={"w-[11vw] max-md:w-[28vw]"} text="Previous Step"
                              onClick={handlePrevious3Click} isPreviousStep={true}/>
            </div><br />
            <div className={"w-[24vw] max-md:w-[60vw]"}>
                <SubmitButton classname={"w-[24vw] max-md:w-[44vw]"} text="Create my Account"
                              onClick={handleSubmit} />
            </div>
        </div>);
}

export default SignupTab4;