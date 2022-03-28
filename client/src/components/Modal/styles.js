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
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
    display: 'flex',
    flexDirection: 'column',
  },
  button_close: {
    margin: '10px',
    width: '20px',
    position: 'relative',
    left: '91%',
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
    borderBottom: 'solid 1px black'
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
    fontSize: '20px'
  },
  box_img :{
    mx: '10px',
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
    width: '80%'
  },
  map: {
    width: '400px',
    height: '400px',
  },
  box_location: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
};

export default styles;
