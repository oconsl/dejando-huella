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
import { deleteUserData } from '../../services';
// HOOKS
import useToken from '../../hooks/useToken';
// STYLES
import styles from '../ConfirmDialog/styles';

const UserDeleteDialog = ({ setOpen, id }) => {
  const { logOut } = useToken();

  const handleCancel = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    Promise.all([deleteUserData({ id })]).finally(() => logOut());
  };

  return (
    <div>
      <Dialog open={true} onClose={handleCancel}>
        <DialogTitle>Warning!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete your account ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCancel}
            variant='contained'
            sx={styles.cancelButton}
          >
            Cancel
          </Button>
          <Button
            onClick={handleDelete}
            variant='contained'
            sx={styles.deleteButton}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UserDeleteDialog;
