import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserHistory } from 'history';
import { IUserOperators } from "../modules/users/redux/operators";
import { UserState } from "../modules/users/redux/states";
import { Layout } from '../shared/layout';
import usersOperators from '../modules/users/redux/operators'
import Signup from '../modules/users/components/Signup';
import withSignupHandling from '../modules/users/hocs/withSignupHandlers';

interface SignupPageProps extends IUserOperators {
    users: UserState
    history: BrowserHistory
}

class SignupPage extends React.Component<SignupPageProps, any> {
    constructor (props: SignupPageProps) {
        super(props);
    }

    render () {
        return (
            <Layout>
                <Signup signup={this.props.signup} />
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
    withSignupHandling(SignupPage)
);