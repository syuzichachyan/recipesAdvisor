export default {
  pager: {
    display: 'flex',
    justifyContent: 'space-around',
    '& li>a': {
      color: 'rgb(71, 166, 47)',
      background: 'white',
      borderColor: 'rgb(71, 166, 47)',
      '&:hover': {
        background: 'rgb(71, 166, 47)',
        color: 'white',
        borderColor: 'rgb(71, 166, 47)'
      },
      '&:focus': {
        color: 'rgb(71, 166, 47)',
        background: 'white',
        outline: 'none'
      },
      '&:active': {
        color: 'rgb(71, 166, 47)',
        background: 'white',
        outline: 'none'
      },
      '&:active:hover': {
        color: 'white',
        background: 'rgb(71, 166, 47)',
        borderColor: 'rgb(71, 166, 47)',
        outline: 'none'
      },
      '&:active:focus': {
        color: 'rgb(71, 166, 47)',
        background: 'white',
        outline: 'none'
      },
      '&:focus:hover': {
        color: 'white',
        background: 'rgb(71, 166, 47)',
        borderColor: 'rgb(71, 166, 47)',
        outline: 'none'
      }
    }
  }
};
