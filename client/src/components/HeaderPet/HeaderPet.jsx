import React, { useEffect, useState } from 'react';
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
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';
import './HeaderPet.css';
import styles from './styles';

const pages = ['Found Pets', 'Lost Pets', 'Adoption Pets', 'Match Pets'];
const settings = ['Profile', 'Logout'];

const HeaderPet = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [letter, setLetter] = useState("");
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

  const handleMenuOptionClick = (setting) => () => {
    setting === 'Logout' ? logOut() : navigate('/profile');
    setAnchorElUser(null);
  }

  useEffect(() => {
    setLetter(JSON.parse(localStorage.getItem('username'))[0].toUpperCase());
  },[]);

  return (
    <AppBar position='sticky'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={styles.typography_toolbar}
          >
            <Link to='/'>
              <img
                width={'45px'}
                height={'45px'}
                src='https://cdn-icons-png.flaticon.com/512/1076/1076826.png'
              />
            </Link>
          </Typography>

          <Box sx={styles.box}>
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
              sx={styles.menu_appbar}
            >
              {pages.map((page, index) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>
                    <Link
                      key={index}
                      className='nav-link'
                      to={`/${page.replace(' ', '-').toLowerCase()}/1`}
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
            sx={styles.typography}
          >
            <Link to='/'>
              <img
                width={'45px'}
                height={'45px'}
                src='https://cdn-icons-png.flaticon.com/512/1076/1076826.png'
              />
            </Link>
          </Typography>
          <Box sx={styles.box_pages}>
            {pages.map((page, index) => (
              <Link
                key={index}
                className="nav-link"
                to={`/${page.replace(' ', '-').toLowerCase()}/1`}
              >
                <Button
                  className='header-button'
                  key={`${page}`}
                  onClick={handleCloseNavMenu}
                  sx={styles.button_link}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
          <Box sx={styles.box_toolTip}>
            <Tooltip title='Open settings'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar sx={{ bgcolor: 'orange'}}>{letter}</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={styles.menu_user}
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
                <MenuItem key={setting} onClick={handleMenuOptionClick(setting)}>
                  <Typography key={index} textAlign='center'>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default HeaderPet;