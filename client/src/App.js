import logo from './logo.svg';
import './stylesheets/style.scss';

function App() {
  return (
    <body>
        <nav className='nav-bar'>
          <span className='logo'>
            VIBES
          </span>
          <span className='icons'>
             FEED PROFILE SIGNOUT
          </span>
        </nav>
        <div className='side-bar'>
          <div className='user-name'>
            Matt Bell
          </div>
          <div className='location'>
            San Diego
          </div>
          <div className='currently-listening'>
            Now Playing
            <div className='song'>
              Never Gonna Give You Up - Rick Astley
            </div>
          </div>
          <div className='artists'>
            Top Artists
            <ol className='top-list'>
              <li>
                Neyo
              </li>
              <li>
                io
              </li>
              <li> 
                Angerfist
              </li>
              <li>
                Cascada
              </li>
              <li>
                Rezz
              </li>
            </ol>
          </div>
        </div>
        <main className='main-body'>
          <form>
              Start A Post
              <button>Publish</button>
          </form>
          <div>
              Matt Bell
              <p>
                  My favorite band Cascada is playing! Click link below to get tickets!!
              </p>
          </div>
        </main>
    </body>
  );
}

export default App;
