import { useEffect, useState } from 'react'
import Note from './Note'
import noteService from '../../services/app'

const Notes = () => {
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const userType = localStorage.getItem('userType')
    setLoading(true)
    noteService.getNotes(userType)
      .then(initialNotes => {
        setNotes(initialNotes)
        setLoading(false)
      })
  }, [])

  const handleLogOut = () => {
    localStorage.removeItem('loggedNoteAppUser')
    localStorage.removeItem('userType')
    localStorage.removeItem('previousConnectedAccount')
    window.location.reload()
  }

  return (
        <div>
            <form onSubmit={handleLogOut} >
              <button>Log Out</button>
            </form>
            <h1>Notes App</h1>
            {
                loading
                  ? <h2>Loading...</h2>
                  : (
                      notes.map(
                        note => <Note key={note.id} {...note} />
                      )
                    )
            }
        </div>
  )
}

export default Notes
