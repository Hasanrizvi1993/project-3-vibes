import './App.scss';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>VIBE$ APP</h1>
      <Home />
    </div>
  );
}

export default App;
