import { FC } from 'react';
import { Home } from '@mui/icons-material';
import { Button, Container, Divider, Grid, Stack, Typography } from '@mui/material';
import { Layout } from '../shared/layout';

const NotFoundPage: FC = () => {
    return (
        <Layout>
            <Container maxWidth={false} sx={{ height: '100vh', backgroundColor: { xs: '#fff', md: '#f4f4f4' } }}>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ width: '100%', height: '100%', color: '#505050' }}
                >
                    <Typography component='div' fontWeight={20} fontSize={200} sx={{ mb: -5, color: '#505050' }}>404</Typography>
                    <Typography fontWeight={'100'} fontSize={20} component={'div'}>Ooops!!</Typography>
                    <Typography fontWeight={'100'} fontSize={14} textTransform={'uppercase'}>That Page Doesn't exist or is unavailable.</Typography>
                    <Button
                        color='primary'
                        variant='contained'
                        aria-label='home'
                        href='/'
                        startIcon={<Home />}
                        sx={{ 
                            marginTop: 3,
                            textTransform: 'capitalize',
                            '&:hover': {
                                backgroundColor: 'primary',
                                color: '#fff'
                            },
                        }}
                    >
                        Go back home
                    </Button>
                </Grid>
            </Container>
        </Layout>
    );
};

export default NotFoundPage;