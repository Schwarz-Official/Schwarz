import React, {useState} from "react";
import InputField from "../../../components/InputField";
import SelectField from "../../../components/SelectField";
import {Button} from "../../../components/Button";
import {
    validateCompany,
    validateExperience,
    validateIndustry,
    validateJobTitle
} from "../../../features/authentication/Validations";

const SignupTab4 = ({onPrevious, company, setCompany, job_title, setJobTitle, industry, setIndustry, experience, setExperience, email, firstName, lastName, password, re_password, date, gender, address, preferred_lang}) => {
    const [companyError, setCompanyError] = useState("");
    const [jobTitleError, setJobTitleError] = useState("");
    const [industryError, setIndustryError] = useState("");
    const [experienceError, setExperienceError] = useState("");

    const handlePrevious3Click = (e) => {
        e.preventDefault();
        onPrevious();
    }

    return (
        <div>
            <div className="relative w-[24vw] max-md:w-[60vw] items-center justify-center">
                <InputField
                    label="Organization"
                    type="text"
                    placeholder="Enter your organization's name"
                    value={company}
                    onChange={(event) => {
                        const newCompany = event.target.value;
                        setCompany(newCompany);
                        const err = validateCompany(newCompany);
                        setCompanyError(err);
                    }}
                    error={companyError}
                />

                <InputField
                    label="Job Title"
                    type="text"
                    placeholder="Enter your job title"
                    value={job_title}
                    onChange={(event) => {
                        const newJobTitle = event.target.value;
                        setJobTitle(newJobTitle);
                        const err = validateJobTitle(newJobTitle);
                        setJobTitleError(err);
                    }}
                    error={jobTitleError}
                />

                <InputField
                    label="Industry"
                    type="text"
                    placeholder="Enter your industry"
                    value={industry}
                    onChange={(event) => {
                        const newIndustry = event.target.value;
                        setIndustry(newIndustry);
                        const err = validateIndustry(newIndustry);
                        setIndustryError(err);
                    }}
                    error={industryError}
                />

                <InputField
                    label="Years of Experience"
                    type="text"
                    placeholder="Enter a number"
                    value={experience}
                    onChange={(event) => {
                        const newExperience = event.target.value;
                        setExperience(newExperience);
                        const err = validateExperience(newExperience);
                        setExperienceError(err);
                    }}
                    error={experienceError}
                />
            </div>
            <br/>
            <div className={"w-[24vw] max-md:w-[60vw] flex justify-between"}>
                <Button classname={"w-[11vw] max-md:w-[28vw]"} text="Previous Step"
                        onClick={handlePrevious3Click} isPreviousStep={true}/>
            </div>
            <br/>
        </div>);
}

export default SignupTab4;
