import React from 'react';
import '../../stylesheets/index.scss';
import { LocationOn } from '@material-ui/icons';
import { useAuth } from '../../context/AuthContext';


// BACKEND PUBLIC FOLDER UPLOADS
const PF_IMG = process.env.REACT_APP_PF_IMAGES;

export const Sidebar = () => {
  const { currentUser } = useAuth()


  return (
    <div className="background-card">
    <div className="side-bar" >
        <div className="side-bar-wrapper">
            <div className="side-bar-top">
        
              <img style={{height: '150px', width: '150px', borderRadius: '150%',}}className="side-bar-img" src={currentUser && currentUser.profileImage 
              ? PF_IMG+currentUser.profileImage : "/assets/staticImages/no_pf_img.png"} alt=""  />

              <h3 className="side-bar-username" style={{fontFamily: "Helvetica",}}>{currentUser && currentUser.name}</h3>
              <LocationOn htmlColor='seagreen' style={{fontSize: "24px"}} />
              <span className='side-bar-location' style={{fontFamily: "Helvetica",}}>{currentUser && currentUser.location}</span>
            </div> 
            <hr className='side-bar-divider'/>
            <div className="side-bar-center">
              <div  className="side-bar-label">NOW PLAYING</div>

              <div><iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/playlist/1479458365" width="100%" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>

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
