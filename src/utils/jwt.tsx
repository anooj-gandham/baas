import { User } from "../components/ui/UserProfile/UserProfile";

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

export { getJwt, decodeJwt };