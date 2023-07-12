import * as React from 'react';
import { useState } from 'react';

import './UserProfile.css';

export interface User {
  id: string;
  email: string;
  name: string;
  picture: string;
}

interface UserProfileProps {
  user: User | null;
  handleLogout: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ user, handleLogout }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="user-profile">
      <button className="user-profile-button" onClick={handleModal}>
        {user ? (
          <img className="user-profile-picture" src={user.picture} alt="Profile" />
        ) : (
          <span>View Profile</span>
        )}
      </button>
      {showModal && (
        <div className="user-profile-modal">
          <div className="user-profile-modal-content">
            <span className="user-profile-close" onClick={handleModal}>
              &times;
            </span>
            <div>
              <p>Name: {user?.name}</p>
              <p>Email: {user?.email}</p>
              <img src={user?.picture} alt="Profile" />
            </div>

            <div className="user-profile-logout-button">
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
