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
                <div className="row">
                    <div className="col-8 offset-2">
                        <ul className="navbar-list">
                            <li>
                                <Link to='/' className="navbar-link">Home</Link>
                            </li>
                            <li>
                                <Link to='/dishes' className="navbar-link">Dishes</Link>
                            </li>

                            {isAuth &&
                                <li>
                                    <Link to='/recipes/create-new-recipe' className="navbar-link">Add Recipe</Link>
                                </li>
                            }
                        </ul>
                    </div>
                    {!isAuth &&
                        <div className="col-2">
                            <ul className="navbar-list">
                                <li>
                                    <Link to='/login' className="navbar-link">Log In</Link>
                                </li>
                                <li>
                                    <Link to='/register' className="navbar-link">Sigh Up</Link>
                                </li>
                            </ul>
                        </div>
                    }
                    {isAuth &&
                        <div className="col-2">
                            <ul className="navbar-list">
                                <li>
                                    <Link to='/' className="navbar-link" onClick={handleLogout}>Log out</Link>
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