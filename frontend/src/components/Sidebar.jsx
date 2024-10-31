import React from 'react';
import '../assets/css/sidebar.css';
import {SubHeading} from "./SubHeading";
import Cross from "../assets/svg/cross";

const Sidebar = ({isOpen, closeSidebar}) => {
    return (
        <>
            <div className={`sidebar fixed top-0 right-[-350px] w-[350px] h-full bg-white dark:bg-neutral-800 transition-all ease-in-out duration-300
      z-50 shadow-[-2px 0 5px rgba(0, 0, 0, 0.5)] ${isOpen ? 'open' : ''}`}>
                <div className={"flex justify-between px-6 py-4"}>
                    <SubHeading text={"Filter Options"} classname={"font-bold text-lg dark:text-neutral-200"}/>
                    <div className={"cursor-pointer"}>
                        <Cross classname={"w-6 h-6 dark:fill-neutral-100"} onClick={closeSidebar}/>
                    </div>
                </div>
                <div className="sidebar-content">
                    {/* Add your filter options here */}
                </div>
            </div>
            <div
                className={`overlay fixed top-0 left-0 w-full h-full bg-black/25 opacity-0 transition-opacity ease-in-out duration-300
        z-40 ${isOpen ? 'open' : ''}`}
                onClick={closeSidebar}
            ></div>
        </>
    );
};

export default Sidebar;
