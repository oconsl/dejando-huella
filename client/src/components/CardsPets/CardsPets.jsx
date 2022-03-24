import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from '@mui/material';
import Modal from '../Modal/Modal';
import ModalImagePets from '../ModalImagePets/ModalImagePet';

const CardsPet = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openImage, setOpenImage] = useState(false);
  const handleOpenImage = () => setOpenImage(true);
  const handleCloseImage = () => setOpenImage(false);

  return (
    <Card
      sx={{
        margin: '15px',
        width: '100%',
        minWidth: '250px',
        maxWidth: '345px',
        height: '100%',
        maxHeight: '350px',
      }}
    >
      <ModalImagePets
        openImg={openImage}
        closeImg={handleCloseImage}
        img_src={props.img_src}
      />
      <CardActionArea onClick={handleOpenImage}>
        <CardMedia
          component="img"
          height="140"
          image={props.img_src}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleOpen}>
          {props.button}
        </Button>
        <Modal
          open={open}
          close={handleClose}
          title={props.title}
          description={props.description}
          img_src={props.img_src}
          filter={props.filter}
          addressRoad={props.addressRoad}
          addressNumber={props.addressNumber}
          phone={props.phone}
        />
      </CardActions>
    </Card>
  );
};

export default CardsPet;
