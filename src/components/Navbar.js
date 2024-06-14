import {Link, useNavigate} from "react-router-dom";
import {IoMdClose} from "react-icons/io";
import {IoHomeOutline} from "react-icons/io5";
import {LiaBarsSolid} from "react-icons/lia";
import {useState} from "react";
import {isUserLoggedIn, logout} from "../service/AuthService";


const Navbar = () => {

    const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);
    const isAuth = isUserLoggedIn();
    let navigate = useNavigate();

    const handleHamburgerClick = () => {
        setIsHamburgerClicked(!isHamburgerClicked);
    }

    function handleHomeClick() {
        navigate('/');
    }

    function handleLogout() {
        logout();
        navigate('/');
    }

    return (
        <>
            <nav className='top-navbar'>
                <IoHomeOutline className="home-menu" size={45} onClick={handleHomeClick}/>
                <div className="d-flex align-items-center justify-content-center">

                    <ul className="navbar-list m-0 p-0">
                        <li>
                            <Link to='/' className="navbar-link px-5">Home</Link>
                        </li>
                        <li>
                            <Link to='/dishes' className="navbar-link px-5">Dishes</Link>
                        </li>
                        {isAuth &&
                            <li>
                                <Link to='/recipes/create-new-recipe' className="navbar-link px-5">Add Recipe</Link>
                            </li>
                        }
                    </ul>

                    {!isAuth &&
                        <div className="d-flex">
                            <ul className="navbar-list m-0 p-0">
                                <li>
                                    <Link to='/login' className="navbar-link px-5">Log In</Link>
                                </li>
                                <li>
                                    <Link to='/register' className="navbar-link px-5">Sigh Up</Link>
                                </li>
                            </ul>
                        </div>
                    }
                    {isAuth &&
                        <div className="d-flex">
                            <ul className="navbar-list m-0 p-0">
                                <li>
                                    <Link to='/' className="navbar-link px-5" onClick={handleLogout}>Log out</Link>
                                </li>
                            </ul>
                        </div>
                    }

                </div>

                {isHamburgerClicked ?
                    <IoMdClose className="hamburger-menu" onClick={handleHamburgerClick} size={45}/> :
                    <LiaBarsSolid className="hamburger-menu" onClick={handleHamburgerClick} size={45}/>
                }

            </nav>
            <div className={isHamburgerClicked ? 'visible-side-menu' : 'invisible-side-menu'}>
                <div className="slide-menu-items">
                    <div className="slide-menu-item">
                        <Link to='/main-dishes' className="slide-menu-link">Main Dishes</Link>
                    </div>
                    <div className="slide-menu-item">
                        <Link to='/salads' className="slide-menu-link">Salads</Link>
                    </div>
                    <div className="slide-menu-item">
                        <Link to='/soups' className="slide-menu-link">Soups</Link>
                    </div>
                    <div className="slide-menu-item">
                        <Link to='/desserts' className="slide-menu-link">Desserts</Link>
                    </div>
                    <div className="slide-menu-item">
                        <Link to='/beverages' className="slide-menu-link">Beverages</Link>
                    </div>
                    <div className="version-item">
                        <span className="version">version 1.0</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export {Navbar}