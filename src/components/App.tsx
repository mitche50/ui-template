import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { StoreContext } from 'mobx/stores/store-context';
import { MobxRouter } from 'mobx-router';
import React, { useContext } from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

const useStyles = makeStyles((theme) => ({
    rootContainer: {
        height: '100vh',
    },
    flexContainer: {
        display: 'flex',
        flexGrow: 1,
        maxHeight: '100%',
    },
    columnContainer: {
        flexDirection: 'column',
    },
    rowContainer: {
        flexDirection: 'row',
    },
    contentContainer: {
        display: 'flex',
        flexGrow: 1,
    },
    content: {
        overflow: 'auto',
        paddingBottom: theme.spacing(6),
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
    appContainer: {
        overflow: 'auto',
    },
}));

export const App = (): JSX.Element => {
    const classes = useStyles();
    const store = useContext(StoreContext);

    return (
        <div className={clsx(classes.rootContainer, classes.flexContainer, classes.columnContainer)}>
            <div className={clsx(classes.appContainer, classes.flexContainer)}>
                <Sidebar />
                <main className={clsx(classes.contentContainer, classes.columnContainer)}>
                    <main className={classes.content}>
                        <Navbar />
                        <MobxRouter store={store} />
                    </main>
                </main>
            </div>
        </div>
    );
};
