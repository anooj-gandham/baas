import React, { useState } from "react";
import "./Navbar.css";

interface NavbarProps {
    username: string;
}

const Navbar: React.FC<NavbarProps> = ({ username }) => {
    const [showUserMenu, setShowUserMenu] = useState(false);

    const toggleUserMenu = () => {
        setShowUserMenu(!showUserMenu);
    };

    const handleLogout = () => {
        // Handle logout logic here
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="/static/images/logoWords.png" alt="Schematiq Logo" loading="lazy" />
            </div>
            <div className="navbar-icons">
                <div className="navbar-icon">
                    <img src="/static/icons/home.svg" alt="Home" className="navbar-icon-img" />
                    <span className="icon-text">Home</span>
                </div>
                <div className="navbar-icon">
                    <img src="/static/icons/textbook.svg" alt="Textbook" className="navbar-icon-img" />
                    <span className="icon-text">Textbook</span>
                </div>
                <div className="navbar-icon">
                    <img src="/static/icons/notes.svg" alt="Notes" className="navbar-icon-img" />
                    <span className="icon-text">Notes</span>
                </div>
            </div>
            <div className="navbar-user">
                <div className="navbar-user-icon" onClick={toggleUserMenu}>
                    <img src="/static/icons/user.svg" alt="" className="navbar-icon-img" />
                </div>
                {showUserMenu && (
                    <div className="navbar-user-menu bg-purple-400">
                        <div className="navbar-user-details">
                            <div>Username: {username}</div>
                            <div>Email: john.doe@example.com</div>
                        </div>
                        <div className="navbar-user-logout" onClick={handleLogout}>
                            Logout
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
