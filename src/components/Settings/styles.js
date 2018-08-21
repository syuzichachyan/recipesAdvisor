export default {
  settings: {
    marginTop: '65px'
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '50px'
  },
  tabs: {
    '&>ul': {
      display: 'flex',
      justifyContent: 'center',
      '&>li>a': {
        color: 'rgb(71, 166, 47)',
        '&:focus': {
          outline: 0
        }
      }
    }
  }
};
