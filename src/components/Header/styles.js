// export default {
//   navBar: {
//     background: 'rgba(0, 0, 0, 0.5)',
//     border: 0,
//     '&>div': {
//       marginTop: 0
//     },
//     '@media (max-width: 767px)': {
//       height: '50px',
//       '&>div': {
//         height: 'inherit'
//       }
//     }
//   },
//   navBarBrand: {
//     color: 'rgb(255, 255, 255)',
//     float: 'left',
//     height: '50px',
//     padding: '15px',
//     fontSize: '18px',
//     lineHeight: '20px',
//     '&:hover': {
//       color: 'rgba(255, 255, 255, 0.8)',
//       textDecoration: 'none'
//     },
//     '&:focus': {
//       color: 'white',
//       textDecoration: 'none',
//       '&:hover': {
//         color: 'rgba(255, 255, 255, 0.8)',
//         textDecoration: 'none'
//       }
//     }
//   },
//   dropDown: {
//     float: 'right',
//     padding: '12px',
//     '@media (max-width: 767px)': {
//       marginTop: '-50px'
//     },
//     '&>li': {
//       display: 'block',
//       '&>a': {
//         color: 'white',
//         '&:hover': {
//           color: 'rgba(255, 255, 255, 0.8)'
//         }
//       },
//       '&>ul': {
//         background: 'rgba(0, 0, 0, 0.5)',
//         marginTop: '13px',
//         minWidth: '120px',
//         left: 'auto',
//         right: '-30px',
//         '&>li': {
//           width: '100%',
//           padding: 0,
//           '& a': {
//             width: '100%',
//             color: 'white',
//             '&:hover': {
//               background: 0,
//               color: 'rgba(255, 255, 255, 0.8)',
//               '&:focus': {
//                 color: 'rgba(255, 255, 255, 0.8)'
//               }
//             },
//             '&:focus': {
//               outline: 0,
//               background: 0,
//               color: 'white'
//             }
//           }
//         }
//       }
//     },
//     '&>.open': {
//       '&>a': {
//         background: 'none',
//         border: 'none',
//         '&:focus': {
//           background: 'none',
//           border: 'none'
//         }
//       }
//     }
//   },
//   glyph: {
//     marginRight: '10px'
//   },
//
//   ListGlyph: {
//     fontSize: '20px'
//   }
// };

export default {
    headerArea: {
        position: 'fixed',
        top: 0,
        width: '100%',
        height: 'auto',
        left: 0,
        paddingTop: '20px',
        transitionDuration: '500ms, 500ms',
        zIndex: 1030
    },
    sticky: {
        backgroundColor: 'black',
        paddingTop: 0,
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.15)'
    },
    container: {
        marginTop: 0
    },
    navBar: {
        boxShadow: 'none',
        borderBottom: '1px solid white',
        transitionDuration: '500ms'
    },
    navBarBrand: {
        color: 'white',
        '&:hover': {
            color: 'white'
        }
    },
    navBarScroll: {
        border: 'none'
    },
    collapsed: {
        '@media (max-width: 767px)': {
            backgroundColor: 'black',
            borderRadius: '2px',
            borderTop: '1px solid white'
        }
    },
    navLink: {
        '& > div': {
            background: 'transparent'
        }
    }
};
