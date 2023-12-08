import actions, { UserActionType } from "./actions";
import { User } from "../models/user";
import { Tag } from "../../../shared/models/tag";

export type UsersAction = { [key: string]: UserActionType | any };

function gettingUserProfile (): UsersAction {
  return {
    type: actions.GETTING_USER_PROFILE
  };
}

function gettingUserProfileSuccess (user: User): UsersAction & { user: User } {
  return {
    type: actions.GETTING_USER_PROFILE_SUCCESS,
    user
  };
}

function gettingUserProfileFailure (errorMessage: string): UsersAction & { errorMessage: string } {
  return {
    type: actions.GETTING_USER_PROFILE_FAILURE,
    errorMessage
  };
}

function signingIn (): UsersAction {
  return {
    type: actions.SIGNING_IN
  };
}

function signingInSuccess (): UsersAction {
  return {
    type: actions.SIGNING_IN_SUCCESS
  };
}

function signingInFailure (error: string): UsersAction {
  return {
    type: actions.SIGNING_IN_FAILURE,
    error
  };
}

function signingOut (): UsersAction {
  return {
    type: actions.SIGNING_OUT
  };
}

function signingOutSuccess (): UsersAction {
  return {
    type: actions.SIGNING_OUT_SUCCESS
  };
}

function signingOutFailure (error: string): UsersAction {
  return {
    type: actions.SIGNING_OUT_FAILURE,
    error
  };
}

function signingUp (): UsersAction {
  return {
    type: actions.SIGNING_UP
  };
}

function signingUpSuccess (message: string): UsersAction {
  return {
    type: actions.SIGNING_UP_SUCCESS,
    message
  };
}

function signingUpFailure (error: string): UsersAction {
  return {
    type: actions.SIGNING_UP_FAILURE,
    error
  };
}

function claimingUsername (): UsersAction {
  return {
    type: actions.CLAIMING_USERNAME
  };
}

function claimingUsernameSuccess (): UsersAction {
  return {
    type: actions.CLAIMING_USERNAME_SUCCESS
  };
}

function claimingUsernameFailure (error: string): UsersAction {
  return {
    type: actions.CLAIMING_USERNAME_FAILURE,
    error
  };
}

function updatingProfile (): UsersAction {
  return {
    type: actions.UPDATING_PROFILE
  };
}

function updatingProfileSuccess (): UsersAction {
  return {
    type: actions.UPDATING_PROFILE_SUCCESS
  };
}

function updatingProfileFailure (error: string): UsersAction {
  return {
    type: actions.UPDATING_PROFILE_FAILURE,
    error
  };
}

function activatingAccount (): UsersAction {
  return {
    type: actions.ACTIVATE_ACCOUNT
  };
}

function activatingAccountSuccess (message: string): UsersAction {
  return {
    type: actions.ACTIVATE_ACCOUNT_SUCCESS,
    message
  };
}

function activatingAccountFailure (error: string): UsersAction {
  return {
    type: actions.ACTIVATE_ACCOUNT_FAILURE,
    error
  };
}

export default {
  gettingUserProfile,
  gettingUserProfileSuccess,
  gettingUserProfileFailure,

  signingIn,
  signingInSuccess,
  signingInFailure,

  signingOut,
  signingOutSuccess,
  signingOutFailure,

  signingUp,
  signingUpSuccess,
  signingUpFailure,

  claimingUsername,
  claimingUsernameSuccess,
  claimingUsernameFailure,

  updatingProfile,
  updatingProfileSuccess,
  updatingProfileFailure,

  activatingAccount,
  activatingAccountSuccess,
  activatingAccountFailure
}