import './stylesheets/index.scss';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { Navigate, Routes, Route } from 'react-router-dom'
import { Profile }from './pages/Profile';
import { Login }from './pages/Login';
import { Register }from './pages/Register';
import { ThemeProvider } from "styled-components";
import GlobalStyles from './components/DarkModeToggle';
import {lightTheme, darkTheme} from './components/DarkModeToggle/themes';
import { useState } from 'react';
import { useAuth } from "./context/AuthContext";

function App() {
// current logged in user

  const { currentUser } = useAuth();

  
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <div className="App">
            <GlobalStyles />
            <div className='page-background'></div>
            <label className='switch'>
              <input type='checkbox' onChange={themeToggler}></input>
              <span className='slider'></span>
            </label>
            <h1 className='master-logo'>VIBES</h1>
            <Routes>
              <Route path="/" element={currentUser ? <Home /> : <Register />} />
              <Route path="/profile/:userName" element={currentUser ? <Profile /> : <Register />} />
              <Route path="/login" element={currentUser ? <Navigate to={"/"} /> : <Login />} />
              <Route path="/register" element={currentUser ? <Navigate to={"/"} /> : <Register />} />
            </Routes> 
      </div>
    </ThemeProvider>
  );
}

export default App;
