import { Grid, IconButton, makeStyles } from '@material-ui/core';
import { StoreContext } from 'mobx/stores/store-context';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const useStyles = makeStyles({
  menuIcon: {
    margin: -12,
    marginRight: 17,
  },
  mainIcon: {
    width: '28px',
    height: '28px',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
    '& button': {
      height: 37,
    },
  },
});

export const NavbarMobileRow = observer((): JSX.Element => {
  const { uiState } = useContext(StoreContext);
  const classes = useStyles();
  return (
    <Grid container justifyContent="space-between">
      <Grid item xs container alignItems="center">
        <IconButton className={classes.menuIcon} onClick={() => uiState.openSidebar()}>
          <img src="/assets/icons/mobile-drawer-icon.svg" alt="open menu" />
        </IconButton>
        <img className={classes.mainIcon} src="/assets/icons/logo.png" alt="Main Logo" />
      </Grid>
      <Grid item container xs={8} className={classes.buttons} spacing={2}>
        <Grid item>
          <ConnectButton showBalance={false} accountStatus={'address'} />
        </Grid>
      </Grid>
    </Grid>
  );
});
