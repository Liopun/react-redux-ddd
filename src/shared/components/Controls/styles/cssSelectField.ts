import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import { Theme } from '@mui/material/styles';

// Styled Material UI TextField Component
const CssSelectField = styled(Select)({
    marginBottom: '1.5rem',
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#c8d0d4',
        borderRadius: 0,
    },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const getStyles = (name: string, selectItem: readonly string[], theme: Theme) => {
    return {
        fontWeight:
            selectItem.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
    };
};

export { CssSelectField, MenuProps, getStyles };