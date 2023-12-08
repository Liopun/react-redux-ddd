import actionCreators from '../actionCreators'
import { usersService } from '../../services';

const signup = (email: string, password: string) => {
  return async (dispatch: any, getState?: any) => {
    dispatch(actionCreators.signingUp());

    const result = await usersService.signUp(email, password);

    if (result.isLeft()) {
      const error: string = result.value;
      dispatch(actionCreators.signingUpFailure(error))
    } else {
      dispatch(actionCreators.signingUpSuccess(result.value.getValue()));
    }
  };
}

export { signup };