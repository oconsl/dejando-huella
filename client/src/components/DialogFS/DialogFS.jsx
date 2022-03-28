import { forwardRef } from 'react';
// MATERIAL UI
import {
  Typography,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Slide,
} from '@mui/material';
// MATERIAL ICONS
import CloseIcon from '@mui/icons-material/Close';
// COMPONENTS
import AddMatchPet from '../AddMatchPet/AddMatchPet';
import AddLostPet from '../AddLostPet/AddLostPet';
import AddFoundPet from '../AddFoundPet/AddFoundPet';
import AddAdoptionPet from '../AddAdoptionPet/AddAdoptionPet';
import ModifyMatchPet from '../ModifyMatchPet/ModifyMatchPet';
import ModifyLostPet from '../ModifyLostPet/ModifyLostPet';
import ModifyFoundPet from '../ModifyFoundPet/ModifyFoundPet';
import ModifyAdoptionPet from '../ModifyAdoptionPet/ModifyAdoptionPet';
import ModifyUser from '../ModifyUser/ModifyUser';
//STYLES
import styles from './styles';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const DialogFS = ({ setOpen, option, id }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={true}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={styles.appBar}>
          <Toolbar>
            <IconButton
              edge='start'
              color='inherit'
              onClick={handleClose}
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={styles.typography} variant='h6' component='div'>
              {option[0] === '*'
                ? 'Fill the form to add new pet'
                : 'Edit to save new info'}
            </Typography>
          </Toolbar>
        </AppBar>
        {option === '*AddMatch' ? <AddMatchPet setOpen={setOpen} /> : null}
        {option === '*AddLost' ? <AddLostPet setOpen={setOpen} /> : null}
        {option === '*AddFound' ? <AddFoundPet setOpen={setOpen} /> : null}
        {option === '*AddAdoption' ? (
          <AddAdoptionPet setOpen={setOpen} />
        ) : null}
        {option === 'Match' ? (
          <ModifyMatchPet id={id} setOpen={setOpen} />
        ) : null}
        {option === 'Lost' ? <ModifyLostPet id={id} setOpen={setOpen} /> : null}
        {option === 'Found' ? (
          <ModifyFoundPet id={id} setOpen={setOpen} />
        ) : null}
        {option === 'Adoption' ? (
          <ModifyAdoptionPet id={id} setOpen={setOpen} />
        ) : null}
        {option === 'User' ? <ModifyUser id={id} setOpen={setOpen} /> : null}
      </Dialog>
    </div>
  );
};

export default DialogFS;
