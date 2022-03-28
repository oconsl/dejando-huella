// MATERIAL UI
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material/Button';
// SERVICES
import { deleteUserData } from '../../services';
// HOOKS
import useToken from '../../hooks/useToken';

const UserDeleteDialog = ({ setOpen, id }) => {
  const { logOut } = useToken();

  const handleCancel = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    deleteUserData({ id });
    logOut();
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
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleDelete}>Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UserDeleteDialog;
