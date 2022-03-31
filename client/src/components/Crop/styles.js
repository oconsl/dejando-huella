const styles = {
  dialogContent: {
    background: '#333',
    position: 'relative',
    height: 400,
    width: 'auto',
    minWidth: { sm: 500 },
  },
  dialogActions: {
    flexDirection: 'column',
    mx: 3,
    my: 2,
  },
  box: {
    width: '70%',
    mb: 1,
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
  slider: {
    color: '#75bc19',
  },
};

export default styles;
