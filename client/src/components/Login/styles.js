const styles = {
  container: {
    height: '66vh',
    width: '25vw',
    margin: 'auto',
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    mt: 20,
    p: 5,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: '0.8em',
  },
  avatar: {
    m: 1,
    backgroundColor: '#705ebb',
  },
  formControl_username: {
    m: 1,
  },
  formControl_password: {
    m: 1,
  },
  button: {
    'mt': 3,
    'mb': 2,
    'm': 1,
    'mx': 4,
    'bgcolor': '#96a42f',
    '&:hover': {
      bgcolor: '#a5bc38',
    },
  },
};

export default styles;
