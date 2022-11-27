import React, { useState } from 'react'
import './Resetpass.scss'
import { forgotPassword } from '../services/resetpassService'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Resetpass() {
  let [email, setEmail] = useState(null)

  let navigate = useNavigate()

  async function handleSubmit() {
    if (email) {
      let res = await forgotPassword({
        email: email,
        returnUrl: 'http://localhost:3000/reset-password'
      })
      if (res && res.statusCode === 200) {
        toast.success('メールを確認してパスワードをリセットしてください')
        setTimeout(function () {
          return navigate('/')
        }, 3000)
      } else {
        toast.error('エラーが発生')
      }
    } else {
      toast.error('メールアドレスを入力してください')
    }
  }

  function handleBackIcon() {
    return navigate('/')
  }

  return (
    <div className="resetpass-container">
      <div className="resetpass-body">
        <div className="rp-title">
          <span className="rp-title-icon" onClick={handleBackIcon}>
            <ArrowBackIosIcon />
          </span>
          <span className="rp-title-span">パスワードの再設定</span>
        </div>
        <div className="resetpass-content">
          登録されているメールアドレスを入力してください
          <div className="form-group">
            <label className="email-label">メールアドレス：</label>
            <input
              value={email}
              className="form-control"
              type="email"
              onChange={event => setEmail(event.target.value)}
            />
          </div>
          <div className="rp-btn-body">
            <button className="btn-submit" onClick={handleSubmit}>
              次へ
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Resetpass
