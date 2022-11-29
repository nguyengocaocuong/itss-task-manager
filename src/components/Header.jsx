import { Button } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../assets/styles/Header.scss'
function Header() {
  const navigate = useNavigate()
  return (
    <div id="header">
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/sign-up'}>Sign up</Link>
        </li>
        <li>
          <Link to={'/sign-in'}>Sign in</Link>
        </li>
        <li>
          <Link to={'/reset-pass'}>Reset pass</Link>
        </li>
        <li>
          <Link to={'/verify-pass'}>Verify pass</Link>
        </li>
        <li>
          <Button
            onClick={() => {
              localStorage.clear('user')
              navigate('/sign-in')
            }}>
            Sign out
          </Button>
        </li>
      </ul>
    </div>
  )
}

export default Header
