import { Grid, makeStyles } from '@material-ui/core';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import React from 'react';

const useStyles = makeStyles({
  root: {
    width: 'calc(100% + 18px)',
    margin: '-18px 0 0 -18px',
    '& > *': {
      margin: '18px 0 0 18px',
    },
    '& button': {
      height: 41,
    },
  },
});

export const NavbarButtons = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} justifyContent="flex-end">
      <Grid item>
        <ConnectButton showBalance={false} accountStatus={'address'} />
      </Grid>
    </Grid>
  );
};
