import React from 'react';
import { BrowserHistory } from 'history';
import { bindActionCreators } from '@reduxjs/toolkit';
import { connect } from 'react-redux';
import { IUserOperators } from "../modules/users/redux/operators";
import { UserState } from "../modules/users/redux/states";
import usersOperators from '../modules/users/redux/operators'
import withSigninHandling from '../modules/users/hocs/withSigninHandlers';
import Loader from '../shared/components/Loader';
import { toastError, toastSuccess } from '../shared/utils/ToastUtil';
import { debounce } from 'lodash';
import { OAuth2Provider } from '../shared/constants/oauth2';

interface OAuth2CBPageProps extends IUserOperators {
    provider: OAuth2Provider;
    users: UserState
    history: BrowserHistory
}

class OAuth2CBPage extends React.Component<OAuth2CBPageProps> {
    constructor (props: OAuth2CBPageProps) {
        super(props);
    }

    afterSuccessfulOAuthCB (prevProps: OAuth2CBPageProps) {
        const currentProps: OAuth2CBPageProps = this.props;
        const isGithubProvider = this.props.provider == OAuth2Provider.GITHUB
        if (isGithubProvider) {
            if (currentProps.users.isOauth2GithubCBSuccess && !prevProps.users.isOauth2GithubCBSuccess) {
                console.debug("{{{{{{{{{{{{{{{{{{{{------------")
                setTimeout(() => { this.props.history.push('/home', history)}, 1000)
                toastSuccess("Successful Github OAuth2")
            }
        } else {
            if (currentProps.users.isOauth2GoogleCBSuccess && !prevProps.users.isOauth2GoogleCBSuccess) {
                console.debug("{{{{{{{{{{{{{{{{{{{{------------")
                setTimeout(() => { this.props.history.push('/home', history)}, 1000)
                toastSuccess("Successful Google OAuth2")
            }
        }
    }
  
    afterFailedOAuthCB (prevProps: OAuth2CBPageProps) {
        const currentProps: OAuth2CBPageProps = this.props;
        const isGithubProvider = this.props.provider == OAuth2Provider.GITHUB
        if (isGithubProvider) {
            if (currentProps.users.isOauth2GithubCBFailure && !prevProps.users.isOauth2GithubCBFailure) {
                const error = currentProps.users.error;
                toastError(`Had some trouble with oauth2 github callback! ${error}`)
                setTimeout(() => { this.props.history.push('/signin', history)}, 3000)
            }
        } else {
            if (currentProps.users.isOauth2GoogleCBFailure && !prevProps.users.isOauth2GoogleCBFailure) {
                const error = currentProps.users.error;
                toastError(`Had some trouble with oauth2 google callback! ${error}`)
                setTimeout(() => { this.props.history.push('/signin', history)}, 3000)
            }
        }
    }

    sendOAuthCB () {
        // Accessing specific query parameters
        const searchParams = new URLSearchParams(window.location.search);
        const code = searchParams.get('code');
        const state = searchParams.get('state');

        console.debug("OOOOIII--", code, state)

        if (code && code.length > 0 && state && state.length > 0) {
            const isGithubProvider = this.props.provider == OAuth2Provider.GITHUB
            if (isGithubProvider) {
                this.props.oauth2GithubCB(code, state)
            } else {
                this.props.oauth2GoogleCB(code, state)
            }

            return
        }

        toastError(`Had some trouble with oauth2 callback! try again`)
    }

    debouncedSendOAuthCB = debounce(this.sendOAuthCB, 300)

    componentDidMount() {
        this.debouncedSendOAuthCB()
    }

    componentDidUpdate (prevProps: OAuth2CBPageProps) {
        this.afterSuccessfulOAuthCB(prevProps);
        this.afterFailedOAuthCB(prevProps);
    }

    render () {
        return (
            <Loader />
        )
    }
}

const mapStateToProps = ({ users }: { users: UserState }) => {
    return {
      users
    };
}
  
const mapActionCreatorsToProps = (dispatch: any) => {
    return bindActionCreators(
      {
        ...usersOperators,
      }, dispatch);
}
  
export default connect(mapStateToProps, mapActionCreatorsToProps)(
    withSigninHandling(OAuth2CBPage)
);