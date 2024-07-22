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

function App() {
    return (
        <div className="font-sans">
            <Router>
                <Routes>
                    <Route exact path="/" element={<LandingScreen/>}/>
                    <Route exact path="login" element={<LoginForm/>}/>
                    <Route exact path="signup" element={<SignupScreen/>}/>
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

            {/*        <div class="container">*/}
            {/*        <div class="box"></div>*/}
            {/*        <div class="box"></div>*/}
            {/*        <div class="box"></div>*/}
            {/*        <div class="box"></div>*/}
            {/*        <div*/}
            {/*  style={{*/}
            {/*    display: 'flex',*/}
            {/*    justifyContent: 'center',  // Horizontally center*/}
            {/*    alignItems: 'flex-start',   // Align to the top       // 100% of the viewport height*/}
            {/*  }}*/}
            {/*>*/}
            {/*  <h2 style={{ padding: '10px', marginTop: '20px', fontFamily: 'Arial, sans-serif'}}>Loading...</h2>*/}
            {/*</div>        */}
            {/*    </div>*/}
        </div>
    );
}


export default App;

