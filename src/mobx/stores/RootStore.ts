import { makeObservable } from 'mobx';
import { RouterStore } from 'mobx-router';

import UiStateStore from './UiStore';

export class RootStore {
  // Router
  public router: RouterStore<RootStore>;

  // Stores
  public uiState: UiStateStore;

  constructor() {
    this.router = new RouterStore<RootStore>(this);
    this.uiState = new UiStateStore();
    makeObservable(this, {});
  }
}

const store = new RootStore();

export default store;
