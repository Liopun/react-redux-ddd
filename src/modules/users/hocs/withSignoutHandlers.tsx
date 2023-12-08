import React from 'react';
import { UserState } from '../redux/states';
import { IUserOperators } from '../redux/operators';
import { Bounce, toast } from 'react-toastify';
import { BrowserHistory } from 'history';

interface withLogoutHandlingProps extends IUserOperators {
  users: UserState
  history?: BrowserHistory;
}

function withSignoutHandling (WrappedComponent: any) {
  class HOC extends React.Component<withLogoutHandlingProps, any> {
    constructor (props: withLogoutHandlingProps) {
      super(props)
    }

    handleLogout () {
      this.props.signout();
    }

    afterSuccessfulSignout (prevProps: withLogoutHandlingProps) {
      const currentProps: withLogoutHandlingProps = this.props;
      if (currentProps.users.isSigningOutSuccess && !prevProps.users.isSigningOutSuccess) {
        return toast.success("Signed out! ", {
          position: 'top-center',
          hideProgressBar: true,
          transition: Bounce,
          autoClose: 3000
        })
      }
    }

    afterFailedSignout (prevProps: withLogoutHandlingProps) {
      const currentProps: withLogoutHandlingProps = this.props;
      if (currentProps.users.isSigningOutFailure && !prevProps.users.isSigningOutFailure) {
        const error = currentProps.users.error;
        return toast.error(`Had some trouble signing out! ${error}`, {
          position: 'top-center',
          hideProgressBar: true,
          transition: Bounce,
          autoClose: 3000
        })
      }
    }

    componentDidUpdate (prevProps: withLogoutHandlingProps) {
      this.afterSuccessfulSignout(prevProps);
      this.afterFailedSignout(prevProps);
    }

    render () {
      return (
        <WrappedComponent
          {...this.props}
          signout={() => this.handleLogout()}
        />
      );
    }
  }
  return HOC;
}

export default withSignoutHandling;