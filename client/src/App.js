import './App.css';
import { Routes, Route } from 'react-router-dom';
import MatchPets from './pages/MatchPets/MatchPets';
import CardsContainer from './components/CardsContainer/CardsContainer';
import Home from './pages/Home/Home';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';
import Error from './pages/Error/Error';
import Credentials from './pages/Credentials/Credentials';

function App() {
  return (
    <>
      <div className='App'>
        <h1>Application</h1>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/credentials'} element={<Credentials />} />
          <Route element={<ProtectedRoutes />}>
            <Route path={'/match-pets/:page'} element={<MatchPets />} />
            <Route path={'/contact'} element={<CardsContainer />} />
          </Route>
          <Route path={'*'} element={<Error />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
