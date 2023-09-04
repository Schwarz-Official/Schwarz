import './App.css';
import Otpscreen from "./pages/TwoFa/Otpscreen";
import TwofaForm from "./pages/TwoFa/TwofaOptions";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./pages/Login/Login";
import SignupScreen from "./pages/Signup/SignupScreen";
import SignupTab3 from "./pages/Signup/components/SignupTab3";
function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route exact path="/login" element={<LoginForm />} />
                <Route exact path="/auth" element={<TwofaForm />} >
                </Route>
                <Route exact path="/google" element={<Otpscreen />} />
                <Route exact path="/register" element={<SignupScreen />} />
                <Route exact path="/register1" element={<SignupTab3 />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
