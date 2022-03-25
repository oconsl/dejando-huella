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
import ModifyMatchPet from './components/ModifyMatchPet/ModifyMatchPet';
import ModifyLostPet from './components/ModifyLostPet/ModifyLostPet';
import ModifyFoundPet from './components/ModifyFoundPet/ModifyFoundPet';
import AddFoundPet from './components/AddFoundPet/AddFoundPet';
import AddAdoptionPet from './components/AddAdoptionPet/AddAdoptionPet';
import ModifyAdoptionPet from './components/ModifyAdoptionPet/ModifyAdoptionPet';

function App() {
  const { setToken } = useToken();

  return (
    <div className='App'>
      {/* <HeaderPet /> */}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/found-pets/:page' element={<FoundPets />} />
          <Route path='/lost-pets' element={<LostPets />} />
          <Route path='/adoption-pets' element={<Adoption />} />
          <Route path='/match-pets/:page' element={<MatchPets />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
        <Route path='/login' element={<Login setToken={setToken} />} />
        <Route path='/add-match-pet' element={<AddMatchPet />} />
        <Route
          path='/update-adoption-pet'
          element={<ModifyAdoptionPet id={'623c84f1a126835b2c6f7472'} />}
        />
        <Route path='/add-adoption-pet' element={<AddAdoptionPet />} />
        <Route path='sign-up' element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
