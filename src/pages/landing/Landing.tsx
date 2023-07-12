import React, { useState, useEffect } from 'react';
import { GoogleLogin, useGoogleOneTapLogin } from '@react-oauth/google';
import UserProfile from '../../components/ui/UserProfile/UserProfile';
import { User } from '../../components/ui/UserProfile/UserProfile';
import { postRequest } from '../../apis/PostRequest';
import './Landing.css';


interface LandingProps {
    isAuthenticated: boolean;
    setIsAuthenticated: (isAuthenticated: boolean) => void;
}

const decodeJwt = (token: string) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    const decoded = JSON.parse(window.atob(base64));
    const user: User = {
        id: decoded.sub,
        email: decoded.email,
        name: decoded.name,
        picture: decoded.picture,
    };
    return user;
};


const Landing: React.FC<LandingProps> = ({ isAuthenticated, setIsAuthenticated }) => {

    const [user, setUser] = useState<User | null>(null);

    const successLogin = async (response: any) => {
        console.log(response);
        const jwt = await response.credential;
        const user = decodeJwt(jwt);

        postRequest(process.env.REACT_APP_API_URL + "/users/validate",
            {
                body: {
                    userId: user.id,
                    email: user.email,
                }
            })
            .then((data: any) => {
                console.log(data);
                if (data.validated) {
                    console.log("User validated");
                    const expires = new Date();
                    expires.setDate(expires.getDate() + 10);
                    document.cookie = `jwt=${jwt}; expires=${expires.toUTCString()}`;
                    console.log(user);
                    setUser(user);
                    setIsAuthenticated(true);
                }
                else {
                    console.log("User not validated");
                    window.alert("The user is not registed. \nPlease try again with valid login credentials");
                }
            })
            .catch((err: any) => console.log(err));

    };

    const errorLogin = () => {
        console.log('Login Failed');
    };

    const handleLogout = () => {
        document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        setIsAuthenticated(false);
        setUser(null);
    };

    useGoogleOneTapLogin({
        onSuccess: successLogin,
        onError: errorLogin,
    });

    const getJwt = () => {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith('jwt=')) {
                return cookie.substring('jwt='.length, cookie.length);
            }
        }
        return null;
    };

    useEffect(() => {
        const jwt = getJwt();
        if (jwt) {
            setIsAuthenticated(true);
            const user = decodeJwt(jwt);
            setUser(user);
        }
    }, []);

    return (
        <div className="landing-page">
            <div className="login-logout-button-container">
                {!isAuthenticated ? (
                    <GoogleLogin onSuccess={successLogin} onError={errorLogin} shape='pill' />
                ) : (
                    <UserProfile user={user} handleLogout={handleLogout} />
                )}
            </div>
            <iframe src="./Landing.html" title="Landing Page" style={{ width: '100%', height: '100vh' }} />
        </div>
    );
};

export default Landing;
