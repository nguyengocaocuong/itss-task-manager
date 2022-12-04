import { useState } from 'react'
import '../assets/styles/Signin.scss'
import { signIn } from '../services/apiService'
import { Link, useNavigate } from 'react-router-dom'

const Signin = props => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const validateEmail = email => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }

  const handleSignin = async () => {
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

    //submit api
    let res = await signIn(email, password)
    // console.log('>>>>>check res: ', res);
    if (res.data && res.data.statusCode === 201) {
      localStorage.setItem('user', JSON.stringify(res.data))
      navigate('/')
      //nav
    }

    if (res.data && res.data.statusCode !== 201) {
      alert('Email already exists!')
    }
  }

  return (
    <div className="signup-container">
      <div className="header col-4 mx-auto">サインイン</div>
      <div className="content-form col-4 mx-auto">
        <div className="form-group">
          <label>メールアドレス</label>
          <input
            type="email"
            className="form-control"
            placeholder="メールアドレスを入力してください"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label>パスワード</label>
          <input
            type="password"
            className="form-control"
            placeholder="パスワードを入力してください"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </div>

        <button type="submit" className="button" onClick={() => handleSignin()}>
          ログイン
        </button>
        <p className="forgot-password">
          <Link to={'/reset-pass'}>パスワードを忘れた方?</Link>
        </p>
        <p className="register">
          アカウントがない方?
          <Link to={'/sign-up'}>サインアップ</Link>
        </p>
      </div>
    </div>
  )
}

export default Signin
