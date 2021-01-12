import * as React from 'react';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, IconButton, Typography, Badge, Tooltip, MenuItem, Menu }from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreIcon from '@material-ui/icons/MoreVert';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import API from '../../utils/API';


interface currentUserProps {
  currentUser: boolean,
  currentUserData: any
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appbar: {
      backgroundColor: '#a5aaab'
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 10,
      width: '50%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    appBarLinkWhite: {
      textDecoration: "none",
      color: "white !important"
    },
    appBarLinkBlack: {
      textDecoration: "none",
      color: "black !important"
    }
  }),
);

// export default function PrimarySearchAppBar() {
export default function PrimarySearchAppBar({currentUser, currentUserData}: currentUserProps) {
  console.log('appbar.tsx currentUser', currentUser)
  console.log('Appbar.tsx currentUserData.username', currentUserData.username)
  const history = useHistory();

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  //TODO: move to app.tsx and pass down 
  const logOut = (e: React.FormEvent<SVGSVGElement>) : boolean => {
    history.push('/');
    API.logout()
    .then(req =>{
      history.push('/')
    })
    return true;
    
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge 
            badgeContent={4} 
            color="secondary"
            max={999}
          >
            <FavoriteIcon />
          </Badge>
        </IconButton>
        <p>Favorites</p>
      </MenuItem>
      <MenuItem >
      
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Tooltip title="New Account" aria-label="New Account">
            <Link to="/user" className={classes.appBarLinkBlack}>
              <AccountCircle/>
            </Link>
          </Tooltip>
        </IconButton>
        <p>New Account</p>
        
      </MenuItem>
      
      {currentUser? <MenuItem>
        <IconButton
          aria-label="logout"
          aria-controls={menuId}
          aria-haspopup="true"
          color="inherit"
        >
          <Tooltip title="Logout" aria-label="Logout">
            <ExitToAppIcon onClick={logOut}/>
          </Tooltip>
        </IconButton>
        <p>Logout</p>
      </MenuItem> : <MenuItem>
        <IconButton
          aria-label="login"
          aria-controls={menuId}
          aria-haspopup="true"
          color="inherit"
        >
          <Tooltip title="Login" aria-label="Login">
            <Link to="/login" className={classes.appBarLinkBlack}>
              <VpnKeyIcon />
            </Link>
          </Tooltip>
        </IconButton>
        <p>Login</p>
      </MenuItem>}
      
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar 
        position="fixed"
        className={classes.appbar}
      >
        <Toolbar>
          <IconButton aria-label="show 4 new mails" color="inherit">
                  <Link  to="/" className={classes.appBarLinkWhite} ><HomeIcon/></Link>
          </IconButton>
          <Typography 
              
            noWrap
          >
            <Link to="/" className={classes.appBarLinkWhite}><h3>suP?</h3></Link>
          </Typography>
          {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="find..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div> */}
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          {currentUser? <Typography noWrap><p>welcome back...{currentUserData.username}!</p></Typography>: <Typography noWrap><p>...welcome to suP!</p></Typography>}
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <FavoriteIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <Tooltip title="New Account" aria-label="New Account">
                <Link to="/user" className={classes.appBarLinkWhite}>
                  <AccountCircle/>
                </Link>
              </Tooltip>
            </IconButton>
            {currentUser?   <IconButton
              edge="end"
              aria-label="logout"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <Tooltip title="Logout" aria-label="Logout">
                <ExitToAppIcon onClick={logOut}/>
              </Tooltip> 
            </IconButton> :
            <IconButton
            edge="end"
            aria-label="login"
            aria-controls={menuId}
            aria-haspopup="true"
            color="inherit"
          >
            <Tooltip title="Login" aria-label="Login">
              <Link to="/login" className={classes.appBarLinkWhite}>
                <VpnKeyIcon />
              </Link>
            </Tooltip>
            </IconButton> }
          </div>
          <div className={classes.sectionMobile}>
            {currentUser? <Typography noWrap><p >welcome back...{currentUserData.username}!</p></Typography>: <Typography noWrap><p>...welcome to suP!</p></Typography>}
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
