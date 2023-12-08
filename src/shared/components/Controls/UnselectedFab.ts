import { Fab } from '@mui/material';
import styled from '@emotion/styled';


const UnselectedFab = styled(Fab)`
    width: 10rem;
    backgroundColor: #EBEDEF;
    color: #000000;
    opacity: 1;
    font-size: 1rem;
    text-transform: capitalize; 
    &:hover {
        backgroundColor: #EBEDEF;
        color: #000000;
        opacity: 1;
    }
`;

export { UnselectedFab };