import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 768) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        MZT <i className="fab fa-typo3" />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/code' className='nav-links' onClick={closeMobileMenu}>
                                Code
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/art' className='nav-links' onClick={closeMobileMenu}>
                                Art
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline' 
                        onClick={(e) => {
                            e.preventDefault();
                            // window.location.href='https://github.com/Tantime';
                            window.open('https://github.com/Tantime', '_blank');
                        }}
                        >GitHub &nbsp;
                        <i class="fa-brands fa-github"></i>
                    </Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar