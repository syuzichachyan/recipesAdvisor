import backgroundImg from '../../images/loginBack.jpg';

export default {
  main: {
    backgroundImage: `url(${backgroundImg})`,
    minHeight: '100vh',
    position: 'relative',
    backgroundSize: 'cover'
  },
  link: {
    textDecoration: 'none',
    font: '25px arial, sans-serif',
    textAlign: 'center',
    color: 'white'
  },
  faq: {
    width: '100px',
    backgroundColor: 'rgb(71, 166, 47)',
    borderBottomRightRadius: '14px',
    top: '0',
    left: '0',
    position: 'relative',
    lineHeight: '40px'
  },
  login: {
    width: '120px',
    backgroundColor: 'rgb(71, 166, 47)',
    borderBottomLeftRadius: '14px',
    top: '0',
    right: '0',
    position: 'absolute',
    lineHeight: '40px'
  },
  title: {
    width: '100%',
    fontSize: '70px',
    textAlign: 'center',
    color: 'white',
    margin: '10px 0 0 0'
  }
};
