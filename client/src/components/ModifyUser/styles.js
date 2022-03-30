const styles = {
  box_container: {
    mt: 12,
    p: 3,
    mx: 85,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '30%',
    bgcolor: 'rgba(255,255,255,0.7)',
    boxShadow: '0px 0px 5px 1px rgba(54,54,54,0.55)',
    borderRadius: '1em',
  },
  avatar: {
    m: 1,
    backgroundColor: '#705ebb',
  },
  box_form: {
    mt: 3,
  },
  button: {
    'width': '100%',
    'bgcolor': '#705ebb',
    'py': 1,
    'my': 2,
    'border': '2px solid white',
    '&:hover': {
      bgcolor: 'white',
      border: '2px solid black',
      color: '#705ebb',
    },
  },
  box: {
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
