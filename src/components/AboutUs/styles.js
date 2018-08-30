const green = 'rgb(0, 190, 0)';

export default {
  container: {
    margin: '70px 200px',
    '@media (max-width: 850px)': {
      margin: '70px 100px'
    },
    '@media (max-width: 500px)': {
      margin: '70px 50px'
    }
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '50px auto',
    color: green
  },
  subTitle: {
    textAlign: 'center',
    margin: 'auto 100px 50px',
    '@media (max-width: 1000px)': {
      margin: 'auto auto 50px'
    }
  },
  food: {
    color: green,
    fontWeight: 'bold',
    marginBottom: '30px'
  },
  glyph: {
    paddingRight: '10px'
  },
  img: {
    margin: '0 auto',
    boxShadow: '2px 2px 3px 3px lightgray',
    '@media (max-width: 850px)': {
      maxWidth: '70%'
    }
  },
  hr: {
    margin: '40px 10px'
  },
  h3: {
    marginBottom: '30px',
    padding: 0
  }
};
