import React, {useState} from 'react';
import '../pages/static/common.css'
import { NavLink } from 'react-router-dom';
import logo from "./static/logo.png";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../pages/static/resetpassword.css'

function Resetpassword() {
    const [email, setEmail] = useState("");
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            toast.error("Email is required!", { position: "top-right" });
        } else if (!emailRegex.test(email)) {
            toast.error("Invalid email format!", { position: "top-right" });
        } else {
            console.log("Email:", email);
            toast.success("Reset password link has been sent. Please check your email.", { position: "top-right" });
            // Additional logic for submitting the form
        }
    };

    return (
        <>
            <div className=" col-12">
                <div style={{ margin: "20px" }}>
                    <img style={{ width: "30px" }} src={logo} alt="" />
                    <b>PMS Solutions</b>
                </div>

                <div className="col-12 password-reset" style={{ display: 'flex' }}>
                    <div className="container">
                        <h2 style={{ color: "black", textAlign: 'center' }}>Reset Password</h2>
                        <p className="subtitle">To reset your password, enter the email address you use to sign in</p>
                        <br />
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" name="email" id="email" placeholder="Enter Your Email " value={email}
                                    onChange={handleEmailChange}/>
                            </div>
                            <br />
                            <div className='button-container' style={{ display: "flex",  }}>
                                <div className="button col-12" style={{ display: "flex",  }}>
                                    <button style={{ marginLeft: "auto", transform: "translatex(-30%)" }}>
                                        Get Reset Link
                                    </button>
                                </div>
                                <div className="buttonclass col-12" style={{ display: "flex", }}>
                                    <div className='button2 col-12'>
                                        <NavLink to="/adminlogin">
                                            <button className='back-login'>Back to Login </button>
                                        </NavLink>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </div>
                    <br />
                </div>
            </div>
            <div className="toast">
                <ToastContainer />
            </div>
        </>

    )
}

export default Resetpassword
