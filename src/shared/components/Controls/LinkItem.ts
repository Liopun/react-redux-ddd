import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

// Styled React Route Dom Link Component
const LinkItem = styled(Link)`
    text-decoration: none;
    color: #3683dc;
    &:hover {
        text-decoration: underline;
        color: #5ea1b6;
    }
`;

export { LinkItem };