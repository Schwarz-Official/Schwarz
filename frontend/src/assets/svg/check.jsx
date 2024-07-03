import React from "react"

export default function Check({ fillColor, height, width }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 -960 960 960" width={width} fill={fillColor}>
            <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
        </svg>
    );
}

Check.defaultProps = {
    height: "24px",
}