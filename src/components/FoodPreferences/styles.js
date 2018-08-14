export default {
  listsContainer: {
    maxWidth: '560px',
    width: '85%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 'auto',
    alignItems: 'center',
    justifyContent: 'center'
  },
  list: {
    width: '50%',
    minWidth: '255px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  listTitle: {
    font: '40px arial, sans-serif',
    color: 'white',
    textAlign: 'center',
    margin: '15px 0 10px 0'
  },
  link: {
    minWidth: '226px',
    width: '100%'
  },
  submit: {
    backgroundColor: 'rgb(71, 166, 47)',
    border: '1px solid rgb(44, 99, 30)',
    borderRadius: '10px',
    minWidth: '226px',
    width: '100%',
    font: '26px arial, sans-serif',
    color: 'white',
    padding: '5px 0 5px 0',
    outline: 'none',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgb(71, 166, 47, 0.92)'
    }
  },
  noPrefsContainer: {
    minWidth: '251px',
    height: '34px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 'auto',
    color: 'white',
    alignItems: 'center',
    lineHeight: '25px'
  },
  noPrefsText: {
    display: 'inline-block',
    fontSize: '17px',
    marginTop: '3px',
    marginRight: '10px'
  }
};
