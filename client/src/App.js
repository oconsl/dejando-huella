import LandingPage from './pages/LandingPage/LandingPage';
import FoundPets from './pages/FoundPets/FoundPets';
import LostPets from './pages/LostPets/LostPets';
import AdoptionPets from './pages/AdoptionPets/AdoptionPets';
import MatchPets from './pages/MatchPets/MatchPets';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import NotFound from './pages/NotFound/NotFound';
import Profile from './pages/Profile/Profile';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import useToken from './hooks/useToken';
import './App.css';

function App() {
  const { token, setToken } = useToken();

  return (
    <div className='App'>
      <Routes>
        {!token && <Route path='/' element={<LandingPage />} />}
        <Route element={<ProtectedRoutes />}>
          {token && <Route path='/' element={<LandingPage />} />}
          <Route path='/found-pets/:page' element={<FoundPets />} />
          <Route path='/lost-pets/:page' element={<LostPets />} />
          <Route path='/adoption-pets/:page' element={<AdoptionPets />} />
          <Route path='/testimony-pets/:page' element={<MatchPets />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
        <Route path='/login' element={<Login setToken={setToken} />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
