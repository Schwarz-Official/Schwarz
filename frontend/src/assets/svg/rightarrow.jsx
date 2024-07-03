import React from "react";

export default function RightArrow({ width, height, fillColor }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 -960 960 960" width={width} fill={fillColor}>
            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/>
        </svg>
    );
}