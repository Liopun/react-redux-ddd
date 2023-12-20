import { createBrowserHistory } from 'history'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SigninPage from './pages/signin'
import SignupPage from './pages/signup'
import ActivateAccountPage from './pages/activateAccount'
import IndexPage from './pages/index'
import './App.css'
import NotFoundPage from './pages/notFound';
import OAuth2CBPage from './pages/oauth2CB';
import ClaimUsernamePage from './pages/claimUsername';
import AuthenticatedRoute from './shared/infra/router/AuthenticatedRoute';
import UnauthenticatedRoute from './shared/infra/router/UnauthenticatedRoute';
import { OAuth2Provider } from './shared/constants/oauth2';

const theme = createTheme({
  palette: {
      primary: {
          main: '#374151',
          light: '#626c7d',
          dark: '#101b29',
      },
      info: {
          main: '#FFFFFF',
      },
  },
});

const history = createBrowserHistory(); // create a new history object

function App() {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path='*' element={<NotFoundPage />} />
            <Route
              path='/home'
              element={
                <AuthenticatedRoute>
                  <IndexPage />
                </AuthenticatedRoute>
              } 
            />
            <Route
              path='/oauth2/github/callback'
              element={
                <UnauthenticatedRoute>
                  <OAuth2CBPage history={history} provider={OAuth2Provider.GITHUB} />
                </UnauthenticatedRoute>
              } 
            />
            <Route
              path='/oauth2/google/callback'
              element={
                <UnauthenticatedRoute>
                  <OAuth2CBPage history={history} provider={OAuth2Provider.GOOGLE} />
                </UnauthenticatedRoute>
              } 
            />
            <Route
              path='/signin'
              element={
                <UnauthenticatedRoute>
                  <SigninPage history={history} />
                </UnauthenticatedRoute>
              }
            />
            <Route
              path='/signup'
              element={
                <UnauthenticatedRoute>
                  <SignupPage history={history} />
                </UnauthenticatedRoute>
              } 
            />
            <Route
              path='/username'
              element={
                <AuthenticatedRoute>
                  <ClaimUsernamePage history={history} />
                </AuthenticatedRoute>
              } 
            />
            <Route
              path='/activate/:code'
              element={
                <UnauthenticatedRoute>
                  <ActivateAccountPage history={history} />
                </UnauthenticatedRoute>
              } 
            />
          </Routes>
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App