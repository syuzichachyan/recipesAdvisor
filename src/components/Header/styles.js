export default {
  navBar: {
    background: 'rgba(0, 0, 0, 0.5)',
    border: 0,

    '& .navbar-nav .open .dropdown-menu>li': {
      '@media (max-width: 767px)': {
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '4px'
      }
    },

    '& .navbar-nav .open .dropdown-menu>li>a': {
      '@media (max-width: 767px)': {
        color: 'white'
      },

      '&:hover': {
        color: 'rgba(255, 255, 255, 0.8)'
      }
    }
  },

  navBarBrand: {
    color: 'rgb(255, 255, 255)',
    float: 'left',
    height: '50px',
    padding: '15px',
    fontSize: '18px',
    lineHeight: '20px',

    '&:hover': {
      color: 'rgba(255, 255, 255, 0.8)',
      textDecoration: 'none'
    },

    '&:focus': {
      color: 'white',
      textDecoration: 'none'
    },

    '&:focus:hover': {
      color: 'rgba(255, 255, 255, 0.8)',
      textDecoration: 'none'
    }
  },

  dropDown: {
    padding: '15px',

    '&>li>a': {
      color: 'white',

      '&:hover': {
        color: 'rgba(255, 255, 255, 0.8)'
      }
    },

    '&>.open': {
      '&>a': {
        background: 'none',
        border: 'none',

        '&:focus': {
          background: 'none',
          border: 'none'
        }
      }
    },

    '&>li>ul': {
      background: 'rgba(0, 0, 0, 0.5)',
      marginTop: '15px',
      minWidth: '120px',

      '&>li': {
        width: '100%',
        padding: 0,

        '& a': {
          width: '100%',
          color: 'white',

          '&:hover': {
            background: 0,
            color: 'rgba(255, 255, 255, 0.8)'
          },

          '&:focus': {
            outline: 0,
            background: 0,
            color: 'white'
          },

          '&:hover:focus': {
            color: 'rgba(255, 255, 255, 0.8)'
          }
        }
      }
    }
  }
};
