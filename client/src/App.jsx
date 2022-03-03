import './App.scss';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Profile }from './pages/Profile';
import { Login }from './pages/Login';
import { Register }from './pages/Register';
import { Feed } from './components/Timeline';
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile/:userName" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      </Routes>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
