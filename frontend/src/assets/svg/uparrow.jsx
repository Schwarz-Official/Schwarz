import React from "react";

export default function UpArrow({ width, height, fillColor }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 -960 960 960" width={width} fill={fillColor}>
            <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/>
        </svg>
    );
}
