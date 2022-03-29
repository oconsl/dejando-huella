import { useEffect, useState } from 'react';
// ROUTER
import { Link, useNavigate, NavLink } from 'react-router-dom';
// MATERIAL UI
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
// MATERIAL ICONS
import MenuIcon from '@mui/icons-material/Menu';
// HOOKS
import useToken from '../../hooks/useToken';
// STYLES
import styles from './styles';
// PAGE ARRAYS
const pages = ['Found', 'Lost', 'Adoption', 'Testimony'];
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
    <AppBar position='sticky' sx={styles.appBar}>
      <Container maxWidth='xl' sx={styles.container}>
        <Toolbar disableGutters sx={styles.toolbar}>
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
                style={styles.img}
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
                  <Typography textAlign='center' onClick={(() => navigate(`/${page.toLowerCase()}-pets/1`))}>
                      {page}
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
                <Button
                  // className={classes.button}
                  component={NavLink}
                  to={`/${page.toLowerCase()}-pets/1`}
                  className={styles.button_link}
                  key={`${page}`}
                  sx={styles.button_link}
                  onClick={() => {
                    handleCloseNavMenu();
                    // navigate(`/${page.toLowerCase()}-pets/1`)
                  }}
                >
                  {page}
                </Button>
            ))}
          </Box>
          <Box sx={styles.box_toolTip}>
            <Tooltip title='Open settings'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar sx={styles.avatar}>{letter}</Avatar>
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
                <MenuItem key={setting} sx={styles.menuItem} onClick={handleMenuOptionClick(setting)}>
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