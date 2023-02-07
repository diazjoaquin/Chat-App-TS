import React from 'react'
import Chat from '../components/Chat';
import Sidebar from '../components/Sidebar';
import '../styles/styles.scss';

type Props = {}

function Home({}: Props) {
  return (
    <div className='home'>
        <div className="container">
            <Sidebar/>
            <Chat/>
        </div>
    </div>
    
  )
}

export default Home;