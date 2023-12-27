// you will need link and withRouter from react router dom
import { Link, withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
import { useAlert } from "react-alert";
import './Menu.css'

// And you will need react offcanvas menu offcourse :
import OffcanvasMenu from 'react-offcanvas-menu-component';
import { logoutInitiate } from '../../redux/actions';

function Menu({ location }) {

    const { user } = useSelector(state => state.data);
    let dispatch = useDispatch();
    const alert = useAlert();

    const handleAuth = () => {

        if (user) {

            dispatch(logoutInitiate());
            alert.success("Successfully logged out")
        }
    }

    return (
        <OffcanvasMenu
            Link={Link}
            location={location}
            config={{
                width: 500,
                push: true,
            }}

            menu={[
                // basic menu item
                { text: 'Home', link: '/' },

                // menu item with submenu
                {
                    text: 'Explore', link: '/', submenu: [
                        { text: 'Cart', link: '/checkout' },
                        { text: 'Orders', link: '/orders' },
                        { text: 'Prime', link: '/prime' },
                        { text: 'Surrondings', link: '/explore' },

                    ]
                },
                {
                    text: 'Trending', link: '/trending', submenu: [
                        { text: 'Best Sellers', link: '/trending' },
                        { text: 'New Releases', link: '/newReleases' },
                    ]
                },

                {
                    text: 'Digital Devices', link: '/', submenu: [
                        { text: 'Echo & Alexa', link: '/echo&alexa' },
                        { text: 'Fire TV', link: '/echo&alexa' },
                        { text: "Audiobooks", link: '/prime' },
                        { text: "Amazon Prime Video", link: '/prime' },
                        { text: "Amazon Prime Music", link: '/prime' },
                    ]
                },

                {
                    text: 'Shop By Categories', link: '/', submenu: [
                        { text: 'Mobiles', link: '/mobiles' },
                        { text: 'Computers', link: '/computer' },
                        { text: 'Electronics', link: '/electronics' },
                        { text: "Fashion", link: '/fashion' },
                        { text: "Home & Kitchen", link: '/home&kitchen' },
                        { text: "Sports & Fitness", link: '/sports&fitness' },
                        { text: "Movie & Music", link: '/prime' },
                    ]
                },

            ]}
            header={ // you can add logo to the header for example
                <>
                    <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className="menu-logo" alt="logo" width="250" height="100" />

                    <h3 style={{ marginBottom: "0.5rem" }}>Hello,  {user ? user?.displayName?.toUpperCase() || user.email : "Guest"}</h3>
                    {/* <h3>{user ? user.email : "Guest"}</h3> */}
                    <Link to={`${user ? "/" : "/login"}`} onClick={handleAuth} className="header-link">
                        <span className="header-option2">{user ? "Sign Out" : "Sign In"}</span>
                    </Link>

                </>
            }
            footer={<Footer />}
        />
    )
}

const Footer = () => {
    return (
        <div className="social-wrap">
            <br /><br />
            <h2 style={{ textAlign: "center" }}>Social Media</h2>
            <br />
            <ul className="social">
                <li style={{ textAlign: "center" }}>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer"><i style={{ margin: "20px", fontSize: "30px" }} className="fab fa-instagram"></i></a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer"><i style={{ margin: "20px", fontSize: "30px" }} className="fab fa-twitter"></i></a>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer"><i style={{ margin: "20px", fontSize: "30px" }} className="fab fa-facebook"></i></a>
                    <a href="https://google.com" target="_blank" rel="noreferrer"><i style={{ margin: "20px", fontSize: "30px" }} className="fab fa-google"></i></a>
                    <a href="https://youtube.com" target="_blank" rel="noreferrer"><i style={{ margin: "20px", fontSize: "30px" }} className="fab fa-youtube"></i></a>
                    <a href="https://whatsapp.com" target="_blank" rel="noreferrer"><i style={{ margin: "20px", fontSize: "30px" }} className="fab fa-whatsapp"></i></a>
                </li>
            </ul>
        </div>
    )
}

export default withRouter(Menu);