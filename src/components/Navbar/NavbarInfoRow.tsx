import { Grid, makeStyles } from '@material-ui/core';

import { NavbarSocialContact } from './NavbarSocialContact';

const useStyles = makeStyles(() => ({
  iconContainer: {
    width: 51,
    height: 28,
    paddingRight: 23,
    cursor: 'pointer',
  },
  mainIcon: {
    width: '28px',
    height: '28px',
  },
}));

export const NavbarInfoRow = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid container alignItems="center" justifyContent="space-between">
      <Grid item container xs={9} md={8} lg={9} alignItems="center">
        <Grid item className={classes.iconContainer}>
          <img className={classes.mainIcon} alt="Main Logo" src={'/assets/icons/logo.png'} />
        </Grid>
      </Grid>
      <Grid item container xs justifyContent="flex-end">
        <NavbarSocialContact />
      </Grid>
    </Grid>
  );
};
