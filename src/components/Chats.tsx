import React from 'react'

type Props = {}

export default function Chats({}: Props) {
  return (
    <div className='chats'>
      <div className="userChat">
        <img src="" alt="" />
        <div className="userChatInfo">
          <span>
            Pepe
          </span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src="" alt="" />
        <div className="userChatInfo">
          <span>
            Ricardo
          </span>
          <p>Bye!!</p>
        </div>
      </div>
      <div className="userChat">
        <img src="" alt="" />
        <div className="userChatInfo">
          <span>
            Juan
          </span>
          <p>See u</p>
        </div>
      </div>
    </div>
  )
}