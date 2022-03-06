import React from 'react';
import '../../stylesheets/index.scss';
import { LocationOn } from '@material-ui/icons';
import { useAuth } from '../../context/AuthContext';

export const Sidebar = () => {
  const { currentUser } = useAuth()


  return (
    <div className="background-card">
    <div className="side-bar" >
        <div className="side-bar-wrapper">
            <div className="side-bar-top">
              <img className="side-bar-img" src="/assets/staticImages/no_pf_img.png"  />

              <h3 className="side-bar-username">{currentUser && currentUser.name}</h3>
              <LocationOn htmlColor='seagreen' style={{fontSize: "24px"}} />
              <span className='side-bar-location'>{currentUser && currentUser.location}</span>
            </div> 
            <hr className='side-bar-divider'/>
            <div className="side-bar-center">
              <div  className="side-bar-label">NOW PLAYING</div>
              <div><iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/playlist/1479458365" width="200" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>

                  </div>
            </div>
            <hr className='side-bar-divider'/>
            <div className="side-bar-bottom">
                <div className="side-bar-label">TOP ARTISTS</div>
                <ul className="side-bar-top-artists">
                    <li className="top-artist">BILLY JOEL</li>
                    <li className="top-artist">FLEETWOOD MAC</li>
                    <li className="top-artist">THE EAGLES</li>
                    <li className="top-artist">LUCIUS</li>
                </ul>
            </div>
        </div>   
    </div>
    </div>
  )
}
