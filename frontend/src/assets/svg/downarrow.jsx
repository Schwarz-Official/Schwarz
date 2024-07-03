import React from "react";

export default function DownArrow({ width, height, fillColor }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 -960 960 960" width={width} fill={fillColor}>
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
        </svg>
    );
}