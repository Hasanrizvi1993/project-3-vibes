import React from 'react'
import { NavBar } from '../../components/NavBar';
import { Sidebar } from '../../components/Sidebar';
import './home.scss';

export const Home = () => {
  return (
    <div>
        <NavBar />
        <div className='home-container' >
        <Sidebar />
        
        </div>
    </div>
  )
}
