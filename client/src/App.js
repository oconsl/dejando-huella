import './App.css';
import { useState } from 'react';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import AddLostPet from './components/AddLostPet/AddLostPet';
import AddFoundPet from './components/AddFoundPet/AddFoundPet';
import AddAdoptionPet from './components/AddAdoptionPet/AddAdoptionPet';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

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
        maxWidth={'lg'}
      >
        <AddAdoptionPet />
      </Dialog>
      <hr />
    </div>
  );
}

export default App;
