import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../context/userContext';
import { CategoriesContext } from '../context/categoryContext';

const Navbar = () => {
    const { user, Logout } = useContext(UserContext);
    const categories = useContext(CategoriesContext);

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setDropdownOpen((prev) => !prev);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);




    return (
        <nav className="navbar navbar-expand-lg px-3">
            <Link className="navbar-brand" to="/">
                <img src="/EVSLogo.png" alt="logo" width="100" />
            </Link>

            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to="/task">Tasks</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to="/category">Categories</Link>
                    </li>
                </ul>
            </div>

            {user ? (
                <div className="ms-auto position-relative" ref={dropdownRef}>
                    <button
                        className="btn btn-outline-light dropdown-toggle d-flex align-items-center gap-2 p-1 pe-3"
                        type="button"
                        onClick={toggleDropdown}
                        aria-expanded={dropdownOpen}
                    >
                        <img
                            src={user.Image}
                            alt={user.FullName}
                            width="32"
                            height="32"
                            className="rounded-circle border border-light"
                            style={{ objectFit: 'cover' }}
                        />
                        <span className="d-none d-md-inline">{user.FullName}</span>
                    </button>

                    <ul
                        className={`dropdown-menu dropdown-menu-end shadow p-2 mt-2 ${dropdownOpen ? 'show' : ''
                            }`}
                        style={{
                            minWidth: '240px',
                            right: 0,
                            left: 'auto',
                            borderRadius: '0.5rem',
                        }}
                    >
                        <li className="px-2 py-1 d-flex align-items-center gap-2">
                            <img
                                src={user.Image}
                                alt={user.FullName}
                                width="44"
                                height="44"
                                className="rounded-circle border border-primary"
                                style={{ objectFit: 'cover' }}
                            />
                            <div>
                                <p className="mb-0 text-dark fw-semibold">{user.FullName}</p>
                                <p className="mb-0 text-dark small opacity-75">{user.Email}</p>
                            </div>
                        </li>

                        <li><hr className="dropdown-divider bg-light" /></li>

                        <li>
                            <Link
                                className="dropdown-item text-dark d-flex align-items-center gap-2"
                                to="/tasks"
                                onClick={() => setDropdownOpen(false)}
                            >
                                <HiClipboardList size={18} />
                                View Tasks
                            </Link>
                        </li>
                        <li>
                            <button
                                className="dropdown-item d-flex align-items-center gap-2"
                                style={{ backgroundColor: "rgb(241, 0, 0)", color: "white" }}
                                onClick={() => {
                                    setDropdownOpen(false);

                                    Logout()
                                }}
                            >
                                <HiLogout size={18} />
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            ) : (
                <div className="ms-auto d-flex gap-2">
                    <Link className="btn btn-light text-primary" to="/login">
                        Login
                    </Link>
                    <Link className="btn btn-outline-primary fw-semibold" to="/signup">
                        Sign Up
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;