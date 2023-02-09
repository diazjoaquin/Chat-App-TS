import React from 'react'

type Props = {}

function Search({}: Props) {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find an user ...'/>
      </div>
      <div className="userChat">
        <img src="" alt="" />
        <div className="userChatInfo">
          <span>
            Joaco
          </span>
        </div>
      </div>
    </div>
  )
}

export default Search