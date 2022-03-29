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
  menu_appbar: {
    display: { xs: 'block', md: 'none' },
  },
  typography: {
    flexGrow: 1,
    display: { xs: 'flex', md: 'none' },
  },
  box_pages: {
    flex: 6,
    justifyContent: 'center',
    height: '100%',
    flexGrow: 1,
    display: { xs: 'none', md: 'flex' },
  },
  button_link: {
    'my': 0,
    'mx': 4,
    'color': '#FBFAF2',
    'letterSpacing': '0.3em',
    'display': 'block',
    'height': '4rem',
    'width': '12rem',
    'textAlign': 'center',
    'display': 'flex',
    'alignItems': 'center',
    'fontWeight': '800',
    '&:hover': {
      color: '#030104',
      backgroundColor: '#FBFAF2',
      borderRadius: '0',
    },
    '&.active': {
      color: '#030104',
      backgroundColor: '#FBFAF2',
      borderRadius: '0',
    },
  },
  box_toolTip: {
    flexGrow: 0,
  },
  avatar: {
    bgcolor: 'rgba(103,79,189,1)',
  },
  menu_user: {
    mt: '45px',
    float: 'right',
    flex: 1,
  },
  img: { display: 'flex', flex: '1' },
  menuItem: { bgcolor: '#FBFAF2' },
};

export default styles;
