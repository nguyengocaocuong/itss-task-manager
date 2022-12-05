import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/styles/Avatar.scss'
function Avatar() {
  return (
    <div className="avatar">
      avatar
      <Link to={'/profile'}>Profile</Link>
    </div>
  )
}

export default Avatar
