export default {
  card: {
    width: '100%',
    height: '44px',
    display: 'flex',
    flexDirection: 'row'
  },
  removeButContainer: {
    width: '43px',
    height: '43px',
    border: '1px solid rgb(211, 211, 211)',
    borderRight: '0',
    borderTop: '0',
    display: 'inline-block',
    overflow: 'hidden',
    cursor: 'pointer',
    '&:hover': {
      '& div': {
        color: 'black'
      }
    }
  },
  removeBut: {
    fontSize: '40px',
    width: '40px',
    height: '40px',
    paddingTop: '2px',
    transform: 'rotate(45deg)',
    textAlign: 'center',
    lineHeight: '43px',
    color: 'rgb(117, 117, 117)'
  },
  text: {
    display: 'inline-block',
    width: 'calc(100% - 44px)',
    height: '43px',
    lineHeight: '43px',
    fontSize: '18px',
    border: '1px solid rgb(211, 211, 211)',
    borderRight: '0',
    borderLeft: '0',
    borderTop: '0',
    cursor: 'default',
    padding: '0 8px 0 8px'
  }
};
