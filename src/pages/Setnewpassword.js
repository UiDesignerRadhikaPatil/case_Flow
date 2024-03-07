import React, { useState, useEffect } from 'react';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { TbAlertSquareRounded } from "react-icons/tb";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from "./static/logo.png";
import '../pages/static/setnewpassword.css'

function Setnewpassword() {
    const [passShow, setPassShow] = useState(false);
    const [cpassShow, setCPassShow] = useState(false);
    const [inppass, setInppass] = useState({
        password: "",
        confirmPassword: "",
    });

    const [hasNumber, setHasNumber] = useState(false);
    const [hasLetter, setHasLetter] = useState(false);
    const [hasMinLength, setHasMinLength] = useState(false);

    useEffect(() => {
        setHasNumber(/\d/.test(inppass.password));
        setHasLetter(/[a-zA-Z]/.test(inppass.password));
        setHasMinLength(inppass.password.length >= 8);
    }, [inppass.password]);

    const setValP = (e) => {
        const { name, value } = e.target;
        setInppass(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const submitPassword = async (e) => {
        e.preventDefault();

        const { password, confirmPassword } = inppass;

        if (password === "") {
            toast.error("Password is required!", { position: "top-right" });
        } else if (password.length < 8) {
            toast.error("Password must be at least 8 characters!", { position: "top-right" });
        } else if (confirmPassword === "") {
            toast.error("Confirm password is required!", { position: "top-right" });
        } else if (confirmPassword.length < 8) {
            toast.error("Confirm password must be at least 8 characters!", { position: "top-right" });
        } else if (password !== confirmPassword) {
            toast.error("Password and Confirm password do not match!", { position: "top-right" });
        } else {
            toast.success("Password set successfully!", { position: "top-right" });
        }
        console.log(inppass)
    };


    const handlePasswordPaste = (event) => {
        const pastedPassword = event.clipboardData.getData('text/plain');
        setInppass(prevState => ({
            ...prevState,
            password: pastedPassword,
            confirmPassword: pastedPassword,
        }));
    };

    return (
        <>
            <div className="col-12">
                <div style={{ margin: "20px" }}>
                    <img style={{ width: "30px" }} src={logo} alt="" />
                    <b>PMS Solutions</b>
                </div>

                <div className="col-12 new-password" style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className="container">
                        <h2 style={{ color: "black", textAlign: 'center' }}>Reset Password</h2>

                        <form onSubmit={submitPassword}>
                            <div className='new-pass col-6'>
                                <div className='pass-input'>
                                    <div className="form-group" style={{ position: 'relative' }}>
                                        <label htmlFor="password">Password:</label>
                                        <input type={passShow ? "text" : "password"} name="password" id="password" placeholder="Enter Your password" value={inppass.password} onChange={setValP} />
                                        <div style={{ position: 'absolute', top: '80%', transform: 'translateY(-50%)', right: '10px', cursor: 'pointer' }} onClick={() => setPassShow(!passShow)}>
                                            {!passShow ? <FaEyeSlash /> : <FaEye />}
                                        </div>
                                    </div>

                                    <div className="form-group" style={{ position: 'relative' }}>
                                        <label htmlFor="confirmPassword">Confirm password:</label>
                                        <input type={cpassShow ? "text" : "password"} name="confirmPassword" id="confirmPassword" placeholder="Enter Your password" value={inppass.confirmPassword} onChange={setValP} onPaste={handlePasswordPaste} />
                                        <div style={{ position: 'absolute', top: '80%', transform: 'translateY(-50%)', right: '10px', cursor: 'pointer' }} onClick={() => setCPassShow(!cpassShow)}>
                                            {!cpassShow ? <FaEyeSlash /> : <FaEye />}
                                        </div>
                                    </div>
                                </div>

                                <div className="newbutton-container" style={{ display: "flex", marginTop: '3%' }}>
                                    <button>
                                        Set new password
                                    </button>
                                </div>
                            </div>

                            <div className='info-pass col-6' style={{ fontSize: '16px', }}>
                                <div style={{ marginBottom: '5%' }}>
                                    <h6>Your password must contain :</h6>
                                </div>

                                <div style={{ display: 'flex', marginLeft: '20%' }}>
                                    <TbAlertSquareRounded style={{ color: hasNumber ? 'green' : 'red', marginRight: '2%' }} />
                                    <h6>a number</h6>
                                </div>

                                <div style={{ display: 'flex', marginLeft: '20%', marginTop: '5%' }}>
                                    <TbAlertSquareRounded style={{ color: hasLetter ? 'green' : 'red', marginRight: '2%' }} />
                                    <h6>a letter</h6>
                                </div>

                                <div style={{ display: 'flex', marginLeft: '20%', marginTop: '5%' }}>
                                    <TbAlertSquareRounded style={{ color: hasMinLength ? 'green' : 'red', marginRight: '2%' }} />
                                    <h6>at least 8 characters</h6>
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
    );
}

export default Setnewpassword;
