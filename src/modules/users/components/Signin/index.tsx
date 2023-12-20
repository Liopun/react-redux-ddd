import { Container, Grid, Box, Typography, Stack, FormControlLabel, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { FC, ReactElement, useState } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ToastContainer } from 'react-toastify';
import { FormInput } from '../../../../shared/components/Controls';
import { LinkItem } from '../../../../shared/components/Controls';
import Logo from '../../../../assets/logo.png';
import 'react-toastify/dist/ReactToastify.css';
import { ISignin, signinSchema } from '../../models/auth';

interface SigninProps {
    signin: (username: string, password: string) => void
    children: ReactElement;
};

const Signin: FC<SigninProps> = ({ signin, children: OAuthButtons }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    // initial values
    const defaultValues: ISignin = {
        username: '',
        password: '',
    };

    // useForm hook object
    const methods = useForm<ISignin>({
        resolver: zodResolver(signinSchema),
        defaultValues,
    });

    // submit handler
    const onSubmitHandler: SubmitHandler<ISignin> = async (values: ISignin) => {
        setIsLoading(true);
        const user = signinSchema.parse(values);
        signin(user.username, user.password)
        setIsLoading(false);
    };

    return (
        <Container maxWidth={false} sx={{ height: '100vh', backgroundColor: { xs: '#fff', md: '#f4f4f4' } }}>
            <Grid container justifyContent='center' alignItems='center' sx={{ width: '100%', height: '100%' }}>
                <Grid item sx={{ maxWidth: '70rem', width: '100%', backgroundColor: '#fff' }}>
                    <FormProvider {...methods}>
                        <Grid container sx={{ boxShadow: { sm: '0 0 5px #ddd' }, py: '6rem', px: '1rem' }}>
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
                                            <img src={Logo} alt='lgoog' width='50%' />
                                        </Typography>

                                        <FormInput
                                            label='Enter your username'
                                            type='text'
                                            name='username'
                                            required
                                            focused
                                        />
                                        <FormInput type='password' label='Password' name='password' required focused />

                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    size='small'
                                                    aria-label='Remember me checkbox'
                                                    {...methods.register('rememberMe')}
                                                />
                                            }
                                            label={
                                                <Typography
                                                    variant='body2'
                                                    sx={{
                                                        fontSize: '0.8rem',
                                                        fontWeight: 400,
                                                        color: '#5e5b5d',
                                                    }}>
                                                    {' '}
                                                    Remember Me{' '}
                                                </Typography>
                                            }
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
                                            Sign In{' '}
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
                                            mt: '30%',
                                            textAlign: 'center',
                                        }}>
                                        {' '}
                                        or sign in with:{' '}
                                    </Typography>
                                    { OAuthButtons }
                                </Grid>
                            </Grid>
                            <Grid container justifyContent='center'>
                                <Stack sx={{ mt: '3rem', textAlign: 'center' }}>
                                    <Typography sx={{ fontSize: '0.9rem', mb: '1rem' }}>
                                        Need an account? <LinkItem to='/signup'>Sign Up</LinkItem>
                                    </Typography>
                                    <Typography sx={{ fontSize: '0.9rem' }}>
                                        Forgot <LinkItem to='/forgotPassword'>Password?</LinkItem>
                                    </Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                    </FormProvider>
                </Grid>
            </Grid>
            <ToastContainer />
        </Container>
    );
};

export default Signin;