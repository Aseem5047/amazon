import React from 'react'
import { Link } from 'react-router-dom'
import './AccountInfo.css'
import { AccountinfoText } from './AccountInfoText'
const AccountInfo = () => {
    return (
        <>

            <div className="accountInfo_content">
                <div className="user_info">
                    <span className="your_account">Your Account</span>
                    <div className="user_info_content">
                        {AccountinfoText.map((item, id) => (
                            <>
                                <Link to={`${item.link}`} key={id}>
                                    <div className="info_box">
                                        <img src={item.image} alt="" />
                                        <div className="info_text">
                                            <span style={{ fontSize: "1.1rem" }}>{item.title}</span>
                                            <span style={{ fontSize: "0.85rem" }}>{item.info}</span>
                                        </div>
                                    </div>
                                </Link>
                            </>
                        ))}
                    </div>

                </div>
            </div>

        </>
    )
}

export default AccountInfo