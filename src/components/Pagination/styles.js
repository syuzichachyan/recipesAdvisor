export default {
  btnGroup: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '20px 0'
  },

  btn: {
    background: 'rgb(71, 166, 47)',
    color: 'white',

    '&:hover': {
      color: 'rgb(71, 166, 47)',
      background: 'white',
      borderColor: 'rgb(71, 166, 47)'
    },

    '&:focus': {
      background: 'rgb(71, 166, 47)',
      color: 'white',
      outline: 'none'
    },

    '&:active': {
      background: 'rgb(71, 166, 47)',
      color: 'white',
      outline: 'none'
    },

    '&:active:hover': {
      background: 'white',
      color: 'rgb(71, 166, 47)',
      borderColor: 'rgb(71, 166, 47)',
      outline: 'none'
    },

    '&:active:focus': {
      background: 'rgb(71, 166, 47)',
      color: 'white',
      outline: 'none'
    },

    '&:focus:hover': {
      background: 'white',
      color: 'rgb(71, 166, 47)',
      borderColor: 'rgb(71, 166, 47)',
      outline: 'none'
    }
  }
};
