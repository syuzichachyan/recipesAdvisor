import backgroundImg from '../../images/loginBack.jpg';

export default {
  main: {
    background: `url(${backgroundImg}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    minHeight: '100vh'
  },
  topButtonsContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    top: 0
  },
  link: {
    textDecoration: 'none',
    font: '25px arial, sans-serif',
    textAlign: 'center',
    color: 'white',
    '&:hover': {
      '& $faq': {
        color: 'rgb(71, 166, 47)',
        backgroundColor: 'white'
      },
      '& $profile': {
        color: 'rgb(71, 166, 47)',
        backgroundColor: 'white'
      }
    },
    '&:focus, &:hover, &:visited, &:link, &:active': {
      textDecoration: 'none'
    }
  },
  faq: {
    width: '100px',
    backgroundColor: 'rgb(71, 166, 47)',
    borderBottomRightRadius: '14px',
    lineHeight: '36px',
    border: '2px solid rgb(71, 166, 47)'
  },
  profile: {
    width: '120px',
    backgroundColor: 'rgb(71, 166, 47)',
    borderBottomLeftRadius: '14px',
    lineHeight: '36px',
    border: '2px solid rgb(71, 166, 47)'
  },
  title: {
    width: '100%',
    fontSize: '70px',
    textAlign: 'center',
    color: 'white',
    margin: '10px 0 0 0'
  }
};
