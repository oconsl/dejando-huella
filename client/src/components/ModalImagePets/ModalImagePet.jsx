import { Modal, Box, Button, Container } from "@mui/material";
import React from "react";
import CloseIcon from '@mui/icons-material/Close';

const ModalImagePets = (props) => {

  return (
    <Modal
      open={props.openImg}
      onClose={props.closeImg}
    >
      <Box sx={{maxWidth:'370px', maxHeight:'370px',  position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, margin: 'auto', bgcolor: 'background.paper', display: 'flex', alignItems:'center', justifyContent:'center'}}>
        <Button onClick={props.closeImg} sx={{position: 'absolute', left: '85%', bottom: '89%'}}>
          <CloseIcon sx={{color: 'white'}}/>
        </Button>
        <img width={350} height={350} src={props.img_src} alt="" />
      </Box>
    </Modal>
  )
}

export default ModalImagePets