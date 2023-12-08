import React from 'react';
import { usersService } from '../services';
import { postsService, tagsService } from '../../posts/services';

const withAllServices = (WrappedComponent: any) => {
  class HOC extends React.Component {
    render () {
      return (
        <WrappedComponent
          {...this.props}
          usersService={usersService}
          tagsService={tagsService}
          postsService={postsService}
        />
      );
    }
  }
  return HOC;
}

export default withAllServices;