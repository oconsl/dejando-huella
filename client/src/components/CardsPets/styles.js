const styles = {
  card: {
    mx: 8,
    my: 4,
    width: '350px',
    height: '500px',
    borderRadius: '0.7em',
    boxShadow: '0px 0px 20px 2px rgba(54,54,54,0.75)',
    background:
      'url("https://res.cloudinary.com/dw4hak4ok/image/upload/v1648492315/Animated_Shape_6_ks6vuf.svg")',
  },
  cardActionArea: {
    display: 'flex',
    flexDirection: 'column',
    alignItem: 'center',
    justifyContent: 'center',
  },
  box_img_preUpLoad: {
    background:
      'transparent url("https://res.cloudinary.com/dw4hak4ok/image/upload/v1648577150/Fading_lines_ozdef7.gif") center no-repeat',
    width: '310px',
    height: '310px',
    marginBottom: '20px',
  },
  cardMedia: {
    marginTop: '20px',
    width: '310px',
    height: 'auto',
    borderRadius: '0.7em',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  typography_description: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    width: '300px',
  },
  button: {
    'bgcolor': '#030104',
    'color': '#FBFAF2',
    'border': '2px solid #FBFAF2',
    '&:hover': {
      color: '#030104',
      backgroundColor: '#FBFAF2',
      border: '2px solid #030104',
    },
  },
};

export default styles;
