import React from 'react'
import '../../assets/styles/Header.scss'
import Avatar from './Avatar'
import Search from './Search'
function Header() {
  return (
    <div id="header">
      <div className="avatar">
        <Avatar />
      </div>
      <div className="logo">Logo</div>
      <div className="search">
        <Search />
      </div>
    </div>
  )
}

export default Header
