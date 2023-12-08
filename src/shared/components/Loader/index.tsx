import { Box, CircularProgress } from '@mui/material';
import { FC } from 'react';

const Loader: FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                width: '100%',
            }}>
            <CircularProgress color='primary' />
        </Box>
    );
};

export default Loader;