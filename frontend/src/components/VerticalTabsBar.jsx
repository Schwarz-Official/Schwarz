import React from "react";
import {VerticalTab} from "./VerticalTab";

export const VerticalTabsBar = ({classname, tabs, activeTab, setActiveTab}) => {
    return (
        <div className={"px-4 flex flex-col " + classname}>
            {tabs.map((tab, tabIndex) => (
                <div key={tabIndex} className="mb-8">
                    <div className={"text-neutral-400 mb-4"}>{tab.text}</div>
                    {tab.subtabs.map((subtab, subtabIndex) => (
                        <VerticalTab
                            key={subtabIndex}
                            classname={"text-sm"}
                            icon={subtab.icon}
                            text={subtab.text}
                            isActive={tabIndex === activeTab[0] && subtabIndex === activeTab[1]}
                            onClick={() => setActiveTab([tabIndex, subtabIndex])}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}
