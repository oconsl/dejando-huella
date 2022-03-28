const styles = {
  card: {
    margin: '15px',
    width: '100%',
    minWidth: '250px',
    maxWidth: '345px',
    height: '100%',
    maxHeight: '350px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '0.7em',
  },
  cardMedia: {
    height: '100%',
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
};

export default styles;
