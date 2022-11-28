import { useState } from 'react'
import './SignUp.scss'
import axios from 'axios'
import { postRegister } from '../services/apiService'

const Signup = props => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const validateEmail = email => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }

  const handleSignup = async () => {
    //validate
    const isValidEmail = validateEmail(email)
    if (!isValidEmail) {
      alert('Invalid email!!!')
      return
    }

    if (!password) {
      alert('Password can not be blank!')
      return
    }

    if (!fullName) {
      alert('Fullname can not be blank!')
      return
    }

    //submit api
    let res = await postRegister(fullName, email, password)
    console.log('>>>>>check res: ', res)
    if (res.data && res.data.statusCode === 201) {
      alert('Register succcessfully!')
      //nav
    }

    if (res.data && res.data.statusCode !== 201) {
      alert('Email already exists!')
    }
  }

  return (
    <div className="signup-container">
      <div className="header col-4 mx-auto">Register</div>
      <div className="content-form col-4 mx-auto">
        <div className="form-group">
          <label>Full name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter name "
            value={fullName}
            onChange={event => setFullName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email "
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password "
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </div>

        <button type="submit" className="button" onClick={() => handleSignup()}>
          Register
        </button>
        <p className="forgot-password">
          Already registered <a href="#">log in?</a>
        </p>
      </div>
    </div>
  )
}

export default Signup
