import actionCreators from '../actionCreators'
import { usersService } from '../../services';

const signin = (username: string, password: string) => {
  return async (dispatch: any, getState?: any) => {
    dispatch(actionCreators.signingIn());

    const result = await usersService.signIn(username, password);

    if (result.isLeft()) {
      const error: string = result.value;
      dispatch(actionCreators.signingInFailure(error))
    } else {
      dispatch(actionCreators.signingInSuccess());
    }
  };
}

export { signin };