// MATERIAL UI
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
// SERVICES
import {
  deleteAdoptionPetData,
  deleteFoundPetData,
  deleteLostPetData,
  deleteMatchPetData,
} from '../../services';
// STYLES
import styles from './styles';

const ConfirmDialog = ({ setOpen, option, id }) => {
  const handleCancel = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    switch (option) {
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
      default:
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
          <Button
            onClick={handleCancel}
            variant={'contained'}
            sx={styles.cancelButton}
          >
            Cancel
          </Button>
          <Button
            onClick={handleDelete}
            variant={'contained'}
            sx={styles.deleteButton}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConfirmDialog;
