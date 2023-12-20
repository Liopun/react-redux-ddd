
import React, { PropsWithChildren } from 'react'
import { Navigate, Route } from 'react-router-dom'
import { UserState } from '../../../modules/users/redux/states';
//@ts-ignore
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import usersOperators from '../../../modules/users/redux/operators'
import Loader from '../../components/Loader';

type UnauthenticatedRouteProps = {
  users: UserState;
  children: JSX.Element;
} & PropsWithChildren;

const UnauthenticatedRoute: React.FC<UnauthenticatedRouteProps> = ({ users, children: Children }) => {
  return (
    !users.isAuthenticated ? (
      users.isFetchingUser ? <Loader /> : Children
    ) : (
      <Navigate to="/home" replace />
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
  UnauthenticatedRoute
);