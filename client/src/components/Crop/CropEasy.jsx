import { useState } from 'react';
// MATERIAL UI
import {
  Box,
  Slider,
  Button,
  Typography,
  DialogContent,
  DialogActions,
} from '@mui/material';
// COMPONENTS
import Cropper from 'react-easy-crop';
// UTIL FUNCTIONS
import getCroppedImg from './utils/CropImage';
// STYLES
import styles from './styles';

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
      setFile(new File([file], 'image', { type: 'file' }));
      setOpenCrop(false);
    } catch (error) {
      return error;
    }
  };

  return (
    <>
      <DialogContent dividers sx={styles.dialogContent}>
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
      <DialogActions sx={styles.dialogActions}>
        <Box sx={styles.box}>
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
              sx={styles.slider}
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
              sx={styles.slider}
            />
          </Box>
        </Box>
        <Box>
          <Button onClick={cropImage} variant='contained' sx={styles.button}>
            Crop
          </Button>
        </Box>
      </DialogActions>
    </>
  );
};

export default CropEasy;
