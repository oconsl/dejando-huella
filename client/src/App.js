import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Opinions from './pages/Opinions/Opinions';
import Contact from './pages/Contact/Contact';

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className='App'>
      <h1>Application</h1>
      <Routes>
        <Route path={'/opinions'} element={<Opinions />} />
        <Route path={'/contact'} element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
