import './App.css';
import { Routes, Route } from 'react-router-dom';
import MatchPets from './pages/MatchPets/MatchPets';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import useToken from './hooks/useToken';
import useAutoLogout from './hooks/useAutoLogout';
import { useEffect, useState } from 'react';
import SignUp from './components/SignUp/SignUp';
import ContactCard from './components/ContactCard/ContactCard';
import CardsContainer from './components/CardsContainer/CardsContainer';
import MatchPet from './components/MatchPet/MatchPet';
import MatchPetSkeleton from './components/MatchPet/utils/MatchPetSkeleton';

function App() {
  // const timer = useAutoLogout(2);
  // const { token, setToken, logOut, verifyToken } = useToken();
  // const [logged, setLogged] = useState(false);

  // useEffect(() => {
  //   const authorization = async () => {
  //     const result = await verifyToken();
  //     if (!result) logOut();
  //   };

  //   authorization();
  // });

  // useEffect(() => {
  //   setLogged(token && timer > 0);
  // }, [timer, token]);

  return (
    <>
      <MatchPets />
      {/* {!logged && <SignUp setToken={setToken} />}
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
      )} */}
    </>
  );
}

export default App;
