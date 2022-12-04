import axios from 'axios'

const postRegister = (fullName, email, password) => {
  // const data = new FormData();
  // data.append("fullName", fullName);
  // data.append("email", email);
  // data.append("password", password);
  return axios.post(
    'https://itss-final-project.2soft.top/auth/register',
    {
      fullName: fullName,
      email: email,
      password: password
    }
    // data
  )
}

const signIn = (email, password) => {
  return axios.post('https://itss-final-project.2soft.top/auth/login', {
    email: email,
    password: password
  })
}

export { postRegister, signIn }
