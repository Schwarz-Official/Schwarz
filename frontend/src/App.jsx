import React from 'react';
import Otpscreen from "./pages/TwoFa/Otpscreen";
import TwofaForm from "./pages/TwoFa/TwofaOptions";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginForm from "./pages/Login/LoginScreen";
import SignupScreen from "./pages/Signup/SignupScreen";
import {LandingScreen} from "./pages/LandingScreen";
import Store from "./pages/Marketplace/MarketLanding";
import Activate from "./pages/EmailActivation/Activate";
import UserAccount from "./pages/UserAccount/UserAccount";
import ArtistProfileApplicationScreen from "./pages/ArtistProfileApplication/ArtistProfileApplicationScreen";
import {usePreloadedQuery} from "react-relay";
import {IsAuthenticatedQuery} from "./graphql/queries/IsAuthenticatedQuery";
import PropTypes from "prop-types";

function App({ preloadedQuery }) {
    const data = usePreloadedQuery(IsAuthenticatedQuery, preloadedQuery);

    return (
        <div className="font-sans">
            <Router>
                <Routes>
                    <Route exact path="/" element={<LandingScreen/>}/>
                    <Route exact path="login" element={<LoginForm/>}/>
                    <Route exact path="signup" element={<SignupScreen isAuthenticated={data.isAuthenticated}/>}/>
                    <Route exact path="auth" element={<TwofaForm/>}/>
                    <Route exact path="activate/:uid/:token" element={<Activate/>}/>
                    <Route exact path="google" element={<Otpscreen/>}/>
                    <Route exact path="store" element={<Store/>}/>
                    <Route exact path="account" element={<UserAccount/>}/>
                    <Route exact path="apply/artist" element={<ArtistProfileApplicationScreen/>}/>

                    {/*<Route exact path="/settings" element={<SettingsPage />} />*/}
                    {/*<Route exact path='/facebook' components={Facebook} />*/}
                    {/*<Route exact path='/reset-password' components={ResetPassword} />*/}
                    {/*<Route exact path='/password/reset/confirm/:uid/:token' components={ResetPasswordConfirm} />*/}
                    {/*<Route exact path="/register1" element={<SignupTab3 />} />*/}
                </Routes>
            </Router>
        </div>
    );
}

App.propTypes = {
    preloadedQuery: PropTypes.shape({
        environment: PropTypes.object.isRequired,
        fetchKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        id: PropTypes.string,
        isDisposed: PropTypes.bool,
        name: PropTypes.string.isRequired,
        variables: PropTypes.object.isRequired,
    }).isRequired
}


export default App;

