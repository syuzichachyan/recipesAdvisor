export default {
  wrapper: {
    '@media (min-width: 950px)': {
      height: '600px'
    },
    '@media (min-width: 850px) and (max-width: 950px)': {
      height: '520px'
    },
    '@media (min-width: 750px) and (max-width: 850px)': {
      height: '450px'
    },
    '@media (min-width: 650px) and (max-width: 750px)': {
      height: '390px'
    },
    '@media (min-width: 550px) and (max-width: 650px)': {
      height: '330px'
    },
    '@media (min-width: 450px) and (max-width: 550px)': {
      height: '270px'
    },
    height: '210px',
    width: '100%'
  },
  opacity: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  image: {
    '@media (min-width: 950px)': {
      height: '600px'
    },
    '@media (min-width: 850px) and (max-width: 950px)': {
      height: '520px'
    },
    '@media (min-width: 750px) and (max-width: 850px)': {
      height: '450px'
    },
    '@media (min-width: 650px) and (max-width: 750px)': {
      height: '390px'
    },
    '@media (min-width: 550px) and (max-width: 650px)': {
      height: '330px'
    },
    '@media (min-width: 450px) and (max-width: 550px)': {
      height: '270px'
    },
    position: 'absolute',
    top: 0,
    height: '210px',
    width: '100%',
    zIndex: '-1',
    transitionProperty: 'opacity',
    transitionDuration: '2s'
  },
  dNone: {
    // display: 'none',
    opacity: '0'
  }
};
