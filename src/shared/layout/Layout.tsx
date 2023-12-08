import React from 'react'
import Helmet from 'react-helmet';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import "./styles.css"
import { siteMeta } from '../../config/siteMeta';
import withUsersService from '../../modules/users/hocs/withUsersService';
import { UsersService } from '../../modules/users/services/usersService';
import { Box } from '@mui/material';

interface LayoutProps {
  usersService: UsersService;
  // bgcolor: '#FBFCFD'
}

class Layout extends React.Component<React.PropsWithChildren<LayoutProps>> {
  constructor (props: React.PropsWithChildren<LayoutProps>) {
    super(props);
  }

  render () {
    return (
      <Box width={'100%'}>
          {
            //@ts-ignore
            <Helmet>
              <title>{siteMeta.title}</title>
              {/* TODO: The rest */}
              <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,400i,500,700,700i&display=swap" rel="stylesheet"></link>
              <link rel="stylesheet" href="//cdn.quilljs.com/1.2.6/quill.snow.css"></link>
            </Helmet>
          }
          <ToastContainer/>
          {this.props.children}
      </Box>
    )
  }
}

export default withUsersService(Layout);