import actions, { UserActionType } from "./actions";
import { User } from "../models/user";

export type UsersAction = { [key: string]: UserActionType | any };
// get user profile
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

// oauth2 github init flow
function oauth2Github (): UsersAction {
  return {
    type: actions.OAUTH2_GITHUB
  };
}

function oauth2GithubSuccess (): UsersAction {
  return {
    type: actions.OAUTH2_GITHUB_SUCCESS
  };
}

function oauth2GithubFailure (error: string): UsersAction {
  return {
    type: actions.OAUTH2_GITHUB_FAILURE,
    error
  };
}

// oauth2 google init flow
function oauth2Google (): UsersAction {
  return {
    type: actions.OAUTH2_GOOGLE
  };
}

function oauth2GoogleSuccess (): UsersAction {
  return {
    type: actions.OAUTH2_GOOGLE_SUCCESS
  };
}

function oauth2GoogleFailure (error: string): UsersAction {
  return {
    type: actions.OAUTH2_GOOGLE_FAILURE,
    error
  };
}

// oauth2 github callback
function oauth2GithubCB (): UsersAction {
  return {
    type: actions.OAUTH2_GITHUB_CB
  };
}

function oauth2GithubCBSuccess (): UsersAction {
  return {
    type: actions.OAUTH2_GITHUB_CB_SUCCESS
  };
}

function oauth2GithubCBFailure (error: string): UsersAction {
  return {
    type: actions.OAUTH2_GITHUB_CB_FAILURE,
    error
  };
}

// oauth2 google callback
function oauth2GoogleCB (): UsersAction {
  return {
    type: actions.OAUTH2_GOOGLE_CB
  };
}

function oauth2GoogleCBSuccess (): UsersAction {
  return {
    type: actions.OAUTH2_GOOGLE_CB_SUCCESS
  };
}

function oauth2GoogleCBFailure (error: string): UsersAction {
  return {
    type: actions.OAUTH2_GOOGLE_CB_FAILURE,
    error
  };
}

// signin
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

// signout
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

// signup
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

// claim username
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

// update profile
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

// activating account
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

  oauth2Github,
  oauth2GithubSuccess,
  oauth2GithubFailure,

  oauth2Google,
  oauth2GoogleSuccess,
  oauth2GoogleFailure,

  oauth2GithubCB,
  oauth2GithubCBSuccess,
  oauth2GithubCBFailure,

  oauth2GoogleCB,
  oauth2GoogleCBSuccess,
  oauth2GoogleCBFailure,

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