import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {
    AppBar, Avatar, Badge, Box, Button, Container,
    IconButton, Menu, MenuItem, Toolbar, Tooltip,
    Typography
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import MenuIcon from '@mui/icons-material/Menu'


// reducer
import { emptyCart, setAvatar, setName, setRole, setToken } from '../reducer'

export default function NavUI() {
    // dispatch hook
    const dispatch = useDispatch()
    // navigate hook
    const navigate = useNavigate()
    // get cart, name and avatar from store
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
        dispatch(emptyCart())
        navigate('/')
    }

    return (
        <AppBar color="secondary" position="fixed">
            <Container   maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography variant="h6" noWrap component={Link} to="/" sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontWeight: 600, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none' }}>
                        <img src="img/nav.png" alt="nav" style={{ height: 35}} />
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
                        <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
                            <MenuIcon />
                        </IconButton>
                        <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'left' }} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{ display: { xs: 'block', md: 'none' } }}>
                        </Menu>
                    </Box>
                    <Typography component={Link} to="/" variant="h5" noWrap sx={{ mr: 2, display: { xs: 'flex', md: 'none' }, flexGrow: 1, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none', }}>
                        MEDILAB
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button component={Link} to="/about" onClick={handleCloseNavMenu} sx={{ my: 2, color: 'cyan', display: 'block', fontFamily: 'Raleway' }}>
                            Nosotros
                        </Button>
                        <Button component={Link} to="/faq" onClick={handleCloseNavMenu} sx={{ my: 2, color: 'cyan', display: 'block', fontFamily: 'Raleway' }}>
                            FAQ
                        </Button>
                    </Box>
                    <Box>
                        <IconButton component={Link} to="/search" size="large" color="secondary" sx={{ width: '48px', margin: '10px 4px', color: 'white'}}>
                            <Badge color="error">
                                <SearchIcon />
                            </Badge>
                        </IconButton>
                        <IconButton component={Link} to="/cart" size="large" color="secondary" sx={{ width: '48px', margin: '10px 4px', color: 'white'}}>
                            <Badge badgeContent={onCart} color="error">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                    </Box>
                    <Typography onClick={handleCloseNavMenu} sx={{ marginRight: 1, fontFamily: 'Raleway', color:"white"}}>
                        {name}
                    </Typography>
                    {name ? <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt={name} referrerPolicy="no-referrer" src={avatar} />
                            </IconButton>
                        </Tooltip>
                        <Menu sx={{ mt: '45px' }} id="menu-appbar" anchorEl={anchorElUser} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={Boolean(anchorElUser)} onClose={handleCloseUserMenu}>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography component={Link} to="/dashboard" textAlign="center" sx={{ textDecoration: 'none', color: 'inherit' }}>
                                    Dashboard
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography onClick={handleLogout} textAlign="center">
                                    Logout
                                </Typography>
                            </MenuItem>
                        </Menu>
                    </Box> : <Button component={Link} to="/signup" onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                        Sign In
                    </Button>}
                </Toolbar>
            </Container>
        </AppBar >
    )
}
