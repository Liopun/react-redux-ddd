import React, { useState } from 'react';
import { Container, Grid, Box, Typography, Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { FC } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ToastContainer } from 'react-toastify';
import { FormInput, LinkItem, OauthMuiLink } from '../../../../shared/components/Controls';
import GoogleLogo from '../../../../assets/google.svg';
import GithubLogo from '../../../../assets/github.svg';
import Logo from '../../../../assets/logo.png';
import { ISignup, signupSchema } from '../../models/auth';


interface SignupProps {
    signup: (email: string, password: string) => void
};

const Signup: FC<SignupProps> = ({ signup }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    // initial values
    const defaultValues: ISignup = {
        email: '',
        password: '',
        passwordConfirm: '',
    };

    // useForm hook object
    const methods = useForm<ISignup>({
        resolver: zodResolver(signupSchema),
        defaultValues,
    });

    // submit handler
    const onSubmitHandler: SubmitHandler<ISignup> = async (values: ISignup) => {
        setIsLoading(true);
        const user = signupSchema.parse(values);
        signup(user.email, user.password)
        setIsLoading(false);
    };

    return (
        <Container maxWidth={false} sx={{ height: '100vh', backgroundColor: { xs: '#fff', md: '#f4f4f4' } }}>
            <Grid container justifyContent='center' alignItems='center' sx={{ width: '100%', height: '100%' }}>
                <Grid item sx={{ maxWidth: '70rem', width: '100%', backgroundColor: '#fff' }}>
                    <Grid container sx={{ boxShadow: { sm: '0 0 5px #ddd' }, py: '6rem', px: '1rem' }}>
                        <FormProvider {...methods}>
                            <Grid
                                item
                                container
                                justifyContent='space-between'
                                rowSpacing={5}
                                sx={{ maxWidth: { sm: '45rem' }, marginInline: 'auto' }}>
                                <Grid item xs={12} sm={6} sx={{ borderRight: { sm: '1px solid #ddd' } }}>
                                    <Box
                                        display='flex'
                                        flexDirection='column'
                                        component='form'
                                        noValidate
                                        autoComplete='off'
                                        sx={{ paddingRight: { sm: '3rem' } }}
                                        onSubmit={(...args) => void methods.handleSubmit(onSubmitHandler)(...args)}>
                                        <Typography
                                            variant='h6'
                                            component='h1'
                                            sx={{ textAlign: 'center', mb: '1.5rem' }}>
                                            {' '}
                                            <img src={Logo} alt='lgoog' width='50%' />{' '}
                                        </Typography>
                                        <FormInput
                                            label='Enter your email'
                                            type='email'
                                            name='email'
                                            focused
                                            required
                                        />
                                        <FormInput label='Password' type='password' name='password' required focused />
                                        <FormInput
                                            label='Confirm password'
                                            type='password'
                                            name='passwordConfirm'
                                            required
                                            focused
                                        />

                                        <LoadingButton
                                            loading={isLoading}
                                            type='submit'
                                            variant='contained'
                                            sx={{
                                                py: '0.8rem',
                                                mt: 2,
                                                width: '80%',
                                                marginInline: 'auto',
                                            }}>
                                            {' '}
                                            Sign Up{' '}
                                        </LoadingButton>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography
                                        variant='h6'
                                        component='p'
                                        sx={{
                                            fontSize: '1.5rem',
                                            letterSpacing: '-0.05em',
                                            color: '#788292',
                                            fontWeight: '10',
                                            paddingLeft: { sm: '3rem' },
                                            mb: '1.5rem',
                                            mt: '50%',
                                            textAlign: 'center',
                                        }}>
                                        {' '}
                                        or sign up with:{' '}
                                    </Typography>
                                    <Box
                                        display='flex'
                                        flexDirection='column'
                                        sx={{ paddingLeft: { sm: '3rem' }, rowGap: '1rem' }}>
                                        <OauthMuiLink href=''>
                                            <img src={GoogleLogo} alt='google logo' style={{ height: '1.5rem' }} />
                                            Google
                                        </OauthMuiLink>
                                        <OauthMuiLink href=''>
                                            <img src={GithubLogo} alt='github logo' style={{ height: '1.5rem' }} />
                                            GitHub
                                        </OauthMuiLink>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid container justifyContent='center'>
                                <Stack sx={{ mt: '3rem', textAlign: 'center' }}>
                                    <Typography sx={{ fontSize: '0.9rem', mb: '1rem' }}>
                                        Already have an account? <LinkItem to='/signin'>Sign In</LinkItem>
                                    </Typography>
                                </Stack>
                            </Grid>
                        </FormProvider>
                    </Grid>
                </Grid>
            </Grid>
            <ToastContainer />
        </Container>
    );
};

export default Signup;