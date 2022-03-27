import React from 'react';
import { Modal, Box, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styles from './styles';

const ModalImagePets = (props) => {
  return (
    <Modal open={props.openImg} onClose={props.closeImg}>
      <Box
        sx={styles.box}
      >
        <Button
          onClick={props.closeImg}
          sx={styles.button}
          startIcon={<CloseIcon sx={styles.closeIcon} />}
        />
        <img width={350} height={350} src={props.img_src} alt="" />
      </Box>
    </Modal>
  );
};

export default ModalImagePets;
