const styles = {
  container: {
    display: 'flex',
    width: '100%',
  },
  box_container: {
    marginTop: 4,
    display: 'flex',
    flex: 2,
    mx: 50,
    px: 3,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    bgcolor: 'rgba(255,255,255,0.7)',
    boxShadow: '0px 0px 5px 1px rgba(54,54,54,0.55)',
    borderRadius: '1em',
  },
  div: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  },
  avatar: { m: 1, width: '3vw' },
  box_form: { mt: 1, display: 'flex' },
  box_formLeft: { flex: 1, mr: 4 },
  box_formRight: { flex: 1 },
  grid_switch: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid_date: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationIcon: {
    color: 'green',
    margin: '0.4em 0.7em',
    cursor: 'pointer',
    transform: 'scale(2)',
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
  box_image: {
    marginTop: 4,
    display: 'flex',
    flex: 3,
    flexDirection: 'column',
    alignItems: 'center',
  },
  textField_image: { mt: 2 },
  card: { maxHeight: 450, margin: 'auto' },
  cardMedia: { backgroundColor: 'grey', objectFit: 'contain' },
  switch: {
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: '#705ebb',
    },
    '& .MuiSwitch-track': {
      color: 'red',
    },
  },
  img: { width: '100%' },
};

export default styles;
