import { createContext, useContext, useState } from 'react';

interface User {
    id: string;
    email: string;
    name: string;
    picture: string;
}

interface State {
    isAuthenticated: boolean;
    user: User | null;
}

interface StateContextProps extends State {
    setAuthentication: (isAuthenticated: boolean) => void;
    setUser: (user: User | null) => void;
}

const initialState: State = {
    isAuthenticated: false,
    user: null,
};

const StateContext = createContext<StateContextProps>({
    ...initialState,
    setAuthentication: () => { },
    setUser: () => { },
});

const StateProvider: React.FC = (children: any) => {
    const [isAuthenticated, setIsAuthenticated] = useState(initialState.isAuthenticated);
    const [user, setUser] = useState<User | null>(initialState.user);

    const setAuthentication = (isAuthenticated: boolean) => {
        setIsAuthenticated(isAuthenticated);
    };

    const setUserDetails = (user: User | null) => {
        setUser(user);
    };

    return (
        <StateContext.Provider
            value={{
                isAuthenticated,
                user,
                setAuthentication,
                setUser: setUserDetails,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

const useStateContext = () => {
    return useContext(StateContext);
};

export { StateProvider, useStateContext };
