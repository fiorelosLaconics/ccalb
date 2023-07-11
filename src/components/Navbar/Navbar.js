import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { scrollAnimation } from '../../utils/scrollAnimation';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }

    const handelClick = (sectionId) => {
        setClick(false);
        scrollAnimation(document.getElementById(sectionId), true)
    }


    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo'>
                    CCALB <span style={{
                        width: "67px",
                        height: "45px",
                        paddingLeft: "10px"



                    }}><img src="/icon-logo.png" alt="" /></span>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <div to='/' className='nav-links' onClick={() => handelClick("sectionOne")} >
                            About Us
                        </div>
                    </li>
                    <li className='nav-item'>
                        <div to='/services' className='nav-links' onClick={() => handelClick("sectionTwo")} >
                            Our Services
                        </div>
                    </li>
                    <li className='nav-item'>
                        <div to='/contact' className='nav-links' onClick={() => handelClick("sectionFour")} >
                            Our Process
                        </div>
                    </li>
                    <li className='nav-item'>
                        <div to='/contact' className='nav-links' onClick={() => handelClick("sectionFive")} >
                            Our Team
                        </div>
                    </li>
                    <li className='nav-item'>
                        <div to='/contact' className='nav-links' onClick={() => handelClick("form-section")} >
                            Contact Us
                        </div>
                    </li>
                </ul>

            </div>
        </nav>

    )
}

export default Navbar