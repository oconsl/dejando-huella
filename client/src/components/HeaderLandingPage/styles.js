const styles = {
  appBar: {
    bgcolor: '#030104',
    borderBottom: '#FBFAF2 solid 1px',
  },
  typography_toolbar: {
    mr: 2,
    display: { xs: 'none', md: 'flex' },
  },
  box: {
    flexGrow: 1,
    display: { xs: 'flex', md: 'none' },
  },
  menu: {
    display: { xs: 'block', md: 'none' },
  },
  typography: {
    flexGrow: 1,
    display: { xs: 'flex', md: 'none' },
  },
  button_login: {
    'm': 1,
    'bgcolor': '#533ccc',
    '&:hover': {
      bgcolor: '#795dd9',
    },
  },
  button_signup: {
    'm': 1,
    'mx': 4,
    'bgcolor': '#96a42f',
    '&:hover': {
      bgcolor: '#a5bc38',
    },
  },
  box_buttons: {
    width: '75vw',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  img: {
    marginTop: '5px',
  },
};

export default styles;
