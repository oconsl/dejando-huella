import { useState } from 'react';
// MATERIAL UI
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
  Box,
} from '@mui/material';
// COMPONENTS
import Modal from '../Modal/Modal';
import ModalImagePets from '../ModalImagePets/ModalImagePet';
// STYLES
import styles from './styles';

const CardsPet = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openImage, setOpenImage] = useState(false);
  const handleOpenImage = () => setOpenImage(true);
  const handleCloseImage = () => setOpenImage(false);

  return (
    <Card sx={styles.card}>
      <ModalImagePets
        openImg={openImage}
        closeImg={handleCloseImage}
        img_src={props.img_src}
      />
      <CardActionArea onClick={handleOpenImage} sx={styles.cardActionArea}>
        <Box sx={styles.box_img_preUpLoad}>
          <CardMedia
            component='img'
            image={props.img_src}
            alt=''
            sx={styles.cardMedia}
          />
        </Box>
      </CardActionArea>
      <CardContent sx={styles.cardContent}>
        <Typography gutterBottom variant='h5' component='div' color='black'>
          {props.title}
        </Typography>
        <Typography
          variant='body2'
          color='black'
          sx={styles.typography_description}
        >
          {props.description}
        </Typography>
      </CardContent>
      <CardActions sx={styles.cardActionArea}>
        <Button
          size='medium'
          onClick={handleOpen}
          variant='contained'
          sx={styles.button}
        >
          {props.button}
        </Button>
        <Modal
          open={open}
          close={handleClose}
          title={props.title}
          description={props.description}
          date={props.date}
          img_src={props.img_src}
          filter={props.filter}
          addressRoad={props.addressRoad}
          addressNumber={props.addressNumber}
          phone={props.phone}
          position={props.position}
          page={props.page}
        />
      </CardActions>
    </Card>
  );
};

export default CardsPet;
