const styles = {
  page: {
    width: '100vw',
    height: '80.5vh',
  },
  editIcon: {
    color: 'green',
    cursor: 'pointer',
    transform: 'scale(1.5)',
  },
  deleteForeverIcon: {
    color: 'red',
    cursor: 'pointer',
    transform: 'scale(1.5)',
  },
  box_container: {
    width: '100%',
    height: '100%',
    border: 'solid 2px white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    my: 3,
  },
  box_table: {
    width: '52vw',
    height: '400px',
  },
  box_user: {
    width: '30vw',
    height: '60vh',
    backgroundColor: 'black',
  },
  card: {
    height: '100%',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  typography: {
    textAlign: 'center',
    mb: 3,
  },
  box_profile: {},
  box_avatar: {
    flex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    bgcolor: 'orange',
    transform: 'scale(2.5)',
  },
  box_grid: {
    ml: 3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    flex: 4,
  },
  cardAction: {
    display: 'flex',
    justifyContent: 'space-around',
  },
};

export default styles;
