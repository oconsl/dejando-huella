// MATERIAL UI
import {
  Card,
  CardContent,
  Typography,
  Skeleton,
} from '@mui/material';
// STYLES
import styles from './styles';

const MatchPetSkeleton = () => {
  return (
    <Card sx={styles.card}>
      <CardContent sx={styles.cardContent}>
        <Skeleton
          sx={styles.skeleton_main}
          animation={false} 
          variant='rectangular'
        />
        <CardContent sx={styles.cardContent_text}>
          <Typography gutterBottom variant='h5' component='div'>
            {
              <>
                <Skeleton
                  animation={false}
                  height={50}
                  width={250}
                  sx={styles.skeleton_sub}
                />
              </>
            }
          </Typography>
          <Typography variant='body2' color='text.primary'>
            {
              <>
                <Skeleton
                  animation={false}
                  height={10}
                  width={380}
                  sx={styles.skeleton_sub}
                />
                <Skeleton
                  animation={false}
                  height={10}
                  width={270}
                  sx={styles.skeleton_sub}
                />
                <Skeleton
                  animation={false}
                  height={10}
                  width={290}
                  sx={styles.skeleton_sub}
                />
                <Skeleton animation={false} height={10} width='70%' />
              </>
            }
          </Typography>
        </CardContent>
      </CardContent>
    </Card>
  );
};

export default MatchPetSkeleton;
