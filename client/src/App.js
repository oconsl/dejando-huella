import './App.css';
import { useState } from 'react';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import AddPet from './components/AddPet/AddPet';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import Dialog from '@mui/material/Dialog';
import MapView from './components/MapView/MapView';
import MapStatic from './components/MapView/MapStatic';
import Tags from './components/Tags/Tags';

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openCrop, setOpenCrop] = useState(false);
  const [photo, setPhoto] = useState(null);

  return (
    <div className='App'>
      <h1>Test</h1>
      <Button variant='contained' onClick={handleOpen}>
        Open Dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={'md'}
      >
        <AddPet />
      </Dialog>
      <hr />
    </div>
  );
}

export default App;
