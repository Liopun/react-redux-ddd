import React from 'react';
import { BrowserHistory } from 'history';
import { bindActionCreators } from '@reduxjs/toolkit';
import { connect } from 'react-redux';
import { IUserOperators } from "../modules/users/redux/operators";
import { UserState } from "../modules/users/redux/states";
import { Layout } from '../shared/layout';
import Signin from '../modules/users/components/Signin';
import usersOperators from '../modules/users/redux/operators'
import withSigninHandling from '../modules/users/hocs/withSigninHandlers';
import OAuthButtons from '../modules/users/components/Common/Buttons/OAuth';

interface SigninPageProps extends IUserOperators {
    users: UserState
    history: BrowserHistory
}

class SigninPage extends React.Component<SigninPageProps> {
    constructor (props: SigninPageProps) {
        super(props);
        
    }

    render () {
        return (
            <Layout>
                <Signin
                    signin={this.props.signin}
                >
                    <OAuthButtons oauth2GithubSignin={this.props.oauth2Github} oauth2GoogleSignin={this.props.oauth2Google} />
                </Signin>
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
    withSigninHandling(SigninPage)
);