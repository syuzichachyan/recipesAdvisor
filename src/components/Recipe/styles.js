export default {
  recipe: {
    padding: '20px'
  },
  favBtn: {
    position: 'absolute',
    margin: '-105px 105px',
    border: 0,
    background: 0,
    zIndex: 100,
    '&:focus': {
      outline: 0
    }
  },
  glyph: {
    color: 'rgb(250, 97, 97)',
    fontSize: '30px'
  },
  img: {
    width: '40%'
  },
  scene: {
    width: '300px',
    height: '450px',
    perspective: '600px'
  },
  card: {
    width: '100%',
    height: '100%',
    transition: 'transform 1s',
    transformStyle: 'preserve-3d',
    cursor: 'pointer',
    position: 'relative'
  },
  isFlipped: {
    transform: 'rotateY(180deg)',
    '&>div>#imageWrapper': {
      opacity: 0
    }
  },
  cardFace: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    lineHeight: '260px',
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '40px',
    backfaceVisibility: 'hidden'
  },
  col: {
    height: '450px',
    width: '300px',
    padding: 0,
    overflow: 'hidden',
    marginTop: '40px',
    marginBottom: '30px',
    marginLeft: '30px',
    borderRadius: '1px',
    transition: '250ms ease-in',
    transform: 'translate(0, 0)',
    boxShadow: '1px 1px 8px lightgrey',
    '&:hover': {
      cursor: 'pointer',
      transition: '220ms ease-in',
      transform: 'translate(0, -5px)',
      boxShadow: '0 0 13px grey'
    },
    '&:focus': {
      cursor: 'pointer',
      transition: '220ms ease-in',
      transform: 'translate(0, -5px)',
      boxShadow: '0 0 13px grey'
    }
  },
  cardFaceFront: {
    color: 'red',
    '&:hover': {
      '&>div>#mainImage': {
        transition: '190ms ease-in',
        transform: 'scale(1.15)',
        opacity: '.8'
      },
      '&>div>#plus': {
        transition: '200ms ease-in',
        transform: 'translate(0, 50px)',
        opacity: 1,
        zIndex: 2
      }
    },
    '&:focus': {
      '&>div>#mainImage': {
        transition: '190ms ease-in',
        transform: 'scale(1.15)',
        opacity: '.8'
      },
      '&>div>#plus': {
        transition: '200ms ease-in',
        transform: 'translate(0, 50px)',
        opacity: 1,
        zIndex: 2
      }
    }
  },
  cardFaceBack: {
    color: 'blue',
    transform: 'rotateY(180deg)'
  },
  plus: {
    display: 'inline-block',
    position: 'absolute',
    width: '30px',
    height: '30px',
    bottom: '500px',
    left: 'calc(50% - 15px)',
    transition: '200ms ease-in',
    transform: 'translate(0, -50px)',
    opacity: 0
  },
  imageWrapper: {
    width: '300px',
    height: '235px',
    backgroundColor: 'black'
  },
  mainImage: {
    marginTop: '-40px',
    width: '300px',
    height: '235px',
    transition: '190ms ease-in',
    zIndex: -1
  },
  cline: {
    position: 'absolute',
    width: '304px',
    height: '54px',
    top: '210px',
    left: '-2px',
    backgroundColor: 'white',
    transform: 'rotate(4deg)',
    zIndex: 0
  },
  title: {
    padding: '15px 10px 0',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'rgb(0, 190, 0)'
  }
};
