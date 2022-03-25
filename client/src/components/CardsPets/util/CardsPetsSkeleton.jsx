import * as React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';

function Media() {
  return (
    <Card sx={{
      margin: '15px',
      width: '350px',
      minWidth: '250px',
      height: '247px',
      maxHeight: '350px',
    }}>
     
      <Skeleton sx={{ height: 140 }} animation="wave" variant="rectangular" />
      

      <CardContent>
        <React.Fragment>
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} width="80%" />
        </React.Fragment>
      </CardContent>

    </Card>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function Facebook() {
  return (
    <div>
      <Media loading />
    </div>
  );
}