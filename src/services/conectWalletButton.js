
let url = ''

process.env.ENV === 'test'
  ? url = 'http://localhost:3001/api/wallet/login'
  : url = 'http://localhost:3001/api/wallet/login'

const walletLogin = (account) => {
  const req = fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      account
    })
  })
  return req.then(res => res.json())
}

export default { walletLogin }
