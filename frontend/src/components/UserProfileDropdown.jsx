import React, { useState, useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { PreferencesContext } from "../contexts/PreferencesContext";
import { motion, AnimatePresence } from "framer-motion";
import { generateGradient } from "../features/userProfile/profileGradient";
import {logout} from "../services/actions/auth";
import Skeleton from "react-loading-skeleton";

export const UserProfileDropdown = ({ first_name, last_name, email }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { darkMode, toggleDarkMode } = useContext(PreferencesContext);
    const dropdownRef = useRef(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    const profileGradient = generateGradient(email);

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        if (isDropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isDropdownOpen]);

    return (
        <div className="relative z-10 font-sans" ref={dropdownRef}>
            {/* User icon */}
            {loading ? <div className={"rounded-full w-10 h-10 bg-black"}></div> :
            <button
                className={`flex items-center justify-center rounded-full w-10 h-10 text-white focus:outline-none`}
                style={{ background: profileGradient }}
                onClick={toggleDropdown}
            >
                {first_name[0]}{last_name[0]}
            </button>}

            {/* Dropdown menu */}
            <AnimatePresence>
                {isDropdownOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.3 }}
                        className="absolute right-0 mt-2 w-56 bg-white dark:bg-neutral-800 dark:text-neutral-200 border dark:border-neutral-700 rounded-lg shadow-lg"
                    >
                        <div className="p-4">
                            <p className={"dark:text-neutral-200"}><b>{first_name} {last_name}</b></p>
                            <p className="text-sm text-neutral-400">{email}</p>
                        </div>
                        <hr className={"dark:border-neutral-700"} />
                        <div className="flex flex-col w-full my-4">
                            <Link className="px-4 py-2 flex" aria-current="page" to="/account">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                    stroke="currentColor" className="w-5 h-5 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                                My Account
                            </Link>
                            <Link className="px-4 py-2 flex" aria-current="page" to="/cart">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                    stroke="currentColor" className="w-5 h-5 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                            My Cart
                        </Link>
                        <div className="px-4 py-2 flex justify-between" aria-current="page">
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                </svg>
                                Dark Mode
                            </div>
                            <label className="relative inline-flex cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" checked={darkMode} onChange={toggleDarkMode} />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-400 dark:peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                    </div>
                    <hr className={"dark:border-neutral-700"} />
                    <div className="flex flex-col my-2 text-rose-500">
                        <div className="px-4 py-2 flex cursor-pointer" aria-current="page">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="currentColor" className="w-5 h-5 mr-2 stroke-rose-500">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                            </svg>
                            Logout
                        </div>
                    </div>
                </motion.div>
            )}
            </AnimatePresence>
        </div>
    );
};
