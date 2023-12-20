import actionCreators from '../actionCreators'
import { usersService } from '../../services';

function oauth2Github () {
  return async (dispatch: any, getState?: any) => {
    dispatch(actionCreators.oauth2Github());
    const result = await usersService.oauth2Github();
    if (result.isLeft()) {
      const error: string = result.value;
      dispatch(actionCreators.oauth2GithubFailure(error))
    } else {
      dispatch(actionCreators.oauth2GithubSuccess());
      window.location.href = result.value.getValue(); // redirect
    }
  };
}

export { oauth2Github };