import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginForm from "./pages/Login/LoginScreen";
import SignupScreen from "./pages/Signup/SignupScreen";
import Otpscreen from "./pages/TwoFa/Otpscreen";
import TwofaForm from "./pages/TwoFa/TwofaOptions";

// import Home from "pages/Home";
// import NotFound from "pages/NotFound";
// const MyProfileHistory = React.lazy(() => import("pages/MyProfileHistory"));
// const MyProfileWallet = React.lazy(() => import("pages/MyProfileWallet"));
// const MyProfileCollection = React.lazy(
//   () => import("pages/MyProfileCollection"),
// );
// const MyProfile = React.lazy(() => import("pages/MyProfilePreview"));
// const Saved = React.lazy(() => import("pages/Saved"));
// const ActiveBid = React.lazy(() => import("pages/ActiveBid"));
// const OtherUserProfile = React.lazy(() => import("pages/OtherUserProfile"));
// const MarketDetail = React.lazy(() => import("pages/MarketDetail"));
const Market = React.lazy(() => import("./pages/Marketplace/MarketLanding"));
// const Settings = React.lazy(() => import("pages/Settings"));
// const Message = React.lazy(() => import("pages/Message"));
// const Dashboard = React.lazy(() => import("pages/Dashboard"));

const ProjectRoutes = () => {
    return (
        <React.Suspense fallback={<>Loading...</>}>
            <Router>
                <Routes>
                    {/*<Route path="/" element={<Dashboard />} />*/}
                    {/*<Route path="*" element={<NotFound />} />*/}
                    {/*<Route path="/message" element={<Message />} />*/}
                    {/*<Route path="/settings" element={<Settings />} />*/}
                    <Route path="/marketplace" element={<Market/>}/>
                    {/*<Route path="/marketdetail" element={<MarketDetail />} />*/}
                    {/*<Route path="/otheruserprofile" element={<OtherUserProfile />} />*/}
                    {/*<Route path="/activebid" element={<ActiveBid />} />*/}
                    {/*<Route path="/saved" element={<Saved />} />*/}
                    {/*<Route path="/myprofilepreview" element={<MyProfilePreview />} />*/}
                    {/*<Route*/}
                    {/*  path="/myprofilecollection"*/}
                    {/*  element={<MyProfileCollection />}*/}
                    {/*/>*/}
                    {/*<Route path="/myprofilewallet" element={<MyProfileWallet />} />*/}
                    {/*<Route path="/myprofilehistory" element={<MyProfileHistory />} />*/}
                    {/*<Route path="/dhiwise-dashboard" element={<Home />} />*/}
                    <Route exact path="/login" element={<LoginForm/>}/>
                    <Route exact path="/signup" element={<SignupScreen/>}/>
                    <Route exact path="/auth" element={<TwofaForm/>}/>
                    <Route exact path="/google" element={<Otpscreen/>}/>
                    {/*<Route exact path='/facebook' components={Facebook} />*/}
                    {/*<Route exact path='/reset-password' components={ResetPassword} />*/}
                    {/*<Route exact path='/password/reset/confirm/:uid/:token' components={ResetPasswordConfirm} />*/}
                    {/*<Route exact path='/activate/:uid/:token' components={Activate} />*/}
                    {/*<Route exact path="/register1" element={<SignupTab3 />} />*/}
                </Routes>
            </Router>
        </React.Suspense>
    );
};
export default ProjectRoutes;
