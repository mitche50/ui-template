import { Grid, Link, makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';

const useStyles = makeStyles(() => ({
  socialIcon: {
    height: '14px',
    width: '14px',
    cursor: 'pointer',
  },
  iconContainer: {
    display: 'flex',
  },
  twitter: {
    margin: '0px 16px 0px 8px',
  },
  governance: {
    margin: '0px 18px',
  },
}));

export const NavbarSocialContact = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Grid container alignItems="center" justifyContent="flex-end">
      <Grid item className={classes.iconContainer}>
        <img className={classes.socialIcon} alt="Discord Icon" src="/assets/icons/discord.svg" />
      </Grid>
      <Grid item className={clsx(classes.iconContainer, classes.twitter)}>
        <img
          onClick={() => window.open('https://twitter.com/mitche50', '_blank')}
          className={classes.socialIcon}
          alt="Twitter Icon"
          src="/assets/icons/twitter.svg"
        />
      </Grid>
      <Grid item>
        <Typography variant="subtitle1">
          <Link color="inherit" href="https://gitbook.com" target="_blank" rel="noopener">
            DOCS
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};
