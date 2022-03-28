const styles = {
  container: {
    height: '70.25vh',
  },
  box_container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    mt: 15,
    p: 4,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: '0.8em',
  },
  avatar: {
    m: 1,
    backgroundColor: '#705ebb',
  },
  box_child: {
    mt: 3,
  },
  button: {
    'mt': 3,
    'mb': 2,
    'bgcolor': '#96a42f',
    '&:hover': {
      bgcolor: '#a5bc38',
    },
  },
  box_signed: {
    mt: 8,
    mb: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  typography: {
    fontWeight: 'bold',
    fontSize: '1.5em',
    mb: 4,
  },
  checkCircleIcon: {
    color: 'green',
    transform: 'scale(3)',
  },
};

export default styles;
