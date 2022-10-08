import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-toastify/dist/ReactToastify.min.css';

import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { StoreProvider } from 'mobx/stores/store-context';
import { startRouter } from 'mobx-router';
import { ToastContainer } from 'react-toastify';

import { App } from 'components/App';
import routes from './config/routes';
import store from './mobx/stores/RootStore';
import { theme } from 'config/ui/themes/default';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiConfig } from 'wagmi';
import { wagmiClient, chains } from './config/wallet';

startRouter(routes, store, {
  html5history: true,
  // reason: package does not recognize the prop but is described in the type definition and in the docs
  // https://github.com/kitze/mobx-router#custom-director-configuration
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  notfound: () => store.router.goTo(routes.notFound),
});

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container!);
root.render(
  <StoreProvider value={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <App />
        </RainbowKitProvider>
      </WagmiConfig>
      <ToastContainer position="bottom-right" newestOnTop={true} closeOnClick theme="dark" draggable />
    </ThemeProvider>
  </StoreProvider>,
);