const styles = {
  card: {
    maxWidth: 345,
    minWidth: 300,
    borderRadius: '0.7em',
    m: 2,
    background:
      'url("https://res.cloudinary.com/dw4hak4ok/image/upload/v1648480057/Shiny_Overlay_xyp2iy.svg")',
  },
  image: {
    borderRadius: '0.7em',
  },
  cardContent: {
    textAlign: 'center',
  },
  iconButton: {
    'margin': 'auto',
    'width': '100%',
    'border': '2px solid white',
    'bgcolor': 'rgba(0,0,0,0.9)',
    'color': 'white',
    'borderRadius': '0.4em',
    '&:hover': {
      bgcolor: 'white',
      color: 'black',
      border: '2px solid black',
    },
  },
};

export default styles;
