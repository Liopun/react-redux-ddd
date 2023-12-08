import { FC, useEffect, useState } from "react"
import { Box, Container, Typography } from '@mui/material';
import Loader from "../../../../shared/components/Loader";
import { ToastContainer } from "react-toastify";

interface ActivationProps {
    code: string
    activate: (code: string) => void
};

const Activation: FC<ActivationProps> = ({ code, activate }) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        activate(code);
        setIsLoading(false);
    }, []);

    return (
        <>
            <Container
                maxWidth={false}
                sx={{ height: '100vh', backgroundColor: { xs: '#fff', md: '#f4f4f4' } }}>
                    {isLoading ? (
                        <Loader />
                    ) : (
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                minHeight: '100vh',
                                width: '100%',
                            }}
                        >
                            <Typography
                                variant='h6'
                                component='h1'
                                sx={{ textAlign: 'left', mb: '1.5rem' }}>
                                    User Activation
                            </Typography>
                        </Box>
                    )}
            </Container>
            <ToastContainer />
        </>
    )
}

export default Activation;