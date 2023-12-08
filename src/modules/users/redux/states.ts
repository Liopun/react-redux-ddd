import { Tag } from "../../../shared/models/tag";
import { User } from "../models/user";

export interface UserState {
  user: User | {};
  tags: Tag[];
  isAuthenticated: boolean;
  isFetchingUser: boolean;
  isFetchingUserSuccess: boolean;
  isFetchingUserFailure: boolean;

  isSigningIn: boolean,
  isSigningInSuccess: boolean,
  isSigningInFailure: boolean,

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