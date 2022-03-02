import React from 'react';
import '../../stylesheets/index.scss';
import { LocationOn } from '@material-ui/icons';

export const Sidebar = () => {
  return (
    <div className="side-bar" >
        <div className="side-bar-wrapper">
            <div className="side-bar-top">
              <img className="side-bar-img" src="/assets/staticImages/no_pf_img.png"  />
              <h3 className="side-bar-username">Dummy User</h3>
              <LocationOn htmlColor='seagreen' style={{fontSize: "24px"}} />
              <span className='side-bar-location'>San Francisco, CA</span>
            </div> 
            <hr className='side-bar-divider'/>
            <div className="side-bar-center">
                <span className="side-bar-label">NOW PLAYING</span>
                <h2>NEED MUSIC PLAYER COMPONENT?</h2>
            </div>
            <hr className='side-bar-divider'/>
            <div className="side-bar-bottom">
                <span className="side-bar-label">TOP ARTISTS</span>
                <ul className="side-bar-top-artists">
                    <li className="top-artist">Billy Joel</li>
                    <li className="top-artist">Fleetwood Mac</li>
                    <li className="top-artist">The Eagles</li>
                    <li className="top-artist">Lucius</li>
                </ul>
            </div>
        </div>   
    </div>
  )
}
