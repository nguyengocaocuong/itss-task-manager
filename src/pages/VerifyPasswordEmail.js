import React, { useState } from 'react'
import './VerifyPasswordEmail.scss'
import { resetPassword } from '../services/resetpassService'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { useSearchParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function VerifyPasswordEmail() {
  let [password, setPassword] = useState(null)
  let [cpassword, setCpassword] = useState(null)

  let navigate = useNavigate()

  const [searchParams, setSearchParams] = useSearchParams()

  async function handleBtnResetPassword() {
    let token = searchParams.get('token')
    if (cpassword === password) {
      let res = await resetPassword({
        resetToken: token,
        newPassword: password
      })
      if (res && res.statusCode === 200) {
        toast.success('パスワードのリセット成功')
        setTimeout(function () {
          return navigate('/')
        }, 3000)
      } else {
        toast.error('パスワードのリセットに失敗')
      }
    } else {
      toast.error('同じパスワードを入力してください')
    }
  }

  let handleBackIcon = () => {
    return navigate('/')
  }

  return (
    <>
      <div className="verify-email-container">
        <div className="verify-email-body">
          <div className="e-title">
            <span className="e-title-icon" onClick={handleBackIcon}>
              <ArrowBackIosIcon />
            </span>
            <span className="e-title-span">パスワードの再設定</span>
          </div>
          <div className="verify-email-content">
            新しいパスワードを入力してください
            <div className="form-group">
              <label className="email-label">パスワード：</label>
              <input
                className="form-control"
                type="password"
                value={password}
                onChange={event => setPassword(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="email-label">再度確認：</label>
              <input
                className="form-control"
                type="password"
                value={cpassword}
                onChange={event => setCpassword(event.target.value)}
              />
              {cpassword !== '' && cpassword !== password && (
                <span className="c-password-span">同じパスワードを入力してください</span>
              )}
            </div>
            <div className="e-btn-body">
              <button className="btn-submit" onClick={handleBtnResetPassword}>
                パスワードリセット
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default VerifyPasswordEmail
