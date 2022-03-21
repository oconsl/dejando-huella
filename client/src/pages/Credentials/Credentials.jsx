import React from 'react'
import SignUp from '../../components/SignUp/SignUp'
import Login from '../../components/Login/Login'
import useToken from '../../hooks/useToken';

const Credentials = () => {
  const { setToken } = useToken();

  return (
    <div style={{display: 'flex', alignItems: 'center'}}>
      <SignUp/>
      <Login setToken={setToken}/>
    </div>
  )
}

export default Credentials;