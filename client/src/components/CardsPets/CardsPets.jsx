import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Modal from '../Modal/Modal'
import ModalImagePets from '../ModalImagePets/ModalImagePet';
// import './CardsPets.css';

const CardsPet = (props) => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openImage, setOpenImage] = React.useState(false)
  const handleOpenImage = () => setOpenImage(true);
  const handleCloseImage = () => setOpenImage(false);

  return (
    <Card className="card" sx={{ maxWidth: 345 }}>
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
          alt="green iguana"
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
        <Button size="small" color="primary" onClick={handleOpen} >
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
