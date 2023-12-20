import { Tag } from "../../../shared/models/tag";
import { User } from "../models/user";

export interface UserState {
  user: User | {};
  tags: Tag[];
  isAuthenticated: boolean;

  isFetchingUser: boolean;
  isFetchingUserSuccess: boolean;
  isFetchingUserFailure: boolean;

  isOauth2Github: boolean;
  isOauth2GithubSuccess: boolean;
  isOauth2GithubFailure: boolean;

  isOauth2Google: boolean;
  isOauth2GoogleSuccess: boolean;
  isOauth2GoogleFailure: boolean;

  isOauth2GithubCB: boolean;
  isOauth2GithubCBSuccess: boolean;
  isOauth2GithubCBFailure: boolean;

  isOauth2GoogleCB: boolean;
  isOauth2GoogleCBSuccess: boolean;
  isOauth2GoogleCBFailure: boolean;

  isSigningIn: boolean;
  isSigningInSuccess: boolean;
  isSigningInFailure: boolean;

  isSigningOut: boolean;
  isSigningOutSuccess: boolean;
  isSigningOutFailure: boolean;

  isSigningUp: boolean;
  isSigningUpSuccess: boolean;
  isSigningUpFailure: boolean;

  isClaimingUsername: boolean;
  isClaimingUsernameSuccess: boolean;
  isClaimingUsernameFailure: boolean;

  isUpdatingProfile: boolean;
  isUpdatingProfileSuccess: boolean;
  isUpdatingProfileFailure: boolean;

  isActivatingAccount: boolean;
  isActivatingAccountSuccess: boolean;
  isActivatingAccountFailure: boolean;

  error: string;
  message: string;
}

const initialUserState: UserState = {
  user: {},
  tags: [],
  isAuthenticated: false,

  isFetchingUser: false,
  isFetchingUserSuccess: false,
  isFetchingUserFailure: false,

  isOauth2Github: false,
  isOauth2GithubSuccess: false,
  isOauth2GithubFailure: false,

  isOauth2Google: false,
  isOauth2GoogleSuccess: false,
  isOauth2GoogleFailure: false,

  isOauth2GithubCB: false,
  isOauth2GithubCBSuccess: false,
  isOauth2GithubCBFailure: false,

  isOauth2GoogleCB: false,
  isOauth2GoogleCBSuccess: false,
  isOauth2GoogleCBFailure: false,

  isSigningIn: false,
  isSigningInSuccess: false,
  isSigningInFailure: false,

  isSigningOut: false,
  isSigningOutSuccess: false,
  isSigningOutFailure: false,

  isSigningUp: false,
  isSigningUpSuccess: false,
  isSigningUpFailure: false,

  isClaimingUsername: false,
  isClaimingUsernameSuccess: false,
  isClaimingUsernameFailure: false,

  isUpdatingProfile: false,
  isUpdatingProfileSuccess: false,
  isUpdatingProfileFailure: false,

  isActivatingAccount: false,
  isActivatingAccountSuccess: false,
  isActivatingAccountFailure: false,

  error: '',
  message: ''
}

export default initialUserState;