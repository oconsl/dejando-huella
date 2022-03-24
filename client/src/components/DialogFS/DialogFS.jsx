import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
// COMPONENTS
import ModifyMatchPet from '../../components/ModifyMatchPet/ModifyMatchPet';
import ModifyLostPet from '../../components/ModifyLostPet/ModifyLostPet';
import ModifyFoundPet from '../../components/ModifyFoundPet/ModifyFoundPet';
import ModifyAdoptionPet from '../../components/ModifyAdoptionPet/ModifyAdoptionPet';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
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
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge='start'
              color='inherit'
              onClick={handleClose}
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant='h6' component='div'>
              Edit to save new info
            </Typography>
          </Toolbar>
        </AppBar>
        {option==='Match' ? <ModifyMatchPet id={id} setOpen={setOpen} /> : null}
        {option==='Lost' ? <ModifyLostPet id={id} setOpen={setOpen} /> : null}
        {option==='Found' ? <ModifyFoundPet id={id} setOpen={setOpen} /> : null}
        {option==='Adoption' ? <ModifyAdoptionPet id={id} setOpen={setOpen} /> : null}
      </Dialog>
    </div>
  );
};

export default DialogFS;
