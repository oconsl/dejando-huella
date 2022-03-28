// MATERIAL UI
import { CircularProgress, Box } from '@mui/material';
// STYLES
import styles from './styles';

const Progress = () => {
  return (
    <Box sx={styles.box}>
      <CircularProgress size={80} sx={styles.circle}/>
    </Box>
  );
};

export default Progress;
