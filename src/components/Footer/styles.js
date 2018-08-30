export default {
  root: {
    background: '#3E4551',
    color: 'white'
  },
  components: {
    display: 'flex',
    justifyContent: 'space-around',
    '&>div:nth-of-type(1)': {
      flexBasis: '60%'
    },
    '&>div:nth-of-type(2)': {
      flexBasis: '20%'
    },
    '&>div:nth-of-type(3)': {
      flexBasis: '20%'
    }
  },
  description: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: '15px',
    '@media (max-width: 690px)': {
      display: 'none'
    }
  },
  title: {
    fontWeight: 600
  },
  descriptionBody: {
    textAlign: 'start',
    maxWidth: '80%'
  },
  support: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  lightGray: {
    color: 'lightgray'
  },
  link: {
    '&:hover': {
      color: 'white',
      textDecoration: 'none'
    },
    '&:focus': {
      color: 'lightgray',
      outline: 0,
      textDecoration: 'none'
    },
    '&:focus:hover': {
      color: 'white'
    }
  },
  contact: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginRight: '15px'
  },
  icon: {
    color: 'white',
    fontSize: '20px'
  },
  footerDown: {
    display: 'flex'
  },
  copyright: {
    color: 'gray',
    flexBasis: '20%',
    marginLeft: '20px'
  },
  downLinks: {
    flexBasis: '80%',
    marginRight: '20px'
  },
  hr: {
    margin: '10px auto',
    borderColor: 'gray'
  }
};
