import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import FoundPets from './pages/FoundPets/FoundPets';
import LostPets from './pages/LostPets/LostPets';
import Adoption from './pages/Adoption/Adoption';
import { Routes, Route } from 'react-router-dom';
import HeaderPet from './components/HeaderPet/HeaderPet';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <HeaderPet authentication={false} />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/found-pets' element={<FoundPets />} />
        <Route path='/lost-pets' element={<LostPets />} />
        <Route path='/adoption' element={<Adoption />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
