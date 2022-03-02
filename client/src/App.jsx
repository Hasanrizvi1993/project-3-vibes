import './stylesheets/index.scss';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Profile }from './pages/Profile';
import { Login }from './pages/Login';
import { Register }from './pages/Register';
import { Feed } from './components/Timeline';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
