import { Box } from "@mui/system"
import { FC } from "react"
import { OauthMuiLink } from "../../../../../shared/components/Controls"
import GoogleLogo from '../../../../../assets/google.svg';
import GithubLogo from '../../../../../assets/github.svg';

interface OAuthButtonsProps {
    oauth2GithubSignin: () => void
    oauth2GoogleSignin: () => void
};

const OAuthButtons: FC<OAuthButtonsProps> = ({ oauth2GithubSignin, oauth2GoogleSignin }) => {
    return (
        <Box
            display='flex'
            flexDirection='column'
            sx={{ paddingLeft: { sm: '3rem' }, rowGap: '1rem' }}>
            <OauthMuiLink onClick={(e) => {
                e.preventDefault()
                oauth2GoogleSignin()
            }}>
                <img src={GoogleLogo} alt='google logo' style={{ height: '1.5rem' }} />
                Google
            </OauthMuiLink>
            <OauthMuiLink onClick={(e) => {
                e.preventDefault()
                oauth2GithubSignin()
            }}>
                <img src={GithubLogo} alt='github logo' style={{ height: '1.8rem' }} />
                GitHub
            </OauthMuiLink>
        </Box>
    )
}

export default OAuthButtons;