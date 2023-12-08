import { Fab } from '@mui/material';
import styled from '@emotion/styled';

// Styled React Route Dom Link Component
const SelectedFab = styled(Fab)`
    width: 10rem;
    background-color: #374151;
    color: #FFFFFF;
    opacity: .9;
    font-size: 1rem;
    text-transform: capitalize; 
    &:hover {
        background-color: #374151;
        color: #FFFFFF;
        opacity: 1;
    }
`;

export { SelectedFab };