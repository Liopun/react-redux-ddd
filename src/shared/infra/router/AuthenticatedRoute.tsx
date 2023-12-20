
import React, { PropsWithChildren } from 'react'
import { Navigate, Route } from 'react-router-dom'
import { UserState } from '../../../modules/users/redux/states';
//@ts-ignore
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import usersOperators from '../../../modules/users/redux/operators'
import Loader from '../../components/Loader';

type AuthenticatedRouteProps = {
  users: UserState;
  children: JSX.Element;
} & PropsWithChildren;

const AuthenticatedRoute: React.FC<AuthenticatedRouteProps> = ({ users, children: Children }) => {
  return (
    users.isAuthenticated ? (
      Children
    ) : (
      users.isFetchingUser ? <Loader /> : <Navigate to="/signin" replace />
    )
  )
}

function mapStateToProps ({ users }: { users: UserState }) {
  return {
    users
  };
}

function mapActionCreatorsToProps(dispatch: any) {
  return bindActionCreators(
    {
      ...usersOperators,
    }, dispatch);
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(
  AuthenticatedRoute
);