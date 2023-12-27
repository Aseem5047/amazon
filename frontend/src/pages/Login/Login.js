import React, { useState, useEffect } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import AmazonLogo from '../../Amazon_Logo.png'
import { useSelector, useDispatch } from 'react-redux'
import { loginInitiate } from '../../redux/actions'
import { useAlert } from "react-alert";
import { auth, provider } from '../../utils/Firebase'

// import backgroundLogo from './login-background.jpg'

const Login = () => {

    const alert = useAlert();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { user } = useSelector((state) => state.data);
    // console.log(user);

    let dispatch = useDispatch();
    let history = useHistory();

    useEffect(() => {

        if (user) {
            history.push("/")
            alert.success("Successfully logged in");
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, dispatch])

    const signIn = (e) => {
        e.preventDefault();
        dispatch(loginInitiate(email, password))

        setEmail("");
        setPassword("");
    }

    const handleAuth = () => {
        if (!user) {
            auth
                .signInWithPopup(provider)
                .then(() => {
                    history.push("/");
                })
                .catch(() => {
                    setEmail('');
                    setPassword('');
                    alert.error("Logging In Failed");
                })
        }
    };

    console.log(user);

    return (
        // <div className="login" style={{backgroundImage:`url(${backgroundLogo}`}}>
        <div className="login">
            <Link to="/">
                <img src={AmazonLogo} alt="Amazon" className="login-logo" />
            </Link>

            <div className="login-container">
                <h1>Sign In</h1>

                <form>
                    <h5>E-Mail</h5>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Mail Address" />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />

                    <button type="submit" onClick={signIn} className="login-signIn">Sign In</button>
                </form>
                <p>Sign In using Google ? </p>
                <button onClick={handleAuth} type="submit" className="login-signIn">Google Sign In</button>

                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
            </div>
            <p>New to Amazon ?</p>
            <Link to="/register">
                <button className="login-register">Create Your Amazon Account</button>
            </Link>
        </div>
    )
}

export default Login
