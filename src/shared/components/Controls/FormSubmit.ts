import { Button } from '@mui/material';
import styled from '@emotion/styled';

// Styled React Route Dom Link Component
const FormSubmit = styled(Button)`
    width: 10rem;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 1rem;
    text-transform: capitalize;
    font-weight: 400;
    line-height: 1.5;
    padding: .5rem;
    border-radius: 3rem 0rem 3rem 3rem;
    opacity: .8;
    color: #000000;
    background: yellow;
    border: 1px solid #EBEDEF;
    box-shadow: 0px 2px 2px #EBEDEF;

    &:hover {
        border-color: #EBEDEF;
        color: #000000;
        background: #EBEDEF;
        opacity: 1;
    }

    &:focus {
        border-color: #EBEDEF;
        color: #000000;
        background: #EBEDEF;
        opacity: 1;
    }

    // firefox
    &:focus-visible {
        outline: 0;
    }
`;

export { FormSubmit };