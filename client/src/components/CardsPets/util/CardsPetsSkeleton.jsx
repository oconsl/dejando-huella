import { Fragment } from 'react';
// MATERIAL UI
import { Card, CardContent, Skeleton } from '@mui/material';
// STYLES
import styles from './styles';

function CardsPetsSkeleton() {
  return (
    <Card sx={styles.card}>     
      <Skeleton sx={styles.skeleton_main} animation={false}  variant="rectangular" />
      <CardContent>
        <Fragment>
          <Skeleton animation={false}  height={10} style={styles.skeleton_sub} />
          <Skeleton animation={false}  height={10} width="80%" />
        </Fragment>
      </CardContent>
    </Card>
  );
}

export default CardsPetsSkeleton;