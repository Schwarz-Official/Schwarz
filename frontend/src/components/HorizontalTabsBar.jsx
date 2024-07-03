// import React from "react";
// import {Tab} from "./Tab";
//
// export const HorizontalTabsBar = ({ classname, tabs, activeTab, setActiveTab }) => {
//     return (
//         <div className={"px-4 flex bg-neutral-50 " + classname}>
//             {tabs.map((tab, index) => (
//                 <Tab
//                     key={index}
//                     classname={"text-sm"}
//                     icon={tab.icon}
//                     text={tab.text}
//                     isActive={index === activeTab}
//                     onClick={() => setActiveTab(index)}
//                 />
//             ))}
//         </div>
//     );
// }

import React, { useRef, useEffect, useState } from "react";
import { Tab } from "./Tab";
import LeftArrow from "../assets/svg/leftarrow";
import RightArrow from "../assets/svg/rightarrow";

export const HorizontalTabsBar = ({ classname, tabs, activeTab, setActiveTab }) => {
    const containerRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(false);

    useEffect(() => {
        const updateArrows = () => {
            if (containerRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
                setShowLeftArrow(scrollLeft > 0);
                setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
            }
        };

        updateArrows();

        window.addEventListener("resize", updateArrows);
        return () => window.removeEventListener("resize", updateArrows);
    }, []);

    const scrollLeft = () => {
        containerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    };

    const scrollRight = () => {
        containerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    };

    const updateTab = () => {
        document.title = `${tabs[activeTab].text} | Schwarz`
    }

    return (
        <div className={`relative w-full ${classname}`}>
            {showLeftArrow && (
                <button
                    onClick={scrollLeft}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 ml-2 rounded-full shadow-md"
                >
                    <LeftArrow width={"24px"} height={"24px"} fillColor={"#000"} />
                </button>
            )}
            <div
                ref={containerRef}
                className="flex overflow-x-auto scrollbar-hide"
                onScroll={() => {
                    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
                    setShowLeftArrow(scrollLeft > 0);
                    setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
                }}
            >
                {tabs.map((tab, index) => (
                    <Tab
                        key={index}
                        classname="text-sm flex-shrink-0"
                        icon={tab.icon}
                        text={tab.text}
                        isActive={index === activeTab}
                        onClick={() => {
                            setActiveTab(index);
                        }}
                    />
                ))}
            </div>
            {showRightArrow && (
                <button
                    onClick={scrollRight}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 mr-2 rounded-full shadow-md"
                >
                    <RightArrow width={"24px"} height={"24px"} fillColor={"#000"} />
                </button>
            )}
        </div>
    );
};
