// MATERIAL UI
import { Card, CardContent, Skeleton, Box } from '@mui/material';
// STYLES
import styles from './styles';

function CardsPetsSkeleton() {
  return (
    <Card sx={styles.card}>
      <Box>
        <Skeleton
          sx={styles.skeleton_main}
          animation={false}
          variant='rectangular'
        />
      </Box>
      <CardContent>
        <Box sx={styles.box_skeleton_title}>
          <Skeleton
            animation={false}
            height={40}
            style={styles.skeleton_sub}
            width='60%'
          />
          <Skeleton animation={false} height={20} width='100%' />
          <Skeleton animation={false} height={65} width='50%' />
        </Box>
      </CardContent>
    </Card>
  );
}

export default CardsPetsSkeleton;
