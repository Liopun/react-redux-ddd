import { TextareaAutosize } from '@mui/material';
import styled from '@emotion/styled';

// Styled React Route Dom Link Component
const FormTextArea = styled(TextareaAutosize)`
    width: 100%;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    padding: .8rem;
    border-radius: 2rem 2rem 0 0;
    opacity: .8;
    color: #000000;
    background: #EBEDEF;
    border: 1px solid #EBEDEF;
    box-shadow: 0px 2px 2px #EBEDEF;

    &:hover {
        border-color: #EBEDEF;
        opacity: 1;
    }

    &:focus {
        border-color: #EBEDEF;
        box-shadow: 0 0 0 3px #EBEDEF;
        opacity: 1;
    }

    // firefox
    &:focus-visible {
        outline: 0;
    }
`;

export { FormTextArea };