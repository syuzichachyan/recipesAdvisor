export default {
  form: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '276px'
  },
  searchBar: {
    minWidth: '200px',
    maxWidth: '250px',
    height: '35px',
    border: '2px solid gray',
    borderRadius: '1000px',
    transitionProperty: 'min-width, width, height, border-radius',
    transitionDuration: '1s, 1s, .5s, 1s',
    '&:focus': {
      outline: 0,
      borderColor: 'gray',
      boxShadow: 'none'
    }
  },
  closed: {
    cursor: 'pointer',
    padding: 0,
    minWidth: '20px',
    width: '20px',
    height: '20px',
    borderRadius: '50%'
  },
  dNone: {
    display: 'none'
  },
  searchIcon: {
    position: 'relative',
    top: '12px',
    height: '12px',
    width: '1px',
    border: '1px solid gray',
    transform: 'rotate(-45deg)'
  },
  closeIcon: {
    color: 'gray',
    position: 'relative',
    right: '23px !important',
    bottom: '2px',
    fontWeight: 100,
    cursor: 'pointer'
  }
};
