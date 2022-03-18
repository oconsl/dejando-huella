import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Opinions from './pages/Opinions/Opinions';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import useToken from './Hooks/useToken';
import useAutoLogout from './Hooks/useAutoLogout';
import { useEffect, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function App() {
  const timer = useAutoLogout(2);
  const { token, setToken, logOut, verifyToken } = useToken();
  const [logged, setLogged] = useState(false);
  const [warning, setWarning] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const authorization = async () => {
      const result = await verifyToken();
      if (!result) logOut();
    };

    authorization();
  });

  useEffect(() => {
    timer === 1 && logged ? setWarning(true) : setWarning(false);
    setLogged(token && timer > 0);
  }, [timer, token]);

  const handleClose = () => setOpen(false);

  return (
    <>
      {/* {warning && (
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={true}
          onClose={handleClose}
          message='Inactivity'
          key={'top center'}
        >
          <Alert variant='filled' severity='warning' sx={{ width: '100%' }}>
            Inactivity!
          </Alert>
        </Snackbar>
      )} */}
      {!logged && <Login setToken={setToken} />}
      {logged && (
        <div className='App'>
          <h1>Application</h1>
          <button onClick={logOut}>Logout</button>
          <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/opinions'} element={<Opinions />} />
            <Route path={'/contact'} element={<Contact />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
