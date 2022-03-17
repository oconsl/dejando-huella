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
  const [open2, setOpen2] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleOpen2 = () => setOpen2(true);
  const handleClose = () => setOpen(false);
  const handleClose2 = () => setOpen2(false);

  return (
    <div className='App'>
      <h1>Test</h1>
      <Button variant='contained' onClick={handleOpen}>
        Open Sign Up
      </Button>
      <hr />
      <Button variant='contained' onClick={handleOpen2}>
        Open Log In
      </Button>
      {/* <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={'lg'}
      >
        <AddAdoptionPet />
      </Dialog> */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={'xs'}
      >
        <SignUp />
      </Dialog>
      <Dialog
        open={open2}
        onClose={handleClose2}
        fullWidth={true}
        maxWidth={'xs'}
      >
        <Login />
      </Dialog>
    </div>
  );
}

export default App;
