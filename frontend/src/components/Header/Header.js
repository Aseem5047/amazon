import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './Header.css';
import { Link, useHistory } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import { useSelector, useDispatch } from "react-redux"
import { logoutInitiate } from '../../redux/actions'
import { useAlert } from "react-alert";
import Tooltip from '@mui/material/Tooltip';


import { Autocomplete, TextField } from '@mui/material';
import Dropdown from './Dropdown';

const SubMenu = () => (
    <>

        <Link to="/orders" className="Sub-header-link">
            <div className="Sub-header-option">
                <br />
                <span className="Sub-header-option1">Returns<span className="Sub-header-option2"> & Orders</span></span>

            </div>
        </Link>

        <Link to="/prime" className="Sub-header-link" id="HeaderPrime">
            <div className="Sub-header-option">
                <br />
                <span className="Sub-header-option1">Your<span className="Sub-header-option2"> Prime</span></span>

            </div>
        </Link>
    </>
)

const options = [
    'home',
    'trending',
    'mobiles',
    'electronics',
    'fashion',
    'newReleases',
    'computers',
    'sports&fitness',
    'prime',
    'home&kitchen',
];


const Header = () => {

    const [toggleMenu, setToggleMenu] = useState(false)

    const [inputValue, setInputValue] = useState('')

    const [value, setValue] = useState("home");

    const alert = useAlert();

    const { user, basket } = useSelector(state => state.data);

    let dispatch = useDispatch();

    const handleAuth = () => {

        if (user) {

            dispatch(logoutInitiate());
            alert.success("Successfully logged out")
        }
        else {
            history.push('/login')
        }
    }

    const history = useHistory();

    const onSubmit = (e) => {
        options.includes(inputValue) ? history.push(`/${inputValue}`) : history.push('/NotFound');
        e.preventDefault();
    };


    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            options.includes(inputValue) ? history.push(`/${inputValue}`) : history.push('/NotFound');
            event.preventDefault();
        }
    }

    // function handleChange(value) {
    //     history.push(`/${value}`);
    // }

    return (
        <nav className="header">
            <div className="header_firstContainer" style={{ display: 'flex', alignItems: 'center' }}>
                <Link to='/'>
                    <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon" className="header-logo" />
                </Link>

                <div id="map" className="header-option" style={{ marginRight: "-5px" }}>
                    <Link to="/explore"><LocationOnOutlinedIcon /></Link>
                </div>
                <div id="map" className="header-option">

                    <Link id="explore" to="/explore"><span className="header-option2">Your Address</span></Link>
                </div>
            </div>
            <div className="search">

                <Dropdown />

                <div className="autocompleteContainer">

                    <Autocomplete
                        className="css-1c4yh6d-MuiAutocomplete-root"
                        // disablePortal
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) => {
                            setInputValue(newInputValue);
                        }}
                        id="header-search"
                        options={options}
                        renderInput={(params) => <TextField {...params} label="Search" />}
                        onKeyDown={handleKeyDown}
                    />

                    <button id="Search" type="submit" onClick={onSubmit} onKeyDown={handleKeyDown} style={{ background: "transparent", marginTop: "5px", border: "none" }}><SearchIcon className="searchIcon" /></button>

                </div>


            </div>
            <div className="link_container">
                <Tooltip title={`${user ? "User Sign Out" : "User Log In"}`} onClick={handleAuth} className="user_image_div">
                    {user?.photoURL ? <img src={user.photoURL} alt="" className="user_image" /> : <img src="/defaultProfile.png" alt="" className="user_image" />}
                </Tooltip>
                <Link to={`${user ? "/account" : "/login"}`} className="header-link">
                    <div className="header-option userInfo">
                        <div className="userInfo_Account">
                            <span className="header-option1">Hello, {user ? user?.displayName?.toUpperCase() || user.email : "Guest"}</span>
                            <span className="header-option2">Account & Lists</span>
                        </div>
                    </div>
                </Link>

                <Link to="/orders" className="header-link">
                    <div className="header-option">
                        <span className="header-option1">Returns</span>
                        <span className="header-option2">& Orders</span>
                    </div>
                </Link>

                <Link to="/prime" className="header-link" id="HeaderPrime">
                    <div className="header-option">
                        <span className="header-option1">Your</span>
                        <span className="header-option2">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header-link">
                    <div className="navbar_text navbar__cart ">
                        <div src="" className="cart__image" id="Cart" ></div>
                        <div className="cart__item"> {basket && basket.length} </div>
                    </div>
                </Link>
            </div>

            <div className="navbar-menu">

                <div className="smallScreenCart" style={{ display: "flex", flexDirection: "row" }}>


                    <Link to="/checkout" >
                        <div className="navbar_text navbar__cart ">
                            <div src="" className="cart__image" id="Cart" ></div>
                            <div className="cart__item"> {basket && basket.length} </div>
                        </div>
                    </Link>


                    {toggleMenu ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} style={{ marginTop: "0.5vh" }} /> : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} style={{ marginTop: "0.5vh" }} />}

                    {toggleMenu &&
                        (<div className="header-nav">

                            <Link to={`${user ? "/" : "/account"}`} className="header-link">
                                <div className="userInfo">
                                    {user?.photoURL ? <img src={user.photoURL} alt="" className="user_image" /> : <img src="/defaultProfile.png" alt="" className="user_image" />}

                                    <div className="userInfo_Account">
                                        <span className="header-option1">Hello, {user ? user?.displayName?.toUpperCase() || user.email : "Guest"}</span>
                                        <span className="header-option2">Account & Lists</span>
                                    </div>
                                </div>
                            </Link>

                            <Link to={`${user ? "/" : "/login"}`} >
                                <div onClick={handleAuth} className="Sub-header-option" style={{ marginTop: "1rem" }}>
                                    <span className="Sub-header-option2">{user ? "Sign Out" : "Sign In"}</span>
                                </div>
                            </Link>

                            <SubMenu />

                            <Link to="/checkout" className="header-link">
                                <div className="navbar_text navbar__cart ">
                                    <div src="" className="cart__image" id="Cart" ></div>
                                    <div className="cart__item"> {basket && basket.length} </div>
                                    <div className="navbar_text_cart">Cart</div>
                                </div>
                            </Link>
                        </div>)
                    }
                </div>

            </div>
        </nav>
    )
}

export default Header
