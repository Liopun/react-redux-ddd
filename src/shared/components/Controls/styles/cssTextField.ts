import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled Material UI TextField Component
const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#5e5b5d',
        fontWeight: 400,
    },
    '& .MuiInputBase-input': {
        borderColor: '#c8d0d4',
    },
    '& .MuiInput-underline:after': {
        border: 'none',
    },
    '& .MuiOutlinedInput-root': {
        '&.Mui-error': {
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#d32f2f',
            },
        },
        '& fieldset': {
            borderColor: '#c8d0d4',
            borderRadius: 0,
        },
        '&:hover fieldset': {
            border: '1px solid #c8d0d4',
        },
        '&.Mui-focused fieldset': {
            border: '1px solid #c8d0d4',
        },
    },
});

const CssAuthenticatedTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#5e5b5d',
        fontWeight: 400,
    },
    '& .MuiInputBase-input': {
        borderColor: '#c8d0d4',
    },
    '& .MuiFilledInput-underline:after': {
        border: 'none',
    },
    '& .MuiFilledInput-root': {
        borderRadius: 5,
        '&.Mui-error': {
            '& .MuiFilledInput-notchedFill': {
                borderColor: '#d32f2f',
            },
        },
        '& fieldset': {
            borderColor: '#c8d0d4',
        },
        '&:hover fieldset': {
            border: '1px solid #c8d0d4',
        },
        '&.Mui-focused fieldset': {
            border: '1px solid #c8d0d4',
        },
    },
});

export { CssTextField, CssAuthenticatedTextField };