import './stylesheets/index.scss';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Profile }from './pages/Profile';
import { Login }from './pages/Login';
import { Register }from './pages/Register';
import { Feed } from './components/Timeline';
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "styled-components";
import GlobalStyles from './components/DarkModeToggle';
import {lightTheme, darkTheme} from './components/DarkModeToggle/themes';
import { useState } from 'react';

function App() {
  
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <div className="App">
        <BrowserRouter>
          <AuthProvider>
            <GlobalStyles />
            <div className='page-background'></div>
            <label className='switch'>
              <input type='checkbox' onChange={themeToggler}></input>
              <span className='slider'></span>
            </label>
            <h1 className='master-logo'>VIBE$</h1>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile/:userName" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
