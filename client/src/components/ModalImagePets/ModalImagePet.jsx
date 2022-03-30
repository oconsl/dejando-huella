// MATERIAL UI
import { Modal, Box, Button } from '@mui/material';
// MATERIAL ICONS
import CloseIcon from '@mui/icons-material/Close';
// STYLES
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
        >
          <CloseIcon sx={styles.closeIcon} />
        </Button>
        <img style={styles.img} src={props.img_src} alt="" />
      </Box>
    </Modal>
  );
};

export default ModalImagePets;
