import actionCreators from '../actionCreators'
import { usersService } from '../../services';

function oauth2GithubCB (code: string, state: string) {
  return async (dispatch: any, getState?: any) => {
    dispatch(actionCreators.oauth2GithubCB());
    const result = await usersService.oauth2GithubCB(code, state);
    if (result.isLeft()) {
      const error: string = result.value;
      dispatch(actionCreators.oauth2GithubCBFailure(error))
    } else {
      dispatch(actionCreators.oauth2GithubCBSuccess());
    }
  };
}

export { oauth2GithubCB };