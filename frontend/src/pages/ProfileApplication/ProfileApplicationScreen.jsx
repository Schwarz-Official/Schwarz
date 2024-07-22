import React from "react";
import {MegaMenu} from "../../layouts/MegaMenu";
import {connect} from "react-redux";
import {Heading} from "../../components/Heading";

const ProfileApplicationScreen = ({ isAuthenticated, user }) => {
    return(
        <div className={"w-full "}>
            <MegaMenu classname={"sticky backdrop-filter backdrop-blur-lg bg-opacity-70 firefox:bg-opacity-90 z-10"}
                isAuthenticated={isAuthenticated} user={user} />
            <div className={"flex justify-center items-center bg-neutral-100"}>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
});

export default connect(mapStateToProps)(ProfileApplicationScreen);