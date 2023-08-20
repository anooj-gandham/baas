import React, { useState, useEffect } from 'react';
import { getJwt, decodeJwt } from '../../utils/jwt';
import { User } from '../../components/ui/UserProfile/UserProfile';

const Sidepanel: React.FC = () => {
    const [user, setUser] = useState<User>({
        id: "",
        name: "",
        email: "",
        picture: ""
    });

    useEffect(() => {
        // Get jwt from cookies
        const jwt = getJwt();
        
        // Decode jwt
        if (jwt) {
            setUser(decodeJwt(jwt));
        } else {
            // redirect to login page
            window.location.href = "/";
        }
    }, []);  // Empty dependency array ensures this runs once when component mounts

    return (
        <div className="side-panel">
            <div className="side-panel-inner">
                <div className="side-panel-top-logo">
                    <img src="/static/images/logoWords.png" alt="Schematiq Logo" loading="lazy" />
                </div>
                <div className="side-panel-top-search">
                    <input type="text" placeholder="Search" />
                </div>
                <div className="side-panel-menu">
                    <div className="side-panel-menu-item">
                        <img src="/static/icons/textbook.svg" alt="Textbook" className="side-panel-icon-img" />
                        <span className="icon-text">Textbook</span>
                    </div>
                    <div className="side-panel-menu-item">
                        <img src="/static/icons/notes.svg" alt="Notes" className="side-panel-icon-img" />
                        <span className="icon-text">Notes</span>
                    </div>
                    <div className="side-panel-menu-item">
                        <img src="/static/icons/tag.svg" alt="Tags" className="side-panel-icon-img" />
                        <span className="icon-text">Tags</span>
                    </div>
                </div>
                <div className="side-panel-footer">
                    <div className="side-panel-footer-user">
                        <div className="side-panel-footer-user-icon">
                            <img src={user.picture} alt="User Profile" className="side-panel-icon-img" />
                        </div>
                        <div className="side-panel-footer-user-details">
                            <div>{user.name}</div>
                            <div>
                                <span className="side-panel-footer-user-details-email">
                                    {user.email}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidepanel;
