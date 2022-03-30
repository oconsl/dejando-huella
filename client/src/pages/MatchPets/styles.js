const styles = {
  box_title: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  title: {
    color: 'white',
    transform: 'scale(1.8)',
    textShadow: '2px 2px 0px #000000',
  },
  addPet: {
    position: 'absolute',
    right: '30%',
  },
  box_container: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
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
