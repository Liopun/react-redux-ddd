import RadioGroup from '@mui/material/RadioGroup';
import { styled } from '@mui/material/styles';

// Styled Material UI TextField Component
const CssRadioGroup = styled(RadioGroup)(({ theme }) => ({
    marginBottom: '1.5rem',
    color: '#5e5b5d',
    fontWeight: 400,
}));

export { CssRadioGroup };