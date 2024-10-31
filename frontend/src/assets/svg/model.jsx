import React from "react";

export default function Model({fillColor, width, height}) {
    return (
        <svg
            height={height}
            width={width}
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 58 58"
            xmlSpace="preserve"
            fill="#000000"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth={0}/>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
            <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                    {" "}
                    <polygon style={{fill: "#a3a3a3"}} points="29,58 3,45 3,13 29,26 "/>
                    <polygon style={{fill: "#e5e5e5"}} points="29,58 55,45 55,13 29,26 "/>
                    <polygon
                        style={{fill: "#d4d4d4"}}
                        points="3,13 28,0 55,13 29,26 "
                    />
                    {" "}
                </g>
                {" "}
            </g>
        </svg>
    );
}
