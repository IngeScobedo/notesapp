import { useEffect, useState } from 'react'
import notesService from '../services/app'
import Login from './login/Login'
import Notes from './notes/Notes'

const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      notesService.setToken(user.token)
    }
  }, [])

  return (
    <div className="notes-app-container">

      {
        !user
          ? <Login />
          : <Notes />
      }

    </div>
  )
}

export default App
