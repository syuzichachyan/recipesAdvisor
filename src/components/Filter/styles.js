export default {
  main: {
    marginLeft: '500px',
    position: 'relative',
    height: '40px',
    width: '100px'
  },
  button: {
    width: '100px',
    textTransform: 'uppercase',
    font: {
      size: '19px',
      weight: '500'
    },
    color: 'white',
    height: '100%',
    border: 0,
    backgroundColor: 'rgb(0, 190, 0)',
    borderRadius: '5px',
    outline: 0
  },
  buttonActive: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  dropdown: {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid rgb(226, 226, 226)',
    width: '305px',
    height: '224px',
    backgroundColor: 'white',
    position: 'absolute',
    top: '100%',
    right: 0
  },
  sectionTitle: {
    width: '100%',
    paddingLeft: '3px',
    lineHeight: '30px',
    fontSize: '17px'
  },
  dietSection: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '5px'
  },
  dietSectionButton: {
    paddingLeft: '3px',
    lineHeight: '30px',
    fontSize: '15px',
    backgroundColor: 'rgb(239, 240, 240)'
  },
  healthSection: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '5px'
  },
  healthSectionButton: {
    paddingLeft: '3px',
    lineHeight: '30px',
    fontSize: '15px',
    backgroundColor: 'rgb(239, 240, 240)'
  },
  calSection: {
    display: 'flex',
    justifyContent: 'space-around',
    fontSize: '17px',
    lineHeight: '32px',
    height: '32px'
  },
  input: {
    outline: 0,
    width: '60px',
    height: '30px',
    borderRadius: '3px'
  }
};
