const styles = {
  card: {
    margin: '15px',
    width: '330px',
    height: '100%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '0.7em',
    background:
      'url("https://res.cloudinary.com/dw4hak4ok/image/upload/v1648480057/Shiny_Overlay_xyp2iy.svg")',
  },
  cardMedia: {
    height: '100%',
  },
  typography_title: {
    fontSize: '30px',
    fontWight: '900',
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
