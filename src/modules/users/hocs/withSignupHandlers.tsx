import React from 'react';
import { BrowserHistory } from 'history';
import { UserState } from '../redux/states';
import { IUserOperators } from '../redux/operators';
import { Bounce, toast } from 'react-toastify';

interface withSignupHandlingProps extends IUserOperators {
  users: UserState;
  history: BrowserHistory;
}

const withSignupHandling = (WrappedComponent: any) => {
  class HOC extends React.Component<withSignupHandlingProps, any> {
    constructor (props: withSignupHandlingProps) {
      super(props)
    }

    handleSignup (email: string, password: string) {
      this.props.signup(email, password);
    }

    afterSuccessfulSignup (prevProps: withSignupHandlingProps) {
      const currentProps: withSignupHandlingProps = this.props;
      if (currentProps.users.isSigningUpSuccess && !prevProps.users.isSigningUpSuccess) {
        setTimeout(() => { this.props.history.push('/signin', history) }, 3000)
        return toast.success(`Signed up! ${currentProps.users.message}`, {
          position: 'top-center',
          hideProgressBar: true,
          transition: Bounce,
          autoClose: 3000
        })
      }
    }

    afterFailedSignup (prevProps: withSignupHandlingProps) {
      const currentProps: withSignupHandlingProps = this.props;
      if (currentProps.users.isSigningUpFailure && !prevProps.users.isSigningUpFailure) {
        const error = currentProps.users.error;
        return toast.error(`Had some trouble signing up! ${error}`, {
          position: 'top-center',
          hideProgressBar: true,
          transition: Bounce,
          autoClose: 3000
        })
      }
    }

    componentDidUpdate (prevProps: withSignupHandlingProps) {
      this.afterSuccessfulSignup(prevProps);
      this.afterFailedSignup(prevProps);
    }

    render () {
      return (
        <WrappedComponent
          {...this.props}
          signin={(e: string, p: string) => this.handleSignup(e, p)}
        />
      );
    }
  }

  return HOC;
}

export default withSignupHandling;