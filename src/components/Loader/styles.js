export default {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '220px 0'
  },

  loading: {
    position: 'absolute',
    color: 'rgb(71, 166, 47)'
  },

  loader: {
    border: '16px solid rgba(71, 166, 47, 0.5)',
    borderRadius: '50%',
    borderTop: '16px solid rgb(71, 166, 47)',
    width: '120px',
    height: '120px',
    animation: 'spin 2s linear infinite'
  },

  '@keyframes spin': {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' }
  }
};
