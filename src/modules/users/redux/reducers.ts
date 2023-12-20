import states, { UserState } from "./states";
import actions, { UserActionType } from "./actions";

import { UsersAction } from "./actionCreators";
import { ReduxUtils } from "../../../shared/utils/ReduxUtils";

export default function users (state: UserState = states,
  action: UsersAction
) : UserState {
  switch (action.type as UserActionType) {
    // getting user profile
    case actions.GETTING_USER_PROFILE:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus("isFetchingUser")
      };
    case actions.GETTING_USER_PROFILE_SUCCESS:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus("isFetchingUser", true),
        user: action.user,
        isAuthenticated: true
      };
    case actions.GETTING_USER_PROFILE_FAILURE:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus("isFetchingUser", false)
      };
    
    // oauth2 github init flow
    case actions.OAUTH2_GITHUB:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isOauth2Github'),
        error: '',
      }
    case actions.OAUTH2_GITHUB_SUCCESS:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isOauth2Github', true)
      }
    case actions.OAUTH2_GITHUB_FAILURE:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isOauth2Github', false),
        error: action.error
      }
    
    // aouth2 google init flow
    case actions.OAUTH2_GOOGLE:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isOauth2Google'),
        error: '',
      }
    case actions.OAUTH2_GOOGLE_SUCCESS:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isOauth2Google', true)
      }
    case actions.OAUTH2_GOOGLE_FAILURE:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isOauth2Google', false),
        error: action.error
      }
    
    // oauth2 github callback
    case actions.OAUTH2_GITHUB_CB:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isOauth2GithubCB'),
        error: '',
      }
    case actions.OAUTH2_GITHUB_CB_SUCCESS:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isOauth2GithubCB', true),
        isAuthenticated: true
      }
    case actions.OAUTH2_GITHUB_CB_FAILURE:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isOauth2GithubCB', false),
        error: action.error
      }
    
    // oauth2 google callback
    case actions.OAUTH2_GOOGLE_CB:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isOauth2GoogleCB'),
        error: '',
      }
    case actions.OAUTH2_GOOGLE_CB_SUCCESS:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isOauth2GoogleCB', true),
        isAuthenticated: true
      }
    case actions.OAUTH2_GOOGLE_CB_FAILURE:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isOauth2GoogleCB', false),
        error: action.error
      }
  
    // signin
    case actions.SIGNING_IN:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isSigningIn'),
        error: '',
      }
    case actions.SIGNING_IN_SUCCESS:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isSigningIn', true),
        isAuthenticated: true
      }
    case actions.SIGNING_IN_FAILURE:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isSigningIn', false),
        error: action.error
      }
    
    // signout
    case actions.SIGNING_OUT:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isSigningOut'),
        error: '',
      }
    case actions.SIGNING_OUT_SUCCESS:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isSigningOut', true),
        isAuthenticated: false
      }
    case actions.SIGNING_OUT_FAILURE:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isSigningOut', false),
        error: action.error
      }
    
    // signup
    case actions.SIGNING_UP:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isSigningUp'),
        error: action.error
      }
  
    case actions.SIGNING_UP_SUCCESS:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isSigningUp', true),
        message: action.message
      }
 
    case actions.SIGNING_UP_FAILURE:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isSigningUp', false),
        error: action.error
      }
    
    // claim username
    case actions.CLAIMING_USERNAME:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isClaimingUsername'),
        error: '',
      }
    case actions.CLAIMING_USERNAME_SUCCESS:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isClaimingUsername', true),
      }
    case actions.CLAIMING_USERNAME_FAILURE:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isClaimingUsername', false),
        error: action.error
      }
    
    // update profile
    case actions.UPDATING_PROFILE:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isUpdatingProfile'),
        error: '',
      }
  
    case actions.UPDATING_PROFILE_SUCCESS:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isUpdatingProfile', true)
      }
  
    case actions.UPDATING_PROFILE_FAILURE:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isUpdatingProfile', false),
        error: action.error
      }

    // activate account
    case actions.ACTIVATE_ACCOUNT:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isActivatingAccount'),
        error: '',
      }
    case actions.ACTIVATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isActivatingAccount', true),
        message: action.message
      }
    case actions.ACTIVATE_ACCOUNT_FAILURE:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isActivatingAccount', false),
        error: action.error
      }
  
    default:
      return state;
  }
}