import actionCreators from '../actionCreators'
import { usersService } from '../../services';

const activateAccount = (code: string) => {
  return async (dispatch: any, getState?: any) => {
    dispatch(actionCreators.activatingAccount());

    const result = await usersService.activateAccount(code);

    if (result.isLeft()) {
      const error: string = result.value;
      dispatch(actionCreators.activatingAccountFailure(error))
    } else {
      dispatch(actionCreators.activatingAccountSuccess(result.value.getValue()));
    }
  };
}

export { activateAccount };