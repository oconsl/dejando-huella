import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Cropper from 'react-easy-crop';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import getCroppedImg from './utils/CropImage';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

const CropEasy = ({ photoURL, setOpenCrop, setPhotoURL, setFile }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const zoomPercent = (value) => {
    return `${Math.round(value * 100)}%`;
  };

  const cropImage = async () => {
    try {
      const { file, url } = await getCroppedImg(
        photoURL,
        croppedAreaPixels,
        rotation
      );
      setPhotoURL(url);
      setFile(new File([file],"image",{type: "file"}));
      setOpenCrop(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <DialogContent
        dividers
        sx={{
          background: '#333',
          position: 'relative',
          height: 400,
          width: 'auto',
          minWidth: { sm: 500 },
        }}
      >
        <Cropper
          image={photoURL}
          crop={crop}
          rotation={rotation}
          zoom={zoom}
          aspect={1}
          onCropChange={setCrop}
          onRotationChange={setRotation}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
        />
      </DialogContent>
      <DialogActions sx={{ flexDirection: 'column', mx: 3, my: 2 }}>
        <Box
          sx={{
            width: '70%',
            mb: 1,
          }}
        >
          <Box>
            <Typography variant='overline'>
              Zoom: {zoomPercent(zoom)}
            </Typography>
            <Slider
              value={zoom}
              min={1}
              max={3}
              step={0.05}
              aria-labelledby='Zoom'
              onChange={(e, zoom) => setZoom(zoom)}
            />
          </Box>
          <Box>
            <Typography variant='overline'>Rotation: {rotation}</Typography>
            <Slider
              value={rotation}
              min={0}
              max={360}
              step={1}
              aria-labelledby='Rotation'
              onChange={(e, rotation) => setRotation(rotation)}
            />
          </Box>
        </Box>
        <Box>
          <Button onClick={cropImage} variant='contained'>
            Crop
          </Button>
        </Box>
      </DialogActions>
    </>
  );
};

export default CropEasy;
