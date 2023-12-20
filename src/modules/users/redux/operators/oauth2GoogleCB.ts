import actionCreators from '../actionCreators'
import { usersService } from '../../services';

function oauth2GoogleCB (code: string, state: string) {
  return async (dispatch: any, getState?: any) => {
    dispatch(actionCreators.oauth2GoogleCB());
    const result = await usersService.oauth2GoogleCB(code, state);

    if (result.isLeft()) {
      const error: string = result.value;
      dispatch(actionCreators.oauth2GoogleCBFailure(error))
    } else {
      dispatch(actionCreators.oauth2GoogleCBSuccess());
    }
  };
}

export { oauth2GoogleCB };