import React from 'react';
import { BrowserHistory } from 'history';
import { bindActionCreators } from '@reduxjs/toolkit';
import { connect } from 'react-redux';
import { IUserOperators } from "../modules/users/redux/operators";
import { UserState } from "../modules/users/redux/states";
import { Layout } from '../shared/layout';
import usersOperators from '../modules/users/redux/operators'
import withSigninHandling from '../modules/users/hocs/withSigninHandlers';
import Activation from '../modules/users/components/Activation';
import { SlugUtil } from '../shared/utils/SlugUtil';
import { Bounce, toast } from 'react-toastify';

interface ActivateAccountProps extends IUserOperators {
    users: UserState
    history: BrowserHistory
}

class ActivateAccountPage extends React.Component<ActivateAccountProps> {
    constructor (props: ActivateAccountProps) {
        super(props);
    }

    afterSuccessfulActivation (prevProps: ActivateAccountProps) {
        const currentProps: ActivateAccountProps = this.props;
        if (currentProps.users.isActivatingAccountSuccess && !prevProps.users.isActivatingAccountSuccess) {
          setTimeout(() => { this.props.history.push('/home', history)}, 1000)
          return toast.success(`${currentProps.users.message}`, {
            position: 'top-center',
            hideProgressBar: true,
            transition: Bounce,
            autoClose: 3000
          })
        }
    }
  
    afterFailedActivation (prevProps: ActivateAccountProps) {
        const currentProps: ActivateAccountProps = this.props;
        if (currentProps.users.isActivatingAccountFailure && !prevProps.users.isActivatingAccountFailure) {
            const error = currentProps.users.error;
            return toast.error(`Had some trouble activating your account! ${error} `, {
                position: 'top-center',
                hideProgressBar: true,
                transition: Bounce,
                autoClose: 3000
            })
        }
    }

    componentDidUpdate (prevProps: ActivateAccountProps) {
        this.afterSuccessfulActivation(prevProps);
        this.afterFailedActivation(prevProps);
    }

    render () {
        const code = SlugUtil.getWindowSlug();
        return (
            <Layout>
                <Activation activate={this.props.activateAccount} code={code} />
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
    withSigninHandling(ActivateAccountPage)
);