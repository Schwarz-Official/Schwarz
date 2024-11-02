import React, {useState} from 'react'
import Search from "../assets/svg/search";

export default function SearchBar() {
    const [isClicked, setIsClicked] = useState(false);
    return (
        <div className="max-w-md mx-auto px-4">
            <div
                className={`relative flex items-center w-full p-2 rounded-lg bg-white dark:bg-neutral-900 overflow-hidden border-2` +
                   ` ${isClicked ? "border-blue-500" : "border-neutral-200 dark:border-neutral-700"} transition-all ease-in-out duration-200 `}>
                <div className="grid place-items-center h-full text-gray-300">
                    <Search classname={"w-6 h-6 stroke-neutral-500"} />
                </div>
                <input
                    className="peer w-full outline-none text-sm dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 ml-2 pr-2"
                    type="text"
                    id="search"
                    placeholder="Search"
                    onFocus={() => {
                        setIsClicked(true)
                    }}
                    onBlur={() => {
                        setIsClicked(false)
                    }}
                />
            </div>
        </div>
    );
}
