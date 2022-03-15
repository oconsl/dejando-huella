import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import FoundPets from './pages/FoundPets/FoundPets';
import LostPets from './pages/LostPets/LostPets';
import Adoption from './pages/Adoption/Adoption';
import { Routes, Route } from 'react-router-dom';
import HeaderPet from './components/HeaderPet/HeaderPet';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import { useState } from 'react';

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='App'>
      <HeaderPet authentication={true} />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/found-pets' element={<FoundPets />} />
        <Route path='/lost-pets' element={<LostPets />} />
        <Route path='/adoption' element={<Adoption />} />
      </Routes>
      <Footer />
{/*       <button onClick={handleOpen}>Press me on!</button>
      <Modal open={open} close={handleClose} /> */}
    </div>
  );
}

export default App;
