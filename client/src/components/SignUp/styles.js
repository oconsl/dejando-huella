const styles = {
  container: {
    height: '70.25vh',
    width: '30vw',
    mx: 85,
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
  box_signedContainer: {
    height: '83.1vh',
  },
  box_signed: {
    position: 'absolute',
    left: '40%',
    top: '35%',
    width: '25vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    bgcolor: 'white',
    pb: 8,
    pt: 6,
    borderRadius: '1em',
  },
  typography: {
    fontWeight: 'bold',
    fontSize: '1.5em',
    mb: 4,
  },
  checkCircleIcon: {
    color: '#9aa73a',
    transform: 'scale(3)',
  },
};

export default styles;
