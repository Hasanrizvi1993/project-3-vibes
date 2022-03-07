import './stylesheets/index.scss';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { Navigate, Routes, Route } from 'react-router-dom'
import { Profile }from './pages/Profile';
import { Login }from './pages/Login';
import { Register }from './pages/Register';
import { useAuth } from "./context/AuthContext";

function App() {
// current logged in user
const { currentUser } = useAuth();


  return (
    <div className="App">
    <div className='page-background'></div>
    <h1 className='master-logo'>VIBE$</h1>
      <Routes>
        <Route path="/" element={currentUser ? <Home /> : <Register />} />
        <Route path="/profile/:userName" element={currentUser ? <Profile /> : <Register />} />
        <Route path="/login" element={currentUser ? <Navigate to={"/"} /> : <Login />} />
        <Route path="/register" element={currentUser ? <Navigate to={"/"} /> : <Register />} />
     </Routes> 
    </div>
  );
}

export default App;
