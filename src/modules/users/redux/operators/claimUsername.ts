import actionCreators from '../actionCreators'
import { usersService } from '../../services';

const claimUsername = (username: string) => {
  return async (dispatch: any, getState?: any) => {
    dispatch(actionCreators.claimingUsername());

    const result = await usersService.claimUsername(username);

    if (result.isLeft()) {
      const error: string = result.value;
      dispatch(actionCreators.claimingUsernameFailure(error))
    } else {
      dispatch(actionCreators.claimingUsernameSuccess());
    }
  };
}

export { claimUsername };