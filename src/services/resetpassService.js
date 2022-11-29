import axios from '../axios'

const forgotPassword = async data => {
  return axios.post('/auth/forgot-password', data)
}

const resetPassword = async data => {
  return axios.post('/auth/reset-password', data)
}

export { forgotPassword, resetPassword }
