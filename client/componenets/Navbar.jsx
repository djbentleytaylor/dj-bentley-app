import  { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import NavBarLogo from "../assets/NewLogo.png"

export default function Navbar() {

    const [toggle, setToggle] = useState(false)
 
    return (
        <>
            <div className='navbar'>

                <nav className='nav-links'>
                    <img src={NavBarLogo} className='logo' />
                    <div className="navItems">
                        <Link
                            activeClass="active"
                            className="nav-link"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={600}
                        >Home</Link>
                        <Link
                            activeClass="active"
                            className="nav-link"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={600}
                        >About</Link>
                        <Link
                            activeClass="active"
                            className="nav-link"
                            to="bookingForm"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={600}
                        >Inquire</Link>
                        <Link
                            activeClass="active"
                            className="nav-link"
                            to="reviews"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={600}
                        >Reviews</Link>
                        <Link
                            activeClass="active"
                            className="nav-link"
                            to="mixPlayer"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={600}
                        >Mixes</Link>
                        <Link
                            activeClass="active"
                            className="nav-link"
                            to="galleryImage"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={600}
                        >Gallery</Link>
                    </div>
                </nav>
            </div>

            {/* Dropdown menu for smaller screen sizes */}

            <div className='dropdown'>

                <nav className='drop-links'>
                    <img src={NavBarLogo} className='logo' />

                    <div className="menuToggle" onClick={() => setToggle(prevToggle => !prevToggle)}>Menu</div>

                    {toggle &&
                        <div className="dropItems">
                            <Link
                                activeClass="active"
                                className="drop-link"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={600}
                                onClick={() => setToggle(prevToggle => !prevToggle)}
                            >Home</Link>
                            <Link
                                activeClass="active"
                                className="drop-link"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={600}
                                onClick={() => setToggle(prevToggle => !prevToggle)}
                            >Bio</Link>
                            <Link
                                activeClass="active"
                                className="drop-link"
                                to="bookingForm"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={600}
                                onClick={() => setToggle(prevToggle => !prevToggle)}
                            >Contact</Link>
                            <Link
                                activeClass="active"
                                className="drop-link"
                                to="reviews"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={600}
                                onClick={() => setToggle(prevToggle => !prevToggle)}
                            >Reviews</Link>
                            <Link
                                activeClass="active"
                                className="drop-link"
                                to="mixPlayer"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={600}
                                onClick={() => setToggle(prevToggle => !prevToggle)}
                            >DJ Mixes</Link>
                            <Link
                                activeClass="active"
                                className="drop-link"
                                to="galleryImage"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={600}
                                onClick={() => setToggle(prevToggle => !prevToggle)}
                            >Gallery</Link>
                        </div>
                    }
                </nav>
            </div>
        </>
    )
}