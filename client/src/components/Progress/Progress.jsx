import * as React from 'react';
import { CircularProgress, Box } from '@mui/material';
import styles from './styles';

const Progress = () => {
  return (
    <Box sx={styles.box}>
      <CircularProgress size={80} />
    </Box>
  );
};

export default Progress;
