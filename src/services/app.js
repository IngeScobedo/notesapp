let url = ''

process.env.ENV === 'test'
  ? url = 'http://localhost:3001/api/'
  : url = 'http://localhost:3001/api/'

let token = ''

const setToken = newToken => { token = newToken }

const login = ({ username, password }) => {
  const req = fetch(`${url}login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  })
  return req.then(res => res.json())
}

const createAccount = ({ username, name, email, password }) => {
  const req = fetch('http://localhost:3001/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      name,
      email,
      password
    })
  })
  return req.then(res => res.json())
}

const createNote = (note) => {
  const req = fetch('http://localhost:3001/api/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(note)
  })
  return req.then(res => res.json())
}

export default {
  login,
  setToken,
  createAccount,
  createNote
}
