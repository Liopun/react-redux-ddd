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
import ClaimUsernamePage from './pages/claimUsername';
import AuthenticatedRoute from './shared/infra/router/AuthenticatedRoute';
import UnauthenticatedRoute from './shared/infra/router/UnauthenticatedRoute';

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
            {/* <Route
              path='/home'
              element={
                <AuthenticatedRoute>
                  <IndexPage history={history} />
                </AuthenticatedRoute>
              } 
            /> */}
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