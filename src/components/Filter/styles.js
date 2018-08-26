const borderColor = 'rgb(157, 157, 157)';

export default {
  main: {
    position: 'relative',
    height: '30px',
    width: '200px',
    display: 'flex'
  },
  dropdownButtonContainer: {
    border: '1px solid ' + borderColor,
    borderRadius: '0 5px 5px 0',
    borderLeft: 0,
    width: '30px',
    height: '30px',
    overflow: 'hidden'
  },
  dropdownButtonContainerActive: {
    borderBottomRightRadius: 0,
    width: '30px',
    height: '30px'
  },
  dropdownOpenButton: {
    cursor: 'pointer',
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
    border: '1px solid ' + borderColor,
    backgroundColor: 'white',
    borderRadius: '5px 0 0 5px',
    outline: 0
  },
  searchActive: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    transition: '.2s'
  },
  dropdownClose: {
    zIndex: 100000,
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid ' + borderColor,
    borderRadius: '5px 0 5px 5px',
    width: '335px',
    height: '260px',
    backgroundColor: 'white',
    position: 'absolute',
    padding: '2px 5px 0 5px',
    top: 'calc(100% - 1px)',
    right: 0,
    transition: '.2s',
    overflow: 'hidden',
    opacity: 0,
    '& > div': {
      userSelect: 'none'
    }
  },
  dropdownActive: {
    transition: '.2s',
    overflow: 'hidden',
    opacity: 1
  },
  sectionTitle: {
    width: '100%',
    paddingLeft: '9px',
    lineHeight: '34px',
    fontSize: '19px'
  },
  dietSection: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '5px'
  },
  dietSectionButton: {
    paddingLeft: '3px',
    lineHeight: '28px',
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
    lineHeight: '28px',
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
  cal: {
    fontSize: '19px'
  },
  fromTo: {
    fontSize: '17px'
  },
  calInput: {
    border: '1px solid ' + borderColor,
    outline: 0,
    width: '70px',
    height: '25px',
    borderRadius: '3px',
    appearance: 'none'
  },
  searchButton: {
    width: '70px',
    border: 0,
    lineHeight: '20px'
  },
  hr: {
    margin: 0,
    borderColor
  }
};
