import React, { useState,  useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiLogout } from 'react-icons/hi';
import { UserContext } from '../context/userContext';

const Navbar = () => {
    const { Logout } = useContext(UserContext);

    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        return !!(token && user);
    });

    useEffect(() => {
        const checkAuth = () => {
            const token = localStorage.getItem('token');
            const user = localStorage.getItem('user');
            setIsLoggedIn(!!(token && user));
        };

        window.addEventListener('storage', checkAuth);

        const interval = setInterval(checkAuth, 1000);

        return () => {
            window.removeEventListener('storage', checkAuth);
            clearInterval(interval);
        };
    }, []);

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setIsLoggedIn(false);

        if (Logout) Logout();
        navigate('/');
    };

    return (
        <nav className="navbar navbar-expand-lg px-3">
            <Link className="navbar-brand" to="/">
                <img src="/EVSLogo.png" alt="logo" width="100" />
            </Link>

            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link text-dark fw-bold fs-5" to="/task">Tasks</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark fw-bold fs-5" to="/category">Categories</Link>
                    </li>
                </ul>
            </div>

            <div className="ms-auto d-flex align-items-center gap-2">
                {isLoggedIn ? (
                    <button
                        className="btn d-flex align-items-center gap-2 fw-bold fs-5 px-3 py-2 transition-all"
                        style={{
                            backgroundColor: "rgb(241, 0, 0)",
                            color: "white",
                            borderRadius: "0.5rem",
                            border: "none"
                        }}
                        onClick={handleLogout}
                    >
                        <HiLogout size={20} />
                        Logout
                    </button>
                ) : (
                    <>
                        <Link className="btn btn-light text-primary fw-bold fs-5" to="/login">
                            Login
                        </Link>
                        <Link className="btn btn-outline-primary fw-bold fs-5" to="/signup">
                            Sign Up
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;