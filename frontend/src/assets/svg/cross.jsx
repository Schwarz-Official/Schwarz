import React from "react"

export default function Cross({ fillColor , height, width, onClick}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 -960 960 960" width={width} fill={fillColor} onClick={onClick}>
            <path
                d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
        </svg>
    );
}