import React from "react";
import './Login.css'
import { ReactComponent as LogoIcon } from './schwarz.svg';
import { ReactComponent as GoogleIcon } from './google.svg';
import { ReactComponent as TwitterIcon } from './twitter.svg';
import { ReactComponent as AppleIcon } from "./apple.svg";


const LoginForm = ()=>{
    return(
        
          <div class="container">
            <div className="log-form">
              <LogoIcon className="logoIcon"/>
              <p className="bold-text">Create an Account</p>
              <p className="fade-text">Create your Schwarz ID and unlock a world of possibilities.</p>

              <div className="btn-container">
                <button className="active-btn">Sign in</button>
                <button className="passive-btn">Sign up</button>
              </div>

              <div className="log-method">
              <button className="google-btn"><span><GoogleIcon className="google-icon" /></span> <span>Continue with Google</span></button>
              <button className="apple-btn"><span><AppleIcon className="apple-icon"/></span> <span>Continue with Apple</span></button>
              <button className="twitter-btn"><span><TwitterIcon className="twitter-icon"/></span> <span>Continue with Twitter</span></button>
              
              {/* section of ---- or ---- */}
              <div className="or-section"><div className="hr-line"></div><span>or</span><div className="hr-line"></div></div>
              </div>

              <div className="name">
                <div className="text-group">
                  <label for="firstName">First Name</label>
                  <input type="text" id="firstName" placeholder="Enter your first name" className=""/>
                </div>
                
                <div className="text-group">
                  <label for="lastName">Last Name</label>
                  <input type="text" id="lastName" placeholder="Enter your last name" className=""/>
                </div>
              </div>

              <div className="log-detail">
              <label for="email">Email</label>
              <input type="email" placeholder="Enter your email" className="email-inp"/>

              <label for="password">Password</label>
              <input type="password" placeholder="Enter your password"/>
              </div>
             
                {/* <div class="checkbox-container">
                <div class="left">
                  <input type="checkbox" class="check-btn" id="rememberMe" />
                  <label for="rememberMe">Remember me</label>
                </div>
                <div class="right">
                  <a href="#" class="forgot-password">Forgot password</a>
                </div>
              </div> */}

                 {/* <input type="submit" /> */}
                 {/* <button className="next">Next Step</button> */}
                <a href="" className="next">Next Step</a>

            </div>
            <div className="bg-vid">
              {/* Looping Video of Simulation from Blender */}
              <video autoplay loop muted>
                <source src="https://media.istockphoto.com/id/1251524036/video/morphing-holographic-liquid-blobs-abstract-3d-animation.mp4?s=mp4-640x640-is&k=20&c=c8oAYJoLD-_B_xjmfGGlss3j7PRi9i5KKpmaVbyy71A=.mp4" type="video/mp4"/>
              </video>
              </div>            
          </div>
       
    );
}
export default LoginForm;