import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { AppBar, Box, CircularProgress, Container, Grid, List, Toolbar, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import Logo from '../../../../assets/logo-white.png';
import { IClaimUsername, claimUsernameSchema } from '../../models/profile';
import ModalFullScreen from '../../../../shared/components/ModalFullScreen';
import { FormInput } from '../../../../shared/components/Controls';
import { ToastContainer } from 'react-toastify';

interface ClaimUsernameProps {
    claimUsername: (username: string) => void
};

const ClaimUsername: FC<ClaimUsernameProps> = ({ claimUsername }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [openModal, setOpenModal] = useState(true);

    const defaultValues: IClaimUsername = {
        username: '',
    };

    const methods = useForm<IClaimUsername>({
        resolver: zodResolver(claimUsernameSchema),
        defaultValues,
    });

    const handleModalClose = () => {
        setOpenModal(false);
    };

    const onSubmitHandler: SubmitHandler<IClaimUsername> = async (values: IClaimUsername) => {
        setIsLoading(true);
        const user = claimUsernameSchema.parse(values);
        claimUsername(user.username)
        setIsLoading(false);
    };

    return (
        <>
            <Container
                maxWidth={false}
                sx={{ height: '100vh', backgroundColor: { xs: '#fff', md: '#f4f4f4' } }}>
                {openModal && (
                    <ModalFullScreen open={openModal} handleClose={handleModalClose}>
                        <FormProvider {...methods}>
                            <AppBar sx={{ position: 'relative' }}>
                                <Toolbar>
                                    <Link
                                        to='/'
                                        style={{
                                            textDecoration: 'none',
                                            color: 'inherit',
                                            textAlign: 'center',
                                        }}>
                                        <Box
                                            component='img'
                                            sx={{
                                                maxWidth: { xs: '4rem', sm: '5.5rem', md: '7rem' },
                                                pt: '.4rem',
                                            }}
                                            src={Logo}
                                            alt='Logo'
                                        />
                                    </Link>
                                    <Typography sx={{ ml: 2, flex: 1 }} variant='h6' component='div'>
                                        {'Claim username'}
                                    </Typography>
                                    <LoadingButton
                                        loading={isLoading}
                                        type='submit'
                                        color='info'
                                        size='large'
                                        loadingIndicator={<CircularProgress color='info' size={22} />}
                                        sx={{
                                            backgroundColor: 'primary',
                                            textDecorationColor: 'info',
                                        }}
                                        onClick={(...args) => void methods.handleSubmit(onSubmitHandler)(...args)}>
                                        {' Save '}
                                    </LoadingButton>
                                </Toolbar>
                            </AppBar>
                            <List sx={{ width: '100%' }}>
                                <Grid
                                    container
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Box
                                        component='form'
                                        width={'50%'}
                                        textAlign={'center'}
                                        padding='2rem'
                                        noValidate
                                        autoComplete='off'>
                                        <FormInput
                                            label='Username'
                                            type='text'
                                            name='username'
                                            fullWidth
                                            required
                                            focused
                                        />
                                    </Box>
                                </Grid>
                            </List>
                        </FormProvider>
                    </ModalFullScreen>
                )}
            </Container>
            <ToastContainer />
        </>
    )
}

export default ClaimUsername;