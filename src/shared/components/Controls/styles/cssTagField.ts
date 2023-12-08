import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled Material UI TextField Component
const CssTagField = styled(TextField)({
    border: 'none',
    '& label.Mui-focused': {
        color: '#000000',
        fontWeight: 400,
    },
    '& .MuiInputBase-input': {
        borderColor: '#EBEDEF',
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
            borderColor: '#EBEDEF',
            borderRadius: '3rem',
        },
        '&:hover fieldset': {
            border: 'none !important',
        },
        '&.Mui-focused fieldset': {
            border: 'none  !important',
        },
    },
});

export { CssTagField };