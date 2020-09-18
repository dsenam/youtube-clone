import React from 'react';
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Button,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Box,
  Grid,
  Hidden,
  Switch,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

import Apps from '@material-ui/icons/Apps';
import MoreVert from '@material-ui/icons/MoreVert';
import VideoCall from '@material-ui/icons/VideoCall';

import HomeIcon from '@material-ui/icons/Home';
import Subscriptions from '@material-ui/icons/Subscriptions';
import Whatshot from '@material-ui/icons/Whatshot';

import VideoLibrary from '@material-ui/icons/VideoLibrary';
import History from '@material-ui/icons/History';

import AddCircle from '@material-ui/icons/AddCircle';

// import { Container } from './styles';

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
      backgroundColor: theme.palette.background.dark,
    },
    appBar: {
      boxShadow: 'none',
      zIndex: theme.zIndex.drawer + 1,
    },
    logo: {
      height: 25,
    },
    drawer: {
      width: 240,
      flexShrink: 0,
    },
    drawerPaper: {
      width: 240,
      borderRight: 'none',
    },
    menuIcon: {
      paddingRight: theme.spacing(5),
      paddingLeft: theme.spacing(6),
    },
    icons: {
      paddingRight: theme.spacing(5),
    },
    grow: {
      flexGrow: 1,
    },
    listItemText: {
      fontSize: 14,
    },
    listItem: {
      paddingTop: 4,
      paddingBottom: 4,
    },
    subheader: {
      textTransform: 'uppercase',
    },
  }));

function Sidebar() {
const classes = useStyles();

  return (
    <div className={classes.root}>
    <Box display='flex'>
    <Hidden mdDown>
      <Drawer
        className={classes.drawer}
        variant='permanent'
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>{<HomeIcon />}</ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={'Início'}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>{<Whatshot />}</ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={'Em alta'}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>{<Subscriptions />}</ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={'Inscrições'}
              />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <VideoLibrary />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={'Biblioteca'}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <History />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={'Histórico'}
              />
            </ListItem>
          </List>
          <Divider />
          <Box p={7}>
            <Typography variant='body2'>
              Faça login para curtur vídeos, comentar e se inscrever.
            </Typography>
            <Box mt={2}>
              <Button
                variant='outlined'
                color='secondary'
                startIcon={<AccountCircle />}
              >
                Fazer login
              </Button>
            </Box>
          </Box>
          <Divider />
          <List
            component='nav'
            aria-labelledby='nested-list-subheader'
            subheader={
              <ListSubheader
                component='div'
                id='nested-list-subheader'
                className={classes.subheader}
              >
                O Melhor do youtube
              </ListSubheader>
            }
          >
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircle />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={'Música'}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircle />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={'Esportes'}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircle />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={'Jogos'}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircle />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={'Filmes'}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircle />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={'Notícias'}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircle />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={'Ao vivo'}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircle />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={'Destaques'}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircle />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={'Videos 360'}
              />
            </ListItem>
          </List>
          <Divider />
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>
              <AddCircle />
            </ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={'Procurar mais'}
            />
          </ListItem>
          <Divider />
        </div>
      </Drawer>
    </Hidden>
    </Box>
</div>
  );
}

export default Sidebar;