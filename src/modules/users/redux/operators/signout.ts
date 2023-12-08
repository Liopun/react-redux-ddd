import actionCreators from '../actionCreators'
import { usersService } from '../../services';

function signout () {
  return async (dispatch: any, getState?: any) => {
    dispatch(actionCreators.signingOut());

    const result = await usersService.signOut()

    if (result.isLeft()) {
      dispatch(actionCreators.signingOutFailure(result.value))
    } else {
      dispatch(actionCreators.signingOutSuccess());
    }
  };
}

export { signout };