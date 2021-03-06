import React from 'react'
import './topbar.css'
import {Search, Person, Chat, Notifications} from '@mui/icons-material'

const Topbar = () => {
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <div className="logo">Derpface</div>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search className='searchIcon'/>
          <input placeholder='Search' className="searchInput"/>
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">TimeLine</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person/>
            <span className="topbarBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat/>
            <span className="topbarBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications/>
            <span className="topbarBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
      </div>
    </div>
  )
}

export default Topbar