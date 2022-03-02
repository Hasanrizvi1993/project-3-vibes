import React from 'react';
import { NavBar } from '../../components/NavBar';
import { Sidebar } from '../../components/Sidebar';
import { Timeline } from '../../components/Timeline';
import { EditProfile } from '../../components/EditProfile';
import '../../stylesheets/index.scss';

export const Profile = () => {
  return (
    <div>
      <NavBar />
      <div className='profile' >
        <Sidebar />
        <Timeline />
        <EditProfile />
      </div>
    </div>
  )
}
