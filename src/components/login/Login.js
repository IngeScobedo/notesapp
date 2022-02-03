import { useState } from 'react'
import noteService from '../../services/app'
import ConectWalletButton from './ConectWalletButton'

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('Please login')

  const handleLogin = (values) => {
    values.preventDefault()
    const loginValues = {
      username: values.target.username.value,
      password: values.target.password.value
    }

    noteService.login(loginValues)
      .then(loggedResponse => {
        if (loggedResponse.status === 200) {
          localStorage.setItem('userType', 'standard')
          setErrorMessage(loggedResponse.message)
          localStorage.setItem('loggedNoteAppUser', JSON.stringify(loggedResponse.token))
          window.location.reload()
        } else {
          setErrorMessage(loggedResponse.error)
        }
      })
      .catch(err => console.error(err))
  }

  return (
      <>
      <h2>{errorMessage}</h2>
        <form
            className='login-app'
            onSubmit={handleLogin}
        >
            <input
                type='text'
                placeholder='Username'
                name='username'
                autoFocus={true}
            />
            <input
                type='password'
                placeholder='Password'
                name='password'
            />
            <button type='submit'>Login</button>
        </form>

        <ConectWalletButton/>

      </>
  )
}

export default Login
