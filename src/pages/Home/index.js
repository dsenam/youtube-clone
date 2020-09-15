import React from 'react';
import {makeStyles, AppBar, Toolbar, IconButton,  Typography, Button} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'

import Apps from '@material-ui/icons/Apps'
import MoreVert from '@material-ui/icons/MoreVert'
import VideoCall from '@material-ui/icons/VideoCall'

// import { Container } from './styles';
const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh'
    },
    appBar: {
        boxShadow: 'none'
    },
    menuIcon: {
        marginLeft: theme.spacing(6),
        marginRight: theme.spacing(4)
    },
    icons: {
        marginRight: theme.spacing(5)
    },
    logo: {
        height: 25
    },
    grow: {
        flexGrow: 1
    }
  }))


function Home() {
const classes = useStyles()
  return <div className={classes.root}>
      <AppBar color="inherit" className={classes.appBar}>
  <Toolbar>
    <IconButton edge="start" className={classes.menuIcon} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <img src="/images/preto.png" alt='logo' className={classes.logo}/>
    <div className={classes.grow}/>
    <IconButton  className={classes.icons} color="inherit" >
      <VideoCall />
    </IconButton>
    <IconButton  className={classes.icons} color="inherit" >
      <Apps />
    </IconButton>
    <IconButton  className={classes.icons} color="inherit" >
      <MoreVert />
    </IconButton>
    <Button variant="outlined" color="secondary" startIcon={<AccountCircle />}>Fazer Login
    
    </Button>
  </Toolbar>
</AppBar>
  </div>;
}

export default Home;