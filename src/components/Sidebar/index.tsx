import { Drawer, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import routes from 'config/routes';
import { StoreContext } from 'mobx/stores/store-context';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import Menu from '../common/Menu';
import MenuItem from '../common/MenuItem';
import MenuItemText from '../common/MenuItemText';
import MenuItemIcon from '../common/MenuItemIcon';

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    background: '#3a3a3a',
    [theme.breakpoints.down('sm')]: {
      width: 315,
    },
    [theme.breakpoints.down('xs')]: {
      width: 291,
    },
  },
  socialsContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    paddingLeft: 16,
  },
  socialIcon: {
    height: 14,
    width: 14,
    cursor: 'pointer',
    marginRight: 8,
  },
}));

const Sidebar = observer(() => {
  const classes = useStyles();
  const store = useContext(StoreContext);
  const {
    uiState: { sidebarOpen, closeSidebar },
  } = store;

  return (
    <Drawer
      variant="temporary"
      anchor="left"
      open={sidebarOpen}
      onClose={() => closeSidebar()}
      classes={{
        paper: classes.drawerPaper,
      }}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      disableEnforceFocus
    >
      <Menu disablePadding>
        <MenuItem>
          <MenuItemText>
            <Typography variant="h5">Menu</Typography>
          </MenuItemText>
          <MenuItemIcon>
            <IconButton onClick={() => closeSidebar()}>
              <CloseIcon />
            </IconButton>
          </MenuItemIcon>
        </MenuItem>
        <MenuItem button onClick={() => store.router.goTo(routes.home)}>
          Home
        </MenuItem>
      </Menu>
    </Drawer>
  );
});

export default Sidebar;
