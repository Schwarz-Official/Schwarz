import React, { useState } from "react";
import axios from "axios";
import InputField from "./InputField";
import { Button } from "./Button";
import { CloseSVG } from "../assets/svg/close";

const SocialMediaLinks = () => {
    const [links, setLinks] = useState([
        { platform: "", url: "" },
    ]);

    const handleAddLink = () => {
        setLinks([...links, { platform: "", url: "" }]);
    };

    const handleRemoveLink = (index) => {
        const newLinks = links.filter((_, i) => i !== index);
        setLinks(newLinks);
    };

    const handleChange = (index, event) => {
        const { name, value } = event.target;
        const newLinks = links.map((link, i) => (
            i === index ? { ...link, [name]: value } : link
        ));
        setLinks(newLinks);
    };

    return (
        <div>
            <div className={"mt-6 font-bold dark:text-neutral-500 dark:font-normal"}>Social Media Links</div>
            {links.map((link, index) => (
                <div key={index}>
                    <div className={"flex justify-end z-10"} onClick={() => handleRemoveLink(index)}>
                        <div className={"absolute rounded-full flex justify-center items-center cursor-pointer p-0.5 dark:bg-neutral-700/50"}>
                            <CloseSVG className={"w-6 h-6 scale-75 dark:fill-neutral-400"} />
                        </div>
                    </div>
                    <div className="mb-2 flex gap-2">
                        <InputField
                            type={"text"}
                            id={`platform-${index}`}
                            name="platform"
                            label={"Platform"}
                            value={link.platform}
                            onChange={(event) => handleChange(index, event)}
                            classname={"w-1/3"}
                        />

                        <InputField
                            type={"text"}
                            id={`url-${index}`}
                            name="url"
                            label={"URL"}
                            value={link.url}
                            onChange={(event) => handleChange(index, event)}
                            classname={"w-full"}
                        />
                    </div>
                </div>
            ))}
            <Button
                text={"Add Link"}
                onClick={handleAddLink}
                classname={"mt-4"}
            />
        </div>
    );
};

export default SocialMediaLinks;
