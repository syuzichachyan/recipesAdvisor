export default {
  container: {
    display: 'inline-block',
    position: 'relative',
    width: '25px',
    height: '25px',
    cursor: 'pointer',
    fontSize: '22px',
    '-webkit-user-select': 'none',
    '-moz-user-select': 'none',
    '-ms-user-select': 'none',
    userSelect: 'none',
    '&:hover input ~ $checkmark': {
      backgroundColor: '#ccc'
    },
    '& input': {
      display: 'none',
      position: 'absolute',
      opacity: 0,
      cursor: 'pointer',
      '&:checked ~ $checkmark': {
        backgroundColor: 'rgb(71, 166, 47)',
        '&:after': {
          display: 'block'
        }
      }
    },
    '& $checkmark:after': {
      left: '9px',
      top: '5px',
      width: '5px',
      height: '10px',
      border: 'solid white',
      borderWidth: '0 3px 3px 0',
      '-webkit-transform': 'rotate(45deg)',
      '-ms-transform': 'rotate(45deg)',
      transform: 'rotate(45deg)'
    }
  },
  checkmark: {
    borderRadius: '3px',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '25px',
    width: '25px',
    backgroundColor: '#eee',
    '&:after': {
      content: "''",
      position: 'absolute',
      display: 'none'
    }
  }
};
