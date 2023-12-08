import { FC, useState } from "react";
import { 
    AppBar,
    Avatar,
    Box,
    Container,
    IconButton,
    Link,
    Menu,
    MenuItem,
    Toolbar,
    Tooltip,
    Typography
} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TagIcon from '@mui/icons-material/Tag';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../../assets/logo.png';

interface Props {
    activeItem: string;
    username: string;
    pp?: string;
}

const pages = [
    {name: 'Home', icon: <HomeIcon fontSize="medium" />},
    {name: 'Notifications', icon: <NotificationsIcon fontSize="medium" />},
    {name: 'Explore', icon: <TagIcon fontSize="medium" />}
];
const settings = ['Profile', 'Logout'];

const NavBar: FC<Props> = ({ activeItem, username, pp }) => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    return (
        <AppBar position="sticky" sx={{ bgcolor: '#FFFFFF', color: '#000000' }}>
            <Container sx={{ width: { md: '42rem' } }}>
                <Toolbar disableGutters>
                    <Link
                        href='/'
                        sx={{
                            textDecoration: 'none',
                            p: 0,
                            minHeight: '3rem'
                            // marginLeft: '.3rem'
                        }}>
                        <Box
                            component='img'
                            sx={{
                                maxWidth: { xs: '4rem', sm: '5.5rem', md: '5rem' },
                                m: 0,
                                mt: 1,
                                p: 0,
                            }}
                            src={Logo}
                            alt='Logo'
                        />
                    </Link>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                                color: '#000000'
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.name} onClick={handleCloseNavMenu} sx={{ color: '#000000' }}>
                                    <Typography textAlign="center">{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, color: '#000000', ml: 2, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                        // <Button
                        //     key={page}
                        //     onClick={handleCloseNavMenu}
                        //     sx={{ my: 2, color: '#000', display: 'block' }}
                        // >
                        //     {page}
                        // </Button>
                            <IconButton
                                key={page.name}
                                aria-label={page.name}
                                sx={{
                                    color: activeItem === page.name ? '#000000' : 'rgba(128, 128, 128, 1)',
                                    mx: 1,
                                    '&:hover': {
                                        color: '#000000'
                                    }
                                }}
                                size="large"
                            >
                                {page.icon}
                            </IconButton>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar
                                    sx={{ bgcolor: '#374151' }}
                                    alt={username}
                                    src={pp ? pp : ''}
                                />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;