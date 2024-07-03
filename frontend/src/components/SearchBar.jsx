import React, {useState} from 'react'

export default function SearchBar() {
    const [isClicked, setIsClicked] = useState(false);
    return (
        <div className="max-w-md mx-auto px-4">
            <div
                className={"relative flex items-center w-full p-2 rounded-lg bg-white overflow-hidden border-2" +
                   " border-neutral-200 transition-all ease-in-out duration-200 "}>
                <div className="grid place-items-center h-full text-gray-300">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>
                <input
                    className="peer w-full outline-none text-sm text-neutral-700 ml-2 pr-2"
                    type="text"
                    id="search"
                    placeholder="Search"
                    onFocus={() => {
                        setIsClicked(true)
                    }}
                />
            </div>
        </div>
    );
}
