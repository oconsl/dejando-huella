const styles = {
  box: {
    maxWidth: '600px',
    maxHeight: '600px',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',
    bgcolor: 'background.paper',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    'position': 'absolute',
    'left': '86.5%',
    'bottom': '92%',
    'bgcolor': 'rgba(150,150,150,1)',
    'width': '30px',
    'height': '30px',
    'p': 0,
    '&:hover': {
      bgcolor: 'white',
    },
    '&:hover > svg': {
      color: 'rgba(150,150,150,1)',
    },
  },
  closeIcon: {
    color: 'white',
    position: 'absolute',
  },
  img: {
    width: '580px',
    height: '580px',
  },
};

export default styles;
