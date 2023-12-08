import React from 'react';
import { BrowserHistory } from 'history';
import { Bounce, toast } from 'react-toastify';
import { UserState } from '../redux/states';
import { IUserOperators } from '../redux/operators';
import { toastError, toastSuccess } from '../../../shared/utils/ToastUtil';

interface withSigninHandlingProps extends IUserOperators {
  users: UserState
  history: BrowserHistory;
}

const withSigninHandling = (WrappedComponent: any) => {
  class HOC extends React.Component<withSigninHandlingProps, any> {
    constructor (props: withSigninHandlingProps) {
      super(props)
    }

    handleSignin (email: string, password: string) {
      this.props.signin(email, password);
    }

    afterSuccessfulSignin (prevProps: withSigninHandlingProps) {
      const currentProps: withSigninHandlingProps = this.props;
      if (currentProps.users.isSigningInSuccess && !prevProps.users.isSigningInSuccess) {
        toastSuccess("Signed in!")
        setTimeout(() => { this.props.history.push('/home', history)}, 0)
      }
    }

    afterFailedSignin (prevProps: withSigninHandlingProps) {
      const currentProps: withSigninHandlingProps = this.props;
      if (currentProps.users.isSigningInFailure && !prevProps.users.isSigningInFailure) {
        const error = currentProps.users.error;
        toastError(`Had some trouble signing in! ${error}`)
      }
    }

    componentDidUpdate (prevProps: withSigninHandlingProps) {
      this.afterSuccessfulSignin(prevProps);
      this.afterFailedSignin(prevProps);
    }

    render () {
      return (
        <WrappedComponent
          {...this.props}
          signin={(u: string, p: string) => this.handleSignin(u, p)}
        />
      );
    }
  }
  return HOC;
}

export default withSigninHandling;