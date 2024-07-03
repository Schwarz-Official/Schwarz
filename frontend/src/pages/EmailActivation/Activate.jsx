import React, { useState } from 'react';
import { connect } from 'react-redux';
import {verify} from "../../services/actions/auth";
import {useNavigate} from "react-router-dom";

const Activate = ({ verify, match }) => {
    const [verified, setVerified] = useState(false);
    const navigate = useNavigate();

    const verify_account = e => {
        const uid = match.params.uid;
        const token = match.params.token;

        verify(uid, token);
        setVerified(true);
    };

    if (verified) {
        return navigate('/');
    }

    return (
        <div className="container">
            <div className="d-flex flex-column justify-content-center align-items-center">
                <button
                    onClick="{verify_account}"
                    type="button"
                    className="btn btn-primary"
                >
                    Verify
                </button>
            </div>
        </div>
    );

};

export default connect(null, {verify})(Activate);
