import { FC } from 'react';
import { Home } from '@mui/icons-material';
import { Button, Container, Divider, Grid, Stack, Typography } from '@mui/material';
import { bindActionCreators } from "redux";
import { Layout } from '../shared/layout';
import usersOperators, { IUserOperators } from '../modules/users/redux/operators';
import { UserState } from '../modules/users/redux/states';
import { BrowserHistory } from 'history';
import React from 'react';
import withSignoutHandling from '../modules/users/hocs/withSignoutHandlers';
import { connect } from 'react-redux';
import { User } from '../modules/users/models/user';

interface IndexPageProps extends IUserOperators {
    users: UserState
    history: BrowserHistory
}

class IndexPage extends React.Component<IndexPageProps> {
    constructor(props: IndexPageProps) {
        super(props);
    }

    render () {
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
                        <Typography component='div' fontWeight={20} fontSize={200} sx={{ mb: -5, color: '#505050' }}>Home,</Typography>
                        <Typography fontWeight={'100'} fontSize={20} component={'div'}>Welcome, User: {(this.props.users.user as User).username}</Typography>
                        <Button
                            color='primary'
                            variant='contained'
                            aria-label='home'
                            disabled={this.props.users.isSigningOut}
                            onClick={(e) => {
                                e.preventDefault()
                                this.props.signout()
                            }}
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
                            {'Sign Out'}
                        </Button>
                    </Grid>
                </Container>
            </Layout>
        )
    }
}

const mapStateToProps = ({ users }: { users: UserState }) => {
    return {
      users
    };
}
  
const mapActionCreatorsToProps = (dispatch: any) => {
    return bindActionCreators(
      {
        ...usersOperators,
      }, dispatch);
}
  
export default connect(mapStateToProps, mapActionCreatorsToProps)(
    withSignoutHandling(IndexPage)
);

// export default IndexPage;