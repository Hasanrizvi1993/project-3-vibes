import React from 'react'
import { NavBar } from '../../components/NavBar';
import { Sidebar } from '../../components/Sidebar';
import { Timeline } from '../../components/Timeline';
import '../../stylesheets/index.scss';

export const Home = () => {
  return (
    <div>
        <NavBar />
        <div className='home-container' >
        <Sidebar />
        <Timeline />
        </div>
    </div>
  )
}
