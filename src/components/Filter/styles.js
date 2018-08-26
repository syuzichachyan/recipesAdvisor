// const green = 'rgb(0, 190, 0)';

export default {
  main: {
    position: 'relative',
    height: '30px',
    width: '200px',
    display: 'flex'
  },
  dropdownButtonContainer: {
    border: '1px solid rgb(157, 157, 157)',
    borderRadius: '0 5px 5px 0',
    borderLeft: 0,
    width: '30px',
    height: '30px',
    overflow: 'hidden'
  },
  dropdownButtonContainerActive: {
    borderBottom: 0,
    borderBottomRightRadius: 0
  },
  dropdownOpenButton: {
    position: 'relative',
    top: 0,
    width: '29px',
    height: '29px',
    transition: '.2s',
    padding: '4px 0 0 4px',
    fontSize: '20px',
    outline: 0,
    backgroundColor: 'white'
  },
  dropdownOpenButtonActive: {
    backgroundColor: 'rgb(230, 230, 230)',
    transition: '.2s'
  },
  search: {
    textDecoration: 'none',
    padding: '0 5px 0 3px',
    width: '170px',
    font: {
      size: '16px',
      weight: '500'
    },
    color: 'rgb(0, 0, 0)',
    height: '100%',
    border: '1px solid rgb(157, 157, 157)',
    backgroundColor: 'white',
    borderRadius: '5px 0 0 5px',
    outline: 0
  },
  searchActive: {
    borderBottom: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  dropdown: {
    zIndex: 100000,
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid rgb(157, 157, 157)',
    width: '335px',
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
  },
  searchButton: {
    width: '70px',
    border: 0,
    lineHeight: '20px'
  }
};
