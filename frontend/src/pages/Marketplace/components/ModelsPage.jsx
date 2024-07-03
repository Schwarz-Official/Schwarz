import React, {useState} from "react";
import {Heading} from "../../../components/Heading";
import Filter from "../../../assets/svg/filter";
import Sidebar from "../../../components/Sidebar";

export const ModelsPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <>
            <div className={"w-full sm:px-14 px-8 mt-8 flex justify-between items-center"}>
                <Heading classname={"text-xl"} text={"Results"}/>
                <div
                    className={"flex justify-center items-center gap-2 text-sm cursor-pointer border border-neutral-300 " +
                        "rounded-full px-4 py-2 hover:bg-neutral-100"}
                    onClick={toggleSidebar}
                >
                    <Filter width={"24px"} height={"24px"} fill={"#000"}/>
                    Filter
                </div>
            </div>

            <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar}/>
        </>
    );
}