export const styles_view = {
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '50vh',
  },
  dialogTitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButton: {
    position: 'absolute',
    right: 20,
    transform: 'scale(1.5)',
  },
  button: {
    'margin': 'auto',
    'width': '40%',
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

export const styles_static = {
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
  },
  dialogContent: {
    p: 0,
  },
};
