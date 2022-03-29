const styles = {
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
