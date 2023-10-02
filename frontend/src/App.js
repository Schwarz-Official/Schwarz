import './App.css';
import Otpscreen from "./pages/TwoFa/Otpscreen";
import TwofaForm from "./pages/TwoFa/TwofaOptions";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./pages/Login/Login";
import SignupScreen from "./pages/Signup/SignupScreen";
import SignupTab3 from "./pages/Signup/components/SignupTab3";
import styles from './MyStyle.css';


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
        
        <div class="container">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div
  style={{
    display: 'flex',
    justifyContent: 'center',  // Horizontally center
    alignItems: 'flex-start',   // Align to the top       // 100% of the viewport height
  }}
>
  <h2 style={{ padding: '10px', marginTop: '20px', fontFamily: 'Arial, sans-serif'}}>Loading...</h2>
</div>        
    </div>
    </div>
  );
}


export default App;

