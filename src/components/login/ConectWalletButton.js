import React, { useCallback, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { connector } from '../../config/web3'
import conectWalletService from '../../services/conectWalletButton'

const ConectWalletButton = () => {
  const {
    activate,
    active,
    deactivate,
    error,
    account,
    chainId
  } = useWeb3React()

  console.log({
    activate,
    active,
    deactivate,
    error,
    account,
    chainId
  })

  const connect = useCallback(() => {
    activate(connector)
    localStorage.setItem('previousConnectedAccount', true)
  }, [activate])

  const disconnect = () => {
    localStorage.removeItem('previousConnectedAccount')
    localStorage.removeItem('loggedNoteAppUser')
    deactivate()
  }

  useEffect(() => {
    if (localStorage.getItem('previousConnectedAccount') === 'true') {
      connect()
    }
  }, [connect])

  useEffect(() => {
    if (active) {
      localStorage.setItem('userType', 'wallet')
      conectWalletService.walletLogin(account).then(response => {
        localStorage.setItem('loggedNoteAppUser', JSON.stringify(response.token))
        window.location.reload()
      })
    }
  }, [active])

  return (
        <div>
            {
                active
                  ? (
                  <button onClick={disconnect}>
                    <i className="fa fa-sign-out"></i>
                    <span>Disconnect</span>
                  </button>
                    )
                  : (
                  <button onClick={connect}>
                    <i className="fa fa-sign-in"></i>
                    <span>Connect</span>
                  </button>
                    )
            }
        </div>
  )
}

export default ConectWalletButton
