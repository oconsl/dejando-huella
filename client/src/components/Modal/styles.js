const styles = {
  box_container: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: 'auto',
    maxHeight: '90%',
    width: '75vw',
    overflowY: 'auto',
    background:
      'url("https://res.cloudinary.com/dw4hak4ok/image/upload/v1648480057/Shiny_Overlay_xyp2iy.svg")',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '1em',
  },
  button_close: {
    'margin': '10px',
    'width': '20px',
    'position': 'relative',
    'left': '91%',
    'bgcolor': '#96a42f',
    '&:hover': {
      bgcolor: '#a5bc38',
    },
  },
  grid_container: {
    display: 'flex',
    justifyContent: 'space-around',
    p: 3,
  },
  grid: {
    p: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  typography_title: {
    fontWeight: '600',
    marginBottom: '20px',
    fontSize: '28px',
    borderBottom: 'solid 1px black',
  },
  typography_name: {
    fontSize: '30px',
    fontWeight: '500',
  },
  typography: {
    mt: 2,
    fontSize: '20px',
  },
  typography_specie: {
    fontSize: '20px',
  },
  box_img: {
    mx: '10px',
    boxShadow: '0px 0px 20px 2px rgba(54,54,54,0.65)',
    borderRadius: '1em',
    overflow: 'hidden',
    width: '400px',
    height: '400px',
  },
  img: {
    width: '400px',
    height: '400px',
  },
  box_description: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10px',
    width: '80%',
    textAlign: 'center',
  },
  map: {
    width: '400px',
    height: '400px',
    flex: '3',
    boxShadow: '0px 0px 20px 2px rgba(54,54,54,0.65)',
    borderRadius: '1em',
    overflow: 'hidden',
  },
  location_text: {
    flex: '1 0 0',
    textAlign: 'center',
  },
  box_location: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box_information: {
    textAlign: 'center',
  },
};

export default styles;
