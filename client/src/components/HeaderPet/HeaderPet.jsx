<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
=======
import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from '@mui/material';
>>>>>>> 42c35f536dbc5f8ecdfe00af1798381f3c16baa1
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';
import './HeaderPet.css';

const pages = ['Found Pets', 'Lost Pets', 'Adoption'];
const settings = ['Profile', 'Logout'];

const HeaderPet = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();
  const { logOut } = useToken();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

<<<<<<< HEAD
  const handleMenuOptionClick = (setting) => () => {
    setting === 'Logout' ? logOut() : navigate('/profile');
  }
=======
  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignUpClick = () => {
    navigate('/sign-up');
  };
>>>>>>> 42c35f536dbc5f8ecdfe00af1798381f3c16baa1

  return (
    <AppBar position='sticky'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <img
              width={'45px'}
              height={'45px'}
              src='https://cdn-icons-png.flaticon.com/512/1076/1076826.png'
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
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
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>
                    <Link
                      key={index}
                      className='nav-link'
                      to={`/${page.replace(' ', '-').toLocaleLowerCase()}`}
                    >
                      {page}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <Link to='/'>
              <img
                width={'45px'}
                height={'45px'}
                src='https://cdn-icons-png.flaticon.com/512/1076/1076826.png'
              />
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Link
                key={index}
<<<<<<< HEAD
                className='nav-link'
=======
                className="nav-link"
>>>>>>> 42c35f536dbc5f8ecdfe00af1798381f3c16baa1
                to={`/${page.replace(' ', '-').toLocaleLowerCase()}`}
              >
                <Button
                  className='header-button'
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
<<<<<<< HEAD
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title='Open settings'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px', float: 'right' }}
              id='menu-appbar'
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
              {settings.map((setting, index) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography key={index} textAlign='center' onClick={handleMenuOptionClick(setting)}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
=======

          {!token && (
            <Box>
              <Button
                sx={{ m: 1 }}
                color="secondary"
                variant="contained"
                onClick={handleLoginClick}
              >
                Login
              </Button>
              <Button
                sx={{ m: 1 }}
                color="secondary"
                variant="contained"
                onClick={handleSignUpClick}
              >
                Register
              </Button>
            </Box>
          )}

          {token && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px', float: 'right' }}
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
                {settings.map((setting, index) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography key={index} textAlign="center">
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
>>>>>>> 42c35f536dbc5f8ecdfe00af1798381f3c16baa1
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default HeaderPet;
