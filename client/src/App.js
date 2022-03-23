import { useState } from 'react';
import LandingPage from './pages/LandingPage/LandingPage';
import FoundPets from './pages/FoundPets/FoundPets';
import LostPets from './pages/LostPets/LostPets';
import Adoption from './pages/Adoption/Adoption';
import MatchPets from './pages/MatchPets/MatchPets';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import AddLostPet from './components/AddLostPet/AddLostPet';
import AddMatchPet from './components/AddMatchPet/AddMatchPet';
import Profile from './pages/Profile/Profile';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';
import { Routes, Route } from 'react-router-dom';
import HeaderPet from './components/HeaderPet/HeaderPet';
import Footer from './components/Footer/Footer';
import useToken from './hooks/useToken';

function App() {
  const { setToken } = useToken();

  return (
    <div className='App'>
      {/* <HeaderPet /> */}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/found-pets' element={<FoundPets />} />
          <Route path='/lost-pets' element={<LostPets />} />
          <Route path='/match-pets/:page' element={<MatchPets />} />
          <Route path='/adoption' element={<Adoption />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
        <Route path='/login' element={<Login setToken={setToken} />} />
        <Route path='/add-match-pet' element={<AddMatchPet />} />
        <Route path='sign-up' element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
