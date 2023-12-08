export default {
    // marginTop: -3,
    control: {
      backgroundColor: '#FFFFFF',
      color: 'rgba(0,0,0, .8)',
      fontSize: '1rem',
      fontWeight: 'normal',
    },
  
    '&multiLine': {
      control: {
        minHeight: '2rem',
      },
      highlighter: {
        padding: '5px',
        border: '1px solid transparent',
      },
      input: {
        padding: '5px',
        paddingTop: '8px',
        color: 'rgba(0,0,0, .8)',
        backgroundColor: '#FFFFFF',
        outline: '0px solid #EBEDEF',
        border: '0px solid #EBEDEF'
      },
    },
  
    '&singleLine': {
      display: 'inline-block',
      width: 180,
  
      highlighter: {
        padding: '5px',
        border: '2px inset transparent',
        backgroundColor: '#FFFFFF',
      },
      input: {
        padding: '5px',
        paddingTop: '8px',
        color: '#000000',
        border: '0px solid #EBEDEF',
        outline: '0px solid #EBEDEF'
      },
    },
  
    suggestions: {
        maxHeight: '20rem',
        overflowY: 'auto',
        borderRadius: '1rem',
        border: '1px solid rgba(128, 128, 128, .3)',
        boxShadow: '0px 1px 2px rgba(128, 128, 128, .8)',
        zIndex: 9999,
        list: {
            backgroundColor: 'rgba(235, 237, 239, .5)',
            border: '1px solid rgba(235, 237, 239, .5)',
            fontSize: '1rem',
            borderRadius: '1rem'
        },
        item: {
            padding: '5px 15px',
            borderBottom: '1px solid rgba(235, 237, 239, .5)',
            opacity: '.8',
            '&focused': {
                borderBottom: '1px solid rgba(235, 237, 239, 1)',
                backgroundColor: 'rgba(235, 237, 239, 1)',
                opacity: '1',
            },
        },
    },
  }

//   width: 100%;
//     font-family: IBM Plex Sans, sans-serif;
//     font-size: 1rem;
//     font-weight: 400;
//     line-height: 1.5;
//     padding: .8rem;
//     border-radius: 3rem 3rem 0 3rem;
//     opacity: .8;
//     color: #000000;
//     background: #EBEDEF;
//     border: 1px solid #EBEDEF;
//     box-shadow: 0px 2px 2px #EBEDEF;

//     &:hover {
//         border-color: #EBEDEF;
//         opacity: 1;
//     }

//     &:focus {
//         border-color: #EBEDEF;
//         box-shadow: 0 0 0 3px #EBEDEF;
//         opacity: 1;
//     }

//     // firefox
//     &:focus-visible {
//         outline: 0;
//     }