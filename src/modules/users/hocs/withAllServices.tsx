import React from 'react';
import { usersService } from '../services';

const withAllServices = (WrappedComponent: any) => {
  class HOC extends React.Component {
    render () {
      return (
        <WrappedComponent
          {...this.props}
          usersService={usersService}
        />
      );
    }
  }
  return HOC;
}

export default withAllServices;