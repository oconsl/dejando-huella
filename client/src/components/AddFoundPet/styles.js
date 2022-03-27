const styles = {
  container: { display: 'flex' },
  box_container: {
    marginTop: 4,
    display: 'flex',
    marginRight: 8,
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
  },
  div: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: { m: 1, backgroundColor: 'blue' },
  box_form: { mt: 3 },
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
  textField_address: { width: '50%', ml: 3 },
  locationIcon: {
    color: 'green',
    margin: '0 1em',
    cursor: 'pointer',
    transform: 'scale(2)',
  },
  button: { mt: 3, mb: 2 },
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
};

export default styles;
