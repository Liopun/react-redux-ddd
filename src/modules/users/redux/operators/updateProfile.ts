import actionCreators from '../actionCreators'
import { usersService } from '../../services';

const updateProfile = (bio: string) => {
  return async (dispatch: any, getState?: any) => {
    dispatch(actionCreators.updatingProfile());

    const result = await usersService.updateProfile(bio);

    if (result.isLeft()) {
      const error: string = result.value;
      dispatch(actionCreators.updatingProfileFailure(error))
    } else {
      dispatch(actionCreators.updatingProfileSuccess());
    }
  };
}

export { updateProfile };