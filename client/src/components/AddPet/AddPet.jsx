import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DialogFS from '../../components/DialogFS/DialogFS';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import logo from '../../assets/logo.png';

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
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100',
            height: '100',
          }}
        >
          <img src={logo} style={{ width: '75px' }} />
          <AddIcon
            sx={{
              color: 'white',
              position: 'absolute',
              bottom: '19%',
              left: '34%',
              transform: 'scale(1.5)'
            }}
          />
        </IconButton>
      </Box>
    </>
  );
};

export default AddPet;
