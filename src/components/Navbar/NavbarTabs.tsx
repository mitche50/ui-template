import { makeStyles, Tab, Tabs, useMediaQuery, useTheme } from '@material-ui/core';
import { StoreContext } from 'mobx/stores/store-context';
import { observer } from 'mobx-react-lite';
import { Route } from 'mobx-router';
import React, { useContext, useState } from 'react';

import routes from '../../config/routes';
import { RootStore } from '../../mobx/stores/RootStore';

const useStyles = makeStyles({
  tab: {
    minWidth: 90,
    width: 90,
  },
  indicator: {
    width: 90,
    minWidth: 90,
  },
});

// const getRootPath = (path: string) => '/';

// const routeTabMapping = new Map(
//   Object.entries({
//     [getRootPath(routes.home.path)]: 0,
//   }),
// );

export const NavbarTabs = observer((): JSX.Element => {
  const { router } = useContext(StoreContext);
  const [selectedTab, setSelectedTab] = useState(0);
  const classes = useStyles();
  const isMobile = useMediaQuery(useTheme().breakpoints.down('xs'));
  const goToTab = (route: Route<RootStore>) => {
    router.goTo(route, {});
  };

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <Tabs
      variant={isMobile ? 'fullWidth' : undefined}
      textColor="primary"
      indicatorColor="primary"
      value={selectedTab}
      onChange={handleChange}
      classes={{ indicator: classes.indicator }}
    >
      <Tab classes={{ root: classes.tab }} label="HOME" onClick={() => goToTab(routes.home)} />
    </Tabs>
  );
});
