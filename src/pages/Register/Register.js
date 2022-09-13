import React, { useState, useEffect } from 'react'
import './Register.css'
import { Link, useHistory } from 'react-router-dom'
import AmazonLogo from '../../Amazon_Logo.png'
import { useSelector, useDispatch } from 'react-redux'
import { registerInitiate } from '../../redux/actions'

const Register = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { user } = useSelector((state) => state.data);

    let dispatch = useDispatch();
    let history = useHistory();

    useEffect(() => {
        if (user) {

            history.push("/")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, dispatch]);


    const register = e => {
        e.preventDefault();
        dispatch(registerInitiate(email, password));
        setEmail("");
        setPassword("");
    }

    return (
        <div className="register">
            <Link to="/">
                <img src={AmazonLogo} alt="Amazon" className="register-logo" />
            </Link>
            <div className="register-container">
                <h1>Create Account</h1>
                <form>
                    <h5>E-Mail</h5>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Mail Address" />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />

                    <button type="submit" onClick={register} className="continue">Continue</button>
                    <div className="detail">
                        <p>Already have an Account ? </p>
                        <Link to='/login' className="signin-link">
                            <p className="paragraph"> Sign In</p>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
