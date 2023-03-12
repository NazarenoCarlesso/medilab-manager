import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAvatar, setName, setRole, setToken } from '../reducer';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import './UIStyles.css'

export default function NavUI() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onCart = useSelector((state) => state.cart.length)
    const name = useSelector((state) => state.name)
    const avatar = useSelector((state) => state.avatar)

    const [anchorElNav, setAnchorElNav] = React.useState(null)
    const [anchorElUser, setAnchorElUser] = React.useState(null)

    const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget)

    const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget)

    const handleCloseNavMenu = () => setAnchorElNav(null)

    const handleCloseUserMenu = () => setAnchorElUser(null)

    const handleLogout = () => {
        dispatch(setToken(undefined))
        dispatch(setName(undefined))
        dispatch(setRole(undefined))
        dispatch(setAvatar(undefined))
        navigate('/home');
    }

    return (
        <AppBar position="fixed">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography variant="h6" noWrap component={Link} to="/" sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontWeight: 600, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none' }}>
                        <img src="img/nav.png" alt="nav" style={{ height: 35 }} />
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
                            <MenuIcon />
                        </IconButton>
                        <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'left' }} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{ display: { xs: 'block', md: 'none' } }}>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography component={Link} to="/home" textAlign="center">
                                    Home
                                </Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Typography variant="h5" noWrap component="a" href="" sx={{ mr: 2, display: { xs: 'flex', md: 'none' }, flexGrow: 1, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none', }}>
                        MEDILAB
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button component={Link} to="/home" onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                            Home
                        </Button>
                        <Button component={Link} to="/signup" onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                            Sign In
                        </Button>
                        <IconButton component={Link} to="/search" size="large" color="inherit">
                            <Badge color="error">
                                <SearchIcon />
                            </Badge>
                        </IconButton>
                        <IconButton component={Link} to="/cart" size="large" color="inherit">
                            <Badge badgeContent={onCart} color="error">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                    </Box>
                    <Typography onClick={handleCloseNavMenu} sx={{ marginRight: 1 }}>
                        {name ? name : null}
                    </Typography>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt={name ? name : null} referrerPolicy="no-referrer" src={avatar} />
                            </IconButton>
                        </Tooltip>
                        <Menu sx={{ mt: '45px' }} id="menu-appbar" anchorEl={anchorElUser} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={Boolean(anchorElUser)} onClose={handleCloseUserMenu}>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography component={Link} to="/user/profile" textAlign="center" sx={{ textDecoration: 'none', color: 'inherit' }}>
                                    Profile
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography component={Link} to="/user/profile" textAlign="center" sx={{ textDecoration: 'none', color: 'inherit' }}>
                                    Dashboard
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography onClick={handleLogout} textAlign="center">
                                    Logout
                                </Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
}
