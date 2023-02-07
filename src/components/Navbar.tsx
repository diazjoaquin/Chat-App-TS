import React from 'react'

type Props = {}

function Navbar({}: Props) {
  return (
    <div className='navbar'>
      <span className="logo">LOGO</span>
      <div className="user">
        <img src="" alt=""/>
        <span>Joaco</span>
        <button>Log Out</button>
      </div>
    </div>
  )
}

export default Navbar