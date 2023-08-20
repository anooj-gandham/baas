import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Read from './pages/read/Read';
import Home from './pages/home/Home';
import Landing from './pages/landing/Landing';
import Temp from './pages/temp/Temp';

import './App.css';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <GoogleOAuthProvider
      clientId="232926117165-gk54hr1h392ulqsbt95ui8891r3u8g1h.apps.googleusercontent.com"
    >
      <div className="App">
        <Router>
          <Routes>
            <Route
              path="*"
              element={
                <Landing
                  isAuthenticated={isAuthenticated}
                  setIsAuthenticated={setIsAuthenticated}

                />
              }
            />
            {isAuthenticated ? (
              <>
                <Route path="/home" element={<Home />} />
                <Route path="/read" element={<Read />} />
                <Route path="/temp" element={<Temp />} />
              </>
            ) :
              null
            }
          </Routes>
        </Router>
      </div>
    </GoogleOAuthProvider>
  );
};

export default App;

