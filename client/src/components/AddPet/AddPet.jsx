import { useState } from 'react';
// MATERIAL UI
import { Box, IconButton } from '@mui/material';
// COMPONENTS
import DialogFS from '../../components/DialogFS/DialogFS';
// ASSETS
import logo from '../../assets/logo.png';
// MATERIAL ICONS
import AddIcon from '@mui/icons-material/Add';
// STYLES
import styles from './styles';

const AddPet = ({ option }) => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleClick = () => {
    setOpenDialog(true);
  };

  return (
    <>
      {openDialog && <DialogFS setOpen={setOpenDialog} option={option} />}
      <Box>
        <IconButton
          onClick={handleClick}
          sx={styles.box}
        >
          <img src={logo} style={styles.img} alt='add-paw-icon'/>
          <AddIcon
            sx={styles.addIcon}
          />
        </IconButton>
      </Box>
    </>
  );
};

export default AddPet;
