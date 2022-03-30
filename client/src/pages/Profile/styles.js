const styles = {
  page: {
    width: '100%',
    height: '80.5vh',
  },
  editIcon: {
    color: '#2E8B57',
    cursor: 'pointer',
    transform: 'scale(1.5)',
  },
  deleteForeverIcon: {
    color: '#B80F0A',
    cursor: 'pointer',
    transform: 'scale(1.5)',
  },
  box_container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    my: 3,
  },
  box_table: {
    width: '52vw',
    height: '400px',
    marginLeft: '3em',
  },
  box_user: {
    width: '30vw',
    height: '60vh',
  },
  card: {
    height: '100%',
    borderRadius: '0.8em',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '85%',
  },
  typography: {
    textAlign: 'center',
    mb: 3,
  },
  box_title: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box_avatar: {
    flex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box_profile: {
    flex: 4,
    width: '100%',
    padding: '3em',
  },
  avatar: {
    bgcolor: '#8ca52d',
    transform: 'scale(2.5) translateY(10px)',
  },
  box_grid: {
    'ml': '7em',
    'mt': '2em',
    'display': 'flex',
    'flexDirection': 'column',
    'justifyContent': 'center',
    'alignItems': 'center',
    '& > div': {
      marginBottom: '1.5em',
    },
  },
  cardAction: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  dataGrid: {
    bgcolor: 'white',
    borderRadius: '1em',
  },
};

export default styles;
