import './App.css';
import { useState } from 'react';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='App'>
      <h1>Test</h1>
      <Button variant='contained' onClick={handleOpen}>
        Open modal
      </Button>
      <Login />
    </div>
  );
}

export default App;
