import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { deleteAdoptionPetData, deleteFoundPetData, deleteLostPetData, deleteMatchPetData } from '../../services';

const ConfirmDialog = ({ setOpen, option, id }) => {
  const handleCancel = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    switch(option){
      case 'Match':
        deleteMatchPetData(id);
        break;
      case 'Lost':
        deleteLostPetData(id);
        break;
      case 'Found':
        deleteFoundPetData(id);
        break;
      case 'Adoption':
        deleteAdoptionPetData(id);
        break;
    }    
    window.location.reload();
  };

  return (
    <div>
      <Dialog open={true} onClose={handleCancel}>
        <DialogTitle>Warning!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this entry ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleDelete}>Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ConfirmDialog;