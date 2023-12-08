import React from "react";
import { toast, Bounce } from "react-toastify";
import { BrowserHistory } from "history";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import withSignoutHandling from "../modules/users/hocs/withSignoutHandlers";
import usersOperators, { IUserOperators } from "../modules/users/redux/operators";
import { UserState } from "../modules/users/redux/states";
import { Layout } from "../shared/layout";
import ClaimUsername from "../modules/users/components/AddProfile/ClaimUsername";

interface ClaimUsernamePageProps extends IUserOperators {
    users: UserState;
    history: BrowserHistory;
}

class ClaimUsernamePage extends React.Component<ClaimUsernamePageProps> {
    constructor(props: ClaimUsernamePageProps) {
        super(props);
    }

    afterSuccessfulClaim (prevProps: ClaimUsernamePageProps) {
        const currentProps: ClaimUsernamePageProps = this.props;
        if (currentProps.users.isClaimingUsernameSuccess && !prevProps.users.isClaimingUsernameSuccess) {
          setTimeout(() => { this.props.history.push('/home', history)}, 1000)
          return toast.success("Username claimed! ", {
            position: 'top-center',
            hideProgressBar: true,
            transition: Bounce,
            autoClose: 3000
          })
        }
    }
  
    afterFailedClaim (prevProps: ClaimUsernamePageProps) {
        const currentProps: ClaimUsernamePageProps = this.props;
        if (currentProps.users.isClaimingUsernameFailure && !prevProps.users.isClaimingUsernameFailure) {
            const error = currentProps.users.error;
            return toast.error(`Had some trouble claiming username...! ${error} `, {
                position: 'top-center',
                hideProgressBar: true,
                transition: Bounce,
                autoClose: 3000
            })
        }
    }

    componentDidUpdate (prevProps: ClaimUsernamePageProps) {
        this.afterSuccessfulClaim(prevProps);
        this.afterFailedClaim(prevProps);
    }

    render () {
        return (
            <Layout>
                <ClaimUsername claimUsername={this.props.claimUsername} />
            </Layout>
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
    withSignoutHandling(ClaimUsernamePage)
);