import React, { useState } from 'react'

import { RiCloseLine, RiComputerLine } from 'react-icons/ri'
import { BiChevronDown, BiNews, BiMobileVibration } from 'react-icons/bi'
import { TiSortAlphabeticallyOutline } from 'react-icons/ti'
import { GiRolledCloth } from 'react-icons/gi'
import { FiTrendingUp } from 'react-icons/fi'
import { AiFillThunderbolt } from 'react-icons/ai'
import { SiPrime } from 'react-icons/si'
import { MdSportsBasketball } from 'react-icons/md'

import { Link } from 'react-router-dom'
import "./Header.css"

const Dropdown = () => {
    const [active, setActive] = useState(false)
    const options = [
        "Home", "New Releases", "Electronics", "Prime", "Mobile", "Computer", "Fashion", "Trending", "Sports & Fitness"
    ]

    const icons = [<TiSortAlphabeticallyOutline />, <BiNews />, <AiFillThunderbolt />, <SiPrime />, <BiMobileVibration />, <RiComputerLine />, <GiRolledCloth />, <FiTrendingUp />, <MdSportsBasketball />]

    return (
        <>
            <div className="mainDropdown" style={{ cursor: 'pointer' }}>
                {active ? <RiCloseLine color="#fff" size={27} onClick={() => setActive(false)} style={{ marginTop: "0.5vh" }} /> :
                    <BiChevronDown color="#fff" size={27} onClick={() => setActive(true)} style={{ marginTop: "0.5vh" }} />}

                {active &&
                    <div className="dropdownMenu">
                        <div>

                            {icons.map((icon) =>
                                <div>
                                    <span>
                                        {icon}
                                    </span>
                                </div>
                            )}
                        </div>
                        <div>
                            {options.map((option) =>
                                <Link to={`/${option.toLowerCase().split(" ").join("")}`}>
                                    <div className="option">
                                        <span>{option}</span>
                                    </div>
                                </Link>
                            )
                            }
                        </div>
                    </div>
                }

            </div>
        </>
    )
}

export default Dropdown