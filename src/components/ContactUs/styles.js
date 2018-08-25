export default {
  container: {
    margin: '80px 150px auto'
  },
  section: {
    margin: '0'
  },
  header: {
    textAlign: 'center',
    color: 'rgb(0, 190, 0)',
    marginTop: '20px',
    marginBottom: '20px'
  },
  description: {
    textAlign: 'center',
    maxWidth: '600px',
    paddingBottom: '20px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  card: {
    height: '400px',
    width: '350px',
    borderRadius: '4px',
    boxShadow: '1px 1px 2px 2px lightgray',
    '@media (max-width: 1200px)': {
      margin: '50px auto'
    }
  },
  cardBody: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '15px'
  },
  cardTitle: {
    color: 'rgb(0, 190, 0)',
    '&>h3>span': {
      top: '4px'
    }
  },
  cardSubTitle: {
    color: 'darkgrey'
  },
  fields: {
    display: 'flex',
    padding: '5px 0'
  },
  glyph: {
    fontSize: '20px',
    top: '7px'
  },
  field: {
    height: '30px',
    width: '290px',
    marginLeft: '10px',
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    borderColor: 'lightgray',
    '&:focus': {
      outline: 0,
      borderColor: 'rgb(0, 190, 0)'
    }
  },
  area: {
    height: '100px',
    resize: 'none',
    borderWidth: '2px'
  },
  btn: {
    background: 'rgb(0, 190, 0)',
    padding: '10px 20px',
    color: 'white',
    marginTop: '20px'
  },
  row: {
    display: 'flex',
    '@media (max-width: 1200px)': {
      flexDirection: 'column'
    }
  },
  mapContainer: {
    height: '400px',
    borderRadius: '4px',
    boxShadow: '1px 1px 2px 2px lightgray',
  },
  contacts: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px'
  },
  contact: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
};
