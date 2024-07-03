import React from "react"
import "../assets/css/dialogbox.css"

export const DialogBox = ({classname, content}) => {
    return (
        <div className={`absolute bg-white rounded-md p-2 speech-bubble ${classname}`}>
            <div className="relative">{content}</div>
        </div>
    );
}