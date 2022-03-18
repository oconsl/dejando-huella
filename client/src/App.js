import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Opinions from './pages/Opinions/Opinions';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import useToken from './Hooks/useToken';
import { useEffect } from 'react';

function App() {
  const { token, setToken, logOut, verifyToken } = useToken();

  useEffect(async () => {
    console.log(await verifyToken());
    if (!(await verifyToken())) {
      console.log('logged out');
      logOut();
    }
  });

  return (
    <>
      {!token && <Login setToken={setToken} />}
      {token && (
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
