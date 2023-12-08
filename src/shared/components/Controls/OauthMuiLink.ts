import { Link as MuiLink } from '@mui/material';
import styled from '@emotion/styled';

// Styled Material UI Link Component
const OauthMuiLink = styled(MuiLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ;
    border-radius: 1;
    padding: 0.6rem 0;
    column-gap: 1rem;
    text-decoration: none;
    color: ;
    font-weight: 500;
    cursor: pointer;

    &:hover {
        background-color: #fff;
        box-shadow: 0 1px 13px 0 rgb(0 0 0 / 15%);
    }
`;

export { OauthMuiLink };