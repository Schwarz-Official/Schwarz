import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import Texture from "../../assets/svg/texture";
import {MegaMenu} from "../../layouts/MegaMenu";
import Account from "../../assets/svg/account";
import {VerticalTabsBar} from "../../components/VerticalTabsBar";
import {AccountDetails} from "./components/AccountDetails";
import OpenInNew from "../../assets/svg/openinnew";

const UserAccount = ({isAuthenticated, user}) => {
    const navigate = useNavigate();
    const [activeSubTab, setActiveSubTab] = useState([0,0]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user !== null) {
            setLoading(false);
        }
    }, [user]);


    const tabs = [
        {
            text: "General",
            subtabs: [
                {
                    text: "Basic Account Details",
                    icon: <Account width={"24px"} height={"24px"} fillColor={"#404040"}/>
                },
                // {
                //     text: "Account Details",
                //     icon: <Account width={"24px"} height={"24px"}/>
                // }
            ]
        },
        {
            text: "More",
            subtabs: [
                {
                    text: "Artist Profile",
                    icon: <OpenInNew width={"24px"} height={"24px"} fillColor={"#404040"}/>
                },
                // {
                //     text: "Account Details",
                //     icon: <Account width={"24px"} height={"24px"}/>
                // }
            ]
        },
    ];

    if (!isAuthenticated) {
        return navigate('/login', { state: { from: '/account' } });
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className={"overflow-x-hidden"}>
            <MegaMenu classname={"sticky backdrop-filter backdrop-blur-lg bg-opacity-70 firefox:bg-opacity-90 z-10"}
                      isAuthenticated={isAuthenticated} user={user}/>
            <div className={"bg-neutral-50 flex justify-center gap-4 pt-16"}>
                <div className={"ml-4 w-1/4"}>
                    <VerticalTabsBar tabs={tabs} activeTab={activeSubTab} setActiveTab={setActiveSubTab} classname={"w-full"} />
                </div>
                <div className={"bg-white w-full mr-16 rounded-lg shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"}>
                    {(activeSubTab[0] === 0 && activeSubTab[1] === 0) && <AccountDetails user={user} />}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
});

export default connect(mapStateToProps)(UserAccount);
