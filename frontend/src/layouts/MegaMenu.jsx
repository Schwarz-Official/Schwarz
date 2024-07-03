import React, { useState, useEffect } from "react";
import "../assets/css/megamenu.css";
import { ReactComponent as Logo } from "../assets/img/Schwarz-logo.svg";
import { Link } from "react-router-dom";
import { UserProfileDropdown } from "../components/UserProfileDropdown";
import Notifications from "../assets/svg/notifications";
import Menu from "../assets/svg/menu";

export const MegaMenu = ({ classname, isAuthenticated, user }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <nav className={"mega-container bg-white " + classname}>
                <>
                    <header className="h-16 flex items-center justify-between px-4">
                        <div className="flex items-center">
                            <button
                                className="block md:hidden p-2 focus:outline-none"
                                onClick={toggleMenu}
                            >
                                <Menu width={"24px"} height={"24px"} fillColor={"#000"} />
                            </button>
                            <Link to="/" className="no-underline font-bold text-lg uppercase flex items-center mx-6 max-md:mx-2">
                                <Logo className={"w-5 mr-4"} />
                                Schwarz
                            </Link>
                            <ul className={"menu-items md:flex md:flex-row items-center hidden no-underline"}>
                                <li className={"list-none transition-all ease-in-out duration-300"}>
                                    <Link to="/" className="flex justify-between w-full px-4 py-6 text-[14px]">
                                        Home
                                    </Link>
                                </li>
                                <li className={"cursor-pointer list-none transition-all ease-in-out duration-300"}>
                                    <p className='flex justify-between w-full px-4 py-6 text-[14px] after:content-["_\25BE"] after:opacity-80 after:ml-[5px]'>
                                        Mega Menu
                                    </p>
                                    <div
                                        className="mega-menu absolute left-0 w-screen top-[65px] border-t border-t-white opacity-0 invisible [transition:all_0.4s_ease-out_0s,_visibility_0.1s_linear_0s]">
                                        <div
                                            className="bg-gray-50 p-4 gap-4 w-full justify-between [box-shadow:rgba(0,_0,_0,_0.1)_0px_1px_3px_0px,_rgba(0,_0,_0,_0.06)_0px_1px_2px_0px]">
                                            <div className="col">
                                                <section></section>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div
                                className={`absolute left-0 w-screen top-[65px] border-t border-t-white transition-all duration-400 ease-out ${isMenuOpen ? "opacity-100 visible " : "opacity-0 invisible"}`}>
                                <div
                                    className="bg-gray-50 p-4 gap-4 w-full justify-between [box-shadow:rgba(0,_0,_0,_0.1)_0px_1px_3px_0px,_rgba(0,_0,_0,_0.06)_0px_1px_2px_0px]">
                                    <div className="col">
                                        <section></section>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center sm:mr-12 mr-4">
                            {isAuthenticated ? (
                                <div className={"flex items-center gap-8"}>
                                    <Notifications height={"24px"} width={"24px"} fillColor={"#000"} className={"hidden sm:block"} />
                                    {user && <UserProfileDropdown first_name={user.first_name} last_name={user.last_name} email={user.email} />}
                                </div>
                            ) : (
                                <div>
                                    <Link to="/login" className="px-4 py-2 hover:text-blue-500 transition-all ease-in-out duration-300">
                                        Login
                                    </Link>
                                    <Link to="/signup"
                                        className="ml-4 px-4 py-2 bg-black text-white rounded-md transition-all hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] ease-in-out duration-300">
                                        Signup
                                    </Link>
                                </div>
                            )}
                        </div>
                    </header>
                </>
            </nav>
        </>
    );
};
