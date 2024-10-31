import React from "react";

export default function Addon({ width, height }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 511.992 511.992"
            xmlSpace="preserve"
            width={width}
            height={height}
            fill="#000"
        >
            <path d="M36.328 314.4V103.784h308.056V314.4H36.328z" fill="#e2e2e2"/>
            <path
                d="M.928 60.488v57.6c.344 26.312 21.944 47.36 48.256 47.016 25.824-.336 46.688-21.192 47.016-47.016.344 26.312 21.944 47.36 48.256 47.016 25.832-.336 46.688-21.192 47.016-47.016.344 26.312 21.944 47.36 48.256 47.016 25.824-.336 46.688-21.192 47.016-47.016.344 26.312 21.944 47.36 48.256 47.016 25.824-.336 46.688-21.192 47.016-47.016v-57.6H.928z"
                fill="#a3a3a3"
            />
            <path d="M0 314.4H380.84V338.21599999999995H0z"/>
            <path d="M142.352 204.264H238.352V314.424H142.352z"/>
            <g fill="#737373">
                <path d="M321.128 0L382.016 60.488 0.928 60.488 61.816 0z"/>
                <circle cx={393.28} cy={393.28} r={118.712}/>
            </g>
            <g fill="#fff">
                <path d="M338.88 383.288H447.704V403.288H338.88z"/>
                <path d="M383.288 338.88H403.288V447.704H383.288z"/>
            </g>
        </svg>
    );
}
