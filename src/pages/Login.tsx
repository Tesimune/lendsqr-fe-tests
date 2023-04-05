import AppLogo from '../components/AppLogo'
import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Login() {
    const [show, setShow] = useState(false);


    return (
      <div className="login__page">
        <div className="wrapper">
            <div className="logo_container">
            <AppLogo />
            </div>

            <div className="main">
                
                <div className="mockup_container relative w-12">
                    <img src='/images/mockup.svg' alt="MOCKUP" />
                </div>

                <div className="form__wrapper">
                    <h1 className="heading">Welcome!</h1>
                    <p className="paragraph">Enter Login Details</p>

                    <form className="form">
                        <input type="text" placeholder="Email Address" className="form_input" />
                        <div className="input_box">
                            <input type={show ? "text" : "password"} placeholder="Password" />
                            <button type="button" onClick={() => setShow(!show)}>
                                {show ? "Hide" : "Show"}
                            </button>
                        </div>
                        <a href="#/" className="forgot_password">Forgot password?</a>
                        <Link to='/dashboard' className="submit_btn">
                            Log in
                        </Link>
                    </form>
                </div>
            </div>
        </div>
      </div>
    )
}