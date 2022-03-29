const styles = {
  page: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box_title: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  title: {
    color: 'white',
    transform: 'scale(1.8)',
    textShadow:
      '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
  },
  addPet: {
    position: 'absolute',
    right: '30%',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  box_notFound: {
    height: '500px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  typography: {
    fontWeight: '500',
    marginBottom: '50px',
  },
  pagination: {
    'display': 'flex',
    'justifyContent': 'center',
    '& .MuiPaginationItem-root': {
      color: 'white',
    },
  },
};

export default styles;
