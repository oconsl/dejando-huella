import './App.css';
import { Routes, Route } from 'react-router-dom';
import Opinions from './pages/Opinions/Opinions';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import useToken from './Hooks/useToken';
import useAutoLogout from './Hooks/useAutoLogout';
import { useEffect, useState } from 'react';
import SignUp from './components/SignUp/SignUp';

function App() {
  const timer = useAutoLogout(2);
  const { token, setToken, logOut, verifyToken } = useToken();
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const authorization = async () => {
      const result = await verifyToken();
      if (!result) logOut();
    };

    authorization();
  });

  useEffect(() => {
    setLogged(token && timer > 0);
  }, [timer, token]);

  return (
    <>
      {!logged && <SignUp setToken={setToken} />}
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
