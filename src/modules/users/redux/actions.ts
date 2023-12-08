export type UserActionType = 
'GETTING_USER_PROFILE' |
'GETTING_USER_PROFILE_SUCCESS' |
'GETTING_USER_PROFILE_FAILURE' |

'SIGNING_IN' |
'SIGNING_IN_SUCCESS' |
'SIGNING_IN_FAILURE' |

'SIGNING_OUT' |
'SIGNING_OUT_SUCCESS' |
'SIGNING_OUT_FAILURE' |

'SIGNING_UP' |
'SIGNING_UP_SUCCESS' |
'SIGNING_UP_FAILURE' |

'CLAIMING_USERNAME' |
'CLAIMING_USERNAME_SUCCESS' |
'CLAIMING_USERNAME_FAILURE' |

'UPDATING_PROFILE' |
'UPDATING_PROFILE_SUCCESS' |
'UPDATING_PROFILE_FAILURE' |

'ACTIVATE_ACCOUNT' |
'ACTIVATE_ACCOUNT_SUCCESS' |
'ACTIVATE_ACCOUNT_FAILURE';

const GETTING_USER_PROFILE: UserActionType = 'GETTING_USER_PROFILE';
const GETTING_USER_PROFILE_SUCCESS: UserActionType = 'GETTING_USER_PROFILE_SUCCESS';
const GETTING_USER_PROFILE_FAILURE: UserActionType = 'GETTING_USER_PROFILE_FAILURE';

const SIGNING_IN: UserActionType = 'SIGNING_IN';
const SIGNING_IN_SUCCESS: UserActionType = 'SIGNING_IN_SUCCESS';
const SIGNING_IN_FAILURE: UserActionType = 'SIGNING_IN_FAILURE';

const SIGNING_OUT: UserActionType = 'SIGNING_OUT';
const SIGNING_OUT_SUCCESS: UserActionType = 'SIGNING_OUT_SUCCESS';
const SIGNING_OUT_FAILURE: UserActionType = 'SIGNING_OUT_FAILURE';

const SIGNING_UP: UserActionType = 'SIGNING_UP';
const SIGNING_UP_SUCCESS: UserActionType = 'SIGNING_UP_SUCCESS';
const SIGNING_UP_FAILURE: UserActionType = 'SIGNING_UP_FAILURE';

const CLAIMING_USERNAME: UserActionType = 'CLAIMING_USERNAME';
const CLAIMING_USERNAME_SUCCESS: UserActionType = 'CLAIMING_USERNAME_SUCCESS';
const CLAIMING_USERNAME_FAILURE: UserActionType = 'CLAIMING_USERNAME_FAILURE';

const UPDATING_PROFILE: UserActionType = 'UPDATING_PROFILE';
const UPDATING_PROFILE_SUCCESS: UserActionType = 'UPDATING_PROFILE_SUCCESS';
const UPDATING_PROFILE_FAILURE: UserActionType = 'UPDATING_PROFILE_FAILURE';

const ACTIVATE_ACCOUNT: UserActionType = 'ACTIVATE_ACCOUNT';
const ACTIVATE_ACCOUNT_SUCCESS: UserActionType = 'ACTIVATE_ACCOUNT_SUCCESS';
const ACTIVATE_ACCOUNT_FAILURE: UserActionType = 'ACTIVATE_ACCOUNT_FAILURE';

export default {
  GETTING_USER_PROFILE,
  GETTING_USER_PROFILE_SUCCESS,
  GETTING_USER_PROFILE_FAILURE,

  SIGNING_IN,
  SIGNING_IN_SUCCESS,
  SIGNING_IN_FAILURE,

  SIGNING_OUT,
  SIGNING_OUT_SUCCESS,
  SIGNING_OUT_FAILURE,

  SIGNING_UP,
  SIGNING_UP_SUCCESS,
  SIGNING_UP_FAILURE,

  CLAIMING_USERNAME,
  CLAIMING_USERNAME_SUCCESS,
  CLAIMING_USERNAME_FAILURE,

  UPDATING_PROFILE,
  UPDATING_PROFILE_SUCCESS,
  UPDATING_PROFILE_FAILURE,

  ACTIVATE_ACCOUNT,
  ACTIVATE_ACCOUNT_SUCCESS,
  ACTIVATE_ACCOUNT_FAILURE
}