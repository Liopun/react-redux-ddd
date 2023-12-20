import actionCreators from '../actionCreators'
import { usersService } from '../../services';

function oauth2Google () {
  return async (dispatch: any, getState?: any) => {
    dispatch(actionCreators.oauth2Google());
    const result = await usersService.oauth2Google();

    if (result.isLeft()) {
      const error: string = result.value;
      dispatch(actionCreators.oauth2GoogleFailure(error))
    } else {
      dispatch(actionCreators.oauth2GoogleSuccess());
      window.location.href = result.value.getValue(); // redirect
    }
  };
}

export { oauth2Google };