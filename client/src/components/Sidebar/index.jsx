import React from 'react';
import './sidebar.scss';
import { LocationOn } from '@material-ui/icons';
import { useAuth } from '../../context/AuthContext';

export const Sidebar = () => {
  return (
    <div className="sidebar" >
        <div className="sidebar-wrapper">
            <div className="sidebar-top">
              <img className="sidebar-img" src="/assets/staticImages/no_pf_img.png"  />
              <h3 className="sidebar-username">Dummy User</h3>
              <LocationOn htmlColor='seagreen' style={{fontSize: "24px"}} />
              <span className='sidebar-location'>San Francisco, CA</span>
            </div> 
            <hr className='sidebar-divider'/>
            <div className="sidebar-center">
                <span className="sidebar-label">NOW PLAYING</span>
                <h2>NEED MUSIC PLAYER COMPONENT?</h2>
            </div>
            <hr className='sidebar-divider'/>
            <div className="sidebar-bottom">
                <span className="sidebar-label">TOP ARTISTS</span>
                <ul className="sidebar-top-artists">
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
